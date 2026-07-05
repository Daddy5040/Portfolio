import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Instagram, Linkedin, Mail, MapPin, Palette, PenTool, Phone, Send, Sparkles } from 'lucide-react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { Button, PageWrapper, SEO, SectionHeader } from '../components';

const inputClass = 'rounded-2xl border border-white/10 bg-[#0D0D0D] px-4 py-3 text-[#F5F5F5] outline-none transition placeholder:text-[#A3A3A3] focus:border-[#F5A623]/70 focus:ring-2 focus:ring-[#F5A623]/20';

const contactCards = [
  { label: 'Email', value: 'hello@vantaforge.studio', icon: Mail },
  { label: 'Phone', value: '+1 (555) 013-2048', icon: Phone },
  { label: 'Location', value: 'Remote worldwide / New York, USA', icon: MapPin },
  { label: 'Availability', value: 'Booking select projects for Q3', icon: Sparkles },
];

const socialLinks = [
  { label: 'LinkedIn', handle: '/in/vantaforge', href: 'https://www.linkedin.com/', icon: Linkedin },
  { label: 'ArtStation', handle: '/vantaforge', href: 'https://www.artstation.com/', icon: Palette },
  { label: 'Behance', handle: '/vantaforge', href: 'https://www.behance.net/', icon: PenTool },
  { label: 'GitHub', handle: '@vantaforge', href: 'https://github.com/', icon: Github },
  { label: 'Instagram', handle: '@vantaforge.studio', href: 'https://www.instagram.com/', icon: Instagram },
];

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'I offer product visualization, architectural visualization, 3D modeling, texturing, lighting, animation, and post-production for brands, studios, architects, and agencies.',
  },
  {
    question: 'What software do you use?',
    answer: 'The core toolkit includes 3ds Max, Corona Renderer, Blender, Marvelous Designer, Photoshop, After Effects, and Illustrator, depending on the project needs.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Small render sets can take one to two weeks, while larger campaigns, interiors, or motion packages typically range from three to six weeks after briefing.',
  },
  {
    question: 'Can you work remotely?',
    answer: 'Yes. The workflow is built for remote collaboration with clear milestones, review rounds, shared references, and organized delivery packages.',
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
        description="Contact Vanta Forge Studio for 3D product visualization, architectural visualization, CGI, and motion design commissions."
      />
      <PageWrapper className="py-16 md:py-24">
        <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Contact</p>
            <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[#F5F5F5] md:text-8xl">Let&apos;s Build Something Extraordinary</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A3A3A3] md:text-xl md:leading-9">
              Share your brief, timeline, and creative goals. I help clients turn products, interiors, environments, and campaign ideas into polished cinematic 3D visuals.
            </p>
          </motion.div>

          <motion.form className="glass rounded-[2rem] p-6 md:p-10" onSubmit={handleSubmit} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.12, duration: 0.55 }}>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ['Name', 'text'],
                ['Email', 'email'],
                ['Company', 'text'],
                ['Project Type', 'text'],
                ['Budget', 'text'],
                ['Timeline', 'text'],
              ].map(([label, type]) => (
                <label className="space-y-2 text-sm font-semibold text-[#F5F5F5]" key={label}>
                  <span>{label}</span>
                  <input className={`${inputClass} w-full`} name={label.toLowerCase().replace(/\s+/g, '-')} placeholder={label} type={type} />
                </label>
              ))}
            </div>
            <label className="mt-5 block space-y-2 text-sm font-semibold text-[#F5F5F5]">
              <span>Message</span>
              <textarea className={`${inputClass} min-h-44 w-full resize-none`} name="message" placeholder="Tell me about the project, deliverables, timeline, and visual references." />
            </label>
            <Button type="submit" className="mt-6 w-full sm:w-auto"><Send size={18} /> Send Message</Button>
          </motion.form>
        </section>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <SectionHeader eyebrow="Contact information" title="Clear communication from first brief to final frame" />
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map(({ icon: Icon, label, value }, index) => (
            <motion.div
              className="surface-card rounded-[1.5rem] p-6"
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Icon className="text-[#F5A623]" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#F5A623]">{label}</p>
              <p className="mt-3 leading-7 text-[#F5F5F5]">{value}</p>
            </motion.div>
          ))}
        </div>
      </PageWrapper>

      <PageWrapper className="py-16 md:py-20">
        <section className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <SectionHeader eyebrow="Social" title="Find the work across creative platforms" align="left" text="Placeholder profile links for professional updates, finished renders, case studies, technical experiments, and behind-the-scenes process." />
          <div className="grid gap-3 sm:grid-cols-2">
            {socialLinks.map(({ href, icon: Icon, label, handle }) => (
              <a className="surface-card group flex items-center justify-between rounded-2xl p-5 transition hover:-translate-y-1 hover:border-[#F5A623]/40" href={href} key={label} rel="noreferrer" target="_blank">
                <span className="flex items-center gap-4">
                  <Icon className="text-[#F5A623]" />
                  <span>
                    <span className="block font-semibold text-[#F5F5F5]">{label}</span>
                    <span className="text-sm text-[#A3A3A3]">{handle}</span>
                  </span>
                </span>
                <ChevronDown className="-rotate-90 text-[#A3A3A3] transition group-hover:text-[#F5A623]" size={18} />
              </a>
            ))}
          </div>
        </section>
      </PageWrapper>

      <section className="px-5 py-16 sm:px-6 lg:px-8">
        <div className="glass mx-auto max-w-6xl rounded-[2rem] p-8 text-center md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">Credentials</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">Download the artist kit</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#A3A3A3]">Use these placeholder downloads for resume and portfolio PDF flows until final documents are added.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button to="/downloads/resume-placeholder.pdf" variant="secondary"><Download size={18} /> Download Resume</Button>
            <Button to="/downloads/portfolio-placeholder.pdf"><Download size={18} /> Download Portfolio PDF</Button>
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
                <button className="flex w-full items-center justify-between gap-5 p-6 text-left" onClick={() => setOpenFaq(isOpen ? -1 : index)} type="button">
                  <span className="text-lg font-semibold text-[#F5F5F5]">{item.question}</span>
                  <ChevronDown className={`shrink-0 text-[#F5A623] transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 leading-8 text-[#A3A3A3]">{item.answer}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </PageWrapper>
    </>
  );
}
