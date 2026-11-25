import { NextRequest, NextResponse } from 'next/server';
import { localeFromHost } from './i18n/config';

// the language comes from the domain, not the path: wust.dev/x renders /en/x, tobiaswust.de/x renders /de/x
export function middleware(request: NextRequest) {
  // www.tobiaswust.de is only an alias: send it to the main address so Google sees one version.
  // This has to happen here, because Netlify redirects only run after this rewrite.
  const host = request.headers.get('host')?.split(':')[0];
  if (host === 'www.tobiaswust.de') {
    return NextResponse.redirect(`https://tobiaswust.de${request.nextUrl.pathname}${request.nextUrl.search}`, 301);
  }

  const locale = localeFromHost(request.headers.get('host'));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // skip Next internals, the Netlify form stub, app-ads.txt (AdMob) and static files; sitemap.xml and robots.txt still go through
  matcher: ['/((?!_next|__forms\\.html|app-ads\\.txt|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|html|js|css|woff2?)$).*)'],
};
