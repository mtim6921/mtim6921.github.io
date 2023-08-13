import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://mtim6921.github.io',
  // base: '/portfolio',
  experimental: {
    viewTransitions: true
  }
});

