"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";
import { Zap } from "lucide-react";

import useMounted from "@/hooks/useMounted";

export const BannerFinTech = () => {
  const mounted = useMounted();
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each text element appearing
        delayChildren: 0.6, // Start text after panels slide in
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, 
    },
  };

  if (!mounted) return <div className="w-full min-h-[600px] bg-[#102A43]" />;

  return (
    <section className="relative w-full min-h-[600px] md:h-[85vh] overflow-hidden font-sans flex items-center bg-[#102A43]" suppressHydrationWarning>
      
      {/* 1. BACKGROUND IMAGE - Subtle scale on load */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496899/cfs_assets/landingpage1.png"
          alt="Crossover Fintech Support"
          className="w-full h-full object-cover object-right md:object-[85%_center]"
          onError={(e) => { e.target.src = '/landing page.webp'; }} // Fallback if Webpack cache miss
        />
        {/* Ambient shadow just to ensure nothing gets fully washed out */}
        <div className="absolute inset-0 bg-black/10"></div>
      </motion.div>

      {/* 2. GEOMETRIC ARCHITECTURE (Matches brand's sharp styles) */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-hidden">
        
        {/* Bold Orange Slash (Slides in first) */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
          className="absolute top-0 left-0 h-[120%] w-[120%] md:w-[70%] lg:w-[65%] bg-orange-500 z-10 origin-top-left"
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
        ></motion.div>

        {/* Primary Deep Blue Polygon (Slides in slightly after) encapsulating text */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 h-[120%] w-[118%] md:w-[68%] lg:w-[62%] bg-[#102A43] z-20 origin-top-left shadow-[30px_0_50px_rgba(0,0,0,0.7)] border-r-4 border-white/5"
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
        ></motion.div>

      </div>

      {/* 3. HERO CONTENT */}
      <div className="relative w-full z-30 container mx-auto px-6 md:px-10 lg:px-8 text-white">
        <motion.div
          className="max-w-full md:max-w-lg lg:max-w-xl"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-5 py-2 mb-8"
          >
            {/* Geometric animated square indicator */}
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/50 rotate-45">
               <div className="w-2 h-2 bg-orange-500 rounded-sm animate-ping absolute"></div>
               <div className="w-2 h-2 bg-orange-500 rounded-sm"></div>
            </div>
            <span className="text-xs md:text-sm font-black tracking-[0.1em] text-orange-400 uppercase pt-1 border-b-2 border-orange-500/30 pb-1">
              Software Engineering & Digital Transformation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-[40px] md:text-[50px] lg:text-[48px] xl:text-[56px] font-black text-start leading-[1.2] md:leading-[1.1] mb-5 tracking-tight"
          >
            <span className="text-white block md:inline">Architecting Next-Gen </span>
            <br className="hidden md:block"/>
            <span className="text-orange-500">
              Digital Ecosystems.
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-base md:text-base lg:text-lg text-gray-300 font-light leading-relaxed mb-8 w-[95%] md:max-w-[450px] lg:max-w-[550px] text-start border-l-4 border-orange-500/50 pl-5"
          >
            We provide custom software engineering, scalable cloud infrastructure, and enterprise-grade digital systems designed to accelerate your technical growth.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Link 
              href="/services" 
              className="group relative overflow-hidden flex items-center justify-center bg-orange-500 text-white font-black text-base md:text-lg px-8 py-4 rounded-xl shadow-[0_10px_30px_rgba(255,107,0,0.3)] transition-all duration-300 hover:-translate-y-1 active:scale-95 border-b-4 border-orange-700 hover:border-orange-600"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              <span className="relative z-10 flex items-center">
                 Explore Services
                 <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            
            <Link 
              href="/contact-us" 
              className="flex items-center justify-center bg-[#0a1a2a] border border-white/10 text-white font-bold text-base md:text-lg px-8 py-4 rounded-xl hover:bg-white hover:text-[#102A43] transition-all duration-300 active:scale-95 shadow-lg group"
            >
              <Zap className="mr-3 w-5 h-5 text-orange-500 group-hover:text-[#102A43] transition-colors" />
              Get Consultation
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
