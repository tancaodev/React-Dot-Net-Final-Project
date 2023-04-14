import React from 'react';
import { useEffect } from 'react';

import { Activities } from '../../components/Activities';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { Gallery } from '../../components/Gallery';
import { Navbar } from '../../components/Navbar';
import { TopBar } from '../../components/TopBar';
import { Hero } from '../../components/Hero';

export const Homepage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Gallery type='best of 5 phone'/>
      <Gallery type='cpu'/>
      <Gallery type='laptop'/>
      <Contact />
      <Footer />
    </div>
  );
};
