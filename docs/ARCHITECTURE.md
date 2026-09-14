# Architecture

```text
Pilot-Automation/
├── .claude/
│   └── skills/pr-quality-gate/SKILL.md
├── .github/workflows/
│   ├── ci.yml
│   ├── claude-auto-review.yml
│   └── claude-interactive.yml
├── docs/
├── scripts/
├── src/
│   ├── fixtures/pages.fixture.ts
│   └── pages/
│       ├── base.page.ts
│       ├── cart.page.ts
│       ├── category.page.ts
│       └── shop.page.ts
├── tests/e2e/
│   ├── cart.spec.ts
│   ├── category.spec.ts
│   └── shop.spec.ts
├── CLAUDE.md
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

## Design rules

- **Specs** describe scenarios, steps and assertions.
- **Page Objects** own UI locators and reusable interactions.
- **Fixtures** construct page objects consistently for every test.
- **Config** owns browser/reporting/runtime behavior.
- **Claude instructions** define repository-wide engineering expectations.
- **Claude skill** defines the multi-step PR review/fix procedure.
- **CI** proves the code independently from Claude.

This separation prevents the AI review from becoming the only quality gate.
