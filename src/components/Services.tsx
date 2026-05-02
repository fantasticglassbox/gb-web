'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'mediaPlacement',
      slug: 'media-placement',
      image: '/images/digital-signage.webp',
      title: t('services.mediaPlacement'),
      description: t('services.mediaPlacementDescription'),
      accent: 'from-cyan-400/90 to-glassbox-blue',
    },
    {
      key: 'oohTransit',
      slug: 'ooh-transit',
      image: '/images/smart-tv.webp',
      title: t('services.oohTransit'),
      description: t('services.oohTransitDescription'),
      accent: 'from-glassbox-blue to-glassbox-purple',
    },
    {
      key: 'offlineEvent',
      slug: 'offline-event',
      image: '/images/tablets.webp',
      title: t('services.offlineEvent'),
      description: t('services.offlineEventDescription'),
      accent: 'from-glassbox-purple to-fuchsia-500/90',
    },
  ];

  return (
    <section id="services" className="relative overflow-x-hidden bg-[#05060a] py-20 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-[-15%] h-[420px] w-[420px] rounded-full bg-glassbox-blue/25 blur-[100px] md:h-[520px] md:w-[520px]" />
        <div className="absolute bottom-0 left-[-20%] h-[380px] w-[380px] rounded-full bg-glassbox-purple/20 blur-[100px] md:h-[480px] md:w-[480px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
            maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 max-w-3xl md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.28em] text-white/60 backdrop-blur-sm">
            {t('services.sectionEyebrow')}
          </span>
          <h2 className="font-sans text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block sm:inline">{t('services.headlineStart')}</span>{' '}
            <span className="bg-gradient-to-r from-glassbox-blue via-sky-400 to-glassbox-purple bg-clip-text text-transparent">
              {t('services.headlineEnd')}
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
            {t('services.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              id={service.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group min-w-0"
            >
              <Link
                href={`/services/${service.slug}`}
                className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-glassbox-blue/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05060a] rounded-[1.35rem]"
              >
                <article className="relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition-all duration-500 hover:border-glassbox-blue/35 hover:bg-white/[0.05] hover:shadow-[0_28px_80px_-24px_rgba(11,166,223,0.45)] md:rounded-3xl">
                  <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[5/3]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05060a] via-[#05060a]/40 to-transparent md:via-[#05060a]/20" />
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-90 transition duration-500 group-hover:opacity-100 ${service.accent}`}
                    />
                    <span className="absolute left-4 top-4 font-mono text-[11px] font-medium tabular-nums text-white/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="font-sans text-xl font-bold leading-snug tracking-tight text-white transition duration-300 group-hover:text-white md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50 md:text-[15px]">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-glassbox-blue">
                        {t('services.exploreService')}
                      </span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 group-hover:border-glassbox-blue/50 group-hover:bg-glassbox-blue/15 group-hover:text-glassbox-blue">
                        <ArrowUpRightIcon className="h-5 w-5 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
