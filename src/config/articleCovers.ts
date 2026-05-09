import { SITE_URL } from './site';

/**
 * Cover images per article (thematic stock photos, Unsplash License — free commercial use).
 * Files live in `public/images/articles/`.
 */
const ARTICLE_COVERS: Record<string, string> = {
  'ooh-vs-dooh-panduan-merek-indonesia': '/images/articles/ooh-vs-dooh-panduan-merek-indonesia.jpg',
  'metrik-dooh-proof-of-play-indonesia': '/images/articles/metrik-dooh-proof-of-play-indonesia.jpg',
  'dooh-kreatif-durasi-zona-aman-indonesia': '/images/articles/dooh-kreatif-durasi-zona-aman-indonesia.jpg',
  'format-ooh-indonesia-ritel-transit-jalan': '/images/articles/format-ooh-indonesia-ritel-transit-jalan.jpg',
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
  'harga-iklan-digital-signage-mall-jakarta': '/images/articles/harga-iklan-digital-signage-mall-jakarta.jpg',
  'memilih-lokasi-dooh-terbaik-jakarta': '/images/articles/memilih-lokasi-dooh-terbaik-jakarta.jpg',
  'roi-iklan-digital-outdoor-indonesia': '/images/articles/roi-iklan-digital-outdoor-indonesia.jpg',
  'videotron-vs-billboard-digital-signage': '/images/articles/videotron-vs-billboard-digital-signage.jpg',
  'iklan-hotel-lobby-digital-signage-jakarta': '/images/articles/iklan-hotel-lobby-digital-signage-jakarta.jpg',
  'iklan-kampus-universitas-jakarta': '/images/articles/iklan-kampus-universitas-jakarta.jpg',
  'strategi-iklan-ramadan-harbolnas-dooh': '/images/articles/strategi-iklan-ramadan-harbolnas-dooh.jpg',
  'ooh-omnichannel-integrasi-digital-offline': '/images/articles/ooh-omnichannel-integrasi-digital-offline.jpg',
};

const DEFAULT_COVER = '/images/articles/digital-signage-high-traffic-retail.jpg';

export function getArticleCoverPath(slug: string): string {
  return ARTICLE_COVERS[slug] ?? DEFAULT_COVER;
}

export function getArticleCoverAbsoluteUrl(slug: string): string {
  const path = getArticleCoverPath(slug);
  return `${SITE_URL}${path}`;
}
