import { defineConfig } from '@playwright/test';

const shouldSkipBuild = process.env.SKIP_BUILD === '1';
const command = shouldSkipBuild ? 'pnpm run preview' : 'pnpm run build && pnpm run preview';

export default defineConfig({
	webServer: {
		command,
		port: 4173
	},
	testDir: 'tests/e2e'
});
