import React, { Suspense } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './i18n';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-white dark:bg-secondary text-secondary dark:text-white transition-colors duration-300">
        <Header />
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;