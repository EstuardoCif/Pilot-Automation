import { test } from '../../src/fixtures/pages.fixture';

test.describe('Authentication', { tag: ['@ui', '@login'] }, () => {

  test(
    'authenticates a valid user and redirects to the shop',
    { tag: ['@smoke', '@authentication', '@happy-path'] },
    async ({ loginPage, page }) => {

      await test.step('Open the login page', async () => {
        await loginPage.open();
        await loginPage.expectLoaded();
      });

      await test.step('Enter valid user credentials', async () => {
        await loginPage.login(
          'demo@demo.com',
          'demo'
        );
      });

      await page.waitForTimeout(10000);

      await test.step('Verify successful login', async () => {
        await loginPage.expectLoginSuccessful();
      });

    }
  );

});