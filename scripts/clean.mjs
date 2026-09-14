import { rmSync } from 'node:fs';

for (const directory of ['allure-results', 'allure-report', 'playwright-report', 'test-results']) {
  rmSync(directory, { recursive: true, force: true });
}

console.log('Generated test artifacts removed.');
