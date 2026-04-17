# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with Turbopack
npm run build      # Production build
npm run start      # Run production server
npm run lint       # ESLint via Next.js
```

## Stack

- **Next.js 15** with App Router and React 19
- **TypeScript** (strict mode, path alias `@/*` → `src/*`)
- **Tailwind CSS 4** via `@tailwindcss/postcss`
- **DaisyUI 5** (beta) for UI components
- **Fly.io** for deployment (CI/CD on push to `main` via `.github/workflows/fly-deploy.yml`)

## Architecture

This is a static marketing/portfolio site for a dev agency. There is no database, no auth, and no API routes.

**Data lives in config files:**
- `src/config/teamConfig.ts` — team member objects
- `src/config/homeCards.ts` — home page card data
- Project data is hardcoded directly in `src/app/components/Projects.tsx`

**Component model:** Root layout (`src/app/layout.tsx`) is a server component. Interactive or animated components use `"use client"`. Animations are driven by CSS keyframes in `src/app/globals.css` (typewriter effect, scroll-based zoom, view-based fade-ins) and Intersection Observer in client components.

**Analytics:** Umami is injected in `layout.tsx` via `next/script`. The analytics script is proxied through a rewrite in `next.config.ts` to avoid ad blockers.

**Images:** All project and team images live in `public/imgs/`. Use Next.js `<Image>` with `priority` for above-the-fold images.

## Deployment

Deployed to Fly.io (`fly.toml`, app name `fg`, region `iad`). The Docker build runs `npm ci && npm run build`; runtime is `npm start` with `NODE_ENV=production`. Deploys trigger automatically on merge to `main`.
