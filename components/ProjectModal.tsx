import React from 'react';
import { X, Calendar, User, Tag, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-alpha-gray/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 relative">
        <button 
          onClick={onClose}
          aria-label="Fermer le modal"
          className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors text-alpha-gray md:text-white md:bg-alpha-gray/20"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="h-64 md:h-auto overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-alpha-gold/10 text-alpha-gold text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                {project.type}
              </span>
            </div>
            
            <h2 className="text-3xl font-title font-bold text-alpha-gray mb-6">{project.title}</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center text-sm text-gray-600">
                <Calendar size={16} className="text-alpha-gold mr-2" />
                <span>Année : {project.year}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <User size={16} className="text-alpha-gold mr-2" />
                <span>Rôle : Bureau d'Études</span>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h4 className="font-title font-bold text-alpha-petrol mb-2 uppercase text-sm tracking-wider">Contexte</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{project.context}</p>
              </section>
              
              <section>
                <h4 className="font-title font-bold text-alpha-petrol mb-2 uppercase text-sm tracking-wider">Problématique Technique</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{project.problem}</p>
              </section>

              <section>
                <h4 className="font-title font-bold text-alpha-petrol mb-2 uppercase text-sm tracking-wider">Solution Apportée</h4>
                <div className="bg-alpha-beige/20 p-4 border-l-4 border-alpha-gold rounded">
                  <p className="text-gray-700 text-sm leading-relaxed">{project.solution}</p>
                </div>
              </section>

              <section>
                <h4 className="font-title font-bold text-alpha-petrol mb-2 uppercase text-sm tracking-wider">Résultats</h4>
                <div className="flex items-start">
                  <CheckCircle2 className="text-green-600 mr-2 shrink-0" size={18} />
                  <p className="text-gray-700 font-medium text-sm">{project.results}</p>
                </div>
              </section>
            </div>

            <div className="mt-10">
              <button 
                onClick={onClose}
                className="w-full bg-alpha-gray text-white py-3 rounded font-bold hover:bg-alpha-petrol transition-colors"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;