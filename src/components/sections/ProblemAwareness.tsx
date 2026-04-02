import { motion } from 'framer-motion';

export const ProblemAwareness = () => {
  return (
    <section id="about" className="relative bg-[#1A1C1E] py-20 md:py-40">
      <div className="section-container">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 space-y-6"
          >
            <h2 className="text-display text-4xl md:text-6xl font-light leading-tight">
              Die Last der <br />
              <span className="italic font-bold text-accent">Exzellenz.</span>
            </h2>
            <div className="w-12 h-0.5 bg-accent/30"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 space-y-8"
          >
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
              Zeit ist die einzige Währung, die Sie nicht vermehren können.
            </p>
            <p className="text-white/60 leading-relaxed">
              In einer Welt voller Intransparenz und steigender Komplexität bei Sachwert-Investments wird Diskretion zum höchsten Gut. Wir verstehen die Last, die mit exzeptionellen Sammlungen und Off-Market Immobilien einhergeht.
            </p>
            <p className="text-white/60 leading-relaxed italic">
              «Wir nehmen Ihr Anliegen so ernst, dass wir die Details vorab präzise erfassen – um Ihre Zeit und Privatsphäre zu wahren.»
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Minimal Line */}
      <div className="absolute right-0 top-1/2 w-40 h-[1px] bg-accent/20"></div>
    </section>
  );
};
