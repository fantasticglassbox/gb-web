import type { Metadata } from 'next';
import { Suspense } from 'react';
import idT from '@/locales/id/translation.json';
import { SITE_URL } from '@/config/site';
import Home from '@/views/Home';

export const metadata: Metadata = {
  title: idT.seo.homeTitle,
  description: idT.seo.homeDescription,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: idT.seo.homeTitle,
    description: idT.seo.homeDescription,
    url: `${SITE_URL}/`,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  other: {
    'script:ld+json': JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Glassbox',
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        email: 'info@glassbox.id',
        inLanguage: ['id', 'en'],
        address: { '@type': 'PostalAddress', addressLocality: 'Jakarta', addressCountry: 'ID' },
        areaServed: [
          { '@type': 'Country', name: 'Indonesia' },
          { '@type': 'City', name: 'Jakarta' },
        ],
        sameAs: ['https://www.instagram.com/glassboxid'],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Glassbox',
        url: SITE_URL,
        email: 'info@glassbox.id',
        address: { '@type': 'PostalAddress', addressLocality: 'Jakarta', addressCountry: 'ID' },
        areaServed: [
          { '@type': 'Country', name: 'Indonesia' },
          { '@type': 'City', name: 'Jakarta' },
        ],
      },
    ]),
  },
};

export default function HomePage() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}
