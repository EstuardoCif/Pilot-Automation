# Claude Code OAuth quick start

Use this guide when you have reached the Claude authentication step for GitHub Actions.

## Goal

The repository uses only:

```text
Claude Code CLI -> claude setup-token -> GitHub Actions Secret -> claude-code-action
```

The required secret name is:

```text
CLAUDE_CODE_OAUTH_TOKEN
```

## Step 1 — Verify Claude Code

```powershell
claude --version
```

Then start Claude Code once and make sure you are signed in to the Claude subscription you intend to use:

```powershell
claude
```

Inside Claude Code you can use `/status` to verify the active account/authentication state.

## Step 2 — Install the Claude GitHub App

From the repository root:

```powershell
claude
```

Inside Claude Code:

```text
/install-github-app
```

Authorize the repository. If offered an automatically generated workflow, choose **Skip for now** because the repository already includes its own workflows.

## Step 3 — Generate the CI OAuth token

Exit the interactive Claude session and run in normal PowerShell:

```powershell
claude setup-token
```

Complete the authorization flow. The command prints a long-lived OAuth token. Copy it immediately and do not share it.

## Step 4 — Store it in GitHub

Open the repository on GitHub:

`Settings -> Secrets and variables -> Actions -> New repository secret`

Create:

```text
Name: CLAUDE_CODE_OAUTH_TOKEN
Value: <paste the token>
```

## Step 5 — Confirm the workflows

Both workflows should contain:

```yaml
claude_code_oauth_token: ${{ secrets.CLAUDE_CODE_OAUTH_TOKEN }}
```

Files:

```text
.github/workflows/claude-auto-review.yml
.github/workflows/claude-interactive.yml
```

## Step 6 — Push and test

```powershell
git checkout -b test/claude-oauth
git add .
git commit -m "chore: configure Claude Code OAuth"
git push -u origin test/claude-oauth
```

Open a pull request into `main` and watch the `Actions` tab.

Expected workflows:

```text
Playwright CI
Claude Auto PR Review & Fix
```

You can also comment on the PR:

```text
@claude review this PR and verify that the Playwright/POM implementation follows CLAUDE.md.
```

## Security

Treat `CLAUDE_CODE_OAUTH_TOKEN` like a password. Keep it only in GitHub Actions Secrets. If exposed, regenerate/rotate it before continuing.
