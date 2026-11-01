# Vanja Dujc – website

Website of Vanja Dujc (olive oil, Koper) in Slovenian, English, German and Italian.
Built with [Astro](https://docs.astro.build) and edited with [Sveltia CMS](https://sveltiacms.app).
The look is a 1:1 copy of the old site, rebuilt so it also works on phones.
The old site is kept in git under the tag `old-site`.

## Run it on your computer

Needs [Node.js](https://nodejs.org) 24 (LTS).

```bash
npm install
npm run dev
```

- Website: http://localhost:4321/
- Editor (CMS): http://localhost:4321/admin/index.html → **Work with Local Repository** → choose this folder.
  Works in Chrome or Edge (not Firefox/Safari). Changes are saved straight into the files here;
  commit them with git afterwards.

`npm run build` creates the finished site in `dist/`.

## Where things are

| What | Where |
|---|---|
| Pages (home, about, contact, FAQ …) | `src/content/pages/<language>/<page>.md` |
| Products | `src/content/products/<language>/<name>.md` |
| Recipes | `src/content/recipes/<language>/<name>.md` |
| News | `src/content/news/<language>/<name>.md` |
| Awards table | `src/content/awards/<language>/<name>.md` |
| Menu, footer and small texts | `src/data/ui.<language>.json` |
| Photos | `public/images/…` |
| Site graphics (header, lines, icons, flags) | `public/layout/` |
| CMS setup | `public/admin/config.yml` (must match `src/content.config.ts`) |
| Old addresses (`kaj_nudimo.htm` …) → new ones | `src/data/legacy-redirects.json` |

Languages: `sl` is the main language at `/`, the others are at `/en/`, `/de/`, `/it/`.
A product, recipe or news item that has no file in a language is simply not shown in that language.

## Placeholder product photos

The photos in `public/images/products/` are **temporary**. They are the old site's photos,
edited so they fit the new design: background shifted to one light beige (`#ebe3cc`, the
`--photo-bg` colour in `src/styles/site.css`), dark tones lifted, product cropped and placed
at the same size on a 600×720 canvas. `maurino.jpg`, `leccino.jpg` and `istrska-belica.jpg`
were cut out of the four-bottle photo; Itrana has no photo of its own yet
(`single-varietal-oils.jpg` is the four-bottle photo).

Replace them with new photos when they exist. For the shop look, new photos should be
**600×720 (or larger, same 5:6 shape)**, product standing near the bottom, on a plain
background close to `#ebe3cc` – or change `--photo-bg` to match the new background.

## Map on the contact page

`public/images/map/dolga-reber.jpg` is a picture made from OpenStreetMap (the credit under the
map is required by its licence). Clicking it opens Google Maps with the address, so navigation
always finds the exact house. The **pin position is an estimate** (OpenStreetMap has no house
numbers for Dolga reber). To move it, change `CONTACT.pin` (latitude, longitude) in
`src/i18n.ts`; the picture itself doesn't need to change as long as the spot is inside it.

## Still to do

- New GitHub account/repository: update `backend.repo` in `public/admin/config.yml`.
- Hosting (GitHub Pages or Cloudflare Pages) and the real domain (`site` in `astro.config.mjs`).
- Online editing: CMS login helper (see "GitHub backend" in the Sveltia docs), then add `base_url` in `public/admin/config.yml`.
- New videos (the old DVD files are not part of the site).
