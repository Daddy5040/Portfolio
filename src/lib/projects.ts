import { projects } from '../data/projects';
import type { Project, ProjectCategory } from '../types/project';

const orderedProjects = [...projects].sort((a, b) => a.order - b.order);

export function getAllProjects(): Project[] {
  return orderedProjects;
}

export function getFeaturedProjects(): Project[] {
  return orderedProjects.filter((project) => project.featured);
}

export function getProjectBySlug(slug?: string): Project | undefined {
  if (!slug) return undefined;
  return orderedProjects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return orderedProjects.filter((project) => project.category === category);
}

export function getNextProject(slug: string): Project | undefined {
  const currentIndex = orderedProjects.findIndex((project) => project.slug === slug);
  if (currentIndex < 0) return undefined;
  return orderedProjects[(currentIndex + 1) % orderedProjects.length];
}

export function getPreviousProject(slug: string): Project | undefined {
  const currentIndex = orderedProjects.findIndex((project) => project.slug === slug);
  if (currentIndex < 0) return undefined;
  return orderedProjects[(currentIndex - 1 + orderedProjects.length) % orderedProjects.length];
}
