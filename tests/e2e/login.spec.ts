import { test } from '../../src/fixtures/pages.fixture';

test.describe('Authentication', { tag: ['@ui', '@login'] }, () => {

  test(
    'logs in successfully with valid credentials',
    { tag: '@smoke' },
    async ({ loginPage }) => {

      await loginPage.open();

      await loginPage.expectLoaded();

      await loginPage.login(
        'demo@demo.com',
        'demo'
      );

      await loginPage.expectLoginSuccessful();
    }
  );

});