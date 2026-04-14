import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_URL } from '../config/site';
import { ogLocalePair } from '../config/seoLocales';
import { getVacancyBySlug } from '../content/careers';

const CareersDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const vacancy = slug ? getVacancyBySlug(i18n.language, slug) : undefined;
  const { primary: ogLocale, alternate: ogLocaleAlternate } = ogLocalePair(i18n.language);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!vacancy) {
    return (
      <div className="min-h-screen bg-[#FDFDFD]">
        <Header />
        <main className="pt-40 pb-24 px-6 max-w-5xl mx-auto">
          <Link to="/careers" className="text-glassbox-blue font-bold hover:underline">
            Back to Careers
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mt-6">Vacancy not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  const labels =
    i18n.language === 'id'
      ? {
          back: 'Kembali ke Karir',
          experience: 'Pengalaman',
          compensation: 'Kompensasi',
          posted: 'Dipublikasikan',
          deadline: 'Batas Lamaran',
          responsibilities: 'Tanggung Jawab',
          requirements: 'Persyaratan',
          benefits: 'Benefit',
          howToApply: 'Cara Melamar',
          requiredDocuments: 'Dokumen wajib',
        }
      : {
          back: 'Back to Careers',
          experience: 'Experience',
          compensation: 'Compensation',
          posted: 'Posted',
          deadline: 'Deadline',
          responsibilities: 'Responsibilities',
          requirements: 'Requirements',
          benefits: 'Benefits',
          howToApply: 'How to Apply',
          requiredDocuments: 'Required documents',
        };

  const canonical = `${SITE_URL}/careers/${vacancy.slug}`;
  const pageTitle = `${vacancy.title} | Glassbox`;

  const jobPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: vacancy.title,
    description: vacancy.summary,
    datePosted: vacancy.postedDate,
    validThrough: vacancy.applicationDeadline ? `${vacancy.applicationDeadline}T23:59:59+07:00` : undefined,
    employmentType: vacancy.employmentType,
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Glassbox',
      sameAs: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: vacancy.location,
        addressCountry: 'ID',
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      <Helmet>
        <html lang={i18n.language === 'id' ? 'id' : 'en'} />
        <title>{pageTitle}</title>
        <meta name="description" content={vacancy.summary} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={vacancy.summary} />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:locale:alternate" content={ogLocaleAlternate} />
        <meta property="og:image" content={`${SITE_URL}/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={vacancy.summary} />
        <meta name="twitter:image" content={`${SITE_URL}/logo.png`} />
        <script type="application/ld+json">{JSON.stringify(jobPostingSchema)}</script>
      </Helmet>

      <Header />

      <main className="pt-40 pb-24 px-6 max-w-5xl mx-auto">
        <Link to="/careers" className="text-glassbox-blue font-bold hover:underline">
          {labels.back}
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">{vacancy.title}</h1>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {vacancy.department ? (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{vacancy.department}</span>
          ) : null}
          {vacancy.level ? (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{vacancy.level}</span>
          ) : null}
          <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{vacancy.location}</span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{vacancy.employmentType}</span>
          {vacancy.workModel ? (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">{vacancy.workModel}</span>
          ) : null}
        </div>

        <p className="mt-6 text-gray-700 text-lg">{vacancy.summary}</p>

        <div className="mt-6 grid gap-1 text-sm text-gray-600">
          {vacancy.experience ? <p>{labels.experience}: {vacancy.experience}</p> : null}
          {vacancy.salaryRange ? <p>{labels.compensation}: {vacancy.salaryRange}</p> : null}
          {vacancy.postedDate ? <p>{labels.posted}: {vacancy.postedDate}</p> : null}
          {vacancy.applicationDeadline ? <p>{labels.deadline}: {vacancy.applicationDeadline}</p> : null}
        </div>

        {vacancy.responsibilities?.length ? (
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">{labels.responsibilities}</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
              {vacancy.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {vacancy.requirements?.length ? (
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">{labels.requirements}</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
              {vacancy.requirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {vacancy.benefits?.length ? (
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900">{labels.benefits}</h2>
            <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
              {vacancy.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-2xl font-bold text-gray-900">{labels.howToApply}</h2>
          {vacancy.application?.method ? <p className="text-gray-700 mt-2">{vacancy.application.method}</p> : null}
          <p className="text-gray-700 mt-2">
            <a
              href={`mailto:${vacancy.application?.email || 'info@glassbox.id'}${
                vacancy.application?.subject ? `?subject=${encodeURIComponent(vacancy.application.subject)}` : ''
              }`}
              className="font-semibold text-glassbox-blue hover:underline"
            >
              {vacancy.application?.email || 'info@glassbox.id'}
            </a>
          </p>
          {vacancy.application?.documents?.length ? (
            <p className="text-gray-600 mt-2">
              {labels.requiredDocuments}: {vacancy.application.documents.join(', ')}
            </p>
          ) : null}
          {vacancy.application?.steps?.length ? (
            <ol className="mt-3 list-decimal pl-5 text-gray-700 space-y-1">
              {vacancy.application.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          ) : null}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersDetail;
