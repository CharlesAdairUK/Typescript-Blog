import { expect, Locator, Page } from '@playwright/test';
import { exec } from 'child_process';

export class NavigationBar {
    readonly page: Page;
    readonly homeLink: Locator;
    readonly colourThemeToggle: Locator;
    readonly lightTheme: Locator;
    readonly darkTheme: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.getByText('My Project');
        this.colourThemeToggle = page.locator('.nx-relative.nx-grow');
        this.lightTheme = page.locator('[aria-labelledby="headlessui-listbox-button-:Rlsr6:"] li:first-child');
        this.darkTheme = page.locator('[aria-labelledby="headlessui-listbox-button-:Rlsr6:"] li:nth-child(2)');
    }

    
    async verifyColourThemeToggleVisible() {
        await expect(this.colourThemeToggle).toBeVisible();
    }

    async changeColourThemeLight() {
        await this.colourThemeToggle.click();       
        await this.lightTheme.click();
        await expect(this.page.locator('.js-focus-visible.light')).toBeVisible();
    }

    async changeColourThemeDark() {
        await this.colourThemeToggle.click();
        await this.darkTheme.click();
        await expect(this.page.locator('.js-focus-visible.dark')).toBeVisible();
    }
}