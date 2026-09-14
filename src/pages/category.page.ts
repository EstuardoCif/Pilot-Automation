import { expect, type Page } from '@playwright/test';
import { BasePage } from './base.page';

export class CategoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open(route: '/mens-wear.php' | '/womens-wear.php' | '/kids-wear.php' | '/electronics.php'): Promise<void> {
    await this.page.goto(route);
  }

  async expectCoreFilters(): Promise<void> {
    await this.expectCommonHeader();
    await expect(this.page.getByRole('heading', { name: 'Filter by Type', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Filter by price', exact: true })).toBeVisible();
    await expect(this.page.getByPlaceholder('Search products')).toBeVisible();
  }

  async expectFashionFilters(): Promise<void> {
    await this.expectCoreFilters();
    await expect(this.page.getByRole('heading', { name: 'Filter by size', exact: true })).toBeVisible();
    await expect(this.page.getByRole('heading', { name: 'Filter by color', exact: true })).toBeVisible();
    await expect(this.page.getByText('Formal', { exact: true })).toBeVisible();
    await expect(this.page.getByText('Footwear', { exact: true })).toBeVisible();
  }

  async expectElectronicsFilters(): Promise<void> {
    await this.expectCoreFilters();
    await expect(this.page.getByRole('heading', { name: 'Filter by Brand', exact: true })).toBeVisible();
    await expect(this.page.getByText('Mobile', { exact: true })).toBeVisible();
    await expect(this.page.getByText('Laptop', { exact: true })).toBeVisible();
    await expect(this.page.getByText('Samsung', { exact: true })).toBeVisible();
    await expect(this.page.getByText('Sony', { exact: true })).toBeVisible();
  }
}
