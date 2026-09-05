import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cpu, Globe, Share2, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#04070D] text-slate-400 border-t border-[#1E293B]/60 relative overflow-hidden font-sans">
      {/* Subtle Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10 space-y-16">
        
        {/* Top 6-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          
          {/* Logo & Subtitle Column (Spans 2 cols) */}
          <div className="col-span-2 space-y-4">
            <NavLink to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-black p-1 shadow-lg shadow-red-500/20 group-hover:scale-105 transition-all border border-slate-700/80 flex items-center justify-center shrink-0 overflow-hidden">
                <img
                  src="/images/prudent_systems_official_logo.png"
                  alt="Prudent Systems Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white flex items-center gap-1 font-sans">
                  PRUDENT <span className="text-[#00E5FF]">SYSTEMS</span>
                </span>
              </div>
            </NavLink>

            <p className="text-xs text-slate-400 font-normal leading-relaxed max-w-sm">
              Industrial intelligence for connected infrastructure. Combining sensing, edge computing, AI analytics and real-time SCADA telemetry.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a href="#" aria-label="Global Network" className="w-8 h-8 rounded-lg bg-[#0E1522] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Share" className="w-8 h-8 rounded-lg bg-[#0E1522] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Contact" className="w-8 h-8 rounded-lg bg-[#0E1522] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2 text-xs">
              <li><NavLink to="/technical-expertise" className="hover:text-[#00E5FF] transition-colors">Overview</NavLink></li>
              <li><NavLink to="/technical-expertise#hardware" className="hover:text-[#00E5FF] transition-colors">Device Management</NavLink></li>
              <li><NavLink to="/technical-expertise#edge-ai" className="hover:text-[#00E5FF] transition-colors">Edge AI</NavLink></li>
              <li><NavLink to="/solution-portfolio" className="hover:text-[#00E5FF] transition-colors">Cloud Platform</NavLink></li>
              <li><NavLink to="/solution-portfolio#ai" className="hover:text-[#00E5FF] transition-colors">Analytics</NavLink></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li><NavLink to="/solution-portfolio#predictive" className="hover:text-[#00E5FF] transition-colors">Predictive Maintenance</NavLink></li>
              <li><NavLink to="/solution-portfolio#condition" className="hover:text-[#00E5FF] transition-colors">Condition Monitoring</NavLink></li>
              <li><NavLink to="/solution-portfolio#structural" className="hover:text-[#00E5FF] transition-colors">Structural Monitoring</NavLink></li>
              <li><NavLink to="/solution-portfolio#energy" className="hover:text-[#00E5FF] transition-colors">Energy Monitoring</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2 text-xs">
              <li><NavLink to="/solution-portfolio#railways" className="hover:text-[#00E5FF] transition-colors">Railways</NavLink></li>
              <li><NavLink to="/solution-portfolio#manufacturing" className="hover:text-[#00E5FF] transition-colors">Manufacturing</NavLink></li>
              <li><NavLink to="/solution-portfolio#energy" className="hover:text-[#00E5FF] transition-colors">Energy</NavLink></li>
              <li><NavLink to="/solution-portfolio#infrastructure" className="hover:text-[#00E5FF] transition-colors">Infrastructure</NavLink></li>
              <li><NavLink to="/solution-portfolio#oil-gas" className="hover:text-[#00E5FF] transition-colors">Oil & Gas</NavLink></li>
            </ul>
          </div>

          {/* Column 4: Resources & Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-xs">
              <li><NavLink to="/about-us" className="hover:text-[#00E5FF] transition-colors">About</NavLink></li>
              <li><NavLink to="/career" className="hover:text-[#00E5FF] transition-colors">Careers</NavLink></li>
              <li><NavLink to="/about-us#partners" className="hover:text-[#00E5FF] transition-colors">Partners</NavLink></li>
              <li><NavLink to="/contact-us" className="hover:text-[#00E5FF] transition-colors">Contact</NavLink></li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Prudent Systems. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <NavLink to="/contact-us" className="hover:text-[#00E5FF] transition-colors">Privacy Policy</NavLink>
            <NavLink to="/contact-us" className="hover:text-[#00E5FF] transition-colors">Terms of Service</NavLink>
          </div>
        </div>

      </div>
    </footer>
  );
}
