// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Public address of the site; change it when the final domain is known.
  site: 'https://www.vanjadujc.net',
  // Old addresses like /kaj_nudimo.htm are served as redirect files, so trailing slashes stay optional.
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'sl',
        locales: { sl: 'sl-SI', en: 'en', de: 'de-DE', it: 'it-IT' },
      },
    }),
  ],
});
