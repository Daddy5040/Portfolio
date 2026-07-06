import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button, Gallery, PageWrapper, RenderBreakdown, SEO, SectionHeader, SkillBadge, type GalleryItem } from '../components';
import { getNextProject, getPreviousProject, getProjectBySlug } from '../lib/projects';

type StoryBlock = {
  label: string;
  title: string;
  body: string;
};

type CaseStudyStory = {
  goal: string;
  challenge: string;
  solution: string;
  workflow: string[];
  lighting: string;
  materials: string;
  renderingProcess: string;
  results: string[];
};

const caseStudyStories: Record<string, CaseStudyStory> = {
  'aerocharge-amazon-launch': {
    goal: 'Create a premium Amazon image system that could make a compact charging dock feel trustworthy, technically clear, and worth a higher basket value before shoppers reached the bullet points.',
    challenge: 'The product needed to communicate multiple charging zones, material quality, and device compatibility in a crowded marketplace where buyers compare thumbnails in seconds.',
    solution: 'I built a conversion-focused suite of clean packshots, benefit-led callouts, and lifestyle frames that makes the product easy to understand while elevating perceived value for launch campaigns.',
    workflow: ['Audit listing requirements and define the image hierarchy for hero, feature, and A+ placements.', 'Block compliant camera angles and test the silhouette at thumbnail scale.', 'Refine materials, shadows, and callout crops before final marketplace retouching.'],
    lighting: 'Soft commercial studio lighting with controlled reflections was used to keep edges readable, avoid harsh marketplace shadows, and make the satin finish feel premium.',
    materials: 'Satin plastic, subtle anodized trim, screen-safe reflections, and clean contact shadows were tuned to suggest durability without over-stylizing the product.',
    renderingProcess: 'The render setup was built as a reusable Amazon studio so the hero angle, alternate views, A+ crops, and motion loop could share one consistent visual language.',
    results: ['Complete launch-ready listing image stack', 'Clearer product education through feature crops', 'Premium visual positioning for paid traffic and A+ content'],
  },
  'luma-lounge-system': {
    goal: 'Give a DTC furniture brand a scalable visualization system that sells comfort, craftsmanship, and configuration options without requiring a costly physical photo shoot for every SKU.',
    challenge: 'The modular collection depended on accurate proportions, believable upholstery, and consistent camera angles across many fabric and layout variants.',
    solution: 'I created a repeatable furniture CGI template with tactile fabric shaders, calibrated studio lighting, and a finish library that supports future catalog expansion.',
    workflow: ['Model modular components so sectional layouts can be assembled quickly.', 'Validate cushion softness, seam rhythm, and scale through clay previews.', 'Produce fabric variants and closeups from a consistent render template.'],
    lighting: 'Large softboxes and gentle room bounce were used to reveal fabric texture, cushion volume, and premium silhouettes without making the product feel flat.',
    materials: 'Bouclé, linen, walnut, and metal finishes were balanced for tactile realism, accurate color, and high-end e-commerce consistency.',
    renderingProcess: 'A modular scene structure allowed each configuration to inherit the same camera, lighting, and material logic while remaining flexible for future SKU growth.',
    results: ['Consistent product imagery across the collection', 'Faster variant production for e-commerce updates', 'Higher perceived comfort and quality in sales assets'],
  },
  'axis-industrial-scanner': {
    goal: 'Turn an early hardware concept into investor-ready visuals that communicate ergonomic intent, rugged value, and production credibility.',
    challenge: 'The scanner had to look durable and manufacturable while still feeling refined enough for a startup pitch and strategic stakeholder review.',
    solution: 'I developed hard-surface presentation renders, CMF direction, and detailed hero views that translate technical features into a commercially understandable product story.',
    workflow: ['Refine CAD and blockout geometry into clean render-ready surfaces.', 'Review grip, button hierarchy, and seam placement in neutral clay passes.', 'Build final CMF visuals, detail crops, and presentation compositions.'],
    lighting: 'Industrial studio lighting with firm highlights and controlled contrast helped emphasize the rugged form language, edge quality, and functional grip zones.',
    materials: 'Textured polymer, soft-touch rubber, dark glass, and anodized accents were used to suggest field durability and modern manufacturing intent.',
    renderingProcess: 'The project moved from hard-surface modeling to clay validation, CMF look development, and final KeyShot presentation frames for deck use.',
    results: ['Investor-ready product story for an early concept', 'Clear CMF direction for stakeholder alignment', 'Credible visuals for pitch decks and product roadmap conversations'],
  },
  'noir-chronograph-campaign': {
    goal: 'Create a luxury campaign language that makes a chronograph feel precise, desirable, and premium across launch stills and social motion crops.',
    challenge: 'Polished metal, glass, and dark surfaces require careful reflection control; without precision, the watch could appear flat, noisy, or less valuable.',
    solution: 'I designed a cinematic macro system with controlled highlights, deep negative space, and high-end material rendering that supports a refined product reveal.',
    workflow: ['Define macro angles around dial readability, case depth, and strap detail.', 'Test bevels and reflections in clay and material preview passes.', 'Render final stills and motion crops with consistent luxury grading.'],
    lighting: 'Narrow strip lights and selective gold accents created crisp reflections that describe the case geometry while preserving a premium low-key mood.',
    materials: 'Layered polished metal, coated glass, leather grain, and subtle dial finishes were tuned for tactile macro realism and campaign polish.',
    renderingProcess: 'The watch was shaded and rendered through a repeatable premium studio setup that could produce hero stills, detail frames, and a reveal loop.',
    results: ['Premium launch visuals for web and social', 'Macro detail that reinforces craftsmanship', 'A cohesive campaign look across still and motion assets'],
  },
  'monolith-residence-visualization': {
    goal: 'Translate early architectural intent into presentation visuals that help clients and investors understand the emotional value of a cliffside residence.',
    challenge: 'The concept needed to balance architectural accuracy, atmosphere, material warmth, and site drama while still supporting practical sales conversations.',
    solution: 'I produced a cinematic visualization package with exterior, interior, and mood frames that communicate scale, lifestyle, and investment potential.',
    workflow: ['Convert design drawings into refined massing and camera studies.', 'Validate daylight, room scale, and landscape relationship with clay renders.', 'Add materials, vegetation, interior styling, and final cinematic grading.'],
    lighting: 'A dusk exterior strategy paired cool ambient light with warm interior glow, giving the residence an aspirational but believable sense of place.',
    materials: 'Concrete, timber, glass, stone, landscape elements, and warm interior finishes were balanced to express quiet luxury and permanence.',
    renderingProcess: 'Architectural scenes were built around curated camera positions, then developed through clay review, material passes, environment detail, and final post-production.',
    results: ['Investor-grade exterior and interior visuals', 'Stronger emotional narrative for client presentations', 'Marketing-ready imagery for sales decks and editorial use'],
  },
  'sable-skincare-packaging': {
    goal: 'Build a premium packaging suite that helps a skincare brand sell quality, shelf presence, and tactile value before physical retail rollout.',
    challenge: 'The packaging needed to feel clean and luxurious while communicating product family hierarchy across bottles, boxes, bundles, and social crops.',
    solution: 'I created a cohesive set of packshots, group compositions, material closeups, and campaign images designed for DTC launch and retail sell-in.',
    workflow: ['Define bottle, cap, and label hierarchy for individual and group compositions.', 'Validate silhouette and spacing through clay previews.', 'Render frosted glass, metallic details, and channel-specific crops for launch.'],
    lighting: 'Soft gradient lighting and delicate contact shadows were used to make the glass and labels feel tactile, clean, and premium.',
    materials: 'Frosted glass, soft-touch labels, metallic caps, creamy backgrounds, and refined highlights were tuned for beauty-market shelf impact.',
    renderingProcess: 'The suite was produced from a repeatable packaging scene that supports individual SKUs, bundles, retail crops, and campaign compositions.',
    results: ['Launch-ready DTC and retail presentation assets', 'Cohesive product family storytelling', 'Premium visual language for paid social and sales decks'],
  },
};

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
  const story = caseStudyStories[project.slug];

  const metadata = [
    ['Project Goal', story.goal],
    ['Software Used', project.software.join(', ')],
    ['Render Engine', project.renderEngine],
    ['Timeline', project.timeline],
  ];

  const storyBlocks: StoryBlock[] = [
    { label: 'Project Overview', title: 'A commercially focused visual system', body: project.fullDescription },
    { label: 'Challenge', title: 'The business problem behind the visuals', body: story.challenge },
    { label: 'Solution', title: 'A render strategy built around client value', body: story.solution },
    { label: 'Rendering Process', title: 'From scene blocking to campaign-ready output', body: story.renderingProcess },
    { label: 'Lighting', title: 'Lighting designed for clarity and desire', body: story.lighting },
    { label: 'Materials', title: 'Surface detail that supports perceived value', body: story.materials },
    { label: 'Final Outcome', title: 'Assets ready for launch, sales, and stakeholder review', body: project.caseStudy.finalOutput },
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

          <section className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end" aria-label="Hero">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Case Study / {project.category} / {project.year}</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-[#F5F5F5] md:text-8xl">{project.title}</h1>
              <p className="mt-6 max-w-3xl text-xl leading-9 text-[#D8D8D8] md:text-2xl md:leading-10">{project.shortDescription}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/contact">Interested in a similar project? <ArrowRight size={18} /></Button>
                <a className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-[#F5F5F5] transition hover:border-[#F5A623]/50 hover:text-[#F5A623]" href="#results">View Results</a>
              </div>
            </motion.div>

            <motion.div className="relative" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1, duration: 0.6 }}>
              <div className="absolute -inset-5 rounded-[2.75rem] bg-[#F5A623]/10 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-2 shadow-2xl shadow-black/40">
                <img className="image-glow aspect-[16/10] w-full rounded-[1.5rem] object-cover" src={project.heroImage} alt={`${project.title} hero render`} decoding="async" />
              </div>
            </motion.div>
          </section>

          <section className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4" aria-label="Project Overview">
            {metadata.map(([label, value], index) => (
              <motion.div
                className="surface-card rounded-2xl p-6"
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#F5A623]">{label}</p>
                <p className="mt-3 text-sm leading-7 text-[#F5F5F5]">{value}</p>
              </motion.div>
            ))}
          </section>

          <section className="mt-16 grid gap-10 lg:grid-cols-[0.68fr_1fr]">
            <aside className="surface-card h-fit rounded-[1.75rem] p-7 md:sticky md:top-24 md:p-9" aria-label="Tools and deliverables">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Client</p>
              <p className="mt-2 text-xl font-semibold text-[#F5F5F5]">{project.clientType}</p>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Tools / Software Used</p>
              <div className="mt-4 flex flex-wrap gap-2">{project.software.map((software) => <SkillBadge key={software}>{software}</SkillBadge>)}</div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Workflow</p>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-[#A3A3A3]">{story.workflow.map((step, index) => <li className="flex gap-3" key={step}><span className="font-semibold text-[#F5A623]">0{index + 1}</span><span>{step}</span></li>)}</ol>

              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">Deliverables</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-[#A3A3A3]">{project.deliverables.map((deliverable) => <li className="flex gap-2" key={deliverable}><CheckCircle2 className="mt-1 shrink-0 text-[#F5A623]" size={15} />{deliverable}</li>)}</ul>
            </aside>

            <div className="space-y-5">
              {storyBlocks.map((block, index) => (
                <div className="space-y-5" key={block.label}>
                  <motion.section
                    className="surface-card rounded-[1.75rem] p-7 md:p-9"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F5A623]">{block.label}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-4xl">{block.title}</h2>
                    <p className="mt-5 text-base leading-8 text-[#A3A3A3] md:text-lg md:leading-9">{block.body}</p>
                  </motion.section>
                  {block.label === 'Rendering Process' && <RenderBreakdown breakdown={renderBreakdown} />}
                </div>
              ))}

              <motion.section
                id="results"
                className="rounded-[1.75rem] border border-[#F5A623]/30 bg-[#F5A623]/10 p-7 md:p-9"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#F5A623]">Results</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-4xl">What the client can use immediately</h2>
                <ul className="mt-6 grid gap-3 text-[#E7E7E7] sm:grid-cols-3">
                  {story.results.map((result) => <li className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6" key={result}>{result}</li>)}
                </ul>
              </motion.section>
            </div>
          </section>
        </article>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Gallery" title="Final frames and visual details" text="A curated image set showing the hero composition, material quality, lighting direction, and production value delivered for the client." />
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.02] p-2 md:p-3">
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

      <section className="px-5 py-20 sm:px-6 lg:px-8" aria-label="Call to Action">
        <div className="glass mx-auto max-w-6xl rounded-[2rem] p-8 text-center md:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Interested in a similar project?</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#F5F5F5] md:text-6xl">Let&apos;s work together.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#A3A3A3]">Bring a product, space, or campaign story to life with cinematic 3D visuals built for launches, sales decks, marketplaces, and client presentations.</p>
          <Button className="mt-8" to="/contact">Start a Project <ArrowRight size={18} /></Button>
        </div>
      </section>
    </>
  );
}
