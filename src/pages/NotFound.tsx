import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#FDFDFD] min-h-screen flex flex-col overflow-hidden">
      <Header />
      
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-glassbox-blue/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-glassbox-purple/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/4 pointer-events-none"></div>

      <main className="flex-grow flex items-center justify-center pt-32 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-glassbox-blue/10 text-glassbox-blue mb-12 border border-glassbox-blue/20">
              <ExclamationTriangleIcon className="w-10 h-10" />
            </div>

            <h1 className="text-[12rem] md:text-[18rem] font-display font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-400 to-transparent opacity-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 select-none">
              404
            </h1>

            <h2 className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6 tracking-tight">
              {t('error.notFound.subtitle')}
            </h2>
            
            <p className="text-xl text-gray-500 mb-12 leading-relaxed font-light max-w-lg mx-auto">
              {t('error.notFound.description')}
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/"
                className="inline-flex items-center space-x-3 bg-slate-900 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[12px] shadow-2xl hover:bg-glassbox-blue transition-all duration-300 group"
              >
                <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>{t('error.notFound.backHome')}</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
