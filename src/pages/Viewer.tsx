import { motion } from 'framer-motion';
import { Box, Compass, FolderOpen, RotateCw } from 'lucide-react';
import { useRef, useState } from 'react';
import { PageWrapper } from '../components/PageWrapper';
import { SEO } from '../components/SEO';
import { ModelInfoPanel } from '../components/viewer/ModelInfoPanel';
import { ModelViewer } from '../components/viewer/ModelViewer';
import { ViewerControls } from '../components/viewer/ViewerControls';
import { featuredViewerModel } from '../data';

export function Viewer() {
  const [autoRotate, setAutoRotate] = useState(true);
  const [resetSignal, setResetSignal] = useState(0);
  const viewerRef = useRef<HTMLDivElement>(null);

  const resetCamera = () => setResetSignal((value) => value + 1);
  const toggleAutoRotate = () => setAutoRotate((value) => !value);
  const openFullscreen = () => viewerRef.current?.requestFullscreen?.();

  return (
    <PageWrapper className="py-8 md:py-12">
      <SEO
        title="3D Viewer"
        description="Present interactive product models in a premium WebGL viewer for client review, product marketing, and immersive digital experiences."
        canonicalPath="/viewer"
      />
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623]">3D Viewer</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#F5F5F5] md:text-6xl">
              Premium interactive product presentation.
            </h1>
            <p className="mt-5 text-base leading-8 text-[#A3A3A3] md:text-lg">
              Showcase web-ready GLB models in a focused, client-facing environment that helps buyers inspect details, understand form, and experience products with more confidence.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[#F5A623]/20 bg-[#F5A623]/10 p-4 text-sm leading-6 text-[#D7D7D7] lg:max-w-sm">
            <div className="flex items-center gap-3 font-semibold text-[#F5F5F5]"><FolderOpen className="h-5 w-5 text-[#F5A623]" /> Asset location</div>
            <p className="mt-2">Place models in <span className="text-[#F5A623]">public/models</span>, then reference them as <span className="text-[#F5A623]">/models/file-name.glb</span>.</p>
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_25rem]">
          <div ref={viewerRef} className="relative">
            <motion.div
              className="absolute -inset-6 rounded-[2.75rem] bg-[#F5A623]/10 blur-3xl"
              animate={{ opacity: [0.35, 0.7, 0.35] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative space-y-4">
              <ModelViewer autoRotate={autoRotate} model={featuredViewerModel} resetSignal={resetSignal} />
              <ViewerControls autoRotate={autoRotate} onFullscreen={openFullscreen} onReset={resetCamera} onToggleAutoRotate={toggleAutoRotate} />
            </div>
          </div>

          <div className="space-y-4">
            <ModelInfoPanel model={featuredViewerModel} />
            <div className="rounded-[1.5rem] border border-white/10 bg-[#090909]/80 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-[#F5F5F5]"><Box className="text-[#F5A623]" /> Active model path</div>
              <p className="mt-3 break-all rounded-2xl border border-white/10 bg-[#050505] p-3 text-sm text-[#A3A3A3]">{featuredViewerModel.path}</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-[#A3A3A3]"><RotateCw size={16} className="text-[#F5A623]" /> Auto rotate is {autoRotate ? 'enabled' : 'disabled'}.</p>
              <p className="mt-3 flex items-center gap-2 text-sm text-[#A3A3A3]"><Compass size={16} className="text-[#F5A623]" /> Reset returns the camera to the presentation angle.</p>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
