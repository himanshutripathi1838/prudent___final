import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LeadFormBand() {
  const navigate = useNavigate();
  return <section id="contact-cta" className="relative overflow-hidden bg-[#060B12] py-16 sm:py-24">
    <div className="absolute inset-0 bg-cyber-grid opacity-15" aria-hidden="true" />
    <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
      <div className="rounded-3xl border border-[#00E5FF]/35 bg-[#09111F] p-6 text-center shadow-2xl sm:p-10 lg:p-14">
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#00E5FF]">Get in touch</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl">Discuss your industrial monitoring requirement</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-300">Share your sensing, data acquisition, connectivity or automation requirement with Prudent Systems.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button onClick={() => navigate('/contact-us#contact-form')} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-6 font-bold text-slate-950">Contact Our Team <ArrowRight className="h-4 w-4" /></button>
          <button onClick={() => navigate('/contact-us#contact-form')} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-600 px-6 font-semibold text-white hover:border-[#00E5FF] hover:text-[#00E5FF]"><Mail className="h-4 w-4" />Contact Us</button>
        </div>
      </div>
    </div>
  </section>;
}
