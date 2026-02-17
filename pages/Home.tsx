import React, { useEffect } from 'react';
import { Hero } from '../components/Sections/Hero';
import { Comparison } from '../components/Sections/Comparison';
import { BeforeAfter } from '../components/Sections/BeforeAfter';
import { Workflow } from '../components/Sections/Workflow';
import { Safety } from '../components/Sections/Safety';
import { FinalCTA } from '../components/Sections/FinalCTA';
import { Footer } from '../components/Layout/Footer';

export const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <Comparison />
        <BeforeAfter />
        <Workflow />
        <Safety />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};
