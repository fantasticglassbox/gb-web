import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, EnvelopeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const inquiryMailto = "mailto:info@glassbox.id?subject=Inquiry: Glassbox Advertising Campaign&body=Hello Glassbox Team,%0D%0A%0D%0AI am interested in launching an advertising campaign with your network. %0D%0A%0D%0AMy Brand: %0D%0AProject Type: %0D%0ATarget Locations: %0D%0A%0D%0APlease provide more details on your media kit and pricing.%0D%0A%0D%0ABest regards,";

  const serviceData: Record<string, any> = {
    'media-placement': {
      title: t('services.mediaPlacement'),
      description: t('services.mediaPlacementDescription'),
      fullContent: "Maximize your brand's reach with strategic ad placements across our extensive network of digital signage and high-traffic public areas. We provide data-driven insights to ensure your message hits the right audience at the right time.",
      image: '/images/digital-signage.webp',
      features: ['Strategic Network', 'Data-Driven Insights', 'High-Traffic Reach', 'Dynamic Content']
    },
    'ooh-transit': {
      title: t('services.oohTransit'),
      description: t('services.oohTransitDescription'),
      fullContent: "Capture the attention of commuters and travelers with high-impact Out-of-Home transit advertising. From Transjakarta routes to major transport hubs, your brand moves with your audience.",
      image: '/images/smart-tv.webp',
      gallery: ['/ooh-1.webp', '/ooh-2.webp'],
      features: ['Commuter Targeting', 'High Frequency', 'Broad Visibility', 'Route-Specific Ads']
    },
    'offline-event': {
      title: t('services.offlineEvent'),
      description: t('services.offlineEventDescription'),
      fullContent: "Create unforgettable brand experiences with our offline event activations. We blend physical engagement with digital technology to create meaningful connections between your brand and its customers.",
      image: '/images/tablets.webp',
      features: ['Interactive Displays', 'Brand Activation', 'Experiential Marketing', 'Lead Generation']
    }
  };

  const service = serviceData[slug || ''];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFDFD]">
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{t('services.notFound')}</h1>
          <Link to="/" className="text-glassbox-blue flex items-center justify-center hover:underline font-bold">
            <ArrowLeftIcon className="w-4 h-4 mr-2" /> {t('services.backToHome')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FDFDFD] min-h-screen">
      <Header />
      
      {/* Background Accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glassbox-blue/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glassbox-purple/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4"></div>
      </div>

      <main className="pt-32 md:pt-40 pb-20 md:pb-32 relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-glassbox-blue mb-10 md:mb-12 transition-all duration-300 font-black uppercase text-[10px] md:text-xs tracking-[0.2em] group">
              <ArrowLeftIcon className="w-3.5 h-3.5 mr-2 group-hover:-translate-x-1 transition-transform" /> {t('services.backToHome')}
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-start w-full">
              {/* Left Column: Content */}
              <div className="lg:col-span-7 w-full">
                <div className="inline-flex items-center space-x-3 mb-6 md:mb-8 bg-glassbox-blue/5 px-4 py-2 rounded-full border border-glassbox-blue/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-glassbox-blue animate-pulse"></div>
                  <span className="text-glassbox-blue font-black tracking-[0.2em] uppercase text-[9px]">
                    {t('services.strategicSolution')}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold text-gray-900 mb-6 md:mb-10 leading-[1.1] tracking-tight w-full break-words">
                  {service.title.split(' ').slice(0, -1).join(' ')} <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-glassbox-blue via-blue-600 to-glassbox-purple italic font-light">
                    {service.title.split(' ').pop()}
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 mb-8 md:mb-12 leading-relaxed font-light w-full">
                  {service.description}
                </p>
                
                <div className="prose prose-lg md:prose-xl max-w-none mb-10 md:mb-16 text-gray-600 font-light leading-relaxed border-l-2 border-glassbox-blue/20 pl-6 md:pl-8 w-full">
                  <p>{service.fullContent}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 md:mb-16 w-full">
                  {service.features.map((feature: string, index: number) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center space-x-4 bg-white px-5 py-4 md:p-6 rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm hover:shadow-elegant transition-all duration-300 group"
                    >
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-glassbox-blue/10 flex items-center justify-center text-glassbox-blue group-hover:bg-glassbox-blue group-hover:text-white transition-colors flex-shrink-0">
                        <CheckCircleIcon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <span className="text-gray-900 font-black text-[9px] md:text-sm uppercase tracking-widest">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.a
                  href={inquiryMailto}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center md:justify-start space-x-4 bg-slate-900 text-white px-8 md:px-12 py-5 md:py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs md:text-lg shadow-xl hover:bg-glassbox-blue transition-all duration-300 w-full md:w-auto"
                >
                  <EnvelopeIcon className="w-5 h-5 md:w-6 md:h-6" />
                  <span>{t('services.launchCampaign')}</span>
                </motion.a>
              </div>

              {/* Right Column: Visuals */}
              <div className="lg:col-span-5 space-y-6 md:space-y-10 w-full">
                <div className="relative w-full">
                  {/* Floating Stat/Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
                    className="absolute -top-8 -right-4 md:-right-8 z-20 bg-glassbox-blue text-white p-4 md:p-6 rounded-2xl shadow-2xl rotate-[6deg] hidden sm:block"
                  >
                    <p className="text-2xl md:text-3xl font-black mb-0.5 leading-none">PRO</p>
                    <p className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest leading-tight opacity-80">
                      {t('services.standard')} <br /> {t('services.excellence')}
                    </p>
                  </motion.div>

                  <div className="absolute -inset-4 bg-glassbox-blue/10 rounded-[3.5rem] blur-2xl opacity-50 animate-pulse"></div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative z-10 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-elegant-lg border-4 md:border-8 border-white w-full"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto object-cover aspect-[4/5] hover:scale-105 transition-transform duration-1000"
                    />
                  </motion.div>
                </div>

                {service.gallery && (
                  <div className="grid grid-cols-2 gap-4 md:gap-6 relative z-10 w-full">
                    {service.gallery.map((img: string, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + idx * 0.1 }}
                        className="relative group rounded-2xl md:rounded-3xl overflow-hidden shadow-lg border-2 md:border-4 border-white aspect-square w-full"
                      >
                        <div className="absolute inset-0 bg-glassbox-blue/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                        <img
                          src={img}
                          alt={`${service.title} gallery ${idx + 1}`}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePage;
