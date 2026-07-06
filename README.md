# Maherison Daddy Portfolio

A premium dark portfolio website for a professional Product Visualization Specialist / 3D generalist. The site showcases cinematic renders, product visualization, packaging visualization, motion work, case studies, a gallery/lightbox system, render breakdowns, and a GLB/GLTF viewer.

## Tech stack

- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React icons
- React Three Fiber, Drei, and Three.js for the 3D viewer

## Features

- Responsive cinematic dark UI using `#050505`, `#0D0D0D`, `#121212`, `#181818`, `#F5A623`, `#F5F5F5`, and `#A3A3A3`
- Home, Portfolio, Project Detail, About, Contact, 3D Viewer, and clean 404 routes wired through React Router
- Reusable `PageWrapper`, `SectionHeader`, `Button`, `ProjectCard`, `SkillBadge`, layout, SEO, gallery, lightbox, render breakdown, and viewer components
- Centralized local TypeScript project data in `src/data/projects.ts`
- Portfolio category filtering and search
- Subtle Framer Motion page and section animations

## Project structure

```text
src/
  components/   Reusable UI primitives and layout components
  data/         Local portfolio data and data exports
  lib/          Project query helpers for the local CMS-style data
  pages/        Route-level page components
  types/        Shared TypeScript content types
  App.tsx       Route definitions
  main.tsx      React entry point
  styles.css    Tailwind import and global visual tokens/utilities
```

## Getting started

Local testing requires installing dependencies first:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Production build

```bash
npm run build
npm run preview
```

## Deployment

### Vercel

1. Import the repository in Vercel.
2. Keep the framework preset as **Vite**.
3. Use `npm run build` as the build command.
4. Use `dist` as the output directory.
5. Add a custom domain and replace the configurable canonical URL in `src/components/SEO.tsx` when ready.

### Netlify

1. Connect the repository in Netlify.
2. Set the build command to `npm run build`.
3. Set the publish directory to `dist`.
4. Use Netlify redirects if you need SPA fallback support for direct route visits.

### GitHub Pages

GitHub Pages is feasible, but route handling and base paths need extra care for a Vite SPA:

1. If deploying to `https://username.github.io/repository-name/`, set the Vite `base` option to `/repository-name/` in `vite.config.ts`.
2. Build with `npm run build`.
3. Publish the `dist` folder with a GitHub Pages workflow.
4. Add an SPA fallback strategy if users need to open nested routes such as `/portfolio/project-slug` directly.

## Production checklist

- Replace sample renders, thumbnails, portrait, downloads, and social profile links.
- Replace configurable contact information, email, phone, location, and availability.
- Update the canonical URL and Open Graph image to the production domain/assets.
- Test responsive layouts on mobile, tablet, and desktop breakpoints.
- Test the contact form UX and connect it to a real form service if needed.
- Test the 3D viewer with real `.glb` or `.gltf` files in `public/models/`.
- Run Lighthouse and check performance, accessibility, SEO, and best-practice scores.
- Check all internal routes, download links, social links, and media paths for broken references.

## Known limitations

- Contact form submission is intentionally front-end only until a real form endpoint is connected.
- Project images currently use sample remote assets; production work should use optimized local images.
- The 3D viewer expects model files in `public/models/`, but the sample GLB is only a sample path.
- Canonical and social preview URLs use configurable values until the production domain is chosen.

## Recommended next improvements

- Replace sample imagery with original render assets and optimized thumbnails.
- Add a real contact form endpoint or email service integration.
- Replace configurable SEO/canonical values with the final production domain.
- Add image lightboxes, video embeds, or Sketchfab embeds for interactive work.

## How to add a new project

Project content is managed locally in `src/data/projects.ts`, with shared TypeScript types in `src/types/project.ts` and query helpers in `src/lib/projects.ts`.

1. Add project images to a public folder such as:

```text
public/projects/my-project/
  thumbnail.jpg
  hero.jpg
  gallery-01.jpg
  wireframe.jpg
  clay.jpg
  final.jpg
```

2. Create a new project object in `src/data/projects.ts` using the `Project` shape. Important fields include:

- `id` and `slug`: use the same URL-safe value, such as `my-project`.
- `thumbnail` and `heroImage`: used by cards and detail hero sections.
- `gallery`: an array of image/video media objects with title, caption, and tag.
- `wireframeImage`, `clayImage`, and `finalImage`: used by the render breakdown comparison.
- `featured`: set to `true` to show the project on the Home page.
- `order`: controls the display order returned by project helpers.

3. Slug routing uses `/portfolio/:id`; the detail page calls `getProjectBySlug(id)` from `src/lib/projects.ts`, so the URL segment must match the project `slug`.

4. Use the helper functions in `src/lib/projects.ts` when building UI instead of filtering the raw data directly.
