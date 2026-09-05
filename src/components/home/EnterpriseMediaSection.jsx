import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ArrowRight, CheckCircle2, Cpu, ShieldCheck, Activity } from 'lucide-react';

export default function EnterpriseMediaSection() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-28 lg:py-36 bg-[#0A0E14] border-b border-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="uppercase text-[12px] font-mono tracking-[0.1em] text-[#00C2CB] bg-[#00C2CB]/10 px-3.5 py-1 rounded-full border border-[#00C2CB]/30 inline-block">
              Platform Overview
            </span>

            <h2 className="text-3xl lg:text-[40px] font-semibold text-white tracking-tight leading-tight">
              Unlock Your Industrial Intelligence
            </h2>

            <p className="text-base lg:text-[17px] font-normal text-slate-300 leading-relaxed">
              Connect your field infrastructure and empower your operations team with real-time digital insights. Prudent Systems turns complex sensor streams into actionable predictive health metrics.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#00C2CB] shrink-0" />
                <span>Deep domain expertise across Railways, Hydro & Smart Factories</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#00C2CB] shrink-0" />
                <span>Open, hardware-agnostic multi-protocol gateway platform</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#F2A623] shrink-0" />
                <span>Remote failsafe OTA update infrastructure with zero downtime</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => navigate('/technical-expertise')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00C2CB] hover:bg-[#00E5FF] text-slate-950 font-bold text-sm transition-all shadow-lg hover:shadow-[0_0_25px_rgba(0,194,203,0.5)] active:scale-95"
              >
                <span>Learn About Technical Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Video / Interactive System Demo Thumbnail */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#00C2CB]/40 shadow-2xl bg-[#121A28] group">
              
              {/* Media Thumbnail Poster */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
                  alt="Industrial Intelligence System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-[#0A0E14]/40 to-transparent" />

                {/* Big Glowing Play Button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#00C2CB] text-slate-950 flex items-center justify-center shadow-[0_0_40px_rgba(0,194,203,0.8)] hover:scale-110 transition-transform active:scale-95 z-20 group/btn"
                >
                  <Play className="w-8 h-8 fill-slate-950 translate-x-0.5" />
                </button>

                {/* Status Overlay Tags */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-[#0A0E14]/90 text-[#00C2CB] border border-[#00C2CB]/40 backdrop-blur-md flex items-center gap-1.5 font-bold">
                    <Activity className="w-3.5 h-3.5 text-[#00C2CB] animate-pulse" />
                    Live System Telemetry Demo
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#0A0E14]/90 text-amber-400 border border-amber-500/40 backdrop-blur-md font-bold">
                    4K Stream • 60 FPS
                  </span>
                </div>

                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6 z-10 space-y-1">
                  <h4 className="text-xl font-extrabold text-white">
                    Watch: Universal IIoT Gateway in Action
                  </h4>
                  <p className="text-xs text-slate-300 font-mono">
                    Real-time vibration FFT, bearing fault score & cloud broker handshake (02:45)
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
