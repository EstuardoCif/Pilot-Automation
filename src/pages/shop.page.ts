import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export type ShopCategory = 'Men Fashion' | 'Women Fashion' | 'Kids Fashion' | 'Electronics';

const categoryRoute: Record<ShopCategory, string> = {
  'Men Fashion': '/mens-wear.php',
  'Women Fashion': '/womens-wear.php',
  'Kids Fashion': '/kids-wear.php',
  Electronics: '/electronics.php',
};

export class ShopPage extends BasePage {
  readonly categoryHeadings: Record<ShopCategory, Locator>;

  constructor(page: Page) {
    super(page);
    this.categoryHeadings = {
      'Men Fashion': page.getByRole('heading', { name: 'Men Fashion', exact: true }),
      'Women Fashion': page.getByRole('heading', { name: 'Women Fashion', exact: true }),
      'Kids Fashion': page.getByRole('heading', { name: 'Kids Fashion', exact: true }),
      Electronics: page.getByRole('heading', { name: 'Electronics', exact: true }),
    };
  }

  async open(): Promise<void> {
    await this.page.goto('/shop.php');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/shop\.php(?:[?#].*)?$/);
    await this.expectCommonHeader();

    for (const heading of Object.values(this.categoryHeadings)) {
      await expect(heading).toBeVisible();
    }
  }

  async openCategory(category: ShopCategory): Promise<void> {
    const route = categoryRoute[category];
    await this.page.locator(`a[href$="${route.slice(1)}"]`).first().click();
    await expect(this.page).toHaveURL(new RegExp(`${route.replace('.', '\\.')}(?:[?#].*)?$`));
  }
}
