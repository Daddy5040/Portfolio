import { motion } from 'framer-motion';
import { imageRevealVariants, premiumEase } from '../lib/animations';
import { ArrowUpRight, BriefcaseBusiness, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../types/project';
import { SkillBadge } from './SkillBadge';

export function ProjectCard({ project }: { project: Project }) {
  const primaryDeliverable = project.deliverables[0];

  return (
    <motion.article
      className="group relative overflow-hidden rounded-[2rem] bg-[#111] ring-1 ring-white/10 premium-hover-lift hover:ring-[#F5A623]/55 hover:shadow-[0_34px_110px_rgba(0,0,0,0.52)]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.62, ease: premiumEase }}
      whileHover={{ rotateX: 1.5, rotateY: -1.5 }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#F5A623]/10 blur-3xl" />
        <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F5A623]/60 to-transparent" />
      </div>

      <Link to={`/portfolio/${project.slug}`} className="relative block h-full">
        <motion.div className="image-reveal-mask relative aspect-[4/3] overflow-hidden bg-[#181818]" variants={imageRevealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.95, ease: premiumEase }}>
          <img className="h-full w-full object-cover premium-transition group-hover:scale-[1.08]" src={project.thumbnail} alt={`${project.title} thumbnail`} loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/28 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

          <div className="absolute left-5 top-5 rounded-full border border-[#F5A623]/30 bg-[#050505]/72 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#F5A623] backdrop-blur">
            {project.category}
          </div>

          <div className="absolute bottom-5 left-5 right-5 translate-y-3 rounded-2xl border border-white/10 bg-[#050505]/72 p-4 opacity-0 backdrop-blur transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="flex items-start gap-3 text-sm leading-5 text-[#D8D8D8]">
              <Sparkles className="mt-0.5 shrink-0 text-[#F5A623]" size={16} />
              <span>{primaryDeliverable} for {project.clientType.toLowerCase()}.</span>
            </div>
          </div>
        </motion.div>

        <div className="flex min-h-[18.5rem] flex-col p-6 md:p-7">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A3A3A3]">{project.year} · {project.renderEngine}</p>
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] premium-transition group-hover:border-[#F5A623]/50 group-hover:bg-[#F5A623] group-hover:text-black">
              <ArrowUpRight className="premium-transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={19} />
            </span>
          </div>

          <h3 className="text-[1.65rem] font-semibold leading-tight tracking-[-0.045em] text-[#F5F5F5]">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">{project.shortDescription}</p>

          <div className="mt-5 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-[#D8D8D8]">
            <div className="flex items-start gap-3">
              <BriefcaseBusiness className="mt-0.5 shrink-0 text-[#F5A623]" size={16} />
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#777]">Commercial value</p>
                <p className="mt-1 leading-5">{project.deliveryType}</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-5">
            <div className="flex flex-wrap gap-2">
              {project.software.slice(0, 3).map((software) => <SkillBadge key={software}>{software}</SkillBadge>)}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
