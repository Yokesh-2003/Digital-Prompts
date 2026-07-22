"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BannerCTA() {
  return (
    <div className="w-full bg-[#0a0914] border-t border-b border-brand-purple/20 shadow-[0_20px_60px_rgba(91,46,255,0.15)] relative overflow-hidden select-none py-14 sm:py-20 md:py-24 px-6 sm:px-12 md:px-20 lg:px-28">
      
      {/* Background Ambience & Lighting Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {/* Subtle Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(91, 46, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(91, 46, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        
        {/* Glowing Purple Radial Blobs */}
        <div className="absolute -left-20 -bottom-20 w-[450px] h-[450px] rounded-full bg-[#5B2EFF]/25 blur-[100px]" />
        <div className="absolute -right-20 -top-20 w-[450px] h-[450px] rounded-full bg-[#002eff]/20 blur-[100px]" />
        
        {/* Glowing Light Streak Vector */}
        <svg className="absolute inset-0 w-full h-full stroke-white/5 fill-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,150 Q 600,0 1600,300" strokeWidth="1.5" strokeDasharray="6 6" />
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">

        {/* LEFT CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center text-left"
        >
          {/* Line 1: "Let’s" in gold serif italic */}
          <span className="font-serif italic font-normal text-[#C5A880] text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide leading-none">
            Let’s
          </span>

          {/* Line 2: "CONTACT" in normal bold font */}
          <span className="font-heading uppercase text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider leading-none mt-1 sm:mt-2">
            CONTACT
          </span>
        </motion.div>

        {/* RIGHT CONTENT: Contact Button */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center self-end md:self-center"
        >
          <Link
            href="#contact"
            className="pearl-btn pearl-btn-standard hover:scale-105 transition-transform duration-300"
          >
            <div className="wrap">
              <p>
                <span>✧</span>
                <span>✦</span>
                Contact
              </p>
            </div>
          </Link>
        </motion.div>

      </div>

    </div>
  );
}
