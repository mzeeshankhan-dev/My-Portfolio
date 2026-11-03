import React from 'react'
import { useState, useCallback } from 'react';
import { AnimatePresence } from "framer-motion"
import Preloader from './components/common/Preloader';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Footer from './components/sections/Footer';
import TechLogoSwiper from './components/sections/TechLogoSwiper';
import Services from './components/sections/Services';
import Projects from './components/sections/Project';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

const App = () => {

  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <Preloader onComplete={handleComplete} />
        )}
      </AnimatePresence>
      {!loading && (
        <div className='overflow-hidden'>
          <Header />
          <main>
            <Hero />
            <TechLogoSwiper />
            <Services />
            <Projects/>
            <About/>
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      )}

    </>
  )
}

export default App
