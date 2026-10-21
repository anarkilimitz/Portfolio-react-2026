import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default defineConfig([
	{
		ignores: ['dist/**', 'node_modules/**', 'public/**'],
	},

	// Browser: React + JavaScript + TypeScript
	{
		files: ['src/**/*.{js,jsx,ts,tsx}'],
		ignores: ['src/setupProxy.js'],
		extends: [js.configs.recommended, tseslint.configs.recommended],
		languageOptions: {
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
		},
		rules: {
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
		},
	},

	// Node.js scripts
	{
		files: ['scripts/**/*.{js,mjs}', 'src/setupProxy.js'],
		extends: [js.configs.recommended],
		languageOptions: {
			globals: globals.node,
		},
		rules: {
			'@typescript-eslint/no-require-imports': 'off',
		},
	},

	// Node.js config files
	{
		files: ['*.config.{js,mjs,cjs,ts,mts}'],
		extends: [js.configs.recommended, tseslint.configs.recommended],
		languageOptions: {
			globals: globals.node,
		},
	},
]);
