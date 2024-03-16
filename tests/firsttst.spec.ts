import { test, expect } from '@playwright/test';
import { hello } from './src';

var res = hello();
console.log('res', res);

console.log(hello('Shijo'));


// NOTE: test-block-syntax

/**
 * This is a test function that describes the test scenarios.
 * @param {string} title - The title of the test.
 * @param {Function} callback - The callback function that contains the test scenarios.
*/
test('my test title', () => {
    // here my test scenatios goes
    console.log('simple');
});

// create the test cases
const URL = 'https://www.google.com';
test('Test google homepage', async ({ page }) => {
    await page.goto(URL);
    let title = await page.title();
    expect(title).toBe('Google');
    // OR below
    await expect(page).toHaveTitle('Google');
});


