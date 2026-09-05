import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  ArrowRight,
  Star,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Cpu,
  Radio,
  Zap,
  TrendingUp,
  BarChart3,
  PieChart,
  Layers,
  Award
} from 'lucide-react';
import {
  IndianRailwaysLogo,
  DfccilLogo,
  AdaniLogo,
  NpcilLogo,
  BpclLogo,
  DefenseLogo
} from '../common/ClientLogos';

export default function OrganicWaveSolutionHero() {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[#161B33] text-white overflow-hidden pt-24 pb-0">
      
      {/* Background Soft Glow Spots */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#00C2CB]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-[#6366F1]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Cyber Grid Background overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-slate-300/80 mb-8">
          <NavLink to="/" className="hover:text-[#00E5FF] transition-colors">
            Home
          </NavLink>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[#00E5FF] font-semibold">Solution Portfolio</span>
        </nav>

        {/* 2-Column Hero Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Main Typography, CTA Button & Rating Social Proof             */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-[#00C2CB]/15 text-[#00E5FF] border border-[#00C2CB]/30">
              <Cpu className="w-3.5 h-3.5 text-[#00E5FF] animate-pulse" />
              <span>Multi-Industry IIoT Platform</span>
            </div>

            {/* Main Headline (Matching uploaded mockup styling) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
              Deliver sensor-to-cloud intelligence to your operations, anywhere.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal max-w-xl">
              Unified Universal IIoT Gateway platform delivering real-time telemetry, edge AI analytics, and predictive maintenance across Railways, Bridges, Water, and Factories.
            </p>

            {/* CTA Button (Vibrant Lime/Green styled button matching mockup) */}
            <div className="pt-2">
              <button
                onClick={() => {
                  const el = document.getElementById('solution-cards-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#65A30D] hover:bg-[#84CC16] text-white font-bold text-base transition-all shadow-xl shadow-[#65A30D]/30 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Rating Stars & Trust Social Proof */}
            <div className="pt-4 space-y-2 border-t border-slate-700/50">
              <div className="flex items-center gap-3">
                {/* 5 Stars */}
                <div className="flex items-center text-amber-400 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white font-mono">
                  4.9/5 <span className="font-normal text-slate-300 text-xs">across all industrial deployments</span>
                </span>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 pt-1">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>ISO 9001 Certified</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>RDSO Compliant</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E5FF]" />
                  <span>10k+ Field Gateways</span>
                </span>
              </div>
            </div>

          </motion.div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: 3D Perspective Layered Dashboard UI Mockup                   */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative perspective-[1200px]"
          >
            {/* Main Background Screen Mockup */}
            <div className="relative rounded-2xl bg-[#0F172A] border border-slate-700 shadow-2xl p-4 sm:p-6 transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-y-[0deg] hover:rotate-x-[0deg] transition-transform duration-700 ease-out">
              
              {/* Browser Window Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-mono text-slate-400 ml-2">prudent-telemetry-cloud.io/dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                    ● Live Telemetry
                  </span>
                </div>
              </div>

              {/* Dashboard Content Grid */}
              <div className="space-y-4">
                
                {/* Stats Summary Strip */}
                <div className="grid grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="text-slate-400 text-[11px]">Gateways Active</div>
                    <div className="text-lg font-bold text-[#00E5FF]">12,450</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="text-slate-400 text-[11px]">Avg Latency</div>
                    <div className="text-lg font-bold text-emerald-400">42 ms</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                    <div className="text-slate-400 text-[11px]">System OEE</div>
                    <div className="text-lg font-bold text-amber-400">89.6%</div>
                  </div>
                </div>

                {/* Main Graph Area */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-300 font-bold">Multi-Sensor Frequency Telemetry</span>
                    <span className="text-slate-400">Real-time Stream</span>
                  </div>
                  
                  {/* Simulated Line Chart SVG */}
                  <div className="h-28 w-full">
                    <svg className="w-full h-full" viewBox="0 0 400 100" fill="none">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,80 Q40,30 80,60 T160,20 T240,70 T320,40 T400,10 L400,100 L0,100 Z"
                        fill="url(#chartGrad)"
                      />
                      <path
                        d="M0,80 Q40,30 80,60 T160,20 T240,70 T320,40 T400,10"
                        stroke="#00E5FF"
                        strokeWidth="3"
                        fill="none"
                      />
                      <circle cx="240" cy="70" r="5" fill="#65A30D" />
                      <circle cx="320" cy="40" r="5" fill="#00E5FF" />
                    </svg>
                  </div>
                </div>

              </div>

            </div>

            {/* FLOATING LAYER 1: Pie/Donut Chart Card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white text-slate-900 p-4 shadow-2xl border border-slate-100 max-w-[210px] transform hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 mb-2">
                <PieChart className="w-4 h-4 text-[#00C2CB]" />
                <span>OEE Performance</span>
              </div>
              <div className="flex items-center gap-3">
                {/* SVG Donut Chart */}
                <div className="relative w-12 h-12 shrink-0">
                  <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E2E8F0"
                      strokeWidth="4"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#65A30D"
                      strokeWidth="4"
                      strokeDasharray="75, 100"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-slate-800">
                    88%
                  </span>
                </div>
                <div className="text-[11px] space-y-0.5 text-slate-600">
                  <div className="font-semibold text-slate-900">Availability</div>
                  <div className="text-emerald-600 font-bold">+12% vs Target</div>
                </div>
              </div>
            </div>

            {/* FLOATING LAYER 2: Waveform Telemetry Bar Card */}
            <div className="absolute -top-6 -right-4 rounded-2xl bg-white text-slate-900 p-3.5 shadow-2xl border border-slate-100 max-w-[200px] transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1.5">
                <span className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-indigo-600" />
                  <span>Track Vibration</span>
                </span>
                <span className="text-[10px] text-emerald-600 font-mono">Normal</span>
              </div>
              {/* Mini Bar Graph */}
              <div className="flex items-end gap-1 h-8">
                <div className="w-2.5 h-4 bg-indigo-200 rounded-t" />
                <div className="w-2.5 h-6 bg-indigo-400 rounded-t" />
                <div className="w-2.5 h-8 bg-[#00C2CB] rounded-t" />
                <div className="w-2.5 h-5 bg-indigo-300 rounded-t" />
                <div className="w-2.5 h-7 bg-indigo-500 rounded-t" />
                <div className="w-2.5 h-3 bg-indigo-200 rounded-t" />
              </div>
            </div>

          </motion.div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* ELEGANT ORGANIC SMOOTH CURVED WAVE SEPARATOR AT BOTTOM                    */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none relative z-10 -mb-1">
        <svg
          className="relative block w-full h-[70px] sm:h-[100px] lg:h-[130px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,32 C320,110 680,-10 1100,60 C1260,95 1380,80 1440,65 L1440,120 L0,120 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* BOTTOM CLIENT & PARTNER LOGO STRIP (IN CLEAN WHITE SECTION BELOW WAVE)     */}
      {/* ========================================================================= */}
      <div className="bg-white py-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-6">
            Trusted by Leading Industrial & Infrastructure Enterprises
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 text-slate-700 font-bold font-mono text-sm">
              <IndianRailwaysLogo className="w-8 h-8" />
              <span>Indian Railways</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold font-mono text-sm">
              <DfccilLogo className="w-8 h-8" />
              <span>DFCCIL</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold font-mono text-sm">
              <AdaniLogo className="w-8 h-8" />
              <span>Adani Ports</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold font-mono text-sm">
              <NpcilLogo className="w-8 h-8" />
              <span>NPCIL</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold font-mono text-sm">
              <DefenseLogo className="w-8 h-8" />
              <span>MoD Defense</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold font-mono text-sm">
              <BpclLogo className="w-8 h-8" />
              <span>BPCL</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
