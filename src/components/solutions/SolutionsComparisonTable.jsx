import React, { useState } from 'react';
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
    <section className="py-20 bg-[#0A0E14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="Matrix Overview"
          title="Applications at a Glance"
          subtitle="Compare sensor arrays, edge processing capabilities, and cloud telemetry outputs across all industrial monitoring platforms."
        />

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by solution, sensor type, or output..."
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#121824] border border-[#1E293B] text-white placeholder-slate-500 focus:outline-none focus:border-[#00C2CB] text-xs sm:text-sm"
          />
        </div>

        {/* Desktop Table View (Hidden on mobile) */}
        <div className="hidden sm:block rounded-2xl border border-[#1E293B] bg-[#121824] overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#0A0E14] border-b border-[#1E293B] text-slate-400 font-mono uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-4 px-6">Industrial Application</th>
                  <th className="py-4 px-6">Sensors Deployed</th>
                  <th className="py-4 px-6">Edge Gateway Processing</th>
                  <th className="py-4 px-6">Telemetry & Connectivity</th>
                  <th className="py-4 px-6">Key Cloud Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {filteredApps.length > 0 ? (
                  filteredApps.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-[#1A2234] transition-colors group"
                    >
                      <td className="py-4 px-6 font-bold text-white group-hover:text-[#00C2CB] transition-colors">
                        {row.solution}
                      </td>
                      <td className="py-4 px-6 text-slate-300">{row.sensors}</td>
                      <td className="py-4 px-6 text-slate-400 font-mono text-xs">{row.edge}</td>
                      <td className="py-4 px-6 font-mono text-xs text-[#00C2CB]">{row.connectivity}</td>
                      <td className="py-4 px-6 text-slate-200">{row.output}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-slate-500 font-mono">
                      No matching industrial applications found for "{searchTerm}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards View (Visible on small screens) */}
        <div className="sm:hidden space-y-4">
          {filteredApps.length > 0 ? (
            filteredApps.map((row, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#121824] border border-[#1E293B] space-y-3 shadow-lg">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <h4 className="text-base font-bold text-white">{row.solution}</h4>
                  <span className="text-[10px] font-mono text-[#00C2CB] bg-[#00C2CB]/10 px-2 py-0.5 rounded border border-[#00C2CB]/30">
                    {row.connectivity}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-slate-300">
                    <Radio className="w-4 h-4 text-[#00C2CB] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 font-mono">Sensors: </span>
                      <span>{row.sensors}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-slate-300">
                    <Cpu className="w-4 h-4 text-[#00C2CB] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 font-mono">Edge Core: </span>
                      <span className="font-mono text-[11px] text-[#00E5FF]">{row.edge}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-slate-300">
                    <Cloud className="w-4 h-4 text-[#00C2CB] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-400 font-mono">Cloud Output: </span>
                      <span>{row.output}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-6 text-center text-slate-500 font-mono text-xs bg-[#121824] rounded-2xl border border-slate-800">
              No matching applications found.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
