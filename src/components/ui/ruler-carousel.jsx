import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Rewind, FastForward } from "lucide-react";

// Create infinite items by triplicating the array
const createInfiniteItems = (originalItems) => {
  const items = [];
  for (let i = 0; i < 3; i++) {
    originalItems.forEach((item, index) => {
      items.push({
        ...item,
        id: `${i}-${item.id}`,
        originalIndex: index,
      });
    });
  }
  return items;
};

const RulerLines = ({ top = true, totalLines = 100 }) => {
  const lines = [];
  const lineSpacing = 100 / (totalLines - 1);

  for (let i = 0; i < totalLines; i++) {
    const isFifth = i % 5 === 0;
    const isCenter = i === Math.floor(totalLines / 2);

    let height = "h-3";
    let color = "bg-slate-700";

    if (isCenter) {
      height = "h-8";
      color = "bg-[#00E5FF]";
    } else if (isFifth) {
      height = "h-5";
      color = "bg-[#F2A623]";
    }

    const positionClass = top ? "top-0" : "bottom-0";

    lines.push(
      <div
        key={i}
        className={`absolute w-0.5 ${height} ${color} ${positionClass} transition-colors`}
        style={{ left: `${i * lineSpacing}%` }}
      />
    );
  }

  return <div className="relative w-full h-8 px-4">{lines}</div>;
};

export function RulerCarousel({ originalItems }) {
  const infiniteItems = createInfiniteItems(originalItems);
  const itemsPerSet = originalItems.length;

  // Start with the middle set, index 4
  const [activeIndex, setActiveIndex] = useState(itemsPerSet + 4);
  const [isResetting, setIsResetting] = useState(false);
  const previousIndexRef = useRef(itemsPerSet + 4);

  const handleItemClick = (newIndex) => {
    if (isResetting) return;

    const targetOriginalIndex = newIndex % itemsPerSet;
    const possibleIndices = [
      targetOriginalIndex,
      targetOriginalIndex + itemsPerSet,
      targetOriginalIndex + itemsPerSet * 2,
    ];

    let closestIndex = possibleIndices[0];
    let smallestDistance = Math.abs(possibleIndices[0] - activeIndex);

    for (const index of possibleIndices) {
      const distance = Math.abs(index - activeIndex);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    }

    previousIndexRef.current = activeIndex;
    setActiveIndex(closestIndex);
  };

  const handlePrevious = () => {
    if (isResetting) return;
    setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isResetting) return;
    setActiveIndex((prev) => prev + 1);
  };

  // Handle infinite scrolling loop
  useEffect(() => {
    if (isResetting) return;

    if (activeIndex < itemsPerSet) {
      setIsResetting(true);
      setTimeout(() => {
        setActiveIndex(activeIndex + itemsPerSet);
        setIsResetting(false);
      }, 0);
    } else if (activeIndex >= itemsPerSet * 2) {
      setIsResetting(true);
      setTimeout(() => {
        setActiveIndex(activeIndex - itemsPerSet);
        setIsResetting(false);
      }, 0);
    }
  }, [activeIndex, itemsPerSet, isResetting]);

  // Keyboard arrow controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isResetting) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((prev) => prev - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isResetting]);

  // Center target position
  const centerPosition = 4;
  const targetX = -500 + (centerPosition - (activeIndex % itemsPerSet)) * 500;

  const currentPage = (activeIndex % itemsPerSet) + 1;
  const totalPages = itemsPerSet;

  const activeItemData = originalItems[activeIndex % itemsPerSet];

  return (
    <div className="w-full py-16 flex flex-col items-center justify-center bg-[#0B0F17] text-slate-100 rounded-3xl border border-[#1E2D4A] shadow-2xl relative overflow-hidden">
      
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />

      {/* Top Ruler Line */}
      <div className="w-full h-[180px] flex flex-col justify-center relative z-10">
        <div className="flex items-center justify-center mb-2">
          <RulerLines top />
        </div>

        {/* Sliding Titles Track */}
        <div className="flex items-center justify-center w-full h-full relative overflow-hidden">
          <motion.div
            className="flex items-center gap-[100px]"
            animate={{
              x: targetX,
            }}
            transition={
              isResetting
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    mass: 1,
                  }
            }
          >
            {infiniteItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleItemClick(index)}
                  className={`text-2xl sm:text-4xl md:text-5xl font-extrabold font-mono uppercase tracking-wider whitespace-nowrap cursor-pointer flex items-center justify-center transition-colors ${
                    isActive
                      ? "text-[#00E5FF] drop-shadow-[0_0_15px_rgba(0,229,255,0.6)]"
                      : "text-slate-600 hover:text-slate-300"
                  }`}
                  animate={{
                    scale: isActive ? 1.05 : 0.75,
                    opacity: isActive ? 1 : 0.35,
                  }}
                  transition={
                    isResetting
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }
                  }
                  style={{
                    width: "400px",
                  }}
                >
                  {item.title}
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Ruler Line */}
        <div className="flex items-center justify-center mt-2">
          <RulerLines top={false} />
        </div>
      </div>

      {/* Subtitle / Category Detail Badge */}
      {activeItemData?.category && (
        <div className="mt-4 px-4 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono font-bold text-[#00E5FF]">
          {activeItemData.category}
        </div>
      )}

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-6 mt-8 z-10">
        <button
          onClick={handlePrevious}
          disabled={isResetting}
          className="flex items-center justify-center p-3 rounded-full bg-[#131B2E] border border-slate-800 hover:border-[#00E5FF] text-[#00E5FF] hover:scale-110 transition-all shadow-md active:scale-95 disabled:opacity-50"
          aria-label="Previous item"
        >
          <Rewind className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="font-extrabold text-[#00E5FF]">
            {currentPage.toString().padStart(2, '0')}
          </span>
          <span className="text-slate-600">/</span>
          <span className="font-bold text-slate-400">
            {totalPages.toString().padStart(2, '0')}
          </span>
        </div>

        <button
          onClick={handleNext}
          disabled={isResetting}
          className="flex items-center justify-center p-3 rounded-full bg-[#131B2E] border border-slate-800 hover:border-[#00E5FF] text-[#00E5FF] hover:scale-110 transition-all shadow-md active:scale-95 disabled:opacity-50"
          aria-label="Next item"
        >
          <FastForward className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
}
