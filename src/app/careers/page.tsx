import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import careersId from '@/content/careers/id.json';
import Careers from '@/views/Careers';

const bc = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Karir' },
  ],
};

export const metadata: Metadata = {
  title: `${careersId.title} | Glassbox`,
  description: careersId.description,
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: {
    title: `${careersId.title} | Glassbox`,
    description: careersId.description,
    url: `${SITE_URL}/careers`,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  other: { 'script:ld+json': JSON.stringify(bc) },
};

export default function CareersPage() {
  return <Careers />;
}
