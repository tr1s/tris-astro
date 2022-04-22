import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    // Remove all drafts in your final build.
    drafts: false,
  },
  server: {
    port: 666,
    host: true,
  },
  site: 'https://www.tris.codes',
});
