import React from 'react';
import { motion } from 'framer-motion';

export function MarqueeLogoScroller({
  title = "Trusted by Enterprise Leaders Nationwide",
  description = "Deployed across India's largest railways, defense establishments, energy conglomerates, and manufacturing leaders.",
  logos = [],
  speed = "very_slow",
  className = ""
}) {
  // Multiply array to create seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const speedDurationMap = {
    ultra_slow: 160,
    very_slow: 140,
    slow: 110,
    normal: 80,
    fast: 50
  };

  const duration = speedDurationMap[speed] || 140;

  return (
    <section className={`w-full bg-[#0B0F17] py-16 sm:py-20 overflow-hidden relative border-b border-[#1E2D4A] ${className}`}>
      
      {/* Background Subtle Cyber Glow */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00E5FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 relative z-10">
        <span className="uppercase text-[12px] font-mono tracking-[0.1em] text-[#00E5FF] bg-[#00E5FF]/10 px-4 py-1 rounded-full border border-[#00E5FF]/30 inline-block mb-3">
          26+ Enterprise Deployments
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-normal max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Marquee Track with Side Fades */}
      <div className="relative w-full overflow-hidden py-4 z-10">
        
        {/* Left & Right Gradient Mask Overlays */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#0B0F17] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#0B0F17] to-transparent z-20 pointer-events-none" />

        {/* Infinite Scroll Container */}
        <div className="flex w-max space-x-6 sm:space-x-8">
          <motion.div
            className="flex space-x-6 sm:space-x-8 shrink-0"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: duration,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedLogos.map((partner, index) => {
              const fromColor = partner.gradient?.from || '#00E5FF';
              const viaColor = partner.gradient?.via || '#0099FF';
              const toColor = partner.gradient?.to || '#003399';

              return (
                <motion.div
                  key={`${partner.id || partner.alt}-${index}`}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="relative group shrink-0 w-44 sm:w-52 p-4 rounded-2xl bg-[#131B2E] border border-slate-800 hover:border-[#00E5FF]/60 transition-all duration-300 flex flex-col items-center justify-between text-center shadow-xl cursor-pointer"
                >
                  {/* Subtle Background Card Gradient Glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-10 group-hover:opacity-25 transition-opacity pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${fromColor}, ${viaColor}, ${toColor})`
                    }}
                  />

                  {/* Logo Container with Gradient Pill */}
                  <div className="relative w-full h-16 rounded-xl flex items-center justify-center p-2 mb-3 bg-[#0A0E14]/80 border border-slate-800/80 group-hover:border-[#00E5FF]/40 transition-colors">
                    {partner.src ? (
                      <img
                        src={partner.src}
                        alt={partner.alt || "Client Logo"}
                        className="max-h-full max-w-full object-contain filter drop-shadow-md brightness-110 group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : null}
                    
                    {/* Fallback rendering if src fails or for icon objects */}
                    {partner.icon && (
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {partner.icon}
                      </div>
                    )}
                  </div>

                  {/* Text Details */}
                  <div className="relative z-10 w-full">
                    <h3 className="text-xs font-mono font-bold text-white group-hover:text-[#00E5FF] transition-colors leading-tight line-clamp-1 mb-1">
                      {partner.alt || partner.name}
                    </h3>
                    {partner.category && (
                      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">
                        {partner.category}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>

    </section>
  );
}
