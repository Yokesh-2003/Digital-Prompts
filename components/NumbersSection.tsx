"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function NumbersSection() {
  const [activeHover, setActiveHover] = useState<number | null>(null);

  const sphereFloat = (delay: number, yRange: [number, number, number]) => ({
    animate: {
      y: yRange,
      transition: {
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  });

  return (
    <section className="w-full bg-gradient-to-b from-[#e8e8ee] via-[#dfdfe8] to-[#f2f2f6] py-12 sm:py-20 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden select-none border-b border-gray-300/60">
      
      {/* 3D AMBIENT BACKGROUND ART & LIGHTING */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Isometric 3D Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(6, 18, 69, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(6, 18, 69, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Paper Grain Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating 3D Ambient Glass Sphere 1 (Top Right) */}
        <motion.div
          animate={{
            y: [0, -22, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 right-10 w-52 h-52 rounded-full bg-gradient-to-tr from-[#3b3bf7]/20 via-[#17178a]/15 to-white/40 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(59,59,247,0.15)]"
        />

        {/* Floating 3D Ambient Glass Sphere 2 (Bottom Left) */}
        <motion.div
          animate={{
            y: [0, 24, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-gradient-to-br from-brand-purple/20 via-[#061245]/20 to-white/30 backdrop-blur-md border border-white/50 shadow-[0_25px_60px_rgba(6,18,69,0.15)]"
        />

        {/* Rotating 3D Wireframe Target Rings Vector Behind Spheres */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] opacity-15 text-[#061245] stroke-current fill-none"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="95" strokeWidth="0.8" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="75" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="50" strokeWidth="0.8" strokeDasharray="8 4" />
          <line x1="100" y1="0" x2="100" y2="200" strokeWidth="0.5" />
          <line x1="0" y1="100" x2="200" y2="100" strokeWidth="0.5" />
        </motion.svg>

        {/* Deep Sapphire & Purple Ambient Lighting Glow Blobs */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-purple/10 blur-[130px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-[#061245]/10 blur-[130px]" />

      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Tag & Title */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 sm:mb-12 md:mb-14 text-center sm:text-left"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#061245] tracking-tight font-medium drop-shadow-sm">
            Let’s talk <span className="font-sans font-bold tracking-tight text-[#061245]">NUMBERS...</span>
          </h2>
        </motion.div>

        {/* Responsive Canvas */}
        <div className="w-full flex flex-col space-y-10 sm:space-y-14 md:space-y-16">

          {/* ================= ROW 1: TOP PAIR ================= */}
          <div className="w-full flex items-center justify-between gap-1 sm:gap-4 relative">
            
            {/* Left Text Block 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setActiveHover(1)}
              onMouseLeave={() => setActiveHover(null)}
              className={`w-[28%] sm:w-[26%] flex flex-col justify-center text-left z-10 p-2 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                activeHover === 1 ? "bg-white/90 shadow-lg scale-[1.02] border border-white/80" : "hover:bg-white/50"
              }`}
            >
              <h3 className="text-xs sm:text-base md:text-xl lg:text-2xl font-bold text-[#061245] leading-tight">
                50M+ views in 1 year
              </h3>
              <p className="text-[9px] sm:text-xs md:text-sm text-gray-600 mt-1 leading-tight sm:leading-relaxed">
                We don’t focus on the views, rather we focus on the quality of the viewership and the impact it created.
              </p>
            </motion.div>

            {/* Dotted Line Connector: Left Text to Sphere 1 */}
            <div className="hidden sm:flex flex-1 items-center justify-center px-1 sm:px-3">
              <div 
                className={`w-full border-t-2 transition-all duration-300 ${
                  activeHover === 1 ? "border-solid border-[#2728b5]" : "border-dashed border-gray-400/60"
                }`}
              />
            </div>

            {/* Center Spheres Group (Sphere 1 & Sphere 2) */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 z-20 flex-shrink-0">
              
              {/* Sphere 1: 100M+ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                {...sphereFloat(0, [0, -8, 0])}
                onMouseEnter={() => setActiveHover(1)}
                onMouseLeave={() => setActiveHover(null)}
                whileHover={{ scale: 1.08 }}
                className="w-16 h-16 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 rounded-full flex-shrink-0 relative cursor-pointer"
              >
                <div 
                  className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-300 shadow-[0_15px_35px_-5px_rgba(5,6,44,0.5),inset_0_-4px_12px_rgba(0,0,0,0.7),inset_0_4px_10px_rgba(255,255,255,0.4)]"
                  style={{
                    background: "radial-gradient(circle at 35% 30%, #3b3bf7 0%, #17178a 45%, #060836 85%, #020215 100%)",
                  }}
                >
                  <div className="absolute top-1 left-2 sm:top-3 sm:left-6 w-6 h-4 sm:w-16 sm:h-10 rounded-full bg-white/20 blur-[2px] sm:blur-[6px] pointer-events-none transform -rotate-45" />
                  <span className="text-xs sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                    100M+
                  </span>
                </div>
              </motion.div>

              {/* Sphere 2: 35% */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                {...sphereFloat(1, [0, 8, 0])}
                onMouseEnter={() => setActiveHover(2)}
                onMouseLeave={() => setActiveHover(null)}
                whileHover={{ scale: 1.08 }}
                className="w-14 h-14 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full flex-shrink-0 relative cursor-pointer"
              >
                <div 
                  className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-300 shadow-[0_15px_35px_-5px_rgba(5,6,44,0.5),inset_0_-4px_12px_rgba(0,0,0,0.7),inset_0_4px_10px_rgba(255,255,255,0.4)]"
                  style={{
                    background: "radial-gradient(circle at 35% 30%, #3b3bf7 0%, #17178a 45%, #060836 85%, #020215 100%)",
                  }}
                >
                  <div className="absolute top-1 left-2 sm:top-2 sm:left-4 w-5 h-3 sm:w-12 sm:h-8 rounded-full bg-white/20 blur-[2px] sm:blur-[5px] pointer-events-none transform -rotate-45" />
                  <span className="text-[11px] sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                    35%
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Dotted Line Connector: Sphere 2 to Right Text */}
            <div className="hidden sm:flex flex-1 items-center justify-center px-1 sm:px-3">
              <div 
                className={`w-full border-t-2 transition-all duration-300 ${
                  activeHover === 2 ? "border-solid border-[#2728b5]" : "border-dashed border-gray-400/60"
                }`}
              />
            </div>

            {/* Right Text Block 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setActiveHover(2)}
              onMouseLeave={() => setActiveHover(null)}
              className={`w-[28%] sm:w-[26%] flex flex-col justify-center text-left z-10 p-2 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                activeHover === 2 ? "bg-white/90 shadow-lg scale-[1.02] border border-white/80" : "hover:bg-white/50"
              }`}
            >
              <h3 className="text-xs sm:text-base md:text-xl lg:text-2xl font-bold text-[#061245] leading-tight">
                35% increase in operating margin
              </h3>
              <p className="text-[9px] sm:text-xs md:text-sm text-gray-600 mt-1 leading-tight sm:leading-relaxed">
                Every year, we show a substantial growth in our clientele’s business. Sometimes, it’s even more than 75%. Not exaggerating, but talking real numbers.
              </p>
            </motion.div>

          </div>


          {/* ================= ROW 2: BOTTOM PAIR ================= */}
          <div className="w-full flex items-center justify-between gap-1 sm:gap-4 relative">

            {/* Left Text Block 3 (Bullet Points) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setActiveHover(3)}
              onMouseLeave={() => setActiveHover(null)}
              className={`w-[30%] sm:w-[28%] flex flex-col justify-center text-left z-10 p-2 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                activeHover === 3 ? "bg-white/90 shadow-lg scale-[1.02] border border-white/80" : "hover:bg-white/50"
              }`}
            >
              <ul className="space-y-1 sm:space-y-2 text-[8.5px] sm:text-xs md:text-sm font-medium text-gray-700 leading-tight sm:leading-relaxed">
                <li className="flex items-start space-x-1">
                  <span className="text-[#061245] font-bold">•</span>
                  <span>Generated ₹50L+ revenue with 4.5x ROAS in 6 months (2025).</span>
                </li>
                <li className="flex items-start space-x-1">
                  <span className="text-[#061245] font-bold">•</span>
                  <span>Avg. ₹25L+ solid revenue, in pipeline (2025).</span>
                </li>
                <li className="flex items-start space-x-1">
                  <span className="text-[#061245] font-bold">•</span>
                  <span>Brand searches increased by 210% in 100 days.</span>
                </li>
              </ul>
            </motion.div>

            {/* Dotted Line Connector: Left Text to Sphere 3 */}
            <div className="hidden sm:flex flex-1 items-center justify-center px-1 sm:px-3">
              <div 
                className={`w-full border-t-2 transition-all duration-300 ${
                  activeHover === 3 ? "border-solid border-[#2728b5]" : "border-dashed border-gray-400/60"
                }`}
              />
            </div>

            {/* Center Spheres Group (Sphere 3 & Sphere 4) */}
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 z-20 flex-shrink-0">
              
              {/* Sphere 3: 6x */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                {...sphereFloat(0.5, [0, -8, 0])}
                onMouseEnter={() => setActiveHover(3)}
                onMouseLeave={() => setActiveHover(null)}
                whileHover={{ scale: 1.08 }}
                className="w-14 h-14 sm:w-24 sm:h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full flex-shrink-0 relative cursor-pointer"
              >
                <div 
                  className="w-full h-full rounded-full flex items-center justify-center relative overflow-hidden transition-all duration-300 shadow-[0_15px_35px_-5px_rgba(5,6,44,0.5),inset_0_-4px_12px_rgba(0,0,0,0.7),inset_0_4px_10px_rgba(255,255,255,0.4)]"
                  style={{
                    background: "radial-gradient(circle at 35% 30%, #3b3bf7 0%, #17178a 45%, #060836 85%, #020215 100%)",
                  }}
                >
                  <div className="absolute top-1 left-2 sm:top-2 sm:left-4 w-5 h-3 sm:w-12 sm:h-8 rounded-full bg-white/20 blur-[2px] sm:blur-[5px] pointer-events-none transform -rotate-45" />
                  <span className="text-xs sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-tight drop-shadow-md font-serif">
                    6x
                  </span>
                </div>
              </motion.div>

              {/* Sphere 4: 20,000+ leads */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
                {...sphereFloat(1.2, [0, 8, 0])}
                onMouseEnter={() => setActiveHover(4)}
                onMouseLeave={() => setActiveHover(null)}
                whileHover={{ scale: 1.08 }}
                className="w-16 h-16 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full flex-shrink-0 relative cursor-pointer"
              >
                <div 
                  className="w-full h-full rounded-full flex flex-col items-center justify-center text-center p-1 sm:p-2 relative overflow-hidden transition-all duration-300 shadow-[0_15px_35px_-5px_rgba(5,6,44,0.5),inset_0_-4px_12px_rgba(0,0,0,0.7),inset_0_4px_10px_rgba(255,255,255,0.4)]"
                  style={{
                    background: "radial-gradient(circle at 35% 30%, #3b3bf7 0%, #17178a 45%, #060836 85%, #020215 100%)",
                  }}
                >
                  <div className="absolute top-1 left-2 sm:top-3 sm:left-6 w-6 h-4 sm:w-16 sm:h-10 rounded-full bg-white/20 blur-[2px] sm:blur-[6px] pointer-events-none transform -rotate-45" />
                  <span className="text-[10px] sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white tracking-tight drop-shadow-md leading-tight">
                    20,000+
                  </span>
                  <span className="text-[8px] sm:text-sm md:text-lg lg:text-xl font-bold text-white/90 tracking-wide mt-0.5">
                    leads
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Dotted Line Connector: Sphere 4 to Right Text */}
            <div className="hidden sm:flex flex-1 items-center justify-center px-1 sm:px-3">
              <div 
                className={`w-full border-t-2 transition-all duration-300 ${
                  activeHover === 4 ? "border-solid border-[#2728b5]" : "border-dashed border-gray-400/60"
                }`}
              />
            </div>

            {/* Right Text Block 4 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setActiveHover(4)}
              onMouseLeave={() => setActiveHover(null)}
              className={`w-[28%] sm:w-[26%] flex flex-col justify-center text-left z-10 p-2 sm:p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                activeHover === 4 ? "bg-white/90 shadow-lg scale-[1.02] border border-white/80" : "hover:bg-white/50"
              }`}
            >
              <h3 className="text-xs sm:text-base md:text-lg lg:text-xl font-bold text-[#061245] leading-tight">
                More than 10K+ leads generated, over 33% conversion rate.
              </h3>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
