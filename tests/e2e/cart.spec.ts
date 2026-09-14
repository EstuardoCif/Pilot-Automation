import { test, expect } from '../../src/fixtures/pages.fixture';

test.describe('Cart', { tag: ['@ui', '@cart'] }, () => {

  test(
    'navigates from cart to checkout',
    { tag: ['@smoke', '@navigation'] },
    async ({ cartPage, page }) => {

      await cartPage.open();

      await cartPage.expectLoaded();

      await cartPage.checkoutLink.click();

      await expect(page).toHaveURL(/\/checkout\.php(?:[?#].*)?$/);
    }
  );

});