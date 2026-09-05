import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import JobCard from '../components/career/JobCard';
import JobApplicationModal from '../components/career/JobApplicationModal';
import { openPositions, internshipOpportunities } from '../data/jobsData';
import { Rocket, Target, TrendingUp, Users, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Career() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const whyWorkWithUs = [
    {
      icon: Rocket,
      title: "Innovation-Driven Culture",
      desc: "Work at the cutting edge of hybrid hardware-software development, edge AI models, and failsafe RTOS bootloaders."
    },
    {
      icon: Target,
      title: "Real-World Infrastructure Impact",
      desc: "Deploy solutions that safeguard national railways, monitor flood water levels, and prevent industrial factory downtime."
    },
    {
      icon: TrendingUp,
      title: "Accelerated Growth & Mastery",
      desc: "Mentorship from senior hardware architects, ISRO veterans, and cloud security engineers."
    },
    {
      icon: Users,
      title: "Collaborative Team Environment",
      desc: "Transparent engineering culture with flat hierarchies, continuous learning budgets, and modern laboratory equipment."
    }
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <div className="bg-[#0A0E14] text-slate-100 min-h-screen">
      
      {/* 1. Page Header Banner */}
      <PageHeader
        title="Careers at Prudent Systems"
        category="Join Our Engineering Team"
        subtitle="Join a team building India's Industry 4.0 infrastructure — from embedded firmware to cloud AI analytics."
        breadcrumbs={[{ name: 'Career' }]}
      />

      {/* 2. Why Work With Us Section */}
      <section className="py-20 bg-[#0A0E14] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            category="Why Work With Us"
            title="Engineer the Future of Connected Physical Systems"
            subtitle="We offer high-impact engineering challenges, competitive compensation, and an environment where technical excellence shines."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyWorkWithUs.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="p-6 sm:p-8 rounded-2xl bg-[#121824] border border-[#1E293B] hover:border-[#00C2CB]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#00C2CB]/10 border border-[#00C2CB]/30 flex items-center justify-center text-[#00C2CB] mb-5 group-hover:scale-110 group-hover:bg-[#00C2CB] group-hover:text-slate-950 transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3. Open Positions Section */}
      <section className="py-20 bg-[#0D121B] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            category="Current Openings"
            title="Full-Time Engineering Positions"
            subtitle="Explore our active engineering vacancies. We are always seeking passionate hardware, firmware, and cloud software engineers."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6 max-w-4xl mx-auto"
          >
            {openPositions.map((job) => (
              <motion.div key={job.id} variants={itemVariants}>
                <JobCard job={job} onApply={handleApplyClick} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Internship & Research Opportunities */}
      <section className="py-20 bg-[#0A0E14] border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#121824] via-[#162032] to-[#121824] border border-[#00C2CB]/30 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C2CB]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#00C2CB]/10 text-[#00E5FF] border border-[#00C2CB]/30">
                  <GraduationCap className="w-4 h-4 text-[#00E5FF]" />
                  <span>Student & Research Fellowships</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Industrial IoT Research & Hardware Internship Program
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Are you a B.Tech, M.Tech, or Ph.D. scholar specializing in Embedded Systems, Signal Processing, or Edge AI? Join our 6-month stipend research fellowship.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {internshipOpportunities.map((intern, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00C2CB] shrink-0" />
                      <span>{intern.title} ({intern.duration})</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button
                  onClick={() => handleApplyClick({ title: "IIoT Research Fellowship / Internship", type: "Fellowship" })}
                  className="px-8 py-4 rounded-xl bg-[#00C2CB] hover:bg-[#00E5FF] text-slate-900 font-bold text-sm transition-all shadow-xl shadow-[#00C2CB]/25 flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Apply for Internship</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <JobApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        job={selectedJob}
      />

    </div>
  );
}
