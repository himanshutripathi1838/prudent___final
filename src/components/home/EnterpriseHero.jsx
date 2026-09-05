import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Radio, MapPin, Gauge, ShieldCheck, Cpu, Waves, CheckCircle2 } from 'lucide-react';

export default function EnterpriseHero({ onDemoRequest }) {
  const navigate = useNavigate();
  const [healthScore, setHealthScore] = useState(92);

  useEffect(() => {
    const interval = setInterval(() => {
      setHealthScore((prev) => +(91.6 + Math.random() * 0.8).toFixed(0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] pt-32 pb-20 lg:pt-36 lg:pb-24 bg-[#060B12] overflow-hidden flex items-center">
      {/* Cinematic Railway Industrial Background Visual with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1887&auto=format&fit=crop"
          alt="Railway Infrastructure IoT"
          className="w-full h-full object-cover opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060B12] via-[#060B12]/80 to-[#060B12]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B12] via-transparent to-[#060B12]/90" />
        <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      </div>

      {/* Atmospheric Radial Lighting */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-[#00E5FF]/10 blur-[200px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sky-600/10 blur-[220px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Label, Headline, Subtitle, CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-[10px] font-mono font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
              EDGE AI • PREDICTIVE MAINTENANCE
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.12] font-sans">
              Predict Machine <br className="hidden sm:inline" />
              <span className="text-[#00E5FF] drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">
                Failures Before They Happen.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl font-sans">
              Real-time machine health monitoring powered by industrial sensors, edge intelligence and AI.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigate('/technical-expertise')}
                className="px-7 py-3.5 rounded-full bg-[#00E5FF] hover:bg-[#52F1FF] text-slate-950 font-extrabold text-sm transition-all shadow-[0_0_25px_rgba(0,229,255,0.4)] hover:shadow-[0_0_45px_rgba(0,229,255,0.7)] flex items-center gap-2 active:scale-95 cursor-pointer font-sans"
              >
                <span>Explore Platform</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onDemoRequest}
                className="px-7 py-3.5 rounded-full text-white bg-[#0E1522] hover:bg-[#00E5FF]/15 border border-slate-700 hover:border-[#00E5FF] font-bold text-sm transition-all backdrop-blur-md cursor-pointer font-sans"
              >
                Request a Demo
              </button>
            </div>

            {/* Proof Metrics */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                  10K+
                </div>
                <div className="text-xs font-sans text-slate-400 mt-1">
                  Connected Assets
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                  99.9%
                </div>
                <div className="text-xs font-sans text-slate-400 mt-1">
                  Platform Availability
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                  24/7
                </div>
                <div className="text-xs font-sans text-slate-400 mt-1">
                  Real-Time Monitoring
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                  250+
                </div>
                <div className="text-xs font-sans text-slate-400 mt-1">
                  Industrial Deployments
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Side: Enriched Floating Operational Dashboard Interface */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl bg-[#0B101A]/95 border border-[#00E5FF]/40 shadow-[0_0_80px_rgba(0,0,0,0.95)] backdrop-blur-2xl overflow-hidden p-5 space-y-5">
              
              {/* Dashboard Control Ribbon */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-white font-bold">EDGE NODE: RAIL-BEARING-NODE-402</span>
                </div>
                <span className="text-[#00E5FF] bg-[#00E5FF]/10 px-2.5 py-0.5 rounded-md border border-[#00E5FF]/30 font-bold">
                  LIVE TELEMETRY
                </span>
              </div>

              {/* 6 Metric Display Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-2xl bg-[#060B12] border border-slate-800/80">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">MACHINE HEALTH</div>
                  <div className="text-2xl font-extrabold font-mono text-[#00E5FF] mt-0.5">{healthScore}%</div>
                  <div className="text-[9px] font-mono text-emerald-400 font-bold mt-0.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Optimal Status
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#060B12] border border-slate-800/80">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">BEARING STATUS</div>
                  <div className="text-lg font-extrabold font-mono text-emerald-400 mt-1">Healthy</div>
                  <div className="text-[9px] font-mono text-slate-400 mt-0.5">FFT Spectrum Normal</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#060B12] border border-slate-800/80">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">VIBRATION</div>
                  <div className="text-lg font-extrabold font-mono text-white mt-1">1.42g (Normal)</div>
                  <div className="text-[9px] font-mono text-slate-400 mt-0.5">10kHz Sampling</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#060B12] border border-slate-800/80">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">TEMPERATURE</div>
                  <div className="text-lg font-extrabold font-mono text-[#F2A623] mt-1">68°C</div>
                  <div className="text-[9px] font-mono text-slate-400 mt-0.5">Pt100 Thermal</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#060B12] border border-slate-800/80">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">AI ANOMALY SCORE</div>
                  <div className="text-lg font-extrabold font-mono text-emerald-400 mt-1">0.02 (Low)</div>
                  <div className="text-[9px] font-mono text-slate-400 mt-0.5">TFLite Model</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#060B12] border border-slate-800/80">
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-bold">PREDICTED FAILURE</div>
                  <div className="text-lg font-extrabold font-mono text-purple-400 mt-1">14 Days</div>
                  <div className="text-[9px] font-mono text-slate-400 mt-0.5">RUL Window</div>
                </div>
              </div>

              {/* Animated Waveform Visual */}
              <div className="p-4 rounded-2xl bg-[#060B12] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>REAL-TIME VIBRATION SPECTROGRAPH</span>
                  </span>
                  <span className="text-emerald-400 font-bold">1,420 Hz Sampling</span>
                </div>
                <svg className="w-full h-14 stroke-[#00E5FF] fill-none" viewBox="0 0 100 30">
                  <path d="M0 15 Q 10 5, 20 15 T 40 15 T 60 5 T 80 20 T 100 12" strokeWidth="2" />
                </svg>
                <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-0.5">
                  <span>Axis-X: 0.42g</span>
                  <span>Axis-Y: 0.38g</span>
                  <span className="text-[#00E5FF]">Axis-Z: 1.42g</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
