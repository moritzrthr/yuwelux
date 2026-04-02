import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { CaretRight, CaretLeft, CheckCircle } from '@phosphor-icons/react';

const steps = [
  {
    id: 1,
    title: 'Interesse',
    question: 'Wofür interessieren Sie sich?',
    options: ['High-End Automotive', 'Off-Market Immobilien', 'Asset Management & Storage', 'Boxmanagement & Sport']
  },
  {
    id: 2,
    title: 'Typ',
    question: 'Welche Rolle trifft auf Sie zu?',
    options: ['Kauf / Erwerb eines Objekts', 'Verkauf / Vermittlung meines Bestands', 'Portfolio-Beratung & Analyse', 'Asset Management (Betreuung)']
  },
  {
    id: 3,
    title: 'Kontakt',
    question: 'Zuletzt, wie dürfen wir Sie kontaktieren?',
    fields: true
  }
];

export const CTASection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSuccess(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleOption = (option: string) => {
    setSelectedOptions({ ...selectedOptions, [currentStep]: option });
  };

  return (
    <section id="contact" className="bg-[#151719] py-20 md:py-40">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-bold">The Red Carpet</span>
            <h2 className="text-display text-4xl md:text-7xl font-bold leading-tight">
              Ein Dialog <br />
              <span className="italic font-light text-accent">unter Experten.</span>
            </h2>
            <p className="text-white/60 leading-relaxed max-w-md font-light">
              Ihre Zeit ist das kostbarste Asset. Wir bereiten jedes Erstgespräch individuell vor. Diskretion beginnt bei der ersten Anfrage.
            </p>
            
            <div className="pt-12 space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                  <CheckCircle weight="thin" size={20} />
                </div>
                <p className="text-sm font-medium">100% Diskrete Abwicklung</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                  <CheckCircle weight="thin" size={20} />
                </div>
                <p className="text-sm font-medium">Individuelle Marktanalyse vorab</p>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all">
                  <CheckCircle weight="thin" size={20} />
                </div>
                <p className="text-sm font-medium">Direkter Draht zur Geschäftsführung</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 md:p-12 min-h-[500px] flex flex-col justify-between"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div 
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <div className="flex justify-between items-center bg-white/5 p-2 px-4 rounded-full">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Schritt {currentStep} von {steps.length}</span>
                      <span className="text-[10px] uppercase tracking-widest font-bold text-accent">{steps[currentStep-1].title}</span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight">{steps[currentStep-1].question}</h3>

                    <div className="space-y-4">
                      {steps[currentStep-1].options?.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => toggleOption(opt)}
                          className={`w-full text-left px-6 py-4 border transition-all duration-300 text-sm font-medium flex justify-between items-center ${selectedOptions[currentStep] === opt ? 'bg-accent border-accent text-background' : 'bg-white/5 border-white/10 hover:border-accent/40 text-white/60'}`}
                        >
                          {opt}
                          {selectedOptions[currentStep] === opt && <CheckCircle weight="fill" />}
                        </button>
                      ))}

                      {steps[currentStep-1].fields && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input type="text" placeholder="Name" className="bg-white/5 border border-white/10 p-4 text-sm focus:border-accent outline-none transition-all placeholder:text-white/20" />
                          <input type="email" placeholder="E-Mail" className="bg-white/5 border border-white/10 p-4 text-sm focus:border-accent outline-none transition-all placeholder:text-white/20" />
                          <input type="tel" placeholder="Telefon (optional)" className="bg-white/5 border border-white/10 p-4 text-sm focus:border-accent outline-none transition-all placeholder:text-white/20" />
                          <input type="text" placeholder="Betreff" className="bg-white/5 border border-white/10 p-4 text-sm focus:border-accent outline-none transition-all placeholder:text-white/20" />
                          <textarea placeholder="Ihre Nachricht" className="bg-white/5 border border-white/10 p-4 text-sm focus:border-accent outline-none transition-all placeholder:text-white/20 md:col-span-2 min-h-[120px]"></textarea>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20 space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center text-background">
                      <CheckCircle weight="bold" size={48} />
                    </div>
                    <h3 className="text-3xl font-bold">Vielen Dank.</h3>
                    <p className="text-white/40 max-w-xs mx-auto">
                      Wir haben Ihre Anfrage erhalten. Ein Mitglied der Geschäftsführung wird sich innerhalb von 24 Stunden bei Ihnen melden.
                    </p>
                    <button onClick={() => {setIsSuccess(false); setCurrentStep(1);}} className="text-accent uppercase tracking-widest text-xs font-bold hover:underline">
                      Neue Anfrage starten
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isSuccess && (
                <div className="flex gap-4 pt-12 border-t border-white/10">
                  {currentStep > 1 && (
                    <button onClick={handlePrev} className="flex-1 flex items-center justify-center gap-2 p-4 border border-white/10 text-white/40 hover:text-white transition-all text-xs uppercase tracking-widest font-bold">
                      <CaretLeft /> Zurück
                    </button>
                  )}
                  <button 
                    disabled={!selectedOptions[currentStep] && !steps[currentStep-1].fields}
                    onClick={handleNext} 
                    className="flex-[2] flex items-center justify-center gap-2 luxury-button disabled:opacity-30 disabled:hover:bg-accent"
                  >
                    {currentStep === steps.length ? 'Qualifizierte Anfrage senden' : 'Nächster Schritt'}
                    <CaretRight weight="bold" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
