## 1. Homepage link
- [x] 1.1 Add a workshop paragraph below the supervisors using the existing Link component.
- [x] 1.2 Run the production build and verify placement and destination in a browser.

## Verification
- `pnpm build`: passed; Astro reported zero errors, warnings, or hints.
- `openspec validate add-workshop-homepage-link --strict --no-interactive`: passed.
- Local browser smoke: confirmed descriptive link text, exact destination, and placement directly below the supervisors; captured a full-page screenshot.
- Review target: uncommitted working tree on `main` relative to base/head `74dbc1ac2e9b748bf59626f376895150eb1ce294`. Deliverables: `src/components/ContactLinks.astro` and `openspec/changes/add-workshop-homepage-link/`. Not deployed; change remains unarchived pending acceptance.
