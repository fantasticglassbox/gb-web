'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa6';

const socialLinks = [
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'http://instagram.com/glassboxid',
    hoverColor: 'hover:text-pink-400',
  },
  {
    name: 'TikTok',
    icon: FaTiktok,
    href: 'https://tiktok.com',
    hoverColor: 'hover:text-white',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    href: 'https://youtube.com',
    hoverColor: 'hover:text-red-400',
  },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0C0D10] border-t border-white/5 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-5">
            <Image src="/logo.png" alt="Glassbox" width={120} height={32} className="h-8 w-auto brightness-0 invert mb-5" />
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mb-8">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-500 ${social.hoverColor} hover:border-white/20 transition-all duration-200`}
                  whileHover={{ y: -2 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-600 mb-6">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {[
                { label: t('navigation.home'), action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                { label: t('navigation.about'), action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
                { label: t('navigation.services'), action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) },
                { label: t('navigation.gallery'), action: () => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }) },
                { label: t('navigation.articles'), href: '/articles' },
                { label: t('navigation.careers'), href: '/careers' },
              ].map((link: any) =>
                link.href ? (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs font-semibold text-gray-500 hover:text-white transition-colors uppercase tracking-wide"
                    >
                      {link.label}
                    </Link>
                  </li>
                ) : (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={link.action}
                      className="text-xs font-semibold text-gray-500 hover:text-white transition-colors uppercase tracking-wide"
                    >
                      {link.label}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-600 mb-6">
              Kontak
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:info@glassbox.id" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                  info@glassbox.id
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Telepon</p>
                <a href="tel:+6281138777700" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">
                  +62 811 3877 7700
                </a>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider mb-1">Lokasi</p>
                <p className="text-sm text-gray-500">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">{t('footer.copyright')}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-gray-600 hover:text-white transition-colors">
              {t('footer.privacy')}
            </Link>
            <span className="text-xs text-gray-700">Crafted for Impact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
