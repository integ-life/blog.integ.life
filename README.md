# blog.integ.life

Static bilingual product journal for the full Integ.Life app family, built with Astro and deployed to GitHub Pages.

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
pnpm run deploy
```

## Content

Publishing target decided by Yangyu on 2026-10-12: **2 posts per week**.
Inspection threshold: at least 2 posts published in the most recent 7 days.

- English posts live in `src/content/posts/en/`.
- Chinese posts live in `src/content/posts/zh/`.
- Keep matching translations on the same `translationKey`.
- Default language is English; Chinese routes are under `/zh/`.

## Deploy

`pnpm run deploy` runs the same shape as the main frontend deploy:

1. `scripts/pre-deploy-check.sh`
2. `pnpm run build`
3. copy `CNAME` into `dist/`
4. push `dist/` to the `gh-pages` branch of `git@github.com:integ-life/blog.integ.life.git`

The pre-deploy check refuses to continue unless you are on a clean `main` whose HEAD equals `origin/main`. Set `ALLOW_UNSAFE_DEPLOY=1` to downgrade those checks to warnings.
