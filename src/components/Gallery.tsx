import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const galleryImages = [
    { src: '4-glassbox-scaled-e1735020462672.webp', alt: 'Glassbox Campaign 4' },
    { src: 'GHN03466-scaled-e1735012680736.webp', alt: 'Glassbox Campaign GHN03466' },
    { src: '1-glassbox-scaled-e1735020477398.webp', alt: 'Glassbox Campaign 1' },
    { src: 'GHN03354-scaled.webp', alt: 'Glassbox Campaign GHN03354' },
    { src: 'GHN03321-scaled.webp', alt: 'Glassbox Campaign GHN03321' },
    { src: 'GHN03125-scaled.webp', alt: 'Glassbox Campaign GHN03125' },
    { src: 'GHN03280-scaled.webp', alt: 'Glassbox Campaign GHN03280' },
    { src: 'GHN03420-scaled.webp', alt: 'Glassbox Campaign GHN03420' },
    { src: 'banner-glassbox-scaled-e1737130421875.webp', alt: 'Glassbox Banner' },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-glassbox-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-glassbox-purple/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-glassbox-blue via-blue-600 to-glassbox-purple">
              {t('results.title')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('results.description')}
          </p>
        </motion.div>
        
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image: any, index: number) => (
            <motion.div 
              key={index} 
              className="break-inside-avoid mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div 
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <motion.img
                  src={`/images/${image.src}`}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full glass flex items-center justify-center"
                  >
                    <MagnifyingGlassIcon className="h-8 w-8 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Learn More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-glassbox-blue to-glassbox-purple text-white px-8 py-4 rounded-full font-semibold shadow-elegant-lg hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('results.cta')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;