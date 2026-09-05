import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, ArrowRight, ChevronDown } from 'lucide-react';

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

const CONFIG = {
  SCROLL_SPEED: 0.75,
  LERP_FACTOR: 0.06,
  BUFFER_SIZE: 5,
  MAX_VELOCITY: 150,
  SNAP_DURATION: 500,
};

const lerp = (start, end, factor) =>
  start + (end - start) * factor;

const getProjectData = (index) => {
  const i =
    ((Math.abs(index) % PROJECT_DATA.length) + PROJECT_DATA.length) %
    PROJECT_DATA.length;
  return PROJECT_DATA[i];
};

export default function InfiniteParallaxSlider({ onDemoRequest, onScrollDownNext }) {
  const navigate = useNavigate();

  const [visibleRange, setVisibleRange] = useState({
    min: -CONFIG.BUFFER_SIZE,
    max: CONFIG.BUFFER_SIZE,
  });

  const [photosCompleted, setPhotosCompleted] = useState(false);
  const [photoStep, setPhotoStep] = useState(1);

  const state = useRef({
    currentY: 0,
    targetY: 0,
    isDragging: false,
    isSnapping: false,
    snapStart: { time: 0, y: 0, target: 0 },
    lastScrollTime: Date.now(),
    dragStart: { y: 0, scrollY: 0 },
    projectHeight: typeof window !== 'undefined' ? window.innerHeight : 900,
    photosScrolledCount: 0,
    isCompleted: false
  });

  const projectsRef = useRef(new Map());
  const requestRef = useRef();
  const containerRef = useRef(null);

  const updateParallax = (img, scroll, index, height) => {
    if (!img) return;
    if (!img.dataset.parallaxCurrent) {
      img.dataset.parallaxCurrent = "0";
    }
    
    let current = parseFloat(img.dataset.parallaxCurrent);
    const target = (-scroll - index * height) * 0.25;
    current = lerp(current, target, 0.1);
    
    if (Math.abs(current - target) > 0.01) {
      img.style.transform = `translateY(${current}px) scale(1.45)`;
      img.dataset.parallaxCurrent = current.toString();
    }
  };

  const updateSnap = () => {
    const s = state.current;
    const progress = Math.min(
      (Date.now() - s.snapStart.time) / CONFIG.SNAP_DURATION,
      1
    );
    const eased = 1 - Math.pow(1 - progress, 3);
    s.targetY =
      s.snapStart.y + (s.snapStart.target - s.snapStart.y) * eased;
    if (progress >= 1) s.isSnapping = false;
  };

  const snapToProject = () => {
    const s = state.current;
    const current = Math.round(-s.targetY / s.projectHeight);
    const target = -current * s.projectHeight;
    s.isSnapping = true;
    s.snapStart = {
      time: Date.now(),
      y: s.targetY,
      target: target,
    };
  };

  const animationLoop = () => {
    const s = state.current;
    if (s.isSnapping) updateSnap();

    s.currentY = lerp(s.currentY, s.targetY, CONFIG.LERP_FACTOR);

    if (!s.isDragging && !s.isSnapping && Date.now() - s.lastScrollTime > 150) {
      snapToProject();
    }

    const currentProjectIndex = Math.round(-s.currentY / s.projectHeight);
    const newStep = ((Math.abs(currentProjectIndex) % PROJECT_DATA.length) + 1);
    if (newStep !== photoStep) {
      setPhotoStep(newStep);
    }

    const margin = CONFIG.BUFFER_SIZE;
    if (
      currentProjectIndex - margin !== visibleRange.min ||
      currentProjectIndex + margin !== visibleRange.max
    ) {
      setVisibleRange({
        min: currentProjectIndex - margin,
        max: currentProjectIndex + margin,
      });
    }

    indices.forEach((i) => {
      const proj = projectsRef.current.get(i);
      if (proj) {
        const y = s.currentY + i * s.projectHeight;
        proj.style.transform = `translateY(${y}px)`;
        const img = proj.querySelector("img");
        updateParallax(img, s.currentY, i, s.projectHeight);
      }
    });

    requestRef.current = requestAnimationFrame(animationLoop);
  };

  useEffect(() => {
    const handleResize = () => {
      state.current.projectHeight = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const container = containerRef.current;

    const onWheel = (e) => {
      const s = state.current;
      if (!s.isCompleted) {
        if (e.deltaY > 0) {
          e.preventDefault();
          s.isSnapping = false;
          s.lastScrollTime = Date.now();
          s.photosScrolledCount += 1;
          s.targetY -= s.projectHeight;

          if (s.photosScrolledCount >= PROJECT_DATA.length * 1.5) {
            s.isCompleted = true;
            setPhotosCompleted(true);
            if (onScrollDownNext) {
              onScrollDownNext();
            }
          }
        } else if (e.deltaY < 0 && s.photosScrolledCount > 0) {
          e.preventDefault();
          s.isSnapping = false;
          s.lastScrollTime = Date.now();
          s.photosScrolledCount = Math.max(0, s.photosScrolledCount - 1);
          s.targetY += s.projectHeight;
        }
      }
    };

    const onTouchStart = (e) => {
      const s = state.current;
      s.isDragging = true;
      s.isSnapping = false;
      s.dragStart = { y: e.touches[0].clientY, scrollY: s.targetY };
      s.lastScrollTime = Date.now();
    };

    const onTouchMove = (e) => {
      const s = state.current;
      if (!s.isDragging) return;
      s.targetY =
        s.dragStart.scrollY +
        (e.touches[0].clientY - s.dragStart.y) * 1.5;
      s.lastScrollTime = Date.now();
    };

    const onTouchEnd = () => {
      state.current.isDragging = false;
    };

    if (container) {
      container.addEventListener("wheel", onWheel, { passive: false });
      container.addEventListener("touchstart", onTouchStart);
      container.addEventListener("touchmove", onTouchMove);
      container.addEventListener("touchend", onTouchEnd);
    }
    
    requestRef.current = requestAnimationFrame(animationLoop);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (container) {
        container.removeEventListener("wheel", onWheel);
        container.removeEventListener("touchstart", onTouchStart);
        container.removeEventListener("touchmove", onTouchMove);
        container.removeEventListener("touchend", onTouchEnd);
      }
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const scrollToNext = () => {
    state.current.isCompleted = true;
    setPhotosCompleted(true);
    if (onScrollDownNext) {
      onScrollDownNext();
    } else {
      window.scrollTo({ top: window.innerHeight * 0.95, behavior: 'smooth' });
    }
  };

  const indices = [];
  for (let i = visibleRange.min; i <= visibleRange.max; i++) {
    indices.push(i);
  }

  // Active Project Data based on photoStep
  const activeData = PROJECT_DATA[(photoStep - 1) % PROJECT_DATA.length];

  return (
    <div ref={containerRef} className="parallax-container relative w-full h-screen">
      
      {/* Background Fullscreen Parallax Project Images */}
      <ul className="project-list">
        {indices.map((i) => {
          const data = getProjectData(i);
          return (
            <div
              key={i}
              className="project"
              ref={(el) => {
                if (el) projectsRef.current.set(i, el);
                else projectsRef.current.delete(i);
              }}
            >
              <img src={data.image} alt={data.title} className="opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/40 to-[#0B0F17]/30 pointer-events-none" />
            </div>
          );
        })}
      </ul>

      {/* Floating Dynamic Hero Text */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-12 lg:left-20 z-20 max-w-xl px-4 pointer-events-auto">
        <div className="space-y-4 drop-shadow-[0_8px_30px_rgba(0,0,0,0.95)]">
          
          {/* Dynamic Badge & Platform Counter */}
          <div className="flex items-center justify-between gap-3">
            <AnimatePresence mode="wait">
              <motion.span
                key={activeData.badge}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.3 }}
                className="uppercase text-[10px] sm:text-[11px] font-mono tracking-[0.08em] text-[#00E5FF] bg-[#0B0F17]/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#00E5FF]/40 inline-flex items-center gap-2 shadow-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping shrink-0" />
                <span className="truncate">{activeData.badge}</span>
              </motion.span>
            </AnimatePresence>

            <span className="text-[11px] font-mono font-extrabold text-[#F2A623] bg-[#0B0F17]/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#F2A623]/40 shrink-0 shadow-lg">
              Platform {photoStep} / 5
            </span>
          </div>

          {/* Dynamic Headline Text changing smoothly with each image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeData.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-2"
            >
              <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.2] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                {activeData.headlineLine1} <br />
                <span className="bg-gradient-to-r from-white via-slate-100 to-[#00E5FF] bg-clip-text text-transparent">
                  {activeData.headlineLine2}
                </span>
              </h1>

              <p className="text-xs sm:text-sm lg:text-[15px] font-normal text-slate-300 leading-relaxed font-sans pt-1 max-w-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                {activeData.detailText}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={() => navigate('/solution-portfolio')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-slate-950 bg-[#00E5FF] hover:bg-[#52F1FF] font-bold text-sm transition-all shadow-lg hover:shadow-[0_0_25px_rgba(0,229,255,0.7)] flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Explore Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onDemoRequest}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-white bg-[#0B0F17]/80 hover:bg-[#00E5FF]/20 backdrop-blur-md border border-slate-600 hover:border-[#00E5FF] font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Request Demo</span>
              <Cpu className="w-4 h-4 text-[#00E5FF]" />
            </button>
          </div>
        </div>
      </div>

      {/* Clean & Elegant Interactive Minimap (Bottom Right) - Zero Text Overlap */}
      <div className="minimap pointer-events-auto shadow-2xl">
        <div className="minimap-wrapper flex w-full h-full bg-[#0B0F17]/90 backdrop-blur-xl rounded-2xl overflow-hidden border border-[#00E5FF]/40">
          
          {/* Minimap Active Thumbnail Image */}
          <div className="w-[40%] h-full relative overflow-hidden bg-slate-950 shrink-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.title}
                src={activeData.image}
                alt={activeData.title}
                initial={{ opacity: 0, scale: 1.15 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Minimap Active Info Card */}
          <div className="w-[60%] h-full p-3 sm:p-4 flex flex-col justify-center gap-1 font-mono text-white overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.title}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-1"
              >
                <div className="flex items-center justify-between text-xs font-bold text-[#00E5FF]">
                  <span>0{photoStep}</span>
                  <span className="truncate max-w-[110px]">{activeData.title}</span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>{activeData.category}</span>
                  <span>{activeData.year}</span>
                </div>
                <div className="text-[10px] text-slate-300 truncate">
                  {activeData.description}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Clickable Scroll Down Arrow Button */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-300 hover:text-[#00E5FF] text-xs font-mono animate-bounce z-30 cursor-pointer pointer-events-auto group"
      >
        <span className="group-hover:underline">
          {photosCompleted ? "SCROLL DOWN TO PAGE" : "SCROLL THROUGH PHOTOS (" + photoStep + "/5)"}
        </span>
        <ChevronDown className="w-5 h-5 text-[#00E5FF] group-hover:scale-125 transition-transform" />
      </button>

    </div>
  );
}
