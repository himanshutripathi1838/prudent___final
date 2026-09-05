import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { CheckCircle2, Cpu, Cloud, Radio, ArrowRight } from 'lucide-react';

export default function SolutionDetailCard({ solution, index }) {
  const IconComp = Icons[solution.icon] || Icons.Cpu;
  const isEven = index % 2 === 0;

  return (
    <div id={solution.id} className="py-16 border-b border-[#1E293B] scroll-mt-24">
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        
        {/* Text Content Column */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`space-y-6 ${isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'}`}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#00C2CB]/10 border border-[#00C2CB]/30 flex items-center justify-center text-[#00C2CB]">
              <IconComp className="w-5 h-5" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-slate-800 text-slate-300 border border-slate-700">
              {solution.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {solution.title}
          </h2>

          <p className="text-base text-slate-300 leading-relaxed">
            {solution.shortDesc}
          </p>

          {/* 3-Stage Mini Architecture Flow */}
          <div className="p-4 rounded-2xl bg-[#121824] border border-[#1E293B] space-y-3">
            <div className="text-xs font-mono font-bold text-[#00C2CB] uppercase tracking-wider">
              Telemetry Flow Architecture
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-[#0A0E14] border border-slate-800">
                <div className="flex items-center gap-1.5 font-bold text-white mb-1">
                  <Radio className="w-3.5 h-3.5 text-[#00C2CB]" />
                  <span>Sensors Used</span>
                </div>
                <ul className="text-[11px] text-slate-400 space-y-0.5 list-disc list-inside">
                  {solution.sensorsUsed.slice(0, 2).map((s, idx) => (
                    <li key={idx} className="truncate">{s}</li>
                  ))}
                </ul>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0A0E14] border border-slate-800">
                <div className="flex items-center gap-1.5 font-bold text-white mb-1">
                  <Cpu className="w-3.5 h-3.5 text-[#00C2CB]" />
                  <span>Gateway Edge</span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {solution.edgeProcessing}
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-[#0A0E14] border border-slate-800">
                <div className="flex items-center gap-1.5 font-bold text-white mb-1">
                  <Cloud className="w-3.5 h-3.5 text-[#00C2CB]" />
                  <span>Cloud Output</span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {solution.cloudOutputs}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono uppercase font-bold text-slate-400">Key Solution Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {solution.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#00C2CB] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`relative ${isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'}`}
        >
          <div className="relative rounded-3xl overflow-hidden border border-[#1E293B] shadow-2xl group">
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-transparent to-transparent opacity-80" />

            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00C2CB] text-slate-900 shadow-md">
                {solution.badge}
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
