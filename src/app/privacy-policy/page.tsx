import type { Metadata } from 'next';
import idT from '@/locales/id/translation.json';
import { SITE_URL } from '@/config/site';
import PrivacyPolicy from '@/views/PrivacyPolicy';

const bc = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Kebijakan Privasi' },
  ],
};

export const metadata: Metadata = {
  title: idT.seo.privacyTitle,
  description: idT.seo.privacyDescription,
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  openGraph: {
    title: idT.seo.privacyTitle,
    description: idT.seo.privacyDescription,
    url: `${SITE_URL}/privacy-policy`,
  },
  other: { 'script:ld+json': JSON.stringify(bc) },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
