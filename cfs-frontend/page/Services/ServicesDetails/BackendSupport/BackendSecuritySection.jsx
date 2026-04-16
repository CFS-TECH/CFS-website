"use client";
import React from "react";
import { motion } from "framer-motion";
import { LockKeyhole, FileKey2, Fingerprint, EyeOff } from "lucide-react";

const BackendSecuritySection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const securityFeatures = [
    {
      icon: <Fingerprint size={28} className="text-[#fd741e]" />,
      title: "Role-Based Access Control",
      desc: "Agents only get access to the specific PMIS fields and data required for their task. Zero unnecessary exposure.",
    },
    {
      icon: <FileKey2 size={28} className="text-[#fd741e]" />,
      title: "Encrypted Data Transfers",
      desc: "All files, databases, and KYC documents are transferred and stored using AES-256 military-grade encryption.",
    },
    {
      icon: <EyeOff size={28} className="text-[#fd741e]" />,
      title: "Strict Clean Desk Policy",
      desc: "No mobile phones, no USB drives, and no paper allowed on the operations floor. Screen capture blocking is enforced.",
    },
    {
      icon: <LockKeyhole size={28} className="text-[#fd741e]" />,
      title: "ISO & GDPR Compliant",
      desc: "Our back-office facilities undergo regular third-party security audits to maintain global data protection standards.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#094a84] relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#fd741e]/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#ffffff]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="lg:w-1/3 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#fd741e] animate-pulse"></span>
              <span className="text-white font-bold text-xs uppercase tracking-widest">
                Zero-Trust Security
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Your Databases Are <br />
              <span className="text-[#fd741e]">Locked Down.</span>
            </h2>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-8">
              Handing over your administrative workflows shouldn't mean compromising on security. We treat your proprietary data, customer records, and PMIS access with ironclad protocols.
            </p>
          </motion.div>

          {/* Grid Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {securityFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#fd741e]/10 border border-[#fd741e]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-blue-100/80 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BackendSecuritySection;