import React from 'react';
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

const Home: React.FC = () => {
  return (
    <>
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
