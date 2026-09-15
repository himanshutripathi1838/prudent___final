import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ContactFormSection from '../components/contact/ContactFormSection';
import Seo from '../components/common/Seo';

export default function ContactUs() {
  return <div className="min-h-screen bg-[#0A0E14] text-slate-100">
    <Seo title="Contact Prudent Systems | Industrial IoT Enquiries" description="Contact Prudent Systems in Bhopal for industrial IoT, sensing, monitoring, automation and custom engineering enquiries." path="/contact-us" breadcrumbs={[{ name: 'Contact Us', path: '/contact-us' }]} />
    <PageHeader title="Contact Us" category="Engineering & Business Enquiries" subtitle="Discuss an industrial IoT, sensing, monitoring or custom engineering requirement with our team." breadcrumbs={[{ name: 'Contact Us' }]} />
    <ContactFormSection />
  </div>;
}
