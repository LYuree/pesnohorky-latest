# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Pesnohorky — a news/events site for a music/arts center. React 19 + TypeScript + Vite 8 + React Router DOM, presentation-only (no backend, no state management).

## Commands

- `npm run dev` — start Vite dev server (localhost:5173)
- `npm run build` — TypeScript type-check (`tsc -b`) then Vite production build
- `npm run lint` — ESLint across all files
- `npm run preview` — serve production build locally

## Architecture

**Entry flow:** `index.html` → `src/main.tsx` → `App.tsx` (BrowserRouter + Routes)

**Routing (`App.tsx`):**
- `/` → `HomePage` — main landing page
- `/news` → `NewsLandingPage` — news/events landing
- `/news/:slug` → `NewsDetailPage` — single news article
- `/about-info` → `AboutInfoPage` — "Сведения об образовательной организации"
- `/about-info/structure` → `StructurePage`
- `/about-info/documents` → `DocumentsPage`
- `/about-info/education` → `EducationPage`
- `/about-info/leadership` → `LeadershipPage`
- `/about-info/teachers-staff` → `TeachersStaffPage`
- `/about-info/facilities` → `FacilitiesPage`
- `/about-info/paid-education` → `PaidEducationPage`
- `/about-info/finances` → `FinancesPage`
- `/about-info/vacancies` → `VacanciesPage`
- `/about-info/scholarships` → `ScholarshipsPage`
- `/about-info/international` → `InternationalPage`
- `/about-info/nutrition` → `NutritionPage`
- `/about` → `AboutPage` — о центре
- `/departments` → `DepartmentsPage`
- `/departments/:id` → `DepartmentDetailPage`
- `/contacts` → `ContactsPage`
- `/teachers/:id` → `TeacherDetailPage`
- `/parents` → `ParentsPage`
- `/parents/safety` → `SafetyPage`
- `/parents/privacy` → `PrivacyPage`
- `/parents/social-cert` → `SocialCertPage`
- `/parents/paid-services` → `PaidServicesPage`
- `/parents/smart-holidays` → `SmartHolidaysPage`
- `/parents/anti-corruption` → `AntiCorruptionPage`
- `/parents/quality-assessment` → `QualityAssessmentPage`
- `/parents/anti-extremism` → `AntiExtremismPage`
- `/parents/temperature` → `TemperaturePage`

**Source layout:**
- `src/pages/{PageName}/` — one directory per page with `PageName.tsx` + `PageName.module.css`
- `src/components/shared/` — shared components: `Footer/`, `MobileHeader/`
- `src/components/ui/` — reusable primitives: Button, Card, Heading (polymorphic via `as` prop)
- `src/components/news/` — domain components: Navbar, FilterChip, Pagination, card variants (Featured, Event, Medium, Light)
- `src/lib/figmaAssets.ts` — Figma image URLs for NewsLandingPage
- `src/lib/aboutInfoAssets.ts` — Figma image URLs for AboutInfoPage
- `src/lib/*Assets.ts` — per-page Figma image asset maps

## Conventions

- **One directory per component** containing `ComponentName.tsx` + `ComponentName.module.css`
- **CSS Modules** for all styling; root element gets `styles.root`, optional `className` prop composed via `[styles.root, className].filter(Boolean).join(" ")`
- **Props typed inline** with `type ComponentProps = { ... }` (not interfaces, not exported)
- **CSS variables** for theming defined in `src/index.css` (`--text`, `--bg`, `--accent`, `--sans`, `--heading`, etc.) with dark mode via `prefers-color-scheme`
- **TypeScript strict mode** — no unused variables/parameters allowed
- **Mobile breakpoint:** `@media (max-width: 768px)` in each page's module.css
- **MobileHeader** (`src/components/shared/MobileHeader/`) — burger nav, hidden on desktop via CSS, shown on mobile. All pages include `<MobileHeader />` as the first element. Navbar hides itself at `max-width: 768px`.
- Language in UI: Belarusian/Russian
- Brand colors: `#a51312` (red), `#fffff9` (warm white)
- Fonts: "Harlequinade" (decorative titles), "Montserrat Alternates" (body), "Dark Deco" (decorative text)
