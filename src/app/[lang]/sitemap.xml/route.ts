import { isLocale, locales, siteUrls } from '../../../i18n/config';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// one sitemap per domain, each page linking to its other-language twin
export function GET(_: Request, { params }: { params: { lang: string } }) {
  const lang = isLocale(params.lang) ? params.lang : 'en';
  const pages = [
    { path: '', priority: 1 },
    { path: '/achievements', priority: 0.3 },
    { path: '/imprint', priority: 0.1 },
    { path: '/privacy', priority: 0.1 },
  ];
  const urls = pages.map(({ path, priority }) => `  <url>
    <loc>${siteUrls[lang]}${path}</loc>
${locales.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${siteUrls[l]}${path}"/>`).join('\n')}
    <priority>${priority}</priority>
  </url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
