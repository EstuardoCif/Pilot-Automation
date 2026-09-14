import { expect, type Locator, type Page } from '@playwright/test';

export abstract class BasePage {
  readonly searchInput: Locator;
  readonly cartLink: Locator;

  protected constructor(protected readonly page: Page) {
    this.searchInput = page.getByPlaceholder('Search here...');
    this.cartLink = page.locator('a[href*="cart.php"]').first();
  }

  async expectCommonHeader(): Promise<void> {
    await expect(this.searchInput).toBeVisible();
    await expect(this.cartLink).toBeVisible();
  }
}
