import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.onevitiligo.com';

  const routes: Array<{
    path: string;
    lastmod: Date;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
  }> = [
    { path: '', lastmod: new Date('2026-11-26'), changeFrequency: 'daily', priority: 1.0 },
    { path: '/understand-vitiligo', lastmod: new Date('2026-11-25'), changeFrequency: 'weekly', priority: 0.9 },
    { path: '/understand-vitiligo/stigma-and-misconceptions', lastmod: new Date('2026-11-20'), changeFrequency: 'monthly', priority: 0.8 },
    { path: '/treatment-and-care', lastmod: new Date('2026-11-26'), changeFrequency: 'weekly', priority: 0.95 },
    { path: '/latest-developments', lastmod: new Date('2026-11-26'), changeFrequency: 'weekly', priority: 0.95 },
    { path: '/living-with-vitiligo', lastmod: new Date('2026-11-22'), changeFrequency: 'weekly', priority: 0.9 },
    { path: '/journey-noticed', lastmod: new Date('2026-11-24'), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/journey-changing', lastmod: new Date('2026-11-24'), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/journey-steady', lastmod: new Date('2026-11-24'), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/journey-long-journey', lastmod: new Date('2026-11-24'), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/journey-for-my-child', lastmod: new Date('2026-11-24'), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/journey-for-loved-ones', lastmod: new Date('2026-11-24'), changeFrequency: 'monthly', priority: 0.85 },
    { path: '/about', lastmod: new Date('2026-11-26'), changeFrequency: 'monthly', priority: 0.75 },
    { path: '/medical-advisory-board', lastmod: new Date('2026-11-26'), changeFrequency: 'monthly', priority: 0.75 },
    { path: '/editorial-policy', lastmod: new Date('2026-11-26'), changeFrequency: 'monthly', priority: 0.7 },
    { path: '/resources', lastmod: new Date('2026-11-23'), changeFrequency: 'monthly', priority: 0.8 },
    { path: '/patient-journeys', lastmod: new Date('2026-11-25'), changeFrequency: 'weekly', priority: 0.85 },
    { path: '/global-data', lastmod: new Date('2026-11-25'), changeFrequency: 'monthly', priority: 0.8 },
    { path: '/expert-insights', lastmod: new Date('2026-11-20'), changeFrequency: 'monthly', priority: 0.75 },
    { path: '/share', lastmod: new Date('2026-11-18'), changeFrequency: 'monthly', priority: 0.7 },
    { path: '/find-a-doctor', lastmod: new Date('2026-11-22'), changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact', lastmod: new Date('2026-11-15'), changeFrequency: 'monthly', priority: 0.6 },
    { path: '/privacy', lastmod: new Date('2026-11-10'), changeFrequency: 'yearly', priority: 0.5 },
    { path: '/terms', lastmod: new Date('2026-11-10'), changeFrequency: 'yearly', priority: 0.5 },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: r.lastmod,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
