import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, RefreshCw, Cpu, Server, Lock, CheckCircle2, AlertTriangle, ArrowRight, Upload, Radio } from 'lucide-react';

export default function OtaArchitectureDiagram() {
  const [activeStep, setActiveStep] = useState(0);
  const [partitionState, setPartitionState] = useState({
    partitionA: { version: 'v1.0 (Active)', status: 'RUNNING' },
    partitionB: { version: 'v1.1 (Staging)', status: 'EMPTY' }
  });
  const [simulating, setSimulating] = useState(false);

  const otaSteps = [
    { step: 1, title: "1. Firmware Build & Model Compile", desc: "Engineer compiles firmware binary (`firmware_v2.0.bin`) or quantized Edge AI model (`bearing_model_v3.tflite`)." },
    { step: 2, title: "2. SHA-256 Checksum & RSA-2048 Sign", desc: "Generates SHA-256 checksum & signs binary using RSA-2048/ECC private key to enforce Secure Boot authenticity." },
    { step: 3, title: "3. Cloud Upload & MQTTS Trigger", desc: "Firmware stored on AWS S3 / MinIO; cloud sends encrypted MQTTS notification (`{\"version\":\"2.0\", \"url\":\"...\"}`) to target gateways." },
    { step: 4, title: "4. Encrypted HTTPS Download", desc: "Gateway downloads binary via HTTPS TLS 1.3 in chunked buffers to local RAM storage." },
    { step: 5, title: "5. Digital Integrity Verification", desc: "Hardware Root of Trust checks RSA-2048 signature, SHA-256 hash, and file size before flash write." },
    { step: 6, title: "6. Write to Inactive Partition B", desc: "Firmware staged into Flash Partition B while Partition A continues active sensor data collection without downtime." },
    { step: 7, title: "7. Warm Reboot & 60s Self-Test", desc: "Bootloader switches active boot flag to Partition B. Device reboots & runs self-test (Sensors, Flash, Network)." },
    { step: 8, title: "8. Success Confirmation or Auto-Rollback", desc: "If self-test passes, Partition B is marked active. If update fails, bootloader automatically reverts to Partition A to prevent bricking!" }
  ];

  const triggerOtaSim = () => {
    setSimulating(true);
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      if (current < otaSteps.length) {
        setActiveStep(current);
        if (current === 5) {
          setPartitionState({
            partitionA: { version: 'v1.0 (Active)', status: 'RUNNING' },
            partitionB: { version: 'v2.0 (Writing)', status: 'FLASHING' }
          });
        } else if (current === 6) {
          setPartitionState({
            partitionA: { version: 'v1.0 (Standby)', status: 'REBOOTING' },
            partitionB: { version: 'v2.0 (Verifying)', status: 'SELF TEST' }
          });
        } else if (current === 7) {
          setPartitionState({
            partitionA: { version: 'v1.0 (Backup)', status: 'STANDBY' },
            partitionB: { version: 'v2.0 (Active)', status: 'SUCCESS' }
          });
        }
      } else {
        clearInterval(interval);
        setSimulating(false);
      }
    }, 1800);
  };

  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-[#121A28] border border-[#00C2CB]/40 shadow-2xl space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00C2CB]/20 text-[#00C2CB] border border-[#00C2CB]/40 uppercase inline-block mb-2">
            A/B Dual-Partition Flash Architecture
          </span>
          <h3 className="text-2xl font-extrabold text-white">
            Failsafe Remote OTA Firmware Workflow
          </h3>
        </div>

        <button
          onClick={triggerOtaSim}
          disabled={simulating}
          className="px-6 py-3 rounded-xl bg-[#00C2CB] hover:bg-[#00E5FF] text-slate-950 font-bold text-xs font-mono transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,194,203,0.5)] disabled:opacity-50 flex items-center gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${simulating ? 'animate-spin' : ''}`} />
          <span>{simulating ? 'Simulating OTA Update...' : 'Simulate Dual OTA Update'}</span>
        </button>
      </div>

      {/* Interactive Dual Flash Memory Partition Visualiser */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Partition A */}
        <div className={`p-6 rounded-2xl border transition-all ${
          partitionState.partitionA.status === 'SUCCESS' || partitionState.partitionA.status === 'RUNNING'
            ? 'bg-[#0A0E14] border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
            : 'bg-[#0A0E14]/60 border-slate-800 opacity-60'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold text-white uppercase">Flash Partition A (Primary)</span>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
              {partitionState.partitionA.status}
            </span>
          </div>
          <div className="text-xl font-extrabold font-mono text-[#00C2CB] mb-1">
            {partitionState.partitionA.version}
          </div>
          <p className="text-xs text-slate-400 font-mono">Contains RSA-2048 Verified Bootloader & Core OS</p>
        </div>

        {/* Partition B */}
        <div className={`p-6 rounded-2xl border transition-all ${
          partitionState.partitionB.status === 'SUCCESS'
            ? 'bg-[#0A0E14] border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)]'
            : partitionState.partitionB.status === 'FLASHING' || partitionState.partitionB.status === 'SELF TEST'
            ? 'bg-[#0A0E14] border-[#F2A623] shadow-[0_0_20px_rgba(242,166,35,0.2)] animate-pulse'
            : 'bg-[#0A0E14]/60 border-slate-800'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold text-white uppercase">Flash Partition B (Staging / Backup)</span>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F2A623]/20 text-[#F2A623] border border-[#F2A623]/40">
              {partitionState.partitionB.status}
            </span>
          </div>
          <div className="text-xl font-extrabold font-mono text-[#F2A623] mb-1">
            {partitionState.partitionB.version}
          </div>
          <p className="text-xs text-slate-400 font-mono">Failsafe 60s Watchdog Auto-Rollback Buffer</p>
        </div>

      </div>

      {/* 8-Step Interactive Stepper */}
      <div className="space-y-3 pt-4">
        <div className="text-xs font-mono font-bold text-[#00C2CB] uppercase mb-2">
          Step-by-Step Security & Update Pipeline
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {otaSteps.map((s, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                activeStep === idx
                  ? 'bg-[#0A0E14] border-[#00C2CB] text-white shadow-lg'
                  : 'bg-[#0A0E14]/60 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="text-xs font-mono font-bold text-[#00C2CB] mb-1">{s.title}</div>
              <p className="text-[11px] text-slate-300 font-normal leading-relaxed line-clamp-3">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
