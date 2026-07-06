import { CheckCircle2, FolderOpen } from 'lucide-react';
import type { ViewerModel } from '../../data';
import { SkillBadge } from '../SkillBadge';

export function ModelInfoPanel({ model }: { model: ViewerModel }) {
  return (
    <aside className="rounded-[1.75rem] border border-white/10 bg-[#090909]/85 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F5A623]">Model Info</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">{model.name}</h2>
      <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">{model.description}</p>

      <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-3 lg:grid-cols-1">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#F5A623]">Category</dt>
          <dd className="mt-2 text-[#F5F5F5]">{model.category}</dd>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#F5A623]">Geometry</dt>
          <dd className="mt-2 text-[#F5F5F5]">{model.polycount}</dd>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#F5A623]">Engine</dt>
          <dd className="mt-2 text-[#F5F5F5]">{model.renderEngine}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5A623]">Client value</p>
        <ul className="mt-3 space-y-3 text-sm leading-6 text-[#D7D7D7]">
          {model.benefits.map((benefit) => (
            <li key={benefit} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F5A623]" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-2xl border border-[#F5A623]/20 bg-[#F5A623]/10 p-4">
        <div className="flex items-start gap-3">
          <FolderOpen className="mt-0.5 h-4 w-4 shrink-0 text-[#F5A623]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5A623]">GLB placement</p>
            <p className="mt-2 text-sm leading-6 text-[#D7D7D7]">{model.placementNote}</p>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5A623]">Production tools</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {model.software.map((software) => <SkillBadge key={software}>{software}</SkillBadge>)}
        </div>
      </div>
    </aside>
  );
}
