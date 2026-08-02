# Win Lei Thawdar | Portfolio

Personal portfolio website built with Next.js App Router, TypeScript, Tailwind CSS, and `npm`. The site is designed as a clean, expandable base for showcasing education, experience, projects, skills, and personal storytelling.

## Project overview

- Responsive personal portfolio with a shared floating header and persistent theme toggle
- Introductory home hero with profile image, project CTA, contact CTA, and social links
- Home page sections for journey, values, interactive skills overview, and quick navigation to other pages
- Timeline-based education and experience pages
- Project showcase page with previews, links, highlights, and team context
- Mobile-first refinements including a bottom navigation bar and compact responsive cards
- Light mode by default, with dark mode support powered by `next-themes`

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
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

- `npm run dev` starts the local development server
- `npm run build` creates the production build
- `npm run start` serves the production build locally
- `npm run lint` runs ESLint

## Page routes

- `/` home
- `/education`
- `/experience`
- `/projects`
- `/about` redirects to `/education`

## Folder structure

```text
public/
  images/
    profile/
    projects/
  logos/
    education/
    experience/

src/
  app/
    about/
    education/
    experience/
    projects/
    globals.css
    icon.svg
    layout.tsx
    page.tsx
  components/
    home-hero.tsx
    icons.tsx
    page-intro.tsx
    site-footer.tsx
    site-header.tsx
    skills-icon-cloud.tsx
    theme-provider.tsx
    theme-toggle.tsx
  lib/
    navigation.ts
```

## Theme direction

- Calm, editorial, spacious, and personal
- Soft lavender and muted plum accents over warm beige and off-white neutrals
- Minimal motion, subtle borders, rounded forms, and clean contrast in both themes
- Light mode is the default theme
- Theme selection persists between visits

## Deployment on Vercel

1. Push the repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Keep the framework preset as `Next.js`.
4. Install command: `npm install`
5. Build command: `npm run build`
6. Output settings: leave the default Next.js configuration.
7. Deploy.
