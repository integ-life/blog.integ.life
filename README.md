# blog.integ.life

Static bilingual productivity blog for `blog.integ.life`, built with Astro and deployed to GitHub Pages.

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
pnpm run deploy
```

## Content

- English posts live in `src/content/posts/en/`.
- Chinese posts live in `src/content/posts/zh/`.
- Keep matching translations on the same `translationKey`.
- Default language is English; Chinese routes are under `/zh/`.

## Deploy

`pnpm run deploy` runs the same shape as the main frontend deploy:

1. `scripts/pre-deploy-check.sh`
2. `pnpm run build`
3. copy `CNAME` into `dist/`
4. push `dist/` to the `gh-pages` branch of `git@github.com:flyfy1/blog.integ.life.git`
