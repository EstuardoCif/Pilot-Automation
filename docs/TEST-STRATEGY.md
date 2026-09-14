# Pilot test strategy

## Objective
Validate that the QA Automation Labs shop is reachable and that its principal shopping surfaces expose the expected navigation, category filters, and cart shell.

## Suites and tags
- `@smoke`: small pull-request quality gate, Chromium in CI.
- `@regression`: broader navigation coverage.
- `@ui`: browser/UI tests.
- domain tags such as `@shop`, `@category`, `@cart`, and `@navigation` make targeted execution easier.

Playwright's first-class `tag` metadata is used instead of embedding tags only in test titles.

## POM boundaries
Specs describe scenarios. Page Objects own locators, navigation, and reusable page-level assertions. Shared browser-page fixtures instantiate Page Objects once per test.

## Evidence
Failures preserve screenshots, video, and trace according to `playwright.config.ts`. The same run emits Playwright HTML and Allure result data; CI packages those outputs as GitHub Actions artifacts.

## Growth path
For a larger framework, add product-card components, checkout/auth Page Objects, API clients, isolated test data, schemas, environment-specific projects, and visual/API suites without mixing those responsibilities into the existing specs.
