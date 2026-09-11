import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import imageminWebp from 'imagemin-webp';

const assetsDir = path.resolve('dist/assets');
const distDir = path.resolve('dist');

const MAX_WIDTH = 1250;
const MAX_HEIGHT = 1250;

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

async function getTextFiles(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	const files = [];

	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);

		if (entry.isDirectory()) {
			files.push(...(await getTextFiles(fullPath)));
			continue;
		}

		if (/\.(js|css|html)$/i.test(entry.name)) {
			files.push(fullPath);
		}
	}

	return files;
}

const images = await getImages(assetsDir);

let generated = 0;
let skipped = 0;
let resized = 0;

let originalTotal = 0;
let finalTotal = 0;

const replacements = [];

for (const imagePath of images) {
	const buffer = await fs.readFile(imagePath);

	const metadata = await sharp(buffer).metadata();

	const originalSize = buffer.length;

	originalTotal += originalSize;

	let processedBuffer = buffer;
	let wasResized = false;

	if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
		processedBuffer = await sharp(buffer)
			.resize({
				width: MAX_WIDTH,
				height: MAX_HEIGHT,
				fit: 'inside',
				withoutEnlargement: true,
			})
			.toBuffer();

		wasResized = true;
		resized++;
	}

	const result = await webp(processedBuffer);

	const webpSize = result.length;

	const webpPath = imagePath.replace(/\.(jpe?g|png)$/i, '.webp');

	const relativePath = path.relative(assetsDir, imagePath);
	const relativeWebpPath = path.relative(assetsDir, webpPath);

	if (webpSize >= originalSize) {
		skipped++;
		finalTotal += originalSize;

		console.log(
			`${relativePath} → skipped | ` +
				`${(originalSize / 1024).toFixed(1)} KB → ` +
				`${(webpSize / 1024).toFixed(1)} KB`
		);

		continue;
	}

	await fs.writeFile(webpPath, result);

	generated++;
	finalTotal += webpSize;

	const reduction = ((1 - webpSize / originalSize) * 100).toFixed(1);

	const resizeInfo = wasResized
		? ` | resized to ${
				metadata.width > metadata.height
					? MAX_WIDTH
					: Math.round((metadata.width / metadata.height) * MAX_HEIGHT)
		  }px`
		: '';

	console.log(
		`${relativePath} → ${relativeWebpPath} | ` +
			`${(originalSize / 1024).toFixed(1)} KB → ` +
			`${(webpSize / 1024).toFixed(1)} KB | ` +
			`-${reduction}%${resizeInfo}`
	);

	replacements.push({
		originalPath: relativePath.replaceAll('\\', '/'),
		webpPath: relativeWebpPath.replaceAll('\\', '/'),
		originalName: path.basename(imagePath),
		webpName: path.basename(webpPath),
	});
}

console.log('\nReplacing image references...');

const textFiles = await getTextFiles(distDir);

let replacedReferences = 0;

for (const filePath of textFiles) {
	let content = await fs.readFile(filePath, 'utf8');
	let changed = false;

	for (const replacement of replacements) {
		const { originalName, webpName } = replacement;

		if (!content.includes(originalName)) {
			continue;
		}

		content = content.split(originalName).join(webpName);

		changed = true;
		replacedReferences++;
	}

	if (changed) {
		await fs.writeFile(filePath, content, 'utf8');
	}
}

console.log(`References replaced: ${replacedReferences}`);

console.log('\nRemoving original images...');

for (const replacement of replacements) {
	const originalPath = path.join(assetsDir, replacement.originalPath);

	try {
		await fs.unlink(originalPath);
	} catch (error) {
		if (error.code !== 'ENOENT') {
			throw error;
		}
	}
}

const saved = originalTotal - finalTotal;

const totalReduction =
	originalTotal > 0 ? ((saved / originalTotal) * 100).toFixed(1) : '0.0';

console.log('\n--------------------------------');
console.log(`Source images: ${images.length}`);
console.log(`WebP generated: ${generated}`);
console.log(`Resized: ${resized}`);
console.log(`Skipped: ${skipped}`);
console.log(`Original size: ${(originalTotal / 1024 / 1024).toFixed(2)} MB`);
console.log(`Final size: ${(finalTotal / 1024 / 1024).toFixed(2)} MB`);
console.log(
	`Saved: ${(saved / 1024 / 1024).toFixed(2)} MB (-${totalReduction}%)`
);
console.log('--------------------------------');
