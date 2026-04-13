import { motion } from 'framer-motion';
import { Car, House, ShieldCheck } from '@phosphor-icons/react';
import { useState } from 'react';

const ecosystems = [
  {
    id: 'automotive',
    icon: Car,
    title: 'Automotive Heritage',
    subtitle: 'Vermittlung & Management',
    description: 'Mit der Präzision aus 13 Jahren Motorsport und der Erfahrung eines BCA-Auktionators prüfen wir jedes Fahrzeug bis ins kleinste technische Detail.',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 'realestate',
    icon: House,
    title: 'Off-Market Real Estate',
    subtitle: 'Diskretion am Starnberger See',
    description: 'Exklusiver Zugang zu Immobilien, die nie ein öffentliches Portal erreichen. Wir vermitteln Diskretion und Werte mit höchster Käuferabsprache.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: 'storage',
    icon: ShieldCheck,
    title: 'Asset Security',
    subtitle: 'Lagerung & Werterhaltung',
    description: 'Sichere Unterstellung in unserer modernen, videoüberwachten Halle im Landkreis Berg. Wettergeschützt und fachmännisch betreut.',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=2000'
  }
];

export const Ecosystem = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="ecosystem" className="bg-[#151719] py-20 md:py-40 overflow-hidden">
      <div className="section-container">
        <div className="mb-20 space-y-4">
          <span className="text-accent uppercase tracking-widest text-xs font-semibold">Dienstleistungen</span>
          <h2 className="text-display text-4xl md:text-7xl font-bold">Das Ökosystem der <br /> <span className="text-accent italic font-light">Exklusivität.</span></h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 min-h-[600px]">
          {ecosystems.map((item) => (
            <motion.div
              key={item.id}
              className={`relative flex-1 overflow-hidden transition-all duration-700 ease-[0.16,1,0.3,1] ${hovered === item.id ? 'flex-[2.5]' : 'flex-1'}`}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background with Motion */}
              <div className="absolute inset-0">
                <motion.img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale brightness-[0.2]"
                  animate={{ scale: hovered === item.id ? 1.05 : 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-end border-r border-white/5 last:border-r-0">
                <item.icon className="w-12 h-12 text-accent mb-6" weight="thin" />
                <div className="space-y-4">
                  <h3 className="text-display text-3xl font-bold">{item.title}</h3>
                  <p className="text-accent font-medium uppercase tracking-[0.2em] text-[10px]">{item.subtitle}</p>
                  
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: hovered === item.id ? 'auto' : 0, opacity: hovered === item.id ? 1 : 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/60 leading-relaxed max-w-sm mt-4 text-sm">
                      {item.description}
                    </p>
                    <button className="mt-8 text-xs uppercase tracking-widest font-bold text-accent flex items-center gap-2 group">
                      Details erfahren
                      <div className="w-8 h-[1px] bg-accent group-hover:w-12 transition-all"></div>
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
