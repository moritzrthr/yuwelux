import { motion } from 'framer-motion';
import { CaretRight } from '@phosphor-icons/react';

export const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&fit=crop&q=80&w=2560" 
          alt="Luxury Classic Car" 
          className="w-full h-full object-cover grayscale opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="section-container relative z-10 w-full pt-20">
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-accent uppercase tracking-[0.3em] text-xs font-semibold">
              The Curator's Residence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-display text-5xl md:text-8xl font-bold"
          >
            Werte kuratieren.<br />
            <span className="italic text-accent">Zeit gewinnen.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-xl text-white/60 max-w-2xl leading-relaxed font-light"
          >
            Ihr persönlicher Zugang zu Off-Market Immobilien und exklusiven Automobilen am Starnberger See. Wir vereinen 25 Jahre Marktkenntnis mit der Diskretion eines Family Office.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6 pt-4"
          >
            <button className="luxury-button group">
              Portfolio anfragen
              <CaretRight weight="bold" className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="luxury-button-outline">
              Expertise entdecken
            </button>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30"
      >
        <div className="w-[1px] h-12 bg-white"></div>
        <span className="text-[10px] uppercase tracking-widest vertical-text">Scroll</span>
      </motion.div>
    </section>
  );
};
