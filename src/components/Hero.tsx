import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 1]); // Stay at 1 opacity longer
  const scale = useTransform(scrollY, [0, 500], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const inquiryMailto = "mailto:info@glassbox.id?subject=Inquiry: Glassbox Advertising Campaign&body=Hello Glassbox Team,%0D%0A%0D%0AI am interested in launching an advertising campaign with your network. %0D%0A%0D%0AMy Brand: %0D%0AProject Type: %0D%0ATarget Locations: %0D%0A%0D%0APlease provide more details on your media kit and pricing.%0D%0A%0D%0ABest regards,";

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Hero Background Image with Gradient and Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        <img
          src="/images/banner-glassbox-scaled-e1737130421875.webp"
          alt="Glassbox Hero"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/50 to-purple-900/70"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(11, 166, 223, 0.3), transparent 50%)`
          }}
        ></div>
      </motion.div>
      
      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-glassbox-blue/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-glassbox-purple/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-24">
          <path className="fill-white" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"/>
        </svg>
      </div>
      
      {/* Hero Content */}
      <motion.div 
        className="relative z-10 min-h-screen flex items-center pt-32 pb-20"
        style={{ opacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block px-4 py-1.5 mb-6 glass rounded-full border border-white/20"
              >
                <span className="text-sm font-bold tracking-widest text-white uppercase">
                  {t('hero.tagline')}
                </span>
              </motion.div>
              
              {/* Main Title */}
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                {t('hero.title').split(' ').map((word: string, i: number) => (
                  <span key={i} className="inline-block mr-[0.2em]">
                    {word === 'Glassbox' ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-glassbox-blue to-glassbox-purple drop-shadow-sm">
                        {word}
                      </span>
                    ) : word}
                  </span>
                ))}
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p 
                className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-xl mb-12 border-l-2 border-glassbox-blue pl-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                {t('hero.subtitle')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <motion.a
                  href={inquiryMailto}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-glassbox-blue to-glassbox-purple text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-glassbox-blue/40 transition-all duration-300 border border-white/20 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{t('hero.launchCampaign')}</span>
                  <div className="flex -space-x-2 relative z-10">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-white/50 animate-pulse delay-75"></div>
                  </div>
                </motion.a>
                
                <motion.a
                  href="#services"
                  className="inline-flex items-center space-x-3 glass bg-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 border border-white/20 shadow-xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{t('hero.exploreNetwork')}</span>
                </motion.a>
              </motion.div>
            </div>

            {/* Visual Element removed for cleaner look */}
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDownIcon className="h-8 w-8 text-white/60" />
      </motion.div>
    </section>
  );
};

export default Hero;
