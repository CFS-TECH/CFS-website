"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const CTA = ({
  backgroundImage = "https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496531/cfs_assets/CTA.jpg",
  titlePart1 = "Smart IT, Finance &",
  highlightedText = "BPO Solutions",
  titlePart2 = "That Drive Growth",
  subtitle = "We deliver scalable IT services, secure financial solutions, and reliable BPO support to help businesses grow faster.",
  primaryBtnText = "Get Free Consultation",
  secondaryBtnText = "Our Services",
  onPrimaryClick="/contact-us",
  onSecondaryClick="/services",
}) => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full py-4 md:py-8 ">
      {/* Boxed Container for a more premium look (can be removed if you want full edge-to-edge) */}
      <div className="relative w-full  h-[500px] md:h-[550px] overflow-hidden shadow-2xl group">
        {/* Animated Background Image */}
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src={backgroundImage}
          alt="Call to Action Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Premium Overlay - Using your brand color #094a84 mixed with black for depth */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#094a84]/95 via-[#094a84]/80 to-[#121212]/60 flex items-center justify-center px-6 md:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl flex flex-col items-center text-center w-full"
          >
            {/* Text Content */}
            <div className="space-y-6 mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
                {titlePart1} <br className="hidden md:block" />
                <span className="text-[#fd741e] relative inline-block">
                  {highlightedText}
                  {/* Subtle underline accent */}
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#fd741e]/30 rounded-full blur-[2px]"></span>
                </span>{" "}
                {titlePart2}
              </h2>
              <p className="text-blue-100/90 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              {/* Primary Button */}
              <Link href={onPrimaryClick} className="w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer bg-[#fd741e] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_4px_14px_0_rgba(253,116,30,0.39)] hover:shadow-[0_6px_20px_rgba(253,116,30,0.23)] hover:-translate-y-1 hover:bg-orange-600 group/btn">
                  {primaryBtnText}
                  <MdKeyboardArrowRight className="text-2xl group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              {/* Secondary Button */}
              <Link href={onSecondaryClick} className="w-full sm:w-auto flex items-center justify-center gap-3 cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-[#094a84] px-8 py-4 rounded-full font-bold transition-all duration-500 hover:shadow-xl hover:-translate-y-1 group/btn2">
                  {secondaryBtnText}
                  <GoArrowUpRight className="text-xl group-hover/btn2:rotate-45 transition-transform duration-500" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
