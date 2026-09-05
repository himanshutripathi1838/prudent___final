import React, { useState, useRef, useMemo, Component, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Cpu,
  Activity,
  Zap,
  Factory,
  Train,
  GitBranch,
  Droplets,
  ArrowRight,
  ShieldCheck,
  Layers,
  Radio,
  Sparkles,
  Sliders,
  CheckCircle2
} from 'lucide-react';

// Error boundary to gracefully catch WebGL failures
class ThreeErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("3D WebGL Mesh Wave fallback triggered:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

// 3D Animated Fluid Wave Mesh Plane
function DynamicFluidMeshPlane() {
  const meshRef = useRef();
  const wireRef = useRef();

  const { geometry, wireGeometry } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(28, 16, 50, 50);
    const wire = new THREE.PlaneGeometry(28, 16, 36, 36);
    return { geometry: geo, wireGeometry: wire };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.8;
    const pointerX = state.pointer.x * 2;
    const pointerY = state.pointer.y * 2;

    if (meshRef.current) {
      const pos = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const distFromMouse = Math.sqrt((x - pointerX) ** 2 + (y - pointerY) ** 2);
        
        const z =
          Math.sin(x * 0.35 + time * 1.4) * 0.6 +
          Math.cos(y * 0.45 + time * 1.1) * 0.5 +
          Math.sin((x * 0.2 + y * 0.3) + time * 0.9) * 0.4 +
          Math.cos(distFromMouse * 0.5 - time * 2) * 0.2;

        pos.setZ(i, z);
      }
      pos.needsUpdate = true;
    }

    if (wireRef.current) {
      const pos = wireRef.current.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        const z =
          Math.sin(x * 0.35 + time * 1.4) * 0.6 +
          Math.cos(y * 0.45 + time * 1.1) * 0.5 +
          Math.sin((x * 0.2 + y * 0.3) + time * 0.9) * 0.4;

        pos.setZ(i, z + 0.08);
      }
      pos.needsUpdate = true;
    }

    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, pointerX * 0.3, 0.04);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, pointerY * 0.3 - 2, 0.04);
    state.camera.lookAt(0, -0.5, 0);
  });

  return (
    <group rotation={[-Math.PI / 3.4, 0, 0]} position={[0, -1.8, -3]}>
      {/* Shaded Organic Fluid Wave Surface */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshPhongMaterial
          color="#06202e"
          emissive="#003543"
          specular="#00E5FF"
          shininess={80}
          side={THREE.DoubleSide}
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* Layered Cyber Wireframe Mesh Grid */}
      <mesh ref={wireRef} geometry={wireGeometry}>
        <meshBasicMaterial
          color="#00C2CB"
          wireframe
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// Live Signal Waveform SVG Canvas inside interactive widget card
function LiveWaveformGraphic({ activeColor = "#00E5FF" }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 0.15) % (Math.PI * 2));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const points = useMemo(() => {
    const p = [];
    const width = 280;
    const height = 40;
    const midY = height / 2;

    for (let x = 0; x <= width; x += 4) {
      const normalizedX = x / width;
      const wave1 = Math.sin(normalizedX * Math.PI * 6 + phase) * 12;
      const wave2 = Math.cos(normalizedX * Math.PI * 10 - phase * 1.5) * 6;
      const y = midY + wave1 + wave2;
      p.push(`${x},${y.toFixed(2)}`);
    }
    return p.join(' L ');
  }, [phase]);

  return (
    <div className="w-full h-12 relative flex items-center overflow-hidden rounded-lg bg-[#080d16]/80 border border-[#00C2CB]/20 px-2">
      <svg className="w-full h-full" viewBox="0 0 280 40" fill="none">
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00C2CB" stopOpacity="0.2" />
            <stop offset="50%" stopColor={activeColor} stopOpacity="1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <path
          d={`M ${points}`}
          stroke="url(#waveGradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function FluidGradientSolutionHero({ onSelectDomain }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const solutionDomains = [
    {
      id: 'smart-msme-retrofit',
      name: 'Manufacturing & OEE',
      icon: Factory,
      color: '#00E5FF',
      metricsLabel: 'Real-Time Factory OEE',
      metricVal: '88.4%',
      status: 'OEE Engine Active',
      desc: 'Non-intrusive CNC & machine retrofit'
    },
    {
      id: 'railway-monitoring',
      name: 'Railway Track Integrity',
      icon: Train,
      color: '#FFB800',
      metricsLabel: 'Wheel Flat Impact Speed',
      metricVal: '160 km/h',
      status: 'LoRa Trackside Telemetry',
      desc: 'Vibration & spectrograph derailment guard'
    },
    {
      id: 'ohe-spark-monitoring',
      name: 'OHE Pantograph Arc',
      icon: Zap,
      color: '#00C2CB',
      metricsLabel: 'Arc Pulse Capture Speed',
      metricVal: '< 1 ms',
      status: '120fps Thermal & UV',
      desc: 'High-speed catenary wire arc detection'
    },
    {
      id: 'bridge-monitoring',
      name: 'Bridge & Hydro Safety',
      icon: GitBranch,
      color: '#38BDF8',
      metricsLabel: 'Water Level Precision',
      metricVal: '±1.0 mm',
      status: '80GHz Radar Level Active',
      desc: 'Scour depth & sub-arcsec tilt monitoring'
    },
    {
      id: 'machine-health',
      name: 'Predictive Machine AI',
      icon: Activity,
      color: '#8B5CF6',
      metricsLabel: 'Unplanned Downtime Cut',
      metricVal: '- 75%',
      status: 'Edge TFLite FFT Engine',
      desc: 'Bearing fault frequency & RUL forecasting'
    },
    {
      id: 'water-monitoring',
      name: 'Smart Water Networks',
      icon: Droplets,
      color: '#06B6D4',
      metricsLabel: 'Max Radar Level Range',
      metricVal: '35 meters',
      status: 'Govt Protocol Telemetry',
      desc: 'Canal discharge totalizer & flood alarm'
    }
  ];

  const currentDomain = solutionDomains[activeTab];

  const handleTabClick = (index, id) => {
    setActiveTab(index);
    if (onSelectDomain) {
      onSelectDomain(id);
    }
  };

  const scrollToSolutions = () => {
    const el = document.getElementById('solution-cards-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 600, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-[92vh] bg-[#0A0E14] text-slate-100 overflow-hidden flex flex-col justify-between pt-24 pb-12">
      {/* ========================================================================= */}
      {/* 1. FLUID GRADIENT BACKGROUND LAYER & ORGANIC MESH LIGHTS                   */}
      {/* ========================================================================= */}
      
      {/* 3D WebGL Canvas Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
        <ThreeErrorBoundary>
          <Canvas
            camera={{ position: [0, 1.5, 7.5], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 1.5]}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 15, 10]} intensity={1.5} color="#00E5FF" />
            <pointLight position={[-10, -5, -5]} intensity={2} color="#8B5CF6" />
            <pointLight position={[5, 10, -2]} intensity={1.2} color="#FFB800" />
            <DynamicFluidMeshPlane />
          </Canvas>
        </ThreeErrorBoundary>
      </div>

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none z-0" />

      {/* Layered Organic Animated Fluid Gradient Blobs */}
      <div className="absolute -top-32 -left-20 w-[550px] h-[550px] bg-[#00C2CB]/15 rounded-full blur-[120px] pointer-events-none animate-pulse z-0" />
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute -bottom-20 left-1/3 w-[500px] h-[500px] bg-[#00E5FF]/10 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#00E5FF]/10 via-[#8B5CF6]/10 to-[#FFB800]/10 rounded-[100%] blur-[100px] pointer-events-none z-0" />

      {/* Layered Morphing SVG Waves */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 600" fill="none">
          {/* Wave Layer 1 */}
          <path
            d="M0 192L48 213.3C96 235 192 277 288 266.7C384 256 480 192 576 186.7C672 181 768 235 864 250.7C960 267 1056 245 1152 218.7C1248 192 1344 160 1392 144L1440 128V600H0Z"
            fill="url(#gradientLayer1)"
            opacity="0.25"
          />
          {/* Wave Layer 2 */}
          <path
            d="M0 320L60 304C120 288 240 256 360 256C480 256 600 288 720 293.3C840 299 960 277 1080 261.3C1200 245 1320 235 1380 229.3L1440 224V600H0Z"
            fill="url(#gradientLayer2)"
            opacity="0.2"
          />
          <defs>
            <linearGradient id="gradientLayer1" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00C2CB" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#0A0E14" />
            </linearGradient>
            <linearGradient id="gradientLayer2" x1="1440" y1="0" x2="0" y2="600" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="70%" stopColor="#0B1528" />
              <stop offset="100%" stopColor="#0A0E14" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO MAIN CONTAINER                                                   */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <NavLink to="/" className="hover:text-[#00C2CB] transition-colors flex items-center gap-1">
            <span>Home</span>
          </NavLink>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-[#00E5FF] font-semibold">Solution Portfolio</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Typography & Interactive Domain Pills */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#00C2CB]/10 text-[#00E5FF] border border-[#00C2CB]/30 shadow-lg shadow-[#00C2CB]/10"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#00E5FF] animate-spin" style={{ animationDuration: '6s' }} />
              <span>Abstract Fluid Mesh • Multi-Industry IIoT</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Sensor-to-Cloud Intelligence{' '}
              <span className="bg-gradient-to-r from-[#00E5FF] via-[#38BDF8] to-[#8B5CF6] bg-clip-text text-transparent">
                Across Every Industry Vertical
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl"
            >
              Powered by a unified <strong className="text-white font-semibold">Universal IIoT Gateway platform</strong>. We convert raw physical signals—vibration, radar, UV arc, tilt & energy—into predictive operational insights for Railways, Bridges, Factories, and Water Resources.
            </motion.p>

            {/* Interactive Domain Filter Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-[#00E5FF]" />
                  Select Solution Domain:
                </span>
                <span className="text-xs font-mono text-[#00E5FF]">
                  {activeTab + 1} of {solutionDomains.length} Active Modules
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {solutionDomains.map((domain, idx) => {
                  const Icon = domain.icon;
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={domain.id}
                      onClick={() => handleTabClick(idx, domain.id)}
                      className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#00C2CB]/20 text-[#00E5FF] border border-[#00C2CB] shadow-md shadow-[#00C2CB]/20 scale-105'
                          : 'bg-[#121927]/80 text-slate-400 border border-[#1E2D4A]/60 hover:border-[#00C2CB]/50 hover:text-slate-200'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#00E5FF]' : 'text-slate-400'}`} />
                      <span>{domain.name}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToSolutions}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00C2CB] to-[#00E5FF] text-slate-950 font-bold text-sm hover:brightness-110 transition-all shadow-xl shadow-[#00C2CB]/25 cursor-pointer"
              >
                <span>Explore Solution Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/contact-us')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#131B2E]/90 hover:bg-[#1A253E] text-slate-200 font-semibold text-sm border border-[#00C2CB]/30 hover:border-[#00E5FF]/60 transition-all cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-[#00E5FF]" />
                <span>Custom OEM Request</span>
              </button>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Interactive Dynamic Solution Mesh Card Widget */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl bg-[#0D1525]/90 border border-[#00C2CB]/30 p-6 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden"
            >
              {/* Top Card Ambient Glow */}
              <div
                className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-2xl opacity-40 pointer-events-none transition-colors duration-500"
                style={{ backgroundColor: currentDomain.color }}
              />

              {/* Card Header */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#1E2D4A]">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-md transition-colors duration-300"
                    style={{
                      backgroundColor: `${currentDomain.color}15`,
                      borderColor: `${currentDomain.color}50`,
                      color: currentDomain.color
                    }}
                  >
                    {React.createElement(currentDomain.icon, { className: 'w-5 h-5' })}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                      {currentDomain.name}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      {currentDomain.status}
                    </span>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded-md bg-[#080D16] border border-[#1E2D4A] text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <Radio className="w-3 h-3 text-[#00E5FF] animate-pulse" />
                  <span>Telemetry Live</span>
                </div>
              </div>

              {/* Dynamic Waveform Simulation */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Edge Sensor Waveform FFT</span>
                  <span className="text-[#00E5FF]">500 Hz Sampling</span>
                </div>
                <LiveWaveformGraphic activeColor={currentDomain.color} />
              </div>

              {/* Primary Key Metric Highlight */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentDomain.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-xl bg-[#080E1A] border border-[#00C2CB]/20 mb-5"
                >
                  <div className="text-xs font-mono text-slate-400 mb-1">
                    {currentDomain.metricsLabel}
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div
                      className="text-3xl font-extrabold font-mono tracking-tight"
                      style={{ color: currentDomain.color }}
                    >
                      {currentDomain.metricVal}
                    </div>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Continuous Telemetry
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 line-clamp-2">
                    {currentDomain.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Universal Gateway Core Info Strip */}
              <div className="p-3 rounded-lg bg-[#111827] border border-[#1E2D4A] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-300">
                  <Cpu className="w-4 h-4 text-[#00E5FF]" />
                  <span>Hardware Engine:</span>
                </div>
                <span className="text-[#00E5FF] font-bold">Prudent Gate-200X</span>
              </div>

            </motion.div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 3. BOTTOM STATS BAR                                                       */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-12 pt-8 border-t border-[#1E293B]/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          <div className="p-4 rounded-xl bg-[#0D1424]/60 border border-[#1E2D4A]/60 backdrop-blur-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#00C2CB]/10 border border-[#00C2CB]/30 flex items-center justify-center text-[#00E5FF]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white font-mono">10,000+</div>
              <div className="text-xs text-slate-400 font-mono">Field Gateways</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0D1424]/60 border border-[#1E2D4A]/60 backdrop-blur-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6]">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white font-mono">&lt; 50ms</div>
              <div className="text-xs text-slate-400 font-mono">Edge Telemetry</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0D1424]/60 border border-[#1E2D4A]/60 backdrop-blur-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white font-mono">99.99%</div>
              <div className="text-xs text-slate-400 font-mono">Uptime Reliability</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#0D1424]/60 border border-[#1E2D4A]/60 backdrop-blur-md flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#FFB800]/10 border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800]">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-extrabold text-white font-mono">6 Domains</div>
              <div className="text-xs text-slate-400 font-mono">Vertical Solutions</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
