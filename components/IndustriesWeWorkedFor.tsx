"use client";

import { motion } from "framer-motion";

const LEFT_INDUSTRIES = [
  { title: "EDUCATION AND", sub: "TRAINING" },
  { title: "REAL ESTATE", sub: "" },
  { title: "POLITICAL", sub: "" },
  { title: "HEALTHCARE AND", sub: "SOCIAL SERVICES" },
  { title: "FOOD &", sub: "BEVERAGES" },
];

const RIGHT_INDUSTRIES = [
  { title: "TEXTILES AND", sub: "APPAREL" },
  { title: "COMMUNITIES", sub: "" },
  { title: "TOURISM AND", sub: "HOSPITALITY" },
  { title: "LEGAL", sub: "" },
  { title: "IT & PRODUCTS", sub: "" },
];

export default function IndustriesWeWorkedFor() {
  return (
    <section className="w-full bg-gradient-to-b from-[#ebebeb] via-[#e5e5eb] to-[#f4f4f6] py-10 sm:py-16 px-3 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden select-none border-t border-b border-gray-300/60">
      
      {/* 3D BACKGROUND ART & AMBIENT GLOWS */}
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

        {/* Paper Grain Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating 3D Glass Sphere Top Right */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-8 right-10 w-48 h-48 rounded-full bg-gradient-to-tr from-brand-purple/20 via-blue-500/15 to-white/40 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(91,46,255,0.15)]"
        />

        {/* Floating 3D Glass Sphere Bottom Left */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -12, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-8 left-10 w-52 h-52 rounded-full bg-gradient-to-br from-brand-accent2/20 via-brand-purple/15 to-white/30 backdrop-blur-md border border-white/50 shadow-[0_25px_60px_rgba(91,46,255,0.15)]"
        />

        {/* Glowing Purple Radial Blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-purple/8 blur-[120px]" />

        {/* Rotating 3D Radar Wireframe Rings behind center title */}
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-15 text-brand-purple stroke-current fill-none"
          viewBox="0 0 200 200"
        >
          <circle cx="100" cy="100" r="90" strokeWidth="0.8" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="70" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="45" strokeWidth="0.8" strokeDasharray="8 4" />
        </motion.svg>

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 3-Column Radial Layout (Pills Left | Center Title | Pills Right) */}
        <div className="grid grid-cols-12 gap-1.5 sm:gap-4 md:gap-6 items-center">

          {/* LEFT COLUMN PILLS */}
          <div className="col-span-4 flex flex-col space-y-2.5 sm:space-y-4 items-end justify-center">
            {LEFT_INDUSTRIES.map((ind, idx) => (
              <motion.div
                key={`left-${idx}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="bg-white/95 backdrop-blur-sm border sm:border-2 border-black rounded-xl sm:rounded-2xl px-2 sm:px-5 py-1.5 sm:py-3 shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[4.5px_4.5px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(91,46,255,1)] hover:border-brand-purple transition-all duration-250 flex flex-col items-center justify-center text-center cursor-pointer w-full max-w-[135px] sm:max-w-[230px] md:max-w-[260px] group"
              >
                <span className="font-bold text-[9px] sm:text-xs md:text-sm text-dark tracking-wider uppercase leading-tight group-hover:text-brand-purple transition-colors">
                  {ind.title}
                </span>
                {ind.sub && (
                  <span className="font-bold text-[9px] sm:text-xs md:text-sm text-brand-purple tracking-wider uppercase leading-tight mt-0.5">
                    {ind.sub}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

          {/* CENTER TITLE COLUMN */}
          <div className="col-span-4 flex flex-col items-center justify-center text-center relative px-1 sm:px-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center justify-center relative py-4"
            >
              {/* Radial Glowing Aura Behind Title */}
              <div className="absolute w-28 h-28 sm:w-44 sm:h-44 rounded-full bg-brand-purple/15 blur-2xl -z-10" />

              <h2 className="text-xs sm:text-2xl md:text-3xl lg:text-4xl font-serif text-[#061245] tracking-tight font-medium leading-tight drop-shadow-sm">
                INDUSTRIES <br />
                WE’VE <br />
                <span className="font-serif italic text-brand-purple font-normal drop-shadow-[0_2px_8px_rgba(91,46,255,0.3)]">WORKED FOR</span>
              </h2>
            </motion.div>
          </div>

          {/* RIGHT COLUMN PILLS */}
          <div className="col-span-4 flex flex-col space-y-2.5 sm:space-y-4 items-start justify-center">
            {RIGHT_INDUSTRIES.map((ind, idx) => (
              <motion.div
                key={`right-${idx}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.04, y: -2 }}
                className="bg-white/95 backdrop-blur-sm border sm:border-2 border-black rounded-xl sm:rounded-2xl px-2 sm:px-5 py-1.5 sm:py-3 shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[4.5px_4.5px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(91,46,255,1)] hover:border-brand-purple transition-all duration-250 flex flex-col items-center justify-center text-center cursor-pointer w-full max-w-[135px] sm:max-w-[230px] md:max-w-[260px] group"
              >
                <span className="font-bold text-[9px] sm:text-xs md:text-sm text-dark tracking-wider uppercase leading-tight group-hover:text-brand-purple transition-colors">
                  {ind.title}
                </span>
                {ind.sub && (
                  <span className="font-bold text-[9px] sm:text-xs md:text-sm text-brand-purple tracking-wider uppercase leading-tight mt-0.5">
                    {ind.sub}
                  </span>
                )}
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
