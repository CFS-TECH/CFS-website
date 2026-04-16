"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Network, HeadphonesIcon } from "lucide-react";

const SoftwareCTA = () => {
  const whyChooseData = [
    {
      title: "Enterprise Security",
      desc: "Bank-grade encryption and strict compliance protocols to keep your data safe from threats.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Scalable Architecture",
      desc: "Cloud-native infrastructure designed to handle millions of users seamlessly as you grow.",
      icon: <Network size={24} />,
    },
    {
      title: "High Performance",
      desc: "Optimized codebases and caching strategies to guarantee sub-second load times.",
      icon: <Zap size={24} />,
    },
    {
      title: "24/7 DevOps Support",
      desc: "Continuous integration, deployment, and round-the-clock server monitoring.",
      icon: <HeadphonesIcon size={24} />,
    },
  ];

  // Animation Variants
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="py-32 bg-[#fafafa] relative overflow-hidden">
      {/* Decorative Glow Circles (Lighter for Light Theme) */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#fd741e]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="lg:w-1/3"
          >
            <h2 className="text-[#fd741e] font-bold tracking-widest uppercase text-sm mb-3">
              What We Do
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#102a42] mb-6 leading-tight">
              Built for Scale & Security
            </h3>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed">
              We don't just write code; we architect solutions. From the initial
              blueprint to the final deployment, our focus is on creating
              software that seamlessly integrates into your workflows.
            </p>
            <button className="px-8 py-4 bg-[#102a42] text-white hover:bg-[#fd741e] font-bold rounded-xl transition-all duration-300 shadow-[0_4px_14px_0_rgba(16,42,66,0.15)] hover:shadow-[0_6px_20px_rgba(253,116,30,0.25)] transform hover:-translate-y-1">
              Partner With Us
            </button>
          </motion.div>

          {/* Right Grid Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {whyChooseData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-[#fd741e]/30 transition-all duration-300 flex flex-col gap-5 hover:-translate-y-1 shadow-sm hover:shadow-xl hover:shadow-[#fd741e]/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#fafafa] text-[#fd741e] flex items-center justify-center border border-gray-100 group-hover:bg-orange-50 group-hover:border-orange-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#102a42] mb-2 group-hover:text-[#fd741e] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareCTA;
