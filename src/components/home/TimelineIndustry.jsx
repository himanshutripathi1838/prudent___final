import React from 'react';
import { motion } from 'framer-motion';
import { industryEvolution } from '../../data/companyData';
import { Cpu, CheckCircle2, Factory, Zap, Cog } from 'lucide-react';

export default function TimelineIndustry() {
  const eraIcons = [Factory, Zap, Cog, Cpu];

  return (
    <section className="py-28 lg:py-36 bg-[#10151F] relative overflow-hidden border-b border-[#1E293B]">
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00C2CB]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="uppercase text-[12px] font-mono tracking-[0.1em] text-[#00C2CB] bg-[#00C2CB]/10 px-3.5 py-1 rounded-full border border-[#00C2CB]/30 inline-block mb-3">
            Industrial Paradigm Shift
          </span>
          <h2 className="text-3xl lg:text-[38px] font-semibold text-white tracking-tight leading-tight">
            The Evolution to Industry 4.0
          </h2>
          <p className="mt-3 text-base lg:text-[17px] font-normal text-slate-400 leading-relaxed max-w-2xl mx-auto">
            From steam engines to autonomous, edge-intelligent connected infrastructure — see where your industrial operations stand.
          </p>
        </motion.div>

        {/* Timeline Grid Container */}
        <div className="relative">
          
          {/* Animated Glowing Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-[90px] left-[10%] right-[10%] h-[3px] bg-slate-800 z-0">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-slate-700 via-[#00C2CB] to-[#00C2CB] shadow-[0_0_12px_rgba(0,194,203,0.8)]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {industryEvolution.map((item, index) => {
              const IconComp = eraIcons[index] || Cpu;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.18 }}
                  whileHover={{ y: -6 }}
                  className={`relative p-8 sm:p-10 rounded-2xl transition-all duration-300 flex flex-col justify-between group ${
                    item.current
                      ? 'bg-[#121A28] shadow-2xl shadow-[#00C2CB]/15 lg:-translate-y-2'
                      : 'bg-[#0D121B]'
                  }`}
                >
                  {/* Subtle 1px Gradient Border */}
                  <div
                    className={`absolute inset-0 rounded-2xl p-[1px] pointer-events-none transition-opacity duration-300 ${
                      item.current ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                    }`}
                    style={{
                      background: item.current
                        ? 'linear-gradient(135deg, rgba(0,194,203,0.9), rgba(242,166,35,0.6), rgba(0,194,203,0.2))'
                        : 'linear-gradient(135deg, rgba(0,194,203,0.3), transparent)'
                    }}
                  />

                  <div>
                    {/* Glowing Circular Icon Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg ${
                          item.current
                            ? 'bg-gradient-to-br from-[#00C2CB]/30 to-[#00C2CB]/10 border border-[#00C2CB] text-[#00C2CB] shadow-[0_0_20px_rgba(0,194,203,0.4)]'
                            : 'bg-gradient-to-br from-slate-800/80 to-slate-900 border border-slate-700 text-slate-400'
                        }`}
                      >
                        <IconComp className="w-6 h-6" />
                      </div>

                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                        item.current
                          ? 'bg-[#F2A623] text-slate-950 font-extrabold'
                          : 'bg-slate-800 text-slate-400'
                      }`}>
                        {item.era}
                      </span>
                    </div>

                    <div className="text-xs font-mono text-slate-500 mb-1">{item.time}</div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00C2CB] transition-colors flex items-center gap-2">
                      {item.title}
                    </h3>
                    <p className="text-base text-slate-400 leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {item.current ? (
                    <div className="pt-4 border-t border-[#00C2CB]/30 flex items-center gap-2 text-xs font-mono font-semibold text-[#00C2CB]">
                      <CheckCircle2 className="w-4 h-4 text-[#F2A623]" />
                      <span>Prudent Systems Focus</span>
                    </div>
                  ) : (
                    <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-slate-600">
                      Legacy Paradigm
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
