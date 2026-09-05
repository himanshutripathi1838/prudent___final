import React from 'react';
import { cn } from '../../lib/utils';

/**
 * A responsive, self-contained, and infinitely scrolling marquee component.
 * Slightly slower marquee speed (60s duration) for optimal balance.
 */
const MarqueeLogoScroller = React.forwardRef(
  ({ title, description, logos = [], speed = 'normal', className, ...props }, ref) => {
    // Map speed prop to slightly slower animation duration
    const durationMap = {
      normal: '60s',
      slow: '90s',
      fast: '35s',
    };
    const animationDuration = durationMap[speed] || '60s';

    return (
      <>
        {/* Keyframes for smooth infinite marquee animation */}
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
        
        <section
          ref={ref}
          aria-label={title}
          className={cn(
            'w-full bg-[#060B12] text-white rounded-3xl border border-slate-800/80 overflow-hidden shadow-2xl relative my-6',
            className
          )}
          {...props}
        >
          {/* Header Section */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-8 pb-6 md:pb-8 border-b border-slate-800">
              <div className="space-y-2">
                <span className="uppercase text-[11px] font-mono tracking-[0.18em] text-[#00E5FF] bg-[#00E5FF]/10 px-3.5 py-1 rounded-full border border-[#00E5FF]/30 inline-block font-bold">
                  ENTERPRISE DEPLOYMENT PROOF
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight font-sans text-white text-balance">
                  {title}
                </h2>
              </div>
              <p className="text-slate-300 self-start lg:justify-self-end text-balance text-xs md:text-sm leading-relaxed font-sans">
                {description}
              </p>
            </div>
          </div>

          {/* Marquee Section */}
          <div
            className="w-full overflow-hidden relative py-4"
            style={{
              maskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <div 
              className="flex w-max items-center gap-4 py-4 pr-4 hover:[animation-play-state:paused] transition-all duration-300 ease-in-out" 
              style={{
                animation: `marquee ${animationDuration} linear infinite`,
              }}
            >
              {/* Render logos twice to create a seamless loop */}
              {[...logos, ...logos].map((logo, index) => {
                const LogoSvgComp = logo.icon;
                return (
                  <div
                    key={index}
                    className="group relative h-24 w-48 shrink-0 flex flex-col items-center justify-center rounded-2xl bg-[#0E1522] border border-slate-800/80 overflow-hidden shadow-lg p-3 cursor-pointer"
                  >
                    {/* Gradient background revealed on hover */}
                    <div
                      style={{
                        '--from': logo.gradient?.from || '#00E5FF',
                        '--via': logo.gradient?.via || '#0284C7',
                        '--to': logo.gradient?.to || '#0369A1',
                      }}
                      className="absolute inset-0 scale-150 opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100 bg-gradient-to-br from-[var(--from)] via-[var(--via)] to-[var(--to)]"
                    />
                    
                    {/* Logo Vector Emblem / Image */}
                    <div className="relative z-10 flex items-center justify-center h-10 w-full mb-1.5">
                      {LogoSvgComp ? (
                        <LogoSvgComp className="h-9 w-9 object-contain filter drop-shadow group-hover:scale-110 transition-transform duration-300" />
                      ) : logo.src ? (
                        <img
                          src={logo.src}
                          alt={logo.alt || logo.name}
                          className="h-full w-auto object-contain filter drop-shadow group-hover:brightness-125 transition-all"
                        />
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-[#00E5FF]/20 border border-[#00E5FF]/40 flex items-center justify-center text-[#00E5FF] font-mono font-bold text-sm">
                          {(logo.alt || logo.name || 'P').charAt(0)}
                        </div>
                      )}
                    </div>

                    <span className="relative z-10 text-[11px] font-mono font-bold text-white group-hover:text-white truncate max-w-full text-center">
                      {logo.alt || logo.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
);

MarqueeLogoScroller.displayName = 'MarqueeLogoScroller';

export { MarqueeLogoScroller };
