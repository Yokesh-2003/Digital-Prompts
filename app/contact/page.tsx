"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Phone, Mail, MapPin, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden relative select-none">
      <Navbar />

      {/* HERO SECTION & CONTACT FORM */}
      <section className="pt-44 sm:pt-52 pb-24 sm:pb-32 px-4 sm:px-8 md:px-12 lg:px-20 bg-gradient-to-b from-[#f4f4f8] via-[#ececf2] to-[#e4e6f4] border-b border-gray-300/60 relative overflow-hidden">
        
        {/* 3D AMBIENT BACKGROUND ELEMENTS */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          
          {/* Isometric Grid Overlay */}
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

          {/* Paper Texture Overlay */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Floating 3D Ambient Glass Orbs */}
          <motion.div
            animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-16 left-12 w-56 h-56 rounded-full bg-gradient-to-tr from-brand-purple/20 via-pink-400/15 to-white/40 backdrop-blur-md border border-white/60 shadow-[0_20px_50px_rgba(91,46,255,0.15)]"
          />

          <motion.div
            animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-16 right-16 w-64 h-64 rounded-full bg-gradient-to-br from-blue-600/20 via-brand-purple/20 to-white/30 backdrop-blur-md border border-white/50 shadow-[0_25px_60px_rgba(0,46,255,0.15)]"
          />

          {/* Glowing Radial Blobs */}
          <div className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full bg-brand-purple/10 blur-[140px]" />
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: TITLE & CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-center text-left space-y-8"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/20 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
              <span className="text-xs font-bold tracking-widest text-brand-purple uppercase">Let's Connect</span>
            </div>

            <div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading text-dark tracking-wide leading-none mb-4">
                GET IN TOUCH
              </h1>
              <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                Have a campaign in mind or looking to scale your brand? Drop us a message and our strategy team will respond within 24 hours.
              </p>
            </div>

            {/* Quick Contact Info Cards */}
            <div className="space-y-4 pt-2">
              
              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Email Us</span>
                  <span className="text-sm sm:text-base font-semibold text-dark">hello@digitalprompts.in</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Call Us</span>
                  <span className="text-sm sm:text-base font-semibold text-dark">+91 98765 43210</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/80 shadow-sm flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Location</span>
                  <span className="text-sm sm:text-base font-semibold text-dark">Chennai, Tamil Nadu, India</span>
                </div>
              </div>

            </div>

          </motion.div>


          {/* RIGHT COLUMN: INTERACTIVE FORM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-brand-purple/20 shadow-[0_20px_50px_rgba(91,46,255,0.12)] relative overflow-hidden">
              
              {/* Form Glow Effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-purple/10 blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-16 px-4 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center text-emerald-600 shadow-lg">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-heading text-dark uppercase tracking-wide">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-gray-600 max-w-md font-normal leading-relaxed">
                      Thank you for reaching out to Digital Prompts. Our strategy team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", mobile: "", email: "", message: "" });
                      }}
                      className="mt-4 px-6 py-2.5 rounded-full bg-brand-purple text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-purple/90 transition-colors shadow-md"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading text-dark uppercase tracking-wide mb-1">
                        Send Us A Message
                      </h3>
                      <p className="text-xs text-gray-500 font-normal">
                        Fill out the details below and we'll connect with you.
                      </p>
                    </div>

                    <div className="space-y-4">
                      
                      {/* Name Field */}
                      <div>
                        <label className="block text-xs font-bold text-dark uppercase tracking-wider mb-1.5">
                          Name <span className="text-brand-purple">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-gray-50/80 border border-gray-200 text-dark placeholder-gray-400 text-sm focus:outline-none focus:border-brand-purple focus:bg-white focus:ring-2 focus:ring-brand-purple/20 transition-all"
                        />
                      </div>

                      {/* Mobile Number & Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Mobile Number */}
                        <div>
                          <label className="block text-xs font-bold text-dark uppercase tracking-wider mb-1.5">
                            Mobile Number <span className="text-brand-purple">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-gray-50/80 border border-gray-200 text-dark placeholder-gray-400 text-sm focus:outline-none focus:border-brand-purple focus:bg-white focus:ring-2 focus:ring-brand-purple/20 transition-all"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold text-dark uppercase tracking-wider mb-1.5">
                            Email <span className="text-brand-purple">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="yourname@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-gray-50/80 border border-gray-200 text-dark placeholder-gray-400 text-sm focus:outline-none focus:border-brand-purple focus:bg-white focus:ring-2 focus:ring-brand-purple/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label className="block text-xs font-bold text-dark uppercase tracking-wider mb-1.5">
                          Type your message <span className="text-brand-purple">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell us about your brand, goals, or requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-gray-50/80 border border-gray-200 text-dark placeholder-gray-400 text-sm focus:outline-none focus:border-brand-purple focus:bg-white focus:ring-2 focus:ring-brand-purple/20 transition-all resize-none"
                        />
                      </div>

                    </div>

                    {/* Pearl Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="pearl-btn pearl-btn-standard w-full flex justify-center disabled:opacity-50"
                      >
                        <div className="wrap">
                          <p className="flex items-center justify-center space-x-2">
                            <span>✧</span>
                            <span>✦</span>
                            <span>{isSubmitting ? "Sending..." : "Submit Message"}</span>
                            <Send className="w-4 h-4 ml-1 inline-block" />
                          </p>
                        </div>
                      </button>
                    </div>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
