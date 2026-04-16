"use client";
import React from "react";
import { IoMdTrendingUp } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";

const DigitalMarketingBanner = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <section className="relative w-full flex items-center justify-center flex-col bg-gradient-to-b from-orange-50/50 to-white px-4 py-10 md:py-12 overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-5 left-10 w-48 h-48 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-10 right-10 w-48 h-48 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center max-w-4xl mx-auto space-y-5"
        >
          {/* Badge: Digital Marketing */}
          <motion.div
            variants={itemVariants}
            className="bg-orange-100 text-orange-600 px-4 py-1.5 text-xs md:text-sm rounded-full border border-orange-200 flex items-center gap-x-2 font-semibold shadow-sm"
          >
            <IoMdTrendingUp size={18} />
            <span>Digital Marketing</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight"
          >
            Accelerate Your Growth with <br className="hidden md:block" />
            <span
              style={{
                WebkitTextFillColor: "transparent",
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#fd741e",
                letterSpacing: "0.5px",
              }}
              className="bg-clip-text"
            >
              Data-Driven Digital Marketing
            </span>
          </motion.h1>

          {/* Description Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-center text-gray-600 max-w-3xl leading-relaxed px-2"
          >
            At{" "}
            <span className="font-semibold text-gray-800">
              Crossover Fintech Support Pvt. Ltd.
            </span>
            , we don't just build robust IT solutions; we make sure your target
            audience finds them. Our digital marketing strategies are designed
            to increase your visibility, drive high-quality traffic, and deliver
            measurable ROI.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto"
          >
            <Link href="/contact-us" className="w-full cursor-pointer sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 text-sm md:text-base rounded-full font-semibold shadow-md hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center">
                Consult Our Experts
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default DigitalMarketingBanner;
