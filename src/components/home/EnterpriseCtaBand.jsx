import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, ShieldCheck } from 'lucide-react';

export default function EnterpriseCtaBand({ onDemoRequest }) {
  const navigate = useNavigate();

  return (
    <section className="py-24 lg:py-32 bg-[#060B12] relative overflow-hidden">
      {/* Ambient Glowing Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00E5FF]/10 blur-[220px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glowing Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-10 sm:p-14 rounded-3xl bg-[#09111F] border border-[#00E5FF]/40 shadow-[0_0_80px_rgba(0,229,255,0.22)] text-center space-y-8 relative overflow-hidden"
        >
          <div className="w-16 h-16 rounded-2xl bg-[#00E5FF]/15 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] mx-auto shadow-lg shadow-[#00E5FF]/30">
            <Cpu className="w-8 h-8 animate-pulse" />
          </div>

          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight font-sans">
              Ready to Make Your Infrastructure Intelligent?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Talk to our engineers about monitoring, predictive maintenance and Industrial IoT deployment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onDemoRequest}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#00E5FF] hover:bg-[#52F1FF] text-slate-950 font-extrabold text-sm transition-all shadow-[0_0_30px_rgba(0,229,255,0.6)] hover:shadow-[0_0_45px_rgba(0,229,255,0.9)] flex items-center justify-center gap-2.5 active:scale-95 cursor-pointer font-sans"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate('/contact-us')}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-white bg-[#060B12]/90 hover:bg-[#00E5FF]/20 border border-slate-700 hover:border-[#00E5FF] font-bold text-sm transition-all flex items-center justify-center gap-2.5 backdrop-blur-md cursor-pointer font-sans"
            >
              <span>Talk to an Engineer</span>
            </button>
          </div>

          <div className="pt-4 text-xs font-mono text-slate-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
            <span>24/7 Enterprise SLA Guarantee ● Strict NDA & IP Protection</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
