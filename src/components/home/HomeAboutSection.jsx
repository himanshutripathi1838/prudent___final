import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

export default function HomeAboutSection() {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#060B12] border-b border-[#1E293B]/60 relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand Story & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-2">
              <span className="uppercase text-[11px] font-mono tracking-[0.18em] text-[#00E5FF] bg-[#00E5FF]/10 px-3.5 py-1 rounded-full border border-[#00E5FF]/30 inline-block font-bold">
                COMPANY OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight font-sans">
                About Prudent Systems
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Prudent Systems (<span className="text-[#00E5FF] font-mono font-bold">prusys.com</span>) is an Industrial IoT & Industry 4.0 pioneer. We turn traditional factories, railway corridors, river bridges, and utility stations into smart, data-driven, connected ecosystems.
            </p>

            <p className="text-sm text-slate-300 font-normal leading-relaxed">
              We engineer hardware-software platforms — Universal IIoT Gateways, Edge AI inference algorithms, and brick-proof remote OTA firmware infrastructure — that digitize physical assets without requiring expensive machinery replacement.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-[#0E1522] border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0" />
                <span className="text-xs font-mono font-bold text-slate-200">100% In-House Hardware R&D</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0E1522] border border-slate-800 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#F2A623] shrink-0" />
                <span className="text-xs font-mono font-bold text-slate-200">Field-Tested (-40°C to +85°C)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => navigate('/technical-expertise')}
                className="px-6 py-3 rounded-xl bg-[#0E1522] hover:bg-slate-800 border border-slate-800 hover:border-[#00E5FF]/50 text-white text-xs font-mono font-bold transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Explore Hardware Expertise</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00E5FF]" />
              </button>

              <button
                onClick={() => navigate('/solution-portfolio')}
                className="px-6 py-3 rounded-xl bg-[#0E1522] hover:bg-slate-800 border border-slate-800 hover:border-[#00E5FF]/50 text-white text-xs font-mono font-bold transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Explore Solution Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F2A623]" />
              </button>

              <button
                onClick={() => navigate('/contact-us')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#00E5FF] hover:bg-[#52F1FF] text-slate-950 text-xs font-mono font-bold transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#00E5FF]/20 mt-2 sm:mt-0"
              >
                <span>Request a Custom Solution</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Mission Card with Official Logo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="p-8 rounded-3xl bg-[#0E1522]/90 border border-slate-800 hover:border-[#00E5FF]/40 transition-all duration-300 shadow-2xl space-y-6 relative overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E5FF]/5 rounded-full blur-[100px] pointer-events-none" />

              {/* Official Logo Banner */}
              <div className="w-20 h-20 rounded-2xl bg-white p-2.5 shadow-xl flex items-center justify-center border border-slate-700">
                <img
                  src="/images/prudent_systems_official_logo.png"
                  alt="Prudent Systems Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-3 font-sans">
                  Our Core Mission
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                  To build un-brickable, secure, and multi-protocol hardware-software platforms that eliminate catastrophic machine failures, prevent flood disasters, and digitize national physical assets with zero downtime.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-[#00E5FF] font-bold">Industry 4.0 Ecosystem</span>
                <span className="text-[#10B981] font-bold">● Active Nationwide</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
