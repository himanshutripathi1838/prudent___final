import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  IndianRailwaysLogo,
  DfccilLogo,
  JmrcLogo,
  PuneMetroLogo,
  KmrcLogo,
  IrconLogo,
  RvnlLogo,
  AdaniLogo,
  NpcilLogo,
  DefenseLogo,
  BpclLogo,
  HpclLogo,
  IoclLogo,
  SbiLogo,
  BoiLogo,
  DlfLogo,
  RcfLogo,
  MclLogo,
  GenericClientLogo
} from '../common/ClientLogos';

const WIPE_DURATION = 0.92;
const WIPE_TIMES = [0, 0.4, 1];

export const OFFICIAL_CLIENTS = [
  // 1. Railways & Metros
  {
    id: "ir",
    name: "Indian Railways",
    category: "Rail Infrastructure",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Indian_Railways_logo.svg/300px-Indian_Railways_logo.svg.png",
    fallbackIcon: <IndianRailwaysLogo className="w-9 h-9" />
  },
  {
    id: "dfccil",
    name: "Dedicated Freight Corridor",
    category: "Rail Infrastructure",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/DFCCIL_Logo.svg/300px-DFCCIL_Logo.svg.png",
    fallbackIcon: <DfccilLogo className="w-9 h-9" />
  },
  {
    id: "jmrc",
    name: "Jaipur Metro Rail Corp",
    category: "Metro Transit",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Jaipur_Metro_logo.svg/300px-Jaipur_Metro_logo.svg.png",
    fallbackIcon: <JmrcLogo className="w-9 h-9" />
  },
  {
    id: "pune-metro",
    name: "Pune Metro",
    category: "Metro Transit",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Pune_Metro_logo.png/300px-Pune_Metro_logo.png",
    fallbackIcon: <PuneMetroLogo className="w-9 h-9" />
  },
  {
    id: "kmrc",
    name: "Kolkata Metro Rail Corp",
    category: "Metro Transit",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Kolkata_Metro_logo.svg/300px-Kolkata_Metro_logo.svg.png",
    fallbackIcon: <KmrcLogo className="w-9 h-9" />
  },
  {
    id: "ircon",
    name: "Ircon International",
    category: "Rail Engineering",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Ircon_International_Logo.svg/300px-Ircon_International_Logo.svg.png",
    fallbackIcon: <IrconLogo className="w-9 h-9" />
  },
  {
    id: "rvnl",
    name: "Rail Vikas Nigam Ltd (RVNL)",
    category: "Rail Infra",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Rail_Vikas_Nigam_Limited_logo.svg/300px-Rail_Vikas_Nigam_Limited_logo.svg.png",
    fallbackIcon: <RvnlLogo className="w-9 h-9" />
  },
  {
    id: "sarguja",
    name: "Sarguja Rail (Adani Group)",
    category: "Rail Corridor",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Adani_Group_logo.svg/300px-Adani_Group_logo.svg.png",
    fallbackIcon: <AdaniLogo className="w-9 h-9" />
  },

  // 2. Defense, Nuclear & Public Sector
  {
    id: "npcil",
    name: "Nuclear Power Corp (NPCIL)",
    category: "Nuclear Energy",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/NPCIL_Logo.svg/300px-NPCIL_Logo.svg.png",
    fallbackIcon: <NpcilLogo className="w-9 h-9" />
  },
  {
    id: "defense",
    name: "Ministry of Defense / Air Force",
    category: "Defense Sector",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Roundel_of_the_Indian_Air_Force.svg/300px-Roundel_of_the_Indian_Air_Force.svg.png",
    fallbackIcon: <DefenseLogo className="w-9 h-9" />
  },
  {
    id: "iof",
    name: "Indian Ordnance Factory",
    category: "Defense Production",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Ordnance_Factories_Board_logo.svg/300px-Ordnance_Factories_Board_logo.svg.png",
    fallbackIcon: <GenericClientLogo name="IOF" className="w-9 h-9" />
  },
  {
    id: "kmc",
    name: "Kolhapur Municipal Corp",
    category: "Civic Infra",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Emblem_of_India.svg/300px-Emblem_of_India.svg.png",
    fallbackIcon: <GenericClientLogo name="KMC" className="w-9 h-9" />
  },
  {
    id: "cipet",
    name: "CIPET Institute",
    category: "Research & Edu",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Emblem_of_India.svg/300px-Emblem_of_India.svg.png",
    fallbackIcon: <GenericClientLogo name="CIPET" className="w-9 h-9" />
  },
  {
    id: "urja",
    name: "Urja Vikas Nigam",
    category: "Renewable Energy",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ministry_of_New_and_Renewable_Energy_India.svg/300px-Ministry_of_New_and_Renewable_Energy_India.svg.png",
    fallbackIcon: <GenericClientLogo name="Urja" className="w-9 h-9" />
  },

  // 3. Oil, Gas, Mining & Chemicals
  {
    id: "bpcl",
    name: "Bharat Petroleum (BPCL)",
    category: "Oil & Energy",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Bharat_Petroleum_Logo.svg/300px-Bharat_Petroleum_Logo.svg.png",
    fallbackIcon: <BpclLogo className="w-9 h-9" />
  },
  {
    id: "hpcl",
    name: "Hindustan Petroleum (HPCL)",
    category: "Oil & Energy",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/HPCL_Logo.svg/300px-HPCL_Logo.svg.png",
    fallbackIcon: <HpclLogo className="w-9 h-9" />
  },
  {
    id: "iocl",
    name: "Indian Oil (IOCL)",
    category: "Oil & Energy",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Indian_Oil_Logo.svg/300px-Indian_Oil_Logo.svg.png",
    fallbackIcon: <IoclLogo className="w-9 h-9" />
  },
  {
    id: "rcf",
    name: "Rashtriya Chemicals (RCF)",
    category: "Fertilizers & Chem",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Rashtriya_Chemicals_%26_Fertilizers_logo.svg/300px-Rashtriya_Chemicals_%26_Fertilizers_logo.svg.png",
    fallbackIcon: <RcfLogo className="w-9 h-9" />
  },
  {
    id: "mcl",
    name: "Mahanadi Coalfields",
    category: "Heavy Mining",
    logoUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Coal_India_Logo.svg/300px-Coal_India_Logo.svg.png",
    fallbackIcon: <MclLogo className="w-9 h-9" />
  },

  // 4. Corporate, Automotive & Banking
  {
    id: "kalpataru",
    name: "Kalpataru Group",
    category: "EPC & Infra",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Kalpataru_Group_logo.svg/300px-Kalpataru_Group_logo.svg.png",
    fallbackIcon: <GenericClientLogo name="Kalpataru" className="w-9 h-9" />
  },
  {
    id: "dlf",
    name: "DLF India",
    category: "Commercial Infra",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/DLF_logo.svg/300px-DLF_logo.svg.png",
    fallbackIcon: <DlfLogo className="w-9 h-9" />
  },
  {
    id: "heg",
    name: "HEG Limited",
    category: "Graphite Industry",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/HEG_Limited_logo.svg/300px-HEG_Limited_logo.svg.png",
    fallbackIcon: <GenericClientLogo name="HEG" className="w-9 h-9" />
  },
  {
    id: "vecv",
    name: "VE Commercial Vehicles",
    category: "Automotive OEM",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Volvo_Trucks_logo.svg/300px-Volvo_Trucks_logo.svg.png",
    fallbackIcon: <GenericClientLogo name="VECV" className="w-9 h-9" />
  },
  {
    id: "acg",
    name: "ACG Group",
    category: "Pharma Tech",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/ACG_Group_logo.svg/300px-ACG_Group_logo.svg.png",
    fallbackIcon: <GenericClientLogo name="ACG" className="w-9 h-9" />
  },
  {
    id: "sbi",
    name: "State Bank of India (SBI)",
    category: "Banking Infra",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/State_Bank_of_India_logo.svg/300px-State_Bank_of_India_logo.svg.png",
    fallbackIcon: <SbiLogo className="w-9 h-9" />
  },
  {
    id: "boi",
    name: "Bank of India",
    category: "Banking Infra",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Bank_of_India_logo.svg/300px-Bank_of_India_logo.svg.png",
    fallbackIcon: <BoiLogo className="w-9 h-9" />
  }
];

function LogoImageItem({ logo }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex h-10 w-10 items-center justify-center">
      {!imageError && logo.logoUrl ? (
        <img
          src={logo.logoUrl}
          alt={logo.name}
          onError={() => setImageError(true)}
          className="max-h-full max-w-full object-contain filter drop-shadow-md brightness-110"
        />
      ) : (
        logo.fallbackIcon
      )}
    </div>
  );
}

function LogoItem({ logo, index, isWaving, stagger, totalCount, onDone }) {
  return (
    <motion.div
      aria-label={logo.name ?? "Logo"}
      animate={
        isWaving
          ? {
              clipPath: [
                "inset(0 0% 0 0)",
                "inset(0 100% 0 0)",
                "inset(0 0% 0 0)",
              ],
              filter: ["blur(0px)", "blur(8px)", "blur(0px)"],
              opacity: [1, 0.2, 1],
            }
          : {
              clipPath: "inset(0 0% 0 0)",
              filter: "blur(0px)",
              opacity: 1,
            }
      }
      transition={
        isWaving
          ? {
              clipPath: {
                duration: WIPE_DURATION,
                times: WIPE_TIMES,
                ease: ["easeIn", [0.16, 1, 0.3, 1]],
                delay: index * stagger,
              },
              filter: {
                duration: WIPE_DURATION * 0.9,
                times: WIPE_TIMES,
                ease: "easeInOut",
                delay: index * stagger,
              },
              opacity: {
                duration: WIPE_DURATION * 0.85,
                times: WIPE_TIMES,
                ease: "easeInOut",
                delay: index * stagger,
              },
            }
          : {
              duration: 0.3,
              ease: "easeOut",
            }
      }
      onAnimationComplete={() => {
        if (isWaving && index === totalCount - 1) onDone();
      }}
      whileHover={{
        scale: 1.08,
        opacity: 1,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 340, damping: 24 },
      }}
      className="flex w-36 sm:w-44 shrink-0 cursor-pointer flex-col items-center gap-2.5 p-4 rounded-2xl bg-[#131B2E] border border-slate-800 hover:border-[#00E5FF]/50 transition-all shadow-md group text-center"
    >
      <LogoImageItem logo={logo} />
      <span className="select-none text-[11px] font-mono font-bold tracking-tight text-white group-hover:text-[#00E5FF] transition-colors leading-tight line-clamp-2">
        {logo.name}
      </span>
      <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider block">
        {logo.category}
      </span>
    </motion.div>
  );
}

export default function LogoCloudSwap({
  logos = OFFICIAL_CLIENTS,
  title = "Our Esteemed Enterprise Clients & Public Sector Partners",
  subtitle = "Trusted by India's largest railway corridors, defense establishments, energy conglomerates, and industrial leaders.",
  interval = 3500,
  stagger = 0.08,
  className = "",
}) {
  const [waving, setWaving] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setWaving(true), interval);
    return () => clearInterval(id);
  }, [interval]);

  return (
    <section className={`w-full bg-[#0B0F17] px-4 py-16 sm:py-20 border-b border-[#1E2D4A] ${className}`}>
      <div className="mx-auto max-w-4xl text-center mb-12">
        <span className="uppercase text-[12px] font-mono tracking-[0.1em] text-[#00E5FF] bg-[#00E5FF]/10 px-4 py-1 rounded-full border border-[#00E5FF]/30 inline-block mb-3">
          26+ Prestigious Enterprise Deployments
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-normal max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Full Desktop & Mobile Client Grid */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {logos.map((logo, i) => (
            <LogoItem
              key={logo.id ?? i}
              logo={logo}
              index={i}
              isWaving={waving}
              stagger={stagger}
              totalCount={logos.length}
              onDone={() => setWaving(false)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
