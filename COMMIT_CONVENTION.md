# Commit Convention

We follow [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/)

## Format

    <type>: <short description>

Optional scope:

    <type>(<scope>): <short description>

Examples: `feat(ui):`, `chore(web):`, `docs:`

## Rules

- Use English
- Use imperative mood: "add", not "added" or "adds"
- Keep the subject short (about 72 characters)
- Do not end the subject with a period
- One logical change per commit

## Types we use

| Type       | When to use                                      |
| ---------- | ------------------------------------------------ |
| `feat`     | New user-facing feature                          |
| `fix`      | Bug fix                                          |
| `docs`     | Documentation only                               |
| `style`    | Formatting; no logic change                      |
| `refactor` | Code changes that is nore a feature or a fix     |
| `test`     | Adding or updating tests                         |
| `chore`    | Tooling, setup, maintenance (not procut feature) |
| `ci`       | CI pipeline changes                              |
| `build`    | Build system or build-related dependencies       |

## Examples

- `chore: scaffold apps/web with Vite`
- `chore: add @repo/uk package placeholder`
- `feat(ui): add accessible Button component`
- `fix(web): restore table keyboard navigation`
- `docs: update learning progress log`

## What not to commit

- `node_modules`
- build output (`dist/`, `coverage/`)
- secrets (`.env`, keys, tokens)
