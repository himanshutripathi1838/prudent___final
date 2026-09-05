import React from 'react';
import { motion } from 'framer-motion';
import StatCounter from '../common/StatCounter';
import { ShieldCheck, RefreshCw, Layers, Lock, Cpu, CheckCircle2 } from 'lucide-react';

export default function OtaStatsHighlight() {
  return (
    <section className="py-28 lg:py-36 bg-[#0A0E14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: OTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="uppercase text-[12px] font-mono tracking-[0.1em] text-[#00C2CB] bg-[#00C2CB]/10 px-3.5 py-1 rounded-full border border-[#00C2CB]/30 inline-flex items-center gap-2 mb-2">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#00C2CB]" />
              Remote Device Lifecycle Management
            </span>

            <h2 className="text-3xl lg:text-[38px] font-semibold text-white tracking-tight leading-tight">
              Update Thousands of Devices Remotely — <br />
              <span className="px-3 py-1 rounded-xl bg-[#F2A623]/15 text-[#F2A623] border border-[#F2A623]/40 inline-block mt-2">
                Zero Site Visits
              </span>
            </h2>

            <p className="text-base lg:text-[17px] font-normal text-slate-400 leading-relaxed">
              Deploying IIoT gateways in remote railways, high-altitude weather posts, or deep water reservoirs makes physical firmware maintenance cost-prohibitive. Prudent Systems integrates a failsafe dual-partition A/B flash architecture.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-6 rounded-2xl bg-[#121824] border border-[#00C2CB]/30 flex items-start gap-4">
                <Layers className="w-6 h-6 text-[#00C2CB] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-white mb-1">A/B Safe Partitioning</h4>
                  <p className="text-xs text-slate-400 font-normal">Updates secondary flash partition while active partition runs undisturbed.</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#121824] border border-[#00C2CB]/30 flex items-start gap-4">
                <Lock className="w-6 h-6 text-[#00C2CB] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-white mb-1">RSA-2048 Signed Binaries</h4>
                  <p className="text-xs text-slate-400 font-normal">Cryptographically verified releases prevent malicious firmware injection.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Spacious Stat Cards with Large Numbers (56px) and Glowing Icons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <StatCounter icon="Cpu" target={10450} suffix="+" label="Active Devices Managed" />
            <StatCounter icon="ShieldCheck" target={99.9} suffix="%" decimals={1} label="OTA Update Success Rate" />
            <StatCounter icon="CheckCircle2" target={0} suffix="" label="Site Visits Needed for Updates" />
            <StatCounter icon="RefreshCw" target={15000} suffix="+" label="Field Hours Saved Yearly" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
