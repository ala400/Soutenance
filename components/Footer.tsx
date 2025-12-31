import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-alpha-gray text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-3xl font-title font-bold mb-8 uppercase leading-none">
              Alpha <span className="text-alpha-gold">Ingénierie</span>
            </h3>
            <p className="text-alpha-beige/60 text-sm leading-relaxed mb-10 italic">
              "Xam xam dou pekh" — Le savoir n'est rien sans la rigueur technique et l'exigence qu'il impose à chaque projet de construction.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-alpha-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-white hover:text-alpha-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white hover:text-alpha-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white hover:text-alpha-gold transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-title font-bold text-lg mb-8 uppercase tracking-widest text-alpha-gold">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-alpha-beige/60">
              <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Nos Services</Link></li>
              <li><Link to="/realisations" className="hover:text-white transition-colors">Réalisations</Link></li>
              <li><Link to="/a-propos" className="hover:text-white transition-colors">À Propos</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-title font-bold text-lg mb-8 uppercase tracking-widest text-alpha-gold">Spécialités</h4>
            <ul className="space-y-4 text-xs font-medium text-alpha-beige/60">
              <li>Calculs Béton Armé</li>
              <li>Charpente Métallique</li>
              <li>Audit Structurel</li>
              <li>Formation Eurocodes</li>
              <li>Diagnostic Sécurité</li>
            </ul>
          </div>

          <div>
            <h4 className="font-title font-bold text-lg mb-8 uppercase tracking-widest text-alpha-gold">Siège Social</h4>
            <ul className="space-y-6 text-sm text-alpha-beige/60">
              <li className="flex items-start gap-4">
                <MapPin className="text-alpha-gold shrink-0" size={20} />
                <span>Point E, Dakar, Sénégal <br />Immeuble Alpha, Rue 3 x 4</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-alpha-gold shrink-0" size={20} />
                <span>+221 33 800 00 00</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-alpha-gold shrink-0" size={20} />
                <span>contact@alpha-ingenierie.sn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-alpha-beige/40 uppercase tracking-[0.3em] font-bold">
          <p>© {new Date().getFullYear()} ALPHA INGÉNIERIE SÉNÉGAL. TOUS DROITS RÉSERVÉS.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link to="#" className="hover:text-white">Mentions Légales</Link>
            <Link to="#" className="hover:text-white">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;