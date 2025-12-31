
import React, { useState } from 'react';
// Added Link to imports to resolve "Cannot find name 'Link'" error
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import ProjectModal from '../components/ProjectModal';
import { Search, Filter, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Résidentiel', 'Industriel', 'Ouvrage d\'Art', 'Tertiaire'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.type.includes(filter));

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-alpha-petrol py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-alpha-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">Réalisations</h1>
              <h2 className="text-4xl md:text-5xl font-title font-bold text-white mb-6">Nos Projets de Référence</h2>
              <p className="text-alpha-beige text-lg opacity-80">
                Découvrez la diversité de nos interventions, de l'habitat individuel aux ouvrages d'art complexes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b sticky top-[68px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center text-alpha-gray mr-4">
              <Filter size={18} className="mr-2 text-alpha-gold" />
              <span className="font-bold text-sm uppercase tracking-wider">Filtrer par :</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all border ${
                  filter === cat 
                    ? 'bg-alpha-gold border-alpha-gold text-white shadow-md' 
                    : 'bg-transparent border-gray-200 text-gray-500 hover:border-alpha-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-alpha-beige/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-alpha-gray/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="bg-white text-alpha-gray px-6 py-3 rounded-full font-bold flex items-center gap-2">
                       Consulter l'étude <ExternalLink size={18} />
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-alpha-gold text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded shadow-lg">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-alpha-gold text-xs font-bold uppercase tracking-widest mb-3">{project.type}</p>
                  <h4 className="text-xl font-title font-bold text-alpha-gray mb-3 group-hover:text-alpha-gold transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex items-center text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                    <span className="font-medium text-alpha-petrol">Rôle :</span>
                    <span className="ml-2 truncate">{project.role}</span>
                  </div>
                  <button className="text-alpha-gray text-xs font-bold uppercase tracking-widest flex items-center group-hover:gap-2 transition-all">
                    Voir la problématique <ArrowRight className="ml-2 text-alpha-gold" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center">
              <Search className="mx-auto text-gray-300 mb-4" size={48} />
              <p className="text-gray-500 italic">Aucun projet trouvé pour cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
      
      {/* Call to action */}
      <section className="py-20 bg-alpha-gray">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-title font-bold text-white mb-6">
            Vous avez un projet similaire en tête ?
          </h3>
          <p className="text-alpha-beige mb-8">
            Discutons ensemble des solutions techniques optimales pour votre future construction.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-alpha-gold text-white font-bold rounded hover:bg-white hover:text-alpha-gray transition-all">
            Nous Contacter
          </Link>
        </div>
      </section>
    </div>
  );
};

const ArrowRight: React.FC<{className?: string, size?: number}> = ({className, size=20}) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default Projects;