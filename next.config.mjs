/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.picsum.photos',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/*',
      },
    ],
    domains: ['picsum.photos', '*.picsum.photos'],
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

export default nextConfig;
