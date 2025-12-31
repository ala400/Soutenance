import React from 'react';
import { Building2, BookOpen, Calculator, Ruler, ShieldCheck, HardHat, FileText, Users } from 'lucide-react';
import { Project, TechnicalService } from './types';

export const SERVICES_ETUDES: TechnicalService = {
  title: "Ingénierie Structurelle",
  description: "L'expertise technique au service de la sécurité et de la pérennité de vos ouvrages.",
  icon: <Building2 className="w-8 h-8 text-alpha-gold" />,
  items: [
    "Études de structures (Béton armé, Métal, Bois)",
    "Calculs et notes de calcul (Normes Eurocodes, BAEL)",
    "Plans d'exécution et de coffrage",
    "Diagnostic structurel et audit de sécurité",
    "Accompagnement technique de la conception à la réception"
  ]
};

export const SERVICES_FORMATIONS: TechnicalService = {
  title: "Formations Techniques BTP",
  description: "Transmettre le savoir-faire pour élever les standards du secteur.",
  icon: <BookOpen className="w-8 h-8 text-alpha-gold" />,
  items: [
    "Calcul de structures aux normes internationales",
    "Maîtrise des logiciels de dimensionnement",
    "Ateliers pratiques pour techniciens et ingénieurs",
    "Formations en ligne et en présentiel",
    "Certification de compétences techniques"
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Tour Résidentielle Horizon",
    type: "Immobilier R+12",
    year: "2023",
    role: "Étude de structure complète",
    context: "Construction d'un immeuble de haut standing à Dakar Plateau sur un sol à faible portance.",
    problem: "Nécessité de réduire le poids propre de la structure tout en garantissant une stabilité parasismique.",
    solution: "Utilisation de dalles post-contraintes et optimisation des sections de poteaux par calcul aux éléments finis.",
    results: "Gain de 12% sur le coût du béton et respect strict du planning architectural.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "Entrepôt Logistique Zone Franche",
    type: "Charpente Métallique",
    year: "2022",
    role: "Notes de calcul & Plans de fabrication",
    context: "Hangar de stockage de 4500 m² pour un opérateur logistique international.",
    problem: "Besoin de grandes portées libres sans poteaux intermédiaires pour optimiser le stockage.",
    solution: "Conception d'une charpente en treillis à haute limite élastique.",
    results: "Portée libre de 45 mètres réalisée avec succès sans flèche excessive.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "3",
    title: "Réhabilitation Pont de Keur Massar",
    type: "Ouvrage d'Art",
    year: "2023",
    role: "Diagnostic & Renforcement",
    context: "Ouvrage présentant des pathologies graves dues à la corrosion des armatures.",
    problem: "Stopper la dégradation sans interrompre totalement le trafic routier.",
    solution: "Traitement cathodique et renforcement par tissus de carbone (PRFC).",
    results: "Durée de vie prolongée de 30 ans avec un impact minimal sur la circulation.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    title: "Villa Contemporaine Ngor",
    type: "Habitat Individuel",
    year: "2024",
    role: "Bureau d'Études Structures",
    context: "Architecture audacieuse avec de larges porte-à-faux en bord de mer.",
    problem: "Gérer l'agressivité du milieu marin et les contraintes mécaniques des consoles.",
    solution: "Béton à haute performance (BHP) et renforcement de l'enrobage.",
    results: "Esthétique architecturale préservée avec une garantie décennale sécurisée.",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "5",
    title: "Audit Complexe Hôtelier Saly",
    type: "Expertise Technique",
    year: "2022",
    role: "Expert Structure",
    context: "Vérification de la solidité d'un bâtiment existant avant extension.",
    problem: "Absence de plans de ferraillage d'origine.",
    solution: "Sondages non-destructifs au férroscan et recalcule de la structure existante.",
    results: "Validation de la faisabilité de l'extension après renforcements ponctuels.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "6",
    title: "Centre Africain de Formation",
    type: "Éducation",
    year: "2023",
    role: "Maîtrise d'Œuvre Technique",
    context: "Bâtiment bioclimatique à usage de bureaux et salles de cours.",
    problem: "Intégration des contraintes thermiques dans la conception structurelle.",
    solution: "Murs porteurs à forte inertie et toiture terrasse végétalisée.",
    results: "Confort thermique naturel et structure optimisée pour les surcharges de terre.",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800"
  }
];