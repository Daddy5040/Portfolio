import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Cuboid, Lightbulb, Sparkles } from 'lucide-react';
import { Button, PageWrapper, SEO, SectionHeader, SkillBadge } from '../components';

const timeline = [
  {
    title: 'Freelance Projects',
    period: '2019 — Present',
    text: 'Collaborated with brands, agencies, architects, and founders to create product renders, interiors, launch imagery, and campaign-ready CGI assets.',
  },
  {
    title: 'Studio Experience',
    period: '2017 — 2019',
    text: 'Worked in production environments where clean scene organization, clear communication, and reliable delivery shaped a professional 3D workflow.',
  },
  {
    title: 'Personal Projects',
    period: 'Ongoing',
    text: 'Developed cinematic studies, material experiments, animation tests, and visual research pieces to keep the portfolio expressive and technically sharp.',
  },
  {
    title: 'Continuous Learning',
    period: 'Always',
    text: 'Constantly refining modeling, rendering, lighting, simulation, compositing, and art direction skills across modern 3D production tools.',
  },
];

const skillGroups = [
  { title: 'Modeling', skills: ['Hard-surface modeling', 'Scene assembly', 'Furniture detailing', 'Scale accuracy'] },
  { title: 'Rendering', skills: ['Look development', 'Render optimization', 'Camera composition', 'Photoreal output'] },
  { title: 'Animation', skills: ['Product reveals', 'Motion studies', 'Camera moves', 'Turntables'] },
  { title: 'Texturing', skills: ['Material creation', 'UV cleanup', 'Fabric detail', 'Surface imperfections'] },
  { title: 'Post Production', skills: ['Color grading', 'Compositing', 'Retouching', 'Final polish'] },
];

const software = ['3ds Max', 'Corona Renderer', 'Photoshop', 'After Effects', 'Blender', 'Marvelous Designer', 'Illustrator'];
const philosophy = ['Reference', 'Planning', 'Modeling', 'Materials', 'Lighting', 'Rendering', 'Post-production'];

export function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about the 3D artist behind Vanta Forge Studio, including biography, workflow, skills, software, and design philosophy."
      />
      <PageWrapper className="py-16 md:py-24">
        <section className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1fr]">
          <motion.div className="relative" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#F5A623]/10 blur-3xl" />
            <img
              className="image-glow relative aspect-[4/5] w-full rounded-[2rem] object-cover"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=1200&q=85"
              alt="Professional portrait placeholder for the 3D artist"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.55 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">About the artist</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#F5F5F5] md:text-8xl">Alex Morgan</h1>
            <p className="mt-5 text-2xl font-semibold text-[#F5A623]">3D Artist & Visual Storyteller</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#A3A3A3] md:text-xl md:leading-9">
              I create cinematic 3D visuals that help products, spaces, and stories feel tangible before they exist in the real world.
            </p>
          </motion.div>
        </section>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1fr]">
          <SectionHeader eyebrow="Biography" title="Built on craft, clarity, and atmosphere" align="left" />
          <div className="space-y-5 text-lg leading-8 text-[#A3A3A3]">
            <p>
              Alex Morgan is a professional 3D artist specializing in product visualization, architectural visualization, CGI, and motion design. His work blends technical precision with cinematic presentation, helping clients communicate form, material, scale, and emotion through polished digital imagery.
            </p>
            <p>
              Across launch campaigns, furniture studies, interior visuals, animation idents, and personal research pieces, the focus is always the same: create images that feel believable, premium, and intentional. Every frame is shaped through thoughtful references, clean modeling, tactile materials, controlled lighting, and restrained post-production.
            </p>
          </div>
        </section>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Experience" title="A timeline of practical production growth" text="A placeholder career path showing the mix of client work, studio practice, independent exploration, and ongoing learning behind the portfolio." />
        <div className="mx-auto max-w-4xl">
          {timeline.map((item, index) => (
            <motion.div
              className="relative border-l border-white/10 pb-10 pl-8 last:pb-0"
              key={item.title}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.06 }}
            >
              <span className="absolute -left-3 top-0 grid h-6 w-6 place-items-center rounded-full bg-[#F5A623] text-black"><Calendar size={14} /></span>
              <div className="surface-card rounded-[1.5rem] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">{item.period}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#F5F5F5]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#A3A3A3]">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Skills" title="Core production strengths" />
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-5">
          {skillGroups.map((group) => (
            <div className="surface-card rounded-[1.5rem] p-6" key={group.title}>
              <Cuboid className="text-[#F5A623]" />
              <h3 className="mt-5 text-xl font-semibold text-[#F5F5F5]">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">{group.skills.map((skill) => <SkillBadge key={skill}>{skill}</SkillBadge>)}</div>
            </div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Software" title="Tools used across the pipeline" />
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {software.map((tool) => (
            <motion.div
              className="surface-card rounded-[1.5rem] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#F5A623]/40"
              key={tool}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="mx-auto text-[#F5A623]" />
              <p className="mt-4 font-semibold text-[#F5F5F5]">{tool}</p>
            </motion.div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <section className="glass mx-auto max-w-7xl rounded-[2rem] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Design Philosophy</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">Every frame starts with intention.</h2>
              <p className="mt-5 leading-8 text-[#A3A3A3]">
                The workflow is structured but flexible: understand the reference, plan the story, model with purpose, build tactile materials, sculpt light, render with control, and polish only where it strengthens the image.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {philosophy.map((step, index) => (
                <div className="rounded-2xl border border-white/10 bg-[#121212] p-5" key={step}>
                  <p className="text-sm font-semibold text-[#F5A623]">0{index + 1}</p>
                  <p className="mt-2 font-semibold text-[#F5F5F5]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageWrapper>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="surface-card mx-auto max-w-6xl rounded-[2rem] p-8 text-center md:p-16">
          <Lightbulb className="mx-auto text-[#F5A623]" size={34} />
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">Let&apos;s create something amazing together.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#A3A3A3]">Bring a product, interior, campaign, or visual idea into a polished cinematic 3D world.</p>
          <Button className="mt-8" to="/contact">Start a Conversation <ArrowRight size={18} /></Button>
        </div>
      </section>
    </>
  );
}
