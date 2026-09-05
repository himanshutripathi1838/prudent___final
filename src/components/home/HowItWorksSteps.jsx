import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Cpu, Server, Brain, Bell, ArrowRight } from 'lucide-react';

export default function HowItWorksSteps() {
  const steps = [
    {
      num: "01",
      title: "Sense",
      icon: Gauge,
      desc: "Capture physical conditions from industrial sensors."
    },
    {
      num: "02",
      title: "Acquire",
      icon: Cpu,
      desc: "Capture accurate high-frequency signals using DAQ."
    },
    {
      num: "03",
      title: "Process",
      icon: Server,
      desc: "Analyze data locally using Edge Computing."
    },
    {
      num: "04",
      title: "Predict",
      icon: Brain,
      desc: "AI identifies anomalies and predicts failures."
    },
    {
      num: "05",
      title: "Act",
      icon: Bell,
      desc: "Teams receive real-time insights and alerts."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#060B12] border-b border-[#1E293B]/60 relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="uppercase text-[11px] font-mono tracking-[0.15em] text-[#00E5FF] bg-[#00E5FF]/10 px-3.5 py-1 rounded-full border border-[#00E5FF]/30 inline-block font-bold">
            THE TELEMETRY WORKFLOW
          </span>
          <h2 className="text-3xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight font-sans">
            Sense. Connect. Understand. Act.
          </h2>
        </motion.div>

        {/* 5-Step Process connected with animated cyan data line */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-[#0E1522] border border-slate-800 hover:border-[#00E5FF]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xl font-extrabold font-mono text-[#00E5FF]">{step.num}</span>
                    <div className="w-9 h-9 rounded-xl bg-[#060B12] border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors font-mono">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-4 h-4 text-[#00E5FF] animate-pulse" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
