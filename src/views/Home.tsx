'use client';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';
import Services from '../components/Services';
import Platforms from '../components/Platforms';
import Gallery from '../components/Gallery';
import Partners from '../components/Partners';
import CTA from '../components/CTA';
import { sanitizedHomeSearch } from '../utils/sanitizeHomeSearch';

const Home: React.FC = () => {
  useTranslation(); // ensure i18n context
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== '/') return;
    const raw = searchParams?.toString() ? '?' + searchParams.toString() : '';
    const next = sanitizedHomeSearch(raw);
    if (next === raw) return;
    router.replace(next ? `/${next}` : '/');
  }, [pathname, searchParams, router]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.location.hash !== '#contact') return;
    const id = window.setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Contact />
      <CTA />
      <Platforms />
      <Gallery />
      <Partners />
    </main>
  );
};

export default Home;
