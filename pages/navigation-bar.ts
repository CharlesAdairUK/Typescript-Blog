import { expect, Locator, Page } from '@playwright/test';

export class NavigationBar {
    readonly page: Page;
    readonly homeLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.getByText('My Project');
    }
}