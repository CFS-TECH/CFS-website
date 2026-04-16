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
    <section className="w-full min-h-[90vh] md:min-h-[600px] md:h-[80vh] relative overflow-hidden font-sans" suppressHydrationWarning={true}>
      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775497014/cfs_assets/tech.jpg"
        alt="Kraviona Services"
        className="absolute inset-0 brightness-[30%] md:brightness-[20%] w-full h-full object-cover"
      />

      {/* Shapes & Overlays */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 left-0 h-full w-full md:w-[85%] lg:w-[65%] bg-[#ff6b00] z-0 opacity-20"
          style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
        />
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="absolute top-0 left-0 h-full w-full md:w-[80%] lg:w-[60%] bg-[#102a43] z-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)" }}
        />
        {/* Mobile Overlay (Semi-transparent instead of solid black) */}
        <div className="absolute inset-0 bg-[#102a43]/80 z-20 md:hidden" />
      </div>

      {/* Content Area */}
      <div className="absolute inset-0 w-full h-full z-30">
        {/* Inner Container defining the 2-column layout */}
        <div className="container mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center h-full pt-24 md:pt-0 text-white z-40">
            <motion.div
              className="max-w-xl lg:max-w-3xl"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {/* Tag Badges */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-2 mb-4 md:mb-6"
              >
                {serviceData.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] md:text-xs font-bold tracking-widest bg-orange-500 border border-orange-500 px-3 py-1 rounded-full"
                  >
                    {tag.toUpperCase()}
                  </span>
                ))}
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-start leading-[1.15] mb-4 md:mb-6"
              >
                Empowering <br className="hidden md:block" />{" "}
                <span className="text-orange-500 animate-pulse">Businesses</span>{" "}
                with <br className="hidden md:block" /> Smart{" "}
                <span className="text-[#fd741e]">Infrastructure</span>
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                variants={itemVariants}
                className="text-sm md:text-lg text-gray-200 mb-8 md:mb-10 max-w-xl text-start leading-relaxed"
              >
                {serviceData.description}
              </motion.p>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="flex items-start">
                <Link href={"/contact-us"} className="group relative overflow-hidden flex items-center bg-[#ff6b00] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-xl transition-all duration-300 hover:bg-[#e65c00] shadow-xl">
                    <span className="relative z-10 flex items-center gap-2 md:gap-3 text-sm md:text-base">
                      Start Your Project{" "}
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Floating Icons Area */}
          <div className="w-full md:w-1/2 flex items-center justify-center md:justify-end h-full pb-16 md:pb-0 hidden md:flex">
            <div className="w-[300px] md:w-[400px] lg:w-[500px] aspect-square relative">
              <FloatingIconsSection />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};