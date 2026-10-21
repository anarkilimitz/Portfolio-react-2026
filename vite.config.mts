import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	plugins: [
		react(),
		visualizer({
			filename: './dist/stats.html',
			open: true,
			gzipSize: true,
			brotliSize: true,
		}),
	],

	server: {
		open: true,

		proxy: {
			'/news.php': 'http://127.0.0.1:8000',
			'/weather.php': 'http://127.0.0.1:8000',
			'/cities.php': 'http://127.0.0.1:8000',
			'/mailer': 'http://127.0.0.1:8000',
		},
	},

	build: {
		outDir: 'dist',
		emptyOutDir: true,
	},

	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: ['import', 'global-builtin', 'color-functions'],
			},
		},
	},
});
