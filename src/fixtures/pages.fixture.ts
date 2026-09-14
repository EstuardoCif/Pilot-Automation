import { test as base, expect } from '@playwright/test';
import { CartPage } from '../pages/cart.page';
import { CategoryPage } from '../pages/category.page';
import { ShopPage } from '../pages/shop.page';

type PageFixtures = {
  shopPage: ShopPage;
  categoryPage: CategoryPage;
  cartPage: CartPage;
};

export const test = base.extend<PageFixtures>({
  shopPage: async ({ page }, use) => {
    await use(new ShopPage(page));
  },
  categoryPage: async ({ page }, use) => {
    await use(new CategoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect };
