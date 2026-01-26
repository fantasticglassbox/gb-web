import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const inquiryMailto = "mailto:info@glassbox.id?subject=Inquiry: Glassbox Advertising Campaign&body=Hello Glassbox Team,%0D%0A%0D%0AI am interested in launching an advertising campaign with your network. %0D%0A%0D%0AMy Brand: %0D%0AProject Type: %0D%0ATarget Locations: %0D%0A%0D%0APlease provide more details on your media kit and pricing.%0D%0A%0D%0ABest regards,";

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glassbox-blue/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-px bg-glassbox-blue"></div>
              <span className="text-glassbox-blue font-bold tracking-[0.4em] uppercase text-xs">{t('contact.tagline')}</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-8 leading-tight">
              {t('contact.title1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-glassbox-blue to-glassbox-purple">{t('contact.title2')}</span>
            </h2>
            
            <p className="text-xl text-gray-500 mb-12 leading-relaxed font-light max-w-lg">
              {t('contact.description')}
            </p>

            <div className="space-y-8">
              {[
                { icon: EnvelopeIcon, label: t('contact.email'), value: 'info@glassbox.id', href: inquiryMailto },
                { icon: PhoneIcon, label: t('contact.phone'), value: '+62 21 1234 5678', href: 'tel:+6281138777700' },
                { icon: MapPinIcon, label: t('contact.visit'), value: 'Jakarta, Indonesia', href: inquiryMailto },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-6 group p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-glassbox-blue/10 flex items-center justify-center text-glassbox-blue group-hover:bg-glassbox-blue group-hover:text-white transition-all duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{item.label}</span>
                    <span className="text-lg font-bold text-gray-900">{item.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Modern Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-glassbox-blue/20 to-glassbox-purple/20 rounded-[3rem] blur-2xl opacity-50"></div>
            <div className="relative glass bg-white/80 backdrop-blur-xl p-10 md:p-16 rounded-[3rem] border border-white shadow-2xl text-center">
              <h3 className="text-3xl font-display font-bold text-gray-900 mb-6">{t('contact.cardTitle')}</h3>
              <p className="text-gray-500 mb-10 text-lg">{t('contact.cardDescription')}</p>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={inquiryMailto}
                className="inline-block w-full bg-slate-900 text-white py-6 px-8 rounded-2xl font-bold text-xl shadow-xl hover:bg-glassbox-blue transition-all duration-300"
              >
                {t('contact.cardButton')}
              </motion.a>
              
              <div className="mt-10 pt-10 border-t border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">{t('contact.responseTime')}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
