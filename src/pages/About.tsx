import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Cuboid, Lightbulb, Sparkles } from 'lucide-react';
import { Button, PageWrapper, SEO, SectionHeader, SkillBadge } from '../components';

const timeline = [
  {
    title: 'Freelance Projects',
    period: '2019 — Present',
    text: 'Collaborates with Amazon sellers, e-commerce brands, agencies, and modern businesses to create premium CGI assets that improve product presentation and brand trust.',
  },
  {
    title: 'Studio Experience',
    period: '2017 — 2019',
    text: 'Built a reliable visualization workflow focused on organized communication, consistent quality, commercial clarity, and polished delivery.',
  },
  {
    title: 'Personal Projects',
    period: 'Ongoing',
    text: 'Develops product-focused visual studies that explore stronger presentation, premium lighting, material quality, and market-ready image direction.',
  },
  {
    title: 'Continuous Learning',
    period: 'Always',
    text: 'Continuously refines image quality, art direction, product storytelling, and client communication to create visuals with stronger business impact.',
  },
];

const skillGroups = [
  { title: 'Amazon', skills: ['A+ content', 'Hero images', 'Conversion focus', 'Brand clarity'] },
  { title: 'Rendering', skills: ['Photoreal quality', 'Premium lighting', 'Material realism', 'Trust-building visuals'] },
  { title: 'Lifestyle', skills: ['Product context', 'Scene direction', 'Customer relevance', 'Campaign visuals'] },
  { title: 'Packaging', skills: ['Pack shots', 'Label clarity', 'Shelf impact', 'Material finish'] },
  { title: 'Commercial', skills: ['Perceived value', 'Visual consistency', 'Reliable delivery', 'Business impact'] },
];

const software = ['3ds Max', 'Corona Renderer', 'Photoshop', 'After Effects', 'Blender', 'Marvelous Designer', 'Illustrator'];
const philosophy = ['Reference', 'Planning', 'Modeling', 'Materials', 'Lighting', 'Rendering', 'Post-production'];

export function About() {
  return (
    <>
      <SEO
        title="About"
        description="Learn how Maherison Daddy helps Amazon sellers and modern brands create premium CGI visuals that elevate products and strengthen commercial presentation."
      />
      <PageWrapper className="py-16 md:py-24">
        <section className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.82fr_1fr]">
          <motion.div className="relative" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#F5A623]/10 blur-3xl" />
            <img
              className="image-glow relative aspect-[4/5] w-full rounded-[2rem] object-cover"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=1200&q=85"
              alt="Professional portrait for Maherison Daddy"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.55 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">About the specialist</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#F5F5F5] md:text-8xl">Maherison Daddy</h1>
            <p className="mt-5 text-2xl font-semibold text-[#F5A623]">Premium Product Visualization Specialist</p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#A3A3A3] md:text-xl md:leading-9">
              Maherison Daddy helps Amazon sellers, e-commerce brands, and modern businesses create photorealistic CGI visuals that increase product value and strengthen brand identity.
            </p>
          </motion.div>
        </section>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <section className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1fr]">
          <SectionHeader eyebrow="Biography" title="Built on product value, trust, and commercial impact" align="left" />
          <div className="space-y-5 text-lg leading-8 text-[#A3A3A3]">
            <p>
              Maherison Daddy is a Product Visualization Specialist focused on creating premium CGI for Amazon sellers, e-commerce brands, and modern businesses. Each project is shaped to elevate product presentation, increase perceived value, and build customer trust through photorealistic imagery.
            </p>
            <p>
              The focus is not only realism but commercial impact. Every image is created to help brands present products with more clarity, confidence, and premium appeal so customers understand the value before they buy.
            </p>
          </div>
        </section>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Experience" title="Professional growth shaped by commercial visualization" text="A focused path built around premium product presentation, reliable communication, and business-oriented visual outcomes." />
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
        <SectionHeader eyebrow="Skills" title="Commercial visualization strengths" />
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
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">Every frame starts with business value.</h2>
              <p className="mt-5 leading-8 text-[#A3A3A3]">
                The workflow is structured around the client’s product, market, and visual goals. Each decision supports clarity, premium perception, and a stronger reason for customers to trust the brand.
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
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">Let&apos;s elevate your product together.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#A3A3A3]">Bring your product into a premium CGI presentation designed to improve perceived value and brand trust.</p>
          <Button className="mt-8" to="/contact">Start Your Project <ArrowRight size={18} /></Button>
        </div>
      </section>
    </>
  );
}
