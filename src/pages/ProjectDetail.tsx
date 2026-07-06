import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button, Gallery, PageWrapper, RenderBreakdown, SEO, SectionHeader, SkillBadge, type GalleryItem } from '../components';
import { getNextProject, getPreviousProject, getProjectBySlug } from '../lib/projects';

const caseStudySections = [
  ['Overview', 'overview'],
  ['Creative Direction', 'creativeDirection'],
  ['Technical Process', 'technicalProcess'],
  ['Materials & Lighting', 'materialsLighting'],
  ['Final Output', 'finalOutput'],
] as const;

export function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectBySlug(id);

  if (!project) {
    return (
      <PageWrapper>
        <SEO title="Project Not Found" description="The requested Maherison Daddy portfolio case study could not be found." />
        <section className="surface-card mx-auto max-w-3xl rounded-[2rem] p-8 text-center md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">404 Case Study</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">Project not found</h1>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-[#A3A3A3]">The project you are looking for does not exist or has been moved. Return to the portfolio to browse available case studies.</p>
          <Button className="mt-8" to="/portfolio"><ArrowLeft size={18} /> Back to Portfolio</Button>
        </section>
      </PageWrapper>
    );
  }

  const previousProject = getPreviousProject(project.slug);
  const nextProject = getNextProject(project.slug);

  const metadata = [
    ['Software Used', project.software.join(', ')],
    ['Render Engine', project.renderEngine],
    ['Role', project.role],
    ['Delivery Type', project.deliveryType],
    ['Timeline', project.timeline],
  ];

  const galleryItems: GalleryItem[] = project.gallery;

  const renderBreakdown = {
    wireframeImage: project.wireframeImage,
    clayImage: project.clayImage,
    finalImage: project.finalImage,
    breakdownNotes: project.breakdownNotes,
    software: project.software,
  };

  return (
    <>
      <SEO title={project.title} description={project.shortDescription} image={project.heroImage} canonical={`https://example.com/portfolio/${project.slug}`} />
      <PageWrapper className="py-12 md:py-16">
        <article className="mx-auto max-w-7xl">
          <Link className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#A3A3A3] transition hover:text-[#F5F5F5]" to="/portfolio">
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>

          <section className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">{project.category} / {project.year}</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#F5F5F5] md:text-8xl">{project.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#A3A3A3] md:text-xl md:leading-9">{project.fullDescription}</p>
            </motion.div>

            <motion.div className="relative" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.6 }}>
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#F5A623]/10 blur-3xl" />
              <img className="image-glow relative aspect-[16/10] w-full rounded-[2rem] object-cover" src={project.heroImage} alt={`${project.title} hero render`} decoding="async" />
            </motion.div>
          </section>

          <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {metadata.map(([label, value], index) => (
              <motion.div
                className="surface-card rounded-2xl p-5"
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#F5A623]">{label}</p>
                <p className="mt-3 text-sm leading-6 text-[#F5F5F5]">{value}</p>
              </motion.div>
            ))}
          </section>

          <section className="mt-16 grid gap-10 lg:grid-cols-[0.72fr_1fr]">
            <aside className="surface-card h-fit rounded-[1.75rem] p-7 md:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Client</p>
              <p className="mt-2 text-xl font-semibold text-[#F5F5F5]">{project.clientType}</p>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Software Tags</p>
              <div className="mt-4 flex flex-wrap gap-2">{project.software.map((software) => <SkillBadge key={software}>{software}</SkillBadge>)}</div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Deliverables</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[#A3A3A3]">{project.deliverables.map((deliverable) => <li key={deliverable}>• {deliverable}</li>)}</ul>
            </aside>

            <div className="space-y-5">
              {caseStudySections.map(([title, key], index) => (
                <div className="space-y-5" key={key}>
                  <motion.section
                    className="surface-card rounded-[1.75rem] p-7 md:p-9"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F5A623]">0{index + 1}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">{title}</h2>
                    <p className="mt-4 leading-8 text-[#A3A3A3]">{project.caseStudy[key]}</p>
                  </motion.section>
                  {key === 'technicalProcess' && <RenderBreakdown breakdown={renderBreakdown} />}
                </div>
              ))}
            </div>
          </section>
        </article>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Gallery" title="Final frames and visual details" text="Additional preview frames showing the visual language, materials, lighting, and output direction for this project." />
        <div className="mx-auto max-w-7xl">
          <Gallery items={galleryItems} />
        </div>
      </PageWrapper>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          <Link className="surface-card group rounded-[1.75rem] p-7 transition hover:-translate-y-1 hover:border-[#F5A623]/40" to={`/portfolio/${previousProject?.slug ?? project.slug}`}>
            <p className="flex items-center gap-2 text-sm font-semibold text-[#A3A3A3]"><ArrowLeft size={17} /> Previous Project</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#F5F5F5] transition group-hover:text-[#F5A623]">{previousProject?.title ?? project.title}</h3>
          </Link>
          <Link className="surface-card group rounded-[1.75rem] p-7 text-right transition hover:-translate-y-1 hover:border-[#F5A623]/40" to={`/portfolio/${nextProject?.slug ?? project.slug}`}>
            <p className="flex items-center justify-end gap-2 text-sm font-semibold text-[#A3A3A3]">Next Project <ArrowRight size={17} /></p>
            <h3 className="mt-3 text-2xl font-semibold text-[#F5F5F5] transition group-hover:text-[#F5A623]">{nextProject?.title ?? project.title}</h3>
          </Link>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="glass mx-auto max-w-6xl rounded-[2rem] p-8 text-center md:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Commission a case study</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">Want a visual like this?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#A3A3A3]">Bring a product, space, or story to life with cinematic 3D visuals built for launches, campaigns, and presentations.</p>
          <Button className="mt-8" to="/contact">Start a Project <ArrowRight size={18} /></Button>
        </div>
      </section>
    </>
  );
}
