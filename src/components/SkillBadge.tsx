import type { ReactNode } from 'react';
export function SkillBadge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-[#181818] px-4 py-2 text-sm font-medium text-[#F5F5F5] transition duration-300 hover:border-[#F5A623]/60 hover:bg-[#F5A623]/10">
      {children}
    </span>
  );
}
