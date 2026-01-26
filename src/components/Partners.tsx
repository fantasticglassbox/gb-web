import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Partners: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    { id: 1, name: 'Partner 1', logo: '/images/client-1.png' },
    { id: 2, name: 'Partner 2', logo: '/images/client-2.png' },
    { id: 3, name: 'Partner 3', logo: '/images/client-3.png' },
    { id: 4, name: 'Partner 4', logo: '/images/client-4.png' },
    { id: 5, name: 'Partner 5', logo: '/images/client-5.png' },
    { id: 6, name: 'Partner 6', logo: '/images/client-6.png' },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-400 uppercase tracking-[0.4em] mb-6">
            Trusted By Industry Leaders
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-glassbox-blue to-glassbox-purple mx-auto rounded-full"></div>
        </motion.div>
      </div>

      {/* Scrolling Marquee */}
      <div className="relative flex overflow-hidden py-20 bg-gray-100/50 border-y border-gray-200/50">
        <motion.div 
          className="flex items-center whitespace-nowrap min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...partners, ...partners].map((partner: any, index: number) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center px-12 md:px-20">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 w-auto object-contain"
                onError={(e) => {
                  console.error(`Failed to load image: ${partner.logo}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;