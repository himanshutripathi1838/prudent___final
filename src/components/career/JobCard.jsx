import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Briefcase, Clock, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export default function JobCard({ job, onApply }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-6 rounded-2xl bg-[#121824] border border-[#1E293B] hover:border-[#00C2CB]/50 transition-all duration-300 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#00C2CB]/10 text-[#00C2CB] border border-[#00C2CB]/30">
              {job.department}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-500" /> {job.location}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Briefcase className="w-3 h-3 text-slate-500" /> {job.type}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-1">
            {job.title}
          </h3>
          <p className="text-xs text-slate-400">
            Experience Required: <span className="text-slate-200 font-semibold">{job.experience}</span>
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors text-xs font-semibold flex items-center gap-1"
          >
            <span>{expanded ? 'Hide Details' : 'View Details'}</span>
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          <button
            onClick={() => onApply(job)}
            className="px-5 py-2.5 rounded-xl bg-[#00C2CB] hover:bg-[#00E5FF] text-slate-900 font-bold text-xs transition-all shadow-md shadow-[#00C2CB]/20"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Expanded Responsibilities & Requirements */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-6 pt-6 border-t border-slate-800 space-y-4 overflow-hidden text-xs sm:text-sm text-slate-300"
          >
            <p className="text-slate-300 italic">{job.summary}</p>

            <div>
              <h4 className="font-mono font-bold text-[#00C2CB] uppercase mb-2 text-xs">
                Key Responsibilities
              </h4>
              <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                {job.responsibilities.map((res, idx) => (
                  <li key={idx}>{res}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono font-bold text-[#00C2CB] uppercase mb-2 text-xs">
                Requirements & Skills
              </h4>
              <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                {job.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
