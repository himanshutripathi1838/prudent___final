import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import Seo from '../components/common/Seo';
import { companyInfo } from '../data/companyData';

const policies = {
  privacy: {
    title: 'Privacy Policy',
    description: 'How Prudent Systems collects, uses and protects information submitted through this website.',
    sections: [
      ['Information we collect', 'When you use our contact form, we collect the name, email address, phone number, subject and message you provide. We may also receive basic technical request data needed to operate and secure the website.'],
      ['How we use information', 'We use submitted information to respond to enquiries, discuss requested products or services, and maintain necessary business correspondence.'],
      ['Service providers', 'The website may use service providers such as Vercel for hosting and Gmail SMTP for sending contact-form messages. These providers process data according to their own terms and privacy practices.'],
      ['Security and retention', 'We take reasonable steps to protect submitted information and retain it only for as long as it is needed for communication, business records, security or legal obligations. No internet transmission can be guaranteed completely secure.'],
      ['Cookies and analytics', 'The current website does not set advertising cookies. Essential hosting or security services may process limited technical information. If analytics are introduced, this policy will be updated.'],
      ['External links', 'Links to external websites are provided for convenience. Their content and privacy practices are controlled by their respective operators.'],
      ['Your choices', `You may ask about, correct or request deletion of personal information submitted through this website by emailing ${companyInfo.email}. Requests may be retained where required for legitimate business or legal purposes.`],
      ['Policy updates', 'We may update this policy when website practices or services change. The latest version will be published on this page.']
    ]
  },
  terms: {
    title: 'Terms & Conditions',
    description: 'Terms governing use of the Prudent Systems website and its content.',
    sections: [
      ['Website use', 'You may use this website for lawful informational and business-enquiry purposes. You must not disrupt the site, attempt unauthorized access, introduce harmful code or use automated scraping that interferes with normal operation.'],
      ['Intellectual property', 'Website text, graphics, branding and original materials belong to Prudent Systems or their respective licensors. No content may be copied, republished or commercially reused without permission.'],
      ['Information accuracy', 'We aim to keep website information useful and current, but specifications, availability and other content may change. Website content is general information and is not a binding quotation or technical commitment.'],
      ['External links', 'External links do not imply control or endorsement of third-party content. Prudent Systems is not responsible for the availability, security or content of external websites.'],
      ['Information you submit', 'You are responsible for ensuring that information submitted through the website is lawful and accurate and that you are authorized to share it. Do not submit confidential information unless appropriate arrangements are in place.'],
      ['Limitation of liability', 'To the extent permitted by applicable law, Prudent Systems is not liable for indirect loss arising solely from use of, or inability to use, this informational website.'],
      ['Changes and governing law', 'We may change the website or these terms. These terms are governed by applicable laws of India; the appropriate jurisdiction for a particular matter will be determined under applicable law.'],
      ['Contact', `Questions about these terms may be sent to ${companyInfo.email} or addressed to ${companyInfo.address}.`]
    ]
  }
};

export default function LegalPage({ type }) {
  const page = policies[type];
  const path = type === 'privacy' ? '/privacy-policy' : '/terms-and-conditions';
  return <div className="min-h-screen bg-[#0A0E14] text-slate-100">
    <Seo title={`${page.title} | Prudent Systems`} description={page.description} path={path} breadcrumbs={[{ name: page.title, path }]} />
    <PageHeader title={page.title} category="Website Information" subtitle={page.description} breadcrumbs={[{ name: page.title }]} />
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm text-slate-400">Last updated: 15 September 2026</p>
      {page.sections.map(([heading, body], index) => <motion.section key={heading} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.42, delay: Math.min(index * 0.035, 0.18), ease: [0.22, 1, 0.36, 1] }} className="rounded-2xl border border-slate-800 bg-[#121824] p-5 sm:p-7"><h2 className="mb-3 text-xl font-bold text-white">{heading}</h2><p className="leading-relaxed text-slate-300">{body}</p></motion.section>)}
    </main>
  </div>;
}
