"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import NumbersSection from "@/components/NumbersSection";
import FinancialPerformance from "@/components/FinancialPerformance";
import FoundersDetailed from "@/components/FoundersDetailed";

export default function ServicesDetailed() {
  const middleRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStartMiddle = useRef(0);
  const scrollLeftStartBottom = useRef(0);

  useEffect(() => {
    const middle = middleRowRef.current;
    const bottom = bottomRowRef.current;
    const parent = parentRef.current;
    if (!middle || !bottom || !parent) return;

    // Apply scrollbar-none to hide scrollbars
    [middle, bottom].forEach((container) => {
      container.style.overflowX = "auto";
      container.style.scrollbarWidth = "none";
      (container.style as unknown as Record<string, string>).msOverflowStyle = "none";
      container.classList.add("scrollbar-none");
    });

    const styleId = "scrollbar-hide-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        .scrollbar-none::-webkit-scrollbar { display: none; }
      `;
      document.head.appendChild(style);
    }

    // Set initial 50% stagger offset on bottom row
    const setInitialOffset = () => {
      bottom.scrollLeft = (bottom.scrollWidth / 2) * 0.5;
    };
    const timer = setTimeout(setInitialOffset, 100);

    // Auto-scroll loop
    const speed = 2.5;
    let animationFrameId: number;

    const scroll = () => {
      if (!isDown.current) {
        middle.scrollLeft += speed;
        bottom.scrollLeft += speed;

        // Wrap middle
        const halfWidthM = middle.scrollWidth / 2;
        if (middle.scrollLeft >= halfWidthM) {
          middle.scrollLeft = 0;
        }

        // Wrap bottom
        const halfWidthB = bottom.scrollWidth / 2;
        if (bottom.scrollLeft >= halfWidthB) {
          bottom.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);

    // Drag handlers
    const onMouseDown = (e: MouseEvent) => {
      isDown.current = true;
      startX.current = e.pageX;
      scrollLeftStartMiddle.current = middle.scrollLeft;
      scrollLeftStartBottom.current = bottom.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown.current = false;
    };

    const onMouseUp = () => {
      isDown.current = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX;
      const walk = (x - startX.current) * 1.5; // Drag speed multiplier

      middle.scrollLeft = scrollLeftStartMiddle.current - walk;
      bottom.scrollLeft = scrollLeftStartBottom.current - walk;

      // Wrap check middle
      const halfWidthM = middle.scrollWidth / 2;
      if (middle.scrollLeft >= halfWidthM) {
        middle.scrollLeft -= halfWidthM;
        scrollLeftStartMiddle.current = middle.scrollLeft;
        scrollLeftStartBottom.current = bottom.scrollLeft;
        startX.current = e.pageX;
      } else if (middle.scrollLeft <= 0) {
        middle.scrollLeft += halfWidthM;
        scrollLeftStartMiddle.current = middle.scrollLeft;
        scrollLeftStartBottom.current = bottom.scrollLeft;
        startX.current = e.pageX;
      }

      // Wrap check bottom
      const halfWidthB = bottom.scrollWidth / 2;
      if (bottom.scrollLeft >= halfWidthB) {
        bottom.scrollLeft -= halfWidthB;
        scrollLeftStartMiddle.current = middle.scrollLeft;
        scrollLeftStartBottom.current = bottom.scrollLeft;
        startX.current = e.pageX;
      } else if (bottom.scrollLeft <= 0) {
        bottom.scrollLeft += halfWidthB;
        scrollLeftStartMiddle.current = middle.scrollLeft;
        scrollLeftStartBottom.current = bottom.scrollLeft;
        startX.current = e.pageX;
      }
    };

    const onTouchStart = (e: TouchEvent) => {
      isDown.current = true;
      startX.current = e.touches[0].pageX;
      scrollLeftStartMiddle.current = middle.scrollLeft;
      scrollLeftStartBottom.current = bottom.scrollLeft;
    };

    const onTouchEnd = () => {
      isDown.current = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDown.current) return;
      const x = e.touches[0].pageX;
      const walk = (x - startX.current) * 1.5;

      middle.scrollLeft = scrollLeftStartMiddle.current - walk;
      bottom.scrollLeft = scrollLeftStartBottom.current - walk;

      // Wrap check middle
      const halfWidthM = middle.scrollWidth / 2;
      if (middle.scrollLeft >= halfWidthM) {
        middle.scrollLeft -= halfWidthM;
        scrollLeftStartMiddle.current = middle.scrollLeft;
        scrollLeftStartBottom.current = bottom.scrollLeft;
        startX.current = e.touches[0].pageX;
      } else if (middle.scrollLeft <= 0) {
        middle.scrollLeft += halfWidthM;
        scrollLeftStartMiddle.current = middle.scrollLeft;
        scrollLeftStartBottom.current = bottom.scrollLeft;
        startX.current = e.touches[0].pageX;
      }

      // Wrap check bottom
      const halfWidthB = bottom.scrollWidth / 2;
      if (bottom.scrollLeft >= halfWidthB) {
        bottom.scrollLeft -= halfWidthB;
        scrollLeftStartMiddle.current = middle.scrollLeft;
        scrollLeftStartBottom.current = bottom.scrollLeft;
        startX.current = e.touches[0].pageX;
      } else if (bottom.scrollLeft <= 0) {
        bottom.scrollLeft += halfWidthB;
        scrollLeftStartMiddle.current = middle.scrollLeft;
        scrollLeftStartBottom.current = bottom.scrollLeft;
        startX.current = e.touches[0].pageX;
      }
    };

    parent.addEventListener("mousedown", onMouseDown);
    parent.addEventListener("mouseleave", onMouseLeave);
    parent.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    parent.addEventListener("touchstart", onTouchStart, { passive: true });
    parent.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    // Prevent default ghost image dragging
    const images = parent.querySelectorAll("img");
    images.forEach((img) => {
      img.addEventListener("dragstart", (e) => e.preventDefault());
    });

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(animationFrameId);

      parent.removeEventListener("mousedown", onMouseDown);
      parent.removeEventListener("mouseleave", onMouseLeave);
      parent.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      parent.removeEventListener("touchstart", onTouchStart);
      parent.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <section id="services-detailed" className="relative w-full bg-[#e6e6e6] pt-0 pb-0 flex flex-col items-center justify-center overflow-hidden">

      <NumbersSection />
      <FinancialPerformance />

      {/* Header Section */}
      <div className="flex flex-col items-center w-full max-w-4xl px-6 select-none my-16 md:my-24">
        <motion.h2
          initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif italic text-2xl sm:text-4xl lg:text-4.5xl text-[#333333] mb-4 tracking-tight text-center"
        >
          What we do
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-gradient-to-r from-[#002eff] to-[#8b00ff] rounded-none py-4 sm:py-5 px-6 sm:px-12 flex items-center justify-center shadow-[0_15px_40px_rgba(0,46,255,0.15)]"
        >
          <span className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7.5xl text-transparent [-webkit-text-stroke:1.2px_#ffffff] tracking-[0.18em] leading-none select-none translate-x-[0.09em]">
            INDIVIDUALLY
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full flex items-center space-x-4 sm:space-x-6 mt-12 sm:mt-16"
        >
          <span className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#002eff] select-none whitespace-nowrap">ladies first</span>
          <div className="flex-grow flex items-center space-x-3 sm:space-x-4">
            <div className="flex-grow h-4 flex items-center">
              <svg className="w-full h-1" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="2" x2="100%" y2="2" stroke="#002eff" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.4" />
              </svg>
            </div>
            <svg className="w-5 h-5 text-[#002eff]/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="flex-grow h-4 flex items-center">
              <svg className="w-full h-1" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="2" x2="100%" y2="2" stroke="#002eff" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.4" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Founders Detailed Showcase Section */}
      <FoundersDetailed />

      {/* Brands X DP Infinite Running Logos Section */}
      <div className="w-full bg-white py-8 sm:py-14 flex flex-col items-center justify-center overflow-hidden border-t border-b border-gray-100 select-none relative z-20">
        
        {/* Ambient Glowing Blobs */}
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-brand-purple/5 blur-[90px] pointer-events-none" />
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-brand-accent2/5 blur-[90px] pointer-events-none" />

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center px-4 mb-6 sm:mb-10 z-10"
        >
          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-dark tracking-wide leading-none">
            BRANDS <span className="text-brand-purple font-sans font-light opacity-80">X</span> DP
          </h2>
        </motion.div>

        {/* Continuous Right-to-Left Infinite Running Brand Logos Marquee */}
        <div className="w-full overflow-hidden relative py-4">
          {/* Gradient Blur Overlays on sides for smooth fade in/out */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 md:w-56 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 md:w-56 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee Track */}
          <div className="animate-marquee-rtl flex items-center space-x-6 sm:space-x-10 md:space-x-12">
            {[...Array(44)].map((_, i) => (
              <div
                key={`b1-${i}`}
                className="flex-shrink-0 w-28 sm:w-36 md:w-44 h-20 sm:h-24 md:h-28 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(91,46,255,0.12)] hover:border-brand-purple/30 p-3 sm:p-4 flex items-center justify-center transition-all duration-300 transform hover:scale-105 group"
              >
                <img
                  src={`/images/brands/${i + 1}.png`}
                  alt={`Brand ${i + 1}`}
                  className="max-h-full max-w-full object-contain opacity-95 group-hover:opacity-100 transition-all duration-300"
                  draggable={false}
                />
              </div>
            ))}
            {/* Duplicated 44 images for seamless infinite 0% -> -50% loop */}
            {[...Array(44)].map((_, i) => (
              <div
                key={`b2-${i}`}
                className="flex-shrink-0 w-28 sm:w-36 md:w-44 h-20 sm:h-24 md:h-28 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(91,46,255,0.12)] hover:border-brand-purple/30 p-3 sm:p-4 flex items-center justify-center transition-all duration-300 transform hover:scale-105 group"
              >
                <img
                  src={`/images/brands/${i + 1}.png`}
                  alt={`Brand ${i + 1}`}
                  className="max-h-full max-w-full object-contain opacity-95 group-hover:opacity-100 transition-all duration-300"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Parallax Window — BG.jpg fixed behind, 2 marquee rows both scrolling right→left simultaneously */}
      <div
        className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden select-none"
        style={{ clipPath: "inset(0px)" }}
      >
        {/* Fixed BG.jpg */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          <img src="/images/BG.jpg" alt="Parallax Background" className="w-full h-full object-cover" draggable={false} />
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Rows — Bound to start strictly below the title area, preventing top overflow */}
        <div ref={parentRef} className="absolute top-[40px] sm:top-[200px] md:top-[220px] bottom-0 left-0 right-0 z-20 flex flex-col justify-center sm:justify-end pb-4 sm:pb-6 gap-12 sm:gap-6 cursor-grab active:cursor-grabbing">

          {/* Middle Row (top): images 5, 6, 7, 8 — 2 images visible at a time */}
          <div ref={middleRowRef} className="w-full overflow-hidden flex-shrink-0 py-3">
            <div className="flex flex-nowrap" style={{ width: "max-content" }}>
              {[5, 6, 7, 8, 5, 6, 7, 8].map((n, i) => (
                <div key={`r2-${i}`} style={{ flexShrink: 0, paddingRight: "50vw" }}>
                  <img src={`/images/Infinite Marquee/${n}.jpg`} alt={`Work ${n}`}
                    className="h-40 sm:h-36 md:h-44 w-auto object-contain rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.3),_0_0_15px_rgba(139,159,254,0.2)] transition-all duration-300 ease-out hover:scale-105 cursor-grab active:cursor-grabbing hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),_0_0_25px_rgba(139,159,254,0.6)]"
                    draggable={false} />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row: images 9, 10, 11 — 2 images visible, staggered in the gaps of middle row */}
          <div ref={bottomRowRef} className="w-full overflow-hidden flex-shrink-0 py-3">
            <div className="flex flex-nowrap" style={{ width: "max-content" }}>
              {[9, 10, 11, 9, 10, 11, 9, 11].map((n, i) => (
                <div key={`r3-${i}`} style={{ flexShrink: 0, paddingRight: "20vw" }}>
                  <img src={`/images/Infinite Marquee/${n}.jpg`} alt={`Work ${n}`}
                    className="h-40 sm:h-36 md:h-44 w-auto object-contain rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.3),_0_0_15px_rgba(139,159,254,0.2)] transition-all duration-300 ease-out hover:scale-105 cursor-grab active:cursor-grabbing hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),_0_0_25px_rgba(139,159,254,0.6)]"
                    draggable={false} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Title — top-left */}
        <div className="absolute top-6 sm:top-2 md:top-2 left-4 sm:left-10 lg:left-20 z-30 select-none">
          <h2 className="flex flex-row flex-nowrap items-center whitespace-nowrap font-serif text-[4.5vw] sm:text-base md:text-xl lg:text-2xl text-white/90 leading-none tracking-wide">
            <span>we</span>
            <span className="relative flex items-center justify-center w-4 h-4 sm:w-7 sm:h-7 mx-1 sm:mx-2">
              <div className="absolute w-4 h-4 sm:w-6 sm:h-6 bg-[#8b9ffe] rounded-full blur-[5px] opacity-80" />
              <svg className="w-3 h-3 sm:w-5 sm:h-5 text-[#8b9ffe] relative z-10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </span>
            <span>when our work is being appreciated</span>
          </h2>
        </div>
      </div>

    </section>
  );
}
