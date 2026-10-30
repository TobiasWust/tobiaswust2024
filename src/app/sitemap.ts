import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://wust.dev';
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/achievements`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/imprint`, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${base}/privacy`, changeFrequency: 'yearly', priority: 0.1 },
  ];
}
