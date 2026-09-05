import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import OtaArchitectureDiagram from '../components/expertise/OtaArchitectureDiagram';
import SecurityGrid from '../components/expertise/SecurityGrid';
import EdgeAiCapabilities from '../components/expertise/EdgeAiCapabilities';
import TechBadge from '../components/common/TechBadge';
import { capabilityBlocks, techStackBadges } from '../data/expertiseData';
import { Cpu, Radio, Server, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TechnicalExpertise() {
  const navigate = useNavigate();

  const blockIcons = {
    "Hardware Engineering": Cpu,
    "Communication & Protocols": Radio,
    "Software & Cloud Platform": Server
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <div className="bg-[#0A0E14] text-slate-100 min-h-screen">
      
      {/* 1. Page Header Banner */}
      <PageHeader
        title="Technical Expertise & System Architecture"
        category="Full Stack Industrial Engineering"
        subtitle="End-to-end hardware design, multi-protocol communication daemons, edge AI inferencing, and cloud time-series infrastructure."
        breadcrumbs={[{ name: 'Technical Expertise' }]}
      />

      {/* 2. Intro Capability Overview */}
      <section className="py-16 bg-[#0A0E14] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            category="Engineering Pillars"
            title="Three Layers of Industrial Reliability"
            subtitle="Explore our technological depth across embedded hardware microcontrollers, telemetry protocols, and cloud software microservices."
          />

          {/* 3. Three-Column Capability Blocks with Framer Motion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {capabilityBlocks.map((block, idx) => {
              const IconComp = blockIcons[block.category] || Cpu;
              const itemsList = block.items || [];

              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -8, transition: { duration: 0.25 } }}
                  className="p-8 rounded-3xl bg-[#121824] border border-[#1E293B] hover:border-[#00C2CB]/50 hover:shadow-2xl hover:shadow-[#00C2CB]/10 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#00C2CB]/10 border border-[#00C2CB]/30 flex items-center justify-center text-[#00C2CB] mb-4 group-hover:scale-110 group-hover:bg-[#00C2CB] group-hover:text-slate-950 transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00E5FF] transition-colors">
                      {block.category}
                    </h3>
                    <p className="text-xs font-mono text-[#00C2CB] mb-6">
                      {block.tagline}
                    </p>

                    <div className="space-y-4 mb-6">
                      {itemsList.map((item, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex items-center gap-2 text-xs font-bold text-white">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00C2CB] shrink-0" />
                            <span>{item.title}</span>
                          </div>
                          <div className="text-[11px] font-mono text-[#00E5FF]/80 pl-5">
                            {item.tech}
                          </div>
                          <p className="text-xs text-slate-400 pl-5 leading-relaxed font-normal">
                            {item.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 4. Tech Stack Badges Strip */}
      <section className="py-12 bg-[#0D121B] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-center text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
            Supported Industrial Hardware Protocols & Embedded Stack
          </p>

          <div className="space-y-4">
            {Object.entries(techStackBadges).map(([category, badges]) => (
              <div key={category} className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <span className="text-xs font-mono font-bold text-[#00C2CB] uppercase min-w-[120px] text-center sm:text-right">
                  {category}:
                </span>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {badges.map((badge, idx) => (
                    <TechBadge key={idx} text={badge} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Edge AI Inferencing Capabilities */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EdgeAiCapabilities />
      </section>

      {/* 6. OTA Firmware & Security Architecture */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OtaArchitectureDiagram />
      </section>

      {/* 7. Security & Reliability Grid */}
      <SecurityGrid />

      {/* 8. Call to Action Banner */}
      <section className="py-20 bg-[#0D121B] border-t border-[#1E293B]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#00C2CB]/20 text-[#00E5FF] border border-[#00C2CB]/40 uppercase">
              Custom Industrial Hardware & Firmware
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">
              Need Custom Hardware or Protocol Integration?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-2 max-w-2xl mx-auto">
              Our hardware engineers design custom PCB boards, RS485 Modbus drivers, and localized LoRa gateways for non-standard industrial machinery.
            </p>
            <div className="pt-6">
              <button
                onClick={() => navigate('/contact-us')}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#00C2CB] hover:bg-[#00E5FF] text-slate-900 font-bold text-base transition-all shadow-xl shadow-[#00C2CB]/25 cursor-pointer hover:scale-105 active:scale-95"
              >
                <span>Talk to Embedded Hardware Engineers</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
