import React from 'react';
import { NavLink } from 'react-router-dom';
import { Mail, MapPin, Phone, Store } from 'lucide-react';
import { companyInfo } from '../../data/companyData';
import { LinkedinIcon } from '../common/SocialIcons';

const linkClass = 'inline-flex min-h-11 items-center text-sm text-slate-300 transition-colors hover:text-[#00E5FF]';

export default function Footer() {
  return <footer className="relative overflow-hidden border-t border-[#1E293B] bg-[#04070D] text-slate-400">
    <div className="absolute inset-0 bg-cyber-grid opacity-15" aria-hidden="true" />
    <div className="relative z-10 mx-auto max-w-7xl space-y-12 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <NavLink to="/" className="inline-flex items-center gap-3">
            <img src="/images/prudent_systems_official_logo.png" alt="Prudent Systems home" width="48" height="48" className="h-12 w-12 rounded-xl border border-slate-700 bg-black object-contain p-1" />
            <span className="font-extrabold text-white">PRUDENT <span className="text-[#00E5FF]">SYSTEMS</span></span>
          </NavLink>
          <p className="max-w-sm text-sm leading-relaxed">Industrial IoT, sensing, monitoring and engineering solutions for connected operations.</p>
          <div className="flex gap-3">
            <a href={companyInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Prudent Systems on LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-300 hover:border-[#00E5FF] hover:text-[#00E5FF]"><LinkedinIcon className="h-5 w-5" /></a>
            <a href={companyInfo.socials.indiamart} target="_blank" rel="noopener noreferrer" aria-label="Prudent Systems on IndiaMART" className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 text-slate-300 hover:border-[#00E5FF] hover:text-[#00E5FF]"><Store className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Explore</h2>
          <nav className="flex flex-col"><NavLink to="/about-us" className={linkClass}>About Us</NavLink><NavLink to="/solution-portfolio" className={linkClass}>Solutions</NavLink><NavLink to="/technical-expertise" className={linkClass}>Technical Expertise</NavLink><NavLink to="/career" className={linkClass}>Careers</NavLink><NavLink to="/contact-us" className={linkClass}>Contact Us</NavLink></nav>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Legal</h2>
          <nav className="flex flex-col"><NavLink to="/privacy-policy" className={linkClass}>Privacy Policy</NavLink><NavLink to="/terms-and-conditions" className={linkClass}>Terms & Conditions</NavLink></nav>
        </div>
        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
          <address className="space-y-2 not-italic">
            <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className={`${linkClass} gap-2`}><Phone className="h-4 w-4 shrink-0" />{companyInfo.phone}</a>
            <a href={`mailto:${companyInfo.email}`} className={`${linkClass} gap-2`}><Mail className="h-4 w-4 shrink-0" />{companyInfo.email}</a>
            <p className="flex gap-2 pt-2 text-sm leading-relaxed"><MapPin className="mt-1 h-4 w-4 shrink-0 text-[#00E5FF]" />{companyInfo.address}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-7 text-center text-xs sm:text-left">© 2026 Prudent Systems Pvt. Ltd. All rights reserved.</div>
    </div>
  </footer>;
}
