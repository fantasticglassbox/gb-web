'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

const galleryImages = [
  { src: '4-glassbox-scaled-e1735020462672.webp', alt: 'Premium Placement', tag: 'Retail', size: 'large' },
  { src: 'GHN03466-scaled-e1735012680736.webp', alt: 'Digital Excellence', tag: 'OOH', size: 'small' },
  { src: '1-glassbox-scaled-e1735020477398.webp', alt: 'Strategic Presence', tag: 'Hospitality', size: 'small' },
  { src: 'GHN03354-scaled.webp', alt: 'Visual Impact', tag: 'Public', size: 'tall' },
  { src: 'GHN03321-scaled.webp', alt: 'Network Growth', tag: 'Digital', size: 'small' },
  { src: 'GHN03125-scaled.webp', alt: 'Innovative Media', tag: 'Tech', size: 'wide' },
  { src: 'GHN03280-scaled.webp', alt: 'Seamless Integration', tag: 'Smart TV', size: 'small' },
  { src: 'GHN03420-scaled.webp', alt: 'Audience Engagement', tag: 'Interactive', size: 'small' },
];

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

  return (
    <section id="gallery" className="bg-[#F7F8FA] py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-px bg-glassbox-blue" />
              <span className="text-glassbox-blue text-xs font-bold uppercase tracking-[0.25em]">
                Visual Showcase
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight">
              Dampak <span className="text-glassbox-blue">Nyata</span>
            </h2>
          </div>
          <p className="text-base text-gray-500 max-w-xs leading-relaxed">
            {t('results.description')}
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {galleryImages.map((image, index) => {
            let gridClass = 'md:col-span-1 md:row-span-1';
            if (image.size === 'large') gridClass = 'md:col-span-2 md:row-span-2';
            if (image.size === 'wide') gridClass = 'md:col-span-2 md:row-span-1';
            if (image.size === 'tall') gridClass = 'md:col-span-1 md:row-span-2';

            return (
              <motion.div
                key={index}
                className={`${gridClass} relative group cursor-pointer overflow-hidden rounded-xl bg-gray-200`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={`/images/${image.src}`}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06] grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                  <span className="text-glassbox-blue text-[10px] font-bold uppercase tracking-[0.3em] mb-1">
                    {image.tag}
                  </span>
                  <p className="text-white text-base font-bold">{image.alt}</p>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MagnifyingGlassIcon className="h-4 w-4 text-white" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer link */}
        <div className="mt-12 flex justify-center">
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 text-gray-900 font-bold uppercase text-xs tracking-[0.25em] hover:text-glassbox-blue transition-colors group"
          >
            <span>Tampilkan Kampanye Anda</span>
            <span className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white group-hover:bg-glassbox-blue group-hover:translate-x-1 transition-all duration-300">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-16 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/images/${selectedImage.src}`}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
              <div className="mt-4 text-center">
                <span className="text-glassbox-blue text-xs font-bold uppercase tracking-widest">
                  {selectedImage.tag}
                </span>
                <p className="text-white text-xl font-bold mt-1">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
