import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Réalisations', path: '/realisations' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar (Hidden on scroll) */}
      <div className={`bg-alpha-gray text-white py-2 text-[10px] md:text-xs transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center uppercase tracking-widest font-medium">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2"><Phone size={12} className="text-alpha-gold" /> +221 33 800 00 00</span>
            <span className="hidden md:flex items-center gap-2"><MapPin size={12} className="text-alpha-gold" /> Point E, Dakar</span>
          </div>
          <div className="flex items-center">
            <span className="flex items-center gap-2 italic">"Xam xam dou pekh"</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`transition-all duration-300 ${scrolled ? 'bg-white py-4 shadow-xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className={`text-2xl font-title font-bold tracking-tighter uppercase leading-none ${scrolled || location.pathname !== '/' ? 'text-alpha-gray' : 'text-white'}`}>
                Alpha <span className="text-alpha-gold">Ingénierie</span>
              </span>
              <div className="h-0.5 w-full bg-alpha-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-widest transition-colors hover:text-alpha-gold ${
                  location.pathname === link.path 
                    ? 'text-alpha-gold' 
                    : (scrolled || location.pathname !== '/') ? 'text-alpha-gray' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className={`px-6 py-3 rounded text-[11px] font-bold uppercase tracking-widest transition-all ${
                scrolled || location.pathname !== '/' ? 'bg-alpha-petrol text-white' : 'bg-alpha-gold text-white'
              } hover:shadow-lg`}
            >
              Devis / Contact
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`lg:hidden transition-colors ${scrolled || location.pathname !== '/' ? 'text-alpha-gray' : 'text-white'}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`lg:hidden fixed inset-0 bg-alpha-gray transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-[60]`}>
        <div className="flex flex-col h-full p-10">
          <div className="flex justify-between items-center mb-16">
            <span className="text-2xl font-title font-bold text-white uppercase">Alpha <span className="text-alpha-gold">Ingénierie</span></span>
            <button onClick={() => setIsOpen(false)} className="text-white"><X size={32} /></button>
          </div>
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className="text-2xl font-title font-bold text-white uppercase tracking-wider hover:text-alpha-gold"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-auto pt-10 border-t border-white/10 text-alpha-beige text-sm">
            <p className="flex items-center gap-3 mb-4"><Phone size={16} /> +221 33 800 00 00</p>
            <p className="flex items-center gap-3"><Mail size={16} /> contact@alpha-ingenierie.sn</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;