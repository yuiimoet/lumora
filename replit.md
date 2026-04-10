# Lumora - Cozy Study Companion

## Overview

Lumora is a mobile-style web app (390x844px) built with vanilla HTML/CSS/JS, served via Vite. It features a pastel purple/blue theme with dark mode support and bilingual (Indonesian/English) interface.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Frontend**: Vanilla HTML/CSS/JS (multi-page Vite setup)
- **Styling**: CSS variables for theming (light/dark mode)
- **Charts**: Chart.js (CDN)
- **Data persistence**: localStorage
- **Build tool**: Vite

## App Structure

10 HTML pages in `artifacts/lumora/`:

1. **splash.html** - Animated gradient splash screen with logo, auto-redirects to login
2. **login.html** - Login/Register with localStorage auth
3. **index.html** - Home with stopwatch, menu icons, session history
4. **todo.html** - Task management with categories, priorities, reminders
5. **statistics.html** - Stats cards and Chart.js charts
6. **applock.html** - Focus mode with countdown, blocked apps toggles
7. **folder.html** - File manager with folders, upload, search
8. **ai.html** - Rule-based AI assistant (chat, summarize, flashcards)
9. **settings.html** - Dark mode, language, clear data, about, logout
10. **profile.html** - User profile, badges, stats, photo upload

## Global Features

- **Dark Mode**: CSS variables `:root` / `:root.dark`, stored in `localStorage('theme')`
- **Bilingual**: `const T={id:{...},en:{...}}` in every page, stored in `localStorage('lang')`
- **Auth**: localStorage-based user accounts
- **Theme Colors**: bg #F5F0FF, card #FFFFFF, primary #C3A6E8, accent #A8D8EA, text #4A4063

## Key Commands

- `pnpm --filter @workspace/lumora run dev` — run dev server
- `pnpm --filter @workspace/lumora run build` — build for production
