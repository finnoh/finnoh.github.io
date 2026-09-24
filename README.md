# Finn-Ole Höner

Personal academic website for Finn-Ole Höner, PhD Researcher in Quantitative Marketing at Erasmus School of Economics.

The static Astro site publishes research, teaching, conference activities, grants, experience, and a downloadable CV. GitHub Pages deployment is defined in `.github/workflows/deploy.yml` and targets `https://finnoh.github.io`.

## Content

- `src/content/blog/`: working papers
- `src/content/work/`: experience entries
- `src/content/projects/`: conference presentations
- `src/pages/teaching/`: teaching and supervision
- `src/pages/activities/`: conference presentations and grants
- `context/cv.pdf`: canonical CV source
- `public/finn-ole-honer-cv.pdf`: downloadable CV published by the site
- `src/assets/finn-ole-hoener.webp`: homepage portrait, optimized from `_DSC5117.tif` (900 px wide, WebP quality 82) and further processed by Astro during the build.

## Commands

Run commands from the repository root with pnpm:

| Command | Action |
| --- | --- |
| `pnpm dev` | Start the local development server. |
| `pnpm build` | Type-check and build the production site into `dist/`. |
| `pnpm preview` | Serve the production build locally. |
| `pnpm lint` | Run ESLint. |

## Deployment

Pushes to `main` trigger the GitHub Pages workflow. Enable GitHub Pages with **GitHub Actions** as the source in the repository settings before the first deployment.

## License

MIT
