const { expect, test } = require('@playwright/test');

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Welcome to Next.js!');
});
