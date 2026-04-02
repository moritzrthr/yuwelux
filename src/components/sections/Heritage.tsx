import { motion } from 'framer-motion';

const milestones = [
  { year: '1999', title: 'Beginn im Automobilvertrieb', desc: 'Vertrieb namhafter Hersteller (Daimler AG, Avalon)' },
  { year: '2005', title: 'Professional Auctioneer', desc: 'Europas größter Fahrzeugversteigerer (bis zu 1.200 Fzg./Woche)' },
  { year: '2011', title: 'Motorsport Heritage', desc: '13 Jahre Erfahrung im professionellen Rennsport' },
  { year: '2024', title: 'Gründung Yuwelux GmbH', desc: 'Bündelung der Expertise in Automotive & Real Estate' }
];

export const Heritage = () => {
  return (
    <section id="heritage" className="relative bg-background py-20 md:py-40">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Portrait Image Container */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 relative group"
          >
            {/* Artistic Frame */}
            <div className="absolute -inset-4 border border-accent/20 transition-transform duration-700 group-hover:inset-0" />
            <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4]">
              <img 
                src="https://yuwelux.com/wp-content/uploads/2024/03/yuwelux-sacha-rauscher.webp" 
                alt="Sacha Rauscher - Yuwelux Founder" 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000 scale-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            <div className="absolute bottom-8 left-8 space-y-2">
              <p className="text-display text-4xl font-light">Sacha Rauscher</p>
              <p className="text-accent uppercase tracking-widest text-[10px] font-bold">Managing Director & Asset Curator</p>
            </div>
          </motion.div>

          {/* Heritage Content & Timeline */}
          <div className="w-full lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-bold leading-none">Heritage & Expertise</span>
              <h2 className="text-display text-4xl md:text-6xl font-bold leading-tight">
                Das <span className="italic font-light">Auktionator-Auge</span> für Wertermittlung.
              </h2>
              <p className="text-white/60 leading-relaxed font-light">
                Mit 25 Jahren Erfahrung im Vertrieb und Verkauf namhafter deutscher, englischer und italienischer Premiumhersteller sowie im Auktionsbereich bündeln wir Wissen, Emotionen und ein weltweites Netzwerk.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="space-y-12 pl-4 border-l border-white/10">
              {milestones.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[21px] top-0 w-2.5 h-2.5 bg-accent group-hover:scale-150 transition-transform duration-300" />
                  <div className="space-y-2 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-display text-xl font-bold text-accent italic">{item.year}</span>
                    <h3 className="text-lg font-medium text-white/90">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
