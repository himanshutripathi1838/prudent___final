import React from 'react';

export default function TechBadge({ name, category }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121824] border border-[#1E293B] hover:border-[#00C2CB]/40 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-[#00C2CB]"></span>
      <span>{name}</span>
    </span>
  );
}
