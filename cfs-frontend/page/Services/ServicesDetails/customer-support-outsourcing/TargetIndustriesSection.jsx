"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Landmark,
  CloudCog,
  HeartPulse,
  ArrowUpRight,
} from "lucide-react";

const TargetIndustriesSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const industries = [
    {
      icon: <Landmark size={32} className="text-[#094a84]" />,
      title: "FinTech & Banking",
      description:
        "Secure, compliant support for KYC, fraud disputes, and account inquiries.",
      metric: "Reduced dispute resolution time by 45%",
    },
    {
      icon: <ShoppingCart size={32} className="text-[#fd741e]" />,
      title: "E-Commerce & Retail",
      description:
        "Handling order tracking, refunds, and seasonal volume spikes with ease.",
      metric: "Boosted seasonal CSAT to 98%",
    },
    {
      icon: <CloudCog size={32} className="text-[#094a84]" />,
      title: "SaaS & Tech Startups",
      description:
        "L1/L2 technical support, onboarding assistance, and bug ticketing.",
      metric: "Lowered churn rate by 18%",
    },
    {
      icon: <HeartPulse size={32} className="text-[#fd741e]" />,
      title: "Healthcare & Telemed",
      description:
        "Patient scheduling, billing inquiries, and sensitive data handling.",
      metric: "100% HIPAA compliance maintained",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#094a84] mb-4">
            Specialized Support For <br />
            <span className="text-[#fd741e]">Your Specific Industry</span>
          </h2>
          <p className="text-gray-600">
            We train our agents on the nuances of your vertical so they act as a
            seamless extension of your internal team.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-[#fafafa] border border-gray-100 hover:bg-white hover:shadow-[0_20px_40px_-15px_rgba(9,74,132,0.12)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#094a84] mb-2">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {industry.description}
                </p>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#fd741e] bg-orange-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
                  <ArrowUpRight size={14} />
                  {industry.metric}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TargetIndustriesSection;
