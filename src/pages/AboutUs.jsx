import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Cpu, Database, Factory, Radio, Settings, ShieldCheck } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Seo from '../components/common/Seo';

const sectors = [
  { title: 'Industrial Automation', icon: Factory, desc: 'PLC, SCADA, motor drive & process telemetry.' },
  { title: 'Infrastructure Monitoring', icon: Radio, desc: 'Railways, bridges, roadways & civil structures.' },
  { title: 'Sensor & Data Acquisition', icon: Database, desc: 'High-speed analog/digital signal DAQ boards.' },
  { title: 'Embedded Engineering', icon: Cpu, desc: 'Custom SOM, PCB layout & RTOS firmware.' },
  { title: 'IoT & M2M Solutions', icon: BrainCircuit, desc: 'Edge AI, MQTT protocols & cloud dashboards.' }
];

export default function AboutUs() {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E14] text-slate-100 font-sans">
      <Seo title="About Prudent Systems | Industrial IoT Engineering" description="Learn about Prudent Systems Pvt. Ltd. and its work in industrial IoT, sensing, data acquisition, monitoring and automation." path="/about-us" />
      <PageHeader title="About Prudent Systems" category="Engineering Connected Systems" subtitle="We develop engineering solutions for sensing, data acquisition, industrial monitoring and automation." breadcrumbs={[{ name: 'About Us' }]} />

      {/* 1. Who We Are Section (Wrapped in Interactive Master Card) */}
      <section className="border-b border-[#1E293B] py-16 sm:py-24 bg-[#0A0E14] relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8 }}
            className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white dark:bg-[#0E1522] border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl hover:border-[#0284C7] dark:hover:border-[#00E5FF]/40 transition-all duration-300 group grid grid-cols-1 lg:grid-cols-12 items-center gap-10 relative overflow-hidden cursor-pointer"
          >
            {/* Ambient Glowing Background Effect on Hover */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF]/0 via-[#00E5FF]/10 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Left Image Wrapper */}
            <div className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md">
              <motion.img
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
                alt="Engineer working with industrial monitoring equipment"
                width="1200"
                height="800"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500"
              />
            </div>

            {/* Right Text Content */}
            <div className="space-y-6 lg:col-span-7">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-mono text-xs font-bold uppercase tracking-widest text-[#0284C7] dark:text-[#00E5FF] block"
              >
                Who We Are
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl tracking-tight font-sans"
              >
                Engineering from field sensors to useful operational data
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl space-y-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 font-sans"
              >
                <p>Prudent Systems Pvt. Ltd. develops hardware and software solutions for industrial data capture, monitoring and automation.</p>
                <p>Our work connects sensors, communication systems and software so organizations can view field information and make informed operational decisions.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pt-2"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact-us#contact-form')}
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#00E5FF] hover:bg-[#52F1FF] px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-[#00E5FF]/20 cursor-pointer transition-all"
                >
                  <span>Discuss your requirement</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.div>
            </div>

          </motion.div>

        </div>
      </section>

      {/* 2. Capabilities & Core Industry Sectors Grid */}
      <section className="bg-[#060B12] py-16 sm:py-24 relative overflow-hidden border-b border-[#1E293B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl space-y-2"
          >
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0284C7] dark:text-[#00E5FF]">
              Capabilities
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl tracking-tight">
              5+ Core Industry Sectors Served
            </h2>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Flexible engineering capabilities for connected industrial and infrastructure applications.
            </p>
          </motion.div>

          {/* Staggered Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
          >
            {sectors.map(({ title, icon: Icon, desc }) => (
              <motion.article
                key={title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.03 }}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1522] p-6 shadow-md hover:shadow-xl hover:border-[#0284C7] dark:hover:border-[#00E5FF]/50 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#0284C7] dark:text-[#00E5FF] mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-[#0284C7] dark:group-hover:text-[#00E5FF] transition-colors mb-2 text-base font-sans">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
                    {desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Bottom Integration Banner */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex items-center gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0E1522] p-6 text-sm shadow-xl"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#0284C7] dark:text-[#00E5FF] shrink-0">
              <Settings className="h-5 w-5 animate-spin-slow" />
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-xs sm:text-sm">
              <strong className="text-slate-900 dark:text-white font-bold">Need a custom integration?</strong> Share your sensor, connectivity and monitoring requirements with our team.
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
