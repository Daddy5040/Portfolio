import { motion } from 'framer-motion';
import { Box, RotateCw } from 'lucide-react';
import { useRef, useState } from 'react';
import { ModelInfoPanel, ModelViewer, PageWrapper, SectionHeader, SEO, ViewerControls } from '../components';
import { featuredViewerModel } from '../data';

export function Viewer() {
  const [autoRotate, setAutoRotate] = useState(true);
  const [resetSignal, setResetSignal] = useState(0);
  const viewerRef = useRef<HTMLDivElement>(null);

  const resetCamera = () => setResetSignal((value) => value + 1);
  const toggleAutoRotate = () => setAutoRotate((value) => !value);
  const openFullscreen = () => viewerRef.current?.requestFullscreen?.();

  return (
    <PageWrapper className="py-10 md:py-14">
      <SEO
        title="3D Viewer"
        description="Inspect product visualization model previews in an interactive premium WebGL viewer with orbit, zoom, fullscreen, and auto-rotate controls."
      />
      <section className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.38fr]">
          <div>
            <SectionHeader
              eyebrow="3D Viewer"
              title="Interactive model preview"
              text="Inspect GLB and GLTF assets in a cinematic WebGL canvas with orbit controls, zoom, auto-rotation, and presentation-ready UI."
              align="left"
            />
            <div ref={viewerRef} className="relative">
              <motion.div
                className="absolute -inset-5 rounded-[2.5rem] bg-[#F5A623]/10 blur-3xl"
                animate={{ opacity: [0.45, 0.75, 0.45] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative">
                <ModelViewer autoRotate={autoRotate} model={featuredViewerModel} resetSignal={resetSignal} />
              </div>
            </div>
          </div>

          <div className="space-y-4 lg:pt-32">
            <ModelInfoPanel model={featuredViewerModel} />
            <div className="surface-card rounded-[1.5rem] p-5">
              <div className="flex items-center gap-3 text-[#F5F5F5]"><Box className="text-[#F5A623]" /> Model Path</div>
              <p className="mt-3 break-all rounded-2xl bg-[#0D0D0D] p-3 text-sm text-[#A3A3A3]">{featuredViewerModel.path}</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-[#A3A3A3]"><RotateCw size={16} className="text-[#F5A623]" /> Auto rotate is {autoRotate ? 'enabled' : 'disabled'}.</p>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <ViewerControls autoRotate={autoRotate} onFullscreen={openFullscreen} onReset={resetCamera} onToggleAutoRotate={toggleAutoRotate} />
        </div>
      </section>
    </PageWrapper>
  );
}
