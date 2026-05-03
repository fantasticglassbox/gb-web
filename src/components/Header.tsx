'use client';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import i18n from '../lib/i18n';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) setVisible(false);
    else setVisible(true);
    setScrolled(latest > 50);
  });

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      if (pathname === '/') {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push('/' + href);
      }
    }
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    setIsLanguageOpen(false);
  };

  const onHero = pathname === '/' && !scrolled;
  const navTextClass = onHero ? 'text-white/80 hover:text-white' : 'text-gray-700 hover:text-gray-900';

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
      ],
    },
    { name: t('navigation.gallery'), href: '#gallery' },
    { name: t('navigation.articles'), href: '/articles' },
    { name: t('navigation.careers'), href: '/careers' },
    { name: t('navigation.contact'), href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: visible ? 0 : -80 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled || pathname !== '/'
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/70 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Glassbox"
              width={120}
              height={32}
              className={`h-8 w-auto transition-all duration-300 ${onHero ? 'brightness-0 invert' : 'brightness-100'}`}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item: any) => (
              <div key={item.name} className="relative">
                {item.submenu ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`flex items-center gap-1 px-3.5 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors ${navTextClass}`}
                    >
                      {item.name}
                      <motion.span
                        animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                      >
                        <ChevronDownIcon className="h-3 w-3" />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1.5 w-52 bg-white rounded-xl shadow-card border border-gray-100 z-50 py-1.5 overflow-hidden"
                        >
                          {item.submenu.map((sub: any) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-gray-600 hover:bg-glassbox-blue/5 hover:text-glassbox-blue transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : item.href.startsWith('#') ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`px-3.5 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors ${navTextClass}`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3.5 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors ${navTextClass}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* CTA button */}
            <button
              type="button"
              onClick={() => handleNavClick('#contact')}
              className={`hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-200 ${
                onHero
                  ? 'bg-glassbox-amber text-black hover:bg-amber-400'
                  : 'bg-gray-900 text-white hover:bg-glassbox-blue'
              }`}
            >
              {t('header.contactCtaShort')}
            </button>

            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-full text-[11px] font-bold border transition-all ${
                  onHero
                    ? 'text-white/70 border-white/20 hover:border-white/40'
                    : 'text-gray-600 border-gray-200 hover:border-gray-400 bg-white'
                }`}
              >
                <span>{i18n.language === 'en' ? 'EN' : 'ID'}</span>
                <motion.span
                  animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  <ChevronDownIcon className="h-3 w-3" />
                </motion.span>
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-1.5 w-32 bg-white rounded-xl shadow-card border border-gray-100 z-10 py-1 overflow-hidden"
                  >
                    {['id', 'en'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => changeLanguage(lang)}
                        className="block w-full text-center px-4 py-2.5 text-[11px] font-bold tracking-widest text-gray-600 hover:bg-glassbox-blue/5 hover:text-glassbox-blue transition-colors"
                      >
                        {lang === 'id' ? 'INDONESIA' : 'ENGLISH'}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                onHero ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isMenuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden mt-3"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-card px-4 py-4 space-y-1">
                {navigation.map((item: any) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold text-gray-800 hover:text-glassbox-blue transition-colors"
                        >
                          {item.name}
                          <ChevronDownIcon className="h-4 w-4" />
                        </button>
                        {activeDropdown === item.name && (
                          <div className="pl-4 space-y-1">
                            {item.submenu.map((sub: any) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-glassbox-blue transition-colors"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : item.href.startsWith('#') ? (
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="block w-full text-left px-3 py-3 text-sm font-bold text-gray-800 hover:text-glassbox-blue transition-colors"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-3 py-3 text-sm font-bold text-gray-800 hover:text-glassbox-blue transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleNavClick('#contact')}
                    className="w-full bg-glassbox-amber text-black font-bold text-sm py-3.5 rounded-xl hover:bg-amber-400 transition-colors"
                  >
                    {t('header.contactCta')}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
