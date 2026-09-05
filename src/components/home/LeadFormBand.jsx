import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function LeadFormBand() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    industry: 'Railways & Transportation',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', industry: 'Railways & Transportation', message: '' });
    }, 3000);
  };

  return (
    <section id="contact-cta" className="py-24 lg:py-32 bg-[#060B12] relative overflow-hidden">
      {/* Ambient Glowing Background */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00E5FF]/10 blur-[220px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Glowing Dark Panel with Split Form matching screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white dark:bg-[#09111F] border border-slate-200 dark:border-[#00E5FF]/40 shadow-xl dark:shadow-[0_0_80px_rgba(0,229,255,0.22)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden"
        >
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="uppercase text-[11px] font-mono tracking-[0.15em] text-[#0284C7] dark:text-[#00E5FF] font-bold">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight font-sans">
                Ready to Build Your Smart Infrastructure?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-normal leading-relaxed">
                Connect your assets, monitor them in real time and predict failures before they impact operations.
              </p>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-600 dark:text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0284C7] dark:text-[#00E5FF]" />
                <span>24/7 Enterprise SLA Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0284C7] dark:text-[#00E5FF]" />
                <span>Strict Non-Disclosure & IP Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0284C7] dark:text-[#00E5FF]" />
                <span>Direct Access to Senior Hardware Engineers</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Compact Form matching screenshot */}
          <div className="lg:col-span-6 bg-slate-50 dark:bg-[#060B12]/90 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white font-sans">Requirement Submitted</h4>
                <p className="text-xs text-slate-300">
                  Our solution engineering team will evaluate your telemetry specifications and contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[9.5px] font-mono font-bold text-slate-400 mb-1 uppercase">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Rajesh"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0E1522] border border-slate-800 text-white text-xs focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9.5px] font-mono font-bold text-slate-400 mb-1 uppercase">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0E1522] border border-slate-800 text-white text-xs focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[9.5px] font-mono font-bold text-slate-400 mb-1 uppercase">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rajesh@railways.gov.in"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0E1522] border border-slate-800 text-white text-xs focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                  <div>
                    <label className="block text-[9.5px] font-mono font-bold text-slate-400 mb-1 uppercase">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0E1522] border border-slate-800 text-white text-xs focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[9.5px] font-mono font-bold text-slate-400 mb-1 uppercase">Industry Sector *</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0E1522] border border-slate-800 text-white text-xs focus:outline-none focus:border-[#00E5FF]"
                  >
                    <option value="Railways & Transportation">Railways & Transportation</option>
                    <option value="Smart Manufacturing">Smart Manufacturing & Heavy Motors</option>
                    <option value="Energy & Utilities">Energy & Power Utilities</option>
                    <option value="Civil Infrastructure">Civil Infrastructure & Bridges</option>
                    <option value="Water & Reservoirs">Water & Reservoir Flood Sensing</option>
                    <option value="Oil & Gas">Oil & Gas Pipelines</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[9.5px] font-mono font-bold text-slate-400 mb-1 uppercase">Project Details / Message</label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe sensor counts, environment specifications..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0E1522] border border-slate-800 text-white text-xs focus:outline-none focus:border-[#00E5FF] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#00E5FF] hover:bg-[#52F1FF] text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#00E5FF]/30 flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  <span>Submit Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </motion.div>

      </div>
    </section>
  );
}
