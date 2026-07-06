import { motion } from 'framer-motion';
import { ArrowRight, BadgeCheck, Eye, Handshake, Lightbulb, LockKeyhole, PackageCheck, Sparkles, Target } from 'lucide-react';
import { Button, PageWrapper, SEO, SectionHeader, SkillBadge } from '../components';

const expertiseAreas = [
  {
    title: 'Amazon & marketplace visuals',
    text: 'Hero images, A+ content direction, product sets, and listing-ready renders built to communicate value quickly.',
  },
  {
    title: 'E-commerce product presentation',
    text: 'Premium product scenes, clean pack shots, material-focused closeups, and consistent image systems for digital storefronts.',
  },
  {
    title: 'Commercial CGI storytelling',
    text: 'Visual choices shaped around customer understanding, perceived quality, launch goals, and brand positioning.',
  },
];

const processSteps = [
  'Clarify the product, market, and buyer expectation',
  'Define the strongest visual angle before production starts',
  'Build accurate models, materials, lighting, and composition',
  'Review details with a disciplined quality-control mindset',
  'Deliver polished assets ready for commercial presentation',
];

const tools = ['3ds Max', 'Corona Renderer', 'Photoshop', 'Illustrator', 'After Effects', 'Marvelous Designer'];

const values = [
  { title: 'Clarity', text: 'Make the product easy to understand and easier to trust.', icon: Eye },
  { title: 'Premium detail', text: 'Use lighting, materials, and composition to increase perceived value.', icon: Sparkles },
  { title: 'Reliability', text: 'Work with organized communication, structured steps, and careful delivery.', icon: Handshake },
  { title: 'Commercial purpose', text: 'Create visuals that support positioning, launches, and sales environments.', icon: Target },
];

export function About() {
  return (
    <>
      <SEO
        title="About"
        description="Maherison Daddy is a Premium Product Visualization Specialist in Madagascar creating premium CGI for Amazon sellers, e-commerce brands, and modern businesses."
        canonicalPath="/about"
      />

      <PageWrapper className="py-20 md:py-28">
        <section className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div className="relative order-2 lg:order-1" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="absolute -inset-5 rounded-[2.5rem] bg-[#F5A623]/10 blur-3xl" />
            <div className="image-glow surface-card relative overflow-hidden rounded-[2rem] p-6 md:p-8">
              <div className="aspect-[4/5] rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(245,166,35,0.22),transparent_32%),linear-gradient(145deg,#181818,#0d0d0d)] p-6">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Based in Madagascar</p>
                    <h2 className="mt-5 text-4xl font-semibold leading-none tracking-[-0.05em] text-[#F5F5F5] md:text-6xl">Premium CGI for products that need to look trusted.</h2>
                  </div>
                  <div className="grid gap-3">
                    {['Amazon sellers', 'E-commerce brands', 'Modern businesses'].map((item) => (
                      <div className="rounded-2xl border border-white/10 bg-black/25 p-4" key={item}>
                        <p className="font-semibold text-[#F5F5F5]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="order-1 lg:order-2" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.55 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">About Maherison Daddy</p>
            <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#F5F5F5] md:text-8xl">Premium Product Visualization Specialist</h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#A3A3A3] md:text-xl md:leading-9">
              I create premium CGI for Amazon sellers, e-commerce brands, and modern businesses that need product visuals with stronger clarity, perceived value, and commercial trust.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <SkillBadge>Maherison Daddy</SkillBadge>
              <SkillBadge>Madagascar</SkillBadge>
              <SkillBadge>Premium CGI</SkillBadge>
            </div>
          </motion.div>
        </section>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-24">
        <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1fr]">
          <SectionHeader eyebrow="Professional introduction" title="Product visuals shaped around business outcomes." align="left" />
          <div className="space-y-6 text-lg leading-8 text-[#A3A3A3]">
            <p>
              My work focuses on making products look credible, premium, and ready for competitive online markets. Every image is planned to support how a customer understands the product before they decide to buy.
            </p>
            <p>
              The goal is not decoration. The goal is a clear presentation that helps brands communicate quality, reduce uncertainty, and create a stronger first impression across listings, campaigns, and product launches.
            </p>
          </div>
        </section>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-24">
        <section className="glass mx-auto max-w-7xl rounded-[2rem] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Mission</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">Help strong products look as valuable as they are.</h2>
            </div>
            <p className="text-lg leading-8 text-[#A3A3A3]">
              I help businesses replace uncertain product presentation with polished CGI assets that make features, materials, scale, and brand quality easier to believe.
            </p>
          </div>
        </section>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-24">
        <SectionHeader eyebrow="Expertise" title="Focused on premium commercial visualization" text="Specialized image direction for brands that need product visuals to work harder than simple product photos." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {expertiseAreas.map((area) => (
            <div className="surface-card rounded-[1.5rem] p-7" key={area.title}>
              <PackageCheck className="text-[#F5A623]" />
              <h3 className="mt-5 text-2xl font-semibold text-[#F5F5F5]">{area.title}</h3>
              <p className="mt-4 leading-7 text-[#A3A3A3]">{area.text}</p>
            </div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-24">
        <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1fr]">
          <SectionHeader eyebrow="Process philosophy" title="A disciplined process creates a more dependable result." align="left" text="Before tools matter, the strategy matters: what should the customer notice, trust, and remember?" />
          <div className="space-y-4">
            {processSteps.map((step, index) => (
              <div className="surface-card flex gap-5 rounded-[1.5rem] p-5" key={step}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F5A623] text-sm font-bold text-black">0{index + 1}</span>
                <p className="self-center text-lg leading-7 text-[#F5F5F5]">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-24">
        <SectionHeader eyebrow="Tools" title="A production pipeline for polished product visuals" text="After the business goal is defined, these tools support modeling, rendering, post-production, motion, and fabric detail when the project requires it." />
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div className="surface-card rounded-[1.5rem] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#F5A623]/40" key={tool}>
              <BadgeCheck className="mx-auto text-[#F5A623]" />
              <p className="mt-4 font-semibold text-[#F5F5F5]">{tool}</p>
            </div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-24">
        <SectionHeader eyebrow="Values" title="The standards behind each project" />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, text, icon: Icon }) => (
            <div className="surface-card rounded-[1.5rem] p-6" key={title}>
              <Icon className="text-[#F5A623]" />
              <h3 className="mt-5 text-xl font-semibold text-[#F5F5F5]">{title}</h3>
              <p className="mt-3 leading-7 text-[#A3A3A3]">{text}</p>
            </div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-24">
        <section className="glass mx-auto max-w-7xl rounded-[2rem] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#F5A623]/12 text-[#F5A623]"><LockKeyhole /></div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Confidential work note</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-5xl">Commercial trust includes discretion.</h2>
              <p className="mt-5 max-w-4xl leading-8 text-[#A3A3A3]">
                Some commercial work remains confidential to protect client-sensitive launches, product data, campaign direction, and brand information. Relevant experience can be discussed without exposing private details.
              </p>
            </div>
          </div>
        </section>
      </PageWrapper>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="surface-card mx-auto max-w-6xl rounded-[2rem] p-8 text-center md:p-16">
          <Lightbulb className="mx-auto text-[#F5A623]" size={34} />
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">Let&apos;s Elevate Your Product</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#A3A3A3]">Bring your product into a premium CGI presentation designed to improve perceived value, clarity, and brand trust.</p>
          <Button className="mt-8" to="/contact">Start the conversation <ArrowRight size={18} /></Button>
        </div>
      </section>
    </>
  );
}
