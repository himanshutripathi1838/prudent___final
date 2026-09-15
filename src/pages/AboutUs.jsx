import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Cpu, Database, Factory, Radio, Settings } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Seo from '../components/common/Seo';

const sectors = [
  { title: 'Industrial Automation', icon: Factory },
  { title: 'Infrastructure Monitoring', icon: Radio },
  { title: 'Sensor & Data Acquisition', icon: Database },
  { title: 'Embedded Engineering', icon: Cpu },
  { title: 'IoT & M2M Solutions', icon: BrainCircuit }
];

export default function AboutUs() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0A0E14] text-slate-100">
      <Seo title="About Prudent Systems | Industrial IoT Engineering" description="Learn about Prudent Systems Pvt. Ltd. and its work in industrial IoT, sensing, data acquisition, monitoring and automation." path="/about-us" />
      <PageHeader title="About Prudent Systems" category="Engineering Connected Systems" subtitle="We develop engineering solutions for sensing, data acquisition, industrial monitoring and automation." breadcrumbs={[{ name: 'About Us' }]} />

      <section className="border-b border-[#1E293B] py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5">
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" alt="Engineer working with industrial monitoring equipment" width="1200" height="800" className="aspect-[4/3] w-full rounded-3xl border border-[#00E5FF]/30 object-cover shadow-2xl" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 lg:col-span-7">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#00E5FF]">Who we are</p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Engineering from field sensors to useful operational data</h2>
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-slate-300">
              <p>Prudent Systems Pvt. Ltd. develops hardware and software solutions for industrial data capture, monitoring and automation.</p>
              <p>Our work connects sensors, communication systems and software so organizations can view field information and make informed operational decisions.</p>
            </div>
            <button onClick={() => navigate('/contact-us')} className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[#00E5FF] px-6 py-3 text-sm font-bold text-slate-950">Discuss your requirement <ArrowRight className="h-4 w-4" /></button>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#060B12] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-[#00E5FF]">Capabilities</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">5+ Core Industry Sectors Served</h2>
            <p className="mt-4 leading-relaxed text-slate-300">Flexible engineering capabilities for connected industrial and infrastructure applications.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {sectors.map(({ title, icon: Icon }) => <article key={title} className="rounded-2xl border border-slate-800 bg-[#0E1522] p-6"><Icon className="mb-5 h-8 w-8 text-[#00E5FF]" /><h3 className="font-bold text-white">{title}</h3></article>)}
          </div>
          <div className="mt-10 flex items-center gap-3 rounded-2xl border border-slate-800 bg-[#0E1522] p-5 text-sm text-slate-300"><Settings className="h-6 w-6 shrink-0 text-[#00E5FF]" /><p>Need a custom integration? Share your sensor, connectivity and monitoring requirements with our team.</p></div>
        </div>
      </section>
    </div>
  );
}
