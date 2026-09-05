import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Activity, ShieldCheck, Radio, Server } from 'lucide-react';

export default function CosmicHeroSection({ onDemoRequest }) {
  const navigate = useNavigate();

  const [smallStars, setSmallStars] = useState('');
  const [mediumStars, setMediumStars] = useState('');
  const [bigStars, setBigStars] = useState('');

  // Generate random star positions
  const generateStarBoxShadow = (count) => {
    const shadows = [];
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      shadows.push(`${x}px ${y}px #FFF`);
    }
    return shadows.join(', ');
  };

  useEffect(() => {
    setSmallStars(generateStarBoxShadow(700));
    setMediumStars(generateStarBoxShadow(200));
    setBigStars(generateStarBoxShadow(100));
  }, []);

  return (
    <section className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#050508] overflow-hidden flex items-center justify-center border-b border-[#1E293B]">
      
      {/* Stars Layers */}
      <div
        style={{ boxShadow: smallStars }}
        className="absolute inset-0 w-[1px] h-[1px] bg-transparent animate-[animStar_50s_linear_infinite] pointer-events-none z-0"
      />
      <div
        style={{ boxShadow: mediumStars }}
        className="absolute inset-0 w-[2px] h-[2px] bg-transparent animate-[animStar_100s_linear_infinite] pointer-events-none z-0"
      />
      <div
        style={{ boxShadow: bigStars }}
        className="absolute inset-0 w-[3px] h-[3px] bg-transparent animate-[animStar_150s_linear_infinite] pointer-events-none z-0"
      />

      {/* Cyber Grid Subtle Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none z-0" />

      {/* Glowing Horizon & Earth Curvature */}
      <div className="absolute -bottom-60 sm:-bottom-80 left-1/2 -translate-x-1/2 w-[800px] sm:w-[1400px] h-[400px] sm:h-[600px] rounded-[100%] bg-gradient-to-t from-[#060B12] via-[#0B1528] to-[#00E5FF]/20 border-t border-[#00E5FF]/50 shadow-[0_-30px_100px_rgba(0,229,255,0.35)] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00E5FF] to-transparent shadow-[0_0_40px_8px_#00E5FF] pointer-events-none z-0" />

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8B5CF6]/15 blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[200px] bg-[#00E5FF]/10 blur-[140px] rounded-full pointer-events-none z-0" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-24 text-center">
        
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/40 text-[#00E5FF] text-xs font-mono font-bold tracking-widest uppercase shadow-lg shadow-[#00E5FF]/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
            PRUDENT SYSTEMS • INDUSTRIAL IOT & EDGE AI PLATFORM
          </motion.div>

          {/* Main Cosmic Headline */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold text-white tracking-tight leading-[1.1] font-sans drop-shadow-[0_10px_35px_rgba(0,0,0,0.95)]"
          >
            Powering Industry 4.0 — <br />
            <span className="bg-gradient-to-r from-white via-[#00E5FF] to-[#8B5CF6] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,229,255,0.6)]">
              From Sensors to Cloud Intelligence
            </span>
          </motion.h1>

          {/* Subtitle Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto font-sans drop-shadow-md"
          >
            Universal IIoT Gateways, Edge AI vibration analytics, and remote OTA firmware infrastructure engineered for Railways, Civil Bridges, Water & Manufacturing.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => navigate('/solution-portfolio')}
              className="px-8 py-4 rounded-full bg-[#00E5FF] hover:bg-[#52F1FF] text-slate-950 font-extrabold text-sm font-sans transition-all shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:shadow-[0_0_50px_rgba(0,229,255,0.8)] flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onDemoRequest}
              className="px-8 py-4 rounded-full text-white bg-[#0E1522]/90 hover:bg-[#00E5FF]/20 border border-slate-700 hover:border-[#00E5FF] font-bold text-sm font-sans transition-all backdrop-blur-md flex items-center gap-2 cursor-pointer shadow-xl"
            >
              <span>Request a Demo</span>
              <Cpu className="w-4 h-4 text-[#00E5FF]" />
            </button>
          </motion.div>

          {/* Key Proof Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-12 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto text-center"
          >
            <div className="p-3 rounded-2xl bg-[#0B101A]/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#00E5FF]">10K+</div>
              <div className="text-xs text-slate-400 font-sans mt-0.5">Active Gateways</div>
            </div>
            <div className="p-3 rounded-2xl bg-[#0B101A]/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">99.9%</div>
              <div className="text-xs text-slate-400 font-sans mt-0.5">OTA Success Rate</div>
            </div>
            <div className="p-3 rounded-2xl bg-[#0B101A]/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-[#00E5FF]">24+</div>
              <div className="text-xs text-slate-400 font-sans mt-0.5">States Covered</div>
            </div>
            <div className="p-3 rounded-2xl bg-[#0B101A]/60 border border-slate-800/80 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">24/7</div>
              <div className="text-xs text-slate-400 font-sans mt-0.5">Live Telemetry</div>
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
