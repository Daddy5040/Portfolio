import { motion } from 'framer-motion';

export function SectionHeader({ eyebrow, title, text, align = 'center' }: { eyebrow: string; title: string; text?: string; align?: 'left' | 'center' }) {
  return (
    <motion.div
      className={`mb-12 max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">{eyebrow}</p>
      <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[#F5F5F5] md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-[#A3A3A3] md:text-lg">{text}</p>}
    </motion.div>
  );
}
