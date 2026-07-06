import { motion } from 'framer-motion';
import { ArrowRight, Box, Layers3, Sparkles } from 'lucide-react';
import { Button, PageWrapper, ProjectCard, SectionHeader, SEO, SkillBadge } from '../components';
import { getFeaturedProjects } from '../lib/projects';

const services = [
  'Amazon A+ Content',
  'Product Rendering',
  'Lifestyle Visualization',
  'Packaging Visualization',
  'Furniture Visualization',
  'Industrial CGI',
];

const workflow = ['Brief', 'Direction', 'Production', 'Review', 'Refinement', 'Delivery'];
const specialties = ['Amazon A+ Content', 'Product Rendering', 'Lifestyle Visualization', 'Packaging Visualization', 'Furniture Visualization', 'Industrial CGI'];

export function Home() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <>
      <SEO
        title="Home"
        description="Helping Amazon sellers and modern brands create photorealistic CGI visuals that increase product value and strengthen brand identity."
      />
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F5A623]/20 blur-[120px] md:h-[28rem] md:w-[28rem]"
          animate={{ opacity: [0.4, 0.72, 0.4], scale: [0.96, 1.08, 0.96] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/[0.05] blur-[130px]"
          animate={{ opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative mx-auto grid min-h-[calc(100vh-12rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#F5A623]">
              <Sparkles size={16} /> Premium Product Visualization Specialist
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-[#F5F5F5] sm:text-6xl md:text-8xl">
              Premium CGI visuals that <span className="gold-gradient">elevate products</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#A3A3A3] md:text-xl md:leading-9">
              Helping Amazon sellers and modern brands create photorealistic CGI visuals that increase product value and strengthen brand identity.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button to="/portfolio">Start Your Project <ArrowRight size={18} /></Button>
              <Button to="/contact" variant="secondary">Let&apos;s Talk</Button>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto w-full max-w-xl"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.65, ease: 'easeOut' }}
          >
            <div className="absolute -inset-8 rounded-[3rem] bg-[#F5A623]/10 blur-3xl" />
            <div className="surface-card relative overflow-hidden rounded-[2rem] p-4 md:p-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#0D0D0D]">
                <img
                  className="h-full w-full object-cover opacity-90"
                  src="https://images.unsplash.com/photo-1635776062043-223faf322554?auto=format&fit=crop&w=1200&q=85"
                  alt="Photorealistic product visualization preview"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#F5A623]/10" />
                <motion.div
                  className="absolute left-6 top-6 rounded-2xl border border-white/10 bg-[#050505]/70 p-4 backdrop-blur-md"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Box className="text-[#F5A623]" />
                  <p className="mt-3 text-sm font-semibold text-[#F5F5F5]">Render Preview</p>
                  <p className="mt-1 text-xs text-[#A3A3A3]">Value / Trust / Brand impact</p>
                </motion.div>
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#050505]/75 p-4 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#F5A623]">Featured Discipline</p>
                  <p className="mt-2 text-lg font-semibold text-[#F5F5F5]">Photorealistic product visuals for modern brands</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Featured works" title="Selected case studies" text="Selected product visualization studies focused on premium presentation, commercial clarity, and brand value." />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Services" title="Services built for product value" text="Business-focused CGI services for Amazon sellers, e-commerce brands, and modern product companies." />
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              className="surface-card rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F5A623]/30 md:p-7"
              key={service}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.05 }}
            >
              <Layers3 className="text-[#F5A623]" />
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#F5F5F5]">{service}</h3>
              <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">Premium visuals designed to improve presentation, perceived value, and customer trust.</p>
            </motion.div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Workflow" title="A clear process from brief to delivery" />
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-6">
          {workflow.map((step, index) => (
            <motion.div
              className="relative rounded-2xl border border-white/10 bg-[#121212] p-5 text-center"
              key={step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="text-sm font-semibold text-[#F5A623]">0{index + 1}</span>
              <p className="mt-3 text-sm font-semibold text-[#F5F5F5]">{step}</p>
            </motion.div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Specialties" title="Commercial visualization areas for product-focused brands" />
        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3">
          {specialties.map((specialty) => <SkillBadge key={specialty}>{specialty}</SkillBadge>)}
        </div>
      </PageWrapper>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="glass mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 text-center md:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Let’s collaborate</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#A3A3A3]">
            Share your brief and let’s create premium CGI visuals that make your product look more valuable, credible, and ready to sell.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/contact">Start Your Project <ArrowRight size={18} /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
