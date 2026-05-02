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

export function generateStaticParams() {
  return [{ slug: 'media-placement' }, { slug: 'ooh-transit' }, { slug: 'offline-event' }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = SERVICE_META[slug];
  if (!meta) return { title: 'Tidak Ditemukan | Glassbox', robots: { index: false } };
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `${SITE_URL}/services/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}/services/${slug}`,
      images: [{ url: meta.image }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  return <ServicePage slug={slug} />;
}
