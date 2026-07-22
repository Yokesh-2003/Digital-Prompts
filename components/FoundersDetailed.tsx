"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function FoundersDetailed() {
  return (
    <div className="w-full select-none">
      
      {/* ================= FULL SIZE DIV 1: DHIVYA KRISHNA (New Luxury 3D Gem & Starburst Theme) ================= */}
      <div id="dhivya" className="w-full bg-gradient-to-br from-[#f9f6f0] via-[#f3eef8] to-[#eee8f5] py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden border-t border-b border-gray-300/60">
        
        {/* UNIQUE 3D THEME: Luxury Rose-Gold & Amethyst Ambient Art */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          
          {/* Subtle 3D Dot Matrix Pattern Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: `radial-gradient(rgba(91, 46, 255, 0.12) 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          {/* Deep Rose-Gold & Amethyst Ambient Glows */}
          <div className="absolute -top-10 -left-10 w-[500px] h-[500px] rounded-full bg-amber-400/10 blur-[140px]" />
          <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-brand-purple/15 blur-[140px]" />

          {/* Floating 3D Prism Gem (Refracting Light) */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [45, 60, 45],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-16 right-20 w-44 h-44 rounded-3xl bg-gradient-to-tr from-brand-purple/25 via-pink-400/20 to-amber-200/40 backdrop-blur-xl border border-white/80 shadow-[0_25px_60px_rgba(91,46,255,0.18)] transform rotate-45 hidden md:block"
          />

          {/* Concentric Rotating Starburst Rings Vector */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute -left-20 bottom-10 w-96 h-96 opacity-15 text-brand-purple stroke-current fill-none"
            viewBox="0 0 200 200"
          >
            <circle cx="100" cy="100" r="85" strokeWidth="0.8" strokeDasharray="6 3" />
            <circle cx="100" cy="100" r="65" strokeWidth="0.5" />
            <polygon points="100,15 125,75 185,100 125,125 100,185 75,125 15,100 75,75" strokeWidth="0.6" />
          </motion.svg>

          {/* Floating Sparkle Constellation Stars */}
          <motion.div
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-1/3 text-brand-purple/25 text-5xl font-serif"
          >
            ✦
          </motion.div>
          
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* LEFT COLUMN: Dhivya Krishna Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
              <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">Founder & Strategist</span>
            </div>

            {/* Name */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading text-dark tracking-wide leading-none mb-3">
              DhivyaKrishna
            </h2>

            {/* Roles / Subtitle */}
            <p className="text-xs sm:text-sm md:text-base font-semibold text-brand-purple tracking-wide mb-6">
              Campaign Strategist • Brand Storyteller • Psychology-Driven Marketer • Creative Content Analyst
            </p>

            {/* Primary Content */}
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal text-justify">
              <p className="font-serif italic text-lg sm:text-xl text-dark/90">
                She likes writing. That’s where it all began. ✍️
              </p>
              <p>
                What started as a love for words slowly turned into a craft - strategizing brands, shaping content, and building stories that actually work. Dhivya Krishna doesn’t just write; she plays with words, emotions, and the psychology behind content. She understands how a sentence can spark curiosity, how a story can build trust, and how the right message can quietly turn into leads, campaigns, and conversions.
              </p>
            </div>

            {/* View More Link Button */}
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-brand-purple text-white hover:bg-brand-purple/90 font-bold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <span>View More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Space for Image Later */}
          <div className="lg:col-span-5 w-full" />

        </div>

      </div>


      {/* ================= FULL SIZE DIV 2: PRABU SARAVANAN (Cinematic Visual & Engineering Theme) ================= */}
      <div id="prabu" className="w-full bg-[#fafafd] py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden border-b border-gray-300/60">
        
        {/* UNIQUE 3D THEME: Cinematic Aperture Geometry & Prism Ray Lighting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          
          {/* Deep Sapphire Blue Ambient Glow */}
          <div className="absolute top-1/4 right-10 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[140px]" />

          {/* 3D Camera Lens Aperture Ring Graphic */}
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -left-28 top-12 w-[420px] h-[420px] opacity-15 text-blue-600 stroke-current fill-none"
            viewBox="0 0 200 200"
          >
            <polygon points="100,10 180,50 180,150 100,190 20,150 20,50" strokeWidth="1" />
            <polygon points="100,30 160,65 160,135 100,170 40,135 40,65" strokeWidth="0.5" strokeDasharray="4 2" />
            <circle cx="100" cy="100" r="45" strokeWidth="1.2" />
          </motion.svg>

          {/* Floating 3D Prism Glass Square */}
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 right-20 w-36 h-36 rounded-3xl bg-gradient-to-br from-blue-600/20 via-brand-purple/20 to-white/40 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(0,46,255,0.15)] transform rotate-12"
          />

        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* LEFT COLUMN: Space for Image Later */}
          <div className="lg:col-span-5 w-full order-2 lg:order-1" />

          {/* RIGHT COLUMN: Prabu Saravanan Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left order-1 lg:order-2"
          >
            {/* Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
              <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">Founder & Creative Director</span>
            </div>

            {/* Name */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading text-dark tracking-wide leading-none mb-3">
              PrabuSaravanan
            </h2>

            {/* Roles / Subtitle */}
            <p className="text-xs sm:text-sm md:text-base font-semibold text-brand-purple tracking-wide mb-6">
              Engineer • UPSC Aspirant • Creative Director • Video Editor • Concept Analyst • Campaign Strategist • Photographer • Passionate Footballer • Performance Marketer
            </p>

            {/* Primary Content */}
            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal text-justify">
              <p className="font-serif italic text-lg sm:text-xl text-dark/90">
                He believes that great visuals begin with clear thinking.
              </p>
              <p>
                He doesn’t just create content, he crafts stories with intent, emotion, and purpose. With a sharp eye for detail and a strong sense of narrative, Prabu works at the intersection of creativity and strategy. Every frame he captures, every cut he edits, and every story he curates is guided by one simple question:
              </p>
              <p className="font-semibold italic text-brand-purple text-base sm:text-lg">
                “Does this communicate clearly and connect honestly?”
              </p>
            </div>

            {/* View More Link Button */}
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-brand-purple text-white hover:bg-brand-purple/90 font-bold text-xs sm:text-sm tracking-wider transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <span>View More</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

          </motion.div>

        </div>

      </div>

    </div>
  );
}
