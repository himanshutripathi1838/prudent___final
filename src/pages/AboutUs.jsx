import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import StatCounter from '../components/common/StatCounter';
import { companyTimeline, coreValues, teamMembers } from '../data/companyData';
import { Target, Compass, History, CheckCircle2, ArrowRight, ShieldCheck, Cpu, Lightbulb, Lock, TrendingUp, Award, Activity, Check } from 'lucide-react';
import { LinkedinIcon } from '../components/common/SocialIcons';

export default function AboutUs() {
  const navigate = useNavigate();

  const coreValueIcons = {
    "Relentless Innovation": Lightbulb,
    "Industrial Reliability": ShieldCheck,
    "Zero-Trust Security": Lock,
    "Endless Scalability": TrendingUp
  };

  const skillsData = [
    { title: "Data Capturing & Sensor Telemetry", percent: 95 },
    { title: "Edge AI / ML & Predictive Analytics", percent: 90 },
    { title: "Hardware SOM & Embedded Firmware", percent: 92 },
    { title: "Industrial Automation & Control Systems", percent: 88 }
  ];

  return (
    <div className="bg-[#0A0E14] text-slate-100 min-h-screen font-sans">
      
      {/* 1. Page Header Banner */}
      <PageHeader
        title="About Prudent Systems"
        category="Innovation 4 Better You"
        subtitle="Technology company engaged in developing high-end products using cutting-edge IoT, AI, and ML for data capturing, analytics, and automation."
        breadcrumbs={[{ name: 'About Us' }]}
      />

      {/* 2. Who We Are Section (Authentic Official Content) */}
      <section className="py-16 sm:py-24 bg-[#0A0E14] border-b border-[#1E293B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Image Graphic */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-[#00E5FF]/40 shadow-2xl group bg-[#0E1522] p-2">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
                  alt="Who We Are - Prudent Systems"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B12] via-transparent to-transparent opacity-80" />
                
                {/* ISO Certified Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0B101A]/95 border border-[#00E5FF]/50 backdrop-blur-xl shadow-xl flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white font-mono">ISO Certified Company</h4>
                    <p className="text-xs text-slate-300 font-sans">Over a decade of R&D & engineering excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-[11px] font-mono font-bold tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
                ABOUT US • WHO WE ARE
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-tight font-sans">
                Engineering High-End Products Using <br className="hidden sm:inline" />
                <span className="text-[#00E5FF]">Cutting Edge IoT, AI & ML</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                <p>
                  <strong className="text-white font-semibold">Prudent Systems Private Limited</strong> is a premier technology company engaged in developing high-end products using cutting-edge technology like <strong className="text-[#00E5FF]">IoT, AI, and ML</strong>.
                </p>
                <p>
                  We engineer turnkey solutions to solve complex business requirements related to <strong className="text-slate-100">data capturing, analytics, and industrial automation</strong>.
                </p>
                <p>
                  We are an <strong className="text-[#00E5FF]">ISO-certified company</strong> in business for more than a decade. We are proud to have a talented team of engineers and specialized R&D specialists committed to building mission-critical industrial infrastructure.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/solution-portfolio')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00E5FF] hover:bg-[#52F1FF] text-slate-950 font-bold text-xs font-mono transition-all shadow-lg shadow-[#00E5FF]/20 active:scale-95 cursor-pointer"
                >
                  <span>Explore Solution Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => navigate('/contact-us')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0E1522] hover:bg-[#00E5FF]/15 border border-slate-700 hover:border-[#00E5FF] text-white font-bold text-xs font-mono transition-all active:scale-95 cursor-pointer"
                >
                  <span>Contact Our Engineers</span>
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. Mission, Vision & History Cards Section */}
      <section className="py-16 sm:py-24 bg-[#060B12] border-b border-[#1E293B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <SectionHeading
            category="Strategic Pillars"
            title="Our Mission, Vision & Engineering Heritage"
            subtitle="Pioneering industrial telemetry and automated intelligence to power national infrastructure."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-3xl bg-[#0E1522] border border-slate-800 hover:border-[#00E5FF]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-sans group-hover:text-[#00E5FF] transition-colors">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  To engineer turnkey IoT, AI & ML data capturing solutions that turn complex industrial requirements into automated, real-time operational intelligence.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/80 text-xs font-mono text-[#00E5FF] flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#00E5FF]" />
                <span>Turnkey Solutions & Data Analytics</span>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 rounded-3xl bg-[#0E1522] border border-slate-800 hover:border-[#00E5FF]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] mb-6 group-hover:scale-110 transition-transform">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-sans group-hover:text-[#00E5FF] transition-colors">
                  Our Vision
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  To empower global industries with ISO-certified high-end edge products and automated monitoring—turning operational problems into turnkey engineering solutions.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/80 text-xs font-mono text-[#00E5FF] flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#00E5FF]" />
                <span>ISO-Certified Edge Intelligence</span>
              </div>
            </motion.div>

            {/* History Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-3xl bg-[#0E1522] border border-slate-800 hover:border-[#00E5FF]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] mb-6 group-hover:scale-110 transition-transform">
                  <History className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-sans group-hover:text-[#00E5FF] transition-colors">
                  Our History
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  Over a decade of pioneering R&D, ISO certification, and deploying high-end hardware SOMs, edge gateways, and mission-critical telemetry across Railways, Bridges, and Smart Manufacturing.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-800/80 text-xs font-mono text-[#00E5FF] flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#00E5FF]" />
                <span>10+ Years in Industrial Business</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. Why Choose Us & Skills Progress Section */}
      <section className="py-16 sm:py-24 bg-[#0A0E14] border-b border-[#1E293B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Text & Bullet Checkpoints */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] text-[11px] font-mono font-bold uppercase">
                WHY US
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-sans">
                Why You Should Choose <span className="text-[#00E5FF]">Prudent Systems?</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                We turn complex operational problems into reliable, automated, ISO-certified solutions through end-to-end data acquisition, edge intelligence, and cloud analytics.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0E1522] border border-slate-800 text-xs sm:text-sm text-slate-200 font-sans">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>ISO-Certified Technology Company with over a decade of operational excellence.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0E1522] border border-slate-800 text-xs sm:text-sm text-slate-200 font-sans">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>Talented team of in-house Engineers & specialized R&D Specialists.</span>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#0E1522] border border-slate-800 text-xs sm:text-sm text-slate-200 font-sans">
                  <CheckCircle2 className="w-5 h-5 text-[#00E5FF] shrink-0 mt-0.5" />
                  <span>Turnkey Data Capturing, AI/ML Predictive Analytics & Industrial Automation.</span>
                </div>
              </div>
            </motion.div>

            {/* Right Skills Progress Bars */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 p-8 rounded-3xl bg-[#0E1522] border border-slate-800 shadow-2xl space-y-6"
            >
              <h3 className="text-xl font-bold text-white font-sans flex items-center gap-2">
                <Activity className="w-5 h-5 text-[#00E5FF]" />
                Engineering Capabilities & Mastery
              </h3>

              <div className="space-y-5">
                {skillsData.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-xs sm:text-sm font-mono font-bold">
                      <span className="text-slate-200">{skill.title}</span>
                      <span className="text-[#00E5FF]">{skill.percent}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-[#060B12] rounded-full overflow-hidden border border-slate-800">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#00E5FF] to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.15 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. Company Journey Timeline */}
      <section className="py-16 sm:py-24 bg-[#060B12] border-b border-[#1E293B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <SectionHeading
            category="Company Progression"
            title="Milestones & Engineering Progression"
            subtitle="How Prudent Systems evolved into a nationwide IIoT & AI technology leader."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyTimeline.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0E1522] border border-slate-800 hover:border-[#00E5FF]/50 transition-all duration-300"
              >
                <span className="text-2xl font-extrabold font-mono text-[#00E5FF] mb-2 block">
                  {item.year}
                </span>
                <h4 className="text-lg font-bold text-white mb-2 font-sans">{item.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Core Engineering Values */}
      <section className="py-16 sm:py-24 bg-[#0A0E14] border-b border-[#1E293B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <SectionHeading
            category="Guiding Pillars"
            title="Our Core Engineering Values"
            subtitle="The uncompromising principles behind every circuit board design, firmware build, and cloud release."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = coreValueIcons[val.title] || Lightbulb;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0E1522] border border-slate-800 hover:border-[#00E5FF]/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors font-sans">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* 8. Stats Band */}
      <section className="py-16 sm:py-20 bg-[#0A0E14] border-b border-[#1E293B]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCounter target={10} suffix="+ Years" label="ISO-Certified R&D Excellence" />
            <StatCounter target={10450} suffix="+" label="Gateways Deployed Nationwide" />
            <StatCounter target={24} suffix="+" label="Indian States Covered" />
            <StatCounter target={8} suffix="+" label="Core Industry Sectors Served" />
          </div>
        </div>
      </section>

      {/* 9. Official Slogan CTA Banner */}
      <section className="py-16 sm:py-20 bg-[#060B12] relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <span className="px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 uppercase">
            ISO CERTIFIED • PRUDENT SYSTEMS PRIVATE LIMITED
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans tracking-tight">
            "Come with your Problems, <br className="hidden sm:inline" />
            <span className="text-[#00E5FF]">Go with Our Solutions"</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-2xl mx-auto">
            Experience turnkey data capture, edge AI analytics, and industrial automation engineered specifically for your enterprise.
          </p>

          <div className="pt-2">
            <button
              onClick={() => navigate('/contact-us')}
              className="px-8 py-3.5 rounded-full bg-[#00E5FF] hover:bg-[#52F1FF] text-slate-950 font-extrabold text-xs font-mono transition-all shadow-lg shadow-[#00E5FF]/25 active:scale-95 cursor-pointer"
            >
              Get in Touch with Our Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
