"use client";

import { motion } from "framer-motion";
import { ChevronsRight } from "lucide-react";

const ALL_FAVOURITES = [
  "Community Campaigns",
  "Ms Gayathri Prakash x Sundari Silks x Mehta",
  "Vidiyalai Nokki Stalin Kural",
  "Personal Shoots",
  "Trends with personalities",
  "Movie Audio launches",
  "Ms Pooja x Forbes",
  "Dr Pugazhendhi",
  "Euphoria",
  "Ms Shameena",
  "At The BRIM",
  "The Rayanes Show",
  "Shows",
  "Global Business Conclave",
  "BTS",
  "Ms Swarnamugi",
  "Ms Shameena",
  "Enexio",
  "V Spacez",
  "EYES",
];

export default function SomeOfOurFavourites() {
  return (
    <section className="w-full bg-[#f2efe9] py-12 sm:py-20 px-4 sm:px-8 md:px-12 lg:px-20 relative overflow-hidden select-none border-b border-gray-300/60">
      
      {/* UNIQUE 3D THEME: Vintage Paper Texture + Floating Hand-Drawn Doodle Vectors */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Paper Grain Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Floating 3D Sparkle Star 1 */}
        <motion.div
          animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 right-16 text-brand-purple/20 text-7xl font-serif"
        >
          ✦
        </motion.div>

        {/* Floating 3D Sparkle Star 2 */}
        <motion.div
          animate={{ rotate: [360, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-16 left-12 text-[#C5A880]/30 text-8xl font-serif"
        >
          ✧
        </motion.div>

        {/* Hand-Drawn Curved Spiral Stroke Vector */}
        <svg className="absolute -right-20 bottom-10 w-96 h-96 opacity-15 stroke-brand-purple fill-none" viewBox="0 0 200 200">
          <path d="M10,100 C50,150 150,50 190,100 C150,150 50,50 10,100 Z" strokeWidth="1.5" strokeDasharray="3 3" />
        </svg>

        {/* Soft Warm Radial Glow */}
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-[#C5A880]/10 blur-[120px]" />

      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 flex items-baseline space-x-2 sm:space-x-3 flex-wrap"
        >
          <span className="font-serif italic text-3xl sm:text-5xl md:text-6xl text-[#061245] font-normal">
            Some of our
          </span>
          <span className="font-heading text-4xl sm:text-6xl md:text-7xl text-brand-purple tracking-wide font-bold uppercase drop-shadow-[2px_4px_10px_rgba(91,46,255,0.2)]">
            favourites
          </span>
        </motion.div>

        {/* Clean Text List Layout (2 columns on Mobile, 3 columns on Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 sm:gap-x-8 gap-y-3.5 sm:gap-y-5 items-start">
          {ALL_FAVOURITES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: (idx % 3) * 0.04 }}
              className="flex items-start space-x-1.5 sm:space-x-2.5 group cursor-pointer"
            >
              <ChevronsRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-brand-purple flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-200" />
              <span className="text-xs sm:text-base md:text-lg font-medium text-dark leading-snug underline underline-offset-2 sm:underline-offset-4 decoration-gray-300 group-hover:decoration-brand-purple group-hover:text-brand-purple transition-all duration-200">
                {item}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
