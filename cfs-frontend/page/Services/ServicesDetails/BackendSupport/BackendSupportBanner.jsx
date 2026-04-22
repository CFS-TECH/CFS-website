"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Database,
  FileCheck2,
  Keyboard,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const BackendSupportBanner = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const floatingStats = [
    {
      icon: <FileCheck2 size={18} className="text-[#094a84]" />,
      title: "Accuracy Rate",
      value: "99.9%",
      delay: 0.4,
    },
    {
      icon: <ShieldCheck size={18} className="text-[#fd741e]" />,
      title: "Data Security",
      value: "100%",
      delay: 0.6,
    },
  ];

  return (
    <section className="relative pt-20 pb-12 md:pt-28 md:pb-16 bg-[#fafafa] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] bg-[#094a84]/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#fd741e]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-[#094a84] animate-pulse"></span>
              <span className="text-[#094a84] font-bold text-[10px] md:text-xs uppercase tracking-widest">
                Back-Office & Operations
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#094a84] leading-[1.1] tracking-tight mb-5"
            >
              Flawless Processing, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#094a84] to-[#fd741e]">
                Zero Operational Drag.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Offload your heavy administrative tasks, data entry, and PMIS
              processing to our secure back-office team. We guarantee speed,
              absolute precision, and compliance so your internal team can focus
              on growth.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 mb-8"
            >
              <Link href="/contact-us" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#fd741e] text-white font-bold rounded-xl hover:bg-[#e06314] transition-all duration-300 shadow-[0_4px_14px_0_rgba(253,116,30,0.3)] hover:-translate-y-1">
                <Database size={18} /> Outsource Processes
              </Link>
              <Link href="/services" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#094a84] border border-gray-200 font-bold rounded-xl hover:border-[#094a84] transition-all duration-300 shadow-sm hover:-translate-y-1">
                <Keyboard size={18} /> View Capabilities
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-sm font-semibold text-gray-500"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-500" /> Secure
                Data Handling
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-500" /> High-Speed
                Execution
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-green-500" /> PMIS
                Management
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Abstract Data Processing Dashboard */}
          <div className="lg:w-1/2 w-full relative h-[380px] flex items-center justify-center mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-md bg-white rounded-3xl shadow-[0_15px_40px_rgba(9,74,132,0.08)] border border-gray-100 p-6 z-10"
            >
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                <div>
                  <h4 className="font-bold text-[#094a84] text-sm">
                    Processing Metrics
                  </h4>
                  <p className="text-[10px] text-gray-400">
                    Project: Enterprise Data Mgmt
                  </p>
                </div>
                <div className="bg-blue-50 text-[#094a84] px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#094a84] animate-pulse"></span>
                  Secure Sync
                </div>
              </div>

              <div className="space-y-4">
                {[
                  {
                    label: "Daily Records Processed",
                    count: "24,580",
                    progress: "w-[100%]",
                  },
                  {
                    label: "Quality Accuracy",
                    count: "99.9%",
                    progress: "w-[99%]",
                  },
                  {
                    label: "PMIS Workflows Completed",
                    count: "1,420",
                    progress: "w-[85%]",
                  },
                  {
                    label: "Avg. Turnaround Time (SLA)",
                    count: "< 2 Hrs",
                    progress: "w-[15%]",
                    colorOverride: true,
                  },
                ].map((metric, item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + item * 0.15 }}
                    className="space-y-1.5"
                  >
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-600">{metric.label}</span>
                      <span className="text-[#094a84]">{metric.count}</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: metric.progress.replace(/w-\[|\]/g, ""),
                        }}
                        transition={{
                          duration: 1.2,
                          delay: 1 + item * 0.15,
                          ease: "easeOut",
                        }}
                        className={`h-full ${metric.colorOverride ? "bg-green-500" : item % 2 === 0 ? "bg-[#094a84]" : "bg-[#fd741e]"}`}
                        style={{
                          width: metric.progress.replace(/w-\[|\]/g, ""),
                        }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Stats */}
            {floatingStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + stat.delay }}
                className={`absolute z-20 bg-white p-3 rounded-2xl shadow-lg border border-gray-50 flex items-center gap-3
                  ${idx === 0 ? "-top-2 -left-2 md:-left-4" : "-bottom-2 -right-2 md:-right-4"}
                `}
              >
                <div
                  className={`w-10 h-10 rounded-full ${idx === 0 ? "bg-blue-50" : "bg-orange-50"} flex items-center justify-center`}
                >
                  {stat.icon}
                </div>
                <div>
                  <p className="text-[9px] uppercase font-bold text-gray-400 tracking-wider mb-0.5">
                    {stat.title}
                  </p>
                  <p
                    className={`text-lg font-black ${idx === 0 ? "text-[#094a84]" : "text-[#fd741e]"}`}
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

export default BackendSupportBanner;
