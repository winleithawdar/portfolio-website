# Win Lei Thawdar Portfolio

Minimal personal portfolio skeleton built with Next.js App Router, TypeScript, Tailwind CSS, and `npm`. The content is intentionally sparse so it can be expanded later without undoing placeholder-heavy sections.

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- `next-themes`
- ESLint

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Available commands

- `npm run dev` starts the local development server.
- `npm run build` creates the production build.
- `npm run start` serves the production build locally.
- `npm run lint` runs ESLint.

## Page routes

- `/`
- `/about`
- `/experience`
- `/projects`
- `/journal`

## Folder structure

```text
src/
  app/
    about/
    experience/
    journal/
    projects/
    globals.css
    layout.tsx
    page.tsx
  components/
    icons.tsx
    page-intro.tsx
    site-footer.tsx
    site-header.tsx
    theme-provider.tsx
    theme-toggle.tsx
  lib/
    navigation.ts
```

## Theme direction

- Light mode is the default theme.
- Theme selection persists between visits through `next-themes`.
- The palette leans on muted lavender, dusty lilac, warm beige, soft off-white, and deep plum accents.
- The overall direction is calm, editorial, spacious, and easy to expand.

## Vercel deployment

1. Push the repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Keep the framework preset as `Next.js`.
4. Install command: `npm install`
5. Build command: `npm run build`
6. Output setting: leave the default Next.js configuration.
7. Deploy.
