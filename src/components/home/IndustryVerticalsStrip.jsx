import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Train, GitBranch, Activity, Droplets, SunMedium, MapPin, ArrowRight } from 'lucide-react';

export default function IndustryVerticalsStrip() {
  const navigate = useNavigate();

  const verticals = [
    {
      id: "railway-monitoring",
      title: "Railways & OHE",
      icon: Train,
      tag: "Track & Spark"
    },
    {
      id: "bridge-monitoring",
      title: "Civil & Bridges",
      icon: GitBranch,
      tag: "Scour & Tilt"
    },
    {
      id: "machine-health",
      title: "Smart Factories",
      icon: Activity,
      tag: "Predictive RUL"
    },
    {
      id: "water-monitoring",
      title: "Water & Hydro",
      icon: Droplets,
      tag: "Radar Telemetry"
    },
    {
      id: "weather-stations",
      title: "Environmental",
      icon: SunMedium,
      tag: "Micro-Climate"
    },
    {
      id: "asset-tracking",
      title: "Fleet & Mining",
      icon: MapPin,
      tag: "GPS + LoRa"
    }
  ];

  return (
    <section className="py-20 bg-[#0D121B] border-b border-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="uppercase text-[12px] font-mono tracking-[0.1em] text-[#00C2CB] bg-[#00C2CB]/10 px-3.5 py-1 rounded-full border border-[#00C2CB]/30 inline-block mb-3">
            Digital Transformation Sectors
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-white tracking-tight">
            Empowering Industry Through Digital Insights
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 font-normal">
            Tailored hardware and cloud telemetry platforms for critical infrastructure sectors.
          </p>
        </div>

        {/* Horizontal Industry Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {verticals.map((vert, idx) => {
            const IconComp = vert.icon;
            return (
              <motion.div
                key={vert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => navigate(`/solution-portfolio#${vert.id}`)}
                className="p-5 rounded-2xl bg-[#121A28] border border-slate-800 hover:border-[#00C2CB] text-center cursor-pointer group transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(0,194,203,0.25)] flex flex-col items-center justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00C2CB]/20 to-[#00C2CB]/5 border border-[#00C2CB]/30 flex items-center justify-center text-[#00C2CB] mx-auto mb-3 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,194,203,0.2)]">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#00C2CB] transition-colors mb-1">
                    {vert.title}
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400 block">
                    {vert.tag}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 w-full flex items-center justify-center text-[11px] font-mono text-[#00C2CB] opacity-80 group-hover:opacity-100">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
