import type { Metadata } from 'next';
import idT from '@/locales/id/translation.json';
import { SITE_URL } from '@/config/site';
import Articles from '@/views/Articles';

const bc = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Wawasan' },
  ],
};

export const metadata: Metadata = {
  title: `${idT.articlesPage.title} — ${idT.articlesPage.subtitle} | Glassbox`,
  description: idT.articlesPage.description,
  alternates: { canonical: `${SITE_URL}/articles` },
  openGraph: {
    title: `${idT.articlesPage.title} | Glassbox`,
    description: idT.articlesPage.description,
    url: `${SITE_URL}/articles`,
    images: [{ url: `${SITE_URL}/logo.png` }],
  },
  other: { 'script:ld+json': JSON.stringify(bc) },
};

export default function ArticlesPage() {
  return <Articles />;
}
