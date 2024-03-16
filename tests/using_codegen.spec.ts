import { test, expect } from '@playwright/test';

test('test rockpaper', async ({ page }) => {
  await page.goto('https://shijoshaji.github.io/simple-Rockpaper/');
  // 
  await page.getByRole('heading', { name: 'Choose!' }).click();
  await page.getByRole('button', { name: 'Rock' }).click();

  // await page.close()

});

test('test quotes', async ({ page }) => {
  await page.goto('https://shijoshaji.github.io/random_Quote_or_Joke/');
  await page.getByText('Switch').click();
  await page.getByRole('button', { name: 'Get a Quote' }).click();
  await page.getByRole('button', { name: 'Get a Joke' }).click();
});



test('test Quiz', async ({ page }) => {
  await page.goto('https://shijoshaji.github.io/simpleAngularQuizApp/');
  await page.getByLabel('Close').click();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('playwright');
  await page.getByRole('button', { name: 'Start Quiz' }).click();
  await page.locator('li').filter({ hasText: ':' }).click();
  await page.locator('li').filter({ hasText: 'enum' }).click();
  await page.locator('li').filter({ hasText: 'Use interfaces.' }).click();
  await page.locator('li').filter({ hasText: 'number[]' }).click();
  await page.locator('li').filter({ hasText: 'constructor' }).click();
  await page.locator('li').filter({ hasText: 'async' }).click();
  await page.locator('li').filter({ hasText: 'export' }).click();
  await page.locator('li').filter({ hasText: 'map' }).click();
  await page.getByRole('button').first().click();
  await page.locator('li').filter({ hasText: 'filter' }).click();
  await page.locator('li').filter({ hasText: 'Using this.propertyName' }).click();
  await page.locator('img').nth(2).click();
  await page.getByText('Congrats!!! You have').click();
  await page.getByRole('link', { name: 'o ome' }).click();
});