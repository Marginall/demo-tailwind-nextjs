import reactPlugin from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig, configDefaults } from 'vitest/config';

export default defineConfig({
	plugins: [tsconfigPaths(), reactPlugin()],
	test: {
		pool: 'vmThreads',
		poolOptions: {
			vmThreads: {
				memoryLimit: '450MB',
				useAtomics: true,
			},
		},
		globals: true,
		environment: 'jsdom',
		passWithNoTests: true,
		coverage: {
			enabled: false,
			all: false,
			provider: 'istanbul',
			reporter: ['json-summary', 'html'],
			exclude: getCoverageExclude(),
		},
		reporters: ['default', 'junit'],
		outputFile: { junit: './coverage/test-reports/report.xml' },
		setupFiles: ['./vitest.setup.ts'],
	},
});

function getCoverageExclude(): string[] {
	const defs = configDefaults.coverage.exclude || [];
	const project = [
		'next.config.js',
		'.cache/**',
		'.next/**',
		'.refs/**',
		'.tmp/**',
		'.turbo/**',
		'bin/**',
		'coverage/**',
		'out/**',
		'public/**',
		'storybook/**',
		'storybook-dist/**',
		'**/__fixtures__/**',
		'**/__specs__/**',
	];
	return defs.concat(project);
}
