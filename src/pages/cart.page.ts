import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  readonly title: Locator;
  readonly totalTitle: Locator;
  readonly checkoutLink: Locator;
  readonly summaryTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByRole('heading', { name: 'Cart', exact: true });
    this.totalTitle = page.getByRole('heading', { name: 'Total', exact: true });
    this.checkoutLink = page.getByRole('link', { name: 'Proceed To Checkout', exact: true });
    this.summaryTitle = page.getByRole('heading', { name: 'Cart Summary', exact: true });
  }

  async open(): Promise<void> {
    await this.page.goto('/cart.php');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/\/cart\.php(?:[?#].*)?$/);
    await this.expectCommonHeader();
    await expect(this.title).toBeVisible();
    await expect(this.totalTitle).toBeVisible();
    await expect(this.checkoutLink).toBeVisible();
    await expect(this.summaryTitle).toBeVisible();
  }
}
