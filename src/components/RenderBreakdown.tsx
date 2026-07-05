import { motion } from 'framer-motion';
import { useState } from 'react';

export type RenderBreakdownData = {
  wireframeImage?: string;
  clayImage?: string;
  finalImage?: string;
  breakdownNotes: {
    wireframe: string;
    clay: string;
    final: string;
  };
  software: string[];
};

type BreakdownState = 'wireframe' | 'clay' | 'final';

const states: Array<{ id: BreakdownState; label: string; caption: string }> = [
  { id: 'wireframe', label: 'Wireframe', caption: 'Structure, topology, proportions, and composition before materials.' },
  { id: 'clay', label: 'Clay', caption: 'Neutral render pass for lighting, form, scale, and silhouette review.' },
  { id: 'final', label: 'Final', caption: 'Final material, lighting, render, and post-production treatment.' },
];

export function RenderBreakdown({ breakdown }: { breakdown: RenderBreakdownData }) {
  const [activeState, setActiveState] = useState<BreakdownState>('wireframe');
  const activeImage = activeState === 'wireframe' ? breakdown.wireframeImage : activeState === 'clay' ? breakdown.clayImage : breakdown.finalImage;
  const activeMeta = states.find((state) => state.id === activeState) ?? states[0];
  const hasAllImages = Boolean(breakdown.wireframeImage && breakdown.clayImage && breakdown.finalImage);

  if (!hasAllImages) {
    return (
      <div className="surface-card rounded-[1.75rem] p-7 text-center md:p-9">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F5A623]">Render Breakdown</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">Breakdown images unavailable</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#A3A3A3]">Wireframe, clay, and final render images can be added to the centralized project data to enable this comparison.</p>
      </div>
    );
  }

  return (
    <section className="surface-card overflow-hidden rounded-[1.75rem] p-5 md:p-7">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.42fr]">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0D0D0D]">
          <motion.img
            key={activeImage}
            className="aspect-[16/10] w-full object-cover"
            src={activeImage}
            alt={`${activeMeta.label} render breakdown`}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, scale: 1.015 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28 }}
          />
          <div className="absolute left-5 top-5 rounded-full bg-[#050505]/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F5A623] backdrop-blur">
            {activeMeta.label}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F5A623]">Render Breakdown</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">Wireframe to final frame</h2>
            <p className="mt-4 leading-8 text-[#A3A3A3]">{activeMeta.caption}</p>
            <p className="mt-4 leading-8 text-[#A3A3A3]">{breakdown.breakdownNotes[activeState]}</p>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-2 rounded-full border border-white/10 bg-[#0D0D0D] p-1">
              {states.map((state) => (
                <button
                  className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${activeState === state.id ? 'bg-[#F5A623] text-black' : 'text-[#A3A3A3] hover:text-[#F5F5F5]'}`}
                  key={state.id}
                  onClick={() => setActiveState(state.id)}
                  type="button"
                  aria-pressed={activeState === state.id}
                >
                  {state.label}
                </button>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {breakdown.software.map((software) => (
                <span className="rounded-full border border-white/10 bg-[#181818] px-3 py-1 text-xs text-[#A3A3A3]" key={software}>{software}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
