
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    objet: 'Étude de structure',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formState);
    setIsSubmitted(true);
    // Reset after some time
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-alpha-beige/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-alpha-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Contact</h1>
          <h2 className="text-4xl md:text-6xl font-title font-bold text-alpha-gray mb-6">Parlons de vos <span className="text-alpha-gold">Projets</span></h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            Que ce soit pour une demande d'étude, une inscription en formation ou une simple question technique, notre équipe est à votre écoute.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Info Col */}
            <div className="lg:col-span-1 space-y-12">
              <div>
                <h3 className="text-2xl font-title font-bold text-alpha-gray mb-8">Nos Coordonnées</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-alpha-gold/10 rounded-xl flex items-center justify-center shrink-0 text-alpha-gold">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-alpha-gray mb-1">Localisation</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">Point E, Rue 3 x 4, Immeuble Alpha,<br />Dakar, Sénégal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-alpha-gold/10 rounded-xl flex items-center justify-center shrink-0 text-alpha-gold">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-alpha-gray mb-1">Téléphone</h4>
                      <p className="text-gray-500 text-sm">+221 33 800 00 00</p>
                      <p className="text-gray-500 text-sm">+221 77 000 00 00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-alpha-gold/10 rounded-xl flex items-center justify-center shrink-0 text-alpha-gold">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-alpha-gray mb-1">E-mail</h4>
                      <p className="text-gray-500 text-sm">contact@alpha-ingenierie.sn</p>
                      <p className="text-gray-500 text-sm">formations@alpha-ingenierie.sn</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-inner bg-gray-100 aspect-square relative border border-gray-200">
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <MapPin className="text-alpha-gold mb-4" size={48} />
                    <p className="text-sm font-bold text-alpha-gray uppercase mb-2">Carte Interactive</p>
                    <p className="text-xs text-gray-500">Nous sommes situés au cœur de Dakar, facilement accessibles par le boulevard du Point E.</p>
                 </div>
                 {/* This would be an iframe for Google Maps */}
                 <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <img src="https://picsum.photos/seed/map/400/400" alt="Map" className="w-full h-full object-cover" />
                 </div>
              </div>
            </div>

            {/* Form Col */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
                <h3 className="text-2xl font-title font-bold text-alpha-gray mb-8">Envoyez-nous un Message</h3>
                
                {isSubmitted ? (
                  <div className="py-20 text-center animate-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={48} />
                    </div>
                    <h4 className="text-2xl font-title font-bold text-alpha-gray mb-2">Message Envoyé !</h4>
                    <p className="text-gray-500">Merci de nous avoir contactés. Nous vous répondrons sous 24h.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-alpha-gray uppercase tracking-widest">Nom</label>
                        <input 
                          type="text" required name="nom" value={formState.nom} onChange={handleChange}
                          placeholder="Ex: Diop"
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-alpha-gold focus:bg-white transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-alpha-gray uppercase tracking-widest">Prénom</label>
                        <input 
                          type="text" required name="prenom" value={formState.prenom} onChange={handleChange}
                          placeholder="Ex: Amadou"
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-alpha-gold focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-alpha-gray uppercase tracking-widest">E-mail</label>
                        <input 
                          type="email" required name="email" value={formState.email} onChange={handleChange}
                          placeholder="votre@email.com"
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-alpha-gold focus:bg-white transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-alpha-gray uppercase tracking-widest">Téléphone</label>
                        <input 
                          type="tel" required name="telephone" value={formState.telephone} onChange={handleChange}
                          placeholder="+221 ..."
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-alpha-gold focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-alpha-gray uppercase tracking-widest">Objet de la demande</label>
                      <select 
                        name="objet" value={formState.objet} onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-alpha-gold focus:bg-white transition-all appearance-none"
                      >
                        <option value="Étude de structure">Étude de structure / Note de calcul</option>
                        <option value="Formation">Formation Technique BTP</option>
                        <option value="Diagnostic">Diagnostic / Expertise</option>
                        <option value="Autre">Autre demande</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-alpha-gray uppercase tracking-widest">Message</label>
                      <textarea 
                        name="message" required value={formState.message} onChange={handleChange}
                        rows={5}
                        placeholder="Décrivez brièvement votre projet ou votre besoin..."
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-alpha-gold focus:bg-white transition-all resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit"
                        className="w-full bg-alpha-petrol text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-alpha-gold hover:shadow-lg transition-all shadow-alpha-gold/20"
                      >
                        Envoyer ma demande <Send size={20} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
