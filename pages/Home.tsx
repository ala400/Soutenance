
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Added Users to imports to resolve the missing component error on line 226
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, HardHat, Ruler, BookOpen, Layers, Users } from 'lucide-react';
import { PROJECTS } from '../constants';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1500",
    title: "L'Excellence de l'Ingénierie Structurelle",
    subtitle: "Sécurisez vos projets de construction avec nos calculs de pointe.",
    cta: "Nos Études Techniques"
  },
  {
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1500",
    title: "Transmettre le Savoir BTP",
    subtitle: "Des formations intensives pour les professionnels exigeants.",
    cta: "Voir les Formations"
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1500",
    title: "De la Conception à la Réalisation",
    subtitle: "Un accompagnement technique rigoureux sur le terrain.",
    cta: "Découvrir nos Projets"
  }
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="bg-white">
      {/* Hero Slider */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-alpha-gray">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="absolute inset-0 bg-alpha-petrol/60 z-10"></div>
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover transform scale-105" />
            
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-6 w-full text-center md:text-left">
                <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <span className="inline-block text-alpha-gold font-bold text-sm tracking-[0.2em] uppercase mb-4">Alpha Ingénierie</span>
                  <h1 className="text-4xl md:text-7xl font-title font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-alpha-beige text-lg md:text-2xl mb-10 opacity-90">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <Link 
                      to="/contact" 
                      className="px-8 py-4 bg-alpha-gold text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-alpha-gray transition-all shadow-xl"
                    >
                      Nous Contacter
                    </Link>
                    <Link 
                      to="/services" 
                      className="px-8 py-4 border-2 border-white text-white font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-alpha-gray transition-all"
                    >
                      Nos Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all">
          <ChevronRight size={24} />
        </button>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className={`w-12 h-1 transition-all ${i === currentSlide ? 'bg-alpha-gold' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </section>

      {/* Intro & Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="bg-blueprint absolute inset-0 -z-10"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-alpha-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Bureau d'études & Formations</h2>
              <h3 className="text-3xl md:text-5xl font-title font-bold text-alpha-gray mb-8 leading-tight">
                L'expertise structurelle au service du <span className="text-alpha-petrol underline decoration-alpha-gold decoration-4 underline-offset-8">développement</span> durable.
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Fondé sur une exigence technique absolue, ALPHA INGÉNIERIE accompagne les bâtisseurs dans la réalisation d'ouvrages sûrs et optimisés. Nous croyons que la sécurité d'un bâtiment commence par la précision de ses calculs.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-alpha-beige/50 rounded-lg flex items-center justify-center text-alpha-petrol">
                    <ShieldCheck size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-alpha-gray uppercase text-xs tracking-wider mb-1">Rigueur</h4>
                    <p className="text-xs text-gray-500 italic">Normes internationales.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 bg-alpha-beige/50 rounded-lg flex items-center justify-center text-alpha-petrol">
                    <BookOpen size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-alpha-gray uppercase text-xs tracking-wider mb-1">Pédagogie</h4>
                    <p className="text-xs text-gray-500 italic">Savoir partagé.</p>
                  </div>
                </div>
              </div>
              <Link to="/a-propos" className="inline-flex items-center text-alpha-petrol font-bold group">
                En savoir plus sur notre ADN <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform text-alpha-gold" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1541913057-219981772f93?auto=format&fit=crop&q=80&w=1000" alt="Ingénierie" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-alpha-petrol p-8 rounded-2xl text-white shadow-2xl hidden md:block">
                <p className="text-4xl font-title font-bold text-alpha-gold mb-1">10+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-alpha-beige">Années d'Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Link */}
      <section className="bg-alpha-gray py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-alpha-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Notre Offre</h2>
            <h3 className="text-3xl md:text-4xl font-title font-bold uppercase">Deux piliers d'expertise</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-12 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
              <Ruler size={48} className="text-alpha-gold mb-8" />
              <h4 className="text-2xl font-title font-bold mb-6 uppercase tracking-wider">Ingénierie Structurelle</h4>
              <p className="text-alpha-beige/80 mb-8 leading-relaxed">
                Études de béton armé, charpente métallique, notes de calculs et diagnostics techniques complets.
              </p>
              <Link to="/services" className="px-6 py-3 bg-alpha-gold text-white font-bold uppercase text-xs tracking-widest inline-block group-hover:bg-white group-hover:text-alpha-gray transition-all">
                Voir l'offre technique
              </Link>
            </div>
            <div className="bg-white/5 p-12 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
              <HardHat size={48} className="text-alpha-gold mb-8" />
              <h4 className="text-2xl font-title font-bold mb-6 uppercase tracking-wider">Formations BTP</h4>
              <p className="text-alpha-beige/80 mb-8 leading-relaxed">
                Programmes courts et intensifs pour techniciens et ingénieurs souhaitant maîtriser les normes Eurocodes.
              </p>
              <Link to="/services" className="px-6 py-3 border border-alpha-gold text-alpha-gold font-bold uppercase text-xs tracking-widest inline-block group-hover:bg-alpha-gold group-hover:text-white transition-all">
                Nos programmes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-alpha-beige/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-alpha-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Portfolio</h2>
              <h3 className="text-3xl md:text-5xl font-title font-bold text-alpha-gray uppercase leading-none">Nos Réalisations</h3>
            </div>
            <Link to="/realisations" className="text-alpha-petrol font-bold flex items-center hover:text-alpha-gold transition-colors">
              Tout le portfolio <ArrowRight className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-alpha-petrol via-alpha-petrol/20 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-alpha-gold text-xs font-bold uppercase tracking-widest mb-2">{project.type}</span>
                  <h4 className="text-white text-xl font-title font-bold mb-4">{project.title}</h4>
                  <Link to="/realisations" className="text-white text-xs font-bold uppercase tracking-widest flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                    Voir les détails <ArrowRight size={14} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-alpha-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Différenciation</h2>
            <h3 className="text-3xl md:text-4xl font-title font-bold text-alpha-gray uppercase">Pourquoi nous choisir ?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck />, title: "Sécurité", desc: "Respect strict des normes NF et Eurocodes." },
              { icon: <Layers />, title: "Optimisation", desc: "Réduction des coûts sans perte de qualité." },
              { icon: <Users />, title: "Expertise", desc: "Ingénieurs seniors avec 15+ ans d'expérience." },
              { icon: <BookOpen />, title: "Pédagogie", desc: "Transmission du savoir pour chaque projet." }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 border border-gray-100 rounded-2xl hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-alpha-gold/10 text-alpha-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h4 className="font-title font-bold text-alpha-gray mb-4 uppercase">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-alpha-petrol py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-white text-3xl md:text-5xl font-title font-bold mb-8 uppercase leading-tight">
            Vous avez un projet de <span className="text-alpha-gold">construction</span> ou un besoin de <span className="text-alpha-gold">formation</span> ?
          </h2>
          <p className="text-alpha-beige text-lg mb-12 opacity-80">
            Discutons dès aujourd'hui des solutions techniques adaptées à vos ambitions.
          </p>
          <Link to="/contact" className="px-12 py-5 bg-alpha-gold text-white font-bold text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-alpha-gray transition-all shadow-2xl">
            Contactez Alpha Ingénierie
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
