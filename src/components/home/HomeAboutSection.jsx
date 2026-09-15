import React from 'react';
import { ArrowRight, CircuitBoard, Radio, Workflow } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HomeAboutSection() {
  const navigate = useNavigate();
  const capabilities = [{ icon: CircuitBoard, label: 'Embedded hardware' }, { icon: Radio, label: 'Sensor connectivity' }, { icon: Workflow, label: 'Monitoring software' }];
  return <section id="about" className="relative overflow-hidden border-b border-[#1E293B] bg-[#060B12] py-16 sm:py-24">
    <div className="absolute inset-0 bg-cyber-grid opacity-15" aria-hidden="true" />
    <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
      <div className="space-y-6 lg:col-span-7">
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#00E5FF]">Company overview</p>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">About Prudent Systems</h2>
        <p className="max-w-3xl text-base leading-relaxed text-slate-300">Prudent Systems develops hardware and software solutions that connect field sensors with data acquisition, monitoring and industrial automation systems.</p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">{capabilities.map(({ icon: Icon, label }) => <div key={label} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#0E1522] p-4 text-sm font-semibold"><Icon className="h-5 w-5 text-[#00E5FF]" />{label}</div>)}</div>
        <div className="flex flex-col gap-3 sm:flex-row"><button onClick={() => navigate('/about-us')} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-600 px-6 font-semibold text-white">Learn About Us <ArrowRight className="h-4 w-4" /></button><button onClick={() => navigate('/contact-us#contact-form')} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-6 font-bold text-slate-950">Contact Our Team <ArrowRight className="h-4 w-4" /></button></div>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-[#0E1522] p-7 lg:col-span-5"><img src="/images/prudent_systems_official_logo.png" alt="Prudent Systems" width="160" height="160" className="mx-auto h-40 w-40 object-contain" /><p className="mt-6 text-center leading-relaxed text-slate-300">From sensor interfaces to responsive dashboards, each solution is shaped around the application and operating environment.</p></div>
    </div>
  </section>;
}
