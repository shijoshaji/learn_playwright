import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.applitools.com/app.html');
  await page.locator('.menu-w > .logged-user-w').click();
  await page.getByText('Jack Gomez').click();
});