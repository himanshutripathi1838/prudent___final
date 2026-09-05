import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Cpu, Server, Cloud, Brain, Bell, ArrowRight } from 'lucide-react';

export default function HomeHowWeWorkSection() {
  const navigate = useNavigate();

  const workflowSteps = [
    {
      id: "01",
      title: "SENSORS",
      subtitle: "Vibration • Temp • Tilt",
      icon: Activity,
      accent: "from-[#00E5FF] to-sky-500",
      items: ["Vibration", "Temperature", "Tilt / Level"]
    },
    {
      id: "02",
      title: "DAQ",
      subtitle: "Signal Acquisition",
      icon: Cpu,
      accent: "from-amber-400 to-orange-500",
      items: ["Signal", "Acquisition", "24-Bit ADC"]
    },
    {
      id: "03",
      title: "EDGE GATEWAY",
      subtitle: "Edge AI Processing",
      icon: Server,
      accent: "from-emerald-400 to-teal-500",
      items: ["Edge AI", "Local Process", "<50ms Engine"]
    },
    {
      id: "04",
      title: "CLOUD",
      subtitle: "MQTT & Storage",
      icon: Cloud,
      accent: "from-cyan-400 to-blue-600",
      items: ["MQTT / Data", "Storage", "Timescale Lake"]
    },
    {
      id: "05",
      title: "AI ANALYTICS",
      subtitle: "Anomaly Prediction",
      icon: Brain,
      accent: "from-purple-400 to-indigo-500",
      items: ["Anomaly", "Prediction", "RUL Forecast"]
    },
    {
      id: "06",
      title: "DASHBOARD & ALERTS",
      subtitle: "SMS • WhatsApp",
      icon: Bell,
      accent: "from-rose-400 to-red-500",
      items: ["SMS • WhatsApp", "Live SCADA", "PLC Auto-Trip"]
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-24 bg-[#060B12] border-b border-[#1E293B]/60 relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10 space-y-8 sm:space-y-10">
        
        {/* Section Header Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-2"
          >
            <span className="uppercase text-[10px] sm:text-[11px] font-mono tracking-[0.15em] text-[#00E5FF] font-bold block mb-1">
              PLATFORM
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-white tracking-tight leading-snug sm:leading-tight font-sans">
              Everything You Need, <br className="hidden sm:block" />
              Built for Industrial IoT
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-normal leading-relaxed">
              From edge to cloud, our platform enables you to connect, monitor, analyze, and act in real-time.
            </p>
          </motion.div>
        </div>

        {/* 6 WORKFLOW CARDS GRID - Fully Responsive on Mobile & Desktop */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {workflowSteps.map((step, idx) => {
              const IconComp = step.icon;
              const isLast = idx === workflowSteps.length - 1;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  onClick={() => navigate('/technical-expertise#platform')}
                  className="p-4 rounded-2xl bg-[#0E1522] border border-slate-800 hover:border-[#00E5FF]/50 transition-all duration-300 shadow-xl relative group cursor-pointer flex flex-col justify-between overflow-hidden"
                >
                  {/* Continuous Moving Data Particle Stream Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 overflow-hidden">
                    <motion.div
                      className="h-full w-16 bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_10px_#00E5FF]"
                      animate={{ x: ['-100%', '300%'] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2.0,
                        ease: 'linear',
                        delay: idx * 0.3
                      }}
                    />
                  </div>

                  {/* Top Step Badge & Icon Header */}
                  <div>
                    <div className="flex items-center justify-between mb-3 pt-1">
                      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${step.accent} text-slate-950 font-bold shadow-md group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-[#060B12] border border-[#00E5FF]/30 text-[9.5px] font-mono font-bold text-[#00E5FF]">
                        {step.id}
                      </span>
                    </div>

                    <h3 className="text-sm font-mono font-bold text-white mb-0.5 group-hover:text-[#00E5FF] transition-colors leading-tight font-sans">
                      {step.title}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400 mb-3 truncate">
                      {step.subtitle}
                    </p>

                    {/* Step Items List */}
                    <div className="space-y-1.5 pt-2.5 border-t border-slate-800/80">
                      {step.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] shrink-0 animate-pulse" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flow Arrow Connection Indicator */}
                  {!isLast && (
                    <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[#00E5FF] text-[10px] font-mono font-bold">
                      <span className="text-[9px] text-slate-500">FLOW →</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#00E5FF] group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Continuous Animated Glowing Data Stream Bar */}
        <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0E1522] border border-slate-800 text-center text-xs font-mono text-slate-300 font-bold tracking-wider shadow-2xl relative overflow-hidden">
          {/* Animated Cyan Pulse Line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent pointer-events-none" />
          
          <motion.div
            className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-[#00E5FF]/60 to-transparent blur-sm pointer-events-none"
            animate={{ x: ['-100%', '1000%'] }}
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: 'linear'
            }}
          />

          <div className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-3 flex-wrap text-[10px] sm:text-[11px]">
            <span className="text-[#00E5FF] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
              SENSORS
            </span>
            <span className="text-[#00E5FF]">⚡ ▶</span>
            <span className="text-[#00E5FF]">DAQ</span>
            <span className="text-[#00E5FF]">⚡ ▶</span>
            <span className="text-[#00E5FF]">EDGE GATEWAY</span>
            <span className="text-[#00E5FF]">⚡ ▶</span>
            <span className="text-[#00E5FF]">CLOUD</span>
            <span className="text-[#00E5FF]">⚡ ▶</span>
            <span className="text-[#00E5FF]">AI ANALYTICS</span>
            <span className="text-[#00E5FF]">⚡ ▶</span>
            <span className="text-[#F2A623] font-extrabold">
              DASHBOARD & ALERTS
            </span>
          </div>
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
