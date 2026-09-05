import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Activity, Server, Cloud, Brain, LayoutDashboard, Database } from 'lucide-react';

export default function IntegrationsArchitecture() {
  const stackNodes = [
    { label: "Sensors", tech: "ESP32 / PT100", desc: "Physical Conditions", icon: Activity },
    { label: "DAQ", tech: "Industrial MCU", desc: "16-Bit Conversion", icon: Cpu },
    { label: "Edge AI", tech: "Linux Edge + TFLite", desc: "Local Inferencing", icon: Server },
    { label: "MQTT", tech: "MQTTS / TLS 1.3", desc: "Encrypted Transport", icon: Cloud },
    { label: "Cloud", tech: "TimescaleDB", desc: "Time-Series Ingestion", icon: Database },
    { label: "AI Analytics", tech: "Python / ML", desc: "RUL & Bearing FFT", icon: Brain },
    { label: "Dashboard", tech: "REST APIs / SCADA", desc: "Alarms & Insights", icon: LayoutDashboard }
  ];

  const integrationProtocols = [
    { name: "MQTT / MQTTS", category: "Telemetry Protocol" },
    { name: "Modbus RTU / TCP", category: "Industrial Fieldbus" },
    { name: "OPC-UA", category: "Industrial Automation" },
    { name: "REST APIs & Webhooks", category: "Cloud Integration" },
    { name: "PLC & SCADA Interfaces", category: "Control Systems" },
    { name: "AWS / Azure IoT", category: "Cloud Infrastructure" },
    { name: "WhatsApp & SMS Alarms", category: "Emergency Alerts" },
    { name: "SQLite Local Buffer", category: "Store & Forward" }
  ];

  return (
    <section id="integrations" className="py-24 lg:py-32 bg-[#0A0E14] border-b border-[#1E293B]/60 relative overflow-hidden">
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
            INTEGRATIONS & TECH STACK
          </span>
          <h2 className="text-3xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight font-sans">
            Connect With Your Existing Infrastructure
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Open, enterprise-grade industrial protocols designed for seamless integration into legacy SCADA & ERP systems.
          </p>
        </motion.div>

        {/* Technology Stack Flow: Sensors → DAQ → Edge AI → MQTT → Cloud → AI Analytics → Dashboard */}
        <div className="p-8 rounded-3xl bg-[#121A28] border border-[#00E5FF]/40 shadow-2xl overflow-x-auto">
          <div className="text-xs font-mono text-[#00E5FF] font-bold uppercase tracking-wider mb-6">
            ENTERPRISE INDUSTRIAL TECHNOLOGY STACK
          </div>

          <div className="flex items-center justify-between min-w-[950px] gap-2">
            {stackNodes.map((node, index) => {
              const IconComp = node.icon;
              return (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-[#060B12] border border-slate-800 hover:border-[#00E5FF] transition-colors w-32 shrink-0 group">
                    <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/15 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] mb-2 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-white group-hover:text-[#00E5FF] transition-colors">{node.label}</span>
                    <span className="text-[9.5px] font-mono text-[#F2A623] mt-0.5 font-bold">{node.tech}</span>
                    <span className="text-[9px] font-mono text-slate-400 mt-0.5">{node.desc}</span>
                  </div>

                  {index < stackNodes.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#00E5FF] shrink-0 animate-pulse" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Integration Protocols Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrationProtocols.map((tool, tIdx) => (
            <div
              key={tIdx}
              className="p-4 rounded-2xl bg-[#121A28] border border-slate-800 hover:border-[#00E5FF]/40 transition-all flex flex-col items-center justify-center text-center group"
            >
              <span className="text-xs sm:text-sm font-mono font-bold text-white group-hover:text-[#00E5FF] transition-colors">
                {tool.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 mt-0.5">
                {tool.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
