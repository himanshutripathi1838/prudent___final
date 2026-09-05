import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { LogoCarousel } from '../ui/logo-carousel';
import { GradientHeading } from '../ui/gradient-heading';

export default function HomeTechnicalExpertiseSection() {
  // Custom High-Contrast Vector SVG Chip & Sensor Icons for all 20 Technical Expertise items
  const Stm32Icon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M7 8h10M7 12h10M7 16h6" strokeLinecap="round" />
    </svg>
  );

  const ArduinoIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="7" cy="12" r="4" />
      <circle cx="17" cy="12" r="4" />
      <path d="M5 12h4M15 12h4M17 10v4" strokeLinecap="round" />
    </svg>
  );

  const Esp32Icon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M8 9h8M8 12h8M8 15h5" strokeLinecap="round" />
      <circle cx="17" cy="15" r="1" fill="currentColor" />
    </svg>
  );

  const RaspiIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="7" r="3" />
      <circle cx="8" cy="14" r="3" />
      <circle cx="16" cy="14" r="3" />
      <circle cx="12" cy="19" r="2.5" />
    </svg>
  );

  const CameraIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14.5 4h-5L7.5 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.5l-2-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );

  const GpsIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <polygon points="12 2 15 9 12 12 9 9" fill="currentColor" />
    </svg>
  );

  const GyroIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
      <path d="M12 2v20M2 12h20" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );

  const WindIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2" strokeLinecap="round" />
    </svg>
  );

  const WaterIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      <path d="M2 18h20M2 21h20" strokeLinecap="round" />
    </svg>
  );

  const Rs485Icon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M7 12h10M13 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const LoadCellIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </svg>
  );

  const ThermistorIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
      <circle cx="11.5" cy="17.5" r="2" fill="currentColor" />
    </svg>
  );

  const LidarIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18M6 6l12 12M6 18L18 6" strokeDasharray="2 2" />
    </svg>
  );

  const GsmIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M2 20h20M5 20v-4M9 20v-8M13 20v-12M17 20V4" strokeLinecap="round" />
    </svg>
  );

  const WifiIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" strokeLinecap="round" />
    </svg>
  );

  const BluetoothIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="m7 7 10 10-5 5V2l5 5L7 17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const LoraIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M12 2a10 10 0 0 1 10 10" />
      <path d="M12 6a6 6 0 0 1 6 6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M12 14v8M8 18h8" />
    </svg>
  );

  // All 20 items requested by user configured for the 5-column LogoCarousel
  const techLogos = [
    { name: "STM32", id: 1, img: Stm32Icon },
    { name: "Arduino", id: 2, img: ArduinoIcon },
    { name: "ESP32", id: 3, img: Esp32Icon },
    { name: "Node MCU", id: 4, img: Esp32Icon },
    { name: "Raspberry Pi", id: 5, img: RaspiIcon },
    { name: "Beaglebone", id: 6, img: RaspiIcon },
    { name: "Camera", id: 7, img: CameraIcon },
    { name: "GPS", id: 8, img: GpsIcon },
    { name: "Accelerometers, Gyroscope", id: 9, img: GyroIcon },
    { name: "Wind speed, direction", id: 10, img: WindIcon },
    { name: "Water level sensors", id: 11, img: WaterIcon },
    { name: "4-20mA & RS485", id: 12, img: Rs485Icon },
    { name: "Load cells", id: 13, img: LoadCellIcon },
    { name: "Thermistors", id: 14, img: ThermistorIcon },
    { name: "Lidar", id: 15, img: LidarIcon },
    { name: "GSM", id: 16, img: GsmIcon },
    { name: "Wi-Fi", id: 17, img: WifiIcon },
    { name: "Bluetooth", id: 18, img: BluetoothIcon },
    { name: "LoRa", id: 19, img: LoraIcon },
    { name: "XBee", id: 20, img: LoraIcon }
  ];

  return (
    <section className="py-16 bg-[#060B12] relative overflow-hidden border-b border-slate-800/80">
      {/* Background Lighting Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 space-y-12">
        
        {/* Centered Header Section */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="uppercase text-[11px] font-mono tracking-[0.18em] text-[#00E5FF] bg-[#00E5FF]/10 px-3.5 py-1 rounded-full border border-[#00E5FF]/30 inline-block font-bold">
            HARDWARE & FIRMWARE SILICON
          </span>
          <GradientHeading variant="secondary" size="lg" className="mx-auto">
            Technical Expertise
          </GradientHeading>
          <p className="text-xs sm:text-sm font-sans text-slate-300 leading-relaxed mx-auto">
            In-house hardware engineering, industrial sensor integration, custom firmware development, and edge processing.
          </p>
        </div>

        {/* Centered Vertical Spring Animated Logo Carousel with 5 Columns containing all 20 items */}
        <div className="flex justify-center items-center py-4 w-full overflow-x-auto">
          <LogoCarousel columnCount={5} logos={techLogos} />
        </div>

        {/* Bottom Custom Quote Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gradient-to-r dark:from-[#0E1522] dark:via-[#141E30] dark:to-[#0E1522] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#0284C7] dark:text-[#00E5FF] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-mono font-bold text-slate-900 dark:text-white">Need Custom Hardware & Sensor Integration?</h4>
              <p className="text-xs font-sans text-slate-600 dark:text-slate-300 mt-1">Our embedded engineers design custom DAQ boards, IP68 enclosures, and custom firmware.</p>
            </div>
          </div>
          <a
            href="/contact-us"
            className="px-5 py-3 rounded-xl bg-[#00E5FF] hover:bg-[#52F1FF] text-slate-950 font-mono font-bold text-xs transition-all shadow-lg shadow-[#00E5FF]/20 shrink-0 flex items-center gap-2"
          >
            <span>Get Custom Hardware Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
