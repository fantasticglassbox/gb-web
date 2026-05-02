import type { Metadata } from 'next';
import idT from '@/locales/id/translation.json';
import { SITE_URL } from '@/config/site';
import Articles from '@/views/Articles';

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
};

export default function ArticlesPage() {
  return <Articles />;
}
