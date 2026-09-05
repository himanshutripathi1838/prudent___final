import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Cpu, Server, Cloud, Brain, ArrowRight, CheckCircle2, Gauge, Zap } from 'lucide-react';

export default function PlatformIntro() {
  const pipelineSteps = [
    { step: "01", title: "Physical Asset", desc: "Motors, Tracks, Dams, Turbines", icon: Activity },
    { step: "02", title: "Sensors", desc: "4-20mA, PT100, Piezo IMUs", icon: Gauge },
    { step: "03", title: "DAQ", desc: "16-Bit Signal Acquisition", icon: Cpu },
    { step: "04", title: "Edge Gateway", desc: "ARM SOM + Local Filtering", icon: Server },
    { step: "05", title: "AI Models", desc: "Edge TFLite Anomaly Scoring", icon: Brain },
    { step: "06", title: "Cloud Platform", desc: "Time-Series SCADA Ingestion", icon: Cloud },
    { step: "07", title: "Operations", desc: "Predictive Alerts & Actions", icon: CheckCircle2 }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#060B12] border-b border-[#1E293B]/60 relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-3"
          >
            <span className="uppercase text-[11px] font-mono tracking-[0.15em] text-[#00E5FF] bg-[#00E5FF]/10 px-3.5 py-1 rounded-full border border-[#00E5FF]/30 inline-block font-bold">
              WHY PRUDENT SYSTEMS
            </span>
            <h2 className="text-3xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight font-sans">
              From Raw Industrial Data to Real Decisions.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Industrial assets continuously generate data from vibration, temperature, pressure, movement, energy and environmental conditions. Prudent Systems captures this data at the edge, processes it intelligently and converts it into actionable operational insights.
            </p>
          </motion.div>
        </div>

        {/* Visual Animated Data Pipeline Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-3xl bg-[#0B101A] border border-[#00E5FF]/30 shadow-2xl overflow-x-auto"
        >
          <div className="text-xs font-mono text-[#00E5FF] font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#F2A623]" />
            <span>END-TO-END TELEMETRY PIPELINE ARCHITECTURE</span>
          </div>

          <div className="flex items-center justify-between min-w-[950px] gap-2">
            {pipelineSteps.map((node, index) => {
              const IconComp = node.icon;
              return (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#060B12] border border-slate-800 hover:border-[#00E5FF] transition-all w-32 shrink-0 group">
                    <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/15 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] mb-3 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-[#00E5FF] uppercase font-bold">{node.step}</span>
                    <span className="text-xs font-bold text-white group-hover:text-[#00E5FF] transition-colors mt-0.5">{node.title}</span>
                    <span className="text-[9.5px] font-mono text-slate-400 mt-1 leading-tight">{node.desc}</span>
                  </div>

                  {index < pipelineSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#00E5FF] shrink-0 animate-pulse" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
