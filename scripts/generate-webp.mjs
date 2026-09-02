import fs from 'node:fs/promises';
import path from 'node:path';
import imageminWebp from 'imagemin-webp';

const assetsDir = path.resolve('dist/assets');

const webp = imageminWebp({
	quality: 80,
});

async function getImages(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const files = [];

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			files.push(...(await getImages(fullPath)));
			continue;
		}

		if (/\.(jpe?g|png)$/i.test(entry.name)) {
			files.push(fullPath);
		}
	}

	return files;
}

const images = await getImages(assetsDir);

let generated = 0;
let skipped = 0;
let originalTotal = 0;
let webpTotal = 0;

for (const imagePath of images) {
	const buffer = await fs.readFile(imagePath);
	const result = await webp(buffer);

	const originalSize = buffer.length;
	const webpSize = result.length;

	originalTotal += originalSize;

	const webpPath = imagePath.replace(/\.(jpe?g|png)$/i, '.webp');

	if (webpSize >= originalSize) {
		skipped++;

		console.log(
			`${path.basename(imagePath)} → skipped | ` +
				`${(originalSize / 1024).toFixed(1)} KB → ` +
				`${(webpSize / 1024).toFixed(1)} KB`
		);

		continue;
	}

	await fs.writeFile(webpPath, result);

	generated++;
	webpTotal += webpSize;

	const reduction = ((1 - webpSize / originalSize) * 100).toFixed(1);

	console.log(
		`${path.basename(imagePath)} → ${path.basename(webpPath)} | ` +
			`${(originalSize / 1024).toFixed(1)} KB → ` +
			`${(webpSize / 1024).toFixed(1)} KB | ` +
			`-${reduction}%`
	);
}

const saved = originalTotal - webpTotal;
const totalReduction =
	originalTotal > 0 ? ((saved / originalTotal) * 100).toFixed(1) : '0.0';

console.log('\n--------------------------------');
console.log(`Source images: ${images.length}`);
console.log(`WebP generated: ${generated}`);
console.log(`Skipped: ${skipped}`);
console.log(`Original size: ${(originalTotal / 1024 / 1024).toFixed(2)} MB`);
console.log(`WebP size: ${(webpTotal / 1024 / 1024).toFixed(2)} MB`);
console.log(
	`Saved: ${(saved / 1024 / 1024).toFixed(2)} MB (-${totalReduction}%)`
);
console.log('--------------------------------');
