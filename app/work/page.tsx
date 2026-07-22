"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BannerCTA from "@/components/BannerCTA";
import { motion } from "framer-motion";
import { Camera, Sparkles, TrendingUp, Share2, GraduationCap, Target, Users, Code } from "lucide-react";

const WORK_SERVICES = [
  {
    id: "shoots",
    title: "Shoots",
    subtitle: "Commercial Photography & Cinematic Direction",
    description: "High-end commercial photography, brand visual aesthetics, personal shoots, and cinematic video production. We craft visual stories with intent, emotion, and purpose.",
    icon: Camera,
    gradient: "from-purple-600 via-indigo-700 to-blue-800",
  },
  {
    id: "conceptual-campaigns",
    title: "Conceptual Campaigns",
    subtitle: "Psychology-Driven Campaign Storytelling",
    description: "End-to-end creative campaign strategy that bridges psychology and marketing. We build high-impact campaigns that evoke curiosity and drive deep audience connection.",
    icon: Sparkles,
    gradient: "from-brand-purple via-purple-700 to-indigo-900",
  },
  {
    id: "promotions-research",
    title: "Promotions & Research",
    subtitle: "Market Research & Strategic Promotional Rollouts",
    description: "In-depth consumer research, competitor analysis, and targeted promotional strategies to position your brand effectively for maximum market penetration and ROI.",
    icon: TrendingUp,
    gradient: "from-blue-600 via-indigo-700 to-brand-purple",
  },
  {
    id: "sm-management",
    title: "SM Management",
    subtitle: "End-to-End Social Media Management & Growth",
    description: "Comprehensive social media strategy, content curation, visual feed design, and community management across platforms to transform your social presence into a growth engine.",
    icon: Share2,
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
  },
  {
    id: "social-educator",
    title: "Social Educator",
    subtitle: "Thought Leadership & Educational Content",
    description: "Crafting value-driven educational content and social impact initiatives to translate complex brand concepts into engaging knowledge that positions your brand as an authority.",
    icon: GraduationCap,
    gradient: "from-[#061245] via-indigo-800 to-brand-purple",
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    subtitle: "Data-Backed Paid Acquisition & ROAS Optimization",
    description: "Precision-targeted paid campaigns engineered for conversions utilizing A/B testing, funnel optimization, and creative ad analytics to deliver solid revenue and scalable ROAS.",
    icon: Target,
    gradient: "from-[#3b3bf7] via-[#17178a] to-[#060836]",
  },
  {
    id: "events-communities",
    title: "Events & Communities",
    subtitle: "Offline Conclaves & Brand Community Building",
    description: "Designing memorable brand launch events, conclaves, and community-driven initiatives to connect brands directly with vibrant communities for long-term advocacy.",
    icon: Users,
    gradient: "from-purple-700 via-brand-purple to-indigo-900",
  },
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "High-Performance Modern Web Applications & UI/UX",
    description: "Building ultra-fast, responsive web applications, modern interactive digital platforms, and custom high-converting brand landing pages built for scale.",
    icon: Code,
    gradient: "from-blue-600 via-indigo-800 to-purple-800",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden relative select-none">
      <Navbar />

      {/* TOP SECTION: WHAT WE DO TOGETHER (HONEYCOMB CLUSTER) */}
      <section className="pt-48 sm:pt-56 pb-16 sm:pb-32 px-3 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-b from-[#f4f4f8] via-[#ececf1] to-[#e4e6f2] border-b border-gray-300/60 relative overflow-hidden">
        
        {/* 3D AMBIENT BACKGROUND ELEMENTS */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
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
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full bg-brand-purple/10 blur-[130px]" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 sm:mb-16 text-center sm:text-left border-b border-gray-300/80 pb-4 sm:pb-6"
          >
            <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic text-[#061245] tracking-tight font-normal drop-shadow-sm">
              What we do <span className="font-heading not-italic uppercase text-brand-purple font-bold tracking-wider drop-shadow-[0_4px_20px_rgba(91,46,255,0.25)]">TOGETHER</span>
            </h1>
          </motion.div>

          {/* 8 Hexagonal 3D Honeycomb Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-6 justify-center items-center">
            {WORK_SERVICES.map((serv, idx) => {
              const IconComp = serv.icon;
              return (
                <motion.a
                  key={serv.id}
                  href={`#${serv.id}`}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className={`relative p-3.5 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${serv.gradient} text-white shadow-[0_8px_25px_rgba(91,46,255,0.2)] hover:shadow-[0_20px_45px_rgba(91,46,255,0.35)] transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer border border-white/30 group min-h-[120px] sm:min-h-[170px]`}
                >
                  <IconComp className="w-5 h-5 sm:w-9 sm:h-9 text-white/90 mb-1.5 sm:mb-2.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-heading text-xs sm:text-lg lg:text-xl tracking-wider leading-tight text-white uppercase font-bold drop-shadow-sm">
                    {serv.title}
                  </span>
                </motion.a>
              );
            })}
          </div>

        </div>
      </section>

      {/* MULTI-COLUMN CARDS GRID (CLEAN CARDS WITHOUT REPEATED BUTTONS) */}
      <section className="py-12 sm:py-24 px-2.5 sm:px-8 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 items-stretch">
            {WORK_SERVICES.map((serv, idx) => {
              const IconComp = serv.icon;
              return (
                <motion.div
                  key={serv.id}
                  id={serv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 2) * 0.06 }}
                  className="bg-gradient-to-b from-[#f9f8fc] to-[#f2effa] rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-brand-purple/20 shadow-[0_6px_25px_rgba(91,46,255,0.05)] hover:shadow-[0_15px_40px_rgba(91,46,255,0.15)] transition-all duration-300 flex flex-col justify-between space-y-4 group"
                >
                  {/* Card Top Row */}
                  <div className="flex items-center justify-between border-b border-brand-purple/15 pb-3">
                    <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${serv.gradient} flex items-center justify-center text-white shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComp className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <span className="text-base sm:text-2xl font-serif italic text-brand-purple/40 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-sm sm:text-xl font-heading text-dark tracking-wide uppercase leading-tight group-hover:text-brand-purple transition-colors duration-200">
                      {serv.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs font-semibold text-brand-purple tracking-wide mt-1 leading-snug">
                      {serv.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[10.5px] sm:text-sm text-gray-700 leading-normal sm:leading-relaxed font-normal text-justify flex-grow">
                    {serv.description}
                  </p>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      <BannerCTA />
      <Footer />
    </main>
  );
}
