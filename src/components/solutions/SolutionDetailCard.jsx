import React from 'react';
import { motion } from 'framer-motion';
import { Activity, CheckCircle2, Cloud, Cpu, Droplets, Factory, GitBranch, Radio, TrainFront, Zap } from 'lucide-react';

const solutionIcons = { Activity, Droplets, Factory, GitBranch, Train: TrainFront, Zap };

export default function SolutionDetailCard({ solution, index }) {
  const IconComp = solutionIcons[solution.icon] || Cpu;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      id={solution.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="my-10 p-6 sm:p-8 lg:p-10 rounded-3xl bg-white dark:bg-[#0E1522] border border-slate-200 dark:border-slate-800 hover:border-[#0284C7]/60 dark:hover:border-[#00E5FF]/60 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group scroll-mt-24"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
        
        {/* Text Content Column */}
        <div className={`space-y-6 ${isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'}`}>
          <div className="flex items-center gap-3">
            <div className="solution-type-icon flex h-11 w-11 items-center justify-center rounded-xl bg-[#0284C7] dark:bg-[#00C2CB] text-white dark:text-slate-950 shadow-md shadow-cyan-500/20 group-hover:scale-110 transition-transform">
              <IconComp className="h-5 w-5" strokeWidth={2.5} aria-hidden="true" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {solution.category}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-[#0284C7] dark:group-hover:text-[#00E5FF] transition-colors">
            {solution.title}
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            {solution.shortDesc}
          </p>

          {/* 3-Stage Mini Architecture Flow */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#121824] border border-slate-200 dark:border-[#1E293B] space-y-3 shadow-inner">
            <div className="text-xs font-mono font-bold text-[#0284C7] dark:text-[#00C2CB] uppercase tracking-wider">
              Telemetry Flow Architecture
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-white dark:bg-[#0A0E14] border border-slate-200 dark:border-slate-800 hover:border-[#0284C7]/40 dark:hover:border-[#00C2CB]/40 transition-colors shadow-sm">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white mb-1">
                  <Radio className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#00C2CB]" />
                  <span>Sensors Used</span>
                </div>
                <ul className="text-[11px] text-slate-600 dark:text-slate-400 space-y-0.5 list-disc list-inside">
                  {solution.sensorsUsed.slice(0, 2).map((s, idx) => (
                    <li key={idx} className="truncate">{s}</li>
                  ))}
                </ul>
              </div>

              <div className="p-2.5 rounded-lg bg-white dark:bg-[#0A0E14] border border-slate-200 dark:border-slate-800 hover:border-[#0284C7]/40 dark:hover:border-[#00C2CB]/40 transition-colors shadow-sm">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white mb-1">
                  <Cpu className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#00C2CB]" />
                  <span>Gateway Edge</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2">
                  {solution.edgeProcessing}
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-white dark:bg-[#0A0E14] border border-slate-200 dark:border-slate-800 hover:border-[#0284C7]/40 dark:hover:border-[#00C2CB]/40 transition-colors shadow-sm">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white mb-1">
                  <Cloud className="w-3.5 h-3.5 text-[#0284C7] dark:text-[#00C2CB]" />
                  <span>Cloud Output</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2">
                  {solution.cloudOutputs}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono uppercase font-bold text-slate-500 dark:text-slate-400">Key Solution Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {solution.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] dark:text-[#00C2CB] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Column */}
        <div className={`relative ${isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'}`}>
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-[#1E293B] shadow-2xl">
            <img
              src={solution.image}
              alt={solution.title}
              className="w-full h-80 object-cover group-hover:scale-108 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0284C7] dark:bg-[#00C2CB] text-white dark:text-slate-900 shadow-md">
                {solution.badge}
              </span>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
