// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bigballs.ooo',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  // Pure static — no adapter required for Cloudflare Workers Static Assets
});
