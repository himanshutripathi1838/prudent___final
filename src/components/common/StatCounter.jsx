import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function StatCounter({ target, label, suffix = '', prefix = '', decimals = 0, icon }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const IconComp = icon ? Icons[icon] : null;

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center p-8 sm:p-10 rounded-2xl bg-[#121824] border border-[#1E293B] hover:border-[#00C2CB]/50 transition-all duration-300 group flex flex-col items-center justify-center">
      {IconComp && (
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00C2CB]/25 to-[#00C2CB]/5 border border-[#00C2CB]/30 flex items-center justify-center text-[#00C2CB] mb-4 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,194,203,0.3)]">
          <IconComp className="w-6 h-6" />
        </div>
      )}
      <div className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight mb-2 font-mono flex items-center justify-center gap-0.5 leading-none">
        <span className="text-[#00C2CB]">{prefix}</span>
        <span>{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}</span>
        <span className="text-[#F2A623]">{suffix}</span>
      </div>
      <p className="text-sm font-medium text-slate-400 mt-1">{label}</p>
    </div>
  );
}
