# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Pesnohorky — a news/events landing page for a music/arts center. React 19 + TypeScript + Vite 8, presentation-only (no backend, no routing, no state management).

## Commands

- `npm run dev` — start Vite dev server (localhost:5173)
- `npm run build` — TypeScript type-check (`tsc -b`) then Vite production build
- `npm run lint` — ESLint across all files
- `npm run preview` — serve production build locally

## Architecture

**Entry flow:** `index.html` → `src/main.tsx` → `App.tsx` → `NewsLandingPage`

**Source layout:**
- `src/pages/NewsLandingPage/` — the single page component (layout, sections, footer)
- `src/components/ui/` — reusable primitives: Button, Card, Heading (polymorphic via `as` prop)
- `src/components/news/` — domain components: Navbar, FilterChip, Pagination, and card variants (Featured, Event, Medium, Light)
- `src/lib/figmaAssets.ts` — exported Figma image URLs used across components

## Conventions

- **One directory per component** containing `ComponentName.tsx` + `ComponentName.module.css`
- **CSS Modules** for all styling; root element gets `styles.root`, optional `className` prop composed via `[styles.root, className].filter(Boolean).join(" ")`
- **Props typed inline** with `type ComponentProps = { ... }` (not interfaces, not exported)
- **CSS variables** for theming defined in `src/index.css` (`--text`, `--bg`, `--accent`, `--sans`, `--heading`, etc.) with dark mode via `prefers-color-scheme`
- **TypeScript strict mode** — no unused variables/parameters allowed
- Language in UI: Belarusian/Russian
