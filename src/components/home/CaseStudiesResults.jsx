import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, ShieldCheck, Wrench, Zap } from 'lucide-react';

export default function CaseStudiesResults() {
  const navigate = useNavigate();

  const caseStudies = [
    {
      industry: "Railway Infrastructure",
      challenge: "Sudden bearing seize & wheel-flat impacts on 160km/h freight trains.",
      solution: "Tri-axial vibration IMUs with 10kHz sampling deployed on trackside nodes.",
      result: "35% Downtime Reduced & zero catastrophic derailments.",
      icon: TrendingDown,
      stat: "35%"
    },
    {
      industry: "Manufacturing",
      challenge: "Unplanned motor burnout in CNC heavy forge production lines.",
      solution: "Edge TFLite bearing defect model predicting RUL 14 days early.",
      result: "40% Maintenance Cost Reduced via remote OTA firmware.",
      icon: Wrench,
      stat: "40%"
    },
    {
      industry: "Infrastructure",
      challenge: "Bridge pier tilt & flood surge risk during peak monsoon season.",
      solution: "80GHz non-contact radar level sensors and sub-arcsec tilt sensors.",
      result: "99.9% System Uptime & automated flood warnings.",
      icon: ShieldCheck,
      stat: "99.9%"
    },
    {
      industry: "Energy & Utilities",
      challenge: "Transformer overheating & power factor losses across plant assets.",
      solution: "Continuous PT100 thermal telemetry & Modbus power factor monitoring.",
      result: "28% Energy Savings & zero transformer outages.",
      icon: Zap,
      stat: "28%"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0A0E14] border-b border-[#1E293B]/60 relative overflow-hidden">
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
            FIELD IMPACT & RESULTS
          </span>
          <h2 className="text-3xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight font-sans">
            Measurable Industrial Impact
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Quantifiable enterprise ROI delivered across critical infrastructure assets.
          </p>
        </motion.div>

        {/* 4 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {caseStudies.map((cs, idx) => {
            const IconComp = cs.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                onClick={() => navigate('/solution-portfolio')}
                className="p-7 rounded-3xl bg-[#121A28] border border-slate-800 hover:border-[#00E5FF]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#00E5FF] uppercase font-bold">{cs.industry}</span>
                    <div className="w-8 h-8 rounded-lg bg-[#0A0E14] border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="text-3xl font-extrabold font-mono text-[#00E5FF]">
                    {cs.stat}
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-mono text-slate-400 block text-[9.5px]">CHALLENGE</span>
                      <p className="text-slate-300 font-sans">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="font-mono text-slate-400 block text-[9.5px]">SOLUTION</span>
                      <p className="text-slate-300 font-sans">{cs.solution}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[#00E5FF] block text-[9.5px]">VERIFIED RESULT</span>
                      <p className="text-white font-bold font-sans">{cs.result}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-mono text-[#00E5FF] font-bold group-hover:translate-x-1 transition-transform">
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4 text-[#F2A623]" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Large Typography Impact Metrics Banner */}
        <div className="p-8 rounded-3xl bg-[#0B101A] border border-[#00E5FF]/30 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl lg:text-4xl font-extrabold font-mono text-[#00E5FF]">↓ Downtime</div>
            <div className="text-xs font-mono text-slate-400 mt-1">Reduced Across Assets</div>
          </div>

          <div>
            <div className="text-3xl lg:text-4xl font-extrabold font-mono text-emerald-400">↑ Availability</div>
            <div className="text-xs font-mono text-slate-400 mt-1">Improved to 99.9%</div>
          </div>

          <div>
            <div className="text-3xl lg:text-4xl font-extrabold font-mono text-[#F2A623]">↓ Maintenance</div>
            <div className="text-xs font-mono text-slate-400 mt-1">Cost Optimized (40%)</div>
          </div>

          <div>
            <div className="text-3xl lg:text-4xl font-extrabold font-mono text-purple-400">24/7</div>
            <div className="text-xs font-mono text-slate-400 mt-1">Continuous Monitoring</div>
          </div>
        </div>

      </div>
    </section>
  );
}
