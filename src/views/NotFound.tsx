'use client';
import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center pt-32 pb-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Big 404 */}
            <p className="text-[9rem] md:text-[14rem] font-black leading-none tracking-tighter text-gray-100 select-none mb-0">
              404
            </p>

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight -mt-4 md:-mt-8">
              {t('error.notFound.subtitle')}
            </h1>

            <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-sm mx-auto">
              {t('error.notFound.description')}
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-glassbox-blue transition-colors group"
            >
              <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {t('error.notFound.backHome')}
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
