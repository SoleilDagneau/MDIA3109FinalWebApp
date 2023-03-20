import { test, expect } from '@playwright/test'

let urlHome = "http://localhost:3000";

test.beforeAll(async () => {
    console.log('Before the tests -----------------');
});

test.afterAll(async () => {
    console.log('After the tests ------------------');
});

// test.describe('Header area', () => {
//     test('The title tag', async({ page }) => {
//         await page.goto(urlHome)

//         await expect(page).toHaveTitle('Desmands Assignment 2');
//     })

//     test('The meta tag', async ({ page }) => { 
//         await page.goto(urlHome)
        
//         const metaDescriptionOne = page.locator('meta[name="author"]')
//         await expect(metaDescriptionOne).toHaveAttribute("content", "Desmand King - D3")

//         const metaDescriptionTwo = page.locator('meta[property="og:title"]');
//         await expect(metaDescriptionTwo).toHaveAttribute('content', 'Assignment 2')

//         const metaDescriptionThree = page.locator('meta[property="og:description"]');
//         await expect(metaDescriptionThree).toHaveAttribute('content', 'BCIT - D3')
//     })

//     test('The link tag', async ({ page }) => {
//         await page.goto(urlHome)

//         const linkTag = page.locator('link[rel="icon"]');
//         await expect(linkTag).toHaveAttribute('href', '/movie-ticket.png')
//     })
// })

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

        await expect(page.locator('div')).toHaveCount(7);
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
