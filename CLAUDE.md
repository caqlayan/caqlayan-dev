# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
```

No lint or test scripts are configured.

## Architecture

Single-page portfolio built with Next.js 16 App Router. All content lives in `lib/data.ts` — update `person`, `skills`, and `projects` there to change site content without touching components.

**Design system** (`app/globals.css`):
- CSS variables: `--c-bg`, `--c-card`, `--c-border`, `--c-text`, `--c-muted`, `--c-accent`, `--c-amber`
- Registered as Tailwind utilities via `@theme inline`: `bg-bg`, `bg-card`, `text-body`, `text-muted`, `text-accent`, `text-amber`, `border-border-t`
- Dark mode via `.dark` class (next-themes): `@custom-variant dark (&:where(.dark, .dark *))`
- Fonts: `--font-sans` (Geist Sans) and `--font-mono` (Geist Mono) — use `font-mono` for terminal-aesthetic elements

**Theme**: `app/layout.tsx` wraps in `<Providers>` (a client component in `components/providers.tsx`) which mounts `ThemeProvider` with `attribute="class"` and `defaultTheme="dark"`.

**Sections** (rendered in order in `app/page.tsx`): Header → Hero → About → Skills → Projects → Contact → Footer. Each is a standalone server component except where Framer Motion animations require client boundaries.

**Adding a project**: add an entry to `projects` in `lib/data.ts` with `status: "shipped" | "in-progress"`.
