"use client";
import React, { Activity } from "react";
import { motion } from "framer-motion";
import {
  CheckSquare,
  Layers,
  Search,
  Clock,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

const BackendQASection = () => {
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
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const qaSteps = [
    {
      icon: <Layers size={24} className="text-[#fd741e]" />,
      title: "Maker-Checker Process",
      description:
        "Every critical data entry task requires dual verification. One agent processes the data (Maker), and a senior QA reviews it (Checker).",
    },
    {
      icon: <CheckSquare size={24} className="text-[#094a84]" />,
      title: "Automated Data Validation",
      description:
        "We use smart scripting and field-validation rules in our PMIS to instantly catch duplicate entries, missing fields, or format errors.",
    },
    {
      icon: <Search size={24} className="text-[#fd741e]" />,
      title: "Randomized Batch Audits",
      description:
        "Our QA managers conduct daily randomized samplings of completed workflows to ensure agents strictly follow SLA guidelines.",
    },
    {
      icon: <Clock size={24} className="text-[#094a84]" />,
      title: "Strict SLA Adherence",
      description:
        "Speed without compromise. We guarantee lightning-fast turnaround times while maintaining a strict 99.9% accuracy threshold.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#fafafa] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#094a84]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left Column: Text & Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:w-1/2 flex flex-col items-center lg:text-left text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#094a84]"></span>
              <span className="text-[#094a84] font-bold text-xs uppercase tracking-widest">
                Quality Control
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-[#094a84] leading-tight mb-6"
            >
              Zero Margins For Error. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#094a84] to-[#fd741e]">
                100% Peace of Mind.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-base md:text-lg mb-10 max-w-lg"
            >
              Bad data costs money. We have engineered a bulletproof quality
              control pipeline that catches discrepancies before they ever reach
              your live database.
            </motion.p>

            {/* QA Process List */}
            <div className="space-y-6 w-full">
              {qaSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row items-start gap-4 group bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 text-left"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-50 transition-all duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#094a84] mb-1">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: QA Dashboard Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(9,74,132,0.08)] border border-gray-100 z-10">
              {/* Header */}
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-[#094a84]">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#094a84]">
                      Operational Analytics
                    </h4>
                    <p className="text-xs text-gray-400 font-medium">
                      Crossover Fintech Support
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold border border-green-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Live Status
                </div>
              </div>

              {/* Live Support Metrics Pipeline */}
              <div className="space-y-0">
                {/* Step 1 */}
                <div className="relative pl-6 pb-6 border-l-2 border-[#fd741e]">
                  <div className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-[#fd741e] border-4 border-white shadow-sm"></div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-gray-800">Incoming Query Stream</span>
                    <span className="text-[#fd741e]">Queue: Low</span>
                  </div>
                  <p className="text-[11px] text-gray-500">
                    Multichannel support active (Voice, Email, Chat). All nodes
                    operational.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative pl-6 pb-6 border-l-2 border-[#094a84]">
                  <div className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-[#094a84] border-4 border-white shadow-sm"></div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-gray-800">
                      Verification & Escalation
                    </span>
                    <span className="text-[#094a84]">Tier 1 & 2</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded inline-flex mt-1">
                    <ShieldCheck size={12} /> Compliance & Security Check Passed
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative pl-6 border-l-2 border-transparent">
                  <div className="absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow-sm"></div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-gray-800">Resolution & Feedback</span>
                    <span className="text-green-600">98% FCR</span>
                  </div>
                  <p className="text-[11px] text-gray-500">
                    First Contact Resolution maintained across fintech service
                    level agreements.
                  </p>
                </div>
              </div>

              {/* Overall Performance Bar */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span className="text-[#094a84]">SLA Compliance Rate</span>
                  <span className="text-[#fd741e]">99.9%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.9%" }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-[#094a84] to-[#fd741e] rounded-full"
                  ></motion.div>
                </div>
              </div>
            </div>

            {/* Decorative Background Blob */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#094a84]/15 to-[#fd741e]/15 rounded-3xl blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BackendQASection;
