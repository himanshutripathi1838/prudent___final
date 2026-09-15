import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { securityFeatures } from '../../data/expertiseData';
import { FileCheck, Lock, ShieldCheck } from 'lucide-react';

const securityIcons = { FileCheck, Lock, ShieldCheck };

export default function SecurityGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-[#0A0E14] relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          category="System Protection"
          title="Security Considerations"
          subtitle="Practical controls for access, data transport, validation and operational visibility."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {securityFeatures.map((sec, idx) => {
            const IconComp = securityIcons[sec.icon] || ShieldCheck;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#121824] border border-slate-200 dark:border-[#1E293B] shadow-md hover:border-[#0284C7] dark:hover:border-[#00C2CB]/50 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00C2CB]/10 border border-[#00C2CB]/30 flex items-center justify-center text-[#0284C7] dark:text-[#00C2CB] mb-4 group-hover:scale-110 transition-transform">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#0284C7] dark:group-hover:text-[#00C2CB] transition-colors">
                  {sec.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {sec.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
