import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, DollarSign, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function RoiCalculator() {
  const [gatewayCount, setGatewayCount] = useState(25);
  const [downtimeCost, setDowntimeCost] = useState(2500); // $2,500/hr

  // Calculations
  const hoursSavedPerYear = gatewayCount * 12; // 12 hours saved per gateway per year
  const annualSavings = hoursSavedPerYear * downtimeCost;
  const estimatedCapEx = gatewayCount * 1500; // $1,500 per gateway hardware + software
  const paybackMonths = Math.max(0.8, parseFloat(((estimatedCapEx / annualSavings) * 12).toFixed(1)));

  return (
    <section className="py-28 lg:py-36 bg-[#0A0E14] border-b border-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="uppercase text-[12px] font-mono tracking-[0.1em] text-[#00C2CB] bg-[#00C2CB]/10 px-3.5 py-1 rounded-full border border-[#00C2CB]/30 inline-block mb-3">
            Financial Impact Modeling
          </span>
          <h2 className="text-3xl lg:text-[40px] font-semibold text-white tracking-tight">
            Smart Infrastructure ROI & Savings Calculator
          </h2>
          <p className="mt-3 text-base text-slate-400 font-normal">
            Estimate your annual financial savings and hardware payback timeline by deploying Prudent Systems Edge AI gateways.
          </p>
        </motion.div>

        {/* Calculator Interface Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#121A28] border border-[#00C2CB]/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Sliders Left Column */}
            <div className="lg:col-span-6 space-y-8">
              {/* Slider 1: Gateway Count */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <label className="font-bold text-white font-mono uppercase">
                    Target Gateways / Machine Nodes
                  </label>
                  <span className="text-xl font-extrabold font-mono text-[#00C2CB]">
                    {gatewayCount} Units
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={gatewayCount}
                  onChange={(e) => setGatewayCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#0A0E14] rounded-lg appearance-none cursor-pointer accent-[#00C2CB]"
                />
                <div className="flex justify-between text-xs text-slate-500 font-mono">
                  <span>5 Gateways</span>
                  <span>100 Gateways</span>
                  <span>200 Gateways</span>
                </div>
              </div>

              {/* Slider 2: Downtime Hourly Cost */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <label className="font-bold text-white font-mono uppercase">
                    Hourly Outage / Downtime Cost ($/hr)
                  </label>
                  <span className="text-xl font-extrabold font-mono text-[#F2A623]">
                    ${downtimeCost.toLocaleString()} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={downtimeCost}
                  onChange={(e) => setDowntimeCost(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#0A0E14] rounded-lg appearance-none cursor-pointer accent-[#F2A623]"
                />
                <div className="flex justify-between text-xs text-slate-500 font-mono">
                  <span>$500/hr</span>
                  <span>$5,000/hr</span>
                  <span>$10,000/hr</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Cards Right Column */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#0A0E14] border border-[#00C2CB]/40 text-center sm:col-span-2">
                <div className="text-xs font-mono uppercase text-slate-400 mb-1">Estimated Annual Financial Savings</div>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-[#00C2CB]">
                  ${annualSavings.toLocaleString()}
                </div>
                <div className="text-xs text-slate-500 font-mono mt-2">Based on predictive failure avoidance</div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A0E14] border border-slate-800 text-center">
                <div className="text-xs font-mono uppercase text-slate-400 mb-1">Downtime Hours Saved</div>
                <div className="text-3xl font-extrabold font-mono text-white">
                  {hoursSavedPerYear} <span className="text-base text-[#F2A623]">hrs/yr</span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#0A0E14] border border-slate-800 text-center">
                <div className="text-xs font-mono uppercase text-slate-400 mb-1">Est. Payback Timeline</div>
                <div className="text-3xl font-extrabold font-mono text-white">
                  {paybackMonths} <span className="text-base text-[#00C2CB]">Months</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
