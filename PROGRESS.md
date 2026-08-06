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
| 1.2 | Tailwind v4 in `apps/web` | done | `@tailwindcss/vite`; IntelliSense; `prettier-plugin-tailwindcss` |
| 1.2b | Design tokens (CSS variables) | done | grayscale + semantic aliases in `@theme` |
| 1.2c | Move tokens into `@repo/ui` | done | `styles/tokens.css` + `exports`; web imports package CSS |
| 1.3 | First `Button` in `@repo/ui` | done | variants, `cn`, barrel export; used in `web` |
| 1.3b | Button polish (a11y, peerDeps, API) | done | disabled styles; React `peerDependencies`; focus-visible; demo in `web` |
| 1.3c | Radix / shadcn-style primitives | pending | next |
| 1.4 | Storybook | done | Tailwind via `viteFinal`; Button Primary/Secondary/Disabled stories |

## Tooling / repo (side track)

| # | Step | Status | Note |
|---|------|--------|------|
| T.1 | Conventional Commits (`COMMIT_CONVENTION.md`) | done | practiced splitting commits by type |
| T.2 | Root `.gitignore` | done | |
| T.3 | Workspace `.vscode` settings | done | tab 2, Prettier, word wrap, organize imports on save |
| T.4 | Teacher rule (`.cursor/rules`) | done | includes design-patterns teaching |
| T.5 | Prettier organize-imports (+ Tailwind last) | done | `apps/web/.prettierrc.json` |

---

## History

- 2026-08-05: Node `v22.21.1`, pnpm `11.20.0`.
- 2026-08-05: Scaffolded `apps/web`; `packages/ui` placeholder + entrypoint.
- 2026-08-05: pnpm workspace (root `package.json`, `pnpm-workspace.yaml`); root scripts verified.
- 2026-08-05: Commit convention, gitignore, `.vscode`; practiced rebase (`reword` + `--force-with-lease`).
- 2026-08-05: Setup 0.x closed → start Pillar 1 (link `@repo/ui` → `web`).
- 2026-08-05: 1.1 done — `web` consumes `@repo/ui` via `workspace:*`; named vs default import; dep in `dependencies`.
- 2026-08-06: 1.2 done — Tailwind v4 in `apps/web`; Prettier Tailwind class sorting + IntelliSense.
- 2026-08-06: 1.2b done — grayscale tokens + semantic aliases via `@theme`.
- 2026-08-06: 1.2c done — tokens live in `@repo/ui`; learned `exports` public path vs disk path; `workspace:*` vs new package linking.
- 2026-08-06: 1.3 done — `Button` + `cn` (`clsx` + `tailwind-merge`); wrapper / variants / composition; barrel export; `import type` + `verbatimModuleSyntax`.
- 2026-08-06: Tooling — organize imports on save; design-patterns note in teacher rule; conventional commits practice (feat/chore/docs split).
- 2026-08-06: 1.3b done — disabled + focus-visible; React as peerDep; `@source` for UI package classes; disabled Button in `apps/web`.
- 2026-08-06: 1.4 done — Storybook in `packages/ui` (React Vite); Tailwind plugin in `viteFinal`; Button stories; a11y addon installed (to practice next).
