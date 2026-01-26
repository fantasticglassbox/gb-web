import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
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

  const inquiryMailto = "mailto:info@glassbox.id?subject=Inquiry: Glassbox Advertising Campaign&body=Hello Glassbox Team,%0D%0A%0D%0AI am interested in launching an advertising campaign with your network. %0D%0A%0D%0AMy Brand: %0D%0AProject Type: %0D%0ATarget Locations: %0D%0A%0D%0APlease provide more details on your media kit and pricing.%0D%0A%0D%0ABest regards,";

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
    { name: t('navigation.contact'), href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass shadow-glass-lg backdrop-blur-xl py-3' 
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
                className={`h-10 w-auto transition-all duration-300 ${
                  location.pathname === '/' && !scrolled 
                    ? 'brightness-0 invert' 
                    : ''
                }`}
              />
            </motion.div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item: any, index: number) => (
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
                      className={`px-4 py-2 text-sm font-bold transition-all duration-300 flex items-center relative group ${
                        scrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.name}
                      <motion.div
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDownIcon className="ml-1 h-4 w-4" />
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
                          {item.submenu.map((subItem: any, subIndex: number) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-glassbox-blue/10 hover:text-glassbox-blue transition-all duration-200 relative group"
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
                      className={`px-4 py-2 text-sm font-bold transition-all duration-300 relative group ${
                        scrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'
                      }`}
                    >
                      {item.name}
                      <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-glassbox-blue to-glassbox-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 text-sm font-bold transition-all duration-300 relative group ${
                        scrolled || location.pathname !== '/' ? 'text-gray-800' : 'text-white'
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

          {/* Language Dropdown & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* CTA Button - Desktop */}
            <motion.a
              href={inquiryMailto}
              className={`hidden md:flex items-center space-x-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-glassbox-blue/30 ${
                scrolled 
                  ? 'bg-slate-900 text-white hover:bg-glassbox-blue' 
                  : 'bg-white text-slate-900 hover:bg-glassbox-blue hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Now</span>
            </motion.a>

            {/* Language Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center space-x-1 text-xs font-bold px-3 py-2 border rounded-full transition-all duration-300 shadow-sm ${
                  scrolled 
                    ? 'text-gray-800 border-gray-200 bg-white/50' 
                    : 'text-white border-white/30 bg-white/10'
                } hover:border-glassbox-blue hover:shadow-md`}
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-24 bg-white/95 backdrop-blur-xl rounded-xl shadow-glass-lg border border-gray-100 z-10 overflow-hidden"
                  >
                    <button
                      onClick={() => changeLanguage('id')}
                      className="block w-full text-center px-4 py-2.5 text-xs font-bold text-gray-700 hover:bg-glassbox-blue/10 hover:text-glassbox-blue transition-all duration-200 border-b border-gray-50"
                    >
                      INDONESIA
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className="block w-full text-center px-4 py-2.5 text-xs font-bold text-gray-700 hover:bg-glassbox-blue/10 hover:text-glassbox-blue transition-all duration-200"
                    >
                      ENGLISH
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors duration-300 ${
                scrolled ? 'text-gray-800 bg-gray-100' : 'text-white bg-white/10'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
