export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// each language lives on its own domain
export const siteUrls: Record<Locale, string> = {
  en: 'https://wust.dev',
  de: 'https://tobiaswust.de',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// tobiaswust.de (and de.localhost for local testing) is German, everything else English
export function localeFromHost(host: string | null): Locale {
  const hostname = (host ?? '').split(':')[0].toLowerCase();
  if (hostname.endsWith('tobiaswust.de') || hostname.startsWith('de.')) return 'de';
  return 'en';
}

// the same page in the other language: swap the domain, keep path and hash
export function otherLanguageUrl(current: URL, target: Locale): string {
  const url = new URL(current.href);
  if (url.hostname.endsWith('localhost')) {
    url.hostname = target === 'de' ? 'de.localhost' : 'localhost';
    return url.toString();
  }
  const base = new URL(siteUrls[target]);
  url.protocol = base.protocol;
  url.host = base.host;
  return url.toString();
}
