import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setScrolled(latest > 50);
  });

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/' + href);
      }
    }
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsLanguageOpen(false);
  };

  const contactCtaOnHero = location.pathname === '/' && !scrolled;

  const navigation = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.about'), href: '#about' },
    { 
      name: t('navigation.services'), 
      href: '#services',
      submenu: [
        { name: t('services.mediaPlacement'), href: '/services/media-placement' },
        { name: t('services.oohTransit'), href: '/services/ooh-transit' },
        { name: t('services.offlineEvent'), href: '/services/offline-event' },
      ]
    },
    { name: t('navigation.gallery'), href: '#gallery' },
    { name: t('navigation.articles'), href: '/articles' },
    { name: t('navigation.contact'), href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled || location.pathname !== '/'
          ? 'glass shadow-glass-lg backdrop-blur-xl py-3 border-b border-white/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src="/logo.png"
                alt="Glassbox Logo"
                className={`h-9 w-auto transition-all duration-300 ${
                  location.pathname === '/' && !scrolled 
                    ? 'brightness-0 invert' 
                    : 'brightness-100'
                }`}
              />
            </motion.div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item: any) => (
              <motion.div 
                key={item.name} 
                className="relative"
              >
                {item.submenu ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="relative"
                  >
                    <motion.button 
                      onClick={() => handleNavClick(item.href)}
                      className={`px-4 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 flex items-center relative group ${
                        scrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
                      }`}
                    >
                      {item.name}
                      <motion.div
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDownIcon className="ml-1 h-3 w-3" />
                      </motion.div>
                      <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-glassbox-blue to-glassbox-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                    </motion.button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-glass-lg border border-gray-100 z-50 py-2 overflow-hidden"
                        >
                          {item.submenu.map((subItem: any) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-6 py-3.5 text-[10px] font-black uppercase tracking-widest text-gray-700 hover:bg-glassbox-blue/5 hover:text-glassbox-blue transition-all duration-200 relative group"
                            >
                              {subItem.name}
                              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-glassbox-blue to-glassbox-purple transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  item.href.startsWith('#') ? (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`px-4 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                        scrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
                      }`}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-glassbox-blue to-glassbox-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 relative group ${
                        scrolled || location.pathname !== '/' ? 'text-gray-900' : 'text-white'
                      }`}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-glassbox-blue to-glassbox-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                    </Link>
                  )
                )}
              </motion.div>
            ))}
          </nav>

          {/* Right Controls: CTA before language (mobile-friendly) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <motion.button
              type="button"
              onClick={() => handleNavClick('#contact')}
              className={`group inline-flex items-center justify-center gap-2 rounded-full font-black uppercase transition-all duration-500 shadow-elegant hover:shadow-glassbox-blue/40 ring-1 ring-black/5 touch-manipulation whitespace-nowrap min-h-[44px] pl-2.5 pr-3.5 py-1.5 text-[9px] tracking-[0.12em] sm:gap-2.5 sm:pl-3 sm:pr-5 sm:py-2 sm:text-[10px] sm:tracking-[0.2em] sm:min-h-0 ${
                scrolled || location.pathname !== '/'
                  ? 'bg-slate-900 text-white hover:bg-glassbox-blue ring-white/10'
                  : 'bg-white text-slate-900 hover:bg-glassbox-blue hover:text-white ring-black/5'
              }`}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-500 sm:h-9 sm:w-9 ${
                  contactCtaOnHero
                    ? 'bg-gradient-to-br from-glassbox-blue/25 to-glassbox-purple/30 shadow-sm group-hover:from-white/30 group-hover:to-white/20'
                    : 'bg-white/15 shadow-inner group-hover:bg-white/25'
                }`}
              >
                <RocketLaunchIcon
                  className="h-4 w-4 text-glassbox-blue transition-colors duration-300 group-hover:text-white drop-shadow-sm sm:h-[18px] sm:w-[18px]"
                  aria-hidden
                />
              </span>
              <span className="sm:hidden">{t('header.contactCtaShort')}</span>
              <span className="hidden sm:inline">{t('header.contactCta')}</span>
            </motion.button>

            {/* Language Switcher */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center space-x-1 text-[10px] font-black px-4 py-2.5 border rounded-full transition-all duration-500 shadow-sm ${
                  scrolled || location.pathname !== '/'
                    ? 'text-gray-900 border-gray-200 bg-white/50' 
                    : 'text-white border-white/20 bg-white/5'
                } hover:border-glassbox-blue hover:shadow-elegant`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{i18n.language === 'en' ? 'EN' : 'ID'}</span>
                <motion.div
                  animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-3 w-3" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-32 bg-white/95 backdrop-blur-xl rounded-2xl shadow-glass-lg border border-gray-100 z-10 overflow-hidden py-1"
                  >
                    <button
                      onClick={() => changeLanguage('id')}
                      className="block w-full text-center px-4 py-3 text-[10px] font-black tracking-widest text-gray-700 hover:bg-glassbox-blue/5 hover:text-glassbox-blue transition-all duration-200 border-b border-gray-50"
                    >
                      INDONESIA
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className="block w-full text-center px-4 py-3 text-[10px] font-black tracking-widest text-gray-700 hover:bg-glassbox-blue/5 hover:text-glassbox-blue transition-all duration-200"
                    >
                      ENGLISH
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2.5 rounded-full transition-all duration-300 ${
                scrolled || location.pathname !== '/' ? 'text-gray-900 bg-gray-100' : 'text-white bg-white/10'
              } hover:bg-glassbox-blue hover:text-white`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden mt-4"
            >
              <div className="px-4 pt-2 pb-6 space-y-2 bg-white rounded-3xl shadow-glass-lg border border-gray-100">
                {navigation.map((item: any, index: number) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div className="py-2">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="text-gray-800 hover:text-glassbox-blue flex items-center justify-between w-full px-4 py-3 text-lg font-bold transition-colors duration-200"
                        >
                          {item.name}
                          <motion.div
                            animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDownIcon className="h-5 w-5" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6 space-y-1 overflow-hidden"
                            >
                              {item.submenu.map((subItem: any) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="text-gray-600 hover:text-glassbox-blue block px-4 py-2 text-base font-medium transition-colors duration-200"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      item.href.startsWith('#') ? (
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className="text-gray-800 hover:text-glassbox-blue block px-4 py-3 text-lg font-bold transition-colors duration-200 border-b border-gray-50 last:border-0 w-full text-left"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          className="text-gray-800 hover:text-glassbox-blue block px-4 py-3 text-lg font-bold transition-colors duration-200 border-b border-gray-50 last:border-0"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleNavClick('#contact')}
                  className="mt-4 mx-4 flex w-[calc(100%-2rem)] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-glassbox-blue to-glassbox-purple py-4 px-4 text-white font-black uppercase tracking-widest text-[10px] shadow-elegant shadow-glassbox-blue/25 active:opacity-95 touch-manipulation min-h-[52px] ring-1 ring-white/20"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30">
                    <RocketLaunchIcon className="h-5 w-5 text-white drop-shadow-md" aria-hidden />
                  </span>
                  <span className="text-left leading-tight">{t('header.contactCta')}</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
