import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHeroBanner() {
  return (
    <div className="relative bg-[#0B061A] min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex flex-col justify-between overflow-hidden pt-32 pb-0 border-b border-purple-900/40">
      
      {/* Background Animated Layered Mesh & Organic Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Organic Mesh Blob 1 - Cyan / Deep Blue */}
        <motion.div
          className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-[#00E5FF]/20 via-[#0284C7]/25 to-purple-600/20 rounded-full blur-[140px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Organic Mesh Blob 2 - Vivid Purple / Magenta */}
        <motion.div
          className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-gradient-to-br from-[#A855F7]/30 via-[#D946EF]/20 to-[#EC4899]/25 rounded-full blur-[160px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Organic Mesh Blob 3 - Sunset Coral / Orange Accent */}
        <motion.div
          className="absolute -bottom-10 left-10 w-[450px] h-[450px] bg-gradient-to-tr from-[#F97316]/25 via-[#FB7185]/20 to-[#A855F7]/20 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />

        {/* Subtle Cyber Grid Overlay */}
        <div className="absolute inset-0 bg-cyber-grid opacity-10" />
      </div>

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto px-6 text-center z-20 space-y-5 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block"
        >
          <span className="uppercase text-[11px] font-mono tracking-[0.22em] text-[#00E5FF] bg-[#00E5FF]/10 px-4 py-1.5 rounded-full border border-[#00E5FF]/30 font-bold shadow-[0_0_20px_rgba(0,229,255,0.2)]">
            WHO WE ARE — COMPANY PROFILE
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-sans"
        >
          Building Resilient Infrastructure for <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#00E5FF] via-[#A855F7] to-[#EC4899] bg-clip-text text-transparent">
            India's Industry 4.0
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed font-sans"
        >
          Prudent Systems is an Industrial IoT pioneer engineering universal sensor telemetry gateways, edge AI inference algorithms, and brick-proof remote OTA firmware platforms to achieve zero unplanned downtime.
        </motion.p>
      </div>

      {/* Abstract Fluid Gradient Wave Hero with Layered Organic SVG Shapes */}
      <div className="relative w-full overflow-hidden leading-none z-10 -mb-1">
        <svg
          className="relative block w-full h-[180px] sm:h-[240px] lg:h-[300px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Back Layer Gradient: Deep Electric Violet to Cyan */}
            <linearGradient id="abstractBackWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4C1D95" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>

            {/* Middle Layer Gradient: Magenta & Vivid Purple */}
            <linearGradient id="abstractMidWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#E879F9" />
            </linearGradient>

            {/* Front Layer Gradient: Warm Coral, Pink & Sunset Orange */}
            <linearGradient id="abstractFrontWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="35%" stopColor="#FB7185" />
              <stop offset="70%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          {/* Layer 1 (Back): Deep Purple Fluid Curve */}
          <path
            d="M0,120 C280,260 520,40 840,160 C1160,280 1320,80 1440,140 L1440,320 L0,320 Z"
            fill="url(#abstractBackWave)"
            opacity="0.85"
          />

          {/* Layer 2 (Middle): Vibrant Violet Organic Crest */}
          <path
            d="M0,180 C360,60 640,300 960,140 C1200,40 1360,220 1440,240 L1440,320 L0,320 Z"
            fill="url(#abstractMidWave)"
            opacity="0.9"
          />

          {/* Layer 3 (Front): Warm Sunset Coral & Pink Fluid Wave */}
          <path
            d="M0,230 C200,90 560,340 920,190 C1180,90 1340,260 1440,280 L1440,320 L0,320 Z"
            fill="url(#abstractFrontWave)"
          />
        </svg>
      </div>

    </div>
  );
}
