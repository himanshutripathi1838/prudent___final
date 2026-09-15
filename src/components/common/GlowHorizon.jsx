import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];
const DURATION = 2;

const VARIANTS = {
  top:    { axis: "y", scaleAxis: "scaleY", enterPct: "-100%", restPct: "-50%", driftPct: "-54%" },
  bottom: { axis: "y", scaleAxis: "scaleY", enterPct:  "100%", restPct:  "50%", driftPct:  "54%" },
  left:   { axis: "x", scaleAxis: "scaleX", enterPct:  "100%", restPct:  "50%", driftPct:  "54%" },
  right:  { axis: "x", scaleAxis: "scaleX", enterPct: "-100%", restPct: "-50%", driftPct: "-54%" },
};

export default function GlowHorizon({ className = "", variant = "top" }) {
  const { axis, scaleAxis, enterPct, restPct, driftPct } = VARIANTS[variant] || VARIANTS.top;

  return (
    <motion.div
      className={"glow-horizon absolute inset-0 h-full w-full pointer-events-none " + className}
      style={{ isolation: "isolate" }}
      initial={{ [axis]: enterPct, [scaleAxis]: 1.5, opacity: 0, filter: "blur(15px)" }}
      animate={{ [axis]: [restPct, driftPct, restPct], [scaleAxis]: [1, 1.035, 1], opacity: [1, 0.9, 1], filter: "blur(0px)" }}
      transition={{ [axis]: { duration: 10, ease: "easeInOut", repeat: Infinity }, [scaleAxis]: { duration: 10, ease: "easeInOut", repeat: Infinity }, opacity: { duration: 10, ease: "easeInOut", repeat: Infinity }, filter: { duration: DURATION, ease: EASE } }}
    >
      <Arc variant={variant} color="var(--horizon-bright)" size="132%" boxShadow="0px -4px 23px 0px var(--horizon-bright-shadow)" delay={1.2} />
      <Arc variant={variant} color="var(--horizon-violet)" size="120%" initialOffset="10%" blur={31} delay={0.6} />
      <Arc variant={variant} color="var(--horizon-indigo)" size="124%" initialOffset="10%" blur={21} delay={0} />
      <Arc variant={variant} color="var(--horizon-base)" size="120%" initialOffset="10%" blur={51} delay={0} />
    </motion.div>
  );
}

function Arc({
  variant,
  color,
  size,
  initialOffset,
  blur,
  boxShadow,
  delay,
}) {
  const scale = parseFloat(size) / 100;
  const { axis, enterPct } = VARIANTS[variant] || VARIANTS.top;
  const sign = enterPct.startsWith("-") ? -1 : 1;
  const startPct = initialOffset
    ? `${sign * Math.abs(parseFloat(initialOffset) - 50)}%`
    : undefined;

  return (
    <motion.div
      aria-hidden
      className="absolute inset-0 rounded-[100%]"
      style={{
        scale,
        background: color,
        ...(blur !== undefined && { filter: `blur(${blur}px)` }),
        ...(boxShadow && { boxShadow }),
      }}
      initial={startPct ? { [axis]: startPct } : false}
      animate={startPct ? { [axis]: 0 } : undefined}
      transition={{ duration: DURATION, ease: EASE, delay }}
    />
  );
}
