import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import SolutionDetailCard from '../components/solutions/SolutionDetailCard';
import SolutionsComparisonTable from '../components/solutions/SolutionsComparisonTable';
import { solutionsList } from '../data/solutionsData';
import { Cpu, ArrowRight } from 'lucide-react';
import Seo from '../components/common/Seo';

export default function SolutionPortfolio() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 dark:bg-[#0A0E14] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <Seo title="Industrial IoT Solutions | Prudent Systems" description="Explore industrial monitoring, sensing, data acquisition and automation solutions from Prudent Systems." path="/solution-portfolio" breadcrumbs={[{ name: 'Solutions', path: '/solution-portfolio' }]} />
      
      {/* 1. Page Header Banner */}
      <PageHeader
        title="Our Industrial Solution Portfolio"
        category="Multi-Industry Monitoring Platforms"
        subtitle="Connected sensing and monitoring solutions for railways, civil infrastructure, water, weather, and manufacturing applications."
        breadcrumbs={[{ name: 'Solution Portfolio' }]}
      />

      {/* 2. Platform Intro Banner */}
      <motion.section initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className="py-12 bg-white dark:bg-[#0D121B] border-b border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-100/80 dark:bg-[#121824] border border-slate-200 dark:border-[#00C2CB]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0284C7]/10 dark:bg-[#00C2CB]/10 border border-[#0284C7]/30 dark:border-[#00C2CB]/30 flex items-center justify-center text-[#0284C7] dark:text-[#00C2CB] shrink-0">
                <Cpu className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Unified Platform Architecture
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Solution architecture can be adapted to the sensing, connectivity, data, and operating needs of each industrial site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 3. Alternating Solution Blocks */}
      <section className="py-16 bg-slate-50 dark:bg-[#0A0E14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {solutionsList.map((sol, index) => (
            <SolutionDetailCard key={sol.id} solution={sol} index={index} />
          ))}
        </div>
      </section>

      {/* 4. Applications Matrix Comparison Table */}
      <SolutionsComparisonTable />

      {/* 5. Custom Solution CTA */}
      <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="py-20 bg-white dark:bg-[#0D121B] border-t border-slate-200 dark:border-[#1E293B]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#0284C7]/15 dark:bg-[#00C2CB]/20 text-[#0284C7] dark:text-[#00C2CB] border border-[#0284C7]/30 dark:border-[#00C2CB]/40 uppercase">
            OEM & Custom Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Need a Custom Monitoring Solution?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Share your sensors, communication protocols, mounting needs, and operating environment with our engineering team.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate('/contact-us#contact-form')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0284C7] dark:bg-[#00C2CB] hover:bg-[#0369A1] dark:hover:bg-[#00E5FF] text-white dark:text-slate-900 font-bold text-base transition-all shadow-xl shadow-cyan-500/20 cursor-pointer"
            >
              <span>Contact Solution Engineers</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.section>

    </div>
  );
}
