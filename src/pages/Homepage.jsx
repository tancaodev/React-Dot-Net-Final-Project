import React from 'react'

import Activities from "../components/Activities";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

export const Homepage = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}