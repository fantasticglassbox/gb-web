'use client';
import React, { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { getArticleCoverPath } from '../config/articleCovers';

interface Props {
  slug: string;
}

const ArticleDetail: React.FC<Props> = ({ slug }) => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const slugs = (t('articlesPage.slugs', { returnObjects: true }) as string[]) || [];
  const isValid = slug && slugs.includes(slug);

  const article = useMemo(() => {
    if (!isValid || !slug) return null;
    const paragraphs = t(`articlesPage.items.${slug}.paragraphs`, { returnObjects: true }) as string[];
    return {
      title: t(`articlesPage.items.${slug}.title`),
      date: t(`articlesPage.items.${slug}.date`),
      excerpt: t(`articlesPage.items.${slug}.excerpt`),
      paragraphs: Array.isArray(paragraphs) ? paragraphs : [],
      coverSrc: getArticleCoverPath(slug),
    };
  }, [slug, isValid, t]);

  if (!isValid || !article) {
    return (
      <div className="bg-white min-h-screen flex flex-col pt-32">
        <main className="flex-grow flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-2xl font-black text-gray-900 mb-4">{t('error.notFound.subtitle')}</h1>
            <Link href="/articles" className="text-glassbox-blue font-bold hover:underline">
              {t('articlesPage.backToList')}
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <main className="pt-32 md:pt-40 pb-20 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back */}
            <Link
              href="/articles"
              className="inline-flex items-center text-gray-400 hover:text-glassbox-blue mb-10 transition-colors font-bold uppercase text-xs tracking-widest group"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t('articlesPage.backToList')}
            </Link>

            {/* Label + date */}
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-glassbox-blue" />
              <span className="text-glassbox-blue font-bold uppercase text-xs tracking-widest">
                {t('articlesPage.title')}
              </span>
            </div>
            <time dateTime={article.date} className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 block">
              {t('articlesPage.published')}: {article.date}
            </time>

            {/* Cover */}
            <figure className="mb-8 rounded-2xl overflow-hidden bg-gray-100 aspect-[16/9]">
              <img
                src={article.coverSrc}
                alt={article.title}
                className="w-full h-full object-cover"
                width={1200}
                height={630}
              />
            </figure>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight tracking-tight break-words">
              {article.title}
            </h1>

            {/* Body */}
            <div className="prose prose-slate md:prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed space-y-5">
              {article.paragraphs.map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Footer nav */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link
                href="/articles"
                className="inline-flex items-center gap-1 text-glassbox-blue font-bold uppercase text-xs tracking-widest hover:underline"
              >
                ← {t('articlesPage.backToList')}
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ArticleDetail;
