// Languages, UI texts and URL helpers.
// Slovenian lives at "/", the other languages under "/en/", "/de/" and "/it/".
import sl from './data/ui.sl.json';
import en from './data/ui.en.json';
import de from './data/ui.de.json';
import it from './data/ui.it.json';

export const LOCALES = ['sl', 'en', 'de', 'it'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'sl';

export type UiText = typeof sl;
export const ui: Record<Locale, UiText> = { sl, en, de, it };

// Fixed pages: content file name -> URL segment
export const PAGE_PATHS = {
  home: '',
  about: 'about/',
  products: 'products/',
  awards: 'awards/',
  press: 'press/',
  faq: 'faq/',
  recipes: 'recipes/',
  news: 'news/',
  contact: 'contact/',
  links: 'links/',
  gallery: 'gallery/',
} as const;
export type PageKey = keyof typeof PAGE_PATHS;

// Main menu, in display order (the logo leads to the home page)
export const MENU: { page: PageKey; label: keyof UiText }[] = [
  { page: 'about', label: 'navAbout' },
  { page: 'products', label: 'navProductsShort' },
  { page: 'awards', label: 'navAwards' },
  { page: 'recipes', label: 'navRecipes' },
  { page: 'faq', label: 'navFaqShort' },
  { page: 'contact', label: 'navContact' },
];

// Smaller links in the footer
export const FOOTER_MENU: { page: PageKey; label: keyof UiText }[] = [
  { page: 'press', label: 'navPress' },
  { page: 'news', label: 'newsLink' },
  { page: 'gallery', label: 'galleryLink' },
  { page: 'links', label: 'navLinks' },
];

// Phone numbers and e-mail used for the call / write buttons
export const CONTACT = {
  phones: [
    { name: 'Vanja', display: '040 234 537', tel: '+38640234537' },
    { name: 'Lena', display: '031 347 936', tel: '+38631347936' },
  ],
  email: 'vanjadujc@siol.net',
  // clicking the map opens Google Maps with the address (Google finds the exact house)
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dolga+reber+4%2C+6000+Koper%2C+Slovenia',
  // map picture made from OpenStreetMap: its centre, zoom level and size in pixels
  map: { image: '/images/map/dolga-reber.jpg', lat: 45.5463, lon: 13.7037, zoom: 17, width: 1200, height: 750 },
  // position of the pin on the map; ESTIMATED from the old site's map, move it if the house is elsewhere
  pin: { lat: 45.5463, lon: 13.7037 },
};

export function localePrefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? '/' : `/${locale}/`;
}

export function localeUrl(locale: Locale, path = ''): string {
  return localePrefix(locale) + path;
}

export function pageUrl(locale: Locale, page: PageKey): string {
  return localeUrl(locale, PAGE_PATHS[page]);
}

// Content entry ids look like "en/couvee"
export function splitId(id: string): { locale: Locale; slug: string } {
  const [locale, ...rest] = id.split('/');
  return { locale: locale as Locale, slug: rest.join('/') };
}

export function formatDate(date: Date): string {
  return `${date.getUTCDate()}.${date.getUTCMonth() + 1}.${date.getUTCFullYear()}`;
}
