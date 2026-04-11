import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE_URL } from '../config/site';
import { ogLocalePair } from '../config/seoLocales';

const Articles: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { primary: ogLocale, alternate: ogLocaleAlternate } = ogLocalePair(i18n.language);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const slugs = (t('articlesPage.slugs', { returnObjects: true }) as string[]) || [];
  const canonical = `${SITE_URL}/articles`;
  const pageTitle = `${t('articlesPage.title')} | Glassbox`;
  const pageDesc = t('articlesPage.description');

  return (
    <div className="bg-[#FDFDFD] min-h-screen">
      <Helmet>
        <html lang={i18n.language === 'id' ? 'id' : 'en'} />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:locale:alternate" content={ogLocaleAlternate} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta property="og:image" content={`${SITE_URL}/logo.png`} />
        <meta name="twitter:image" content={`${SITE_URL}/logo.png`} />
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
              <DocumentTextIcon className="w-4 h-4 text-glassbox-blue" />
              <span className="text-glassbox-blue font-black tracking-[0.2em] uppercase text-[9px]">
                {t('articlesPage.title')}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-gray-900 mb-4 tracking-tight leading-tight w-full break-words">
              {t('articlesPage.title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-glassbox-blue to-glassbox-purple italic font-light">
                {t('articlesPage.subtitle')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-12 md:mb-16 max-w-2xl leading-relaxed font-light">
              {t('articlesPage.description')}
            </p>

            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {slugs.map((slug: string, index: number) => {
                const title = t(`articlesPage.items.${slug}.title`);
                const excerpt = t(`articlesPage.items.${slug}.excerpt`);
                const date = t(`articlesPage.items.${slug}.date`);
                return (
                  <motion.article
                    key={slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="group"
                  >
                    <Link
                      to={`/articles/${slug}`}
                      className="block bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-elegant hover:border-glassbox-blue/20 transition-all duration-300 p-6 md:p-8 w-full"
                    >
                      <time
                        dateTime={date}
                        className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 block"
                      >
                        {t('articlesPage.published')}: {date}
                      </time>
                      <h2 className="text-xl md:text-2xl font-display font-bold text-gray-900 mb-3 group-hover:text-glassbox-blue transition-colors">
                        {title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-4 font-light">{excerpt}</p>
                      <span className="text-glassbox-blue font-black uppercase text-[10px] tracking-widest">
                        {t('articlesPage.readMore')} →
                      </span>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
