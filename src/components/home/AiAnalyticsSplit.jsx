import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Activity, CheckCircle2, ArrowRight, ShieldAlert, Zap, TrendingUp, AlertTriangle } from 'lucide-react';

export default function AiAnalyticsSplit() {
  const navigate = useNavigate();

  const aiFeatures = [
    "Real-time anomaly detection with quantized TensorFlow Lite models",
    "Predictive maintenance forecasting machine failure 12–14 days early",
    "High-frequency vibration FFT spectrograph & bearing defect scoring",
    "Continuous multi-parameter condition monitoring (Temp, Pressure, Tilt)",
    "Asset health scoring with automated AI-assisted diagnostics"
  ];

  return (
    <section id="edge-ai" className="py-24 lg:py-32 bg-[#060B12] border-b border-[#1E293B]/60 relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Large Realistic Predictive Maintenance Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-9 rounded-3xl bg-[#0B101A] border border-[#00E5FF]/40 shadow-[0_0_60px_rgba(0,229,255,0.18)] relative overflow-hidden space-y-6">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-mono">TRACTION MOTOR #04</h3>
                    <span className="text-[10px] font-mono text-purple-400">MODEL: TFLITE-BEARING-V3.2</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#F2A623]/15 text-[#F2A623] border border-[#F2A623]/30 flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    ELEVATED VIBRATION
                  </span>
                </div>
              </div>

              {/* 4 Metric Counters Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-[#060B12] border border-slate-800">
                  <div className="text-[9px] font-mono text-slate-400">MACHINE HEALTH</div>
                  <div className="text-xl font-extrabold font-mono text-amber-400">82%</div>
                  <div className="text-[9px] font-mono text-amber-400">Degrading</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#060B12] border border-slate-800">
                  <div className="text-[9px] font-mono text-slate-400">ANOMALY PROBABILITY</div>
                  <div className="text-xl font-extrabold font-mono text-red-400">91%</div>
                  <div className="text-[9px] font-mono text-red-400">High Risk</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#060B12] border border-slate-800">
                  <div className="text-[9px] font-mono text-slate-400">VIBRATION AXIS</div>
                  <div className="text-xl font-extrabold font-mono text-[#00E5FF]">2.84g</div>
                  <div className="text-[9px] font-mono text-slate-400">10kHz Sampling</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#060B12] border border-slate-800">
                  <div className="text-[9px] font-mono text-slate-400">PREDICTED FAILURE</div>
                  <div className="text-xl font-extrabold font-mono text-purple-400">12–14 Days</div>
                  <div className="text-[9px] font-mono text-slate-400">RUL Window</div>
                </div>
              </div>

              {/* Live FFT Spectrum Waveform Graph */}
              <div className="p-4 rounded-2xl bg-[#060B12] border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#00E5FF]" />
                    <span>REAL-TIME FFT VIBRATION SPECTROGRAPH</span>
                  </span>
                  <span className="text-red-400 font-bold">Anomaly Spike Detected</span>
                </div>
                <svg className="w-full h-24 stroke-purple-400 fill-none" viewBox="0 0 300 80">
                  <path d="M0 60 L20 60 L30 50 L40 60 L70 60 L80 10 L90 60 L120 60 L130 5 L140 60 L180 60 L190 35 L200 60 L240 60 L250 15 L260 60 L300 60" strokeWidth="2" />
                  <line x1="0" y1="20" x2="300" y2="20" stroke="#F2A623" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
                <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-1">
                  <span>0 Hz</span>
                  <span className="text-[#F2A623] font-bold">Inner Race Fault (125Hz Peak)</span>
                  <span>5000 Hz</span>
                </div>
              </div>

              {/* Status Alert Banner */}
              <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center gap-3 text-xs font-mono text-purple-300">
                <ShieldAlert className="w-4 h-4 text-purple-400 shrink-0" />
                <span>AI Prediction: Bearing replacement recommended within 14-day service maintenance window.</span>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Copy & AI Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="uppercase text-[11px] font-mono tracking-[0.15em] text-purple-400 bg-purple-500/10 px-3.5 py-1 rounded-full border border-purple-500/30 inline-block font-bold">
              EDGE AI
            </span>

            <h2 className="text-3xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight font-sans">
              Predict Failure Before It Happens.
            </h2>

            <p className="text-base font-normal text-slate-300 leading-relaxed font-sans">
              AI models analyze industrial signals continuously to identify abnormal patterns before equipment failure occurs.
            </p>

            <div className="space-y-3 pt-2 font-mono text-xs text-slate-300">
              {aiFeatures.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => navigate('/solution-portfolio#predictive')}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#00E5FF] hover:bg-[#52F1FF] text-slate-950 font-bold text-sm transition-all shadow-lg shadow-[#00E5FF]/25 hover:shadow-[#00E5FF]/50 active:scale-95 cursor-pointer font-sans"
              >
                <span>Explore Edge AI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
