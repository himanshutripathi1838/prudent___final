import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { Radio, Cpu, Server, Brain, LayoutDashboard, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HowItWorksFlow() {
  const steps = [
    {
      num: "01",
      icon: Radio,
      title: "Field Sensors",
      desc: "Captures physical metrics like vibration spectrums, water levels, tilt, temperature, and current CT waveforms."
    },
    {
      num: "02",
      icon: ShieldCheck,
      title: "Data Acquisition (DAQ)",
      desc: "High-precision ADC sampling, noise filtering, and signal conditioning via industrial RS485 / Modbus bus."
    },
    {
      num: "03",
      icon: Cpu,
      title: "Edge Gateway",
      desc: "Executes protocol translation, FFT spectral breakdown, and local SQLite data buffering during network outages."
    },
    {
      num: "04",
      icon: Server,
      title: "Cloud Infrastructure",
      desc: "Transmits compressed MQTTS messages over cellular 4G/LoRa into scalable Mosquitto broker & TimescaleDB storage."
    },
    {
      num: "05",
      icon: Brain,
      title: "AI / ML Analytics",
      desc: "Processes predictive maintenance algorithms, anomaly scoring, and hydrodynamic flood estimation."
    },
    {
      num: "06",
      icon: LayoutDashboard,
      title: "Dashboard & Alerts",
      desc: "Pushes real-time alerts via SMS/WhatsApp, populates web GIS portals, and opens automated ERP workorders."
    }
  ];

  return (
    <section className="py-24 bg-[#0D121B] border-y border-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          category="Operational Pipeline"
          title="How Our IIoT Architecture Works"
          subtitle="A seamless 6-stage telemetry pipeline connecting physical industrial assets with intelligent cloud decision making."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#121824] border border-[#1E293B] hover:border-[#00C2CB]/50 transition-all group relative"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#00C2CB]/10 border border-[#00C2CB]/30 flex items-center justify-center text-[#00C2CB] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-slate-700 group-hover:text-[#00C2CB] transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00C2CB] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
