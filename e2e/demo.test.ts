import { expect, test } from '@playwright/test';

/*function layoutTests() {
	// Placeholder for layout checking logic
}*/

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('hr')).toBeVisible();
});
