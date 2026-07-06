import { Maximize2, RefreshCcw, RotateCw } from 'lucide-react';
import { Button } from '../Button';

export function ViewerControls({
  autoRotate,
  onReset,
  onToggleAutoRotate,
  onFullscreen,
}: {
  autoRotate: boolean;
  onReset: () => void;
  onToggleAutoRotate: () => void;
  onFullscreen: () => void;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-[#090909]/80 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
      <p className="max-w-2xl text-sm leading-6 text-[#A3A3A3]">
        Drag to orbit, scroll or pinch to zoom, and use the minimal controls for presentation mode.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button type="button" variant="secondary" className="px-4 py-2.5" onClick={onReset} aria-label="Reset 3D viewer camera">
          <RefreshCcw size={17} /> Reset
        </Button>
        <Button
          type="button"
          variant={autoRotate ? 'primary' : 'secondary'}
          className="px-4 py-2.5"
          onClick={onToggleAutoRotate}
          aria-pressed={autoRotate}
          aria-label={`${autoRotate ? 'Disable' : 'Enable'} auto rotate`}
        >
          <RotateCw size={17} /> {autoRotate ? 'Rotating' : 'Rotate'}
        </Button>
        <Button type="button" variant="secondary" className="px-4 py-2.5" onClick={onFullscreen} aria-label="Open 3D viewer fullscreen">
          <Maximize2 size={17} /> Fullscreen
        </Button>
      </div>
    </div>
  );
}
