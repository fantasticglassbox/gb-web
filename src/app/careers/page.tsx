import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import careersId from '@/content/careers/id.json';
import Careers from '@/views/Careers';

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
};

export default function CareersPage() {
  return <Careers />;
}
