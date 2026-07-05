import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../types/project';
import { SkillBadge } from './SkillBadge';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      className="group overflow-hidden rounded-[1.75rem] bg-[#121212] ring-1 ring-white/10 transition duration-500 hover:-translate-y-1 hover:ring-[#F5A623]/45"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Link to={`/portfolio/${project.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-[#181818]">
          <img className="h-full w-full object-cover transition duration-700 group-hover:scale-105" src={project.thumbnail} alt={`${project.title} thumbnail`} loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/24 to-transparent" />
          <div className="absolute left-5 top-5 rounded-full bg-[#050505]/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#F5A623] backdrop-blur">
            {project.category}
          </div>
        </div>
        <div className="p-6 md:p-7">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A3A3A3]">{project.year}</p>
            <ArrowUpRight className="text-[#F5A623] transition group-hover:translate-x-1 group-hover:-translate-y-1" size={19} />
          </div>
          <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">{project.shortDescription}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.software.slice(0, 3).map((software) => <SkillBadge key={software}>{software}</SkillBadge>)}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
