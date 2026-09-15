import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, Cpu } from 'lucide-react';

const PROJECT_DATA = [
  {
    title: "Prudent Gate-200X",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1964&auto=format&fit=crop",
    category: "Hardware SOM",
    year: "2026",
    description: "Universal IIoT Edge Gateway",
    badge: "IIoT Gateways • Edge AI • Remote OTA Firmware",
    headlineLine1: "Powering Industry 4.0 —",
    headlineLine2: "From Sensors to Cloud Intelligence",
    detailText: "Prudent Systems engineers mission-critical IIoT Gateways, Edge AI algorithms, and remote OTA firmware infrastructure for Railways, Civil Infrastructure, Water, Weather, and Manufacturing."
  },
  {
    title: "Railway Vibration",
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1887&auto=format&fit=crop",
    category: "Rail Infrastructure",
    year: "2026",
    description: "Wheel-Flat Defect Telemetry",
    badge: "Rail Infrastructure • Wheel-Flat Detection • 160km/h",
    headlineLine1: "Precision Railway Telemetry —",
    headlineLine2: "Real-Time Track & Wheel Safety",
    detailText: "Continuous high-frequency track vibration monitoring, wheel-flat impact detection, and derailment prevention deployed across 450km+ zonal railway corridors."
  },
  {
    title: "Bridge Scour Radar",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1964&auto=format&fit=crop",
    category: "Civil Safety",
    year: "2026",
    description: "80GHz Flood Level Sensor",
    badge: "Civil Infrastructure • 80GHz Radar • Sub-mm Sensing",
    headlineLine1: "80GHz Radar Bridge Health —",
    headlineLine2: "Sub-Millimeter Surge Tracking",
    detailText: "Non-contact radar water level sensors and structural vibration telemetry providing automated early flood warnings during monsoon surges."
  },
  {
    title: "Machine Predictive",
    image: "https://images.unsplash.com/photo-1515165562839-978bbcf18277?q=80&w=1887&auto=format&fit=crop",
    category: "Industry 4.0",
    year: "2026",
    description: "Edge TFLite Bearing Fault",
    badge: "Smart Manufacturing • Edge TFLite • Zero Stoppage",
    headlineLine1: "Edge AI Machine Health —",
    headlineLine2: "Predict Bearing Faults 14 Days Early",
    detailText: "Quantized TensorFlow Lite models (bearing_model_v3.tflite) analyzing 10kHz motor vibration spectrographs directly on the edge gateway."
  },
  {
    title: "OHE Spark Arc",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=1896&auto=format&fit=crop",
    category: "Pantograph Rail",
    year: "2026",
    description: "Sub-ms Optical Arc Counter",
    badge: "Pantograph Rail Safety • Optical Arc • Sub-ms Speed",
    headlineLine1: "Sub-Millisecond Arc Sensing —",
    headlineLine2: "Electrified Rail OHE Protection",
    detailText: "High-speed optical sensors tracking pantograph overhead equipment (OHE) spark arcing to prevent catenary wire damage and catastrophic outages."
  }
];

export default function InfiniteParallaxSlider({ onDemoRequest, onScrollDownNext }) {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef(null);
  const lastWheelChange = useRef(0);
  const activeData = PROJECT_DATA[activeIndex];
  const changeSlide = (direction) => setActiveIndex(index => (index + direction + PROJECT_DATA.length) % PROJECT_DATA.length);
  const handleWheel = (event) => {
    const direction = Math.sign(event.deltaY);
    if (!direction) return;

    const now = Date.now();
    if (now - lastWheelChange.current < 550) {
      event.preventDefault();
      return;
    }

    if (direction > 0 && activeIndex === PROJECT_DATA.length - 1) {
      onScrollDownNext?.();
      return;
    }

    event.preventDefault();
    lastWheelChange.current = now;
    changeSlide(direction);
  };

  return (
    <div className="responsive-hero relative isolate w-full overflow-hidden bg-[#0B0F17]" role="region" aria-label="Industrial platforms" aria-roledescription="carousel"
      onWheel={handleWheel}
      onTouchStart={event => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }}
      onTouchEnd={event => {
        if (!touchStart.current) return;
        const dx = event.changedTouches[0].clientX - touchStart.current.x;
        const dy = event.changedTouches[0].clientY - touchStart.current.y;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) changeSlide(dx < 0 ? 1 : -1);
        touchStart.current = null;
      }}>
      <img src={activeData.image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-100 via-slate-100/90 to-slate-100/50 dark:from-[#0B0F17] dark:via-[#0B0F17]/85 dark:to-[#0B0F17]/30" />
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-8 sm:py-16 lg:px-16">
        <div className="max-w-2xl space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="max-w-full rounded-2xl border border-sky-500/40 bg-white/80 px-3 py-2 text-xs font-mono text-sky-700 dark:bg-slate-950/70 dark:text-cyan-300">{activeData.badge}</span>
            <span className="text-xs font-mono text-amber-700 dark:text-amber-300">Platform {activeIndex + 1} / {PROJECT_DATA.length}</span>
          </div>
          <div className="space-y-4" aria-live="polite" aria-atomic="true">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              {activeData.headlineLine1.replace(/ \u2014$/, '')}<br /><span className="text-sky-700 dark:text-cyan-300">{activeData.headlineLine2}</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-700 dark:text-slate-300">{activeData.detailText}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button onClick={() => navigate('/solution-portfolio')} className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#00E5FF] px-6 py-3 text-sm font-bold text-slate-950 hover:bg-[#52F1FF]">Explore Solutions <ArrowRight className="h-4 w-4 shrink-0" /></button>
            <button onClick={onDemoRequest} className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-400 bg-white/80 px-6 py-3 text-sm font-bold text-slate-900 dark:bg-slate-950/80 dark:text-white">Request Demo <Cpu className="h-4 w-4 shrink-0" /></button>
          </div>
          <button onClick={onScrollDownNext} className="flex min-h-11 items-center gap-2 text-sm font-semibold text-sky-700 dark:text-cyan-300">Explore Prudent Systems <ChevronDown className="h-5 w-5" /></button>
        </div>
      </div>
    </div>
  );
}
