/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.phaser.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
