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
