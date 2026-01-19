# Premium AI/ML Portfolio Template

This is a fully responsive, animated Next.js (App Router) template for showcasing an AI/ML engineer profile with placeholder content. It is ready for any hosting provider and keeps all personal data customizable.

## Tech Stack
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Framer Motion
- React Three Fiber + Drei
- next-themes for light/dark toggling

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
   The site is available at http://localhost:3000.
3. Build for production:
   ```bash
   npm run build && npm run start
   ```

## Customization Checklist
- Replace placeholder text in `lib/content.ts`.
- Update hero copy, contact email, and CTA links in the respective section components.
- Swap placeholder images or remote links in `ProjectsSection`.
- Provide actual diagram assets for case studies and add more entries as needed.
- Update metadata in `app/layout.tsx`, sitemap (`app/sitemap.ts`), and robots configuration (`app/robots.ts`).

## Accessibility & Performance Notes
- All interactive elements include focus states and alt text.
- 3D canvas is dynamically loaded and falls back to a static image on mobile for performance.
- Animations use reduced motion friendly defaults from Framer Motion.

## Deployment
The project is hosting-neutral - export or deploy to Netlify, Render, Cloudflare Pages, GitHub Pages (via `next export`), or any Node.js compatible provider.
