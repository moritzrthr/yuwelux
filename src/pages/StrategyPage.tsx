import { motion } from 'framer-motion';
import { Globe, Users, AppWindow, Target, Rocket, ShieldCheck } from '@phosphor-icons/react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

const StrategySection = ({ icon: Icon, title, subtitle, children, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="group p-8 md:p-12 glass-panel hover:border-accent/40 transition-all duration-500"
  >
    <div className="flex items-start gap-6">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-colors">
        <Icon size={24} weight="thin" />
      </div>
      <div className="space-y-4 flex-1">
        <span className="text-accent uppercase tracking-widest text-[10px] font-bold">{subtitle}</span>
        <h3 className="text-display text-2xl md:text-3xl font-bold">{title}</h3>
        <div className="text-white/60 leading-relaxed font-light space-y-4">
          {children}
        </div>
      </div>
    </div>
  </motion.div>
);

export const StrategyPage = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            <div className="w-8 h-[1px] bg-accent"></div>
            <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-bold">Yuwelux Strategy V1.0</span>
          </motion.div>
          <h1 className="text-display text-5xl md:text-8xl font-bold leading-none">
            Vom Broker zum <br />
            <span className="italic font-light text-accent italic">Family Office.</span>
          </h1>
          <p className="text-white/40 max-w-2xl text-lg font-light">
            Die strategische Basis für digitale Exzellenz und autoritäre Marktführung im HNWI-Segment.
          </p>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <StrategySection icon={Globe} subtitle="01 Markt-Analyse" title="Der paradoxe Markt">
            <p>Der Markt am Starnberger See ist paradox: Höchste Objektexzellenz trifft auf erschreckend niedrige digitale Vermittlungsqualität.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sättigung der Austauschbarkeit:</strong> "Me-too-Effekt" bei Mitbewerbern.</li>
              <li><strong>Die Lücke:</strong> Analoge Expertise (25 Jahre) wird digital bisher nicht skaliert.</li>
              <li><strong>Insight:</strong> 89% der Premium-Kunden reagieren allergisch auf Zeitverschwendung.</li>
            </ul>
          </StrategySection>

          <StrategySection icon={Users} subtitle="02 Zielgruppe" title="Wer wirklich kauft" delay={0.1}>
            <p>Wir bauen nicht für Massen. Wir bauen für zwei Eliten:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>HNWI Sammler:</strong> Sucht "Frictionless Living" und exklusiven Off-Market Zugang.</li>
              <li><strong>KMU-Inhaber:</strong> Kauft Vertrauen durch nachgewiesene Heritage (13J Motorsport).</li>
              <li><strong>Psychogramm:</strong> Hassen Marktschreierei, suchen Quiet Luxury und Fakten-Transparenz.</li>
            </ul>
          </StrategySection>

          <StrategySection icon={AppWindow} subtitle="03 Produkt-Rationales" title="Die neue Architektur" delay={0.2}>
            <p>Jedes Feature der Website hat einen strategischen Nutzen:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Multi-Step Check:</strong> Commitment-Effekt & 70% Zeitersparnis bei Leads.</li>
              <li><strong>Off-Market Tresor:</strong> Nutzt Exklusivität und schützt Verkäufer-Diskretion.</li>
              <li><strong>Quiet Luxury Branding:</strong> Erzeugt das Gefühl eines Besuchs in einer Privatbank.</li>
            </ul>
          </StrategySection>

          <StrategySection icon={Target} subtitle="04 Marktposition" title="Die Yuwelux-Position" delay={0.3}>
            <p><strong>Das Versprechen:</strong> Yuwelux ist der diskrete Kurator für Sachwerte, der den Starnberger Lifestyle durch Expertise sichert.</p>
            <p>Nach 10 Sekunden bleibt: "Hier spricht ein Experte, der meine Zeit respektiert und Zugang hat, den andere nicht finden."</p>
          </StrategySection>

          <StrategySection icon={Rocket} subtitle="05 Roadmap" title="Skalierung & Zukunft" delay={0.4}>
            <p>Die Website ist das Fundament. Zukünftige Ausbaustufen:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Digitaler Tresor:</strong> Kundenportal für Gutachten & Dokumente.</li>
              <li><strong>Hallen-Live-Status:</strong> Dashboard für Einlagerungs-Verfügbarkeit.</li>
              <li><strong>Asset Tracking:</strong> Quartalsweise Marktentwicklungs-Updates für Sammler.</li>
            </ul>
          </StrategySection>

          <StrategySection icon={ShieldCheck} subtitle="06 Das Versprechen" title="Mechanik der Exzellenz" delay={0.5}>
            <p>Wir liefern kein Design-Projekt. Wir liefern ein Fundament, das deine Expertise skaliert.</p>
            <p className="italic text-accent">"Wir arbeiten so präzise wie ein Rennmechaniker – jedes Detail muss dem Standard deiner Fahrzeuge entsprechen."</p>
          </StrategySection>

        </div>
      </section>

      {/* CTA Section for Strategy */}
      <section className="py-20 px-6 md:px-12 bg-white/5">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h2 className="text-display text-4xl font-bold">Bereit für den digitalen Rollout?</h2>
          <div className="flex justify-center gap-6">
            <button className="luxury-button" onClick={() => window.location.href = '/'}>Zum Live-Demo</button>
            <button className="luxury-button-outline">Präsentation PDF herunterladen</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};
