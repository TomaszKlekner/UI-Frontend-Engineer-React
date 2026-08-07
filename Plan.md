# Learning & Growth Plan: Senior Front-End Engineer / UI Specialist

A structured learning plan across 5 pillars, aimed at mastering advanced front-end topics and building a production-ready portfolio.

---

## 1. UI Architecture & Design System

Building an in-house component library (design system) means going beyond ad-hoc Tailwind class strings.

- **Tailwind CSS & Design Tokens:** Master token architecture (color, typography, spacing) with CSS variables and Tailwind theme configuration (`@theme` in v4). Learn conflict-free component variants (`clsx` + `tailwind-merge`).
- **Accessibility (a11y):** Learn **WCAG 2.1 AA**. Understand ARIA roles, focus management (`focus-visible`, focus traps), keyboard navigation, and testing with screen readers (NVDA, VoiceOver).
- **Component Library:** Build your own package on unstyled primitives (e.g. Radix UI or Headless UI), documented and visually tested with Storybook.

---

## 2. State & Data (TanStack Ecosystem)

- **TanStack Query (React Query):**
  - Concepts: `staleTime` vs `gcTime`, query deduplication, optimistic updates.
  - Patterns: query factories, custom data-fetching hooks, error handling with React Error Boundaries, SSR/hydration.
- **TanStack Table:**
  - Headless approach: the table owns logic (sorting, filtering, pagination, column pinning); you own HTML/Tailwind rendering.
  - Build a production table with server-side pagination and large row counts (e.g. TanStack Virtual).

---

## 3. Tooling, Monorepo & Workspaces

Large apps rarely live in a single package.

- **Package Managers & Monorepo:** Learn **pnpm workspaces**. Configure a monorepo (e.g. Turborepo or Nx) with a separate app and a private UI library (`@repo/ui`).
- **Bundlers (Vite & Webpack):** Understand production builds (Rollup/esbuild under Vite) vs dev mode. Configure code splitting, tree shaking, and alternative build targets when needed.
- **Code Quality:** Set up solid **ESLint** (`eslint-plugin-jsx-a11y`, `typescript-eslint`) and **Prettier**, plus Git hooks (**Husky** + **lint-staged**).

---

## 4. Performance & Security (Web Perf & Security)

| Area            | Key topics to master                                                                                                                                                                                      |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Performance** | Core Web Vitals (LCP, INP, CLS), Chrome DevTools profiler, React Profiler, lazy loading components/images, memoization (`useMemo`, `useCallback`, `React.memo` — when to use and when to avoid).         |
| **Security**    | Cross-Site Scripting (XSS), CSRF (safe cookies: `SameSite`, `HttpOnly`), Content Security Policy (CSP), safe JWT handling (storage vs in-memory/cookies).                                                |

---

## 5. CI/CD & Build Processes

- **GitHub Actions / GitLab CI:** Write a pipeline that on every Pull Request:
  1. Runs the linter and typecheck (`tsc --noEmit`).
  2. Runs unit and integration tests (Vitest / React Testing Library).
  3. Builds the UI package and the app.
  4. Deploys a preview (e.g. Vercel / Netlify / Cloudflare Pages).
- **Automated Versioning:** Learn `changesets` or `semantic-release` for SemVer bumps of the UI library in the monorepo.

---

## Recommended Portfolio Project

Instead of many small apps, build **one advanced monorepo**:

1. **Monorepo structure (`pnpm`):**
   - `apps/web`: React app (Vite, TS, TanStack Query, TanStack Table).
   - `packages/ui`: Component library with Storybook.
   - `packages/config`: Shared ESLint, Prettier, and TypeScript configs.
2. **App functionality:** Admin dashboard with analytics and external API data in a table (TanStack Table), filtering, pagination, dark/light theme, and full keyboard accessibility.
3. **CI/CD:** GitHub Actions pipeline validating quality on every commit.
