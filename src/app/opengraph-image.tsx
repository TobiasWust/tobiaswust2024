import { ImageResponse } from 'next/og';

export const alt = 'Tobias Wust - Freelance Fullstack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
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
        <div style={{ marginTop: 40, fontSize: 48 }}>Freelance Fullstack Developer</div>
        <div style={{ marginTop: 16, fontSize: 32, color: '#f68714' }}>
          React · TypeScript · Node.js · 15+ years
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
