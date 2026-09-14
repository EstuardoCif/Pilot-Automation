# Pilot Automation — Claude Code instructions

## Purpose
This repository is a QA automation pilot for `https://shop.qaautomationlabs.com`.
The stack is Playwright Test + TypeScript + pnpm + Page Object Model + Allure Report 3.

## Non-negotiable rules
- Use `pnpm`; do not introduce npm/yarn lockfiles.
- Keep tests under `tests/e2e/` and page objects under `src/pages/`.
- Tests must describe business behavior; selectors and UI interactions belong in page objects.
- Prefer Playwright role, label, placeholder and stable attribute locators. Avoid brittle CSS/XPath tied to layout.
- Use Playwright web-first assertions; do not add arbitrary sleeps such as `waitForTimeout()`.
- Keep tests independent and safe to run in parallel.
- Never commit secrets, credentials, `.env`, generated reports, videos, traces, screenshots, or `node_modules`.
- Preserve Allure and Playwright reporters in `playwright.config.ts`.
- Preserve Chromium smoke coverage in CI.
- Do not weaken assertions merely to make a failing test green.

## Validation before committing
Run, in order:
1. `pnpm typecheck`
2. `pnpm test:smoke`

If the change affects browser-specific behavior, also run the relevant cross-browser tests.

## Pull-request behavior
When reviewing or fixing a PR, apply the `pr-quality-gate` project skill in `.claude/skills/pr-quality-gate/SKILL.md`.
Make the smallest safe change. Do not rebase, force-push, merge, or push to `main`.
Only commit generated fixes after the required validation passes.
