import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) return <SplashScreen />;

  return (
    <>
      <Navbar />
      <main className="pt-[80px]">
        <Hero />
        <Projects />
        <Skills />
        <Blog />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
