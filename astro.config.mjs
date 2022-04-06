import { defineConfig } from 'astro/config';

export default defineConfig({
  markdown: {
    // Remove all drafts in your final build.
    drafts: false,
  },
  server: { port: 666, host: true },
  site: 'https://www.tris.codes',
});
