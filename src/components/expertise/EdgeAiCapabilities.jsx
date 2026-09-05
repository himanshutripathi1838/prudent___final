import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Zap, Activity, CheckCircle2, RefreshCw, FileCode2 } from 'lucide-react';

export default function EdgeAiCapabilities() {
  const aiCapabilities = [
    {
      title: "Edge FFT Spectrograph Analysis",
      desc: "Computes 10,000 Hz vibration spectrum breakdown on-chip (RMS, Peak, FFT spectrum) to isolate BPFO, BPFI, and BSF bearing defect frequencies locally.",
      code: "bearing_model_v3.tflite"
    },
    {
      title: "Model-Only OTA Updates",
      desc: "Update Edge AI models remotely without touching system firmware binary! Upload new TensorFlow Lite models (`accuracy 85% → 95%`) to all gateways instantly.",
      code: "ota_deploy_model --target=bearing_model_v3"
    },
    {
      title: "Sub-Millisecond Optical Arc Detection",
      desc: "Sub-millisecond UV arc pulse counting & 120fps thermal hotspot framing for locomotive pantograph OHE wire inspection.",
      code: "uv_arc_counter.py"
    },
    {
      title: "Hydrodynamic Flood Risk Forecasting",
      desc: "On-gateway polynomial river discharge totalizing & 80GHz water level surge forecasting during monsoon storms.",
      code: "hydro_surge_predict.so"
    }
  ];

  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-[#121A28] border border-[#00C2CB]/40 shadow-2xl space-y-8">
      <div>
        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#00C2CB]/20 text-[#00C2CB] border border-[#00C2CB]/40 uppercase inline-block mb-2">
          On-Device Intelligence & ML OTA
        </span>
        <h3 className="text-2xl font-extrabold text-white">
          Edge AI Inferencing & AI Model-Only OTA Updates
        </h3>
        <p className="mt-2 text-sm text-slate-300">
          Instead of sending raw 1,000 readings/sec streams to the cloud, Prudent Gateways compute local FFTs & run quantized TensorFlow Lite models on-device, cutting cloud data bandwidth costs by 95%.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {aiCapabilities.map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-[#0A0E14] border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Brain className="w-5 h-5 text-[#00C2CB]" />
                {item.title}
              </h4>
              <span className="text-[10px] font-mono text-[#F2A623] bg-[#F2A623]/10 px-2.5 py-0.5 rounded border border-[#F2A623]/30">
                On-Chip ML
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {item.desc}
            </p>
            <div className="p-3 rounded-lg bg-[#070A0F] border border-slate-800 text-xs font-mono text-[#00C2CB] flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-slate-500" />
              <span>{item.code}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
