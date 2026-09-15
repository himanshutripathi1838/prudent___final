import React from 'react';
import { ArrowRight, Cpu, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import Seo from '../components/common/Seo';

export default function Career() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0A0E14] text-slate-100 font-sans">
      <Seo title="Careers | Prudent Systems" description="Contact Prudent Systems about engineering career opportunities in industrial IoT, embedded systems and software." path="/career" breadcrumbs={[{ name: 'Careers', path: '/career' }]} />
      <PageHeader title="Careers at Prudent Systems" category="Engineering Careers" subtitle="Interested in hardware, embedded systems, industrial connectivity or software? Introduce yourself to our team." breadcrumbs={[{ name: 'Careers' }]} />
      
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#121824] p-7 shadow-md transition-all"
            >
              <Cpu className="mb-5 h-8 w-8 text-[#0284C7] dark:text-[#00E5FF]" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Engineering disciplines</h2>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">We welcome relevant profiles in embedded systems, electronics, industrial communication, data systems and web software.</p>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#121824] p-7 shadow-md transition-all"
            >
              <Users className="mb-5 h-8 w-8 text-[#0284C7] dark:text-[#00E5FF]" />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Current opportunities</h2>
              <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">Confirmed openings are shared directly by the company. Use the Contact Us form to ask about current availability.</p>
            </motion.article>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 dark:border-[#00E5FF]/35 bg-white dark:bg-[#09111F] p-7 text-center sm:p-10 shadow-xl"
          >
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Share your profile</h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-300">Use the Contact Us page to share your resume and a short note about your experience.</p>
            <div className="mt-7 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact-us#contact-form')}
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#00E5FF] hover:bg-[#52F1FF] px-6 font-bold text-slate-950 shadow-md cursor-pointer"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
