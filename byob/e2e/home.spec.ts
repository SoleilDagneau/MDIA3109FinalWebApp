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
    // test('Header H1 Tag', async({ page }) => {
    //     await page.goto(urlHome)

    //     await expect(page.locator('h1')).toContainText('Top Movies!');
    // })

    // test('Header H2 Tag', async({ page }) => { 
    //     await page.goto(urlHome)

    //     await expect(page.locator('header > div > h2')).toContainText('What will you watch tonight?');
    // })

    test('Count number of headers in the main area', async({ page }) => {
        await page.goto(urlHome)

        await expect(page.locator('header')).toHaveCount(1);
    })

})
