import type { MetadataRoute } from 'next';
import idT from '@/locales/id/translation.json';
import { getActiveVacancies } from '@/content/careers';
import { SITE_URL } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const articleSlugs: string[] = idT.articlesPage.slugs as string[];
  const vacancies = getActiveVacancies('id');

  return [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/services/media-placement`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/services/ooh-transit`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/services/offline-event`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/careers`, changeFrequency: 'weekly', priority: 0.8 },
    ...vacancies.map((v) => ({
      url: `${SITE_URL}/careers/${v.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/articles`, changeFrequency: 'weekly', priority: 0.8 },
    ...articleSlugs.map((slug) => ({
      url: `${SITE_URL}/articles/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: 'yearly', priority: 0.5 },
  ];
}
