import React from 'react';
import SectionHeading from '../common/SectionHeading';
import { securityFeatures } from '../../data/expertiseData';
import { FileCheck, Lock, ShieldCheck } from 'lucide-react';

const securityIcons = { FileCheck, Lock, ShieldCheck };

export default function SecurityGrid() {
  return (
    <section className="py-20 bg-[#0A0E14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="System Protection"
          title="Security Considerations"
          subtitle="Practical controls for access, data transport, validation and operational visibility."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityFeatures.map((sec, idx) => {
            const IconComp = securityIcons[sec.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#121824] border border-[#1E293B] hover:border-[#00C2CB]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00C2CB]/10 border border-[#00C2CB]/30 flex items-center justify-center text-[#00C2CB] mb-4 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00C2CB] transition-colors">
                  {sec.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {sec.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
