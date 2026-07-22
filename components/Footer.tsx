"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full bg-black text-white pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 overflow-hidden border-t border-white/5">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10 select-none">
        <div className="absolute -left-24 bottom-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full bg-[#5B2EFF]/10 blur-[100px] sm:blur-[120px]" />
        <div className="absolute -right-24 top-0 w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] rounded-full bg-[#002eff]/10 blur-[110px] sm:blur-[130px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-12 lg:px-24">
        {/* Forces 3-column layout (5, 2, 5 span) on both mobile and PC */}
        <div className="grid grid-cols-12 gap-2 sm:gap-6 md:gap-8 items-stretch">
          
          {/* Left Column (Span 5) */}
          <div className="col-span-5 flex flex-col justify-between">
            <div>
              {/* Styled strategy proposal block */}
              <div className="flex flex-col space-y-1 sm:space-y-1.5 select-none">
                <p className="font-serif text-[4vw] sm:text-2xl md:text-3xl lg:text-4.5xl xl:text-5.5xl text-white leading-tight">
                  Meet for a <span className="text-[#C5A880] font-serif italic font-bold">COFFEE...?</span>
                </p>
                <p className="font-serif text-[4vw] sm:text-2xl md:text-3xl lg:text-4.5xl xl:text-5.5xl text-white/90 leading-tight">
                  to discuss on
                </p>
                <p className="font-serif text-[4vw] sm:text-2xl md:text-3xl lg:text-4.5xl xl:text-5.5xl text-white/90 leading-tight">
                  your/your brand's
                </p>
                <p className="font-heading text-[5vw] sm:text-3xl md:text-4xl lg:text-5.5xl xl:text-6.5xl text-[#5B2EFF] tracking-wider leading-none mt-2 sm:mt-4 uppercase">
                  STRATEGIES?
                </p>
              </div>
            </div>
          </div>

          {/* Center Column (Span 2) - Line Art Hand Gesture */}
          <div className="col-span-2 flex flex-col items-center justify-center min-h-full">
            <div className="w-full h-full flex flex-col items-center justify-center relative py-2">
              {/* Vertical line coming down from the top */}
              <div className="w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent h-12 sm:h-20 md:h-28 lg:h-36 mb-2 sm:mb-4 relative" />
              
              {/* Custom Finger Heart SVG Hand Art */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex items-center justify-center select-none"
              >
                <svg className="w-8 h-20 sm:w-12 sm:h-28 md:w-16 md:h-36 text-white/70" viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {/* Wrist crease / Base */}
                  <path d="M30 160 C 30 175, 70 175, 70 160" strokeLinecap="round" />
                  
                  {/* Outer Arm line boundaries */}
                  <path d="M30 160 L30 200" strokeDasharray="3 3" opacity="0.3" />
                  <path d="M70 160 L70 200" strokeDasharray="3 3" opacity="0.3" />

                  {/* Finger heart shape outline floating at the top of intersection */}
                  <path 
                    d="M50 48 C48 44, 44 44, 42 46 C40 48, 40 52, 44 56 L50 62 L56 56 C60 52, 60 48, 58 46 C56 44, 52 44, 50 48 Z" 
                    fill="#5B2EFF" 
                    stroke="#5B2EFF" 
                    strokeWidth="0.5" 
                    className="animate-pulse" 
                  />

                  {/* Hand Fist Details & Folded Fingers */}
                  {/* Pinky (Curled) */}
                  <path d="M68 152 C 73 147, 72 138, 67 134 C 63 134, 61 138, 61 143" strokeLinecap="round" />
                  
                  {/* Ring finger (Curled) */}
                  <path d="M61 143 C 66 138, 65 129, 60 125 C 56 125, 54 129, 54 134" strokeLinecap="round" />
                  
                  {/* Middle finger (Curled) */}
                  <path d="M54 134 C 59 129, 58 120, 53 116 C 49 116, 47 120, 47 125" strokeLinecap="round" />
                  
                  {/* Index finger (Extended up & crossing) */}
                  <path d="M47 125 C 45 110, 44 95, 48 80 C 50 70, 56 70, 57 80 C 58 90, 56 100, 54 110" strokeLinecap="round" />
                  
                  {/* Thumb (Extended up & crossing over index) */}
                  <path d="M30 160 C 26 142, 26 120, 35 104 C 40 94, 49 94, 50 102 C 51 110, 45 122, 38 132" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Right Column (Span 5) */}
          <div className="col-span-5 flex flex-col justify-between items-end text-right">
            
            {/* Contacts Area */}
            <div className="flex flex-col space-y-4 sm:space-y-6 items-end w-full">
              
              {/* Email Address Link */}
              <Link 
                href="mailto:digitalpromptsofficial@gmail.com"
                className="group flex items-center space-x-2 sm:space-x-4 flex-row-reverse space-x-reverse text-white hover:text-[#5B2EFF] transition-colors duration-300 select-all"
              >
                <span className="font-sans text-[3vw] sm:text-lg md:text-xl lg:text-2.5xl tracking-normal leading-none font-medium">
                  digitalpromptsofficial@gmail.com
                </span>
                <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/5 group-hover:text-white group-hover:bg-[#5B2EFF] group-hover:border-[#5B2EFF] transition-all duration-300 flex-shrink-0">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </div>
              </Link>

              {/* Phone Numbers */}
              <div className="flex items-start space-x-2 sm:space-x-4 flex-row-reverse space-x-reverse">
                <div className="flex flex-col space-y-1 sm:space-y-2 items-end font-sans text-[3vw] sm:text-lg md:text-xl lg:text-2.5xl tracking-normal leading-none font-medium">
                  <Link href="tel:+918754042712" className="hover:text-[#5B2EFF] transition-colors duration-300">
                    +91 8754042712
                  </Link>
                  <Link href="tel:+918148184406" className="hover:text-[#5B2EFF] transition-colors duration-300">
                    +91 8148184406
                  </Link>
                </div>
                <div className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white bg-white/5 transition-all duration-300 flex-shrink-0">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </div>
              </div>

            </div>

            {/* Bottom Right CTA */}
            <div className="mt-8 sm:mt-16 md:mt-auto flex flex-col items-end w-full select-none">
              <p className="font-serif text-[3.2vw] sm:text-lg md:text-xl lg:text-2xl text-gray-300">
                Let's create something
              </p>
              <p className="font-heading text-[4.2vw] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#5B2EFF] tracking-wide mt-1 uppercase leading-none">
                AMAZING TOGETHER!
              </p>
            </div>

          </div>

        </div>

        {/* Copyright divider and text */}
        <div className="mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-white/5 flex items-center justify-center text-center text-[2.5vw] sm:text-xs text-gray-500 font-sans select-none">
          <p>© {new Date().getFullYear()} DIGITAL PROMPTS. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
