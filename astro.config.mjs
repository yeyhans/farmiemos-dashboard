// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
      // Or 'hybrid' if you also want to pre-render static routes
    output: 'server',
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), react(), tailwind()],
});