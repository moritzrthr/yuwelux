import { motion } from 'framer-motion';
import { CaretRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-8 backdrop-blur-sm"
    >
      <div className="flex items-center space-x-2">
        <Link to="/">
          <img 
            src="https://yuwelux.com/wp-content/uploads/2024/03/Yuwelux_Logo.svg" 
            alt="Yuwelux Logo" 
            className="h-10 md:h-12 w-auto invert"
          />
        </Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
        <Link to="/#about" className="hover:text-accent transition-colors">Über uns</Link>
        <Link to="/#automotive" className="hover:text-accent transition-colors">Automotive</Link>
        <Link to="/#immobilien" className="hover:text-accent transition-colors">Immobilien</Link>
        <Link to="/#portfolio" className="hover:text-accent transition-colors">Portfolio</Link>
        <Link to="/#contact" className="hover:text-accent transition-colors flex items-center gap-2 group">
          Kontakt
          <CaretRight className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      <div className="md:hidden">
        {/* Simple Menu Icon for Mobile */}
        <div className="w-6 h-0.5 bg-accent mb-1.5"></div>
        <div className="w-6 h-0.5 bg-accent mb-1.5"></div>
        <div className="w-6 h-0.5 bg-accent"></div>
      </div>
    </motion.nav>
  );
};
