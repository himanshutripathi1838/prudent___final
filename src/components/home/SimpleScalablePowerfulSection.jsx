import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wifi, Server, Brain, Zap, ArrowRight } from 'lucide-react';

export default function SimpleScalablePowerfulSection() {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Connect",
      desc: "Connect the devices and sensors required by your application.",
      icon: Wifi
    },
    {
      title: "Collect",
      desc: "Collect and transmit field data to the selected platform.",
      icon: Server
    },
    {
      title: "Analyze",
      desc: "Analyze measurements, trends and operational events.",
      icon: Brain
    },
    {
      title: "Act",
      desc: "Use clear information to support operational action.",
      icon: Zap
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-slate-50 dark:bg-[#060B12] text-slate-900 dark:text-white border-b border-slate-200 dark:border-[#1E293B]/60 relative overflow-hidden transition-colors duration-300">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="space-y-1.5 text-left"
        >
          <span className="uppercase text-[10px] font-mono tracking-[0.18em] text-[#0284C7] dark:text-[#00E5FF] font-bold block">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight font-sans">
            Simple. Scalable. Powerful.
          </h2>
        </motion.div>

        {/* 4 Cards Grid - Compact & Smaller Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => navigate('/technical-expertise')}
                className="p-5 rounded-xl bg-white dark:bg-[#0E1522] border border-slate-200 dark:border-slate-800 hover:border-[#0284C7] dark:hover:border-[#00E5FF]/50 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer h-40 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-[#060B12] border border-slate-200 dark:border-[#00E5FF]/30 flex items-center justify-center text-[#0284C7] dark:text-[#00E5FF] group-hover:scale-110 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0284C7] dark:group-hover:text-[#00E5FF] group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-[#0284C7] dark:group-hover:text-[#00E5FF] transition-colors font-sans">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
