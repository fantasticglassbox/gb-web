import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Platforms from '../components/Platforms';
import Gallery from '../components/Gallery';
import Partners from '../components/Partners';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { SITE_URL } from '../config/site';
import { ogLocalePair } from '../config/seoLocales';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const title = t('seo.homeTitle');
  const description = t('seo.homeDescription');
  const canonical = `${SITE_URL}/`;
  const { primary: ogLocale, alternate: ogLocaleAlternate } = ogLocalePair(i18n.language);

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Glassbox',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: 'info@glassbox.id',
    inLanguage: ['id', 'en'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressCountry: 'ID',
    },
    areaServed: [
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'City', name: 'Jakarta' },
    ],
    sameAs: ['https://www.instagram.com/glassboxid'],
  };

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Glassbox',
    url: SITE_URL,
    email: 'info@glassbox.id',
    inLanguage: ['id', 'en'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jakarta',
      addressCountry: 'ID',
    },
    areaServed: [
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'City', name: 'Jakarta' },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang={i18n.language === 'id' ? 'id' : 'en'} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:locale" content={ogLocale} />
        <meta property="og:locale:alternate" content={ogLocaleAlternate} />
        <meta property="og:image" content={`${SITE_URL}/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/logo.png`} />
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <CTA />
      <Platforms />
      <Gallery />
      <Partners />
      <Footer />
    </>
  );
};

export default Home;
