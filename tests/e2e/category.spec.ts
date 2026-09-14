import { test } from '../../src/fixtures/pages.fixture';

test.describe('Category filters', { tag: ['@ui', '@category'] }, () => {
  test(
    'shows fashion filters for Men Fashion',
    { tag: '@smoke' },
    async ({ categoryPage }) => {
      await categoryPage.open('/mens-wear.php');
      await categoryPage.expectFashionFilters();
    },
  );

  test('shows electronics filters', { tag: '@smoke' }, async ({ categoryPage }) => {
    await categoryPage.open('/electronics.php');
    await categoryPage.expectElectronicsFilters();
  });
});
