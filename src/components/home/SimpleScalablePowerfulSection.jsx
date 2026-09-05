import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Wifi, Server, Brain, Zap, ArrowRight } from 'lucide-react';

export default function SimpleScalablePowerfulSection() {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Connect",
      desc: "Connect your devices and sensors in minutes.",
      icon: Wifi
    },
    {
      title: "Collect",
      desc: "Securely collect and transmit data to the cloud.",
      icon: Server
    },
    {
      title: "Analyze",
      desc: "AI/ML models analyze data in real-time.",
      icon: Brain
    },
    {
      title: "Act",
      desc: "Take action and maximize efficiency.",
      icon: Zap
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-[#060B12] border-b border-[#1E293B]/60 relative overflow-hidden">
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
          <span className="uppercase text-[10px] font-mono tracking-[0.18em] text-[#00E5FF] font-bold block">
            HOW IT WORKS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight font-sans">
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
                whileHover={{ y: -4 }}
                onClick={() => navigate('/technical-expertise')}
                className="p-5 rounded-xl bg-[#0E1522] border border-slate-800 hover:border-[#00E5FF]/50 transition-all duration-300 shadow-md flex flex-col justify-between group cursor-pointer h-40 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#060B12] border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#00E5FF] group-hover:translate-x-1 transition-all" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#00E5FF] transition-colors font-sans">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
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
