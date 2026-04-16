"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, Target, Wrench, TrendingUp, ArrowRight } from "lucide-react";

const SEOProcess = () => {
  const processData = [
    {
      id: "01",
      title: "Comprehensive Audit",
      desc: "We dive deep into your website's architecture, backlink profile, and current keyword rankings to uncover technical errors and hidden growth opportunities.",
      icon: <Search size={28} />,
      outcome: "Actionable Health Report",
    },
    {
      id: "02",
      title: "Strategy & Keyword Mapping",
      desc: "We analyze your top competitors and map out high-intent, low-competition keywords that will drive qualified leads and actual buyers to your site.",
      icon: <Target size={28} />,
      outcome: "Data-Driven Roadmap",
    },
    {
      id: "03",
      title: "On-Page & Technical Fixes",
      desc: "Our team optimizes meta tags, improves site speed, fixes mobile responsiveness, and restructures your content to perfectly align with Google's algorithms.",
      icon: <Wrench size={28} />,
      outcome: "Fully Optimized Website",
    },
    {
      id: "04",
      title: "Authority Building & Scaling",
      desc: "We execute powerful off-page campaigns, acquiring high-authority backlinks and generating PR to establish your domain as an undisputed industry leader.",
      icon: <TrendingUp size={28} />,
      outcome: "Top Tier Rankings & Traffic",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#fd741e] font-bold text-xs uppercase tracking-widest mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#fd741e] animate-pulse"></span>
            How We Work
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#102a42] mb-6 tracking-tight">
            Our Proven <span className="text-[#fd741e]">SEO Process</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            See exactly how Crossover Fintech Support systematically scales your
            organic traffic. No guesswork, just a transparent and repeatable
            formula for search engine dominance.
          </p>
        </div>

        {/* 4-Step Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {processData.map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="relative group bg-[#fafafa] rounded-[2rem] p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Massive Faint Number Background */}
              <div className="absolute -top-6 -right-4 text-9xl font-black text-gray-200/50 group-hover:text-orange-100/50 transition-colors duration-500 select-none pointer-events-none z-0">
                {step.id}
              </div>

              <div className="relative z-10 flex flex-col flex-grow">
                {/* Step Indicator & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#fd741e] group-hover:bg-[#fd741e] group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="text-sm font-black text-[#102a42] bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
                    Step {step.id}
                  </span>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-[#102a42] mb-4 group-hover:text-[#fd741e] transition-colors">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed  flex-grow">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SEOProcess;
