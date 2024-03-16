import { test, expect } from '@playwright/test';


let context: any;
let page: any;
let URL = [
    'https://demo.applitools.com/',
    'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
];


test.beforeAll('Setup', async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
});


test.afterAll('Close resourse', async () => {
    // await page.pause();
    await page.close();
});


// group different website login


test('validate first URL', async ({ }) => {
    await page.goto(URL[0]);
    await page.getByPlaceholder('Enter your username').click();
    await page.getByPlaceholder('Enter your username').fill('admin');
    await page.getByPlaceholder('Enter your username').press('Tab');
    await page.getByPlaceholder('Enter your password').fill('admin');
    await page.getByLabel('Remember Me').check();
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.pause();
    await page.locator('.menu-w > .logged-user-w').click();
    await page.getByText('Jack Gomez').click();
});


test.only('validate second URL', async ({ }) => {
    await page.goto(URL[1]);
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('button', { name: '' }).click();
    await page.getByRole('link', { name: 'Admin' }).click();

    await page.getByRole('img', { name: 'profile picture' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
});