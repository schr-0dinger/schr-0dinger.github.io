// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://schr-0dinger.github.io',
  integrations: [sitemap()],
  build: {
    // Inline all CSS so first paint needs no extra request.
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
