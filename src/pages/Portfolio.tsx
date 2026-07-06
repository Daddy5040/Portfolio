import { AnimatePresence, motion } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
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
    project.deliveryType,
    ...project.software,
    ...project.tags,
    ...project.deliverables,
  ].join(' ').toLowerCase();

  return searchable.includes(normalizedQuery);
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRefining, setIsRefining] = useState(false);

  const allProjects = getAllProjects();
  const baseProjects = useMemo(() => (activeFilter === 'All' ? allProjects : getProjectsByCategory(activeFilter)), [activeFilter, allProjects]);
  const visibleProjects = useMemo(
    () => baseProjects.filter((project) => matchesSearch(project, searchQuery)),
    [baseProjects, searchQuery],
  );

  useEffect(() => {
    setIsRefining(true);
    const timer = window.setTimeout(() => setIsRefining(false), 220);
    return () => window.clearTimeout(timer);
  }, [activeFilter, searchQuery]);

  const clearSearch = () => setSearchQuery('');

  return (
    <PageWrapper>
      <SEO
        title="Portfolio"
        description="Browse premium 3D render projects across Amazon products, furniture, industrial design, luxury products, architecture, and packaging."
      />
      <SectionHeader
        eyebrow="Portfolio"
        title="Commercial CGI with premium product strategy"
        text="A curated portfolio of launch visuals, marketplace content, investor-ready concepts, and architectural storytelling built to elevate perceived value and help clients sell with confidence."
      />

      <div className="mx-auto mb-12 max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010]/90 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.36)] backdrop-blur md:p-6">
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <span className="sr-only">Search projects</span>
            <Search className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-[#F5A623]" size={20} />
            <input
              className="w-full rounded-full border border-white/10 bg-[#070707] py-4 pl-14 pr-12 text-sm text-[#F5F5F5] outline-none transition placeholder:text-[#777] focus:border-[#F5A623]/70 focus:ring-2 focus:ring-[#F5A623]/20"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search Amazon, furniture, luxury, architecture, CMF, deliverables..."
            />
            {searchQuery ? (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-4 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-white/5 text-[#A3A3A3] transition hover:bg-[#F5A623] hover:text-black"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            ) : null}
          </label>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-[#A3A3A3] lg:text-right">
            <span className="text-[#F5A623]">{visibleProjects.length}</span> / {allProjects.length} curated case studies
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#777]">
          <SlidersHorizontal size={16} className="text-[#F5A623]" />
          Filter by specialty
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const count = filter === 'All' ? allProjects.length : getProjectsByCategory(filter).length;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
                className={`group rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${activeFilter === filter ? 'bg-[#F5A623] text-black shadow-[0_14px_38px_rgba(245,166,35,0.24)]' : 'border border-white/10 bg-[#181818] text-[#A3A3A3] hover:-translate-y-0.5 hover:border-[#F5A623]/50 hover:text-[#F5F5F5]'}`}
              >
                {filter}
                <span className={`ml-2 rounded-full px-2 py-0.5 text-[0.68rem] ${activeFilter === filter ? 'bg-black/10' : 'bg-white/5 text-[#777] group-hover:text-[#F5A623]'}`}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isRefining ? (
          <motion.div
            key="loading"
            className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 xl:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[0, 1, 2].map((item) => (
              <div key={item} className="h-[33rem] animate-pulse rounded-[2rem] border border-white/10 bg-[#121212]">
                <div className="h-64 rounded-t-[2rem] bg-white/[0.04]" />
                <div className="space-y-4 p-7">
                  <div className="h-4 w-24 rounded bg-white/[0.06]" />
                  <div className="h-7 w-3/4 rounded bg-white/[0.06]" />
                  <div className="h-16 rounded bg-white/[0.05]" />
                </div>
              </div>
            ))}
          </motion.div>
        ) : visibleProjects.length > 0 ? (
          <motion.div
            key={`${activeFilter}-${searchQuery || 'all'}`}
            className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 xl:grid-cols-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28 }}
          >
            {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            className="surface-card mx-auto max-w-3xl rounded-[1.75rem] p-10 text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-lg font-semibold text-[#F5F5F5]">No premium case studies match that search.</p>
            <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">Try a broader term like “Amazon”, “furniture”, “CMF”, “luxury”, or clear the filters to view the full portfolio.</p>
            <button type="button" onClick={() => { setActiveFilter('All'); setSearchQuery(''); }} className="mt-6 rounded-full bg-[#F5A623] px-5 py-2.5 text-sm font-semibold text-black transition hover:-translate-y-0.5">
              Reset portfolio view
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PageWrapper>
  );
}
