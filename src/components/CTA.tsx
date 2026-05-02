'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 'andriani',
      quote: t('testimonials.andriani.quote'),
      author: t('testimonials.andriani.author'),
      position: t('testimonials.andriani.position'),
    },
    {
      id: 'selo',
      quote: t('testimonials.selo.quote'),
      author: t('testimonials.selo.author'),
      position: t('testimonials.selo.position'),
    },
    {
      id: 'amy',
      quote: t('testimonials.amy.quote'),
      author: t('testimonials.amy.author'),
      position: t('testimonials.amy.position'),
    },
  ];

  return (
    <section className="bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 mb-5 justify-center">
            <span className="w-6 h-px bg-glassbox-blue" />
            <span className="text-glassbox-blue text-xs font-bold uppercase tracking-[0.25em]">
              Klien Kami
            </span>
            <span className="w-6 h-px bg-glassbox-blue" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-[1.05] tracking-tight">
            Apa Kata Mereka
          </h2>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F7F8FA] rounded-2xl p-7 border border-gray-100 hover:border-glassbox-blue/20 hover:shadow-card transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-glassbox-amber" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
                "{item.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-200 pt-5">
                <p className="text-sm font-bold text-gray-900">{item.author}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
