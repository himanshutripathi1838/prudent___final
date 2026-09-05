import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import ContactFormSection from '../components/contact/ContactFormSection';
import Modal from '../components/common/Modal';

export default function ContactUs() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="bg-[#0A0E14] text-slate-100 min-h-screen">
      
      {/* 1. Page Header Banner */}
      <PageHeader
        title="Contact Us"
        category="Engineering & Sales Inquiries"
        subtitle="Get in touch with our solution architects to discuss gateway integration, custom OEM hardware, or pilot site deployments."
        breadcrumbs={[{ name: 'Contact Us' }]}
      />

      {/* 2. Main Contact Form & Info Section */}
      <ContactFormSection onRequestDemo={() => setDemoModalOpen(true)} />

      {/* Demo Modal */}
      <Modal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        title="Schedule a Live Demonstration"
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-300">
            Our solution engineering team will demonstrate our Universal IIoT Gateway & cloud telemetry portal live with your custom sensor specifications.
          </p>
          <div className="p-4 rounded-xl bg-[#0A0E14] border border-slate-800 text-xs font-mono text-[#00C2CB]">
            Email: sales@prusys.com | Call: +91 (040) 4892-3100
          </div>
          <button
            onClick={() => setDemoModalOpen(false)}
            className="w-full py-3 rounded-lg bg-[#00C2CB] hover:bg-[#00E5FF] text-slate-900 font-bold transition-all text-sm shadow-lg"
          >
            Close Modal
          </button>
        </div>
      </Modal>

    </div>
  );
}
