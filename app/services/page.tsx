"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BannerCTA from "@/components/BannerCTA";
import IndustriesWeWorkedFor from "@/components/IndustriesWeWorkedFor";
import CollabsAndCampaigns from "@/components/CollabsAndCampaigns";
import { motion } from "framer-motion";
import { Clock, MessageSquare, Award } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden relative select-none">
      <Navbar />

      {/* TOP SECTION: OUR BIGGEST PLUS FACTORS */}
      <section className="pt-48 sm:pt-56 pb-24 sm:pb-32 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-b from-[#f4f4f8] via-[#eef0f8] to-[#e4e6f2] border-b border-gray-300/60 relative overflow-hidden">
        
        {/* 3D AMBIENT BACKGROUND ELEMENTS */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          
          {/* Isometric 3D Grid Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.25]"
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

          {/* Floating 3D Ambient Glass Sphere 1 (Top Left) */}
          <motion.div
            animate={{
              y: [0, -22, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-12 left-10 w-52 h-52 rounded-full bg-gradient-to-tr from-emerald-400/20 via-brand-purple/15 to-white/40 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(91,46,255,0.15)]"
          />

          {/* Floating 3D Ambient Glass Sphere 2 (Bottom Right) */}
          <motion.div
            animate={{
              y: [0, 25, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-12 right-12 w-60 h-60 rounded-full bg-gradient-to-br from-blue-600/20 via-brand-purple/20 to-white/30 backdrop-blur-md border border-white/50 shadow-[0_25px_60px_rgba(0,46,255,0.15)]"
          />

          {/* Rotating Wireframe Target Rings Vector Behind Center Pillar */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] opacity-15 text-brand-purple stroke-current fill-none"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="90" strokeWidth="0.8" strokeDasharray="6 3" />
            <circle cx="100" cy="100" r="65" strokeWidth="0.5" />
            <polygon points="100,15 125,75 185,100 125,125 100,185 75,125 15,100 75,75" strokeWidth="0.6" />
          </motion.svg>

          {/* Radiant Glowing Ambient Blobs */}
          <div className="absolute top-1/3 left-10 w-[450px] h-[450px] rounded-full bg-emerald-400/10 blur-[140px]" />
          <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-brand-purple/10 blur-[140px]" />

        </div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Title with Proper Top Clearance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-14 sm:mb-20 text-left border-b border-gray-300/80 pb-6"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#061245] tracking-tight font-medium drop-shadow-sm">
              Our biggest <span className="font-sans font-extrabold tracking-tight uppercase text-brand-purple drop-shadow-[0_2px_10px_rgba(91,46,255,0.25)]">PLUS</span> factors, when it comes to work...
            </h1>
          </motion.div>

          {/* 3 Pillar Cards with Large 3D Gradient Arrows Below (3 Columns on both Mobile & PC) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-8 items-end relative pt-4 sm:pt-8">

            {/* PILLAR 1: TIMELY DELIVERY */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Text Container Above Arrow */}
              <div className="mb-3 sm:mb-6 min-h-[100px] sm:min-h-[140px] flex flex-col items-center justify-center px-1 sm:px-4">
                <h3 className="font-bold text-xs sm:text-lg md:text-xl text-[#061245] uppercase tracking-wider mb-1 sm:mb-2">
                  TIMELY DELIVERY
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 leading-tight sm:leading-relaxed max-w-xs font-normal">
                  We do not take advantage of time, and we take responsibility for what we say.
                </p>
              </div>

              {/* 3D Arrow Pillar (Left Angled) */}
              <div className="w-full flex justify-center relative">
                <div className="relative w-24 sm:w-44 md:w-52 h-24 sm:h-44 md:h-52 bg-gradient-to-t from-[#060836] via-[#17178a] to-[#3b3bf7] rounded-xl sm:rounded-2xl shadow-[0_10px_25px_rgba(6,18,69,0.3)] transform -rotate-12 group-hover:scale-105 group-hover:-rotate-6 transition-all duration-300 flex items-center justify-center border border-white/30 overflow-hidden">
                  
                  {/* Arrow Point Triangle on top */}
                  <div className="absolute -top-3 sm:-top-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] sm:border-l-[30px] border-l-transparent border-r-[15px] sm:border-r-[30px] border-r-transparent border-b-[15px] sm:border-b-[30px] border-b-[#3b3bf7]" />
                  
                  {/* Icon */}
                  <Clock className="w-6 h-6 sm:w-12 md:w-16 text-white drop-shadow-md relative z-10" />
                </div>
              </div>
            </motion.div>

            {/* PILLAR 2: COMMON SENSE (CENTER HIGHLIGHTED) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center group z-20"
            >
              {/* Text Container Above Arrow with Green Hand-Drawn Ring Highlight */}
              <div className="mb-3 sm:mb-6 min-h-[100px] sm:min-h-[140px] flex flex-col items-center justify-center px-1 sm:px-4 relative">
                
                {/* Hand-Drawn Green Ring Overlay around Common Sense */}
                <div className="relative px-2 py-1 sm:px-6 sm:py-2.5 border sm:border-2 border-emerald-400 rounded-[999px] shadow-[0_0_15px_rgba(52,211,153,0.35)] bg-emerald-50/80 mb-1 sm:mb-2">
                  <h3 className="font-bold text-xs sm:text-lg md:text-xl text-[#061245] uppercase tracking-wider">
                    COMMON SENSE
                  </h3>
                  <span className="text-[9px] sm:text-xs md:text-sm font-semibold text-emerald-700 block whitespace-nowrap">
                    Yes, we have that!
                  </span>
                </div>

                <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 leading-tight sm:leading-relaxed max-w-xs font-normal">
                  Too much explanation is not required, but we will ask a lot of questions to understand what you want.
                </p>
              </div>

              {/* 3D Arrow Pillar (Center Vertical Straight) */}
              <div className="w-full flex justify-center relative">
                <div className="relative w-28 sm:w-48 md:w-56 h-28 sm:h-48 md:h-56 bg-gradient-to-t from-[#090325] via-brand-purple to-purple-500 rounded-xl sm:rounded-2xl shadow-[0_15px_35px_rgba(91,46,255,0.4)] group-hover:scale-105 transition-all duration-300 flex items-center justify-center border border-white/40 overflow-hidden">
                  
                  {/* Arrow Point Triangle on top */}
                  <div className="absolute -top-3.5 sm:-top-7 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[18px] sm:border-l-[35px] border-l-transparent border-r-[18px] sm:border-r-[35px] border-r-transparent border-b-[18px] sm:border-b-[35px] border-b-purple-500" />
                  
                  {/* Icon */}
                  <MessageSquare className="w-7 h-7 sm:w-14 md:w-20 text-white drop-shadow-md relative z-10" />
                </div>
              </div>
            </motion.div>

            {/* PILLAR 3: QUALITY */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Text Container Above Arrow */}
              <div className="mb-3 sm:mb-6 min-h-[100px] sm:min-h-[140px] flex flex-col items-center justify-center px-1 sm:px-4">
                <h3 className="font-bold text-xs sm:text-lg md:text-xl text-[#061245] uppercase tracking-wider mb-1 sm:mb-2">
                  QUALITY
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 leading-tight sm:leading-relaxed max-w-xs font-normal">
                  Despite other factors, we make sure to maintain the quality.
                </p>
              </div>

              {/* 3D Arrow Pillar (Right Angled) */}
              <div className="w-full flex justify-center relative">
                <div className="relative w-24 sm:w-44 md:w-52 h-24 sm:h-44 md:h-52 bg-gradient-to-t from-[#060836] via-[#17178a] to-[#3b3bf7] rounded-xl sm:rounded-2xl shadow-[0_10px_25px_rgba(6,18,69,0.3)] transform rotate-12 group-hover:scale-105 group-hover:rotate-6 transition-all duration-300 flex items-center justify-center border border-white/30 overflow-hidden">
                  
                  {/* Arrow Point Triangle on top */}
                  <div className="absolute -top-3 sm:-top-6 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] sm:border-l-[30px] border-l-transparent border-r-[15px] sm:border-r-[30px] border-r-transparent border-b-[15px] sm:border-b-[30px] border-b-[#3b3bf7]" />
                  
                  {/* Icon */}
                  <Award className="w-6 h-6 sm:w-12 md:w-16 text-white drop-shadow-md relative z-10" />
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* COLLABS X DP AND CAMPAIGNS SECTION */}
      <CollabsAndCampaigns />

      {/* INDUSTRIES WE'VE WORKED FOR SECTION */}
      <IndustriesWeWorkedFor />

      <BannerCTA />
      <Footer />
    </main>
  );
}
