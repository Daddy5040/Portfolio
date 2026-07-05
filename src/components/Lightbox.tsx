import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { useEffect } from 'react';

export type GalleryItem = {
  src: string;
  thumbnail?: string;
  type?: 'image' | 'video';
  title: string;
  caption?: string;
  tag?: string;
};

export function Lightbox({ items, activeIndex, onClose, onNext, onPrevious }: { items: GalleryItem[]; activeIndex: number | null; onClose: () => void; onNext: () => void; onPrevious: () => void }) {
  const activeItem = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    if (!activeItem) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNext();
      if (event.key === 'ArrowLeft') onPrevious();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItem, onClose, onNext, onPrevious]);

  return (
    <AnimatePresence>
      {activeItem && activeIndex !== null && (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col bg-[#050505]/96 p-4 backdrop-blur-2xl md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
        >
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-[#F5A623]">{activeIndex + 1} / {items.length}</p>
            <button className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-[#121212] text-[#F5F5F5] transition hover:border-[#F5A623]/60 hover:text-[#F5A623]" onClick={onClose} type="button" aria-label="Close lightbox">
              <X size={20} />
            </button>
          </div>

          <div className="grid flex-1 place-items-center overflow-hidden">
            <div className="relative max-h-full w-full max-w-6xl">
              {activeItem.type === 'video' ? (
                <div className="grid aspect-video w-full place-items-center rounded-[1.5rem] border border-white/10 bg-[#121212]">
                  <div className="text-center">
                    <Play className="mx-auto text-[#F5A623]" size={46} />
                    <p className="mt-4 font-semibold text-[#F5F5F5]">Video preview placeholder</p>
                  </div>
                </div>
              ) : (
                <motion.img
                  key={activeItem.src}
                  className="mx-auto max-h-[70vh] w-full rounded-[1.5rem] object-contain"
                  src={activeItem.src}
                  alt={activeItem.title}
                  decoding="async"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                />
              )}

              {items.length > 1 && (
                <>
                  <button className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#050505]/80 text-[#F5F5F5] backdrop-blur transition hover:border-[#F5A623]/60 hover:text-[#F5A623] md:-left-16" onClick={onPrevious} type="button" aria-label="Previous media">
                    <ChevronLeft />
                  </button>
                  <button className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-[#050505]/80 text-[#F5F5F5] backdrop-blur transition hover:border-[#F5A623]/60 hover:text-[#F5A623] md:-right-16" onClick={onNext} type="button" aria-label="Next media">
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-xl font-semibold text-[#F5F5F5]">{activeItem.title}</p>
            {activeItem.caption && <p className="mt-2 leading-7 text-[#A3A3A3]">{activeItem.caption}</p>}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
