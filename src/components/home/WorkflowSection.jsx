import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Activity, Cpu, Cloud, BrainCircuit, Bell, ArrowRight, GitBranch, X, CheckCircle2, ShieldCheck, Zap, Info } from 'lucide-react';

export default function WorkflowSection() {
  const [selectedStage, setSelectedStage] = useState(null);

  const layers = {
    field: {
      name: "Field Layer",
      color: "#00C2CB",
      bg: "rgba(0, 194, 203, 0.12)",
      border: "rgba(0, 194, 203, 0.4)",
      hoverBorder: "rgba(0, 194, 203, 0.8)",
      glow: "rgba(0, 194, 203, 0.25)"
    },
    processing: {
      name: "Processing Layer",
      color: "#8B5CF6",
      bg: "rgba(139, 92, 246, 0.12)",
      border: "rgba(139, 92, 246, 0.4)",
      hoverBorder: "rgba(139, 92, 246, 0.8)",
      glow: "rgba(139, 92, 246, 0.25)"
    },
    insight: {
      name: "Insight Layer",
      color: "#F97316",
      bg: "rgba(249, 115, 22, 0.12)",
      border: "rgba(249, 115, 22, 0.4)",
      hoverBorder: "rgba(249, 115, 22, 0.8)",
      glow: "rgba(249, 115, 22, 0.25)"
    }
  };

  const workflowStages = [
    {
      id: "sensors",
      step: "01",
      title: "Sensors",
      subtitle: "Field devices & wireless nodes",
      icon: Radio,
      layer: layers.field,
      image: "/images/sensors_card_bg.png",
      details: {
        whatItIs: "Physical field devices (vibration accelerometers, 80GHz water level radar, CT current clamps, UV optical spark sensors, temperature probes) that continuously measure physical phenomena.",
        howItWorks: "Converts physical forces (vibration shocks, infrared radiation, radio wave reflections, electromagnetic current) into raw electrical signals (mV, 4–20mA, pulse frequency).",
        industrialUse: [
          "Railways: Piezo accelerometers detect rail track vibration & wheel-flat impacts at 160 km/h.",
          "Bridges: 80GHz non-contact radar measures river water level with ±1mm accuracy.",
          "Factories: 10kHz accelerometers monitor CNC motor bearing health."
        ]
      }
    },
    {
      id: "daq",
      step: "02",
      title: "DAQ",
      subtitle: "Signal capture & ADC",
      icon: Activity,
      layer: layers.field,
      image: "/images/daq_card_bg.png",
      details: {
        whatItIs: "High-speed Data Acquisition (DAQ) module that conditions analog sensor signals and converts them into precise digital telemetry data.",
        howItWorks: "Uses 16-bit/24-bit high-speed Analog-to-Digital Converters (ADC) operating at up to 10,000 samples/sec, filtering out industrial electrical noise.",
        industrialUse: [
          "MSME Factories: Modular ₹2–10 Lakh DAQ retrofit collects signals from 10 CNC machines to calculate OEE = Availability × Performance × Quality.",
          "Power Plants: CT current clamps measure transformer overload signatures."
        ]
      }
    },
    {
      id: "gateway",
      step: "03",
      title: "Edge Gateway",
      subtitle: "Edge AI, OTA firmware",
      icon: Cpu,
      layer: layers.processing,
      image: "/images/gateway_card_bg.png",
      details: {
        whatItIs: "Industrial IoT Edge Gateway (Prudent Gate-200X) acting as the local intelligence hub, executing Edge AI models and failsafe dual-partition A/B OTA updates.",
        howItWorks: "Computes local FFT vibration spectrographs and TensorFlow Lite ML models (`bearing_model_v3.tflite`). Buffers data locally in 32GB eMMC storage during internet outages (store-and-forward).",
        industrialUse: [
          "Bandwidth Optimization: Cuts cloud data bandwidth by 95% by sending only processed insights.",
          "Zero Site Visits: Failsafe OTA firmware updates thousands of remote field units remotely."
        ]
      }
    },
    {
      id: "cloud",
      step: "04",
      title: "Cloud Platform",
      subtitle: "Storage, MQTTS broker",
      icon: Cloud,
      layer: layers.processing,
      image: "/images/cloud_card_bg.png",
      details: {
        whatItIs: "Centralized cloud infrastructure and MQTTS message broker that aggregates time-series data from thousands of deployed edge gateways.",
        howItWorks: "Clustered Mosquitto MQTT broker + TimescaleDB database receives encrypted TLS 1.3 payloads, managing device fleets, firmware repositories, and access control.",
        industrialUse: [
          "Centralized Management: Tracks 500+ railway gateways, 200+ bridge stations, and 1,000+ factory machines on a single unified cloud backbone.",
          "Multi-Factory Scalability: Aggregates telemetry across multiple manufacturing plants nationwide."
        ]
      }
    },
    {
      id: "ai",
      step: "05A",
      title: "AI Analytics",
      subtitle: "Anomaly detection & FFT",
      icon: BrainCircuit,
      layer: layers.insight,
      image: "/images/ai_card_bg.png",
      branchLabel: "Real-time AI Inference",
      details: {
        whatItIs: "Machine learning analytics engine that detects abnormal equipment behavior, identifies bearing defects (BPFO, BPFI), and predicts machine failures before breakdown.",
        howItWorks: "Runs time-series pattern recognition, spectral FFT breakdown, and Remaining Useful Life (RUL) forecasting algorithms to calculate asset health scores.",
        industrialUse: [
          "Predictive Maintenance: Predicts motor bearing failure 14 days before breakdown, preventing unplanned factory stoppage.",
          "Flood Forecasting: Evaluates river water level trends and forecasts hydrodynamic storm surge risks."
        ]
      }
    },
    {
      id: "dashboard",
      step: "05B",
      title: "Dashboard / Alerts",
      subtitle: "SMS, WhatsApp, web GIS",
      icon: Bell,
      layer: layers.insight,
      image: "/images/dashboard_card_bg.png",
      branchLabel: "Instant Notifications & Web GIS",
      details: {
        whatItIs: "Real-time Web GIS SCADA wallboards and automated emergency alert notification dispatcher (SMS, WhatsApp, SCADA, Email).",
        howItWorks: "Websockets feed sub-second chart updates to web & mobile dashboards; instant alerts trigger when sensor parameters exceed safety thresholds (>80°C, flood surge).",
        industrialUse: [
          "Emergency Siren Trigger: Automatically triggers river warning sirens and sends WhatsApp alerts to civic authorities during flood surges.",
          "Maintenance Dispatch: Generates automated SAP/ERP maintenance tickets when machine health drops."
        ]
      }
    }
  ];

  return (
    <section className="py-28 lg:py-36 bg-[#10151F] text-slate-100 relative overflow-hidden border-b border-[#1E293B]">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

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
            End-to-end flow
          </span>
          <h2 className="text-3xl lg:text-[38px] font-semibold text-white tracking-tight leading-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base lg:text-[17px] font-normal text-slate-400 leading-relaxed max-w-2xl mx-auto">
            A 6-stage intelligent telemetry pipeline connecting physical field assets through edge processing to cloud AI insights and emergency alerts. <span className="text-[#00C2CB] font-semibold cursor-pointer underline">Click any stage for full specifications.</span>
          </p>
        </motion.div>

        {/* Pipeline Layout */}
        <div className="relative mb-16">
          
          {/* Row 1: Stages 01, 02, 03, 04 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-8">
            {workflowStages.slice(0, 4).map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedStage(stage)}
                  className="relative group p-6 sm:p-8 rounded-2xl bg-[#121926] border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl hover:shadow-[0_0_30px_rgba(0,194,203,0.3)]"
                  style={{ borderColor: stage.layer.border }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      boxShadow: `0 0 30px -5px ${stage.layer.glow}`,
                      borderColor: stage.layer.hoverBorder,
                      borderWidth: '1px'
                    }}
                  />

                  <div>
                    {/* Custom Image Header */}
                    {stage.image && (
                      <div className="relative h-36 w-full rounded-xl overflow-hidden mb-5 border border-[#00C2CB]/30">
                        <img
                          src={stage.image}
                          alt={stage.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121926] via-[#121926]/30 to-transparent" />
                        <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#0A0E14]/90 text-[#00C2CB] border border-[#00C2CB]/40">
                          STAGE {stage.step}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-1">
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: stage.layer.bg,
                          border: `1px solid ${stage.layer.border}`,
                          color: stage.layer.color
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00C2CB] transition-colors">
                        {stage.title}
                      </h3>
                    </div>

                    <p className="text-sm font-medium text-slate-400 mb-4">
                      {stage.subtitle}
                    </p>

                    <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00C2CB] font-semibold group-hover:translate-x-1 transition-transform">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Desktop Connector Line with Looping Pulsing Dot */}
                  {index < 3 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                      <div className="relative w-8 flex items-center justify-center">
                        <div className="w-full h-[2px] border-t-2 border-dashed border-slate-700" />
                        <motion.div
                          animate={{ x: [-14, 14] }}
                          transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute w-2.5 h-2.5 rounded-full shadow-[0_0_8px_rgba(0,194,203,0.8)]"
                          style={{ backgroundColor: stage.layer.color }}
                        />
                      </div>
                    </div>
                  )}

                </motion.div>
              );
            })}
          </div>

          {/* Branch Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="my-6 p-4 rounded-xl bg-[#121824] border border-[#8B5CF6]/40 max-w-xl mx-auto text-center flex items-center justify-center gap-3 shadow-lg"
          >
            <GitBranch className="w-5 h-5 text-[#8B5CF6] shrink-0 animate-pulse" />
            <span className="text-xs sm:text-sm text-slate-300 font-mono">
              Cloud Platform Branches into Dual Parallel Output Streams
            </span>
          </motion.div>

          {/* Row 2: Stages 05A & 05B (AI Analytics & Dashboard / Alerts) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto relative">
            {workflowStages.slice(4).map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.15 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedStage(stage)}
                  className="relative group p-6 sm:p-8 rounded-2xl bg-[#121926] border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-xl hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
                  style={{ borderColor: stage.layer.border }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{
                      boxShadow: `0 0 30px -5px ${stage.layer.glow}`,
                      borderColor: stage.layer.hoverBorder,
                      borderWidth: '1px'
                    }}
                  />

                  <div>
                    {/* Branch Label Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase font-bold bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30">
                        {stage.branchLabel}
                      </span>
                      <span className="text-xs font-mono font-extrabold text-slate-500">
                        BRANCH {stage.step}
                      </span>
                    </div>

                    {/* Custom Image Header */}
                    {stage.image && (
                      <div className="relative h-44 w-full rounded-xl overflow-hidden mb-5 border border-[#F97316]/40">
                        <img
                          src={stage.image}
                          alt={stage.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121926] via-[#121926]/30 to-transparent" />
                      </div>
                    )}

                    <div className="flex items-center gap-4 mb-2">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg"
                        style={{
                          backgroundColor: stage.layer.bg,
                          border: `1px solid ${stage.layer.border}`,
                          color: stage.layer.color,
                          boxShadow: `0 0 15px ${stage.layer.glow}`
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#F97316] transition-colors">
                          {stage.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-400">
                          {stage.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-[#F97316] font-semibold group-hover:translate-x-1 transition-transform">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Interactive Detail Modal Popup in 100% Professional English */}
      <AnimatePresence>
        {selectedStage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStage(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#121A28] border border-[#00C2CB]/50 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 text-slate-100"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStage(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#0A0E14] text-slate-400 hover:text-white border border-slate-700 hover:border-[#00C2CB] transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6 pr-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                  style={{
                    backgroundColor: selectedStage.layer.bg,
                    border: `1px solid ${selectedStage.layer.border}`,
                    color: selectedStage.layer.color
                  }}
                >
                  {React.createElement(selectedStage.icon, { className: "w-7 h-7" })}
                </div>
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-[#00C2CB] block mb-0.5">
                    STAGE {selectedStage.step} • {selectedStage.layer.name}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    {selectedStage.title}
                  </h3>
                </div>
              </div>

              {/* Image Preview inside Modal */}
              {selectedStage.image && (
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 border border-slate-800">
                  <img
                    src={selectedStage.image}
                    alt={selectedStage.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121A28] via-transparent to-transparent" />
                </div>
              )}

              {/* Modal Content Sections in 100% Professional English */}
              <div className="space-y-6">
                
                {/* 1. Core Function & Overview */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#0A0E14] border border-slate-800 space-y-2">
                  <div className="text-xs font-mono font-bold uppercase text-[#00C2CB] flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#00C2CB]" />
                    <span>Core Function & System Overview</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {selectedStage.details.whatItIs}
                  </p>
                </div>

                {/* 2. Technical Architecture & Operation */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#0A0E14] border border-slate-800 space-y-2">
                  <div className="text-xs font-mono font-bold uppercase text-[#F2A623] flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#F2A623]" />
                    <span>Technical Architecture & Operation</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {selectedStage.details.howItWorks}
                  </p>
                </div>

                {/* 3. Industrial Deployment & Real-World Use Cases */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#0A0E14] border border-slate-800 space-y-3">
                  <div className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Industrial Deployment & Real-World Use Cases</span>
                  </div>
                  <div className="space-y-2">
                    {selectedStage.details.industrialUse.map((useItem, uIdx) => (
                      <div key={uIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-normal">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{useItem}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-4 border-t border-slate-800 text-center">
                <button
                  onClick={() => setSelectedStage(null)}
                  className="px-8 py-3 rounded-xl bg-[#00C2CB] hover:bg-[#00E5FF] text-slate-950 font-bold text-xs font-mono transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,194,203,0.5)]"
                >
                  Close Stage Specifications
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
