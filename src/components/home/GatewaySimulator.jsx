import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Activity, Radio, Shield, RefreshCw, Zap, Droplets, Train, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function GatewaySimulator() {
  const [activeMode, setActiveMode] = useState('railway');
  const [isSimulating, setIsSimulating] = useState(true);
  const [telemetryValue, setTelemetryValue] = useState(42);
  const [secondaryMetric, setSecondaryMetric] = useState(0.04);
  const [status, setStatus] = useState('NORMAL');

  // Modes config
  const modes = {
    railway: {
      title: "Railway Track & Wheel Defect",
      icon: Train,
      primaryUnit: "km/h",
      primaryLabel: "Train Speed",
      secondaryUnit: "g (RMS)",
      secondaryLabel: "Vibration FFT Shock",
      normalRange: { p: "120 - 160", s: "0.02 - 0.08" },
      anomalyVal: { p: 148, s: 0.84, status: "ANOMALY DETECTED (WHEEL FLAT)" }
    },
    bridge: {
      title: "Bridge River Scour & Radar Level",
      icon: Droplets,
      primaryUnit: "m",
      primaryLabel: "Water Level Radar",
      secondaryUnit: "arcsec",
      secondaryLabel: "Pier Tilt Drift",
      normalRange: { p: "12.4 - 18.2", s: "0.10 - 0.25" },
      anomalyVal: { p: 24.8, s: 1.45, status: "FLOOD SURGE ALARM (CRITICAL)" }
    },
    machine: {
      title: "Machine Predictive Maintenance",
      icon: Activity,
      primaryUnit: "RPM",
      primaryLabel: "Motor Shaft Speed",
      secondaryUnit: "mm/s",
      secondaryLabel: "BPFO Bearing Velocity",
      normalRange: { p: "1450 - 1500", s: "0.8 - 2.1" },
      anomalyVal: { p: 1485, s: 8.9, status: "BEARING FAULT (BPFI EXCEEDED)" }
    },
    spark: {
      title: "OHE Pantograph Arc Spark",
      icon: Zap,
      primaryUnit: "amps",
      primaryLabel: "Contact Wire Current",
      secondaryUnit: "ms",
      secondaryLabel: "UV Arc Duration",
      normalRange: { p: "450 - 600", s: "0.0 - 0.2" },
      anomalyVal: { p: 850, s: 4.8, status: "CATENARY ARC SPARK FLAGGED" }
    }
  };

  const currentMode = modes[activeMode];

  // Continuous simulation ticker
  useEffect(() => {
    if (!isSimulating) return;

    const interval = setInterval(() => {
      if (status === 'ANOMALY DETECTED') return;

      if (activeMode === 'railway') {
        setTelemetryValue(140 + Math.floor(Math.random() * 15));
        setSecondaryMetric(parseFloat((0.03 + Math.random() * 0.05).toFixed(2)));
        setStatus('NORMAL');
      } else if (activeMode === 'bridge') {
        setTelemetryValue(parseFloat((14.2 + Math.random() * 0.8).toFixed(1)));
        setSecondaryMetric(parseFloat((0.12 + Math.random() * 0.05).toFixed(2)));
        setStatus('NORMAL');
      } else if (activeMode === 'machine') {
        setTelemetryValue(1480 + Math.floor(Math.random() * 10));
        setSecondaryMetric(parseFloat((1.2 + Math.random() * 0.4).toFixed(1)));
        setStatus('NORMAL');
      } else if (activeMode === 'spark') {
        setTelemetryValue(520 + Math.floor(Math.random() * 40));
        setSecondaryMetric(parseFloat((0.05 + Math.random() * 0.05).toFixed(2)));
        setStatus('NORMAL');
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [activeMode, isSimulating, status]);

  const triggerAnomaly = () => {
    setTelemetryValue(currentMode.anomalyVal.p);
    setSecondaryMetric(currentMode.anomalyVal.s);
    setStatus(currentMode.anomalyVal.status);
  };

  const resetTelemetry = () => {
    setStatus('NORMAL');
  };

  return (
    <section className="py-28 lg:py-36 bg-[#0D1620] border-y border-[#1E293B] relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00C2CB]/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="uppercase text-[12px] font-mono tracking-[0.1em] text-[#00C2CB] bg-[#00C2CB]/10 px-3.5 py-1 rounded-full border border-[#00C2CB]/30 inline-block mb-3">
            Production Hardware Console
          </span>
          <h2 className="text-3xl lg:text-[40px] font-semibold text-white tracking-tight">
            Interactive IIoT Gateway Telemetry Simulator
          </h2>
          <p className="mt-3 text-base text-slate-400 font-normal">
            Select an industrial deployment profile below to simulate live edge telemetry, FFT spectrographs, and automated cloud alert triggers in real time.
          </p>
        </motion.div>

        {/* Mode Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {Object.entries(modes).map(([key, mode]) => {
            const Icon = mode.icon;
            const isActive = activeMode === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setActiveMode(key);
                  setStatus('NORMAL');
                }}
                className={`p-4 rounded-2xl border transition-all duration-300 flex items-center justify-center gap-2.5 font-mono text-xs ${
                  isActive
                    ? 'bg-[#00C2CB] text-slate-950 font-bold border-[#00C2CB] shadow-lg shadow-[#00C2CB]/25 scale-105'
                    : 'bg-[#121A28] text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="truncate">{mode.title.split(' ')[0]} {mode.title.split(' ')[1]}</span>
              </button>
            );
          })}
        </div>

        {/* Live Simulator Console Interface */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0E14] border border-[#00C2CB]/40 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-800 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Prudent Gate-200X Console</span>
                  <span className="text-xs font-mono text-[#00C2CB] bg-[#00C2CB]/10 px-2.5 py-0.5 rounded border border-[#00C2CB]/30">
                    Firmware v3.2.0-rc1
                  </span>
                </h3>
                <p className="text-xs font-mono text-slate-400">Mode: {currentMode.title}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={triggerAnomaly}
                className="px-4 py-2 rounded-xl bg-[#F2A623]/20 text-[#F2A623] border border-[#F2A623]/40 hover:bg-[#F2A623] hover:text-slate-950 font-mono text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <AlertTriangle className="w-4 h-4" />
                Simulate Field Anomaly
              </button>

              <button
                onClick={resetTelemetry}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700 text-xs font-mono font-bold transition-all flex items-center gap-1.5"
              >
                <RefreshCw className="w-4 h-4" />
                Reset Normal
              </button>
            </div>
          </div>

          {/* Telemetry Status Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Metric 1 */}
            <div className="p-6 rounded-2xl bg-[#121A28] border border-slate-800 text-center">
              <div className="text-xs font-mono text-slate-400 uppercase mb-1">{currentMode.primaryLabel}</div>
              <div className="text-4xl font-extrabold font-mono text-white">
                {telemetryValue} <span className="text-lg text-[#00C2CB] font-normal">{currentMode.primaryUnit}</span>
              </div>
              <div className="text-[11px] font-mono text-slate-500 mt-2">Normal: {currentMode.normalRange.p}</div>
            </div>

            {/* Metric 2 */}
            <div className="p-6 rounded-2xl bg-[#121A28] border border-slate-800 text-center">
              <div className="text-xs font-mono text-slate-400 uppercase mb-1">{currentMode.secondaryLabel}</div>
              <div className="text-4xl font-extrabold font-mono text-white">
                {secondaryMetric} <span className="text-lg text-[#F2A623] font-normal">{currentMode.secondaryUnit}</span>
              </div>
              <div className="text-[11px] font-mono text-slate-500 mt-2">Normal: {currentMode.normalRange.s}</div>
            </div>

            {/* Status Indicator Box */}
            <div className={`p-6 rounded-2xl border text-center flex flex-col justify-center ${
              status === 'NORMAL'
                ? 'bg-emerald-950/30 border-emerald-800 text-emerald-300'
                : 'bg-rose-950/40 border-rose-700 text-rose-300 animate-pulse'
            }`}>
              <div className="text-xs font-mono uppercase font-bold mb-1">Gateway Health Score</div>
              <div className="text-xl font-bold font-mono">
                {status === 'NORMAL' ? '100% HEALTHY' : 'ALARM ACTIVE'}
              </div>
              <div className="text-[11px] font-mono mt-1 font-semibold">{status}</div>
            </div>
          </div>

          {/* Live Dynamic Pulse Waveform SVG Graphic */}
          <div className="p-4 rounded-2xl bg-[#070A0F] border border-slate-800 relative">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
              <span>Edge DSP Vibration Waveform Stream</span>
              <span className="text-[#00C2CB]">Sampling Rate: 10,000 Hz</span>
            </div>
            <div className="h-24 w-full flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 800 100" className="w-full h-full" fill="none">
                <path
                  d={status === 'NORMAL'
                    ? "M 0 50 Q 50 40 100 50 T 200 50 T 300 45 T 400 55 T 500 50 T 600 48 T 700 52 T 800 50"
                    : "M 0 50 Q 50 10 100 90 T 200 20 T 300 85 T 400 10 T 500 95 T 600 15 T 700 85 T 800 50"
                  }
                  stroke={status === 'NORMAL' ? "#00C2CB" : "#F43F5E"}
                  strokeWidth="2.5"
                  fill="none"
                />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
