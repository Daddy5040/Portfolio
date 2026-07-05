import type { ViewerModel } from '../../data';
import { SkillBadge } from '../SkillBadge';

export function ModelInfoPanel({ model }: { model: ViewerModel }) {
  return (
    <aside className="glass rounded-[1.75rem] p-6 md:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F5A623]">Model Info</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#F5F5F5]">{model.name}</h2>
      <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">{model.description}</p>

      <dl className="mt-6 space-y-5">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5A623]">Category</dt>
          <dd className="mt-2 text-[#F5F5F5]">{model.category}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5A623]">Polycount</dt>
          <dd className="mt-2 text-[#F5F5F5]">{model.polycount}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5A623]">Render Engine</dt>
          <dd className="mt-2 text-[#F5F5F5]">{model.renderEngine}</dd>
        </div>
      </dl>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F5A623]">Software Used</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {model.software.map((software) => <SkillBadge key={software}>{software}</SkillBadge>)}
        </div>
      </div>
    </aside>
  );
}
