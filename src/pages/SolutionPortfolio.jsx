import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SolutionDetailCard from '../components/solutions/SolutionDetailCard';
import SolutionsComparisonTable from '../components/solutions/SolutionsComparisonTable';
import { solutionsList } from '../data/solutionsData';
import { Cpu, ArrowRight } from 'lucide-react';

export default function SolutionPortfolio() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0A0E14] text-slate-100 min-h-screen">
      
      {/* 1. Page Header Banner */}
      <PageHeader
        title="Our Industrial Solution Portfolio"
        category="Multi-Industry Monitoring Platforms"
        subtitle="Powered by a unified Universal IIoT Gateway platform — delivering sensor-to-cloud intelligence for Railways, Bridge Infrastructure, Water, Weather, and Manufacturing."
        breadcrumbs={[{ name: 'Solution Portfolio' }]}
      />

      {/* 2. Platform Intro Banner */}
      <section className="py-12 bg-[#0D121B] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#121824] border border-[#00C2CB]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00C2CB]/10 border border-[#00C2CB]/30 flex items-center justify-center text-[#00C2CB] shrink-0">
                <Cpu className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Unified Platform Architecture
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Every solution below is built on Prudent Systems' single scalable hardware core (Prudent Gate-200X) — standardizing spare parts, maintenance, and cloud telemetry across all your industrial sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Alternating Solution Blocks */}
      <section className="py-16 bg-[#0A0E14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {solutionsList.map((sol, index) => (
            <SolutionDetailCard key={sol.id} solution={sol} index={index} />
          ))}
        </div>
      </section>

      {/* 4. Applications Matrix Comparison Table */}
      <SolutionsComparisonTable />

      {/* 5. Custom Solution CTA */}
      <section className="py-20 bg-[#0D121B] border-t border-[#1E293B]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00C2CB]/20 text-[#00C2CB] border border-[#00C2CB]/40 uppercase">
            OEM & Custom Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Need a Custom Monitoring Solution?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Have proprietary sensors, non-standard fieldbus protocols, or specialized mounting requirements? Our hardware and firmware engineering teams build custom OEM solutions tailored to your exact industrial specifications.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact-us')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00C2CB] hover:bg-[#00E5FF] text-slate-900 font-bold text-base transition-all shadow-xl shadow-[#00C2CB]/25"
            >
              <span>Contact Solution Engineers</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
