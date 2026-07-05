import { Maximize2, RefreshCcw, RotateCw } from 'lucide-react';
import { Button } from '../Button';

export function ViewerControls({ autoRotate, onReset, onToggleAutoRotate, onFullscreen }: { autoRotate: boolean; onReset: () => void; onToggleAutoRotate: () => void; onFullscreen: () => void }) {
  return (
    <div className="glass flex flex-col gap-3 rounded-[1.5rem] p-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-[#A3A3A3]">Orbit with drag, zoom with scroll or pinch, and use controls for presentation mode.</p>
      <div className="flex flex-wrap gap-3">
        <Button type="button" variant="secondary" className="px-4 py-2.5" onClick={onReset}><RefreshCcw size={17} /> Reset Camera</Button>
        <Button type="button" variant={autoRotate ? 'primary' : 'secondary'} className="px-4 py-2.5" onClick={onToggleAutoRotate}><RotateCw size={17} /> Toggle Auto Rotate</Button>
        <Button type="button" variant="secondary" className="px-4 py-2.5" onClick={onFullscreen}><Maximize2 size={17} /> Fullscreen</Button>
      </div>
    </div>
  );
}
