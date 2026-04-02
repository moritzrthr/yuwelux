import { InstagramLogo, Mailbox, Phone } from '@phosphor-icons/react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-white/5 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          
          {/* Brand */}
          <div className="space-y-8">
            <img 
              src="https://yuwelux.com/wp-content/uploads/2024/03/Yuwelux_Logo.svg" 
              alt="Yuwelux Logo" 
              className="h-10 w-auto invert"
            />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Ihr persönlicher Partner für exklusive Sachwerte am Starnberger See. Diskretion, Expertise und Leidenschaft für Automotive und Real Estate.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent transition-all ring-0 focus:ring-1 focus:ring-accent outline-none">
                <InstagramLogo size={20} weight="thin" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <h4 className="text-display text-xl font-bold italic text-accent">Menü</h4>
            <nav className="flex flex-col gap-4 text-sm text-white/40 font-medium">
              <a href="#about" className="hover:text-white transition-colors">Über uns</a>
              <a href="#ecosystem" className="hover:text-white transition-colors">Dienstleistungen</a>
              <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
              <a href="#heritage" className="hover:text-white transition-colors">Expertise</a>
              <a href="#contact" className="hover:text-white transition-colors">Kontakt</a>
              <a href="/strategie" className="text-accent/60 hover:text-accent font-bold transition-all mt-4 border-t border-white/5 pt-4 block">Strategie-Präsentation</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-display text-xl font-bold italic text-accent">Kontakt</h4>
            <div className="space-y-4 text-sm text-white/40 leading-relaxed font-medium">
              <div className="flex items-center gap-3">
                <Phone size={18} weight="thin" className="text-accent" />
                <a href="tel:+4917624006464" className="hover:text-white transition-colors">+49 176 24006464</a>
              </div>
              <div className="flex items-center gap-3">
                <Mailbox size={18} weight="thin" className="text-accent" />
                <a href="mailto:info@yuwelux.com" className="hover:text-white transition-colors">info@yuwelux.com</a>
              </div>
              <div className="pt-4 border-t border-white/5 space-y-1">
                <p className="text-white font-bold opacity-80">YUWELUX GmbH</p>
                <p>82335 Berg / Starnberger See</p>
                <p>Deutschland</p>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-8">
            <h4 className="text-display text-xl font-bold italic text-accent">Rechtliches</h4>
            <nav className="flex flex-col gap-4 text-sm text-white/40 font-medium">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors">AGB</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </nav>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
            © 2024 YUWELUX GmbH. All Rights Reserved.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
            Designed for the <span className="text-accent">Collector's Spirit</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};
