'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { getActiveVacancies, getCareerContent } from '../content/careers';

const Careers: React.FC = () => {
  const { i18n, t } = useTranslation();
  const content = getCareerContent(i18n.language);
  const vacancies = getActiveVacancies(i18n.language);
  const viewDetailLabel = i18n.language === 'id' ? 'Lihat Detail' : 'View Details';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#F7F8FA] min-h-screen">
      <main className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back */}
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-glassbox-blue mb-10 transition-colors font-bold uppercase text-xs tracking-widest group"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t('services.backToHome')}
            </Link>

            {/* Label */}
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-glassbox-blue" />
              <span className="text-glassbox-blue font-bold uppercase text-xs tracking-widest">
                {content.badge}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.02] tracking-tight mb-4 break-words">
              {content.title}
            </h1>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl leading-relaxed">
              {content.description}
            </p>

            {/* Vacancy section */}
            <section className="rounded-2xl bg-white border border-gray-100 shadow-card p-8 md:p-10">
              <h2 className="text-2xl font-black text-gray-900 mb-2">{content.sectionTitle}</h2>
              {content.sectionDescription ? (
                <p className="text-gray-500 mb-8">{content.sectionDescription}</p>
              ) : null}

              {vacancies.length === 0 ? (
                <div className="rounded-xl border border-dashed border-gray-200 bg-[#F7F8FA] p-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{content.emptyTitle}</h3>
                  <p className="text-gray-500 mb-4">{content.emptyDescription}</p>
                  <p className="text-gray-600">
                    {content.applyLabel}{' '}
                    <a href={`mailto:${content.email}`} className="font-bold text-glassbox-blue hover:underline">
                      {content.email}
                    </a>
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {vacancies.map((vacancy) => (
                    <article
                      key={vacancy.slug}
                      className="rounded-xl border border-gray-100 bg-[#F7F8FA] hover:border-glassbox-blue/20 p-6 transition-colors"
                    >
                      <h3 className="text-lg font-black text-gray-900">{vacancy.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs mb-3">
                        {[vacancy.department, vacancy.level, vacancy.location, vacancy.employmentType, vacancy.workModel]
                          .filter(Boolean)
                          .map((tag) => (
                            <span key={tag} className="rounded-full bg-white border border-gray-200 px-3 py-1 text-gray-600 font-medium">
                              {tag}
                            </span>
                          ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{vacancy.summary}</p>
                      <Link
                        href={`/careers/${vacancy.slug}`}
                        className="inline-flex items-center gap-1.5 bg-glassbox-blue text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-glassbox-dark transition-colors"
                      >
                        {viewDetailLabel}
                        <span>→</span>
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Careers;
