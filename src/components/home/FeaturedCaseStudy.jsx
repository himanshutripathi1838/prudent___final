import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Activity, Wind, ShieldCheck } from 'lucide-react';

export default function FeaturedCaseStudy() {
  const navigate = useNavigate();

  return (
    <section className="py-28 lg:py-36 bg-[#0D1620] border-y border-[#1E293B] relative overflow-hidden">
      {/* Subtle Corner Radial Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00C2CB]/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#121A28] border border-[#00C2CB]/40 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Case Study Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="uppercase text-[12px] font-mono tracking-[0.1em] text-[#00C2CB] bg-[#00C2CB]/10 px-3.5 py-1 rounded-full border border-[#00C2CB]/30">
                  Featured Case Study
                </span>
                <span className="text-xs font-mono text-slate-400">Infrastructure Deployment</span>
              </div>

              <h3 className="text-3xl lg:text-[38px] font-semibold text-white tracking-tight leading-tight">
                Structural Health & River Scour Monitoring
              </h3>

              <p className="text-base lg:text-[17px] font-normal text-slate-400 leading-relaxed">
                Deployed across a 1.2km critical river bridge spanning flood plains. The system integrates 80GHz radar water level transmitters, tri-axial pier tilt accelerometers, and local edge gateways with dual satellite fallback.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#0A0E14] border border-slate-800 text-center">
                  <Droplets className="w-5 h-5 text-[#00C2CB] mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-white">Water Level</div>
                  <div className="text-[10px] text-slate-400 font-mono">±1mm Radar</div>
                </div>
                <div className="p-4 rounded-xl bg-[#0A0E14] border border-slate-800 text-center">
                  <Activity className="w-5 h-5 text-[#00C2CB] mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-white">Pier Scour</div>
                  <div className="text-[10px] text-slate-400 font-mono">Sub-arcsec Tilt</div>
                </div>
                <div className="p-4 rounded-xl bg-[#0A0E14] border border-slate-800 text-center">
                  <Wind className="w-5 h-5 text-[#F2A623] mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-white">Wind Load</div>
                  <div className="text-[10px] text-slate-400 font-mono">2D Ultrasonic</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigate('/solution-portfolio#bridge-monitoring')}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00C2CB] hover:bg-[#00E5FF] text-slate-950 font-bold text-sm transition-all shadow-lg hover:shadow-[0_0_25px_rgba(0,194,203,0.5)] active:scale-95"
                >
                  <span>Read Full Technical Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Technical SVG Vector Illustration of Bridge Cross-Section with Sensor Markers */}
            <div className="lg:col-span-6 relative">
              <div className="p-6 rounded-2xl bg-[#0A0E14] border border-[#00C2CB]/40 shadow-2xl relative overflow-hidden group">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-4 pb-3 border-b border-slate-800">
                  <span className="text-[#00C2CB] font-bold">Bridge Cross-Section Sensor Diagram</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    Live Scour Mesh
                  </span>
                </div>

                {/* SVG Technical Illustration */}
                <div className="w-full h-64 relative bg-[#0D121B] rounded-xl overflow-hidden border border-slate-800 p-2 flex items-center justify-center">
                  <svg viewBox="0 0 600 320" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Background Grid */}
                    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    </pattern>
                    <rect width="600" height="320" fill="url(#grid)" />

                    {/* Bridge Deck Structure */}
                    <rect x="50" y="90" width="500" height="24" rx="4" fill="#121A28" stroke="#00C2CB" strokeWidth="2" />
                    <line x1="50" y1="102" x2="550" y2="102" stroke="#00C2CB" strokeWidth="1" strokeDasharray="4 4" />

                    {/* Bridge Piers */}
                    <path d="M160 114 L150 250 H200 L190 114 Z" fill="#121824" stroke="#1E293B" strokeWidth="2" />
                    <path d="M400 114 L390 250 H440 L430 114 Z" fill="#121824" stroke="#1E293B" strokeWidth="2" />

                    {/* River Water Level Animation Line */}
                    <path d="M 40 210 Q 150 200 300 210 T 560 205" stroke="#0284C7" strokeWidth="3" fill="none" opacity="0.8" />
                    <path d="M 40 210 Q 150 200 300 210 T 560 205 L 560 290 L 40 290 Z" fill="rgba(2, 132, 199, 0.12)" />

                    {/* Scour Bed Soil Level Line */}
                    <path d="M 40 260 Q 175 275 300 258 T 560 265" stroke="#94A3B8" strokeWidth="2" strokeDasharray="6 4" fill="none" />

                    {/* Sensor Node Markers (Glowing Circles + Pulse) */}
                    
                    {/* Sensor 1: Water Radar Level */}
                    <g transform="translate(300, 90)">
                      <circle cx="0" cy="0" r="10" fill="#0A0E14" stroke="#00C2CB" strokeWidth="2" />
                      <circle cx="0" cy="0" r="4" fill="#00C2CB" />
                      <line x1="0" y1="10" x2="0" y2="115" stroke="#00C2CB" strokeWidth="1.5" strokeDasharray="3 3" />
                      <text x="15" y="-5" fill="#00C2CB" fontSize="11" fontFamily="monospace" fontWeight="bold">80GHz Radar Level</text>
                    </g>

                    {/* Sensor 2: Pier Tilt Sensor */}
                    <g transform="translate(175, 160)">
                      <circle cx="0" cy="0" r="8" fill="#0A0E14" stroke="#F2A623" strokeWidth="2" />
                      <circle cx="0" cy="0" r="3" fill="#F2A623" />
                      <text x="-120" y="4" fill="#F2A623" fontSize="11" fontFamily="monospace">Pier Tilt Sensor</text>
                      <line x1="-20" y1="0" x2="-8" y2="0" stroke="#F2A623" strokeWidth="1" />
                    </g>

                    {/* Sensor 3: Vibration MEMS Accelerometer */}
                    <g transform="translate(415, 140)">
                      <circle cx="0" cy="0" r="8" fill="#0A0E14" stroke="#8B5CF6" strokeWidth="2" />
                      <circle cx="0" cy="0" r="3" fill="#8B5CF6" />
                      <text x="16" y="4" fill="#8B5CF6" fontSize="11" fontFamily="monospace">Tri-Axial MEMS</text>
                    </g>

                    {/* Sensor 4: Wind Vector Anemometer */}
                    <g transform="translate(500, 65)">
                      <circle cx="0" cy="0" r="8" fill="#0A0E14" stroke="#00C2CB" strokeWidth="2" />
                      <line x1="0" y1="8" x2="0" y2="25" stroke="#00C2CB" strokeWidth="1.5" />
                      <text x="-110" y="0" fill="#00C2CB" fontSize="11" fontFamily="monospace">2D Ultrasonic Wind</text>
                    </g>
                  </svg>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>River Scour Depth: 4.2m</span>
                  <span className="text-[#00C2CB] font-bold">Telemetry: 4G + Satellite</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
