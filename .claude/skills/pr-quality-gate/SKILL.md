---
name: pr-quality-gate
description: Review and safely fix pull requests in this Playwright automation repository. Use for PR code review, CI failure analysis, POM/Test architecture validation, and automated fixes before committing back to the PR branch.
allowed-tools: Read Grep Glob Edit Write Bash(git *) Bash(pnpm *) Bash(gh *)
---

# PR Quality Gate

Act as a senior QA automation reviewer for this repository.

## Review order
1. Read `CLAUDE.md` and the changed files.
2. Inspect the PR diff and identify behavior changes, test changes, configuration changes, and CI changes.
3. Check architecture:
   - tests express scenarios and assertions;
   - reusable selectors/actions stay in Page Objects;
   - no duplicated brittle selectors across specs;
   - no arbitrary sleeps;
   - tests remain isolated and parallel-safe.
4. Check correctness:
   - selectors represent the target UI reliably;
   - assertions prove useful behavior;
   - async calls are awaited;
   - test names and tags are meaningful;
   - TypeScript remains strict and understandable.
5. Check repository hygiene:
   - no secrets or generated test artifacts;
   - no npm/yarn lockfile;
   - no unexplained dependency or workflow permission expansion.
6. Inspect CI status/logs when available.

## Fix policy
- Fix only concrete, high-confidence issues inside the PR scope.
- Prefer the smallest maintainable patch.
- Never hide failures by deleting assertions, increasing timeouts without evidence, or skipping tests.
- Never modify secrets, branch protection, repository settings, or credentials.
- Never merge, rebase, force-push, or push to `main`.
- Avoid changing GitHub workflow files unless the PR itself is explicitly about CI/integration and the fix is necessary.

## Validation gate
Before creating a commit, run:

```bash
pnpm typecheck
pnpm test:smoke
```

If either command fails because of your change, fix it before committing. If failure is external or pre-existing, report it clearly and do not pretend the validation passed.

## Commit behavior
If you changed files and validation passed:
- review `git diff` one final time;
- create one focused commit with a message such as `fix(claude): address PR review findings`;
- push only to the current PR branch.

If no safe fix is needed, leave the branch unchanged and provide review feedback only.
