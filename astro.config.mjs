// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Static, zero-JS by default. No UI framework, no CSS framework —
// the whole site is HTML + a hand-rolled token layer.
export default defineConfig({
  site: 'https://blackk.website',
  output: 'static',
  compressHTML: true,
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});