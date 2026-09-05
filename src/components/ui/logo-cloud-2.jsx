import React from 'react';
import { PlusIcon } from 'lucide-react';

export function LogoCard({ logo, className = "", children, ...props }) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-[#131B2E] px-4 py-8 md:p-8 hover:bg-[#18233C] transition-colors border-slate-800 ${className}`}
      {...props}
    >
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#0A0E14] border border-[#00E5FF]/40 text-[#00E5FF] mb-3 shadow-lg group-hover:scale-110 transition-transform">
        {logo.icon ? (
          logo.icon
        ) : (
          <img
            alt={logo.alt || logo.title}
            className="pointer-events-none h-6 select-none object-contain"
            src={logo.src}
          />
        )}
      </div>

      <h4 className="text-sm font-mono font-bold text-white text-center leading-tight mb-1">
        {logo.title || logo.alt}
      </h4>
      
      {logo.category && (
        <span className="text-[10px] font-mono text-[#F2A623] uppercase tracking-wider block text-center">
          {logo.category}
        </span>
      )}

      {children}
    </div>
  );
}

export function LogoCloud({ items = [], className = "", ...props }) {
  return (
    <div
      className={`relative grid grid-cols-2 md:grid-cols-4 border-x border-slate-800 rounded-2xl overflow-hidden ${className}`}
      {...props}
    >
      {/* Top & Bottom Full Grid Border Lines */}
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-full border-t border-slate-800" />

      {items.map((item, index) => {
        const isRightBorder = (index + 1) % 4 !== 0;
        const isBottomBorder = index < items.length - (items.length % 4 || 4);
        const hasPlusRightBottom = (index + 1) % 2 === 1;

        return (
          <LogoCard
            key={item.id || index}
            className={`border-r border-b border-slate-800/80 ${
              index % 2 === 0 ? "bg-[#131B2E]" : "bg-[#0E1524]"
            }`}
            logo={item}
          >
            {hasPlusRightBottom && (
              <PlusIcon
                className="-right-[12px] -bottom-[12px] absolute z-10 size-6 text-[#00E5FF] opacity-60"
                strokeWidth={1.5}
              />
            )}
          </LogoCard>
        );
      })}

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-full border-b border-slate-800" />
    </div>
  );
}
