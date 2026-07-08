# Project Structure

This project is organized so each kind of edit has a clear place.

## Main Folders

- `app/` contains the Next.js route entry, metadata, layout, and global CSS.
- `components/layout/` contains site-wide layout components such as the header and footer.
- `components/sections/` contains one component per page section: hero, about, services, plans, portfolio, and contact.
- `components/shared/` contains reusable interface pieces such as section headings, form fields, and the theme switch.
- `components/visuals/` contains decorative or brand visuals that are not page sections by themselves.
- `data/` contains editable website content, prices, portfolio items, contact details, and navigation links.
- `hooks/` contains client-side behavior for the contact form and light/dark theme.
- `lib/` contains small shared helpers.
- `public/assets/` contains the image files used by the site.
- `_next/`, `assets/`, `404/`, `index.html`, and `index.txt` are generated deployment output for the current GitHub Pages branch setup.

## Common Edits

- Change text, services, prices, or selected work in `data/portfolio.ts`.
- Change the header in `components/layout/site-header.tsx`.
- Change the footer in `components/layout/site-footer.tsx`.
- Change a page section in the matching file inside `components/sections/`.
- Add or replace images in `public/assets/`, then reference them from `data/portfolio.ts`.
- Change global colors or repeated CSS utilities in `app/globals.css`.

## Deployment

GitHub Actions builds the static site from source. The current GitHub Pages branch setup also needs the generated root export files committed.

Do not edit generated build output by hand. Run a production build, then refresh the root output from `out/`.
