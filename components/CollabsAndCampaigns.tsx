"use client";

import { motion } from "framer-motion";

const CAMPAIGNS_LIST = [
  "2020 Election Political campaigns (10+ confidential*)",
  "WTM’s - International Womens day 2022 (2 days educational program for under-privileged girl children)",
  "Breast Feeding week campaign",
  "Weapon Movie marketing campaign 2024",
  "#SheLearns IWD 2023 (For sanitary workers and roadside women entrepreneurs)",
  "Mother’s day 2024 campaigns with 10+ brands in Chennai",
  "Mental Health day campaign 2022 and so on...",
];

export default function CollabsAndCampaigns() {
  return (
    <section className="w-full bg-gradient-to-b from-[#ececf1] via-[#e4e4ed] to-[#f4f4f6] py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden select-none border-t border-b border-gray-300/60">
      
      {/* 3D AMBIENT BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Isometric 3D Grid Overlay */}
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

        {/* Paper Grain Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating 3D Ambient Glass Orbs */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-12 w-48 h-48 rounded-full bg-gradient-to-tr from-brand-purple/20 via-blue-500/15 to-white/40 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(91,46,255,0.15)]"
        />

        {/* Ambient Glowing Blobs */}
        <div className="absolute top-1/4 left-10 w-[400px] h-[400px] rounded-full bg-brand-purple/8 blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[120px]" />

      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16 sm:space-y-24">

        {/* SUBSECTION 1: COLLABS X DP */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#061245] tracking-tight font-medium mb-10 text-left"
          >
            COLLABS <span className="font-sans font-light text-brand-purple">X</span> DP
          </motion.h2>

          {/* Partner Circular Badges Marquee / Row */}
          <div className="flex flex-wrap items-center justify-start gap-4 sm:gap-6 md:gap-8">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={`collab-${i}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white border border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(91,46,255,0.2)] hover:border-brand-purple/40 p-2 sm:p-3 flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <img
                  src={`/images/brands/${(i % 12) + 1}.png`}
                  alt={`Collab partner ${i + 1}`}
                  className="max-h-full max-w-full object-contain rounded-full"
                  draggable={false}
                />
              </motion.div>
            ))}
          </div>
        </div>


        {/* SUBSECTION 2: CAMPAIGNS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4">
          
          {/* Left Column: Campaigns Title & Bullet List */}
          <div className="lg:col-span-9 flex flex-col space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-7xl font-serif text-[#061245] tracking-tight font-medium text-left"
            >
              CAMPAIGNS
            </motion.h2>

            <ul className="space-y-4">
              {CAMPAIGNS_LIST.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="flex items-start space-x-3 group cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-[#061245] mt-2 flex-shrink-0 group-hover:bg-brand-purple group-hover:scale-125 transition-all duration-200" />
                  <span className="text-sm sm:text-base md:text-lg font-medium text-gray-800 leading-relaxed font-sans group-hover:text-brand-purple transition-colors duration-200">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Column: Campaign Partner Badges */}
          <div className="lg:col-span-3 flex lg:flex-col items-center justify-start gap-4 sm:gap-6 pt-4 lg:pt-16">
            {[10, 11, 12].map((n, idx) => (
              <motion.div
                key={`camp-partner-${idx}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-white border border-gray-200 shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(91,46,255,0.2)] p-2.5 flex items-center justify-center transition-all duration-300 cursor-pointer"
              >
                <img
                  src={`/images/brands/${n}.png`}
                  alt={`Campaign partner ${idx + 1}`}
                  className="max-h-full max-w-full object-contain rounded-full"
                  draggable={false}
                />
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
