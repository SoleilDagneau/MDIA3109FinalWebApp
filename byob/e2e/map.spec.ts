import { test, expect } from '@playwright/test'

let urlMap = "http://localhost:3000/map";

test.beforeAll(async () => {
    console.log('Before tests');
});

test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Map header area', () => {
    test('The title tag', async ({ page }) => {
        await page.goto(urlMap)

        await expect(page).toHaveTitle('Map');
    })

    test('The link tag', async ({ page }) => {
        await page.goto(urlMap)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/busicon.png')
    })
})

test.describe('Main area', () => {
    test('The main tag', async ({ page }) => {
        await page.goto(urlMap)

        await expect(page.locator('main')).toHaveCount(1);

    })
})