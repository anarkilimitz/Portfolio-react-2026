const { spawn, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const phpHost = process.env.PHP_HOST || '127.0.0.1';
const phpPort = process.env.PHP_PORT || '8000';
const backendUrl = `http://${phpHost}:${phpPort}`;
const reactScriptsStart = require.resolve('react-scripts/scripts/start.js');

function isWorkingPhp(command) {
	if (!command) {
		return false;
	}

	if (path.isAbsolute(command) && !fs.existsSync(command)) {
		return false;
	}

	const probe = spawnSync(command, ['-v'], { stdio: 'ignore' });
	return !probe.error && probe.status === 0;
}

function compareVersions(left, right) {
	const leftParts = left.split('.').map(Number);
	const rightParts = right.split('.').map(Number);
	const length = Math.max(leftParts.length, rightParts.length);

	for (let index = 0; index < length; index += 1) {
		const leftPart = leftParts[index] ?? 0;
		const rightPart = rightParts[index] ?? 0;

		if (leftPart !== rightPart) {
			return rightPart - leftPart;
		}
	}

	return 0;
}

function collectPhpCandidates() {
	const candidates = [];

	if (process.env.PHP_BIN) {
		candidates.push(process.env.PHP_BIN);
	}

	candidates.push('php');

	const commonInstalls = [
		{
			baseDir: 'C:\\OSPanel\\modules',
			pattern: /^PHP-(\d+(?:\.\d+)*)(?:-FCGI)?$/i,
			buildPath: (entryName) => path.join('C:\\OSPanel\\modules', entryName, 'PHP', 'php.exe'),
		},
		{
			baseDir: 'C:\\MAMP\\bin\\php',
			pattern: /^php(\d+(?:\.\d+)*)$/i,
			buildPath: (entryName) => path.join('C:\\MAMP\\bin\\php', entryName, 'php.exe'),
		},
	];

	for (const { baseDir, pattern, buildPath } of commonInstalls) {
		if (!fs.existsSync(baseDir)) {
			continue;
		}

		const discovered = fs
			.readdirSync(baseDir, { withFileTypes: true })
			.filter((entry) => entry.isDirectory())
			.map((entry) => {
				const match = entry.name.match(pattern);
				if (!match) {
					return null;
				}

				return {
					path: buildPath(entry.name),
					version: match[1],
				};
			})
			.filter(Boolean)
			.sort((left, right) => compareVersions(left.version, right.version));

		for (const item of discovered) {
			candidates.push(item.path);
		}
	}

	return [...new Set(candidates)];
}

function resolvePhpBinary() {
	for (const candidate of collectPhpCandidates()) {
		if (isWorkingPhp(candidate)) {
			return candidate;
		}
	}

	return null;
}

const phpBinary = resolvePhpBinary();

if (!phpBinary) {
	console.error('[dev] Не удалось найти рабочий PHP.');
	console.error(
		'[dev] Укажи путь через PHP_BIN или поставь PHP в PATH. Например:'
	);
	console.error(
		"[dev] $env:PHP_BIN='C:\\OSPanel\\modules\\PHP-7.4\\PHP\\php.exe'; npm start"
	);
	process.exit(1);
}

let phpProcess = null;
let reactProcess = null;
let shuttingDown = false;

function killChild(child) {
	if (!child || child.killed) {
		return;
	}

	try {
		child.kill();
	} catch (error) {
		// Ignore shutdown errors, we are already exiting.
	}
}

function shutdown(exitCode = 0) {
	if (shuttingDown) {
		return;
	}

	shuttingDown = true;
	killChild(reactProcess);
	killChild(phpProcess);

	setTimeout(() => {
		process.exit(exitCode);
	}, 250).unref();
}

function startReactApp() {
	console.log(`[dev] CRA: http://localhost:3000`);
	console.log(`[dev] PHP backend: ${backendUrl}`);
	console.log(`[dev] PHP binary: ${phpBinary}`);

	reactProcess = spawn(process.execPath, [reactScriptsStart], {
		cwd: projectRoot,
		stdio: 'inherit',
		env: {
			...process.env,
			PHP_HOST: phpHost,
			PHP_PORT: phpPort,
		},
	});

	reactProcess.on('error', (error) => {
		console.error(`[dev] Не удалось запустить React: ${error.message}`);
		shutdown(1);
	});

	reactProcess.on('exit', (code, signal) => {
		if (shuttingDown) {
			return;
		}

		if (signal) {
			console.log(`[dev] React завершился по сигналу ${signal}`);
		}

		shutdown(typeof code === 'number' ? code : 0);
	});
}

phpProcess = spawn(phpBinary, ['-S', `${phpHost}:${phpPort}`, '-t', projectRoot], {
	cwd: projectRoot,
	stdio: 'inherit',
	env: {
		...process.env,
		PHP_HOST: phpHost,
		PHP_PORT: phpPort,
	},
});

phpProcess.on('error', (error) => {
	console.error(
		`[dev] Не удалось запустить PHP (${phpBinary}). ` +
			`Проверь, что PHP установлен и доступен в PATH, либо задай PHP_BIN.`
	);
	console.error(`[dev] ${error.message}`);
	shutdown(1);
});

phpProcess.on('spawn', startReactApp);

phpProcess.on('exit', (code, signal) => {
	if (shuttingDown) {
		return;
	}

	if (signal) {
		console.error(`[dev] PHP завершился по сигналу ${signal}`);
	} else {
		console.error(`[dev] PHP завершился с кодом ${code}`);
	}

	shutdown(typeof code === 'number' ? code : 1);
});

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));
