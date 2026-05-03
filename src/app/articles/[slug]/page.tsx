import type { Metadata } from 'next';
import idT from '@/locales/id/translation.json';
import { SITE_URL } from '@/config/site';
import { getArticleCoverAbsoluteUrl } from '@/config/articleCovers';
import ArticleDetail from '@/views/ArticleDetail';

type Props = { params: Promise<{ slug: string }> };

const SLUGS: string[] = idT.articlesPage.slugs as string[];

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = (idT.articlesPage.items as Record<string, any>)[slug];
  if (!item) return { title: 'Artikel Tidak Ditemukan | Glassbox', robots: { index: false } };

  const canonical = `${SITE_URL}/articles/${slug}`;
  const coverUrl = getArticleCoverAbsoluteUrl(slug);
  const title = `${item.title} | Glassbox`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: item.title,
    datePublished: item.date,
    dateModified: item.date,
    description: item.excerpt,
    image: coverUrl,
    author: { '@type': 'Organization', name: 'Glassbox', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Glassbox', url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Wawasan', item: `${SITE_URL}/articles` },
      { '@type': 'ListItem', position: 3, name: item.title },
    ],
  };

  return {
    title,
    description: item.excerpt,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      title,
      description: item.excerpt,
      url: canonical,
      images: [{ url: coverUrl, width: 1200, height: 630 }],
      publishedTime: item.date,
      modifiedTime: item.date,
    },
    other: { 'script:ld+json': JSON.stringify([articleSchema, breadcrumb]) },
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  return <ArticleDetail slug={slug} />;
}
