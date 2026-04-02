import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { HomePage } from './pages/HomePage';
import { StrategyPage } from './pages/StrategyPage';

function App() {
  const location = useLocation();

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

    // Scroll to hash element if exists
    if (location.hash) {
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          lenis.scrollTo(el as HTMLElement, { offset: -80 });
        }
      }, 300);
    } else {
      lenis.scrollTo(0, { immediate: true });
    }

    return () => {
      lenis.destroy();
    };
  }, [location.pathname]);

  return (
    <main className="relative selection:bg-accent selection:text-background min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/strategie" element={<StrategyPage />} />
      </Routes>
    </main>
  );
}

export default App;
