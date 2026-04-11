import { SITE_URL } from './site';

/**
 * Cover images per article (thematic stock photos, Unsplash License — free commercial use).
 * Files live in `public/images/articles/`.
 */
const ARTICLE_COVERS: Record<string, string> = {
  'social-commerce-kreator-indonesia-ooh': '/images/articles/social-commerce-kreator-indonesia-ooh.jpg',
  'ai-search-brand-discovery-indonesia-2026': '/images/articles/ai-search-brand-discovery-indonesia-2026.jpg',
  'video-pendek-live-commerce-titik-fisik-indonesia':
    '/images/articles/video-pendek-live-commerce-titik-fisik-indonesia.jpg',
  'retail-media-network-indonesia': '/images/articles/retail-media-network-indonesia.jpg',
  'ai-kreatif-dan-konteks-dooh': '/images/articles/ai-kreatif-dan-konteks-dooh.jpg',
  'programmatic-dooh-data-driven-indonesia': '/images/articles/programmatic-dooh-data-driven-indonesia.jpg',
  'digital-signage-high-traffic-retail': '/images/articles/digital-signage-high-traffic-retail.jpg',
  'ooh-transit-brand-visibility-indonesia': '/images/articles/ooh-transit-brand-visibility-indonesia.jpg',
  'experiential-activation-offline-events': '/images/articles/experiential-activation-offline-events.jpg',
};

const DEFAULT_COVER = '/images/articles/digital-signage-high-traffic-retail.jpg';

export function getArticleCoverPath(slug: string): string {
  return ARTICLE_COVERS[slug] ?? DEFAULT_COVER;
}

export function getArticleCoverAbsoluteUrl(slug: string): string {
  const path = getArticleCoverPath(slug);
  return `${SITE_URL}${path}`;
}
