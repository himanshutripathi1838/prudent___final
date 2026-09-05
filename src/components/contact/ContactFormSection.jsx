import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { companyInfo } from '../../data/companyData';
import { LinkedinIcon, TwitterIcon, GithubIcon, YoutubeIcon } from '../common/SocialIcons';

export default function ContactFormSection({ onRequestDemo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Data Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
    }, 3500);
  };

  return (
    <section className="py-16 bg-[#0A0E14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left: Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#121824] border border-[#1E293B] rounded-3xl p-6 sm:p-10 shadow-2xl"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-extrabold text-white mb-2">Send Us a Message</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Have questions regarding custom gateway integration, pilot testing, or pricing? Fill out the form below.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-[#00C2CB] mx-auto" />
                <h3 className="text-2xl font-bold text-white">Message Delivered!</h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Thank you for reaching out to Prudent Systems. Our technical team will get back to you within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Suresh Menon"
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0E14] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00C2CB] text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="suresh@enterprise.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0E14] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00C2CB] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-[#0A0E14] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00C2CB] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                    Subject / Area of Interest
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0E14] border border-slate-700 text-white focus:outline-none focus:border-[#00C2CB] text-sm"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Universal IIoT Gateway Quotation">Universal IIoT Gateway Quotation</option>
                    <option value="Railway / OHE Monitoring Platform">Railway / OHE Monitoring Platform</option>
                    <option value="Bridge Health / Hydrology Monitoring">Bridge Health / Hydrology Monitoring</option>
                    <option value="Machine Predictive Maintenance">Machine Predictive Maintenance</option>
                    <option value="Custom Hardware / OEM Engineering">Custom Hardware / OEM Engineering</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project, target deployment site, or technical specifications..."
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0E14] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00C2CB] text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#00C2CB] hover:bg-[#00E5FF] text-slate-900 font-bold transition-all text-sm shadow-lg shadow-[#00C2CB]/25 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: Contact Info Cards & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-[#121824] border border-[#1E293B] space-y-4">
              <h3 className="text-lg font-bold text-white mb-2">Corporate Headquarters</h3>
              
              <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                <MapPin className="w-5 h-5 text-[#00C2CB] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{companyInfo.address}</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <Phone className="w-5 h-5 text-[#00C2CB] shrink-0" />
                <span>{companyInfo.phone}</span>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                <Mail className="w-5 h-5 text-[#00C2CB] shrink-0" />
                <div>
                  <div>Sales: <span className="text-[#00C2CB]">{companyInfo.salesEmail}</span></div>
                  <div>Support: <span className="text-[#00C2CB]">{companyInfo.supportEmail}</span></div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300 border-t border-slate-800 pt-3">
                <Clock className="w-5 h-5 text-[#00C2CB] shrink-0" />
                <span>{companyInfo.workingHours}</span>
              </div>
            </div>

            {/* Interactive Dark Map Preview Graphic */}
            <div className="p-4 rounded-2xl bg-[#121824] border border-[#1E293B] relative overflow-hidden">
              <div className="h-48 rounded-xl bg-[#0A0E14] border border-slate-800 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-cyber-grid opacity-40" />
                <MapPin className="w-10 h-10 text-[#00C2CB] animate-bounce z-10" />
                <div className="z-10 mt-2">
                  <h4 className="text-sm font-bold text-white">HITEC City R&D Hub</h4>
                  <p className="text-[11px] font-mono text-slate-400">Hyderabad, Telangana, India</p>
                </div>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-[#00C2CB] z-10">
                  GPS: 17.4486° N, 78.3742° E
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 rounded-2xl bg-[#121824] border border-[#1E293B] flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">Connect Socially</span>
              <div className="flex items-center gap-2">
                <a href={companyInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#0A0E14] hover:text-[#00C2CB] text-slate-400 transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href={companyInfo.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#0A0E14] hover:text-[#00C2CB] text-slate-400 transition-colors">
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a href={companyInfo.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#0A0E14] hover:text-[#00C2CB] text-slate-400 transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a href={companyInfo.socials.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#0A0E14] hover:text-[#00C2CB] text-slate-400 transition-colors">
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Request Demo Banner above Footer */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#121824] via-[#0A0E14] to-[#121824] border border-[#00C2CB]/40 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <Sparkles className="w-5 h-5 text-[#00C2CB]" />
              Schedule a Tailored Demonstration
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              See our Universal IIoT Gateway & Edge AI algorithms live in action with custom sensor datasets.
            </p>
          </div>
          <button
            onClick={onRequestDemo}
            className="px-6 py-3 rounded-xl bg-[#00C2CB] hover:bg-[#00E5FF] text-slate-900 font-bold text-sm transition-all shadow-lg shadow-[#00C2CB]/25 shrink-0"
          >
            Request Live Demo
          </button>
        </div>

      </div>
    </section>
  );
}
