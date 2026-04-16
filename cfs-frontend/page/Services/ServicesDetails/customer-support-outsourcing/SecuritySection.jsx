"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, FileKey2, EyeOff } from "lucide-react";

const SecuritySection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const securityFeatures = [
    {
      icon: <ShieldCheck size={28} className="text-[#fd741e]" />,
      title: "ISO 27001 Certified",
      desc: "Internationally recognized standards for information security management systems.",
    },
    {
      icon: <Lock size={28} className="text-[#fd741e]" />,
      title: "GDPR & CCPA Compliant",
      desc: "Strict adherence to global data privacy laws to protect your customers' personal information.",
    },
    {
      icon: <FileKey2 size={28} className="text-[#fd741e]" />,
      title: "End-to-End Encryption",
      desc: "All client communications and database interactions are heavily encrypted.",
    },
    {
      icon: <EyeOff size={28} className="text-[#fd741e]" />,
      title: "Clean Desk Policy",
      desc: "Physical and network security protocols ensure zero unauthorized data extraction.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#094a84] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fd741e]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:w-1/3 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#fd741e]"></span>
              <span className="text-white font-bold text-xs uppercase tracking-widest">
                Bank-Grade Security
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Your Data Is <br />
              <span className="text-[#fd741e]">Locked Down.</span>
            </h2>
            <p className="text-blue-100 text-base leading-relaxed mb-8">
              We treat your proprietary data and your customers' privacy with the highest level of strict compliance and technological safeguards.
            </p>
          </motion.div>

          {/* Grid Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {securityFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#fd741e]/20 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-blue-100/70 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SecuritySection;