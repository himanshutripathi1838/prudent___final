import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Key, RefreshCw, Database, Server, FileText, Cpu } from 'lucide-react';

export default function SecurityReliabilityGrid() {
  const securityFeatures = [
    {
      title: "Secure Device Communication",
      desc: "Hardware Root of Trust with cryptographic secure element silicon.",
      icon: Lock
    },
    {
      title: "MQTT Over TLS 1.3 Encryption",
      desc: "End-to-end encrypted telemetry payloads in transit and at rest.",
      icon: ShieldCheck
    },
    {
      title: "Role-Based Access Control (RBAC)",
      desc: "Granular administrative permissions and multi-factor authentication.",
      icon: Key
    },
    {
      title: "Hardware Device Authentication",
      desc: "Unique X.509 client certificate provisioning per gateway node.",
      icon: Cpu
    },
    {
      title: "A/B Dual-Partition OTA Firmware",
      desc: "Un-brickable remote firmware updates with automated 100% rollback.",
      icon: RefreshCw
    },
    {
      title: "Edge Failover & Store-and-Forward",
      desc: "Local SQLite memory buffer ensuring zero data loss during cloud drops.",
      icon: Database
    },
    {
      title: "Multi-Tenant Cloud Scalability",
      desc: "Enterprise SLA with 99.9% uptime and auto-scaling time-series cluster.",
      icon: Server
    },
    {
      title: "Immutable Audit Logs & Reports",
      desc: "Complete auditability for compliance, ISO 27001 & SCADA standards.",
      icon: FileText
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#060B12] border-b border-[#1E293B]/60 relative overflow-hidden">
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
            ENTERPRISE RELIABILITY
          </span>
          <h2 className="text-3xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight font-sans">
            Built for Critical Infrastructure.
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Industrial-grade security, offline resilience, and zero-trust hardware design.
          </p>
        </motion.div>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.06 }}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-[#0E1522] border border-slate-800 hover:border-[#00E5FF]/40 transition-all duration-300 shadow-xl space-y-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#060B12] border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] group-hover:scale-110 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-white font-mono group-hover:text-[#00E5FF] transition-colors leading-snug">
                  {sec.title}
                </h3>

                <p className="text-xs text-slate-300 font-normal leading-relaxed">
                  {sec.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
