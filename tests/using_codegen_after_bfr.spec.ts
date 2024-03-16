import { test, expect } from '@playwright/test';

let context: any;
let page: any;
let URL: any[];




// before
test.beforeAll('Setup', async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    URL = [
        'https://shijoshaji.github.io/simple-Rockpaper/',
        'https://shijoshaji.github.io/random_Quote_or_Joke/',
        'https://shijoshaji.github.io/simpleAngularQuizApp/'
    ];
});

// after
test.afterAll('Close resourse', async () => {
    await page.close();
});


test('test rockpaper', async ({ }) => {
    await page.goto(URL[0]);
    // 
    await page.getByRole('heading', { name: 'Choose!' }).click();
    await page.getByRole('button', { name: 'Rock' }).click();

    // await page.close()

});

test('test quotes', async ({ }) => {
    await page.goto(URL[1]);
    await page.getByText('Switch').click();
    await page.getByRole('button', { name: 'Get a Quote' }).click();
    await page.getByRole('button', { name: 'Get a Joke' }).click();
});



test('test Quiz', async ({ }) => {
    await page.goto(URL[2]);
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