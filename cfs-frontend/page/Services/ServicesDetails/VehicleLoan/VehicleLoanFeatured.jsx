"use client";
import { Zap, BadgePercent, CalendarClock, FileText, Banknote, Rocket } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const VehicleLoanFeatured = () => {
  const features = [
    {
      name: "Quick Loan Approval",
      description: "Get approval within hours and drive home your vehicle soon.",
      icon: <Zap className="w-8 h-8" />,
    },
    {
      name: "Low Interest Rates",
      description: "Highly affordable EMI plans suited for all budgets.",
      icon: <BadgePercent className="w-8 h-8" />,
    },
    {
      name: "Flexible Tenure",
      description: "Choose your unique repayment period at your convenience.",
      icon: <CalendarClock className="w-8 h-8" />,
    },
    {
      name: "Minimal Documentation",
      description: "Simple, highly transparent, and entirely hassle-free process.",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      name: "High Loan Amount",
      description: "Finance up to 90% of your chosen vehicle's total cost.",
      icon: <Banknote className="w-8 h-8" />,
    },
    {
      name: "Fast Disbursal",
      description: "Get the required funds transferred directly and quickly.",
      icon: <Rocket className="w-8 h-8" />,
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
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 bg-white border border-gray-200 rounded-full text-blue-600 text-sm font-bold tracking-wide shadow-sm">
            FEATURES & BENEFITS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Loan Features</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Enjoy an expedited financing experience loaded with unmatched benefits.
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
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_-15px_rgba(37,99,235,0.2)] border border-gray-100 hover:border-blue-200 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
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

export default VehicleLoanFeatured;
