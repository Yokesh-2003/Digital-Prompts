"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

interface FounderInfo {
  name: string;
  roles: string;
}

interface MegaMenuLink {
  label: string;
  isPill: boolean;
  href: string;
  founders?: FounderInfo[];
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
  { name: "Home", href: "/", hasDropdown: false },
  { name: "About", href: "#", hasDropdown: true },
  { name: "Services", href: "#", hasDropdown: true },
  { name: "Work", href: "#", hasDropdown: true },
];

const MEGA_MENU_CONTENT: Record<string, { giantText: string; columns: MegaMenuColumn[] }> = {
  About: {
    giantText: "ABOUT",
    columns: [
      {
        title: "OUR STORY",
        links: [
          { label: "WHO WE ARE", isPill: true, href: "/about" },
        ],
      },
      {
        title: "FOUNDERS",
        links: [
          {
            label: "ABOUT THE FOUNDERS",
            isPill: false,
            href: "/#dhivya",
            founders: [
              {
                name: "DhivyaKrishna",
                roles: "Campaign Strategist • Brand Storyteller • Psychology-Driven Marketer",
              },
              {
                name: "PrabuSaravanan",
                roles: "Creative Director • Video Editor • Concept Analyst • Campaign Strategist",
              },
            ],
          },
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
          { label: "OUR BIGGEST PLUS FACTOR", isPill: true, href: "/services" },
        ],
      },
    ],
  },
  Work: {
    giantText: "WORK",
    columns: [
      {
        title: "OUR WORK",
        links: [
          { label: "OUR WORK", isPill: true, href: "/work" },
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
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
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
                  onClick={(e) => {
                    if (item.hasDropdown) e.preventDefault();
                  }}
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
              href="/contact"
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
              {/* Logo with image & title */}
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
                      onClick={(e) => {
                        if (item.hasDropdown) e.preventDefault();
                      }}
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
                  href="/contact"
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
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* MOBILE SIDE-DRAWER OVERLAY (POPS FROM SIDE) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Slide-in Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 md:hidden shadow-2xl flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
            >
              {/* Drawer Top Header */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                  <Link 
                    href="/" 
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-2.5"
                  >
                    <img src="/images/logo.png" alt="Logo" className="h-8 w-auto object-contain" />
                    <span className="font-heading text-lg tracking-wider text-brand-purple">
                      DIGITAL PROMPTS
                    </span>
                  </Link>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 -mr-2 text-dark hover:text-brand-purple transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Navigation Items List */}
                <div className="flex flex-col space-y-6 pt-8">
                  {NAV_ITEMS.map((item) => (
                    <div key={item.name} className="flex flex-col text-left border-b border-gray-100/60 pb-4">
                      <div className="flex items-center justify-between w-full">
                        {item.hasDropdown ? (
                          <button
                            onClick={() => {
                              if (item.name === "About") setMobileAboutOpen(!mobileAboutOpen);
                              if (item.name === "Services") setMobileServicesOpen(!mobileServicesOpen);
                              if (item.name === "Work") setMobileWorkOpen(!mobileWorkOpen);
                            }}
                            className="font-heading text-2xl text-dark hover:text-brand-purple transition-colors uppercase tracking-wider text-left"
                          >
                            {item.name}
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-heading text-2xl text-dark hover:text-brand-purple transition-colors uppercase tracking-wider"
                          >
                            {item.name}
                          </Link>
                        )}
                        {item.name === "About" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setMobileAboutOpen(!mobileAboutOpen);
                            }}
                            className="p-2 text-black hover:text-brand-purple transition-transform duration-200"
                            aria-label="Toggle About Submenu"
                          >
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileAboutOpen ? "rotate-180" : "rotate-0"}`} />
                          </button>
                        )}
                        {item.name === "Services" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setMobileServicesOpen(!mobileServicesOpen);
                            }}
                            className="p-2 text-black hover:text-brand-purple transition-transform duration-200"
                            aria-label="Toggle Services Submenu"
                          >
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : "rotate-0"}`} />
                          </button>
                        )}
                        {item.name === "Work" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setMobileWorkOpen(!mobileWorkOpen);
                            }}
                            className="p-2 text-black hover:text-brand-purple transition-transform duration-200"
                            aria-label="Toggle Work Submenu"
                          >
                            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileWorkOpen ? "rotate-180" : "rotate-0"}`} />
                          </button>
                        )}
                      </div>

                      {/* Submenu Item for About */}
                      {item.name === "About" && mobileAboutOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col pl-4 pt-3 space-y-2 border-l-2 border-brand-purple/30 my-2"
                        >
                          <Link
                            href="/about"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileAboutOpen(false);
                            }}
                            className="font-heading text-lg text-black hover:text-brand-purple transition-colors uppercase tracking-wider py-1"
                          >
                            WHO WE ARE
                          </Link>
                        </motion.div>
                      )}

                      {/* Submenu Item for Services */}
                      {item.name === "Services" && mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col pl-4 pt-3 space-y-2 border-l-2 border-brand-purple/30 my-2"
                        >
                          <Link
                            href="/services"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            className="font-heading text-base sm:text-lg text-black hover:text-brand-purple transition-colors uppercase tracking-wider py-1"
                          >
                            OUR BIGGEST PLUS FACTOR
                          </Link>
                        </motion.div>
                      )}

                      {/* Submenu Item for Work */}
                      {item.name === "Work" && mobileWorkOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col pl-4 pt-3 space-y-2 border-l-2 border-brand-purple/30 my-2"
                        >
                          <Link
                            href="/work"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileWorkOpen(false);
                            }}
                            className="font-heading text-lg text-black hover:text-brand-purple transition-colors uppercase tracking-wider py-1"
                          >
                            OUR WORK
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Contact Button */}
              <div className="pt-8 pb-4 flex justify-center">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="pearl-btn pearl-btn-standard w-full flex justify-center"
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
          </>
        )}
      </AnimatePresence>

      {/* 3. DROPDOWN MEGA MENU PANEL (Fixed fullscreen overlay that slides down from top) */}
      <AnimatePresence>
        {activeMegaMenu && MEGA_MENU_CONTENT[activeMegaMenu] && (
          <motion.div
            className="fixed inset-x-0 top-0 w-full bg-gradient-to-br from-white/95 via-[#f9f8fc]/98 to-brand-purple/10 backdrop-blur-2xl border-b border-brand-purple/20 shadow-[0_30px_90px_rgba(91,46,255,0.12)] z-40 pt-36 pb-16 px-6 md:px-12 lg:px-24 flex justify-center h-[460px] overflow-hidden"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={handleMouseEnterPanel}
            onMouseLeave={handleMouseLeavePanel}
          >
            {/* Background Art */}
            <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
              <div 
                className="absolute inset-0 opacity-[0.25]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(91, 46, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(91, 46, 255, 0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="absolute -right-20 -bottom-20 w-[450px] h-[450px] rounded-full bg-brand-purple/15 blur-[110px]" />
              <div className="absolute top-10 left-10 w-[350px] h-[350px] rounded-full bg-amber-400/10 blur-[100px]" />
            </div>

            <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
              
              {/* Giant Text Label on Left */}
              <div className="md:col-span-5 flex flex-col justify-center text-left relative">
                <span className="text-xs font-bold tracking-widest text-brand-purple uppercase mb-2">
                  Explore Digital Prompts
                </span>
                <motion.h2 
                  className="font-heading text-6xl sm:text-7xl lg:text-9xl text-dark tracking-wide leading-none drop-shadow-[0_4px_25px_rgba(91,46,255,0.15)]"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08, duration: 0.35, ease: "easeOut" }}
                >
                  {MEGA_MENU_CONTENT[activeMegaMenu].giantText}
                </motion.h2>
              </div>

              {/* Dynamic Columns on Right */}
              <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                {MEGA_MENU_CONTENT[activeMegaMenu].columns.map((column, colIdx) => (
                  <motion.div 
                    key={column.title} 
                    className="flex flex-col space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12 + colIdx * 0.06, duration: 0.3, ease: "easeOut" }}
                  >
                    <h3 className="font-heading text-lg text-brand-purple tracking-wider uppercase border-b border-brand-purple/20 pb-2">
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
                              className="relative group p-[1.5px] rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] w-full"
                            >
                              <div className="absolute inset-[-400%] bg-[conic-gradient(from_0deg,transparent_50%,#5B2EFF_80%,#7A54FF_95%,#5B2EFF_100%)] animate-[spin_3s_linear_infinite]" />
                              
                              <div className="relative px-6 py-3 rounded-full bg-white text-dark group-hover:bg-brand-purple group-hover:text-white font-heading text-base tracking-wider transition-colors duration-300 z-10 w-full text-center shadow-sm">
                                {link.label}
                              </div>
                            </Link>
                          );
                        }
                        return (
                          <div key={link.label} className="flex flex-col items-start space-y-2 w-full">
                            <Link
                              href={link.href}
                              onClick={() => setActiveMegaMenu(null)}
                              className="group flex items-center space-x-2 text-sm font-bold text-dark hover:text-brand-purple tracking-wider transition-colors duration-300"
                            >
                              <span className="w-2 h-2 rounded-full bg-brand-purple scale-0 group-hover:scale-100 transition-transform duration-300" />
                              <span>{link.label}</span>
                            </Link>

                            {link.founders && (
                              <div className="mt-1 flex flex-col space-y-3 w-full">
                                {link.founders.map((founder) => (
                                  <Link
                                    key={founder.name}
                                    href={founder.name.includes("Dhivya") ? "/about#dhivya-full" : "/about#prabu-full"}
                                    onClick={() => setActiveMegaMenu(null)}
                                    className="p-3.5 rounded-xl bg-white/90 border-l-4 border-brand-purple shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 flex flex-col space-y-1 w-full group cursor-pointer"
                                  >
                                    <span className="text-sm font-bold text-dark group-hover:text-brand-purple tracking-wide flex items-center justify-between">
                                      <span>{founder.name}</span>
                                      <span className="text-[10px] text-brand-purple font-semibold uppercase bg-brand-purple/10 px-2 py-0.5 rounded-full">Founder</span>
                                    </span>
                                    <p className="text-[11px] leading-relaxed text-gray-600 font-normal">
                                      {founder.roles}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Close Button on Far Right */}
              <div className="md:col-span-1 flex justify-end items-center">
                <motion.button
                  onClick={() => setActiveMegaMenu(null)}
                  className="w-12 h-12 rounded-full border border-brand-purple/30 bg-white hover:bg-brand-purple hover:text-white flex items-center justify-center text-brand-purple transition-all duration-300 shadow-md group"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
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
