"use client";

import { motion } from "framer-motion";
import { TrendingUp, Network, Lightbulb } from "lucide-react";

export default function FinancialPerformance() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f4f4f6] via-[#ececf1] to-[#e6e6ee] py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden select-none border-b border-gray-300/60">
      
      {/* 3D AMBIENT BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Subtle Isometric 3D Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(91, 46, 255, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(91, 46, 255, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Paper Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating 3D Ambient Glass Spheres */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-44 h-44 rounded-full bg-gradient-to-tr from-brand-purple/20 via-blue-500/15 to-white/40 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(91,46,255,0.15)]"
        />

        {/* Glowing Ambient Radial Lighting */}
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] rounded-full bg-brand-purple/8 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[120px]" />

      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-14 text-left border-b border-gray-300/80 pb-4"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif italic text-[#061245] tracking-tight font-medium mb-2">
            We are really into this, yaayy!
          </h2>
          <p className="text-xs sm:text-base font-sans text-gray-500 font-semibold tracking-wide">
            2025 Fiscal Year - Financial Performance Estimation
          </p>
        </motion.div>

        {/* 3 Horizontal Performance Rows with Connected Central Nodes */}
        <div className="relative flex flex-col space-y-4 sm:space-y-6">
          
          {/* Vertical Connecting Glow Ribbon Behind Nodes */}
          <div className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-3 sm:w-4 bg-gradient-to-b from-brand-purple via-blue-600 to-purple-700 rounded-full shadow-[0_0_15px_rgba(91,46,255,0.6)] z-0 hidden sm:block" />

          {/* ROW 1: 15+ CAMPAIGNS | NODE 1 | ANNUAL REVENUE 10L+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative z-10 grid grid-cols-12 items-center bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(91,46,255,0.12)] transition-all duration-300"
          >
            {/* Left Stat */}
            <div className="col-span-5 sm:col-span-5 flex items-center justify-start space-x-2 sm:space-x-4 pl-2 sm:pl-6">
              <span className="font-heading text-3xl sm:text-5xl md:text-6xl text-brand-purple tracking-tight font-bold">
                15+
              </span>
              <span className="text-xs sm:text-sm md:text-base font-bold text-dark uppercase tracking-wider">
                CAMPAIGNS
              </span>
            </div>

            {/* Center Node Icon */}
            <div className="col-span-2 sm:col-span-2 flex justify-center">
              <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#061245] to-[#17178a] border-2 sm:border-4 border-white shadow-[0_0_20px_rgba(6,18,69,0.4)] flex items-center justify-center text-white z-20">
                <TrendingUp className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
            </div>

            {/* Right Stat */}
            <div className="col-span-5 sm:col-span-5 flex items-center justify-end space-x-2 sm:space-x-4 pr-2 sm:pr-6 text-right">
              <span className="text-xs sm:text-sm md:text-base font-bold text-dark uppercase tracking-wider">
                ANNUAL REVENUE
              </span>
              <span className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#061245] tracking-tight font-bold">
                10L+
              </span>
            </div>
          </motion.div>

          {/* ROW 2: 50+ BRANDS | NODE 2 | INDUSTRIES 10+ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10 grid grid-cols-12 items-center bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(91,46,255,0.12)] transition-all duration-300"
          >
            {/* Left Stat */}
            <div className="col-span-5 sm:col-span-5 flex items-center justify-start space-x-2 sm:space-x-4 pl-2 sm:pl-6">
              <span className="font-heading text-3xl sm:text-5xl md:text-6xl text-blue-700 tracking-tight font-bold">
                50+
              </span>
              <span className="text-xs sm:text-sm md:text-base font-bold text-dark uppercase tracking-wider">
                BRANDS
              </span>
            </div>

            {/* Center Node Icon */}
            <div className="col-span-2 sm:col-span-2 flex justify-center">
              <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-brand-purple to-purple-800 border-2 sm:border-4 border-white shadow-[0_0_20px_rgba(91,46,255,0.5)] flex items-center justify-center text-white z-20">
                <Network className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
            </div>

            {/* Right Stat */}
            <div className="col-span-5 sm:col-span-5 flex items-center justify-end space-x-2 sm:space-x-4 pr-2 sm:pr-6 text-right">
              <span className="text-xs sm:text-sm md:text-base font-bold text-dark uppercase tracking-wider">
                INDUSTRIES
              </span>
              <span className="font-heading text-3xl sm:text-5xl md:text-6xl text-blue-700 tracking-tight font-bold">
                10+
              </span>
            </div>
          </motion.div>

          {/* ROW 3: 50M+ REACH | NODE 3 | ANNUAL IMPACT 45% */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 grid grid-cols-12 items-center bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(91,46,255,0.12)] transition-all duration-300"
          >
            {/* Left Stat */}
            <div className="col-span-5 sm:col-span-5 flex items-center justify-start space-x-2 sm:space-x-4 pl-2 sm:pl-6">
              <span className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#061245] tracking-tight font-bold">
                50M+
              </span>
              <span className="text-xs sm:text-sm md:text-base font-bold text-dark uppercase tracking-wider">
                REACH
              </span>
            </div>

            {/* Center Node Icon */}
            <div className="col-span-2 sm:col-span-2 flex justify-center">
              <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-900 border-2 sm:border-4 border-white shadow-[0_0_20px_rgba(124,58,237,0.5)] flex items-center justify-center text-white z-20">
                <Lightbulb className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
            </div>

            {/* Right Stat */}
            <div className="col-span-5 sm:col-span-5 flex items-center justify-end space-x-2 sm:space-x-4 pr-2 sm:pr-6 text-right">
              <span className="text-xs sm:text-sm md:text-base font-bold text-dark uppercase tracking-wider">
                ANNUAL IMPACT
              </span>
              <span className="font-heading text-3xl sm:text-5xl md:text-6xl text-brand-purple tracking-tight font-bold">
                45%
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
