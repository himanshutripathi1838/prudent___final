import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ category, title, subtitle, align = 'center', className = '' }) {
  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center mx-auto';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={`max-w-3xl mb-12 sm:mb-16 ${alignClass} ${className}`}
    >
      {category && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold font-mono uppercase tracking-wider bg-[#00C2CB]/10 text-[#00C2CB] border border-[#00C2CB]/20 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C2CB] animate-pulse"></span>
          {category}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
