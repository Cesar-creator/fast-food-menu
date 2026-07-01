# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server at http://localhost:4200
npm run build      # production build → dist/fast-food-menu/
npm test           # run unit tests with Karma/Jasmine
npm run watch      # dev build in watch mode
```

To run a single spec file:
```bash
npx ng test --include='src/app/components/menu/menu.component.spec.ts'
```

## Architecture

Angular 19 single-page digital menu. All components are standalone (no NgModule).

**Data flow:** `MenuService` → `MenuComponent` → child components.

- `MenuService` holds all menu data as hardcoded arrays in `getCategories()`. There is no backend or HTTP layer; to add/change menu items, edit the service directly.
- `MenuComponent` is the root view. It owns `categories`, `activeCategory`, and an `IntersectionObserver` that updates `activeCategory` as the user scrolls through category sections.
- `CategoryNavComponent` receives `activeCategory` and emits `categorySelected` events; `MenuComponent` handles scroll-to-section navigation.
- `HeaderComponent` is presentational only.
- `CopPipe` formats numbers as Colombian Peso (COP) currency — use it whenever displaying a price.

**Models** (`src/app/models/menu.model.ts`): `MenuCategory` (id, name, emoji, items[]) and `MenuItem` (id, name, description, price, image?, available?).

**Assets:** Product images live in `public/assets/images/`. Items with `image: 'no-image.png'` fall back to `placeholder.svg` via `onImageError` in `MenuComponent`. When adding real images, place them in that folder and update the `image` field in `MenuService`.

**Deployment:** Vercel (`vercel.json` at root). The app is deployed as a static Angular build.
