import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Cpu, Server, Radio, Cloud, Brain, Bell, ChevronRight, Check } from 'lucide-react';

export default function PlatformArchitectureDiagram() {
  const [activeLayer, setActiveLayer] = useState(0);

  const architectureLayers = [
    {
      layerNum: "01",
      layerName: "SENSING",
      icon: Gauge,
      badge: "PHYSICAL SENSORS",
      items: ["Vibration (IMU)", "Temperature (PT100)", "Tilt (Sub-arcsec)", "Water Level (80GHz)", "Pressure Transducers", "Current Transformers"]
    },
    {
      layerNum: "02",
      layerName: "DATA ACQUISITION",
      icon: Cpu,
      badge: "16-BIT SIGNAL CONDITIONING",
      items: ["Analog Front-End DAQ", "10kHz High-Frequency Sampling", "Hardware Filtering", "RS485 Modbus Conversion", "Anti-Aliasing Filters", "Isolated Inputs"]
    },
    {
      layerNum: "03",
      layerName: "EDGE COMPUTING",
      icon: Server,
      badge: "LOCAL INFERENCE SOM",
      items: ["Edge Gateway SOM", "Local FFT Processing", "Quantized Edge TFLite AI", "Protocol Conversion Engine", "Store & Forward Buffer", "Zero-Latency Decisioning"]
    },
    {
      layerNum: "04",
      layerName: "CONNECTIVITY",
      icon: Radio,
      badge: "SECURE PROTOCOLS",
      items: ["MQTT / MQTTS Over TLS 1.3", "Modbus RTU / TCP", "OPC-UA Automation", "REST APIs & Webhooks", "4G LTE Cellular", "Industrial Ethernet"]
    },
    {
      layerNum: "05",
      layerName: "CLOUD PLATFORM",
      icon: Cloud,
      badge: "SCALABLE INGESTION",
      items: ["Time-Series Data Storage", "Device Management SOM OTA", "Digital Twin Modeling", "Enterprise Security SLA", "Multi-Tenant Cloud", "Historical Archiving"]
    },
    {
      layerNum: "06",
      layerName: "INTELLIGENCE",
      icon: Brain,
      badge: "AI PREDICTIVE ENGINE",
      items: ["Anomaly Detection Algorithms", "Predictive Maintenance RUL", "Asset Health Scoring (0-100)", "Bearing Defect Spectrum", "AI Diagnostics", "Trend Forecasting"]
    },
    {
      layerNum: "07",
      layerName: "ACTION & CONTROL",
      icon: Bell,
      badge: "REAL-TIME DISPATCH",
      items: ["Operational SCADA Dashboard", "Instant SMS & WhatsApp Alarms", "Emergency SCADA Relay Triggers", "Automated Maintenance Tickets", "Compliance Reports", "Executive Insights"]
    }
  ];

  return (
    <section id="platform" className="py-24 lg:py-32 bg-[#060B12] border-b border-[#1E293B]/60 relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="uppercase text-[11px] font-mono tracking-[0.15em] text-[#00E5FF] bg-[#00E5FF]/10 px-3.5 py-1 rounded-full border border-[#00E5FF]/30 inline-block font-bold">
            PLATFORM ARCHITECTURE
          </span>
          <h2 className="text-3xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight font-sans">
            One Intelligence Layer Across Your Infrastructure
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Integrated 7-layer technology stack from physical industrial sensing to automated operational dispatch.
          </p>
        </motion.div>

        {/* 7-Layer Architecture Interactive Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Layer Selector (7 Stacked Layers) */}
          <div className="lg:col-span-5 space-y-3">
            {architectureLayers.map((layer, idx) => {
              const IconComp = layer.icon;
              const isSelected = activeLayer === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveLayer(idx)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#121A28] border-[#00E5FF] shadow-[0_0_25px_rgba(0,229,255,0.25)]'
                      : 'bg-[#0B101A] border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#00E5FF] text-slate-950 font-bold' : 'bg-[#060B12] text-[#00E5FF] border border-slate-800'
                    }`}>
                      <IconComp className="w-4.5 h-4.5" />
                    </div>

                    <div>
                      <div className="text-[10px] font-mono text-slate-400">LAYER {layer.layerNum}</div>
                      <div className={`text-sm font-bold font-mono transition-colors ${isSelected ? 'text-[#00E5FF]' : 'text-white'}`}>
                        {layer.layerName}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#00E5FF] translate-x-1' : 'text-slate-600'}`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Layer Detail View Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeLayer}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-3xl bg-[#0B101A] border border-[#00E5FF]/40 shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-mono text-[#00E5FF] uppercase font-bold tracking-wider">
                    {architectureLayers[activeLayer].badge}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white font-mono mt-1">
                    LAYER {architectureLayers[activeLayer].layerNum}: {architectureLayers[activeLayer].layerName}
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30">
                  ENTERPRISE READY
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {architectureLayers[activeLayer].items.map((item, iIdx) => (
                  <div key={iIdx} className="p-4 rounded-xl bg-[#060B12] border border-slate-800/90 flex items-center gap-3">
                    <div className="w-5 h-5 rounded-md bg-[#00E5FF]/15 text-[#00E5FF] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-mono text-slate-200 font-semibold">{item}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
