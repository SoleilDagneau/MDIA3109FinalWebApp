import { test, expect } from '@playwright/test'

let urlSearch = "http://localhost:3000/search";

test.beforeAll(async () => {
    console.log('Before tests');
});
  
test.afterAll(async () => {
    console.log('After tests');
});

test.describe('Map header area', () => {
    test('The title tag', async ({ page }) => {
        await page.goto(urlSearch)

        await expect(page).toHaveTitle('Search');
    })

    test('The link tag', async ({ page }) => {
        await page.goto(urlSearch)

        const linkTag = page.locator('link[rel="icon"]');
        await expect(linkTag).toHaveAttribute('href', '/favicon.ico')
    })
})

test.describe('Main area', () => {
    test('Count number of divs in the main area', async({ page }) => {
        await page.goto(urlSearch)

        await expect(page.locator('div')).toHaveCount(9);
    })
})