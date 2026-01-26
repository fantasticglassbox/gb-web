import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'mediaPlacement',
      slug: 'media-placement',
      icon: '/images/digital-signage.webp',
      title: t('services.mediaPlacement'),
      description: t('services.mediaPlacementDescription') || 'Strategic placement of your advertisements across high-traffic locations',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      key: 'oohTransit',
      slug: 'ooh-transit',
      icon: '/images/smart-tv.webp',
      title: t('services.oohTransit'),
      description: t('services.oohTransitDescription') || 'Out-of-home transit advertising for maximum visibility and reach',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      key: 'offlineEvent',
      slug: 'offline-event',
      icon: '/images/tablets.webp',
      title: t('services.offlineEvent'),
      description: t('services.offlineEventDescription') || 'Offline event activation and experiential marketing solutions',
      gradient: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <section id="services" className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-glassbox-blue/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glassbox-purple/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8">
            Strategic <span className="text-glassbox-blue">Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {t('services.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service: any, index: number) => (
            <motion.div 
              key={service.key}
              id={service.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative h-full"
            >
              <Link to={`/services/${service.slug}`} className="block h-full">
                <div className="relative glass-dark p-10 rounded-[2.5rem] border border-white/5 hover:border-glassbox-blue/30 transition-all duration-500 h-full flex flex-col items-center text-center">
                  <div className="w-40 h-40 mb-10 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}></div>
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-glassbox-blue transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light text-lg mb-8 flex-grow">
                    {service.description}
                  </p>
                  <motion.div
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-glassbox-blue group-hover:border-transparent transition-all duration-300"
                  >
                    <ArrowRightIcon className="h-5 w-5 text-white" />
                  </motion.div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
