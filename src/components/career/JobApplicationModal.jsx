import React, { useState, useEffect } from 'react';
import Modal from '../common/Modal';
import { Upload, CheckCircle2, FileText } from 'lucide-react';
import { openPositions } from '../../data/jobsData';

export default function JobApplicationModal({ isOpen, onClose, selectedJob }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    fileName: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedJob) {
      setFormData((prev) => ({ ...prev, position: selectedJob.title }));
    }
  }, [selectedJob]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Career Application Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        message: '',
        fileName: ''
      });
    }, 2500);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={selectedJob ? `Apply for ${selectedJob.title}` : 'Submit Job Application'}
    >
      {submitted ? (
        <div className="py-8 text-center space-y-3">
          <CheckCircle2 className="w-14 h-14 text-[#00C2CB] mx-auto" />
          <h4 className="text-xl font-bold text-white">Application Received!</h4>
          <p className="text-slate-300 text-xs max-w-sm mx-auto">
            Thank you for applying to Prudent Systems. Our engineering recruiting team will review your application and reach out shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Dr. Ananya Sen"
              className="w-full px-4 py-2.5 rounded-lg bg-[#0A0E14] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00C2CB] text-sm"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="ananya@gmail.com"
                className="w-full px-4 py-2.5 rounded-lg bg-[#0A0E14] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00C2CB] text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 rounded-lg bg-[#0A0E14] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00C2CB] text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
                Position Applied For *
              </label>
              <select
                required
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-[#0A0E14] border border-slate-700 text-white focus:outline-none focus:border-[#00C2CB] text-sm"
              >
                <option value="">Select Position...</option>
                {openPositions.map((job) => (
                  <option key={job.id} value={job.title}>{job.title}</option>
                ))}
                <option value="Internship Opportunity">Internship Opportunity</option>
                <option value="General Engineering Role">General Engineering Role</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
                Years of Relevant Exp.
              </label>
              <input
                type="text"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="e.g. 4 Years"
                className="w-full px-4 py-2.5 rounded-lg bg-[#0A0E14] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00C2CB] text-sm"
              />
            </div>
          </div>

          {/* Resume Upload UI */}
          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
              Upload Resume (PDF / DOCX) *
            </label>
            <div className="relative border-2 border-dashed border-slate-700 hover:border-[#00C2CB] rounded-xl p-4 text-center cursor-pointer transition-colors bg-[#0A0E14]">
              <input
                type="file"
                required
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex flex-col items-center justify-center gap-1 text-slate-400">
                <Upload className="w-6 h-6 text-[#00C2CB]" />
                {formData.fileName ? (
                  <span className="text-xs font-mono font-bold text-white flex items-center gap-1">
                    <FileText className="w-4 h-4 text-[#00C2CB]" /> {formData.fileName}
                  </span>
                ) : (
                  <span className="text-xs">Drag and drop or click to upload resume</span>
                )}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase text-slate-400 mb-1">
              Cover Note / Relevant Projects
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Highlight any RTOS, embedded C++, PCB design, or cloud IoT projects..."
              className="w-full px-4 py-2.5 rounded-lg bg-[#0A0E14] border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#00C2CB] text-sm resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#00C2CB] hover:bg-[#00E5FF] text-slate-900 font-bold transition-all text-sm shadow-lg shadow-[#00C2CB]/25"
          >
            Submit Application
          </button>
        </form>
      )}
    </Modal>
  );
}
