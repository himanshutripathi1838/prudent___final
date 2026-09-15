import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { applicationsComparison } from '../../data/solutionsData';
import { Search, Radio, Cpu, Cloud, CheckCircle2 } from 'lucide-react';

export default function SolutionsComparisonTable() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredApps = applicationsComparison.filter(
    (app) =>
      app.solution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.sensors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.output.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.section initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="py-20 bg-slate-50 dark:bg-[#0A0E14] text-slate-900 dark:text-slate-100 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="Matrix Overview"
          title="Applications at a Glance"
          subtitle="Compare typical sensing, local processing, connectivity, and monitoring outputs across industrial applications."
        />

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            aria-label="Search industrial applications"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by solution, sensor type, or output..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-[#121824] border border-slate-200 dark:border-[#1E293B] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-[#0284C7] dark:focus:border-[#00C2CB] text-xs sm:text-sm shadow-sm"
          />
        </div>

        {/* Desktop Table View (Hidden on mobile) */}
        <div className="hidden lg:block rounded-2xl border border-slate-200 dark:border-[#1E293B] bg-white dark:bg-[#121824] overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100 dark:bg-[#0A0E14] border-b border-slate-200 dark:border-[#1E293B] text-slate-700 dark:text-slate-400 font-mono uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-4 px-6">Industrial Application</th>
                  <th className="py-4 px-6">Sensors Deployed</th>
                  <th className="py-4 px-6">Edge Gateway Processing</th>
                  <th className="py-4 px-6">Telemetry & Connectivity</th>
                  <th className="py-4 px-6">Key Cloud Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {filteredApps.length > 0 ? (
                  filteredApps.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50 dark:hover:bg-[#1A2234] transition-colors group"
                    >
                      <td className="py-4 px-6 font-bold text-slate-900 dark:text-white group-hover:text-[#0284C7] dark:group-hover:text-[#00C2CB] transition-colors">
                        {row.solution}
                      </td>
                      <td className="py-4 px-6 text-slate-600 dark:text-slate-300">{row.sensors}</td>
                      <td className="py-4 px-6 text-slate-500 dark:text-slate-400 font-mono text-xs">{row.edge}</td>
                      <td className="py-4 px-6 font-mono text-xs text-[#0284C7] dark:text-[#00C2CB] font-bold">{row.connectivity}</td>
                      <td className="py-4 px-6 text-slate-800 dark:text-slate-200">{row.output}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-slate-400 font-mono">
                      No matching industrial applications found for "{searchTerm}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards View (Visible on small screens) */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:hidden">
          {filteredApps.length > 0 ? (
            filteredApps.map((row, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-[#121824] border border-slate-200 dark:border-[#1E293B] space-y-3 shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">{row.solution}</h4>
                  <span className="text-[10px] font-mono text-[#0284C7] dark:text-[#00C2CB] bg-[#0284C7]/10 dark:bg-[#00C2CB]/10 px-2 py-0.5 rounded border border-[#0284C7]/30 dark:border-[#00C2CB]/30 font-bold">
                    {row.connectivity}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                    <Radio className="w-4 h-4 text-[#0284C7] dark:text-[#00C2CB] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 font-mono">Sensors: </span>
                      <span>{row.sensors}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                    <Cpu className="w-4 h-4 text-[#0284C7] dark:text-[#00C2CB] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 font-mono">Edge Core: </span>
                      <span className="font-mono text-[11px] text-[#0284C7] dark:text-[#00E5FF] font-bold">{row.edge}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                    <Cloud className="w-4 h-4 text-[#0284C7] dark:text-[#00C2CB] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 font-mono">Cloud Output: </span>
                      <span>{row.output}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-slate-400 font-mono text-xs bg-white dark:bg-[#121824] rounded-2xl border border-slate-200 dark:border-slate-800">
              No matching applications found.
            </div>
          )}
        </div>

      </div>
    </motion.section>
  );
}
