import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Keep these sets in sync with generateStaticParams in the respective page files.
const VALID_SERVICE_SLUGS = new Set(['media-placement', 'ooh-transit', 'offline-event']);

const VALID_ARTICLE_SLUGS = new Set([
  'ooh-vs-dooh-panduan-merek-indonesia',
  'metrik-dooh-proof-of-play-indonesia',
  'dooh-kreatif-durasi-zona-aman-indonesia',
  'format-ooh-indonesia-ritel-transit-jalan',
  'social-commerce-kreator-indonesia-ooh',
  'ai-search-brand-discovery-indonesia-2026',
  'video-pendek-live-commerce-titik-fisik-indonesia',
  'retail-media-network-indonesia',
  'ai-kreatif-dan-konteks-dooh',
  'programmatic-dooh-data-driven-indonesia',
  'digital-signage-high-traffic-retail',
  'ooh-transit-brand-visibility-indonesia',
  'experiential-activation-offline-events',
  'harga-iklan-digital-signage-mall-jakarta',
  'memilih-lokasi-dooh-terbaik-jakarta',
  'roi-iklan-digital-outdoor-indonesia',
  'videotron-vs-billboard-digital-signage',
  'iklan-hotel-lobby-digital-signage-jakarta',
  'iklan-kampus-universitas-jakarta',
  'strategi-iklan-ramadan-harbolnas-dooh',
  'ooh-omnichannel-integrasi-digital-offline',
]);

// Filled vacancies that are permanently gone should be added here so
// Google removes them from the index. Active vacancies should NOT be listed here.
const GONE_CAREER_SLUGS = new Set<string>([]);

// Top-level paths that are valid pages (exact match).
const VALID_TOP_LEVEL = new Set(['/', '/articles', '/careers', '/privacy-policy']);

// Path prefixes that Next.js or the browser handles — never touch these.
const PASSTHROUGH_PREFIXES = [
  '/_next/',
  '/images/',
  '/api/',
];

// Single-segment static files in public/.
const PASSTHROUGH_FILES = new Set([
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
  '/logo.png',
]);

function gone() {
  return new NextResponse('410 Gone', {
    status: 410,
    headers: { 'Content-Type': 'text/plain' },
  });
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Always pass through Next.js internals and static assets.
  if (PASSTHROUGH_FILES.has(pathname)) return;
  for (const prefix of PASSTHROUGH_PREFIXES) {
    if (pathname.startsWith(prefix)) return;
  }

  // Exact top-level pages.
  if (VALID_TOP_LEVEL.has(pathname)) return;

  const parts = pathname.split('/').filter(Boolean);

  // /services/[slug]
  if (parts[0] === 'services' && parts.length === 2) {
    if (VALID_SERVICE_SLUGS.has(parts[1])) return;
    return gone();
  }

  // /articles/[slug]
  if (parts[0] === 'articles' && parts.length === 2) {
    if (VALID_ARTICLE_SLUGS.has(parts[1])) return;
    return gone();
  }

  // /careers/[slug]
  if (parts[0] === 'careers' && parts.length === 2) {
    if (GONE_CAREER_SLUGS.has(parts[1])) return gone();
    // Unknown but potentially active vacancy — let Next.js handle as 404.
    return;
  }

  // Everything else (random paths, .php files, old WordPress URLs, etc.) → 410.
  return gone();
}

export const config = {
  // Run on all paths except Next.js static chunks and image optimisation.
  matcher: ['/((?!_next/static|_next/image).*)'],
};
