import { test } from '../../src/fixtures/pages.fixture';
import type { ShopCategory } from '../../src/pages/shop.page';

const categories: ShopCategory[] = ['Men Fashion', 'Women Fashion', 'Kids Fashion', 'Electronics'];

test.describe('Shop landing', { tag: '@ui' }, () => {
  test(
    'displays the main shopping departments',
    { tag: ['@smoke', '@shop'] },
    async ({ shopPage }) => {
      await test.step('Open the shop landing page', async () => {
        await shopPage.open();
      });

      await test.step('Validate the global header and departments', async () => {
        await shopPage.expectLoaded();
      });
    },
  );

  for (const category of categories) {
    test(
      `opens ${category} from the landing page`,
      { tag: ['@regression', '@navigation'] },
      async ({ shopPage }) => {
        await shopPage.open();
        await shopPage.openCategory(category);
      },
    );
  }
});
