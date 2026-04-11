import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useTranslation();

  const locations = [
    { key: 'hotel', name: t('audience.locations.hotel'), icon: '🏨', desc: 'Premium Hospitality' },
    { key: 'transjakarta', name: t('audience.locations.transjakarta'), icon: '🚌', desc: 'Public Transport' },
    { key: 'universities', name: t('audience.locations.universities'), icon: '🎓', desc: 'Education Hubs' },
    { key: 'mall', name: t('audience.locations.mall'), icon: '🏬', desc: 'Shopping Centers' },
    { key: 'lounges', name: t('audience.locations.lounges'), icon: '☕', desc: 'Executive Areas' },
    { key: 'retail', name: t('audience.locations.retail'), icon: '🛍️', desc: 'Retail Networks' },
  ];

  return (
    <section
      id="about"
      className="relative z-20 -mt-12 w-full max-w-full min-w-0 overflow-x-hidden rounded-t-[1.75rem] border-t border-slate-200/80 bg-[#FDFDFD] bg-gradient-to-b from-slate-100/90 via-[#FDFDFD] to-[#FDFDFD] pt-10 pb-24 shadow-[0_-20px_50px_-14px_rgba(15,23,42,0.2)] sm:-mt-14 sm:rounded-t-[2.25rem] sm:pt-12 md:-mt-16 md:pt-14 md:pb-28 lg:-mt-[4.5rem] lg:rounded-t-[2.75rem] lg:pb-36"
    >
      {/* Brand accent + soft bridge from hero (contained so blobs never widen the page) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-1 bg-gradient-to-r from-transparent via-glassbox-blue to-transparent opacity-80"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-t-[inherit]">
        <div className="absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-glassbox-blue/[0.07] blur-[100px] sm:h-[480px] sm:w-[480px]" />
        <div className="absolute -bottom-32 left-0 h-[420px] w-[420px] rounded-full bg-glassbox-purple/[0.06] blur-[100px] sm:h-[480px] sm:w-[480px]" />
      </div>

      <div className="absolute top-1/4 left-0 right-0 h-px max-w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
      <div className="absolute bottom-1/4 left-0 right-0 h-px max-w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20 xl:gap-24">
          {/* Left: Collage Visuals — min-w-0 prevents grid blowout; floats stay inside padding */}
          <div className="relative order-2 min-w-0 px-1 sm:px-0 lg:col-span-6 lg:order-1">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Large Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-elegant-lg"
              >
                <img
                  src="/images/GHN03420-scaled.webp"
                  alt="Glassbox Advertising"
                  className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Image Caption */}
                <div className="absolute bottom-10 left-10 text-white">
                  <p className="text-xs font-bold tracking-[0.3em] uppercase opacity-70 mb-2">{t('about.primaryPlacement')}</p>
                  <p className="text-2xl font-display font-bold">{t('about.strategicPresence')}</p>
                </div>
              </motion.div>

              {/* Secondary Detail Image (Floating) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="absolute -bottom-12 -right-2 z-20 hidden w-[58%] max-w-[280px] overflow-hidden rounded-[2rem] border-[6px] border-white shadow-2xl md:block lg:-right-4 lg:max-w-[320px] lg:rounded-[2.5rem] lg:border-8"
              >
                <img
                  src="/images/digital-signage.webp"
                  alt="Digital Signage Detail"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Floating Stat Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                className="absolute -top-6 -left-4 z-30 hidden rotate-[-6deg] rounded-3xl bg-glassbox-blue p-6 text-white shadow-2xl sm:-left-2 sm:p-7 lg:block lg:-left-6 lg:-top-8 lg:p-8"
              >
                <p className="text-5xl font-black mb-1">{t('about.locationsCount')}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest leading-tight opacity-80">
                  {t('about.locationsLabel')}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right: Content & Tiles */}
          <div className="order-1 min-w-0 lg:col-span-6 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-3 mb-8 bg-glassbox-blue/5 px-4 py-2 rounded-full border border-glassbox-blue/10">
                <div className="w-2 h-2 rounded-full bg-glassbox-blue animate-pulse"></div>
                <span className="text-glassbox-blue font-bold tracking-[0.2em] uppercase text-[10px]">
                  {t('about.tagline')}
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-10 leading-[1.1] tracking-tight">
                {t('about.title1')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-glassbox-blue via-blue-600 to-glassbox-purple italic font-light">
                  {t('about.title2')}
                </span>
              </h2>
              
              <p className="text-2xl text-gray-500 mb-12 leading-relaxed font-light">
                {t('audience.description')}
              </p>

              {/* Sophisticated Location Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {locations.map((location: any, index: number) => (
                  <motion.div
                    key={location.key}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white hover:bg-gray-50 p-6 rounded-3xl transition-all duration-500 border border-gray-100 hover:border-glassbox-blue/20 hover:shadow-elegant"
                  >
                    <div className="flex items-center space-x-5">
                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gray-50 group-hover:bg-white group-hover:shadow-lg transition-all duration-500">
                        <span className="text-2xl group-hover:scale-110 transition-transform">{location.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1 group-hover:text-glassbox-blue transition-colors">
                          {location.name}
                        </h4>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{location.desc}</p>
                      </div>
                    </div>
                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-glassbox-blue/0 group-hover:bg-glassbox-blue/[0.02] transition-all duration-500 pointer-events-none"></div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="mt-16 flex items-center space-x-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <a href="#contact" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-glassbox-blue transition-all shadow-xl shadow-black/5">
                  {t('about.mediaKit')}
                </a>
                <a href="#contact" className="text-glassbox-blue font-bold text-xs uppercase tracking-widest group flex items-center">
                  <span>{t('about.exploreAll')}</span>
                  <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
