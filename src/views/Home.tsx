'use client';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import CTA from '../components/CTA';
import Contact from '../components/Contact';
import { sanitizedHomeSearch } from '../utils/sanitizeHomeSearch';

const Home: React.FC = () => {
  useTranslation();
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
      <Partners />
      <About />
      <Services />
      <Gallery />
      <CTA />
      <Contact />
    </main>
  );
};

export default Home;
