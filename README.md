# Pilot Automation

Professional pilot automation framework for **QA Automation Labs Shop**.

Target: `https://shop.qaautomationlabs.com/shop.php`

## Stack

- Playwright Test 1.63.0
- TypeScript 7.0.2
- pnpm 12.3.4
- Page Object Model
- Allure Playwright 3.12.1
- Allure Report 3 CLI 3.17.0
- GitHub Actions
- Claude Code GitHub Action v1 — subscription OAuth (`CLAUDE_CODE_OAUTH_TOKEN`)

## Quick start

```bash
pnpm install
pnpm exec playwright install
cp .env.example .env
pnpm typecheck
pnpm test:smoke
```

Windows PowerShell equivalent for the environment file:

```powershell
Copy-Item .env.example .env
```

## Useful commands

```bash
pnpm test                 # all configured browsers
pnpm test:smoke           # smoke on Chromium
pnpm test:regression      # regression on Chromium
pnpm test:headed          # visible Chromium
pnpm test:ui              # Playwright UI Mode
pnpm test:debug           # Playwright Inspector
pnpm codegen              # Playwright codegen against the target shop
pnpm typecheck            # TypeScript static validation
pnpm allure:generate      # generate Allure 3 HTML
pnpm allure:open          # open generated Allure report
pnpm clean                # remove generated test artifacts
```

## Project principles

- Specs focus on behavior.
- Page Objects own locators/actions.
- Web-first assertions only.
- No arbitrary sleeps.
- Tests remain isolated and parallel-safe.
- CI is independent from AI review.
- Claude may fix a PR branch, but may not merge, rebase, force-push or push to `main`.
- Claude GitHub Actions authentication uses only a Claude Code subscription OAuth token generated with `claude setup-token`.

## Documentation

- `docs/SETUP.md` — complete setup from zero.
- `docs/ARCHITECTURE.md` — project layout and responsibilities.
- `docs/CLAUDE-CODE.md` — Claude GitHub integration using subscription OAuth only.
- `docs/CLAUDE-OAUTH-QUICKSTART.md` — exact OAuth setup from the Claude Code CLI.
- `CLAUDE.md` — repository-wide Claude instructions.
- `.claude/skills/pr-quality-gate/SKILL.md` — PR review/autofix procedure.
