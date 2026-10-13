# Win Lei Thawdar | Portfolio

Personal portfolio website built with Next.js App Router, TypeScript, Tailwind CSS, and `npm`. The site is designed as a clean, expandable base for showcasing education, experience, projects, skills, and personal storytelling.

## Project overview

- Responsive personal portfolio with a shared floating header, résumé and Linktree shortcuts, and a persistent theme toggle
- Introductory home hero with profile image, project, résumé, and contact CTAs, and social links
- Home page that works as a one-page summary: selected projects, education and experience highlights, interactive skills cloud, photo albums, and contact
- Timeline-based education and experience pages, with awards and certifications on the education page
- Project showcase page with previews, links, highlights, and team context
- Mobile-first refinements including a bottom navigation bar and compact responsive cards
- Dark mode by default, with a light mode toggle powered by `next-themes`

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- `next-themes`
- Vercel Analytics
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

`/experience` is statically generated and revalidated daily (`revalidate = 86400`) so durations for ongoing roles stay current.

## Folder structure

```text
public/
  images/
    certificates/
    journey/
    profile/
    projects/
  logos/
    education/
    experience/
  resume/

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
    journey-albums.tsx
    page-intro.tsx
    project-gallery.tsx
    scroll-reveal.tsx
    section-heading.tsx
    site-footer.tsx
    site-header.tsx
    skills-icon-cloud.tsx
    theme-provider.tsx
    theme-toggle.tsx
  lib/
    navigation.ts
```

## Updating content

- **Résumé:** place the PDF in `public/resume/` and point `resumeHref` in `src/lib/navigation.ts` at it. Browsers show the PDF's embedded Title in the tab, and Google Docs sets it to the document name, so name the Google Doc "Win Lei Thawdar – Résumé" before exporting.
- **Projects:** entries live in `projectItems` in `src/components/project-gallery.tsx`. `featuredTitles` controls which appear on the home page.
- **Experience and education:** entries live in their page files under `src/app/`. Awards and certifications are `awardItems` and `certificationItems` in `src/app/education/page.tsx`.
- **Images:** save screenshots as WebP, at most 2000px wide (aim for under ~200 KB). `next/image` handles responsive sizing.

## Theme direction

- Calm, editorial, spacious, and personal
- Soft lavender and muted plum accents over warm beige and off-white neutrals
- Minimal motion, subtle borders, rounded forms, and clean contrast in both themes
- Dark mode is the default theme
- Theme selection persists between visits

## Deployment on Vercel

1. Push the repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Keep the framework preset as `Next.js`.
4. Install command: `npm install`
5. Build command: `npm run build`
6. Output settings: leave the default Next.js configuration.
7. Deploy.
