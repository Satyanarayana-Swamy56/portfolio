# Satya Swamy — Portfolio

A personal portfolio for **Dangeti Satyanarayana Swamy**, a frontend developer
and B.Tech Computer Science (AI & Data Science) student. Three projects with
case-study pages, an about page with education and certifications, and a
contact section that hands a prefilled message to the visitor's email app.

Live site: `https://<your-username>.github.io/<repo-name>/`

## Stack

React 19, TypeScript, Vite, Tailwind CSS 4, Motion, React Router. The same
codebase also builds as a Cloudflare Worker (Hono) if you ever want to host it
there instead.

## Run it

```sh
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run build      # dist/client (assets) + dist/portfolio/index.js (Worker)
npm run build:pages  # static site for GitHub Pages, into dist/client
```

## Make it yours

- `src/data/site.ts` holds everything: name, contact details, social links,
  projects, services, certifications, education and stats. Change the content
  here and every page follows.
- `src/app/pages/*` are the three pages. `src/app/components/motion.tsx` holds
  the reusable animation pieces (masked line reveals, parallax, magnetic
  buttons). Motion respects `prefers-reduced-motion`.
- `src/styles.css` holds the design tokens: paper background, ink text, one
  electric accent, Bricolage Grotesque for display type.
- Project covers and the portrait are SVGs in `public/images`, so they stay
  sharp at any size and weigh almost nothing. Swap in real screenshots when
  you have them.
- `src/worker/index.ts` serves `/api/contact` when the site runs on Cloudflare;
  the static build skips it and the form uses `mailto:` instead.

## Deploy to GitHub Pages

1. Create a repository and push this project to `main`.
2. In the repository, open **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. The workflow in `.github/workflows/deploy-pages.yml` builds and publishes the
   site on every push. The base path is derived from the repository name, so
   both `username.github.io` and project pages work without edits.

## Deploy to Cloudflare (optional)

`deploy.json` points at the Worker build output. Run `npm run build`, then
deploy with the Freebuff `sites_deploy` tool from this directory.
