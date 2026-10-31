import { NextRequest, NextResponse } from 'next/server';
import { localeFromHost } from './i18n/config';

// the language comes from the domain, not the path: wust.dev/x renders /en/x, tobiaswust.de/x renders /de/x
export function middleware(request: NextRequest) {
  const locale = localeFromHost(request.headers.get('host'));
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${url.pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // skip Next internals, the Netlify form stub and static files; sitemap.xml and robots.txt still go through
  matcher: ['/((?!_next|__forms\\.html|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|html|js|css|woff2?)$).*)'],
};
