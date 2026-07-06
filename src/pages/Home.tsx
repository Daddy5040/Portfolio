import { motion } from 'framer-motion';
import { ArrowRight, Box, CheckCircle2, Layers3, Sparkles, TrendingUp } from 'lucide-react';
import { Button, PageWrapper, ProjectCard, SectionHeader, SEO } from '../components';
import { getFeaturedProjects } from '../lib/projects';

const services = [
  {
    title: 'Amazon A+ Content',
    text: 'Conversion-focused image sets that explain benefits, build trust, and help products feel more premium before purchase.',
  },
  {
    title: 'Hero Images',
    text: 'Clean commercial renders designed to make listings, ads, and landing pages look polished, credible, and ready to sell.',
  },
  {
    title: 'Lifestyle Compositions',
    text: 'Context-rich CGI scenes that show scale, use, and atmosphere without the cost or limits of traditional photography.',
  },
  {
    title: 'Packaging Visualization',
    text: 'Sharp packaging visuals for launches, campaigns, and marketplaces when physical samples are limited or unavailable.',
  },
  {
    title: 'Product Rendering',
    text: 'Photorealistic renders with precise materials, lighting, and angles that increase perceived quality and buyer confidence.',
  },
  {
    title: 'Product Animation',
    text: 'Short CGI motion assets that reveal details, demonstrate features, and give brands stronger campaign material.',
  },
];

const benefits = [
  'Premium visuals that make products feel higher value',
  'Amazon-ready imagery for A+ content, hero sections, and launch assets',
  'Commercial direction focused on clarity, trust, and buyer confidence',
];

const workflow = [
  { step: 'Brief', text: 'Define the product, audience, sales goal, and required deliverables.' },
  { step: 'Direction', text: 'Set visual references, angles, composition, and premium art direction.' },
  { step: 'Production', text: 'Build the scene, materials, lighting, and photorealistic render setup.' },
  { step: 'Review', text: 'Share clear previews for feedback before final polishing.' },
  { step: 'Refinement', text: 'Adjust details, improve realism, and align the visuals with brand goals.' },
  { step: 'Delivery', text: 'Export polished assets ready for Amazon, web, ads, and marketing.' },
];

const trustIndicators = ['Amazon A+ focus', 'Photorealistic CGI', 'Commercial art direction', 'Clear delivery process'];

export function Home() {
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <>
      <SEO
        title="Home"
        description="Premium CGI product visualization for Amazon A+ content, hero images, lifestyle visuals, and commercial product campaigns."
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
              <Sparkles size={16} /> Premium CGI for Amazon & e-commerce brands
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-[#F5F5F5] sm:text-6xl md:text-8xl">
              Premium CGI visuals for products that need to <span className="gold-gradient">look ready to sell</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#A3A3A3] md:text-xl md:leading-9">
              I create photorealistic product renders, Amazon A+ visuals, hero images, and lifestyle CGI that help brands present products with more value, clarity, and trust.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button to="/portfolio">View Portfolio <ArrowRight size={18} /></Button>
              <Button to="/contact" variant="secondary">Start a Project</Button>
            </div>
            <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4" key={benefit}>
                  <CheckCircle2 className="text-[#F5A623]" size={18} aria-hidden="true" />
                  <p className="mt-3 text-sm leading-6 text-[#C9C9C9]">{benefit}</p>
                </div>
              ))}
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
                  <p className="mt-3 text-sm font-semibold text-[#F5F5F5]">Commercial CGI</p>
                  <p className="mt-1 text-xs text-[#A3A3A3]">Amazon / Hero / Lifestyle</p>
                </motion.div>
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#050505]/75 p-4 backdrop-blur-md">
                  <p className="text-xs uppercase tracking-[0.25em] text-[#F5A623]">Premium positioning</p>
                  <p className="mt-2 text-lg font-semibold text-[#F5F5F5]">High-end product visualization built for commercial use</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Selected work" title="Product visuals built for commercial impact" text="Case studies focused on premium presentation, clear product value, and brand-ready imagery for modern sellers." />
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Services" title="CGI services for products that need to sell" text="Focused production for Amazon sellers, e-commerce brands, and manufacturers that need stronger product presentation before launch or campaign." />
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              className="surface-card rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#F5A623]/30 md:p-7"
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.05 }}
            >
              <Layers3 className="text-[#F5A623]" />
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#F5F5F5]">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Process" title="A clear workflow that protects quality" text="A structured production process keeps the work focused, predictable, and aligned with the commercial purpose of each image." />
        <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-3 lg:grid-cols-6">
          {workflow.map((step, index) => (
            <motion.div
              className="relative rounded-2xl border border-white/10 bg-[#121212] p-5 text-center"
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="text-sm font-semibold text-[#F5A623]">0{index + 1}</span>
              <p className="mt-3 text-sm font-semibold text-[#F5F5F5]">{step.step}</p>
              <p className="mt-3 text-xs leading-5 text-[#A3A3A3]">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Trust indicators" title="Built like a premium visualization studio" text="The goal is not to show software skill. The goal is to make each product feel more credible, desirable, and commercially ready." />
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((indicator) => (
            <div className="rounded-2xl border border-white/10 bg-[#121212] p-5 text-center" key={indicator}>
              <TrendingUp className="mx-auto text-[#F5A623]" size={20} aria-hidden="true" />
              <p className="mt-4 text-sm font-semibold text-[#F5F5F5]">{indicator}</p>
            </div>
          ))}
        </div>
      </PageWrapper>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="glass mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 text-center md:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Ready to improve your product presentation?</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">
            Create product visuals that make buying easier
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#A3A3A3]">
            If you need Amazon A+ content, hero renders, or polished product visuals for a launch, share the product details and the commercial goal.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/contact">Start a Project <ArrowRight size={18} /></Button>
          </div>
        </div>
      </section>
    </>
  );
}
