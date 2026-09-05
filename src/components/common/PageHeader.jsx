import React from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GlowHorizon from './GlowHorizon';

export default function PageHeader({ title, subtitle, category, breadcrumbs = [] }) {
  return (
    <div className="relative bg-[#050507] pt-20 pb-28 lg:pt-28 lg:pb-36 overflow-hidden">
      
      {/* GLOW HORIZON BACKGROUND EFFECT */}
      <GlowHorizon variant="top" />

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none z-0" />

      {/* HEADER TEXT CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6 drop-shadow-md">
          <NavLink to="/" className="hover:text-[#00E5FF] transition-colors">
            Home
          </NavLink>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-slate-600" />
              {crumb.path ? (
                <NavLink to={crumb.path} className="hover:text-[#00E5FF] transition-colors">
                  {crumb.name}
                </NavLink>
              ) : (
                <span className="text-[#00E5FF] font-bold">{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Header Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]"
        >
          {category && (
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold font-mono uppercase tracking-wider bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/40 backdrop-blur-md shadow-lg shadow-[#00E5FF]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse"></span>
              {category}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-sans">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* ORGANIC WAVEFORM SEPARATOR AT BOTTOM */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="relative block w-full h-20 sm:h-28 lg:h-36"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          fill="none"
        >
          <defs>
            <linearGradient id="userWaveStroke" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="30%" stopColor="#00C2CB" />
              <stop offset="70%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>
            <linearGradient id="userWaveFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0A0E14" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0A0E14" stopOpacity="1" />
            </linearGradient>
          </defs>

          <path
            d="M 0,200 
               L 0,140 
               C 120,40 260,10 420,50 
               C 640,95 800,165 980,160 
               C 1080,155 1130,10 1200,20 
               C 1260,30 1300,110 1350,130 
               C 1390,140 1410,95 1440,90 
               L 1440,200 Z"
            fill="url(#userWaveFill)"
          />

          <path
            d="M 0,140 
               C 120,40 260,10 420,50 
               C 640,95 800,165 980,160 
               C 1080,155 1130,10 1200,20 
               C 1260,30 1300,110 1350,130 
               C 1390,140 1410,95 1440,90"
            stroke="url(#userWaveStroke)"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

    </div>
  );
}
