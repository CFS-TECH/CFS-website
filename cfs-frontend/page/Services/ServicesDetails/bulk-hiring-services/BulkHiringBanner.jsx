"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  ArrowRight,
  Building2,
  CheckCircle2,
  Briefcase,
  UserCheck,
} from "lucide-react";

const BulkHiringBanner = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  // Floating Stats Data for HR Theme
  const floatingStats = [
    {
      icon: <Users size={20} className="text-[#094a84]" />,
      title: "Active Database",
      value: "50,000+",
      delay: 0.5,
    },
    {
      icon: <Briefcase size={20} className="text-[#fd741e]" />,
      title: "Placement Rate",
      value: "94%",
      delay: 0.7,
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#fafafa] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#fd741e]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#094a84]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          {/* Left Content (Text & CTAs) */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#fd741e] animate-pulse"></span>
              <span className="text-[#094a84] font-bold text-xs uppercase tracking-widest">
                B2B Consultancy Services
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-[4rem] font-black text-[#094a84] leading-[1.1] tracking-tight mb-6"
            >
              Scale Your Workforce, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#094a84] to-[#fd741e]">
                Not Your Workload.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              Partner with{" "}
              <span className="font-semibold text-gray-800">
                Crossover Fintech Support
              </span>{" "}
              to fulfill large-scale recruitment needs rapidly. From aggressive
              sourcing to seamless onboarding, we handle the volume so you can
              focus on core growth.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-10"
            >
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#fd741e] text-white font-bold rounded-xl hover:bg-[#e06314] transition-all duration-300 shadow-[0_4px_14px_0_rgba(253,116,30,0.3)] hover:shadow-[0_6px_20px_rgba(253,116,30,0.2)] hover:-translate-y-1">
                Hire Talent Now <ArrowRight size={18} />
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#094a84] border border-gray-200 font-bold rounded-xl hover:border-[#094a84] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1">
                <Building2 size={18} /> Partner With Us
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm font-semibold text-gray-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" />{" "}
                Pre-Assessed Candidates
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> Fast
                Turnaround
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-500" /> End-to-End
                Support
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content (Animated Candidate Pipeline UI) */}
          <div className="lg:w-1/2 w-full relative h-[450px] flex items-center justify-center">
            {/* Main Abstract ATS Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-md bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(9,74,132,0.08)] border border-gray-100 p-8 z-10"
            >
              {/* Header of Fake UI */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-100">
                <div>
                  <h4 className="font-bold text-[#094a84]">
                    Mass Hiring Pipeline
                  </h4>
                  <p className="text-xs text-gray-400">
                    Project: IT Support Mega Drive
                  </p>
                </div>
                <div className="bg-orange-50 text-[#fd741e] px-3 py-1 rounded-full text-xs font-bold">
                  Active
                </div>
              </div>

              {/* Fake Pipeline Stages */}
              <div className="space-y-6">
                {[
                  {
                    label: "Candidates Sourced",
                    count: "1,250",
                    color: "bg-blue-100",
                    progress: "w-[100%]",
                  },
                  {
                    label: "Screening Passed",
                    count: "480",
                    color: "bg-orange-100",
                    progress: "w-[60%]",
                  },
                  {
                    label: "Interviews Scheduled",
                    count: "215",
                    color: "bg-green-100",
                    progress: "w-[35%]",
                  },
                  {
                    label: "Offers Rolled Out",
                    count: "85",
                    color: "bg-[#094a84]",
                    progress: "w-[15%]",
                  },
                ].map((stage, item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + item * 0.2 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm font-semibold">
                      <span className="text-gray-600">{stage.label}</span>
                      <span className="text-[#094a84]">{stage.count}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: stage.progress.replace(/w-\[|\]/g, ""),
                        }}
                        transition={{
                          duration: 1.5,
                          delay: 1.5 + item * 0.2,
                          ease: "easeOut",
                        }}
                        className={`h-full ${item === 3 ? "bg-[#fd741e]" : "bg-[#094a84]"}`}
                        style={{
                          width: stage.progress.replace(/w-\[|\]/g, ""),
                        }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Stat Cards */}
            {floatingStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2 + stat.delay }}
                className={`absolute z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4
                  ${idx === 0 ? "-top-4 -left-2 md:-left-8" : "-bottom-4 -right-2 md:-right-6"}
                `}
              >
                <div
                  className={`w-12 h-12 rounded-full ${idx === 0 ? "bg-blue-50" : "bg-orange-50"} flex items-center justify-center`}
                >
                  {stat.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">
                    {stat.title}
                  </p>
                  <p
                    className={`text-xl font-black ${idx === 0 ? "text-[#094a84]" : "text-[#fd741e]"}`}
                  >
                    {stat.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulkHiringBanner;
