import React from 'react';
import { ArrowRight, CircuitBoard, Radio, Workflow } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HomeAboutSection() {
  const navigate = useNavigate();
  const capabilities = [
    { icon: CircuitBoard, label: 'Embedded hardware' },
    { icon: Radio, label: 'Sensor connectivity' },
    { icon: Workflow, label: 'Monitoring software' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="relative overflow-hidden border-b border-[#1E293B] bg-[#060B12] py-16 sm:py-24 font-sans">
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" aria-hidden="true" />
      
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        
        {/* Left Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 lg:col-span-7"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs font-bold uppercase tracking-widest text-[#0284C7] dark:text-[#00E5FF]"
          >
            Company Overview
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl tracking-tight"
          >
            About Prudent Systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-300"
          >
            Prudent Systems develops hardware and software solutions that connect field sensors with data acquisition, monitoring and industrial automation systems.
          </motion.p>

          {/* Capabilities Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {capabilities.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.02 }}
                className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1522] p-4 text-sm font-semibold shadow-sm hover:border-[#0284C7] dark:hover:border-[#00E5FF] transition-all"
              >
                <Icon className="h-5 w-5 text-[#0284C7] dark:text-[#00E5FF]" />
                <span className="text-slate-800 dark:text-slate-200">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row pt-2">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/about-us')}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-slate-600 px-6 font-semibold text-slate-900 dark:text-white bg-white dark:bg-transparent shadow-sm hover:border-[#0284C7] dark:hover:border-[#00E5FF] transition-all cursor-pointer"
            >
              <span>Learn About Us</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/contact-us#contact-form')}
              className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#00E5FF] hover:bg-[#52F1FF] px-6 font-bold text-slate-950 shadow-md transition-all cursor-pointer"
            >
              <span>Contact Our Team</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Logo & Highlight Card */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -5 }}
          className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1522] p-7 lg:col-span-5 shadow-xl transition-all"
        >
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            src="/images/prudent_systems_official_logo.png"
            alt="Prudent Systems"
            width="160"
            height="160"
            className="mx-auto h-40 w-40 object-contain drop-shadow-md"
          />
          <p className="mt-6 text-center leading-relaxed text-slate-600 dark:text-slate-300 text-sm">
            From sensor interfaces to responsive dashboards, each solution is shaped around the application and operating environment.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
