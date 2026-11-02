import { ImageResponse } from 'next/og';
import { isLocale, locales } from '../../../i18n/config';
import { getDictionary } from '../../../i18n/dictionaries';

// a plain route instead of Next's opengraph-image file: that one puts its internal /en/… path into the
// og:image tag, which 404s behind the domain middleware. /share-image gets rewritten like every other page.
const size = { width: 1200, height: 630 };

export const dynamic = 'force-static';

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export function GET(_: Request, { params }: { params: { lang: string } }) {
  const { meta } = getDictionary(isLocale(params.lang) ? params.lang : 'en');
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#0e1538',
          color: '#fef8f8',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 96, fontWeight: 700 }}>
          <span style={{ background: '#f68714', color: '#111', padding: '0 24px' }}>
            Tobias Wust
          </span>
        </div>
        <div style={{ marginTop: 40, fontSize: 48 }}>{meta.ogTagline}</div>
        <div style={{ marginTop: 16, fontSize: 32, color: '#f68714' }}>
          {meta.ogStack}
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 24,
            background: 'linear-gradient(to right, #f68714, #f9cb9c, #3dba6a)',
          }}
        />
      </div>
    ),
    size,
  );
}
