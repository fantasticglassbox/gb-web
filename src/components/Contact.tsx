'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const INQUIRY_MAILTO =
  'mailto:info@glassbox.id?subject=Inquiry: Glassbox Advertising Campaign&body=Hello Glassbox Team,%0D%0A%0D%0AI am interested in launching an advertising campaign with your network. %0D%0A%0D%0AMy Brand: %0D%0AProject Type: %0D%0ATarget Locations: %0D%0A%0D%0APlease provide more details on your media kit and pricing.%0D%0A%0D%0ABest regards,';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-[#0C0D10] py-24 md:py-32">
      {/* Top edge */}
      <div className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-8 justify-center">
            <span className="w-6 h-px bg-glassbox-blue" />
            <span className="text-glassbox-blue text-xs font-bold uppercase tracking-[0.25em]">
              {t('contact.tagline')}
            </span>
            <span className="w-6 h-px bg-glassbox-blue" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.02] tracking-tight mb-6">
            {t('contact.title1')}{' '}
            <span className="text-glassbox-blue">{t('contact.title2')}</span>
          </h2>

          <p className="text-lg text-white/45 leading-relaxed mb-12 max-w-xl mx-auto">
            {t('contact.description')}
          </p>

          {/* Primary CTA */}
          <a
            href={INQUIRY_MAILTO}
            className="inline-flex items-center gap-2 bg-glassbox-amber text-black font-bold text-base px-10 py-5 rounded-full hover:bg-amber-400 transition-colors duration-200 shadow-xl shadow-amber-500/20 mb-10"
          >
            {t('contact.cardButton')}
            <span className="text-lg leading-none">→</span>
          </a>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
            <a
              href={INQUIRY_MAILTO}
              className="text-white/50 hover:text-white transition-colors font-medium"
            >
              info@glassbox.id
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <a
              href="tel:+6281138777700"
              className="text-white/50 hover:text-white transition-colors font-medium"
            >
              +62 811 3877 7700
            </a>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <span className="text-white/30 font-medium">Jakarta, Indonesia</span>
          </div>

          {/* Response time */}
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-white/20">
            {t('contact.responseTime')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
