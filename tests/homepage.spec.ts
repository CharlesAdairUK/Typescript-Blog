import { test, type Page } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { NavigationBar } from '../pages/navigation-bar';

let homePage: HomePage;
let navigationBar: NavigationBar;
const URL = 'https://nextra-docs-template.vercel.app/';
const pageUrl = /.*aboust/;

test.beforeEach(async ({page}) => {
    await page.goto(URL);
    homePage = new HomePage(page);
});

async function clickAboutPageBtn(page: Page) {
    await homePage.clickAboutPageBtn();
    homePage = new HomePage(page);
}

test.describe('Home Page', () => {

    test('Verify page is loaded', async ({ page }) => {
        homePage = new HomePage(page);
        navigationBar = new NavigationBar(page);
        await page.goto(URL);
        await homePage.verifyPageIsLoaded();
    });

    test('Verify page title', async ({ page }) => {
        await homePage.assertPageTitle();
    });

    test('Verify About page button', async ({ page }) => {
        await homePage.clickAboutPageBtn();
        await homePage.assertPageUrl(pageUrl)
    });

});