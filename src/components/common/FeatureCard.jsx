import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

export default function FeatureCard({ icon, title, desc, badge, onClick, className = '' }) {
  const IconComponent = Icons[icon] || Icons.Cpu;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`relative p-6 sm:p-8 rounded-2xl bg-[#121824] border border-[#1E293B] hover:border-[#00C2CB]/50 hover:shadow-xl hover:shadow-[#00C2CB]/10 transition-all duration-300 group flex flex-col justify-between ${className}`}
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#00C2CB]/10 border border-[#00C2CB]/30 flex items-center justify-center text-[#00C2CB] group-hover:scale-110 group-hover:bg-[#00C2CB] group-hover:text-slate-900 transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>
          {badge && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
              {badge}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00C2CB] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {desc}
        </p>
      </div>

      {onClick && (
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-1 text-xs font-semibold text-[#00C2CB] group-hover:translate-x-1 transition-transform">
          <span>Learn More</span>
          <Icons.ChevronRight className="w-4 h-4" />
        </div>
      )}
    </motion.div>
  );
}
