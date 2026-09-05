import React from 'react';
import { motion } from 'framer-motion';

export default function TrustedByLogos() {
  const logos = [
    { name: "adani", style: "font-bold tracking-tighter" },
    { name: "TATA", style: "font-extrabold tracking-widest" },
    { name: "vedanta", style: "font-semibold tracking-tight" },
    { name: "JSW", style: "font-black tracking-wider text-slate-200" },
    { name: "UltraTech CEMENT", style: "font-bold tracking-tight text-slate-300" },
    { name: "Reliance Industries Limited", style: "font-bold tracking-tighter text-slate-300" },
    { name: "Indian Railways", style: "font-bold tracking-wider" },
    { name: "BPCL", style: "font-extrabold tracking-widest" }
  ];

  return (
    <section className="py-12 bg-[#060B12] border-y border-[#1E293B]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <p className="text-center text-xs font-mono uppercase tracking-[0.15em] text-slate-400 font-bold">
          Trusted by organizations building critical infrastructure
        </p>

        {/* Clean Monochrome Corporate Logos Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
          {logos.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04 }}
              className="text-lg sm:text-xl font-mono text-slate-400 hover:text-white transition-colors cursor-default select-none opacity-80 hover:opacity-100"
            >
              <span className={brand.style}>{brand.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
