import React from 'react'
import { useState, useCallback } from 'react';
import {AnimatePresence} from "framer-motion"
import Preloader from './components/common/Preloader';
import Header from './components/sections/Header';

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

      <div>
        <Header/>
        <main>
          
        </main>
      </div>
    </>
  )
}

export default App
