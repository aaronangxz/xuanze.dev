// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://xuanze.dev',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap({ filter: (page) => !/^https:\/\/xuanze\.dev\/(404|blog|docs)(\/|$)/.test(page) })],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      defaultColor: false,
      wrap: false,
    },
  },
});
