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
- `/` → `NewsLandingPage` — news/events landing
- `/about-info` → `AboutInfoPage` — "Сведения об образовательной организации"

**Source layout:**
- `src/pages/NewsLandingPage/` — news landing page (layout, sections, footer)
- `src/pages/AboutInfoPage/` — org info page (founder details, addresses, education info)
- `src/components/ui/` — reusable primitives: Button, Card, Heading (polymorphic via `as` prop)
- `src/components/news/` — domain components: Navbar (with `react-router-dom` `Link`s), FilterChip, Pagination, and card variants (Featured, Event, Medium, Light)
- `src/lib/figmaAssets.ts` — Figma image URLs for NewsLandingPage
- `src/lib/aboutInfoAssets.ts` — Figma image URLs for AboutInfoPage

## Conventions

- **One directory per component** containing `ComponentName.tsx` + `ComponentName.module.css`
- **CSS Modules** for all styling; root element gets `styles.root`, optional `className` prop composed via `[styles.root, className].filter(Boolean).join(" ")`
- **Props typed inline** with `type ComponentProps = { ... }` (not interfaces, not exported)
- **CSS variables** for theming defined in `src/index.css` (`--text`, `--bg`, `--accent`, `--sans`, `--heading`, etc.) with dark mode via `prefers-color-scheme`
- **TypeScript strict mode** — no unused variables/parameters allowed
- Language in UI: Belarusian/Russian
