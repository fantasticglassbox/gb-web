import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaInstagram, 
  FaYoutube,
  FaTiktok
} from 'react-icons/fa6';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, href: 'http://instagram.com/glassboxid', color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-600 hover:to-orange-500' },
    { name: 'TikTok', icon: FaTiktok, href: 'https://tiktok.com', color: 'hover:bg-black' },
    { name: 'YouTube', icon: FaYoutube, href: 'https://youtube.com', color: 'hover:bg-red-600' },
  ];

  return (
    <footer id="contact" className="relative bg-[#0A0C10] text-white overflow-hidden pt-24 pb-12">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-glassbox-blue/10 rounded-full blur-[120px] -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Mission */}
          <div className="md:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-display font-bold mb-8 text-white">
                Glassbox
              </h3>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light max-w-sm">
                {t('footer.tagline')}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social: any, index: number) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:border-transparent group`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-glassbox-blue mb-8">Navigation</h4>
            <ul className="space-y-4">
              {[
                { key: 'home', label: t('navigation.home'), action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                { key: 'about', label: t('navigation.about'), action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
                { key: 'services', label: t('navigation.services'), action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) },
                { key: 'gallery', label: t('navigation.gallery'), action: () => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }) },
                { key: 'articles', label: t('navigation.articles'), href: '/articles' },
              ].map((link: { key: string; label: string; href?: string; action?: () => void }) => (
                <li key={link.key}>
                  {link.href ? (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300 font-bold uppercase text-[11px] tracking-[0.15em] block"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button 
                      type="button"
                      onClick={link.action}
                      className="text-gray-400 hover:text-white transition-colors duration-300 font-bold uppercase text-[11px] tracking-[0.15em]"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-glassbox-blue mb-8">Get in Touch</h4>
            <div className="space-y-6">
              <div>
                <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Email Us</span>
                <a href="mailto:info@glassbox.id" className="text-lg font-bold text-white hover:text-glassbox-blue transition-colors break-words">
                  info@glassbox.id
                </a>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Call Us</span>
                <a href="tel:+6281138777700" className="text-lg font-bold text-white hover:text-glassbox-blue transition-colors">
                  +62 811 3877 7700
                </a>
              </div>
              <div>
                <span className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Visit Us</span>
                <p className="text-gray-400 font-medium leading-relaxed">
                  Jakarta, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">
          <p>{t('footer.copyright')}</p>
          <div className="flex space-x-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <span className="text-white/10 hidden md:inline">|</span>
            <p className="text-white/30">Crafted for Impact</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
