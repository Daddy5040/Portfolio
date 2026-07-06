import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { PageWrapper, ProjectCard, SectionHeader, SEO } from '../components';
import { categories } from '../data';
import { getAllProjects, getProjectsByCategory } from '../lib/projects';
import type { Project, ProjectCategory } from '../types/project';

type PortfolioFilter = 'All' | ProjectCategory;

const filters: PortfolioFilter[] = ['All', ...categories];

function matchesSearch(project: Project, query: string) {
  if (!query.trim()) return true;

  const normalizedQuery = query.trim().toLowerCase();
  const searchable = [
    project.title,
    project.category,
    project.shortDescription,
    project.fullDescription,
    project.year,
    project.clientType,
    project.role,
    project.renderEngine,
    ...project.software,
    ...project.tags,
    ...project.deliverables,
  ].join(' ').toLowerCase();

  return searchable.includes(normalizedQuery);
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const baseProjects = activeFilter === 'All' ? getAllProjects() : getProjectsByCategory(activeFilter);
  const visibleProjects = useMemo(
    () => baseProjects.filter((project) => matchesSearch(project, searchQuery)),
    [baseProjects, searchQuery],
  );
  const allProjects = getAllProjects();

  return (
    <PageWrapper>
      <SEO
        title="Portfolio"
        description="Browse premium 3D render projects across product visualization, packaging, animation, environments, and furniture."
      />
      <SectionHeader
        eyebrow="Portfolio"
        title="Premium product visuals for modern brands"
        text="Explore product-focused CGI built to improve presentation, perceived value, brand trust, and commercial impact."
      />

      <div className="mx-auto mb-10 max-w-7xl rounded-[1.75rem] border border-white/10 bg-[#121212]/80 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] md:p-5">
        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Search projects</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#F5A623]" size={19} />
            <input
              className="w-full rounded-full border border-white/10 bg-[#0D0D0D] py-3 pl-12 pr-4 text-sm text-[#F5F5F5] outline-none transition preview:text-[#A3A3A3] focus:border-[#F5A623]/70 focus:ring-2 focus:ring-[#F5A623]/20"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by title, category, software, or description..."
            />
          </label>

          <p className="text-sm font-medium text-[#A3A3A3] lg:text-right">
            Showing <span className="text-[#F5A623]">{visibleProjects.length}</span> of {allProjects.length} projects
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${activeFilter === filter ? 'bg-[#F5A623] text-black shadow-[0_12px_34px_rgba(245,166,35,0.2)]' : 'border border-white/10 bg-[#181818] text-[#A3A3A3] hover:border-[#F5A623]/50 hover:text-[#F5F5F5]'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {visibleProjects.length > 0 ? (
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      ) : (
        <motion.div
          className="surface-card mx-auto max-w-3xl rounded-[1.75rem] p-10 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-lg font-semibold text-[#F5F5F5]">No projects found. Try another keyword or category.</p>
          <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">Clear the search field or choose another filter to continue browsing the portfolio.</p>
        </motion.div>
      )}
    </PageWrapper>
  );
}
