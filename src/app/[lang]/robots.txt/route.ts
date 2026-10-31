import { isLocale, locales, siteUrls } from '../../../i18n/config';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function GET(_: Request, { params }: { params: { lang: string } }) {
  const lang = isLocale(params.lang) ? params.lang : 'en';
  return new Response(`User-Agent: *\nAllow: /\n\nSitemap: ${siteUrls[lang]}/sitemap.xml\n`, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
