import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  ChevronDown,
  Gem,
  Layers3,
  PackageCheck,
  PlayCircle,
  ShoppingBag,
  Sparkles,
  Target,
} from 'lucide-react';
import { Button, PageWrapper, SectionHeader, SEO } from '../components';

const services = [
  {
    title: 'Amazon A+ Content',
    text: 'Premium modules that explain product value quickly and make detail pages feel more trustworthy.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Packaging Visualization',
    text: 'Launch-ready packaging visuals before full production, sampling, or campaign photography.',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Product Rendering',
    text: 'Photorealistic product images that raise perceived value across listings, ads, and web pages.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Lifestyle Images',
    text: 'Aspirational product scenes that communicate context, scale, mood, and customer desire.',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Hero Images',
    text: 'Clean, high-impact visuals for Amazon main images, launch pages, paid ads, and brand storefronts.',
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Product Animation',
    text: 'Short cinematic motion assets that reveal benefits, materials, details, and product use.',
    image: 'https://images.unsplash.com/photo-1635776062043-223faf322554?auto=format&fit=crop&w=1200&q=85',
  },
];

const deliverables = [
  'Amazon-ready image sets',
  'Hero and secondary listing images',
  'Lifestyle CGI scenes',
  'Packaging and label renders',
  'Detail and benefit close-ups',
  'Short animation assets',
  'Campaign crops for ads and web',
  'Final export package',
];

const workflow = [
  ['01', 'Brief', 'Product, audience, market position, and sales objective.'],
  ['02', 'Direction', 'Visual references, shot list, messaging, and premium art direction.'],
  ['03', 'Production', 'Scene creation, materials, lighting, rendering, and image polish.'],
  ['04', 'Review', 'Focused preview rounds to refine clarity, quality, and conversion value.'],
  ['05', 'Delivery', 'Final files prepared for Amazon, e-commerce, ads, and launch use.'],
];

const reasons = [
  { icon: Target, title: 'Built for buyers', text: 'Every visual is planned around product clarity, perceived value, and purchase confidence.' },
  { icon: Gem, title: 'Premium taste', text: 'Luxury studio direction keeps the product elevated without making the interface or scene feel loud.' },
  { icon: ShoppingBag, title: 'E-commerce aware', text: 'Assets are shaped for Amazon listings, storefronts, launch campaigns, and brand websites.' },
];

const faqs = [
  ['What do you need to start?', 'Product photos, dimensions, labels or packaging files, brand direction, and the assets you need delivered.'],
  ['Can you create visuals before samples exist?', 'Yes. Packaging, launch imagery, and CGI scenes can be created from references and production details.'],
  ['Do you work with Amazon sellers?', 'Yes. The service is designed for Amazon sellers, e-commerce brands, and product teams that need premium listing assets.'],
  ['How is pricing handled?', 'Pricing is scoped around deliverables, complexity, usage, timeline, and the amount of creative direction required.'],
];

export function Services() {
  return (
    <>
      <SEO
        title="Services"
        description="Premium CGI services for Amazon sellers and e-commerce brands, including Amazon A+ content, packaging visualization, product rendering, lifestyle images, hero images, and product animation."
      />

      <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="absolute left-1/2 top-10 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#F5A623]/15 blur-[130px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#F5A623]">
              <Sparkles size={16} /> Services for product brands
            </div>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.07em] text-[#F5F5F5] sm:text-6xl md:text-8xl">
              Premium product visuals that help brands <span className="gold-gradient">sell with confidence</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#A3A3A3] md:text-xl md:leading-9">
              CGI image systems for Amazon sellers and e-commerce teams who need stronger listings, clearer product value, and a more elevated brand presence.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button to="/contact">Start Your Project <ArrowRight size={18} /></Button>
              <Button to="/portfolio" variant="secondary">View Work</Button>
            </div>
          </motion.div>

          <motion.div className="surface-card overflow-hidden rounded-[2rem] p-4" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12, duration: 0.65 }}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#121212]">
              <img className="h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1400&q=85" alt="Premium e-commerce product visuals placeholder" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#F5A623]/10" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#050505]/75 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.28em] text-[#F5A623]">Listing-ready assets</p>
                <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">Hero, lifestyle, detail, A+ and motion visuals.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <PageWrapper className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1fr]">
          <SectionHeader align="left" eyebrow="The problem" title="Good products lose value when the visuals feel average" text="Buyers compare in seconds. If the listing does not communicate quality, scale, features, and trust immediately, the product feels easier to ignore." />
          <div className="grid gap-4 sm:grid-cols-2">
            {['Unclear benefits', 'Flat listing images', 'Weak premium perception', 'Inconsistent launch assets'].map((item) => (
              <div className="rounded-2xl border border-white/10 bg-[#121212] p-6" key={item}>
                <PackageCheck className="text-[#F5A623]" size={22} />
                <p className="mt-5 text-xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Services" title="Focused services for premium e-commerce presentation" text="Everything is designed to make the product clearer, more desirable, and easier to trust." />
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article className="surface-card group overflow-hidden rounded-[1.5rem]" key={service.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ delay: index * 0.04 }}>
              <div className="aspect-[4/3] overflow-hidden bg-[#0D0D0D]">
                <img className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-95" src={service.image} alt={`${service.title} placeholder`} loading="lazy" decoding="async" />
              </div>
              <div className="p-6 md:p-7">
                <Layers3 className="text-[#F5A623]" />
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">{service.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1fr]">
          <SectionHeader align="left" eyebrow="Deliverables" title="Assets prepared for launch, listing, and campaign use" text="A concise export package built around where the visuals need to perform." />
          <div className="grid gap-3 sm:grid-cols-2">
            {deliverables.map((item) => (
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4" key={item}>
                <CheckCircle2 className="shrink-0 text-[#F5A623]" size={18} />
                <p className="text-sm font-medium text-[#F5F5F5]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Workflow" title="A calm process from brief to final assets" text="Clear milestones keep production efficient, polished, and aligned with the commercial goal." />
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-5">
          {workflow.map(([number, title, text]) => (
            <div className="rounded-2xl border border-white/10 bg-[#121212] p-6" key={title}>
              <span className="text-sm font-semibold text-[#F5A623]">{number}</span>
              <h3 className="mt-5 text-xl font-semibold text-[#F5F5F5]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">{text}</p>
            </div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Why Maherison" title="Luxury creative direction with commercial discipline" text="The work balances premium taste with practical assets sellers can actually use." />
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div className="surface-card rounded-[1.5rem] p-7" key={title}>
              <Icon className="text-[#F5A623]" size={24} />
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[#F5F5F5]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">{text}</p>
            </div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <div className="glass mx-auto grid max-w-6xl gap-8 rounded-[2rem] p-8 md:p-12 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <BadgeDollarSign className="text-[#F5A623]" size={28} />
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.05em] text-[#F5F5F5] md:text-5xl">Pricing follows the value of the asset set</h2>
          </div>
          <p className="text-base leading-8 text-[#A3A3A3] md:text-lg">
            Each project is quoted around scope, complexity, timeline, usage, and the number of final visuals. The goal is simple: invest where better presentation can improve trust, launch quality, and buyer confidence.
          </p>
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="FAQ" title="Simple answers before we start" />
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map(([question, answer]) => (
            <details className="group rounded-2xl border border-white/10 bg-[#121212] p-6" key={question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-[#F5F5F5]">
                {question}
                <ChevronDown className="shrink-0 text-[#F5A623] transition group-open:rotate-180" size={20} />
              </summary>
              <p className="mt-4 text-sm leading-7 text-[#A3A3A3]">{answer}</p>
            </details>
          ))}
        </div>
      </PageWrapper>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="glass mx-auto max-w-6xl overflow-hidden rounded-[2rem] p-8 text-center md:p-16">
          <PlayCircle className="mx-auto text-[#F5A623]" size={34} />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Ready for a stronger listing?</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">Let’s create product visuals that feel premium before the first click</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#A3A3A3]">Share the product, the goal, and the assets you need. I’ll help shape a focused visual plan.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button to="/contact">Start Your Project <ArrowRight size={18} /></Button>
            <Button to="/portfolio" variant="secondary">View Work</Button>
          </div>
        </div>
      </section>
    </>
  );
}
