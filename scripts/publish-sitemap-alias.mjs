import { copyFile } from 'node:fs/promises';

// Keep the conventional entry point and the Astro sitemap index identical.
await copyFile(new URL('../dist/sitemap-index.xml', import.meta.url), new URL('../dist/sitemap.xml', import.meta.url));
