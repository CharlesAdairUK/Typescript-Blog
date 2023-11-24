import { type Locator, type Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly homeLink: Locator;
    readonly aboutPageLink: Locator;
    readonly pageTitle = 'Introduction – Nextra';

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.getByRole('link', { name: 'My Project' });
        this.aboutPageLink = page.getByRole('link', { name: 'About' })
        this.pageTitle = 'Introduction – Nextra';
    }

    async clickHomePageBtn() {
        await this.homeLink.click();
    }

    async clickAboutPageBtn() {
        await this.aboutPageLink.click();
    }

    async assertPageTitle() {
        await expect(this.page).toHaveTitle(this.pageTitle);
    }

    async assertPageUrl(pageUrl: RegExp) {
        await expect(this.page).toHaveURL(pageUrl);
    }

    async verifyPageIsLoaded(): Promise<void> {
        await expect(this.homeLink).toBeVisible();
    }
}