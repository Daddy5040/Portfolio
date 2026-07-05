export type ProjectCategory = 'Product' | 'Architecture' | 'Animation' | 'Environment' | 'Furniture' | 'Character';

export type ProjectMedia = {
  src: string;
  thumbnail?: string;
  type?: 'image' | 'video';
  title: string;
  caption?: string;
  tag?: string;
};

export type ProjectBreakdown = {
  wireframe: string;
  clay: string;
  final: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  clientType: string;
  timeline: string;
  software: string[];
  renderEngine: string;
  deliveryType: string;
  tags: string[];
  thumbnail: string;
  heroImage: string;
  gallery: ProjectMedia[];
  wireframeImage?: string;
  clayImage?: string;
  finalImage?: string;
  breakdownNotes: ProjectBreakdown;
  featured: boolean;
  order: number;
  deliverables: string[];
  caseStudy: {
    overview: string;
    creativeDirection: string;
    technicalProcess: string;
    materialsLighting: string;
    finalOutput: string;
  };
};
