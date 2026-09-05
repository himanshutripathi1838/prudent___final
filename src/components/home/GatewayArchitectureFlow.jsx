import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Radio, Cloud, LayoutDashboard, CheckCircle2, Shield, Zap, Globe, Layers, ArrowRight } from 'lucide-react';

export default function GatewayArchitectureFlow() {
  const [activeStep, setActiveStep] = useState(1);

  const hardwareStack = [
    {
      layer: "Top Cover & Thermal Heat Sink",
      spec: "IP67 Anodized Aluminum Enclosure (-40°C to +85°C)",
      desc: "Passively cooled die-cast housing designed for high vibration rail tracks & loco roofs."
    },
    {
      layer: "Communication Daughtercard",
      spec: "RS485 Modbus, CAN Bus (J1939), Dual 4G/LoRa Telemetry",
      desc: "Isolated fieldbus transceivers with 2.5kV surge & ESD protection."
    },
    {
      layer: "Edge Processing Mainboard",
      spec: "Quad-Core SOM + Dual-Partition Boot Flash + Hardware Secure Boot",
      desc: "Runs Yocto Linux, local SQLite store-and-forward buffer, and TFLite Micro DSP."
    },
    {
      layer: "Power Subsystem & Solar MPPT",
      spec: "9-36V DC Wide Input + MPPT Solar + LiFePO4 Telemetry",
      desc: "Built-in battery health telemetry for zero-outage off-grid river & weather stations."
    }
  ];

  const flowSteps = [
    {
      step: 1,
      icon: Radio,
      title: "1. Industrial Sensors",
      subtitle: "Data Acquisition",
      details: "Piezoelectric vibration, 80GHz radar water level, thermocouples, CT current clamps, optical UV spark detectors."
    },
    {
      step: 2,
      icon: Cpu,
      title: "2. Universal Gateway",
      subtitle: "Edge Processing",
      details: "Protocol parsing, FFT spectral analysis, Edge AI inferencing, local SQLite buffering, encrypted MQTTS wrapper."
    },
    {
      step: 3,
      icon: Cloud,
      title: "3. Scalable Cloud Core",
      subtitle: "Broker & Storage",
      details: "Mosquitto/EMQX cluster, TimescaleDB time-series database, automated anomaly alerting engine, REST/GraphQL APIs."
    },
    {
      step: 4,
      icon: LayoutDashboard,
      title: "4. Web & Mobile Portal",
      subtitle: "Actionable Insights",
      details: "Real-time GIS wallboards, predictive RUL analytics, bridge health index, mobile push alerts, SAP/ERP tickets."
    }
  ];

  return (
    <section className="py-28 lg:py-36 bg-[#0D1620] border-b border-[#1E293B] relative overflow-hidden">
      {/* Corner Faint Teal Radial Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00C2CB]/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="uppercase text-[12px] font-mono tracking-[0.1em] text-[#00C2CB] bg-[#00C2CB]/10 px-3.5 py-1 rounded-full border border-[#00C2CB]/30 inline-block mb-3">
            Flagship Hardware Architecture
          </span>
          <h2 className="text-3xl lg:text-[38px] font-semibold text-white tracking-tight leading-tight">
            Universal IIoT Gateway & System Architecture
          </h2>
          <p className="mt-3 text-base lg:text-[17px] font-normal text-slate-400 leading-relaxed max-w-2xl mx-auto">
            The central nervous system for industrial monitoring — connecting legacy machines and field sensors to intelligent cloud platforms.
          </p>
        </motion.div>

        {/* Exploded View Diagram & Stack Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left: Interactive Exploded View Hardware Stack */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#00C2CB]" /> Exploded Hardware Assembly
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#F2A623]/15 text-[#F2A623] border border-[#F2A623]/30">
                Prudent Gate-200X
              </span>
            </div>

            {/* Stack Layers */}
            {hardwareStack.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                whileHover={{ x: 6 }}
                className="relative p-6 rounded-2xl bg-[#121926] border border-gradient group transition-all"
                style={{
                  borderImage: 'linear-gradient(135deg, rgba(0,194,203,0.3), transparent) 1'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00C2CB]/25 to-[#00C2CB]/5 border border-[#00C2CB]/30 flex items-center justify-center text-[#00C2CB] shrink-0 font-mono font-bold text-sm shadow-[0_0_15px_rgba(0,194,203,0.2)]">
                    L{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-[#00C2CB] transition-colors">
                      {item.layer}
                    </h4>
                    <div className="text-xs font-mono text-[#00C2CB] my-0.5">{item.spec}</div>
                    <p className="text-xs text-slate-400 font-normal leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Hardware Gateway Box Graphic */}
          <div className="lg:col-span-6 relative">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121A28] border border-[#00C2CB]/30 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00C2CB]/10 rounded-full blur-3xl group-hover:bg-[#00C2CB]/20 transition-all" />

              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-400">Spec Status</span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Active Telemetry
                </span>
              </div>

              {/* Exploded View SVG Illustration */}
              <div className="my-6 py-10 px-8 bg-[#0A0E14] rounded-2xl border border-slate-800 flex flex-col items-center justify-center relative shadow-inner">
                <Cpu className="w-24 h-24 text-[#00C2CB] animate-pulse drop-shadow-[0_0_20px_rgba(0,194,203,0.5)]" />
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-bold text-white">Universal Edge SOM</h4>
                  <p className="text-xs font-mono text-slate-400 mt-1">Industrial Dual-Flash Gateway Core</p>
                </div>

                <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#00C2CB]" /> Secure Boot
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#F2A623]" /> MPPT Solar
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-sky-400" /> Dual 4G/LoRa
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-400 font-mono flex items-center justify-between border-t border-slate-800 pt-4">
                <span>Thermal: -40°C to +85°C</span>
                <span>Power: 9-36V DC Wide Input</span>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Data Lifecycle Stepper */}
        <div className="bg-[#121A28] border border-[#1E293B] rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              End-to-End Data Lifecycle Flow
            </h3>
            <p className="text-sm text-slate-400 font-normal">
              Click through each layer to inspect how field data flows from hardware sensors to real-time dashboards.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {flowSteps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.step;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className={`p-5 rounded-2xl text-left border transition-all flex items-center gap-3 ${
                    isActive
                      ? 'bg-[#00C2CB]/15 border-[#00C2CB] text-white shadow-lg shadow-[#00C2CB]/10'
                      : 'bg-[#0A0E14] border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-[#00C2CB] text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#00C2CB] uppercase font-bold">{step.subtitle}</div>
                    <div className="text-sm font-bold text-white truncate">{step.title}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0E14] border border-[#1E293B]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#00C2CB] animate-ping" />
                <h4 className="text-lg font-bold text-white">
                  {flowSteps[activeStep - 1].title} Details
                </h4>
              </div>
              <span className="text-xs font-mono text-slate-500">
                Layer {activeStep} of 4
              </span>
            </div>
            <p className="text-base text-slate-300 font-normal leading-relaxed">
              {flowSteps[activeStep - 1].details}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
