import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ProblemAwareness } from './components/sections/ProblemAwareness';
import { Ecosystem } from './components/sections/Ecosystem';
import { Heritage } from './components/sections/Heritage';
import { Showroom } from './components/sections/Showroom';
import { CTASection } from './components/sections/CTASection';
import { Footer } from './components/layout/Footer';

function App() {
  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative selection:bg-accent selection:text-background">
      <Navbar />
      <Hero />
      <ProblemAwareness />
      <Ecosystem />
      <Heritage />
      <Showroom />
      <CTASection />
      <Footer />
    </main>
  );
}

export default App;
