"use client";
import React from "react";
import { CarFront, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';

const VehicleBanner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const trustStats = [
    "3000+ Vehicles Financed",
    "₹40Cr+ Loans Disbursed",
    "4.8★ Customer Rating",
    "Fast & Secure Process"
  ];

  return (
    <>
      <section className="relative w-full flex items-center justify-center flex-col bg-gradient-to-b from-blue-50/50 to-white px-4 py-16 md:py-24 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-5 left-10 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-10 right-10 w-48 h-48 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center max-w-5xl mx-auto space-y-6"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="bg-blue-100 text-blue-700 px-4 py-1.5 text-xs md:text-sm rounded-full border border-blue-200 flex items-center gap-x-2 font-semibold shadow-sm"
          >
            <CarFront size={18} />
            <span>Vehicle Loan</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-4xl"
          >
            Drive Your Dream Vehicle with
            <br className="hidden md:block" /> Hassle-Free{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Financing
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-center text-gray-600 max-w-2xl leading-relaxed px-2"
          >
            Get fast approvals, competitive interest rates, and minimal documentation. 
            Finance up to 90% of your vehicle cost instantly.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center pt-4 w-full"
          >
            <Link href="/contact-us" className="w-full sm:w-auto flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-12 py-4 text-base md:text-lg rounded-full font-bold shadow-[0_8px_20px_-6px_rgba(37,99,235,0.6)] hover:shadow-[0_12px_25px_-6px_rgba(37,99,235,0.8)] hover:-translate-y-1 transition-all duration-300">
              Get Started
            </Link>
          </motion.div>

          {/* Trust Line */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-4xl mt-12 pt-10 border-t border-gray-100/60"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {trustStats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-gray-700 font-medium text-sm md:text-base bg-white/60 px-4 py-2 rounded-full border border-gray-100 shadow-sm backdrop-blur-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span>{stat}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </section>
    </>
  );
};

export default VehicleBanner;
