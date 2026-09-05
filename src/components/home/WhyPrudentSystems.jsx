import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Lock, Layers } from 'lucide-react';

export default function WhyPrudentSystems() {
  const differentiators = [
    {
      icon: ShieldCheck,
      title: "Industrial-Grade Reliability",
      desc: "Hardware & SOMs engineered in-house and field-tested from -40°C to +85°C with zero thermal throttling in harsh field conditions."
    },
    {
      icon: Zap,
      title: "Real-Time Intelligence",
      desc: "Sub-second MQTTS telemetry & quantized TensorFlow Lite edge inferencing directly on the gateway with zero cloud latency."
    },
    {
      icon: Lock,
      title: "Secure by Design",
      desc: "Hardware Root of Trust, encrypted TLS 1.3 payloads, and dual-partition A/B OTA rollback protection."
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      desc: "Unified hardware-software platform scaling seamlessly from 1 MSME factory to 10,000+ national infrastructure assets."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#060B12] border-b border-[#1E293B] relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="uppercase text-[11px] font-mono tracking-[0.15em] text-[#00E5FF] bg-[#00E5FF]/10 px-3.5 py-1 rounded-full border border-[#00E5FF]/30 inline-block font-bold mb-3">
            THE PRUDENT ADVANTAGE
          </span>
          <h2 className="text-3xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight font-sans">
            Why Industry Leaders Choose Prudent Systems
          </h2>
          <p className="mt-3 text-base text-slate-400 font-normal leading-relaxed">
            Built for enterprise reliability, un-brickable security, and seamless industrial scale.
          </p>
        </motion.div>

        {/* 4 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((diff, idx) => {
            const IconComp = diff.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="p-8 rounded-3xl bg-[#121A28] border border-slate-800 hover:border-[#00E5FF]/50 transition-all duration-300 shadow-xl flex items-start gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#060B12] border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] shrink-0 group-hover:scale-110 transition-transform">
                  <IconComp className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-normal leading-relaxed">
                    {diff.desc}
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
