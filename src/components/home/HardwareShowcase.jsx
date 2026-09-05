import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, Gauge, Waves, Zap, Server, ArrowRight, Radio } from 'lucide-react';

export default function HardwareShowcase() {
  const navigate = useNavigate();

  const hardwareProducts = [
    {
      id: "vibration",
      name: "Vibration Sensor",
      category: "ROTATING MACHINERY",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1964&auto=format&fit=crop",
      desc: "Predictive maintenance and rotating machinery monitoring.",
      specs: "10kHz Sampling ● IP68 Stainless Steel ● IMU Tri-axial"
    },
    {
      id: "temperature",
      name: "Temperature Sensor",
      category: "THERMAL SENSING",
      icon: Gauge,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1770&auto=format&fit=crop",
      desc: "Continuous thermal monitoring in harsh environments.",
      specs: "-40°C to +150°C ● RS485 Modbus ● ±0.1°C Accuracy"
    },
    {
      id: "tilt",
      name: "Tilt Sensor",
      category: "STRUCTURAL HEALTH",
      icon: Radio,
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1964&auto=format&fit=crop",
      desc: "Structural movement and inclination monitoring for bridge piers.",
      specs: "0.001° Sub-arcsec ● Dual-axis MEMS ● Solar Ready"
    },
    {
      id: "water-level",
      name: "Water Level Sensor",
      category: "INFRASTRUCTURE MONITORING",
      icon: Waves,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop",
      desc: "Flooding and infrastructure monitoring for reservoirs & dams.",
      specs: "80GHz Non-Contact Radar ● 35m Range ● Sub-mm Precision"
    },
    {
      id: "daq-module",
      name: "DAQ Module",
      category: "SIGNAL CONDITIONING",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1770&auto=format&fit=crop",
      desc: "High-speed industrial signal acquisition converting 4-20mA loop signals.",
      specs: "16-Bit A/D ● 4 Isolated Channels ● Modbus RTU"
    },
    {
      id: "edge-gateway",
      name: "Edge Gateway",
      category: "EDGE COMPUTING",
      icon: Server,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1770&auto=format&fit=crop",
      desc: "Industrial connectivity and edge intelligence SOM gateway.",
      specs: "ARM Cortex SOM ● 4G LTE + LoRa ● TFLite Edge AI"
    }
  ];

  return (
    <section id="hardware" className="py-24 lg:py-32 bg-[#0A0E14] border-b border-[#1E293B]/60 relative overflow-hidden">
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
            INDUSTRIAL HARDWARE
          </span>
          <h2 className="text-3xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight font-sans">
            Built for the Real World.
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Rugged sensing and edge hardware designed for demanding industrial environments.
          </p>
        </motion.div>

        {/* 6 Hardware Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hardwareProducts.map((prod, idx) => {
            const IconComp = prod.icon;
            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                whileHover={{ y: -6 }}
                onClick={() => navigate('/technical-expertise')}
                className="p-6 rounded-3xl bg-[#0E1522] border border-slate-800 hover:border-[#00E5FF]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Card Hardware Preview Image */}
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-5 border border-slate-800/80 bg-[#060B12]">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1522] via-[#0E1522]/30 to-transparent" />
                    
                    {/* Status LED */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#060B12]/90 border border-emerald-500/40 text-[9px] font-mono font-bold text-emerald-400 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      ACTIVE SILICON
                    </div>

                    <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-[#060B12]/90 border border-[#00E5FF]/40 backdrop-blur-md flex items-center justify-center text-[#00E5FF]">
                      <IconComp className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-[#00E5FF] uppercase font-bold tracking-wider block mb-1">
                    {prod.category}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors font-mono">
                    {prod.name}
                  </h3>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4">
                    {prod.desc}
                  </p>

                  <div className="text-[10px] font-mono text-slate-400 bg-[#060B12] p-2.5 rounded-xl border border-slate-800 mb-4">
                    {prod.specs}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-[#00E5FF] font-bold group-hover:translate-x-1 transition-transform">
                  <span>View Product</span>
                  <ArrowRight className="w-4 h-4 text-[#F2A623]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
