import React from 'react';
import { useTranslation } from 'react-i18next';

const Audience: React.FC = () => {
  const { t } = useTranslation();

  const locations = [
    { key: 'hotel', icon: '🏨' },
    { key: 'transjakarta', icon: '🚌' },
    { key: 'universities', icon: '🎓' },
    { key: 'mall', icon: '🏬' },
    { key: 'lounges', icon: '🍸' },
    { key: 'retail', icon: '🛍️' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            {t('audience.title')}
          </h2>
          <p className="text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
            {t('audience.description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
          {locations.map((location: any, index: number) => (
            <div
              key={location.key}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
                  {location.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {t(`audience.locations.${location.key}`)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
