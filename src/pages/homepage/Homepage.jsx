import React from 'react';
import { useEffect } from 'react';

import { Activities } from '../../components/Activities';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { PhoneGallery } from '../../components/PhoneGallery';
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
      <PhoneGallery type='best of 5 phone'/>
      <Contact />
      <Footer />
    </div>
  );
};
