import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Train, Factory, Zap, Flame, Building2, Waves, ArrowRight } from 'lucide-react';

export default function IndustriesSection() {
  const navigate = useNavigate();

  const industries = [
    {
      id: "railways",
      name: "Railways & Transportation",
      icon: Train,
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1887&auto=format&fit=crop",
      desc: "Rolling stock, tracks, bridges and stations."
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      icon: Factory,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1964&auto=format&fit=crop",
      desc: "Machines, motors and production assets."
    },
    {
      id: "energy",
      name: "Energy & Utilities",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1932&auto=format&fit=crop",
      desc: "Power generation and distribution assets."
    },
    {
      id: "oil-gas",
      name: "Oil & Gas",
      icon: Flame,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1884&auto=format&fit=crop",
      desc: "Pipelines, rotating equipment and critical infrastructure."
    },
    {
      id: "infrastructure",
      name: "Infrastructure",
      icon: Building2,
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1964&auto=format&fit=crop",
      desc: "Bridges, tunnels and structural assets."
    },
    {
      id: "water",
      name: "Water & Wastewater",
      icon: Waves,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop",
      desc: "Pumps, tanks and water infrastructure."
    }
  ];

  return (
    <section id="industries" className="py-24 lg:py-32 bg-[#060B12] border-b border-[#1E293B]/60 relative overflow-hidden">
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
            SECTOR INTELLIGENCE
          </span>
          <h2 className="text-3xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight font-sans">
            Intelligence for Every Critical Industry
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Targeted hardware-software platforms engineered for high-reliability operational environments.
          </p>
        </motion.div>

        {/* 6 Large Immersive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07 }}
                whileHover={{ y: -8 }}
                onClick={() => navigate(`/solution-portfolio#${ind.id}`)}
                className="relative cursor-pointer rounded-3xl overflow-hidden border border-slate-800 hover:border-[#00E5FF] transition-all duration-500 group shadow-2xl h-80 flex flex-col justify-end p-7"
              >
                {/* Background Image */}
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-40 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B12] via-[#060B12]/80 to-transparent pointer-events-none" />

                {/* Content Overlay */}
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#060B12]/90 border border-[#00E5FF]/40 backdrop-blur-md flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#00E5FF] transition-colors leading-snug font-sans">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-slate-300 font-normal leading-relaxed">
                    {ind.desc}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-xs font-mono text-[#00E5FF] font-bold group-hover:translate-x-1.5 transition-transform">
                    <span>Explore Solution</span>
                    <ArrowRight className="w-4 h-4 text-[#F2A623]" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
