import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";

test.beforeAll(async () => {
    console.log('Before the tests -----------------');
});

test.afterAll(async () => {
    console.log('After the tests ------------------');
});

test.describe('Main area', () => {
    test('Main area H3 Tag', async({ page }) => { 
        await page.goto(urlHome)

        await expect(page.locator('div > main > div > div > h3')).toContainText('become your own bartender.');
    })

    test('Count number of headers in the main area', async({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('header')).toHaveCount(1);
    })

    test('Count number of divs in the main area', async({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('div')).toHaveCount(10);
    })

        test('The a tag navigation', async ({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('a')).toHaveAttribute('href', '/results')
    })

    test('The Logo image', async ({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('div > main > div > div > img')).toHaveAttribute('src', '/BYOBLOGO.png')
    })

})
