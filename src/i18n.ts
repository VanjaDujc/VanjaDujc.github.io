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

// Main menu, in display order
export const MENU: { page: PageKey; label: keyof UiText }[] = [
  { page: 'home', label: 'navHome' },
  { page: 'products', label: 'navProducts' },
  { page: 'awards', label: 'navAwards' },
  { page: 'press', label: 'navPress' },
  { page: 'faq', label: 'navFaq' },
  { page: 'recipes', label: 'navRecipes' },
  { page: 'contact', label: 'navContact' },
  { page: 'links', label: 'navLinks' },
];

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
