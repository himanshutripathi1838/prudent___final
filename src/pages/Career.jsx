import React from 'react';
import { ArrowRight, Cpu, Mail, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import Seo from '../components/common/Seo';
import { companyInfo } from '../data/companyData';

export default function Career() {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-[#0A0E14] text-slate-100">
    <Seo title="Careers | Prudent Systems" description="Contact Prudent Systems about engineering career opportunities in industrial IoT, embedded systems and software." path="/career" breadcrumbs={[{ name: 'Careers', path: '/career' }]} />
    <PageHeader title="Careers at Prudent Systems" category="Engineering Careers" subtitle="Interested in hardware, embedded systems, industrial connectivity or software? Introduce yourself to our team." breadcrumbs={[{ name: 'Careers' }]} />
    <section className="py-16 sm:py-24"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 gap-5 sm:grid-cols-2"><article className="rounded-2xl border border-slate-800 bg-[#121824] p-7"><Cpu className="mb-5 h-8 w-8 text-[#00E5FF]" /><h2 className="text-xl font-bold">Engineering disciplines</h2><p className="mt-3 leading-relaxed text-slate-300">We welcome relevant profiles in embedded systems, electronics, industrial communication, data systems and web software.</p></article><article className="rounded-2xl border border-slate-800 bg-[#121824] p-7"><Users className="mb-5 h-8 w-8 text-[#00E5FF]" /><h2 className="text-xl font-bold">Current opportunities</h2><p className="mt-3 leading-relaxed text-slate-300">Confirmed openings are shared directly by the company. Send your profile to ask about current availability.</p></article></div><div className="mt-8 rounded-3xl border border-[#00E5FF]/35 bg-[#09111F] p-7 text-center sm:p-10"><h2 className="text-2xl font-extrabold">Share your profile</h2><p className="mx-auto mt-3 max-w-xl text-slate-300">Email your resume and a short note about your experience, or use the contact page.</p><div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><a href={`mailto:${companyInfo.email}?subject=Career%20Enquiry`} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-600 px-6 font-semibold"><Mail className="h-4 w-4" />{companyInfo.email}</a><button onClick={() => navigate('/contact-us#contact-form')} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-6 font-bold text-slate-950">Contact Us <ArrowRight className="h-4 w-4" /></button></div></div></div></section>
  </div>;
}
