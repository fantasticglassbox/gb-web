import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_URL } from '../config/site';
import { ogLocalePair } from '../config/seoLocales';
import { getActiveVacancies, getCareerContent } from '../content/careers';

const Careers: React.FC = () => {
  const { i18n, t } = useTranslation();
  const content = getCareerContent(i18n.language);
  const vacancies = getActiveVacancies(i18n.language);
  const viewDetailLabel = i18n.language === 'id' ? 'Lihat Detail' : 'View Details';
  const { primary: ogLocale, alternate: ogLocaleAlternate } = ogLocalePair(i18n.language);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const canonical = `${SITE_URL}/careers`;

  return (
    <div className="bg-[#FDFDFD] min-h-screen">
      <Helmet>
        <html lang={i18n.language === 'id' ? 'id' : 'en'} />
        <title>{content.title} | Glassbox</title>
        <meta name="description" content={content.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${content.title} | Glassbox`} />
        <meta property="og:description" content={content.description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:locale:alternate" content={ogLocaleAlternate} />
        <meta property="og:image" content={`${SITE_URL}/logo.png`} />
      </Helmet>

      <Header />

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glassbox-blue/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glassbox-purple/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <main className="pt-32 md:pt-40 pb-20 md:pb-32 relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Link
              to="/"
              className="inline-flex items-center text-gray-400 hover:text-glassbox-blue mb-10 md:mb-12 transition-all duration-300 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] group"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t('services.backToHome')}
            </Link>

            <div className="inline-flex items-center space-x-3 mb-6 bg-glassbox-blue/5 px-4 py-2 rounded-full border border-glassbox-blue/10">
              <BriefcaseIcon className="w-4 h-4 text-glassbox-blue" />
              <span className="text-glassbox-blue font-black tracking-[0.2em] uppercase text-[9px]">{content.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-gray-900 mb-4 tracking-tight leading-tight w-full break-words">
              {content.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-12 md:mb-16 max-w-2xl leading-relaxed font-light">
              {content.description}
            </p>

            <section className="rounded-3xl bg-white border border-gray-100 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">{content.sectionTitle}</h2>
              {content.sectionDescription ? <p className="text-gray-600 mb-8">{content.sectionDescription}</p> : null}

              {vacancies.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-gray-200 bg-gray-50 p-8 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{content.emptyTitle}</h3>
                  <p className="text-gray-600 mb-4">{content.emptyDescription}</p>
                  <p className="text-gray-700">
                    {content.applyLabel}{' '}
                    <a href={`mailto:${content.email}`} className="font-bold text-glassbox-blue hover:underline">
                      {content.email}
                    </a>
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {vacancies.map((vacancy) => (
                    <article key={vacancy.slug} className="rounded-2xl border border-gray-200 p-6">
                      <h3 className="text-xl font-bold text-gray-900">{vacancy.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs">
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
                      <p className="text-gray-700 mt-3">{vacancy.summary}</p>
                      <div className="mt-6">
                        <Link
                          to={`/careers/${vacancy.slug}`}
                          className="inline-flex items-center rounded-full bg-glassbox-blue px-5 py-2.5 text-sm font-semibold text-white hover:bg-glassbox-purple transition-colors"
                        >
                          {viewDetailLabel}
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
