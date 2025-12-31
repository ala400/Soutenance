
// Added React import to resolve "Cannot find namespace 'React'" error
import React from 'react';

export interface Project {
  id: string;
  title: string;
  type: string;
  year: string;
  role: string;
  context: string;
  problem: string;
  solution: string;
  results: string;
  imageUrl: string;
}

export interface TechnicalService {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
}