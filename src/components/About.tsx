'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Image from 'next/image';

const VENUE_ICONS: Record<string, string> = {
  hotel: '🏨',
  transjakarta: '🚌',
  universities: '🎓',
  mall: '🏬',
  lounges: '☕',
  retail: '🛍️',
};

const VENUE_DESC: Record<string, string> = {
  hotel: 'Premium Hospitality',
  transjakarta: 'Public Transport',
  universities: 'Education Hubs',
  mall: 'Shopping Centers',
  lounges: 'Executive Areas',
  retail: 'Retail Networks',
};

const inlineStats = [
  { value: '50+', label: 'Lokasi Aktif' },
  { value: '6', label: 'Tipe Venue' },
  { value: 'Jakarta', label: '& Sekitarnya' },
];

const About: React.FC = () => {
  const { t } = useTranslation();

  const locations = Object.keys(VENUE_ICONS).map((key) => ({
    key,
    name: t(`audience.locations.${key}`),
    icon: VENUE_ICONS[key],
    desc: VENUE_DESC[key],
  }));

  return (
    <section id="about" className="bg-white py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left — photo stack */}
          <motion.div
            className="relative lg:col-span-5 order-2 lg:order-1"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
              <Image
                src="/images/GHN03420-scaled.webp"
                alt="Jaringan periklanan digital Glassbox di Jakarta"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/60 mb-1">
                  {t('about.primaryPlacement')}
                </p>
                <p className="text-xl font-bold text-white">{t('about.strategicPresence')}</p>
              </div>
            </div>

            {/* Secondary image */}
            <div className="hidden md:block absolute -bottom-8 -right-6 w-2/5 rounded-xl overflow-hidden border-4 border-white shadow-card-hover">
              <Image
                src="/images/digital-signage.webp"
                alt="Digital signage display"
                width={320}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right — content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Label */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-6 h-px bg-glassbox-blue" />
                <span className="text-glassbox-blue text-xs font-bold uppercase tracking-[0.25em]">
                  {t('about.tagline')}
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight mb-4">
                {t('about.title1')}{' '}
                <span className="text-glassbox-blue">{t('about.title2')}</span>
              </h2>

              <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
                {t('audience.description')}
              </p>

              {/* Inline stats */}
              <div className="flex items-center gap-0 divide-x divide-gray-200 mb-12">
                {inlineStats.map((s) => (
                  <div key={s.value} className="px-6 first:pl-0">
                    <p className="text-2xl font-black text-gray-900">{s.value}</p>
                    <p className="text-xs text-gray-400 font-medium mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Location grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.key}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="group flex items-center gap-3 bg-[#F7F8FA] hover:bg-glassbox-blue/5 border border-gray-100 hover:border-glassbox-blue/20 p-4 rounded-xl transition-all duration-300"
                  >
                    <span className="text-xl shrink-0">{location.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-gray-800 group-hover:text-glassbox-blue transition-colors">
                        {location.name}
                      </p>
                      <p className="text-[10px] text-gray-400 font-medium">{location.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white font-bold text-sm px-6 py-3.5 rounded-full hover:bg-glassbox-blue transition-colors duration-200"
                >
                  {t('about.mediaKit')}
                </a>
                <a
                  href="/#contact"
                  className="text-glassbox-blue font-bold text-sm flex items-center gap-1.5 hover:gap-3 transition-all duration-200"
                >
                  {t('about.exploreAll')}
                  <span>→</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
