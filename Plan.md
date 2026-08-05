# Plan Nauki i Rozwoju: Senior Front-End Engineer / UI Specialist

Ustrukturyzowany plan nauki podzielony na 5 filarów, zaprojektowany z myślą o opanowaniu zaawansowanych zagadnień front-endowych oraz zbudowaniu produkcyjnego portfolio.

---

## 1. Architektura UI i Design System

Tworzenie własnej biblioteki komponentów (In-house Design System) wymaga wyjścia poza zwykłe pisanie kodu w Tailwindzie.

- **Tailwind CSS & Tokeny Designu:** Opanuj architekturę tokenów (kolory, typografia, odstępy) z wykorzystaniem zmiennych CSS i Tailwind `config`. Naucz się tworzyć bezkonfliktowe warianty komponentów (używając `clsx` oraz `tailwind-merge`).
- **Dostępność (a11y):** Naucz się standardów **WCAG 2.1 AA**. Zrozum role ARIA, zarządzanie fokusem (`focus-visible`, `FocusTrap`), nawigację klawiaturą oraz testowanie z czytnikami ekranu (NVDA, VoiceOver).
- **Budowa Biblioteki Komponentów:** Zbuduj własną paczkę w oparciu o unstyled primitives (np. Radix UI lub Headless UI), pokrywając ją Storybookiem do dokumentacji i testów wizualnych.

---

## 2. Zarządzanie Stanem i Dane (TanStack Ecosystem)

- **TanStack Query (React Query):**
  - Koncepcje: `staleTime` vs `gcTime`, dedukcja zapytań, optymistyczne aktualizacje (`optimistic updates`).
  - Wzorce: Podział na Query Factories, custom hooki data-fetchingowe, obsługa błędów za pomocą React Error Boundaries oraz SSR/Hydration.
- **TanStack Table:**
  - Opanuj podejście Headless: tabela dostarcza logikę (sortowanie, filtrowanie, paginacja, przypinanie kolumn), a Ty odpowiadasz za renderowanie w HTML/Tailwindzie.
  - Zbuduj produkcyjną tabelę obsługującą server-side pagination oraz dużą liczbę wierszy (z integracją z virtualization, np. TanStack Virtual).

---

## 3. Tooling, Monorepo i Zarządzanie Workspace'ami

Współczesne duże aplikacje rzadko są pojedynczymi repozytoriami.

- **Menedżery paczek i Monorepo:** Poznaj **pnpm workspaces**. Naucz się konfigurować repozytorium monorepo (np. z Turborepo lub Nx), w którym osobno leży aplikacja, a osobno prywatna biblioteka UI (`@repo/ui`).
- **Bundlery (Vite & Webpack):** Zrozum różnice między budowaniem do produkcji (Rollup/Esbuild pod maską Vite) a trybem dev. Naucz się konfigurować Code Splitting, Tree Shaking oraz alternatywne moduły budowania.
- **Jakość Kodu:** Skonfiguruj zaawansowany **ESLint** (z regułami `eslint-plugin-jsx-a11y`, `typescript-eslint`) oraz **Prettier** wspólnie z toolami Git hooks (**Husky** + **lint-staged**).

---

## 4. Wydajność i Bezpieczeństwo (Web Perf & Security)

| Obszar          | Kluczowe zagadnienia do opanowania                                                                                                                                                                   |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Performance** | Core Web Vitals (LCP, INP, CLS), profiler w Chrome DevTools, React Profiler, lazy loading komponentów/obrazów, memoizacja (`useMemo`, `useCallback`, `React.memo` – kiedy stosować, a kiedy unikać). |
| **Security**    | Cross-Site Scripting (XSS), CSRF (bezpieczne ciasteczka `SameSite`, `HttpOnly`), Content Security Policy (CSP), bezpieczna obsługa tokenów JWT (storage vs in-memory/cookies).                       |

---

## 5. CI/CD i Procesy Buildowania

- **GitHub Actions / GitLab CI:** Napisz pipeline, który przy każdym Pull Requeście:
  1. Uruchamia linter i sprawdzanie typów (`tsc --noEmit`).
  2. Wykonuje testy jednostkowe i integracyjne (Vitest / React Testing Library).
  3. Buduje paczkę UI oraz aplikację końcową.
  4. Wdraża wersję podglądową (np. na Vercel / Netlify / Cloudflare Pages).
- **Automatyczne Wersjonowanie:** Poznaj narzędzia takie jak `changesets` lub `semantic-release` do automatycznego podbijania wersji semantycznej (SemVer) biblioteki UI w monorepo.

---

## Rekomendowany Projekt do Portfolio

Zamiast kilku małych aplikacji, zbuduj **jeden zaawansowany system monorepo**:

1. **Struktura Monorepo (`pnpm`):**
   - `apps/web`: Aplikacja React (Vite, TS, TanStack Query, TanStack Table).
   - `packages/ui`: Twoja biblioteka komponentów z powiązanym Storybookiem.
   - `packages/config`: Współdzielone konfigi ESLint, Prettier, TypeScript.
2. **Funkcjonalność Aplikacji:** Panel administracyjny (Dashboard) wyświetlający analitykę i dane z zewnętrznego API w tabeli (TanStack Table), z filtrowaniem, paginacją i pełną obsługą motywu (Dark/Light mode) oraz dostępnością z klawiatury.
3. **CI/CD:** Automatyczny pipeline w GitHub Actions walidujący jakość przy każdym kommicie.
