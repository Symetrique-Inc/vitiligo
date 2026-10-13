import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vitiligohub.org';
  const lastModified = new Date('2026-10-14');

  const routes = [
    '',
    '/about',
    '/understand-vitiligo',
    '/understand-vitiligo/stigma-and-misconceptions',
    '/living-with-vitiligo',
    '/treatment-and-care',
    '/expert-insights',
    '/resources',
    '/find-a-doctor',
    '/share',
    '/privacy',
    '/terms',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/understand-vitiligo') ? 0.9 : 0.8,
  }));
}
