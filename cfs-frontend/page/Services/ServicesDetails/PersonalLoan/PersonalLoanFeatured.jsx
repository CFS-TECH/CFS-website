"use client";
import { Zap, ShieldCheck, RefreshCw, BadgePercent, Banknote, FileText } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const PersonalLoanFeatured = () => {
  const features = [
    {
      name: "Instant Approval",
      description: "Get approval within minutes, without the long wait.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      name: "No Collateral Required",
      description: "100% unsecured loan. No assets needed to secure funding.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      name: "Flexible EMI Options",
      description: "Choose your repayment plan that fits your monthly budget.",
      icon: <RefreshCw className="w-8 h-8" />,
    },
    {
      name: "Low Interest Rates",
      description: "Affordable and transparent rates with zero hidden shocks.",
      icon: <BadgePercent className="w-8 h-8" />,
    },
    {
      name: "Quick Disbursal",
      description: "Money in your account fast, right when you need it.",
      icon: <Banknote className="w-8 h-8" />,
    },
    {
      name: "Minimal Documentation",
      description: "Simple and hassle-free paperless process.",
      icon: <FileText className="w-8 h-8" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 bg-white border border-gray-200 rounded-full text-orange-600 text-sm font-bold tracking-wide shadow-sm">
            FEATURES & BENEFITS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Loan Features</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Enjoy a hassle-free personal loan experience loaded with unmatched benefits.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_-15px_rgba(249,115,22,0.2)] border border-gray-100 hover:border-orange-200 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Card Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalLoanFeatured;
