import { test } from '../../src/fixtures/pages.fixture';

test.describe('Cart', { tag: ['@ui', '@cart'] }, () => {
  test('loads the cart shell and checkout action', { tag: '@smoke' }, async ({ cartPage }) => {
    await cartPage.open();
    await cartPage.expectLoaded();
  });
});
