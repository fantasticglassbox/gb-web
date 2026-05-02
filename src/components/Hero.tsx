'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const INQUIRY_MAILTO =
  'mailto:info@glassbox.id?subject=Inquiry: Glassbox Advertising Campaign&body=Hello Glassbox Team,%0D%0A%0D%0AI am interested in launching an advertising campaign with your network. %0D%0A%0D%0AMy Brand: %0D%0AProject Type: %0D%0ATarget Locations: %0D%0A%0D%0APlease provide more details on your media kit and pricing.%0D%0A%0D%0ABest regards,';

const stats = [
  { value: '50+', label: 'Lokasi Aktif' },
  { value: '3', label: 'Kategori Layanan' },
  { value: '6', label: 'Tipe Venue' },
];

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen bg-[#0C0D10] flex flex-col overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Top edge glow */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glassbox-blue/50 to-transparent" />

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* Left — text */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="w-6 h-px bg-glassbox-blue" />
              <span className="text-glassbox-blue text-xs font-bold uppercase tracking-[0.25em]">
                {t('hero.tagline')}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.02] tracking-tight mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Iklan Anda,{' '}
              <span className="text-glassbox-blue">Layar</span>{' '}
              Kami
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl text-white/55 leading-relaxed max-w-md mb-10"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-3 mb-14"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <a
                href={INQUIRY_MAILTO}
                className="inline-flex items-center gap-2 bg-glassbox-amber text-black font-bold text-sm px-7 py-4 rounded-full hover:bg-amber-400 transition-colors duration-200 shadow-lg shadow-amber-500/20"
              >
                {t('hero.launchCampaign')}
                <span className="text-base leading-none">→</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-white/70 font-semibold text-sm px-6 py-4 rounded-full border border-white/10 hover:border-white/30 hover:text-white transition-all duration-200"
              >
                {t('hero.exploreNetwork')}
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              className="flex items-center gap-0 divide-x divide-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {stats.map((stat) => (
                <div key={stat.value} className="px-6 first:pl-0 last:pr-0">
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-white/40 font-medium mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
          >
            {/* Amber accent line */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-glassbox-amber/40 rounded-tr-3xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-glassbox-blue/40 rounded-bl-3xl pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#111318]">
              <img
                src="/images/GHN03420-scaled.webp"
                alt="Glassbox Digital Advertising"
                className="w-full h-full object-cover opacity-90"
              />
              {/* Subtle gradient on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D10]/60 via-transparent to-transparent" />
              {/* Bottom label overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50 mb-1">
                  {t('about.primaryPlacement')}
                </p>
                <p className="text-xl font-bold text-white">{t('about.strategicPresence')}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/5" />
    </section>
  );
};

export default Hero;
