import React from 'react'
import { useState, useCallback } from 'react';
import { AnimatePresence } from "framer-motion"
import Preloader from './components/common/Preloader';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Footer from './components/sections/Footer';

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
        <div>
          <Header />
          <main>
            <Hero />
          </main>
          <Footer />
        </div>
      )}

    </>
  )
}

export default App
