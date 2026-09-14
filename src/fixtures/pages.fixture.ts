import { test as base, expect } from '@playwright/test';

import { CartPage } from '../pages/cart.page';
import { CategoryPage } from '../pages/category.page';
import { LoginPage } from '../pages/login.page';
import { ShopPage } from '../pages/shop.page';

type Pages = {
  loginPage: LoginPage;
  shopPage: ShopPage;
  categoryPage: CategoryPage;
  cartPage: CartPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

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