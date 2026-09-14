# Claude Code integration — subscription OAuth only

This project intentionally uses **Claude Code subscription OAuth only** for GitHub Actions.
There is no Anthropic Console credential in the project and the workflows expect only this GitHub Actions secret:

```text
CLAUDE_CODE_OAUTH_TOKEN
```

The token is generated locally by the Claude Code CLI with your Claude subscription:

```powershell
claude setup-token
```

The command opens/uses Claude OAuth authorization and prints a long-lived token in the terminal. Copy it immediately: Claude Code does not save the generated token for you.

## One-time setup

1. Install Claude Code locally and sign in with your Claude subscription.
2. Install GitHub CLI and authenticate with `gh auth login`.
3. From the repository root, start Claude Code:

   ```powershell
   claude
   ```

4. Inside Claude Code run:

   ```text
   /install-github-app
   ```

5. Authorize/install the Claude GitHub App for this repository. If Claude offers to create a default workflow, choose **Skip for now** because this repository already contains purpose-built workflows.
6. Exit the interactive Claude session and, in normal PowerShell, generate the CI OAuth token:

   ```powershell
   claude setup-token
   ```

7. Copy the generated token. Do not paste it into source files, `.env`, issues, PRs, chat, screenshots, or workflow YAML.
8. In GitHub open:

   `Repository -> Settings -> Secrets and variables -> Actions -> New repository secret`

9. Create exactly:

   ```text
   Name: CLAUDE_CODE_OAUTH_TOKEN
   Value: <the token printed by claude setup-token>
   ```

10. The included workflows already consume the secret with:

    ```yaml
    claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
    ```

No workflow change is required after creating the secret.

## Automatic PR mode

`.github/workflows/claude-auto-review.yml` runs when a same-repository pull request is opened, updated, reopened, or marked ready for review.

Claude is instructed to:

- read `CLAUDE.md`;
- apply `.claude/skills/pr-quality-gate/SKILL.md`;
- review the PR diff;
- inspect CI status/logs when available;
- fix only high-confidence issues;
- run `pnpm typecheck` and `pnpm test:smoke` before committing;
- create one focused commit and push it only to the PR branch;
- never merge, rebase, force-push, or push to `main`.

The workflow ignores runs triggered by `claude[bot]` so a Claude-authored fix does not create an agent loop.

## Interactive mode

The separate `.github/workflows/claude-interactive.yml` workflow lets you ask Claude for help from a PR comment, for example:

```text
@claude review the latest changes and fix any Playwright/POM issue you find. Run the smoke suite before committing.
```

## Security rules

- Keep `CLAUDE_CODE_OAUTH_TOKEN` only in GitHub Actions Secrets.
- Never commit the token.
- Never place it in `.env`.
- Never print it in a workflow step.
- Never paste it into a PR or issue.
- Rotate/regenerate it if it is ever exposed.
- Keep `main` protected and require human approval for merge.
