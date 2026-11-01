// Old page addresses (e.g. /kaj_nudimo.htm, /en/products-produktid=2.htm) keep working:
// each one becomes a small page that forwards the visitor to the new address.
import redirects from './data/legacy-redirects.json';

const entries = Object.entries(redirects as Record<string, string>);

export function legacyPaths(lang?: string) {
  return entries
    .filter(([from]) => (lang ? from.startsWith(`${lang}/`) : !from.includes('/')))
    .map(([from, to]) => ({
      params: lang ? { lang, old: from.slice(lang.length + 1, -4) } : { old: from.slice(0, -4) },
      props: { to },
    }));
}

export function redirectPage(to: string): Response {
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>Vanja Dujc</title>
<meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${to}">
<link rel="canonical" href="${to}"></head><body><a href="${to}">${to}</a></body></html>`;
  return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
}
