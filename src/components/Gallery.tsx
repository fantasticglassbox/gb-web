'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const galleryImages = [
    { 
      src: '4-glassbox-scaled-e1735020462672.webp', 
      alt: 'Premium Placement', 
      tag: 'Retail',
      size: 'large' // takes up 2x2 or similar in a grid
    },
    { 
      src: 'GHN03466-scaled-e1735012680736.webp', 
      alt: 'Digital Excellence', 
      tag: 'OOH',
      size: 'small'
    },
    { 
      src: '1-glassbox-scaled-e1735020477398.webp', 
      alt: 'Strategic Presence', 
      tag: 'Hospitality',
      size: 'small'
    },
    { 
      src: 'GHN03354-scaled.webp', 
      alt: 'Visual Impact', 
      tag: 'Public',
      size: 'tall'
    },
    { 
      src: 'GHN03321-scaled.webp', 
      alt: 'Network Growth', 
      tag: 'Digital',
      size: 'small'
    },
    { 
      src: 'GHN03125-scaled.webp', 
      alt: 'Innovative Media', 
      tag: 'Tech',
      size: 'wide'
    },
    { 
      src: 'GHN03280-scaled.webp', 
      alt: 'Seamless Integration', 
      tag: 'Smart TV',
      size: 'small'
    },
    { 
      src: 'GHN03420-scaled.webp', 
      alt: 'Audience Engagement', 
      tag: 'Interactive',
      size: 'small'
    }
  ];

  return (
    <section id="gallery" className="py-40 bg-[#FDFDFD] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-glassbox-blue/5 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-glassbox-purple/5 rounded-full blur-[140px] translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-3 mb-6 bg-glassbox-blue/5 px-4 py-2 rounded-full border border-glassbox-blue/10">
            <div className="w-2 h-2 rounded-full bg-glassbox-blue animate-pulse"></div>
            <span className="text-glassbox-blue font-bold tracking-[0.2em] uppercase text-[10px]">
              Visual Showcase
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
            Impact in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-glassbox-blue via-blue-600 to-glassbox-purple italic font-light">
              Motion
            </span>
          </h2>
          <p className="text-2xl text-gray-500 font-light leading-relaxed">
            {t('results.description')}
          </p>
        </motion.div>
        
        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
          {galleryImages.map((image: any, index: number) => {
            let gridClass = "md:col-span-1 md:row-span-1";
            if (image.size === 'large') gridClass = "md:col-span-2 md:row-span-2";
            if (image.size === 'wide') gridClass = "md:col-span-2 md:row-span-1";
            if (image.size === 'tall') gridClass = "md:col-span-1 md:row-span-2";

            return (
              <motion.div 
                key={index} 
                className={`${gridClass} relative group cursor-pointer overflow-hidden rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-700 bg-gray-100 border border-gray-100`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                onClick={() => setSelectedImage(image)}
              >
                {/* Image */}
                <motion.img
                  src={`/images/${image.src}`}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <motion.span 
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-glassbox-blue text-[10px] font-bold uppercase tracking-[0.3em] mb-2"
                  >
                    {image.tag}
                  </motion.span>
                  <motion.h3 
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-white text-xl font-display font-bold"
                  >
                    {image.alt}
                  </motion.h3>
                  
                  <motion.div 
                    className="absolute top-8 right-8 w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"
                  >
                    <MagnifyingGlassIcon className="h-5 w-5 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Footer Link */}
        <motion.div 
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a 
            href="#contact"
            className="group flex items-center space-x-4 text-gray-900 font-bold uppercase text-xs tracking-[0.3em] hover:text-glassbox-blue transition-colors"
          >
            <span>Launch Your Story</span>
            <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-glassbox-blue group-hover:translate-x-2 transition-all duration-500">
              <span className="text-white text-lg">→</span>
            </div>
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-20 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="absolute top-10 right-10 text-white hover:text-glassbox-blue transition-colors z-[110]"
              whileHover={{ rotate: 90 }}
            >
              <XMarkIcon className="w-10 h-10" />
            </motion.button>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={`/images/${selectedImage.src}`} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-3xl shadow-2xl border border-white/10"
              />
              <div className="mt-8 text-center">
                <span className="text-glassbox-blue text-xs font-bold uppercase tracking-[0.4em] block mb-2">{selectedImage.tag}</span>
                <h3 className="text-white text-3xl font-display font-bold">{selectedImage.alt}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;