import { motion } from 'framer-motion';
import { Image, Play } from 'lucide-react';
import { useCallback, useState } from 'react';
import { Lightbox, type GalleryItem } from './Lightbox';
import { imageRevealVariants, premiumEase } from '../lib/animations';

export type { GalleryItem } from './Lightbox';

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemCount = items.length;

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => current === null ? current : (current - 1 + itemCount) % itemCount);
  }, [itemCount]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => current === null ? current : (current + 1) % itemCount);
  }, [itemCount]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const isFeature = index === 0;

          return (
            <motion.button
              className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#121212] text-left premium-hover-lift hover:border-[#F5A623]/45 hover:shadow-[0_24px_80px_rgba(0,0,0,0.42)] ${isFeature ? 'sm:col-span-2' : ''}`}
              key={`${item.src}-${index}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.05, duration: 0.62, ease: premiumEase }}
              whileHover={{ scale: 1.012 }}
              whileTap={{ scale: 0.985 }}
              onClick={() => setActiveIndex(index)}
              type="button"
              aria-label={`Open ${item.title} in lightbox`}
            >
              <motion.div className={`image-reveal-mask ${isFeature ? 'aspect-[16/9]' : 'aspect-[4/3]'} overflow-hidden`} variants={imageRevealVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.9, ease: premiumEase }}>
                {item.type === 'video' && !item.thumbnail ? (
                  <div className="grid h-full w-full place-items-center bg-[#181818] premium-transition group-hover:scale-[1.07]">
                    <Play className="text-[#F5A623]" size={42} />
                  </div>
                ) : (
                  <img className="h-full w-full object-cover premium-transition group-hover:scale-[1.07]" src={item.thumbnail ?? item.src} alt={item.title} loading="lazy" decoding="async" />
                )}
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/10 to-transparent opacity-90" />
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-[#050505]/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5A623] backdrop-blur">
                {item.type === 'video' ? <Play size={14} /> : <Image size={14} />}
                {item.tag ?? item.type ?? 'image'}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-lg font-semibold text-[#F5F5F5]">{item.title}</p>
                {item.caption && <p className="mt-2 text-sm leading-6 text-[#A3A3A3]">{item.caption}</p>}
              </div>
            </motion.button>
          );
        })}
      </div>

      <Lightbox activeIndex={activeIndex} items={items} onClose={() => setActiveIndex(null)} onNext={showNext} onPrevious={showPrevious} />
    </>
  );
}
