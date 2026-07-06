"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  // Heading animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1], // Custom easeOutExpo
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };



  return (
    <section
      id="home"
      className="relative w-full aspect-square md:aspect-auto md:min-h-screen flex items-end md:items-center justify-center overflow-hidden bg-white pb-6 md:py-16 px-4 md:px-12 lg:px-24"
    >
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[0.28]"
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25] z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(91, 46, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(91, 46, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Background Soft Purple Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        <motion.div
          className="absolute -top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-brand-accentLight/60 glow-blur opacity-70"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[5%] w-[600px] h-[600px] rounded-full bg-[#EDE7FF]/50 glow-blur opacity-80"
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-[10%] left-[5%] w-[450px] h-[450px] rounded-full bg-brand-purple/5 glow-blur opacity-50"
          animate={{
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Thin Curved SVG Lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none stroke-brand-purple/10 fill-none z-[3]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M-100,200 Q 200,600 800,200 T 1800,800" strokeWidth="1.5" />
        <path d="M-50,400 Q 400,200 1000,700 T 2000,300" strokeWidth="1" strokeDasharray="4 6" />
      </svg>

      {/* Tiny Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[4]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-brand-purple/20"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + (i * 23) % 80}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content Grid */}
      <div className="relative max-w-7xl w-full grid grid-cols-12 gap-2 md:gap-12 items-center z-10">

        {/* Left Side Info */}
        <motion.div
          className="col-span-7 flex flex-col justify-center text-left transform -translate-y-6 md:translate-y-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading */}
          <h1 className="text-[13.5vw] md:text-7xl xl:text-8xl font-heading tracking-wide leading-[0.9] text-dark lowercase">
            <span className="block overflow-hidden py-0.5">
              <motion.span variants={lineVariants} className="block">
                what
              </motion.span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <motion.span variants={lineVariants} className="block text-brand-purple">
                we do
              </motion.span>
            </span>
            <span className="block overflow-hidden py-0.5">
              <motion.span variants={lineVariants} className="block">
                together
              </motion.span>
            </span>
          </h1>
        </motion.div>

        {/* Right Side Column - Services List */}
        <motion.div
          className="col-span-5 flex flex-col justify-center space-y-[1.6vw] md:space-y-5 text-left z-10 pl-2 lg:pl-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.35,
              }
            }
          }}
        >
          {/* Glowing background blob behind the list */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-brand-purple to-brand-accent2 opacity-20 blur-[65px] animate-pulse-slow pointer-events-none -z-10" />

          {[
            "Shoots",
            "Events & Communities",
            "Conceptual Campaigns",
            "Promotions & Research",
            "Social Educator",
            "SM Management",
          ].map((service, index) => (
            <motion.div
              key={service}
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
              className="flex items-center space-x-2 md:space-x-4 text-[3.2vw] md:text-lg md:text-xl text-muted font-medium hover:text-brand-purple transition-colors duration-200 cursor-pointer group"
            >
              <span className="font-mono text-[2.3vw] md:text-xs md:text-sm text-brand-purple/50 group-hover:text-brand-purple transition-colors duration-200">
                {`0${index + 1}.`}
              </span>
              <span>{service}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
