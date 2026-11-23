import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://www.adibains.me',
  base: process.env.PORTFOLIO_BASE ?? '/',
});
