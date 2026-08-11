# UI Frontend Engineer

Learning / portfolio monorepo for building an in-house **design system** and a consumer app — focused on modern React UI engineering (tokens, accessible components, pnpm workspaces).

## Why this repo

The goal is not a random demo app. It is a structured practice ground for:

- an internal UI package (`@repo/ui`) with design tokens and components
- a Vite + React app (`web`) that consumes that package
- tooling you would defend in an interview: workspaces, `exports`, Tailwind v4 `@theme`, Conventional Commits

See `Plan.md` for the full learning pillars and `PROGRESS.md` for current status.

## Stack

- **pnpm** workspaces
- **React** + **TypeScript**
- **Vite**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **clsx** + **tailwind-merge** (`cn` helper)

## Live demos

- App (Vercel): [https://react-web-ui-beta.vercel.app/](https://react-web-ui-beta.vercel.app/)
- Storybook (Vercel): [https://react-ui-storybook-navy.vercel.app/](https://react-ui-storybook-navy.vercel.app/)

## Structure

```text
apps/web          # Vite React app (consumer)
packages/ui       # Design system (@repo/ui)
  src/components/button.tsx
  src/lib/cn.ts
  src/styles/tokens.css
```

## Getting started

Requirements: Node.js 22+, pnpm 11+ (Corepack recommended).

```bash
pnpm install
pnpm dev
```

App: [http://localhost:5173](http://localhost:5173)

Other scripts (from repo root):

```bash
pnpm build
pnpm lint
```

Storybook (local):

```bash
pnpm --filter @repo/ui storybook
```

## Design system notes

- Tokens live in `@repo/ui` (`@theme` in `tokens.css`) and are imported by the app:
  `@import "@repo/ui/styles/tokens.css";`
- Prefer **semantic** utilities in UI (`bg-background`, `text-foreground`, `border-border`) over raw palette classes where possible.
- Components are consumed via the package entrypoint, e.g. `import { Button } from "@repo/ui"`.

## Conventions

- Commits: see `COMMIT_CONVENTION.md` (Conventional Commits, English messages).
- Editor: workspace settings in `.vscode/` (format on save, Tailwind IntelliSense, organize imports).

## Roadmap (high level)

1. Design system — tokens, components, a11y, Storybook
2. TanStack Query / Table — data-heavy admin UI
3. Monorepo tooling — shared configs, CI
4. Performance & security
5. CI/CD pipelines

Details: `Plan.md`.
