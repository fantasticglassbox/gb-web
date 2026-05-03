import type { Metadata } from 'next';
import { SITE_URL } from '@/config/site';
import { getActiveVacancies, getVacancyBySlug } from '@/content/careers';
import { buildGlassboxJobPostingSchema } from '@/lib/jobPostingSchema';
import careersId from '@/content/careers/id.json';
import CareersDetail from '@/views/CareersDetail';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getActiveVacancies('id').map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vacancy = getVacancyBySlug('id', slug);
  if (!vacancy) return { title: 'Karir | Glassbox', robots: { index: false } };

  const canonical = `${SITE_URL}/careers/${slug}`;
  const title = `${vacancy.title} | Glassbox`;

  const career = careersId as any;
  const jobSchema = buildGlassboxJobPostingSchema({
    vacancy,
    career,
    hiringOrganization: { name: 'Glassbox', sameAs: SITE_URL, logo: `${SITE_URL}/logo.png` },
    jobPageUrl: canonical,
  });

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Karir', item: `${SITE_URL}/careers` },
      { '@type': 'ListItem', position: 3, name: vacancy.title },
    ],
  };

  return {
    title,
    description: vacancy.summary,
    alternates: { canonical },
    openGraph: {
      title,
      description: vacancy.summary,
      url: canonical,
      images: [{ url: `${SITE_URL}/logo.png` }],
    },
    other: { 'script:ld+json': JSON.stringify([jobSchema, breadcrumb]) },
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  return <CareersDetail slug={slug} />;
}
