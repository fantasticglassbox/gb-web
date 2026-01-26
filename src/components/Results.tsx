import React from 'react';
import { useTranslation } from 'react-i18next';

const Results: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {t('results.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12">
            {t('results.description')}
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            {t('results.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Results;
