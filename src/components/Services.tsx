'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'mediaPlacement',
      slug: 'media-placement',
      image: '/images/digital-signage.webp',
      title: t('services.mediaPlacement'),
      description: t('services.mediaPlacementDescription'),
      number: '01',
    },
    {
      key: 'oohTransit',
      slug: 'ooh-transit',
      image: '/images/smart-tv.webp',
      title: t('services.oohTransit'),
      description: t('services.oohTransitDescription'),
      number: '02',
    },
    {
      key: 'offlineEvent',
      slug: 'offline-event',
      image: '/images/tablets.webp',
      title: t('services.offlineEvent'),
      description: t('services.offlineEventDescription'),
      number: '03',
    },
  ];

  return (
    <section id="services" className="bg-[#0C0D10] py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-px bg-glassbox-blue" />
            <span className="text-glassbox-blue text-xs font-bold uppercase tracking-[0.25em]">
              {t('services.sectionEyebrow')}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight max-w-xl">
            {t('services.headlineStart')}{' '}
            <span className="text-glassbox-blue">{t('services.headlineEnd')}</span>
          </h2>
          <p className="mt-4 text-white/40 text-base max-w-lg leading-relaxed">
            {t('services.description')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block h-full rounded-2xl border border-white/8 bg-white/[0.03] overflow-hidden hover:border-glassbox-blue/30 hover:bg-white/[0.05] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-glassbox-blue/60"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 font-mono text-[11px] text-white/30">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-glassbox-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/45 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-white/8 pt-4">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-glassbox-blue">
                      {t('services.exploreService')}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 group-hover:border-glassbox-blue/40 group-hover:text-glassbox-blue transition-all duration-300">
                      <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
