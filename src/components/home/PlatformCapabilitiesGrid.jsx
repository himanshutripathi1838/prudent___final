import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Cpu, Server, Cloud, Brain, LayoutDashboard, Bell, ArrowRight } from 'lucide-react';

export default function PlatformCapabilitiesGrid() {
  const navigate = useNavigate();

  const capabilities = [
    {
      icon: Cpu,
      title: "Device Connectivity",
      desc: "Seamless integration with sensors, PLCs, and industrial protocols."
    },
    {
      icon: Server,
      title: "Edge Intelligence",
      desc: "Real-time data processing at the edge for faster decision-making."
    },
    {
      icon: Cloud,
      title: "Cloud Platform",
      desc: "Scalable, secure, and reliable cloud infrastructure for your IoT data."
    },
    {
      icon: Brain,
      title: "AI & Analytics",
      desc: "Predictive insights and anomaly detection to prevent downtime."
    },
    {
      icon: LayoutDashboard,
      title: "Dashboards",
      desc: "Customizable real-time dashboards for complete visibility."
    },
    {
      icon: Bell,
      title: "Alerts & Notifications",
      desc: "Get notified via SMS, Email, WhatsApp, and in-app alerts."
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#060B12] border-b border-[#1E293B]/60 relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-2"
          >
            <span className="uppercase text-[11px] font-mono tracking-[0.15em] text-[#00E5FF] font-bold block mb-1">
              PLATFORM
            </span>
            <h2 className="text-3xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight font-sans">
              Everything You Need, <br />
              Built for Industrial IoT
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              From edge to cloud, our platform enables you to connect, monitor, analyze, and act in real-time.
            </p>
          </motion.div>
        </div>

        {/* 6 Capability Cards Grid (3 x 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const IconComp = cap.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                whileHover={{ y: -6 }}
                onClick={() => navigate('/technical-expertise#platform')}
                className="p-7 rounded-2xl bg-[#0E1522] border border-slate-800 hover:border-[#00E5FF]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#060B12] border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] mb-5 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors font-sans">
                    {cap.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Pill CTA Button */}
        <div className="text-center pt-2">
          <button
            onClick={() => navigate('/technical-expertise#platform')}
            className="px-6 py-2.5 rounded-full bg-[#0E1522] hover:bg-[#00E5FF]/15 border border-[#00E5FF]/40 hover:border-[#00E5FF] text-[#00E5FF] text-xs font-mono font-bold transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-[#00E5FF]/5"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00E5FF]" />
          </button>
        </div>

      </div>
    </section>
  );
}
