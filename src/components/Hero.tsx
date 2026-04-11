import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 1]); // Stay at 1 opacity longer

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
      
      {/* Bridge into About: tinted fade + gradient wave (ties hero blues to light section) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none leading-[0] w-full max-w-full overflow-hidden">
        <div
          className="h-12 w-full bg-gradient-to-b from-transparent via-slate-950/30 to-slate-900/20 sm:h-16 md:h-20"
          aria-hidden
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block h-[56px] w-full max-w-full sm:h-[68px] md:h-[84px]"
          aria-hidden
        >
          <defs>
            <linearGradient id="heroWaveSurface" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0c4a6e" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#cbd5e1" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#FDFDFD" />
            </linearGradient>
          </defs>
          <path
            fill="url(#heroWaveSurface)"
            d="M0,120V48C200,88 400,28 600,58C800,88 1000,38 1200,62C1320,76 1380,68 1440,64V120H0Z"
          />
        </svg>
      </div>
      
      {/* Hero Content */}
      <motion.div 
        className="relative z-10 flex min-h-screen items-center pt-32 pb-24 sm:pb-28 md:pb-32"
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

    </section>
  );
};

export default Hero;
