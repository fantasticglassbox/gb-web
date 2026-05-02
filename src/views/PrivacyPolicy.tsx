'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

const PrivacyPolicy: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lastUpdated = 'January 26, 2026';

  return (
    <div className="bg-[#FDFDFD] min-h-screen">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glassbox-blue/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glassbox-purple/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <main className="pt-32 md:pt-40 pb-20 md:pb-32 relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-glassbox-blue mb-10 md:mb-12 transition-all duration-300 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] group"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />{' '}
              {t('privacy.backToHome')}
            </Link>

            <div className="mb-10 md:mb-16 w-full">
              <div className="inline-flex items-center space-x-3 mb-6 bg-glassbox-blue/5 px-4 py-2 rounded-full border border-glassbox-blue/10">
                <ShieldCheckIcon className="w-4 h-4 text-glassbox-blue" />
                <span className="text-glassbox-blue font-black tracking-[0.2em] uppercase text-[9px]">
                  {t('privacy.trustSafety')}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6 tracking-tight leading-tight w-full break-words">
                {t('privacy.title')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-glassbox-blue to-glassbox-purple italic font-light">
                  {t('privacy.subtitle')}
                </span>
              </h1>
              <p className="text-gray-500 font-black uppercase tracking-widest text-[9px] md:text-xs w-full">
                {t('privacy.lastUpdated')}: {lastUpdated}
              </p>
            </div>

            <div className="prose prose-slate md:prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-headings:leading-tight w-full">
              <section className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl mb-4 flex items-center gap-3">
                  <DocumentTextIcon className="w-5 h-5 md:w-6 md:h-6 text-glassbox-blue" />
                  1. {t('privacy.sections.intro.title')}
                </h2>
                <p className="text-base md:text-lg">{t('privacy.sections.intro.content1')}</p>
                <p className="text-base md:text-lg">{t('privacy.sections.intro.content2')}</p>
              </section>

              <section className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl mb-4 flex items-center gap-3">
                  <DocumentTextIcon className="w-5 h-5 md:w-6 md:h-6 text-glassbox-blue" />
                  2. {t('privacy.sections.collection.title')}
                </h2>
                <p className="text-base md:text-lg">{t('privacy.sections.collection.intro')}</p>
                <ul className="list-disc pl-6 space-y-2 text-base md:text-lg">
                  <li>
                    <strong>Personal Data:</strong> {t('privacy.sections.collection.personal')}
                  </li>
                  <li>
                    <strong>Derivative Data:</strong> {t('privacy.sections.collection.derivative')}
                  </li>
                  <li>
                    <strong>Financial Data:</strong> {t('privacy.sections.collection.financial')}
                  </li>
                  <li>
                    <strong>Mobile Device Data:</strong> {t('privacy.sections.collection.mobile')}
                  </li>
                </ul>
              </section>

              <section className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl mb-4 flex items-center gap-3">
                  <LockClosedIcon className="w-5 h-5 md:w-6 md:h-6 text-glassbox-blue" />
                  3. {t('privacy.sections.use.title')}
                </h2>
                <p className="text-base md:text-lg">{t('privacy.sections.use.intro')}</p>
                <ul className="list-disc pl-6 space-y-2 text-base md:text-lg">
                  <li>{t('privacy.sections.use.item1')}</li>
                  <li>{t('privacy.sections.use.item2')}</li>
                  <li>{t('privacy.sections.use.item3')}</li>
                  <li>{t('privacy.sections.use.item4')}</li>
                  <li>{t('privacy.sections.use.item5')}</li>
                  <li>{t('privacy.sections.use.item6')}</li>
                  <li>{t('privacy.sections.use.item7')}</li>
                </ul>
              </section>

              <section className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl mb-4 flex items-center gap-3">
                  <ShieldCheckIcon className="w-5 h-5 md:w-6 md:h-6 text-glassbox-blue" />
                  4. {t('privacy.sections.disclosure.title')}
                </h2>
                <p className="text-base md:text-lg">{t('privacy.sections.disclosure.intro')}</p>
                <ul className="list-disc pl-6 space-y-2 text-base md:text-lg">
                  <li>
                    <strong>By Law or to Protect Rights:</strong>{' '}
                    {t('privacy.sections.disclosure.law')}
                  </li>
                  <li>
                    <strong>Third-Party Service Providers:</strong>{' '}
                    {t('privacy.sections.disclosure.thirdParty')}
                  </li>
                </ul>
              </section>

              <section className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl mb-4 flex items-center gap-3">
                  <LockClosedIcon className="w-5 h-5 md:w-6 md:h-6 text-glassbox-blue" />
                  5. {t('privacy.sections.security.title')}
                </h2>
                <p className="text-base md:text-lg">{t('privacy.sections.security.content')}</p>
              </section>

              <section className="mb-8 md:mb-12">
                <h2 className="text-xl md:text-2xl mb-4 flex items-center gap-3">
                  <DocumentTextIcon className="w-5 h-5 md:w-6 md:h-6 text-glassbox-blue" />
                  6. {t('privacy.sections.contact.title')}
                </h2>
                <p className="text-base md:text-lg">{t('privacy.sections.contact.intro')}</p>
                <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 mt-6">
                  <p className="font-bold text-gray-900 mb-2">Glassbox Advertising</p>
                  <p className="text-gray-600 mb-1">Jakarta, Indonesia</p>
                  <p className="text-gray-600 mb-4">Email: info@glassbox.id</p>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center text-glassbox-blue font-bold uppercase text-[10px] tracking-widest hover:underline"
                  >
                    {t('privacy.sections.contact.form')} →
                  </Link>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
