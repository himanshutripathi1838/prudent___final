import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Send, Store } from 'lucide-react';
import { companyInfo } from '../../data/companyData';
import { LinkedinIcon } from '../common/SocialIcons';

const initialForm = { name: '', email: '', phone: '', subject: 'General Inquiry', message: '' };

export default function ContactFormSection() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [feedback, setFeedback] = useState('');
  const update = event => setFormData(current => ({ ...current, [event.target.name]: event.target.value }));

  const handleSubmit = async event => {
    event.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setFeedback('');
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'Unable to send your message. Please try again.');
      setStatus('success');
      setFeedback('Thank you. Your message has been sent to Prudent Systems.');
      setFormData(initialForm);
    } catch (error) {
      setStatus('error');
      setFeedback(error.message || `Message could not be sent. Please email ${companyInfo.email}.`);
    }
  };

  return <motion.section id="contact-form" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className="bg-[#0A0E14] py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <div className="rounded-3xl border border-[#1E293B] bg-[#121824] p-5 shadow-2xl sm:p-8 lg:col-span-7">
          <h2 className="text-2xl font-extrabold text-white">Send Us a Message</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">Tell us what you need and our team will respond using the contact details you provide.</p>
          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div><label htmlFor="contact-name" className="form-label">Full Name *</label><input id="contact-name" name="name" autoComplete="name" required maxLength="120" value={formData.name} onChange={update} className="form-control" /></div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div><label htmlFor="contact-email" className="form-label">Email Address *</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength="254" value={formData.email} onChange={update} className="form-control" /></div>
              <div><label htmlFor="contact-phone" className="form-label">Phone Number</label><input id="contact-phone" name="phone" type="tel" autoComplete="tel" maxLength="30" value={formData.phone} onChange={update} className="form-control" /></div>
            </div>
            <div><label htmlFor="contact-subject" className="form-label">Subject *</label><select id="contact-subject" name="subject" required value={formData.subject} onChange={update} className="form-control"><option>General Inquiry</option><option>Industrial IoT Solution</option><option>Sensor & Data Acquisition</option><option>Industrial Monitoring</option><option>Custom Engineering</option></select></div>
            <div><label htmlFor="contact-message" className="form-label">Message *</label><textarea id="contact-message" name="message" rows="5" required minLength="10" maxLength="5000" value={formData.message} onChange={update} className="form-control resize-y" /></div>
            {feedback && <p role="status" aria-live="polite" className={`rounded-xl border p-3 text-sm ${status === 'success' ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300' : 'border-red-500/40 bg-red-500/10 text-red-300'}`}>{feedback}</p>}
            <button type="submit" disabled={status === 'loading'} className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-6 py-3 font-bold text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"><span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span><Send className="h-4 w-4" /></button>
          </form>
        </div>

        <div className="space-y-6 lg:col-span-5">
          <div className="rounded-2xl border border-[#1E293B] bg-[#121824] p-6">
            <h2 className="mb-5 text-xl font-bold text-white">Contact Details</h2>
            <address className="space-y-5 not-italic text-sm text-slate-300">
              <p className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#00E5FF]" />{companyInfo.address}</p>
              <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`} className="flex min-h-11 items-center gap-3 hover:text-[#00E5FF]"><Phone className="h-5 w-5 text-[#00E5FF]" />{companyInfo.phone}</a>
              <a href={`mailto:${companyInfo.email}`} className="flex min-h-11 items-center gap-3 hover:text-[#00E5FF]"><Mail className="h-5 w-5 text-[#00E5FF]" />{companyInfo.email}</a>
              <p className="flex gap-3"><Clock className="h-5 w-5 shrink-0 text-[#00E5FF]" />{companyInfo.workingHours}</p>
            </address>
          </div>
          <iframe title="Prudent Systems office at 18 Vaishali Nagar, Bhopal" src="https://www.google.com/maps?q=18%2C%20Vaishali%20Nagar%2C%20Kotra%20Sultanabad%2C%20Bhopal%20462003&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-72 w-full rounded-2xl border border-[#1E293B]" />
          <div className="flex gap-3"><a href={companyInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link"><LinkedinIcon className="h-5 w-5" />LinkedIn</a><a href={companyInfo.socials.indiamart} target="_blank" rel="noopener noreferrer" className="social-link"><Store className="h-5 w-5" />IndiaMART</a></div>
        </div>
      </div>
    </div>
  </motion.section>;
}
