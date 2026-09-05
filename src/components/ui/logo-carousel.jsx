import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const distributeLogos = (allLogos, columnCount) => {
  const shuffled = shuffleArray(allLogos);
  const columns = Array.from({ length: columnCount }, () => []);

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo);
  });

  const maxLength = Math.max(...columns.map((col) => col.length));
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
    }
  });

  return columns;
};

const LogoColumn = React.memo(({ logos, index, currentTime }) => {
  const cycleInterval = 2200;
  const columnDelay = index * 250;
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length);
  const currentIndex = Math.floor(adjustedTime / cycleInterval);
  const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex]);
  const logoName = logos[currentIndex].name;

  return (
    <motion.div
      className="relative h-20 w-32 md:h-28 md:w-44 rounded-2xl bg-[#0E1522]/90 border border-slate-800 p-2 shadow-xl flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/10 via-transparent to-purple-500/10 pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={`${logos[currentIndex].id}-${currentIndex}`}
          className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center"
          initial={{ y: "20%", opacity: 0, filter: "blur(6px)" }}
          animate={{
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 280,
              damping: 22,
              mass: 1,
              duration: 0.5,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            filter: "blur(5px)",
            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 0.3,
            },
          }}
        >
          {CurrentLogo && (
            <CurrentLogo className="h-10 w-10 md:h-12 md:w-12 max-h-[60%] max-w-[60%] object-contain text-[#00E5FF] filter drop-shadow-[#00E5FF]/30" />
          )}
          <span className="text-[11px] font-mono font-bold text-slate-200 mt-1 truncate max-w-full">
            {logoName}
          </span>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
});

LogoColumn.displayName = "LogoColumn";

export function LogoCarousel({ columnCount = 3, logos = [] }) {
  const [logoSets, setLogoSets] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  useEffect(() => {
    if (logos.length > 0) {
      const distributedLogos = distributeLogos(logos, columnCount);
      setLogoSets(distributedLogos);
    }
  }, [logos, columnCount]);

  return (
    <div className="flex gap-3 md:gap-5 justify-center flex-wrap">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  );
}
