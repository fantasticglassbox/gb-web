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
    <section id="about" className="py-40 bg-[#FDFDFD] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glassbox-blue/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glassbox-purple/5 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/2"></div>
      
      {/* Decorative Lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left: Collage Visuals */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative">
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
                className="absolute -bottom-16 -right-10 lg:-right-20 z-20 w-2/3 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white hidden md:block"
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
                className="absolute -top-10 -left-10 z-30 bg-glassbox-blue text-white p-8 rounded-3xl shadow-2xl rotate-[-6deg] hidden lg:block"
              >
                <p className="text-5xl font-black mb-1">{t('about.locationsCount')}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest leading-tight opacity-80">
                  {t('about.locationsLabel')}
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right: Content & Tiles */}
          <div className="lg:col-span-6 order-1 lg:order-2">
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
