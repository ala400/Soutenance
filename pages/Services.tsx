import React from 'react';
import { SERVICES_ETUDES, SERVICES_FORMATIONS } from '../constants';
// Import ArrowRight to resolve the missing component error
import { CheckCircle2, Ruler, Calculator, ShieldCheck, DraftingCompass, Users, Presentation, ClipboardCheck, HardHat, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header style Byron */}
      <section className="bg-alpha-petrol py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <span className="text-alpha-gold font-bold text-xs tracking-[0.3em] uppercase mb-4 block">Services</span>
          <h1 className="text-6xl md:text-8xl font-title font-bold text-white mb-8 leading-none uppercase text-balance">
            SOLUTIONS <br /> <span className="text-alpha-gold italic">TECHNIQUES</span>
          </h1>
          <p className="max-w-2xl text-alpha-beige text-lg leading-relaxed font-light opacity-80">
            Une expertise de pointe pour sécuriser vos investissements immobiliers et industriels.
          </p>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/2 bg-alpha-gold opacity-5 hidden lg:block skew-x-12 transform translate-x-1/2"></div>
      </section>

      {/* Engineering Block style Byron */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
               <img 
                src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fm=webp&fit=crop&q=75&w=800" 
                className="w-full h-[500px] object-cover rounded shadow-lg" 
                alt="Ingénierie de Structure" 
                loading="lazy"
               />
               <div className="absolute top-10 -left-10 w-full h-full border-4 border-alpha-gold -z-10 hidden lg:block"></div>
               <div className="absolute -bottom-8 -right-8 bg-alpha-gray text-white p-10 font-title font-bold text-3xl hidden lg:block">
                 01
               </div>
            </div>
            
            <div>
              <h2 className="text-5xl font-title font-bold text-alpha-gray mb-8 uppercase leading-none">{SERVICES_ETUDES.title}</h2>
              <p className="text-gray-500 text-lg mb-12 leading-relaxed">
                Nos ingénieurs structure interviennent sur des projets complexes, de la villa de luxe aux complexes industriels, en garantissant une précision mathématique totale.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {SERVICES_ETUDES.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 border border-alpha-gold flex items-center justify-center text-alpha-gold group-hover:bg-alpha-gold group-hover:text-white transition-all">
                       <CheckCircle2 size={18} />
                    </div>
                    <span className="text-alpha-gray font-bold uppercase tracking-widest text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Formation style Byron */}
      <section className="py-32 bg-alpha-beige/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl font-title font-bold text-alpha-gray mb-8 uppercase leading-none">{SERVICES_FORMATIONS.title}</h2>
              <p className="text-gray-500 text-lg mb-12 leading-relaxed">
                Le transfert de compétences est au cœur de notre ADN. Nous formons les cadres du BTP de demain aux nouveaux outils de dimensionnement et aux normes Eurocodes.
              </p>

              <div className="space-y-4">
                {SERVICES_FORMATIONS.items.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 border-l-4 border-alpha-gold flex justify-between items-center group cursor-pointer hover:bg-alpha-gray transition-all shadow-sm">
                    <span className="font-bold uppercase tracking-tighter text-alpha-gray group-hover:text-white transition-colors">{item}</span>
                    <ArrowRight size={20} className="text-alpha-gold" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
               <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fm=webp&fit=crop&q=75&w=800" 
                className="w-full h-[500px] object-cover rounded shadow-lg" 
                alt="Formation BTP" 
                loading="lazy"
               />
               <div className="absolute -top-8 -right-8 bg-alpha-gold text-white p-10 font-title font-bold text-3xl hidden lg:block">
                 02
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;