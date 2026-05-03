'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { getArticleCoverPath } from '../config/articleCovers';

const Articles: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const slugs = (t('articlesPage.slugs', { returnObjects: true }) as string[]) || [];

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
                {t('articlesPage.title')}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.02] tracking-tight mb-4 break-words">
              {t('articlesPage.title')}{' '}
              <span className="text-glassbox-blue">{t('articlesPage.subtitle')}</span>
            </h1>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl leading-relaxed">
              {t('articlesPage.description')}
            </p>

            {/* Article list */}
            <div className="grid grid-cols-1 gap-4">
              {slugs.map((slug: string, index: number) => {
                const title = t(`articlesPage.items.${slug}.title`);
                const excerpt = t(`articlesPage.items.${slug}.excerpt`);
                const date = t(`articlesPage.items.${slug}.date`);
                const coverSrc = getArticleCoverPath(slug);
                return (
                  <motion.article
                    key={slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * index }}
                    className="group"
                  >
                    <Link
                      href={`/articles/${slug}`}
                      className="flex flex-col md:flex-row bg-white rounded-2xl border border-gray-100 hover:border-glassbox-blue/20 hover:shadow-card transition-all duration-300 overflow-hidden"
                    >
                      {/* Cover */}
                      <div className="relative md:w-[36%] shrink-0 aspect-[16/9] md:aspect-auto md:min-h-[200px] overflow-hidden bg-gray-100">
                        <Image
                          src={coverSrc}
                          alt={title}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </div>
                      {/* Text */}
                      <div className="flex flex-col justify-center p-6 md:p-8 flex-1 min-w-0">
                        <time dateTime={date} className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 block">
                          {t('articlesPage.published')}: {date}
                        </time>
                        <h2 className="text-lg md:text-xl font-black text-gray-900 mb-2 leading-snug group-hover:text-glassbox-blue transition-colors">
                          {title}
                        </h2>
                        <p className="text-gray-500 leading-relaxed text-sm mb-4 line-clamp-2">{excerpt}</p>
                        <span className="text-glassbox-blue font-bold uppercase text-xs tracking-widest">
                          {t('articlesPage.readMore')} →
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Articles;
