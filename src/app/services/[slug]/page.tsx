import type { Metadata } from 'next';
import idT from '@/locales/id/translation.json';
import { SITE_URL } from '@/config/site';
import ServicePage from '@/views/ServicePage';

type Props = { params: Promise<{ slug: string }> };

const SERVICE_META: Record<string, { title: string; description: string; image: string }> = {
  'media-placement': {
    title: `${idT.services.mediaPlacement} | Glassbox`,
    description: idT.services.mediaPlacementDescription,
    image: `${SITE_URL}/images/digital-signage.webp`,
  },
  'ooh-transit': {
    title: `${idT.services.oohTransit} | Glassbox`,
    description: idT.services.oohTransitDescription,
    image: `${SITE_URL}/images/smart-tv.webp`,
  },
  'offline-event': {
    title: `${idT.services.offlineEvent} | Glassbox`,
    description: idT.services.offlineEventDescription,
    image: `${SITE_URL}/images/tablets.webp`,
  },
};

const SERVICE_NAMES: Record<string, string> = {
  'media-placement': idT.services.mediaPlacement,
  'ooh-transit': idT.services.oohTransit,
  'offline-event': idT.services.offlineEvent,
};

function breadcrumb(items: { name: string; item?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      ...(it.item ? { item: it.item } : {}),
    })),
  };
}

export function generateStaticParams() {
  return [{ slug: 'media-placement' }, { slug: 'ooh-transit' }, { slug: 'offline-event' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = SERVICE_META[slug];
  if (!meta) return { title: 'Tidak Ditemukan | Glassbox', robots: { index: false } };

  const bc = breadcrumb([
    { name: 'Home', item: SITE_URL },
    { name: 'Layanan', item: `${SITE_URL}/#services` },
    { name: SERVICE_NAMES[slug] ?? slug },
  ]);

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/services/${slug}`,
      images: [{ url: meta.image, width: 1200, height: 630 }],
    },
    other: { 'script:ld+json': JSON.stringify(bc) },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  return <ServicePage slug={slug} />;
}
