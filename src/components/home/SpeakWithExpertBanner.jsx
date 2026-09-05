import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

export default function SpeakWithExpertBanner() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-r from-[#00C2CB]/20 via-[#121A28] to-[#8B5CF6]/20 border-y border-[#00C2CB]/40 relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="space-y-2 max-w-2xl">
            <span className="uppercase text-[12px] font-mono tracking-[0.1em] text-[#00C2CB] bg-[#00C2CB]/20 px-3.5 py-1 rounded-full border border-[#00C2CB]/40 inline-flex items-center gap-1.5 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#00C2CB]" />
              Engineering Advisory
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Speak With an IIoT Solutions Expert
            </h2>
            <p className="text-base text-slate-300 font-normal">
              Connect with our systems architects to evaluate your field sensor telemetry, edge gateway hardware requirements, and cloud deployment roadmap.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <button
              onClick={() => navigate('/contact-us')}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-[#00C2CB] hover:bg-[#00E5FF] text-slate-950 font-bold text-base transition-all shadow-xl hover:shadow-[0_0_30px_rgba(0,194,203,0.6)] flex items-center justify-center gap-2.5 active:scale-95"
            >
              <span>Schedule Engineering Call</span>
              <PhoneCall className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
