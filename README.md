# IDEA HOUSE Website

Official responsive brand website for IDEA HOUSE, a Content & Brand Studio built around:

- Text
- Graphic
- Planning

## Project Structure

- `app/` - Next.js route entry and global styles.
- `components/layout/` - Header, footer, and site-wide layout pieces.
- `components/sections/` - One file for each visible page section.
- `components/shared/` - Reusable UI pieces used across sections.
- `components/visuals/` - Decorative or brand visuals.
- `data/` - Editable website content.
- `hooks/` - Client-side behavior such as theme and contact form logic.
- `lib/` - Small utilities used by components.
- `public/assets/` - Images and brand graphics used by the site.

## Sections

- Home
- About IDEA HOUSE
- Services
- Plans & Pricing
- Portfolio / Selected Work
- Contact

## Deployment

The site is a static Next.js export configured for GitHub Pages.

```bash
pnpm install
NEXT_PUBLIC_BASE_PATH=/Portfolio pnpm run build
```

GitHub Actions builds and deploys the `out/` folder automatically on every push to `main`.

The live GitHub Pages URL is:

https://creativehouse101.github.io/Portfolio/
