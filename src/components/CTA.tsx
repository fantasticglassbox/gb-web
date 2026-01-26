import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const CTA: React.FC = () => {
  const { t } = useTranslation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      quote: t('testimonials.selo.quote'),
      author: t('testimonials.selo.author'),
      position: t('testimonials.selo.position')
    },
    {
      id: 2,
      quote: t('testimonials.amy.quote'),
      author: t('testimonials.amy.author'),
      position: t('testimonials.amy.position')
    },
    {
      id: 3,
      quote: t('testimonials.andriani.quote'),
      author: t('testimonials.andriani.author'),
      position: t('testimonials.andriani.position')
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const inquiryMailto = "mailto:info@glassbox.id?subject=Inquiry: Glassbox Advertising Campaign&body=Hello Glassbox Team,%0D%0A%0D%0AI am interested in launching an advertising campaign with your network. %0D%0A%0D%0AMy Brand: %0D%0AProject Type: %0D%0ATarget Locations: %0D%0A%0D%0APlease provide more details on your media kit and pricing.%0D%0A%0D%0ABest regards,";

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-glassbox-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-glassbox-purple/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-glassbox-blue to-glassbox-purple rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <motion.img
                src="/images/cta-image.png"
                alt="Professional Support Representative"
                className="w-full h-auto object-cover rounded-2xl shadow-elegant-lg relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
          
          {/* Right side - Content */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-glassbox-blue via-blue-600 to-glassbox-purple">
                {t('cta.title')}
              </span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.a 
                href={inquiryMailto}
                className="group relative inline-block overflow-hidden bg-slate-900 text-white px-12 py-5 rounded-full font-bold text-xl shadow-elegant-lg transition-all duration-300 mb-12"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-glassbox-blue to-glassbox-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">{t('cta.button')}</span>
              </motion.a>
            </motion.div>
            
            {/* Testimonial Card */}
            <motion.div 
              className="glass bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-elegant max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_: any, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                  >
                    <StarIcon className="w-5 h-5 text-glassbox-blue fill-current" />
                  </motion.div>
                ))}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <blockquote className="text-gray-700 italic mb-6 leading-relaxed text-base">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  
                  <cite className="text-gray-900 font-semibold text-base block">
                    {testimonials[currentTestimonial].author}
                  </cite>
                  <p className="text-gray-600 text-sm mt-1">
                    {testimonials[currentTestimonial].position}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              {/* Pagination indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_: any, index: number) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-glassbox-blue w-8' : 'bg-gray-300'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;