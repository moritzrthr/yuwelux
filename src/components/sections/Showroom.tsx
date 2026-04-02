import { motion } from 'framer-motion';
import { Lock, Eye } from '@phosphor-icons/react';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'See-Villa (Off-Market)',
    subtitle: 'Starnberger See, 1. Reihe',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200',
    type: 'Real Estate'
  },
  {
    id: 2,
    title: 'Legendärer Vorkriegs-Klassiker',
    subtitle: 'Originalzustand, unrestauriert',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200',
    type: 'Automotive'
  },
  {
    id: 3,
    title: 'Gewerbeimmobilie (Privatverkauf)',
    subtitle: 'High-Net-Worth Commercial',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200',
    type: 'Real Estate'
  },
  {
    id: 4,
    title: 'Moderner Hypercar-Prototyp',
    subtitle: 'Sammlungsstück, limitierte Edition',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=1200',
    type: 'Automotive'
  }
];

export const Showroom = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="portfolio" className="bg-[#1A1C1E] py-20 md:py-40">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 lg:mb-24 gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="text-accent uppercase tracking-widest text-xs font-semibold">Aktuelle Portfolio-Einblicke</span>
            <h2 className="text-display text-4xl md:text-7xl font-bold leading-tight">
              Der <span className="italic font-light text-accent">Off-Market</span> Tresor.
            </h2>
          </div>
          <p className="text-white/40 max-w-sm mb-2 text-sm leading-relaxed">
            Wir wahren Diskretion. Der Zugang zu detaillierten Objekt- und Fahrzeugdaten erfolgt ausschließlich nach persönlicher Qualifizierung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((item) => (
            <motion.div
              key={item.id}
              className="relative aspect-[3/4] group overflow-hidden glass-panel"
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Blur Overlay (Tresor Effect) */}
              <motion.div 
                animate={{ backdropFilter: hovered === item.id ? 'blur(1px)' : 'blur(20px)' }}
                className="absolute inset-0 bg-background/60 flex flex-col items-center justify-center p-8 text-center transition-all duration-700"
              >
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-full border border-accent/30 text-accent">
                  <Lock weight="thin" size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-2 tracking-tight">{item.title}</h3>
                <p className="text-accent text-[10px] uppercase tracking-widest font-bold mb-4">{item.type}</p>
                <p className="text-white/40 text-[11px] leading-relaxed mb-8">{item.subtitle}</p>
                
                <button className="text-[10px] uppercase tracking-widest font-bold text-accent flex items-center gap-2 group/btn">
                  Details anfragen
                  <Eye className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="luxury-button px-16 group">
            Vollständiges Portfolio öffnen
            <Lock className="ml-4 group-hover:-translate-y-0.5 transition-transform" weight="bold" />
          </button>
        </div>
      </div>
    </section>
  );
};
