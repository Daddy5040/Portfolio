import { motion } from 'framer-motion';
import { ChevronDown, CheckCircle2, Clock, Mail, MapPin, Phone, Send, ShieldCheck } from 'lucide-react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { Button, PageWrapper, SEO, SectionHeader } from '../components';

const fieldClass = 'rounded-2xl border border-white/10 bg-[#0D0D0D] px-4 py-3 text-[#F5F5F5] outline-none transition placeholder:text-[#A3A3A3] focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/40 focus-visible:border-[#F5A623] focus-visible:ring-2 focus-visible:ring-[#F5A623]/50';

const projectTypes = [
  'Amazon A+ Content',
  'Product Rendering',
  'Packaging Visualization',
  'Lifestyle Images',
  'Product Animation',
  'Other',
];

const budgetRanges = ['Under $1,000', '$1,000 – $3,000', '$3,000 – $5,000', '$5,000+', 'Not sure yet'];
const timelines = ['ASAP', '2–4 weeks', '1–2 months', 'Flexible', 'Not sure yet'];

const briefItems = [
  'Product name, category, and the main business goal for the visuals.',
  'Deliverables needed, such as image count, animation length, or platform sizes.',
  'Existing brand assets, packaging files, CAD models, references, or competitor examples.',
  'Preferred style direction, must-have angles, deadlines, and approval stakeholders.',
];

const contactDetails = [
  { label: 'Email', value: 'contact@example.com', icon: Mail },
  { label: 'Phone', value: '+261 XX XX XXX XX', icon: Phone },
  { label: 'Location', value: 'Madagascar', icon: MapPin },
];

const faqs = [
  {
    question: 'What happens after I send an inquiry?',
    answer: 'Your brief is reviewed against the project type, timeline, and deliverables. The next step is a clear reply with recommended scope, questions, and a practical path forward.',
  },
  {
    question: 'Do I need a complete brief before reaching out?',
    answer: 'No. A complete brief helps, but you can start with the essentials: product type, goal, timeline, and any references. Missing details can be clarified before production begins.',
  },
  {
    question: 'Can you help define the right visual package?',
    answer: 'Yes. If you are unsure whether you need Amazon A+ images, renders, lifestyle visuals, packaging views, or animation, the inquiry can be used to recommend a focused package.',
  },
  {
    question: 'Does the form submit to a backend?',
    answer: 'Not yet. This page is prepared as a project inquiry experience, but backend form handling can be connected in a future sprint.',
  },
];

export function Contact() {
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Send a project inquiry for Amazon A+ Content, product rendering, packaging visualization, lifestyle images, and product animation."
      />

      <PageWrapper className="py-16 md:py-24">
        <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Project inquiry</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#F5F5F5] md:text-8xl">
              Start Your Product Visual Project With Clarity
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A3A3A3] md:text-xl md:leading-9">
              Share the essentials in one focused brief. The goal is to understand your product, business objective, timeline, and deliverables so the next step feels simple, professional, and low-risk.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Clear scope', 'Remote workflow', 'Business-focused visuals'].map((item) => (
                <div className="surface-card flex items-center gap-3 rounded-2xl p-4" key={item}>
                  <CheckCircle2 className="shrink-0 text-[#F5A623]" size={18} />
                  <span className="text-sm font-semibold text-[#F5F5F5]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            aria-label="Project inquiry form"
            id="project-inquiry"
            className="glass rounded-[2rem] p-6 md:p-10"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12, duration: 0.55 }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">Project inquiry form</h2>
              <p className="mt-2 leading-7 text-[#A3A3A3]">Use this form to outline the project. No backend is connected yet, so the fields are ready for a future submission workflow.</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-semibold text-[#F5F5F5]">
                <span>Name</span>
                <input className={`${fieldClass} w-full`} name="name" placeholder="Your name" type="text" />
              </label>
              <label className="space-y-2 text-sm font-semibold text-[#F5F5F5]">
                <span>Email</span>
                <input className={`${fieldClass} w-full`} name="email" placeholder="contact@example.com" type="email" />
              </label>
              <label className="space-y-2 text-sm font-semibold text-[#F5F5F5]">
                <span>Company / Brand</span>
                <input className={`${fieldClass} w-full`} name="company-brand" placeholder="Company or brand name" type="text" />
              </label>
              <label className="space-y-2 text-sm font-semibold text-[#F5F5F5]">
                <span>Project Type</span>
                <select className={`${fieldClass} w-full`} defaultValue="" name="project-type">
                  <option value="" disabled>Select project type</option>
                  {projectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </label>
              <label className="space-y-2 text-sm font-semibold text-[#F5F5F5]">
                <span>Budget Range</span>
                <select className={`${fieldClass} w-full`} defaultValue="" name="budget-range">
                  <option value="" disabled>Select budget range</option>
                  {budgetRanges.map((range) => <option key={range} value={range}>{range}</option>)}
                </select>
              </label>
              <label className="space-y-2 text-sm font-semibold text-[#F5F5F5]">
                <span>Timeline</span>
                <select className={`${fieldClass} w-full`} defaultValue="" name="timeline">
                  <option value="" disabled>Select timeline</option>
                  {timelines.map((timeline) => <option key={timeline} value={timeline}>{timeline}</option>)}
                </select>
              </label>
            </div>
            <label className="mt-5 block space-y-2 text-sm font-semibold text-[#F5F5F5]">
              <span>Message</span>
              <textarea className={`${fieldClass} min-h-44 w-full resize-y`} name="message" placeholder="Tell me about the product, goals, required deliverables, references, and any launch deadline." />
            </label>
            <Button type="submit" className="mt-6 w-full justify-center sm:w-auto"><Send size={18} /> Send Project Inquiry</Button>
          </motion.form>
        </section>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <SectionHeader eyebrow="Brief checklist" title="What to include in your brief" align="left" text="A strong inquiry does not need to be long. These details help estimate scope, timeline, and production needs more accurately." />
          <div className="grid gap-4 sm:grid-cols-2">
            {briefItems.map((item, index) => (
              <div className="surface-card rounded-[1.5rem] p-6" key={item}>
                <span className="text-sm font-semibold text-[#F5A623]">0{index + 1}</span>
                <p className="mt-4 leading-7 text-[#F5F5F5]">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Contact details" title="Simple ways to prepare the conversation" />
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {contactDetails.map(({ icon: Icon, label, value }) => (
            <div className="surface-card rounded-[1.5rem] p-6" key={label}>
              <Icon className="text-[#F5A623]" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">{label}</p>
              <p className="mt-3 leading-7 text-[#F5F5F5]">{value}</p>
            </div>
          ))}
        </div>
      </PageWrapper>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="glass mx-auto grid max-w-6xl gap-8 rounded-[2rem] p-8 md:grid-cols-[auto_1fr] md:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5A623]/15 text-[#F5A623]"><Clock size={30} /></div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Availability</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">Open for selected product visualization projects</h2>
            <p className="mt-5 max-w-3xl leading-8 text-[#A3A3A3]">New inquiries are reviewed for fit, scope, and timing. If the project is a strong match, the next step is a clear discussion around deliverables, references, review rounds, and production schedule.</p>
          </div>
        </div>
      </section>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="FAQ" title="Questions before starting a project" />
        <div className="mx-auto max-w-4xl space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div className="surface-card overflow-hidden rounded-2xl" key={item.question}>
                <button className="flex w-full items-center justify-between gap-5 p-6 text-left outline-none transition focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F5A623]" onClick={() => setOpenFaq(isOpen ? -1 : index)} type="button" aria-expanded={isOpen}>
                  <span className="text-lg font-semibold text-[#F5F5F5]">{item.question}</span>
                  <ChevronDown className={`shrink-0 text-[#F5A623] transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                  <p className="px-6 pb-6 leading-8 text-[#A3A3A3]">{item.answer}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </PageWrapper>

      <section className="px-5 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="glass mx-auto max-w-6xl rounded-[2rem] p-8 text-center md:p-12">
          <ShieldCheck className="mx-auto text-[#F5A623]" size={34} />
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Ready when your brief is ready</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">Send the essentials and define the next step</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#A3A3A3]">Use the inquiry form to organize your project details. A focused brief makes it easier to scope the work, reduce uncertainty, and move toward production with confidence.</p>
          <Button to="#project-inquiry" className="mt-8"><Send size={18} /> Send Project Inquiry</Button>
        </div>
      </section>
    </>
  );
}
