import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { ProblemAwareness } from '../components/sections/ProblemAwareness';
import { Ecosystem } from '../components/sections/Ecosystem';
import { Heritage } from '../components/sections/Heritage';
import { Showroom } from '../components/sections/Showroom';
import { CTASection } from '../components/sections/CTASection';
import { Footer } from '../components/layout/Footer';

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemAwareness />
      <Ecosystem />
      <Heritage />
      <Showroom />
      <CTASection />
      <Footer />
    </>
  );
};
