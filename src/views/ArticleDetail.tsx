'use client';
import React, { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
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
      <div className="bg-[#FDFDFD] min-h-screen flex flex-col pt-32">
        <main className="flex-grow flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('error.notFound.subtitle')}</h1>
            <Link href="/articles" className="text-glassbox-blue font-bold hover:underline">
              {t('articlesPage.backToList')}
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFDFD] min-h-screen">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glassbox-blue/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glassbox-purple/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4" />
      </div>

      <main className="pt-32 md:pt-40 pb-20 md:pb-32 relative z-10 w-full">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Link
              href="/articles"
              className="inline-flex items-center text-gray-400 hover:text-glassbox-blue mb-10 md:mb-12 transition-all duration-300 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] group"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              {t('articlesPage.backToList')}
            </Link>

            <div className="inline-flex items-center space-x-3 mb-6 bg-glassbox-blue/5 px-4 py-2 rounded-full border border-glassbox-blue/10">
              <DocumentTextIcon className="w-4 h-4 text-glassbox-blue" />
              <span className="text-glassbox-blue font-black tracking-[0.2em] uppercase text-[9px]">
                {t('articlesPage.title')}
              </span>
            </div>

            <time
              dateTime={article.date}
              className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 block"
            >
              {t('articlesPage.published')}: {article.date}
            </time>

            <figure className="mb-8 md:mb-10 rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-gray-100 aspect-[16/10] md:aspect-[2/1] relative">
              <img
                src={article.coverSrc}
                alt={article.title}
                className="w-full h-full object-cover"
                width={1200}
                height={630}
              />
            </figure>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8 tracking-tight leading-tight w-full break-words">
              {article.title}
            </h1>

            <div className="prose prose-slate md:prose-lg max-w-none prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-light w-full space-y-6">
              {article.paragraphs.map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-gray-100">
              <Link
                href="/articles"
                className="inline-flex items-center text-glassbox-blue font-black uppercase text-[10px] tracking-widest hover:underline"
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
