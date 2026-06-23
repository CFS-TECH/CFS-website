"use client";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import FloatingIconsSection from "./FloatingIconsSection";
import Link from "next/link";

const serviceData = {
  title: "IT, Finance & BPO Solutions",
  headline: "Empowering Businesses with Smart Infrastructure",
  description:
    "From scalable MERN stack development to secure financial support and 24/7 BPO services, we provide the backbone for your company's growth.",
  tags: ["Managed IT", "Financial Services", "BPO Solutions"],
};

export const ServicesBanner = () => {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* --- DESKTOP HERO PANEL --- */}
      <section className="hidden md:flex w-full md:h-[80vh] md:min-h-[600px] relative overflow-hidden font-sans items-center justify-center bg-[#102a43]" suppressHydrationWarning={true}>
        {/* Background Image */}
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775497014/cfs_assets/tech.jpg"
          alt="Kraviona Services"
          className="absolute inset-0 brightness-[20%] w-full h-full object-cover"
        />

        {/* Shapes & Overlays */}
        <div className="absolute inset-0 w-full h-full">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 left-0 h-full w-[85%] lg:w-[65%] bg-[#ff6b00] z-0 opacity-20"
            style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="absolute top-0 left-0 h-full w-[80%] lg:w-[60%] bg-[#102a43] z-10"
            style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
          />
        </div>

        {/* Content Area */}
        <div className="absolute inset-0 w-full h-full z-30 flex items-center">
          <div className="container mx-auto px-12 lg:px-24 h-full flex flex-row items-center justify-between">
            {/* Left Text Content */}
            <div className="w-1/2 flex flex-col justify-center h-full text-white z-40">
              <motion.div
                className="max-w-xl lg:max-w-3xl"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {/* Tag Badges */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6">
                  {serviceData.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-bold tracking-widest bg-orange-500 border border-orange-500 px-3 py-1 rounded-full">
                      {tag.toUpperCase()}
                    </span>
                  ))}
                </motion.div>

                {/* Headline */}
                <motion.h1 variants={itemVariants} className="text-5xl lg:text-6xl font-extrabold text-start leading-[1.15] mb-6">
                  Empowering <br /> <span className="text-orange-500 animate-pulse">Businesses</span> with <br /> Smart <span className="text-[#fd741e]">Infrastructure</span>
                </motion.h1>

                {/* Paragraph */}
                <motion.p variants={itemVariants} className="text-lg text-gray-200 mb-10 max-w-xl text-start leading-relaxed">
                  {serviceData.description}
                </motion.p>

                {/* CTA Button */}
                <motion.div variants={itemVariants} className="flex items-start">
                  <Link href={"/contact-us"} className="group relative overflow-hidden flex items-center bg-[#ff6b00] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:bg-[#e65c00] shadow-xl">
                      <span className="relative z-10 flex items-center gap-3 text-base">
                        Start Your Project <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Floating Icons Area */}
            <div className="w-1/2 flex items-center justify-end h-full">
              <div className="w-[400px] lg:w-[500px] aspect-square relative">
                <FloatingIconsSection />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MOBILE HERO PANEL --- */}
      <section className="block md:hidden w-full relative overflow-hidden font-sans bg-[#0d2238] py-16 px-6" suppressHydrationWarning={true}>
        {/* Mobile Background Image with subtle scale */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775497014/cfs_assets/tech.jpg"
            alt="Kraviona Services mobile"
            className="w-full h-full object-cover brightness-[15%]"
          />
          {/* Subtle tech gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#102a43]/90 via-[#0d2238]/95 to-[#080f1a]"></div>
          {/* Glowing Ambient Orb */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-orange-500/10 blur-[80px]"></div>
        </div>

        {/* Content Area */}
        <div className="relative z-10 flex flex-col gap-6 text-white max-w-md mx-auto">
          {/* Tag Badges */}
          <div className="flex flex-wrap gap-2">
            {serviceData.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-bold tracking-widest bg-white/5 border border-white/10 text-orange-400 px-3 py-1.5 rounded-full uppercase backdrop-blur-md">
                {tag}
              </span>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-[32px] font-black leading-[1.25] text-start tracking-tight">
            Empowering <br />
            <span className="text-orange-500 animate-pulse">Businesses</span> with <br />
            Smart <span className="text-orange-400">Infrastructure</span>
          </h1>

          {/* Paragraph */}
          <p className="text-sm text-slate-300 font-light leading-relaxed text-start border-l-2 border-orange-500/50 pl-4">
            {serviceData.description}
          </p>

          {/* CTA Button */}
          <div className="flex pt-2">
            <Link href={"/contact-us"} className="w-full flex items-center justify-center bg-orange-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all text-sm tracking-widest uppercase">
              Start Your Project <FaArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};