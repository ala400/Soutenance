import React from 'react';
import { Target, Eye, Shield, Users, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-alpha-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-alpha-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">À Propos d'Alpha Ingénierie</h1>
              <h2 className="text-4xl md:text-5xl font-title font-bold text-alpha-gray mb-8">
                Plus qu'un bureau d'études, <br />
                un pilier pour vos <span className="text-alpha-petrol underline decoration-alpha-gold underline-offset-8">projets</span>.
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                ALPHA INGÉNIERIE est né de la volonté d'apporter une rigueur technique sans concession sur le marché sénégalais du BTP. Forts de notre double culture — technique et pédagogique — nous avons bâti une structure capable de répondre aux défis structurels les plus complexes.
              </p>
              <div className="bg-white p-6 rounded-lg border-l-4 border-alpha-gold shadow-sm italic text-alpha-gray mb-8">
                "Xam xam dou pekh" — Cette expression wolof guide chaque geste technique au sein de notre bureau. Le savoir n'est rien sans la rigueur et l'exigence qu'il impose.
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fm=webp&fit=crop&q=75&w=1000" 
                  alt="Travail d'Équipe chez Alpha Ingénierie" 
                  className="w-full h-full object-cover" 
                  loading="lazy"
                 />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-alpha-gray p-10 rounded-2xl text-white shadow-xl hidden md:block">
                 <p className="text-4xl font-title font-bold text-alpha-gold mb-2">2014</p>
                 <p className="text-sm font-bold tracking-widest uppercase">Année de Fondation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 rounded-3xl bg-alpha-petrol text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <Target size={120} />
               </div>
               <h3 className="text-3xl font-title font-bold mb-6 flex items-center gap-4">
                  <Target className="text-alpha-gold" /> Notre Mission
               </h3>
               <p className="text-alpha-beige text-lg leading-relaxed">
                  Offrir une expertise technique de haut niveau pour sécuriser et optimiser les investissements de nos clients tout en assurant une montée en compétences continue des acteurs du BTP par la formation.
               </p>
            </div>
            <div className="p-12 rounded-3xl bg-alpha-beige/50 text-alpha-gray relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <Eye size={120} />
               </div>
               <h3 className="text-3xl font-title font-bold mb-6 flex items-center gap-4">
                  <Eye className="text-alpha-gold" /> Notre Vision
               </h3>
               <p className="text-alpha-gray text-lg leading-relaxed">
                  Devenir le leader ouest-africain de l'ingénierie structurelle spécialisée et de la formation technique BTP d'ici 2030, en intégrant l'innovation digitale et durable dans chaque projet.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-alpha-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Nos Valeurs Clés</h2>
            <h3 className="text-3xl md:text-4xl font-title font-bold text-alpha-gray">Ce qui définit Alpha Ingénierie.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield size={32} />, title: "Rigueur", desc: "Une précision mathématique dans chaque note de calcul." },
              { icon: <BookOpen size={32} />, title: "Savoir", desc: "Le partage de la connaissance au service de l'excellence." },
              { icon: <Award size={32} />, title: "Fiabilité", desc: "Le respect strict des normes pour des ouvrages pérennes." },
              { icon: <Users size={32} />, title: "Pédagogie", desc: "Rendre accessible la complexité technique." },
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                 <div className="w-16 h-16 bg-alpha-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-alpha-gold">
                    {v.icon}
                 </div>
                 <h4 className="text-xl font-bold mb-4 text-alpha-gray">{v.title}</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners / Ecosystem */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
               <h2 className="text-3xl font-title font-bold text-alpha-gray mb-8">Un Écosystème de Partenaires</h2>
               <p className="text-gray-600 mb-6 leading-relaxed">
                  ALPHA INGÉNIERIE collabore étroitement avec les institutions de régulation, les bureaux de contrôle et les entreprises majeures du BTP au Sénégal et dans la sous-région.
               </p>
               <p className="text-gray-600 mb-10 leading-relaxed">
                  Ces partenariats nous permettent de rester à la pointe des normes techniques et d'offrir à nos apprenants un accès direct aux meilleures pratiques professionnelles du secteur.
               </p>
               <div className="flex flex-wrap gap-10 opacity-60">
                  <div className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-12 w-32 bg-gray-200 rounded animate-pulse"></div>
               </div>
            </div>
            <div className="bg-alpha-petrol p-12 rounded-3xl text-white">
               <h3 className="text-2xl font-title font-bold mb-6 text-alpha-gold">Transmission du Savoir</h3>
               <p className="text-alpha-beige italic mb-8">
                  "Former, c'est semer pour demain. Nous ne nous contentons pas de construire des immeubles, nous construisons des carrières."
               </p>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                     <img 
                      src="https://images.unsplash.com/photo-1544717297-fa154da09f9d?auto=format&fm=webp&fit=crop&q=75&w=100" 
                      alt="Directeur Technique" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                     />
                  </div>
                  <div>
                     <p className="font-bold">Directeur Technique</p>
                     <p className="text-xs text-alpha-beige uppercase tracking-widest">ALPHA INGÉNIERIE</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;