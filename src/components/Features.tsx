import React from 'react';
import { useTranslation } from 'react-i18next';

const Features: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      key: 'technology',
      icon: '⚡',
      title: t('features.technology'),
      description: 'Cutting-edge advertising technology for maximum impact',
    },
    {
      key: 'management',
      icon: '📊',
      title: t('features.management'),
      description: 'Real-time campaign management and analytics',
    },
    {
      key: 'locations',
      icon: '📍',
      title: t('features.locations'),
      description: 'Strategic high-impact locations across the city',
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Why Choose Glassbox?
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            We combine advanced technology with strategic placement to deliver exceptional advertising results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature: any, index: number) => (
            <div
              key={feature.key}
              className="text-center group"
            >
              <div className="bg-white p-12 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-8xl mb-8 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
