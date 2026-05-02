'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';

const partners = [
  { id: 1, name: 'Partner 1', logo: '/images/client-1.png' },
  { id: 2, name: 'Partner 2', logo: '/images/client-2.png' },
  { id: 3, name: 'Partner 3', logo: '/images/client-3.png' },
  { id: 4, name: 'Partner 4', logo: '/images/client-4.png' },
  { id: 5, name: 'Partner 5', logo: '/images/client-5.png' },
  { id: 6, name: 'Partner 6', logo: '/images/client-6.png' },
];

const Partners: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F7F8FA] border-b border-gray-200/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
          Dipercaya Oleh Berbagai Industri
        </p>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee items-center whitespace-nowrap">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center mx-10 md:mx-16"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-10 w-auto object-contain grayscale opacity-50 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
