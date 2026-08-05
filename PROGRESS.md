# Progress log — UI Frontend Engineer

Path: mini-monorepo → Pillar 1 → … (for someone with limited stack familiarity)

## Environment setup

| # | Step | Status | Note |
|---|------|--------|------|
| 0.1 | Node.js (LTS / current) | done | `v22.21.1` |
| 0.2 | pnpm (latest) | done | `11.20.0` (corepack) |
| 0.3 | Scaffold `apps/web` (Vite + React + TS) | done | ESLint (not Oxlint) |
| 0.4 | `packages/ui` (placeholder + entrypoint) | done | `@repo/ui`, `src/index.ts` |
| 0.5 | `pnpm-workspace.yaml` + root scripts | done | `pnpm install` / `dev` / `build` / `lint` OK |
| 0.6 | Dev + build from root | done | `pnpm dev` → `:5173`; `pnpm build` OK |

## Pillar 1 — Design System

| # | Step | Status | Note |
|---|------|--------|------|
| 1.1 | Wire `@repo/ui` into `web` (`workspace:*`) | done | `UI_PACKAGE_NAME` in App; dep in `dependencies` |
| 1.2 | Tailwind v4 + design tokens | pending | next |
| 1.3 | Components (Radix/shadcn) + a11y | pending | |
| 1.4 | Storybook | pending | |

## Tooling / repo (side track)

| # | Step | Status | Note |
|---|------|--------|------|
| T.1 | Conventional Commits (`COMMIT_CONVENTION.md`) | done | |
| T.2 | Root `.gitignore` | done | |
| T.3 | Workspace `.vscode` settings | done | tab size 2, Prettier, format on save |
| T.4 | Teacher rule (`.cursor/rules`) | done | |

---

## History

- 2026-08-05: Node `v22.21.1`, pnpm `11.20.0`.
- 2026-08-05: Scaffolded `apps/web`; `packages/ui` placeholder + entrypoint.
- 2026-08-05: pnpm workspace (root `package.json`, `pnpm-workspace.yaml`); root scripts verified.
- 2026-08-05: Commit convention, gitignore, `.vscode`; practiced rebase (`reword` + `--force-with-lease`).
- 2026-08-05: Setup 0.x closed → start Pillar 1 (link `@repo/ui` → `web`).
- 2026-08-05: 1.1 done — `web` consumes `@repo/ui` via `workspace:*`; learned named vs default import; moved dep from `devDependencies` to `dependencies`.
