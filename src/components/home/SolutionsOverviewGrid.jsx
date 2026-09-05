import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SolutionsOverviewGrid() {
  const navigate = useNavigate();

  const solutions = [
    {
      id: "cnc",
      title: "Smart CNC & Forge Factory Health",
      category: "SMART MANUFACTURING",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1964&auto=format&fit=crop",
      desc: "Motor vibration spectrographs & predictive thermal monitoring."
    },
    {
      id: "railway-track",
      title: "Railway Track & Wheel Monitoring",
      category: "RAILWAY INFRASTRUCTURE",
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1887&auto=format&fit=crop",
      desc: "Trackside vibration IMUs & wheel-flat impact sensors."
    },
    {
      id: "ohe",
      title: "OHE Pantograph Spark Monitoring",
      category: "RAIL ELECTRIFICATION",
      image: "https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?q=80&w=1770&auto=format&fit=crop",
      desc: "High-speed optical spark sensing & catenary wire alignment."
    },
    {
      id: "bridge",
      title: "Bridge Structural Health Monitoring",
      category: "CIVIL INFRASTRUCTURE",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1964&auto=format&fit=crop",
      desc: "Sub-arcsec tilt sensors & pier vibration telemetry."
    }
  ];

  return (
    <section id="solutions" className="py-24 lg:py-32 bg-[#060B12] border-b border-[#1E293B]/60 relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-12">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <span className="uppercase text-[11px] font-mono tracking-[0.15em] text-[#00E5FF] bg-[#00E5FF]/10 px-3.5 py-1 rounded-full border border-[#00E5FF]/30 inline-block font-bold">
            TURNKEY INDUSTRIAL SOLUTIONS
          </span>
          <h2 className="text-3xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight font-sans">
            Built for Every Industry
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Pre-engineered sensor-to-cloud platforms tailored for railways, public infrastructure, utilities, and smart factories.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, idx) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.07 }}
              whileHover={{ y: -6 }}
              onClick={() => navigate('/solution-portfolio')}
              className="p-5 rounded-2xl bg-[#0E1522] border border-slate-800 hover:border-[#00E5FF]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="relative h-36 rounded-xl overflow-hidden mb-4 border border-slate-800 bg-[#060B12]">
                  <img src={sol.image} alt={sol.title} className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" />
                </div>

                <span className="text-[9.5px] font-mono text-[#00E5FF] uppercase font-bold tracking-wider block mb-1">
                  {sol.category}
                </span>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-[#00E5FF] transition-colors font-mono">
                  {sol.title}
                </h3>

                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {sol.desc}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-[#00E5FF] font-bold">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F2A623]" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Pill CTA */}
        <div className="text-center pt-2">
          <button
            onClick={() => navigate('/solution-portfolio')}
            className="px-6 py-2.5 rounded-full bg-[#0E1522] hover:bg-[#00E5FF]/15 border border-slate-800 hover:border-[#00E5FF] text-white text-xs font-mono font-bold transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Explore All Industrial Solutions</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00E5FF]" />
          </button>
        </div>

      </div>
    </section>
  );
}
