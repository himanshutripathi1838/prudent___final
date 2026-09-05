import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu, ShieldCheck } from 'lucide-react';
import FeaturedCaseStudy from './FeaturedCaseStudy';

export default function HomeSolutionPortfolioSection() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0A0E14] border-b border-[#1E293B]">
      
      {/* Portfolio Header Intro */}
      <section className="pt-24 lg:pt-32 pb-12 bg-[#0A0E14] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="uppercase text-[12px] font-mono tracking-[0.1em] text-[#00C2CB] bg-[#00C2CB]/10 px-3.5 py-1 rounded-full border border-[#00C2CB]/30 inline-block mb-3">
            Proven Solution Portfolio
          </span>
          <h2 className="text-3xl lg:text-[40px] font-semibold text-white tracking-tight">
            Solution Portfolio Highlights
          </h2>
          <p className="mt-3 text-base text-slate-400 font-normal">
            Deployed across India's largest railways, hydro reservoirs, and manufacturing plants on a single standardized Universal IIoT Gateway platform.
          </p>
        </div>
      </section>

      {/* Featured Case Study Architecture Showcase */}
      <FeaturedCaseStudy />

      {/* Action Banner to full Solution Portfolio */}
      <section className="pb-24 lg:pb-32 bg-[#0D1620] text-center">
        <div className="max-w-4xl mx-auto px-4">
          <button
            onClick={() => navigate('/solution-portfolio')}
            className="inline-flex items-center gap-2.5 px-9 py-4 rounded-xl bg-[#00C2CB] hover:bg-[#00E5FF] text-slate-950 font-bold text-base transition-all shadow-lg hover:shadow-[0_0_25px_rgba(0,194,203,0.5)] active:scale-95"
          >
            <span>Explore Complete Solution Portfolio Page</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

    </div>
  );
}
