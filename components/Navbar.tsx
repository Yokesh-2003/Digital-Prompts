"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface MegaMenuLink {
  label: string;
  isPill: boolean;
  href: string;
}

interface MegaMenuColumn {
  title: string;
  links: MegaMenuLink[];
}

interface MegaMenuData {
  [key: string]: {
    giantText: string;
    columns: MegaMenuColumn[];
  };
}

const NAV_ITEMS = [
  { name: "Home", href: "#home", hasDropdown: false },
  { name: "About", href: "#about", hasDropdown: true },
  { name: "Services", href: "#services", hasDropdown: true },
  { name: "Work", href: "#work", hasDropdown: true },
];

const MEGA_MENU_CONTENT: MegaMenuData = {
  About: {
    giantText: "ABOUT",
    columns: [
      {
        title: "OUR STORY",
        links: [
          { label: "WHO WE ARE", isPill: true, href: "#about" },
          { label: "OUR VALUES", isPill: true, href: "#values" },
          { label: "ABOUT THE FOUNDERS", isPill: false, href: "#founders" },
        ],
      },
      {
        title: "THE COMPANY",
        links: [
          { label: "CAREERS", isPill: true, href: "#careers" },
        ],
      },
    ],
  },
  Services: {
    giantText: "SERVICES",
    columns: [
      {
        title: "WHAT WE DO",
        links: [
          { label: "WEB DESIGN", isPill: true, href: "#services" },
          { label: "BRANDING", isPill: true, href: "#branding" },
          { label: "CREATIVE DEV", isPill: false, href: "#dev" },
        ],
      },
      {
        title: "PROCESS",
        links: [
          { label: "OUR METHOD", isPill: true, href: "#method" },
        ],
      },
    ],
  },
  Work: {
    giantText: "WORK",
    columns: [
      {
        title: "PROJECTS",
        links: [
          { label: "CASE STUDIES", isPill: true, href: "#work" },
          { label: "SHOWREEL", isPill: true, href: "#showreel" },
          { label: "ARCHIVE", isPill: false, href: "#archive" },
        ],
      },
      {
        title: "RECOGNITION",
        links: [
          { label: "AWARDS", isPill: true, href: "#awards" },
        ],
      },
    ],
  },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndexStandard, setHoveredIndexStandard] = useState<number | null>(null);
  const [hoveredIndexFloating, setHoveredIndexFloating] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      setMobileMenuOpen(false); // Close mobile dropdown on scroll to avoid alignment jumps
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnterLink = (itemName: string, hasDropdown: boolean) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (hasDropdown) {
      setActiveMegaMenu(itemName);
    } else {
      setActiveMegaMenu(null);
    }
  };

  const handleMouseLeaveLink = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  const handleMouseEnterPanel = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseLeavePanel = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  };

  return (
    <>
      {/* 1. STANDARD NAVBAR (sits absolute at the top of the page) */}
      <div className="absolute top-0 left-0 right-0 w-full z-50 flex justify-center py-6 px-6 md:px-12 lg:px-24">
        <div className="w-full max-w-7xl flex items-center justify-between py-4 border-b border-dark/5 bg-transparent relative">
          {/* Logo with image & title (Lowered text further for alignment) */}
          <Link href="/" className="flex items-center space-x-3.5 group z-50" onClick={() => { setActiveMegaMenu(null); setMobileMenuOpen(false); }}>
            <img 
              src="/images/logo.png" 
              alt="Digital Prompts Logo" 
              className="h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              draggable={false}
            />
            <span className="font-heading text-xl md:text-2xl tracking-wider text-brand-purple transition-all duration-300 transform translate-y-[9px]">
              DIGITAL PROMPTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 z-50 absolute left-1/2 transform -translate-x-1/2">
            {NAV_ITEMS.map((item, idx) => {
              const isMenuOpen = activeMegaMenu === item.name;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onMouseEnter={() => {
                    setHoveredIndexStandard(idx);
                    handleMouseEnterLink(item.name, item.hasDropdown);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndexStandard(null);
                    handleMouseLeaveLink();
                  }}
                  className="relative py-2 text-sm font-bold text-muted transition-colors duration-300 hover:text-brand-purple"
                >
                  <span className={isMenuOpen ? "text-brand-purple" : ""}>{item.name}</span>
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple transition-transform duration-300 ease-out origin-center ${
                      hoveredIndexStandard === idx || isMenuOpen ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button (Pearl Button Design) */}
          <div className="hidden md:flex items-center z-50">
            <Link
              href="#contact"
              onClick={() => setActiveMegaMenu(null)}
              className="pearl-btn pearl-btn-standard z-50"
            >
              <div className="wrap">
                <p>
                  <span>✧</span>
                  <span>✦</span>
                  Contact
                </p>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 -mr-2 text-dark md:hidden hover:text-brand-purple transition-colors duration-300 z-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen && !isScrolled ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Dropdown Panel for Standard Navbar (Solid White, Rounded All Corners) */}
          <AnimatePresence>
            {mobileMenuOpen && !isScrolled && (
              <motion.div
                className="absolute top-[calc(100%+12px)] left-0 right-0 w-full bg-white border border-brand-purple/10 rounded-[28px] shadow-[0_20px_40px_rgba(91,46,255,0.08)] py-8 px-6 flex flex-col space-y-6 md:hidden z-40 overflow-hidden"
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-heading text-2xl text-dark hover:text-brand-purple transition-colors duration-300 py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="pt-4 flex justify-center">
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="pearl-btn pearl-btn-standard"
                  >
                    <div className="wrap">
                      <p>
                        <span>✧</span>
                        <span>✦</span>
                        Contact
                      </p>
                    </div>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* 2. FLOATING GLASS NAVBAR (appears on scroll, slides down) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.header
            className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full pointer-events-none"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="w-[88%] max-w-7xl flex items-center justify-between px-6 py-3 rounded-[9999px] bg-white/85 backdrop-blur-md border border-brand-purple/15 shadow-[0_8px_30px_rgb(91,46,255,0.06)] pointer-events-auto relative">
              {/* Logo with image & title (Lowered text for alignment) */}
              <Link href="/" className="flex items-center space-x-2.5 group z-50" onClick={() => { setActiveMegaMenu(null); setMobileMenuOpen(false); }}>
                <img 
                  src="/images/logo.png" 
                  alt="Digital Prompts Logo" 
                  className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  draggable={false}
                />
                <span className="font-heading text-lg md:text-xl tracking-wider text-brand-purple transition-all duration-300 transform translate-y-[4px]">
                  DIGITAL PROMPTS
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8 z-50 absolute left-1/2 transform -translate-x-1/2">
                {NAV_ITEMS.map((item, idx) => {
                  const isMenuOpen = activeMegaMenu === item.name;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onMouseEnter={() => {
                        setHoveredIndexFloating(idx);
                        handleMouseEnterLink(item.name, item.hasDropdown);
                      }}
                      onMouseLeave={() => {
                        setHoveredIndexFloating(null);
                        handleMouseLeaveLink();
                      }}
                      className="relative py-2 text-xs font-bold text-muted transition-colors duration-300 hover:text-brand-purple"
                    >
                      <span className={isMenuOpen ? "text-brand-purple" : ""}>{item.name}</span>
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand-purple transition-transform duration-300 ease-out origin-center ${
                          hoveredIndexFloating === idx || isMenuOpen ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* CTA Button (Pearl Button Design) */}
              <div className="hidden md:flex items-center z-50">
                <Link
                  href="#contact"
                  onClick={() => setActiveMegaMenu(null)}
                  className="pearl-btn pearl-btn-floating"
                >
                  <div className="wrap">
                    <p>
                      <span>✧</span>
                      <span>✦</span>
                      Contact
                    </p>
                  </div>
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -mr-2 text-dark md:hidden hover:text-brand-purple transition-colors duration-300 z-50"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen && isScrolled ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Mobile Dropdown Panel for Floating Navbar (Solid White, No Blur) */}
              <AnimatePresence>
                {mobileMenuOpen && isScrolled && (
                  <motion.div
                    className="absolute top-[calc(100%+12px)] left-0 right-0 w-full bg-white border border-brand-purple/15 rounded-[24px] shadow-[0_20px_45px_rgba(91,46,255,0.1)] py-6 px-6 flex flex-col space-y-4 md:hidden z-40 overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      {NAV_ITEMS.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="font-heading text-xl text-dark hover:text-brand-purple transition-colors duration-300 py-1"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="pt-2 flex justify-center">
                      <Link
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="pearl-btn pearl-btn-standard"
                      >
                        <div className="wrap">
                          <p>
                            <span>✧</span>
                            <span>✦</span>
                            Contact
                          </p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* 3. DROPDOWN MEGA MENU PANEL (Fixed fullscreen overlay that slides down from top) */}
      <AnimatePresence>
        {activeMegaMenu && MEGA_MENU_CONTENT[activeMegaMenu] && (
          <motion.div
            className="fixed inset-x-0 top-0 w-full bg-gradient-to-br from-white/95 via-white/98 to-brand-accentLight/40 backdrop-blur-xl border-b border-brand-purple/15 shadow-[0_30px_70px_rgba(91,46,255,0.08)] z-40 pt-36 pb-28 md:pb-36 px-6 md:px-12 lg:px-24 flex justify-center min-h-[500px] md:min-h-[580px] overflow-hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={handleMouseEnterPanel}
            onMouseLeave={handleMouseLeavePanel}
          >
            {/* Entire Panel Background Purple Design */}
            <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
              {/* Subtle Grid Overlay */}
              <div 
                className="absolute inset-0 opacity-[0.4]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(91, 46, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(91, 46, 255, 0.03) 1px, transparent 1px)
                  `,
                  backgroundSize: "30px 30px",
                }}
              />
              {/* Glowing Purple Blob Bottom Right */}
              <div className="absolute -right-24 -bottom-24 w-[450px] h-[450px] rounded-full bg-brand-accentLight/60 blur-[100px]" />
              {/* Glowing Purple Blob Top Center */}
              <div className="absolute top-10 left-[40%] w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-[85px]" />
              {/* Floating Curved Vector Line */}
              <svg className="absolute inset-0 w-full h-full stroke-brand-purple/10 fill-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-50,250 C300,100 600,450 1200,200 C1500,100 1800,300 2000,150" strokeWidth="1" />
                <path d="M100,100 Q400,300 800,150 T1600,350" strokeWidth="0.8" strokeDasharray="3 3" />
              </svg>
            </div>

            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
              
              {/* Giant Text Label on Left with Decorative Background Art */}
              <div className="md:col-span-5 flex items-center justify-start select-none relative py-16 overflow-visible">
                
                {/* Background Design Behind Text */}
                <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
                  {/* Glowing Blur Blob */}
                  <div className="absolute w-[260px] h-[260px] rounded-full bg-brand-purple/10 blur-[80px]" />
                  
                  {/* Concentric Rotating Wireframe Rings */}
                  <motion.svg
                    className="absolute w-[360px] h-[360px] text-brand-purple/10"
                    viewBox="0 0 200 200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
                    <circle cx="100" cy="100" r="65" />
                    <circle cx="100" cy="100" r="40" strokeDasharray="6 3" />
                  </motion.svg>
                  
                  {/* Giant Faded Outlined Watermark Text */}
                  <div 
                    className="absolute -bottom-12 -left-12 text-[10rem] font-heading select-none uppercase tracking-widest opacity-20 transform -rotate-6"
                    style={{
                      WebkitTextStroke: "1px rgba(91, 46, 255, 0.15)",
                      color: "transparent",
                    }}
                  >
                    {MEGA_MENU_CONTENT[activeMegaMenu].giantText}
                  </div>
                </div>

                <motion.h2 
                  className="font-heading text-6xl sm:text-7xl lg:text-9xl text-dark tracking-wide leading-none z-10"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08, duration: 0.35, ease: "easeOut" }}
                >
                  {MEGA_MENU_CONTENT[activeMegaMenu].giantText}
                </motion.h2>
              </div>

              {/* Dynamic Columns on Right */}
              <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                {MEGA_MENU_CONTENT[activeMegaMenu].columns.map((column, colIdx) => (
                  <motion.div 
                    key={column.title} 
                    className="flex flex-col space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + colIdx * 0.06, duration: 0.3, ease: "easeOut" }}
                  >
                    <h3 className="font-heading text-xl text-dark/40 tracking-wider">
                      {column.title}
                    </h3>
                    <div className="flex flex-col items-start space-y-3.5">
                      {column.links.map((link) => {
                        if (link.isPill) {
                          return (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setActiveMegaMenu(null)}
                              className="relative group p-[1.5px] rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                            >
                              {/* Continuous running gradient border beam */}
                              <div className="absolute inset-[-400%] bg-[conic-gradient(from_0deg,transparent_50%,#5B2EFF_80%,#7A54FF_95%,#5B2EFF_100%)] animate-[spin_3s_linear_infinite]" />
                              
                              {/* Inner Button Mask (Set to 100% opaque to fully mask center) */}
                              <div className="relative px-5 py-2.5 rounded-full bg-white text-dark group-hover:bg-brand-accentLight group-hover:text-brand-purple text-[10px] font-bold tracking-wider transition-colors duration-300 z-10 w-full text-center">
                                {link.label}
                              </div>
                            </Link>
                          );
                        }
                        return (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setActiveMegaMenu(null)}
                            className="group flex items-center space-x-1.5 text-xs font-semibold text-muted hover:text-brand-purple tracking-wider transition-colors duration-300 pl-1"
                          >
                            {/* Slide-in and Scale indicator dot */}
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple scale-0 group-hover:scale-100 transition-transform duration-300 ease-out" />
                            <span>{link.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Close Button on Far Right */}
              <div className="md:col-span-2 flex justify-end items-center">
                <motion.button
                  onClick={() => setActiveMegaMenu(null)}
                  className="w-12 h-12 rounded-full border border-brand-purple/20 hover:bg-brand-purple/5 flex items-center justify-center text-brand-purple transition-all duration-300 group"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.18, duration: 0.25 }}
                  aria-label="Close submenu"
                >
                  <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
                </motion.button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
