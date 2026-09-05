import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Radio, Train, ShieldCheck } from 'lucide-react';

export default function HeroSection({ onDemoRequest }) {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-[88vh] pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[#060B12] overflow-hidden flex items-center border-b border-[#1E293B]">
      {/* Cinematic Railway Background Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1887&auto=format&fit=crop"
          alt="Railway Infrastructure IoT"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060B12] via-[#060B12]/80 to-[#060B12]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B12] via-transparent to-[#060B12]/90" />
        <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-8 space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-[10px] font-mono font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
              FEATURED SOLUTION • RAILWAY ASSET TELEMETRY
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12] font-sans">
              Edge AI Machine Health — <br />
              Predict Bearing Faults <span className="text-[#00E5FF] drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">14 Days Early</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl font-sans">
              Continuous vibration spectrograph analysis, temperature monitoring, and AI failure prediction algorithms running on edge gateways.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigate('/solution-portfolio#railway')}
                className="px-7 py-3.5 rounded-full bg-[#00E5FF] hover:bg-[#52F1FF] text-slate-950 font-extrabold text-sm transition-all shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_45px_rgba(0,229,255,0.7)] flex items-center gap-2 active:scale-95 cursor-pointer font-sans"
              >
                <span>Explore Solution</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onDemoRequest}
                className="px-7 py-3.5 rounded-full text-white bg-[#0E1522] hover:bg-[#00E5FF]/15 border border-slate-700 hover:border-[#00E5FF] font-bold text-sm transition-all backdrop-blur-md cursor-pointer font-sans flex items-center gap-2"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-4 h-4 text-[#00E5FF]" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Floating Railway Node Thumbnail Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 flex justify-end"
          >
            <div className="w-full max-w-sm rounded-3xl bg-[#0B101A]/95 border border-[#00E5FF]/40 p-4 shadow-2xl backdrop-blur-xl space-y-3">
              <div className="relative h-36 rounded-2xl overflow-hidden border border-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?q=80&w=1770&auto=format&fit=crop"
                  alt="Traction Motor Node"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B101A] via-transparent to-transparent" />
                <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#060B12]/90 border border-emerald-500/40 text-[9px] font-mono font-bold text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  NODE ONLINE
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-[10px] font-mono text-[#00E5FF] font-bold">RAILWAY ASSET TELEMETRY</div>
                <h4 className="text-sm font-bold text-white font-mono">Traction Motor Bearing Node #4</h4>
                <p className="text-[11px] text-slate-300 font-sans leading-tight">
                  Tri-axial IMU 10kHz sampling with quantized edge TFLite bearing defect model.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
