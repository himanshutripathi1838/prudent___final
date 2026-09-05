import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, MapPin, Radio, Activity, Gauge, Thermometer, AlertTriangle, ShieldCheck, Filter } from 'lucide-react';

export default function RealTimeMonitoringShowcase() {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  const regions = ["All Regions", "Eastern Rail Corridor", "Pune Industrial Belt", "Western Hydro Dam", "Metro Transit Line"];

  const commandAssets = [
    { id: "NODE-101", name: "Track Section #450km", region: "Eastern Rail Corridor", status: "Healthy", health: "99.2%", temp: "38.2°C", vib: "1.2g", anomaly: "None" },
    { id: "NODE-102", name: "Hydro Pier Dam #4", region: "Western Hydro Dam", status: "Healthy", health: "98.7%", level: "34.8m", surge: "Normal", anomaly: "None" },
    { id: "NODE-103", name: "CNC Press Motor #12", region: "Pune Industrial Belt", status: "Warning", health: "82.4%", temp: "68.5°C", vib: "2.84g", anomaly: "Inner Race" },
    { id: "NODE-104", name: "OHE Pantograph #8", region: "Metro Transit Line", status: "Healthy", health: "99.8%", arcCount: "0/hr", spark: "<1ms", anomaly: "None" }
  ];

  const filteredAssets = selectedRegion === "All Regions" 
    ? commandAssets 
    : commandAssets.filter(a => a.region === selectedRegion);

  return (
    <section id="operations-center" className="py-24 lg:py-32 bg-[#0A0E14] border-b border-[#1E293B]/60 relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="uppercase text-[11px] font-mono tracking-[0.15em] text-[#00E5FF] bg-[#00E5FF]/10 px-3.5 py-1 rounded-full border border-[#00E5FF]/30 inline-block font-bold">
            REAL-TIME OPERATIONS CENTER
          </span>
          <h2 className="text-3xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight font-sans">
            See Your Entire Infrastructure. In Real Time.
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Centralized SCADA command center telemetry map, live diagnostics, active sensor feeds, and filterable asset health.
          </p>
        </motion.div>

        {/* Command Center Dashboard Shell */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-8 rounded-3xl bg-[#0B101A] border border-[#00E5FF]/40 shadow-[0_0_80px_rgba(0,0,0,0.9)] space-y-6"
        >
          {/* Top Operational Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-slate-800">
            <div className="p-4 rounded-2xl bg-[#060B12] border border-slate-800/80">
              <div className="text-[10px] font-mono text-slate-400">CONNECTED ASSETS</div>
              <div className="text-2xl font-extrabold font-mono text-white">1,248</div>
              <div className="text-[10px] font-mono text-emerald-400">● 100% Ingestion</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#060B12] border border-slate-800/80">
              <div className="text-[10px] font-mono text-slate-400">ACTIVE ALERTS</div>
              <div className="text-2xl font-extrabold font-mono text-[#F2A623]">17</div>
              <div className="text-[10px] font-mono text-amber-400">SMS / WhatsApp Active</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#060B12] border border-slate-800/80">
              <div className="text-[10px] font-mono text-slate-400">AI ANOMALIES DETECTED</div>
              <div className="text-2xl font-extrabold font-mono text-purple-400">6</div>
              <div className="text-[10px] font-mono text-purple-400">Predictive RUL Models</div>
            </div>

            <div className="p-4 rounded-2xl bg-[#060B12] border border-slate-800/80">
              <div className="text-[10px] font-mono text-slate-400">HEALTHY ASSETS</div>
              <div className="text-2xl font-extrabold font-mono text-emerald-400">98.7%</div>
              <div className="text-[10px] font-mono text-emerald-400">SLA Guaranteed</div>
            </div>
          </div>

          {/* Region & Industry Filters Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Filter className="w-4 h-4 text-[#00E5FF]" />
              <span>FILTER REGION:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer ${
                    selectedRegion === reg
                      ? 'bg-[#00E5FF] text-slate-950 shadow-md shadow-[#00E5FF]/30'
                      : 'bg-[#060B12] text-slate-400 border border-slate-800 hover:text-white'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          {/* Asset Live Diagnostic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredAssets.map((asset) => (
              <div
                key={asset.id}
                className="p-5 rounded-2xl bg-[#060B12] border border-slate-800 hover:border-[#00E5FF]/40 transition-all space-y-3"
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#00E5FF] font-bold">{asset.id}</span>
                  <span className={`px-2 py-0.5 rounded-full font-bold ${
                    asset.status === 'Warning' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  }`}>
                    {asset.status}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white font-mono">{asset.name}</h4>

                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[#F2A623]" />
                  <span>{asset.region}</span>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-300">
                  <span>Health: <strong className="text-white">{asset.health}</strong></span>
                  <span className="text-[#00E5FF]">Vib: {asset.vib || asset.surge}</span>
                </div>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
