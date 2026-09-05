import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import InfiniteParallaxSlider from '../components/home/InfiniteParallaxSlider';
import HomeAboutSection from '../components/home/HomeAboutSection';
import HomeHowWeWorkSection from '../components/home/HomeHowWeWorkSection';
import SolutionsOverviewGrid from '../components/home/SolutionsOverviewGrid';
import SimpleScalablePowerfulSection from '../components/home/SimpleScalablePowerfulSection';
import OurClientsSection from '../components/home/OurClientsSection';
import HomeTechnicalExpertiseSection from '../components/home/HomeTechnicalExpertiseSection';
import LeadFormBand from '../components/home/LeadFormBand';
import Modal from '../components/common/Modal';

export default function Home() {
  const navigate = useNavigate();
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const aboutSectionRef = useRef(null);

  // Scroll Progress Bar Animation
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Reusable Section Animation Variant
  const sectionVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  const scrollToAboutSection = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight * 0.95, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0F17] text-slate-100 overflow-hidden font-sans">
      
      {/* Scroll Progress Bar at Top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00E5FF] via-[#F2A623] to-[#8B5CF6] z-50 origin-left shadow-[0_0_12px_rgba(0,229,255,0.8)]"
        style={{ scaleX }}
      />

      {/* 1. FULLSCREEN 100VH INFINITE PARALLAX SLIDER HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden border-b border-[#1E2D4A]">
        <InfiniteParallaxSlider
          onDemoRequest={() => setDemoModalOpen(true)}
          onScrollDownNext={scrollToAboutSection}
        />
      </section>

      {/* 2. ABOUT COMPANY */}
      <div ref={aboutSectionRef}>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <HomeAboutSection />
        </motion.div>
      </div>

      {/* 3. PLATFORM CAPABILITIES & TELEMETRY WORKFLOW */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <HomeHowWeWorkSection />
      </motion.div>

      {/* 4. INDUSTRIAL APPLICATIONS & SOLUTIONS OVERVIEW */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <SolutionsOverviewGrid />
      </motion.div>

      {/* 5. SIMPLE. SCALABLE. POWERFUL. (HOW IT WORKS 4 CARDS SECTION) RIGHT BELOW SOLUTIONS */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <SimpleScalablePowerfulSection />
      </motion.div>

      {/* 6. OUR CLIENTS & ENTERPRISE PARTNERS */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <OurClientsSection />
      </motion.div>

      {/* 7. TECHNICAL EXPERTISE */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <HomeTechnicalExpertiseSection />
      </motion.div>

      {/* 8. CONTACT FORM & LEAD BAND */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <LeadFormBand />
      </motion.div>

      {/* Quick Demo Modal */}
      <Modal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        title="Schedule a Live Demonstration"
      >
        <p className="text-sm text-slate-300 mb-4 font-normal">
          Experience our Universal IIoT Gateway telemetry dashboard live with custom sensor specifications.
        </p>
        <button
          onClick={() => {
            setDemoModalOpen(false);
            navigate('/contact-us');
          }}
          className="w-full py-3.5 rounded-xl bg-[#00E5FF] hover:bg-[#52F1FF] text-slate-950 font-bold transition-all text-sm shadow-lg shadow-[#00E5FF]/25"
        >
          Go to Contact Page
        </button>
      </Modal>

    </div>
  );
}
