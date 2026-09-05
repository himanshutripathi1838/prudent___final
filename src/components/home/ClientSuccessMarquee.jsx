import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Award, ShieldCheck, Landmark, Building2 } from 'lucide-react';

export default function ClientSuccessMarquee() {
  const deployments = [
    {
      partner: "Indian Railways Zonal Division",
      type: "Railway Infrastructure",
      desc: "Deployed track vibration & wheel-flat monitoring across 450+ route kilometers.",
      metric: "Zero Derailment Incidents"
    },
    {
      partner: "State Water Resources Department",
      type: "Hydro & River Basins",
      desc: "Automated 80GHz radar water level telemetry across 35 major reservoirs.",
      metric: "±1mm Flood Accuracy"
    },
    {
      partner: "National Bridge Construction Corp",
      type: "Structural Health",
      desc: "Pier scour & tilt telemetry on 12 critical river bridges with satellite fallback.",
      metric: "100% Zero-Outage SLA"
    },
    {
      partner: "Apex Smart MSME Manufacturing Cluster",
      type: "Predictive Maintenance",
      desc: "Edge TFLite bearing fault diagnosis across 250 heavy CNC motor shafts.",
      metric: "75% Downtime Cut"
    }
  ];

  return (
    <section className="py-24 bg-[#0D121B] border-b border-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="uppercase text-[12px] font-mono tracking-[0.1em] text-[#00C2CB] bg-[#00C2CB]/10 px-3.5 py-1 rounded-full border border-[#00C2CB]/30 inline-block mb-3">
            Proven Field Impact
          </span>
          <h2 className="text-3xl lg:text-[38px] font-semibold text-white tracking-tight">
            See What's Possible
          </h2>
          <p className="mt-2 text-base text-slate-400 font-normal">
            Real-world deployments across railways, public water departments, and smart factories.
          </p>
        </div>

        {/* 4 Partner Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deployments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-[#121A28] border border-slate-800 hover:border-[#00C2CB]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00C2CB]/10 border border-[#00C2CB]/30 flex items-center justify-center text-[#00C2CB]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#F2A623]/15 text-[#F2A623] border border-[#F2A623]/30">
                    {item.metric}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">
                  {item.type}
                </span>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00C2CB] transition-colors">
                  {item.partner}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-[#00C2CB]">
                <span>Read Story</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
