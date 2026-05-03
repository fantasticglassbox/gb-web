'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Platforms: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const inquiryMailto = "mailto:info@glassbox.id?subject=Inquiry: Glassbox Advertising Campaign&body=Hello Glassbox Team,%0D%0A%0D%0AI am interested in launching an advertising campaign with your network. %0D%0A%0D%0AMy Brand: %0D%0AProject Type: %0D%0ATarget Locations: %0D%0A%0D%0APlease provide more details on your media kit and pricing.%0D%0A%0D%0ABest regards,";

  const platforms = [
    {
      key: 'digitalSignage',
      title: t('platforms.digitalSignage.title'),
      description: t('platforms.digitalSignage.description'),
      image: 'GHN03321-scaled.webp',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      key: 'smartTV',
      title: t('platforms.smartTV.title'),
      description: t('platforms.smartTV.description'),
      image: 'GHN03280-scaled.webp',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      key: 'tablets',
      title: t('platforms.tablets.title'),
      description: t('platforms.tablets.description'),
      image: 'GHN03125-scaled.webp',
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-glassbox-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-glassbox-purple/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-glassbox-blue via-blue-600 to-glassbox-purple">
              {t('platforms.title')}
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platforms.map((platform: any, index: number) => (
            <motion.div 
              key={platform.key}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 rounded-2xl"
                   style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}
              ></div>
              <div className="relative glass bg-white/80 backdrop-blur-xl rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                <motion.div 
                  className="aspect-video relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300 z-10`} />
                  <Image
                    src={`/images/${platform.image}`}
                    alt={platform.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-glassbox-blue transition-colors duration-300">
                    {platform.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                    {platform.description}
                  </p>
                  <motion.a 
                    href={inquiryMailto}
                    className={`w-full bg-gradient-to-r ${platform.gradient} text-white py-3 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group/btn`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{t(`platforms.${platform.key}.cta`)}</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </motion.div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platforms;