"use client";
import React from "react";
import { HandCoins, Building, Rocket, Zap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const BusinessTypes = () => {
  const types = [
    { title: "Working Capital", desc: "Manage smooth daily expenses operations.", icon: <HandCoins className="w-10 h-10" />, color: "from-blue-500 to-blue-700" },
    { title: "MSME Loan", desc: "Crucial support for small & medium businesses.", icon: <Building className="w-10 h-10" />, color: "from-orange-400 to-orange-600" },
    { title: "Startup Loan", desc: "Essential initial funding for brand new businesses.", icon: <Rocket className="w-10 h-10" />, color: "from-indigo-500 to-indigo-700" },
    { title: "Machinery Loan", desc: "Purchase vital equipment and heavy machinery.", icon: <Zap className="w-10 h-10" />, color: "from-cyan-500 to-cyan-700" },
    { title: "Business Expansion", desc: "Scale and exponentially grow your operations.", icon: <Briefcase className="w-10 h-10" />, color: "from-emerald-500 to-emerald-700" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-3 px-4 py-1.5 bg-gray-100 border border-gray-200 rounded-full text-gray-700 text-sm font-bold tracking-wide shadow-sm">
            TYPES OF BUSINESS LOANS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] mb-12">
            Finance Any <span className="text-orange-600">Business Drive</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {types.map((type, index) => (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              key={index}
              className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:-translate-y-3 hover:shadow-2xl border border-gray-100 transition-all duration-300 cursor-pointer shadow-md group w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)] min-w-[200px]"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rounded-full transition-all duration-300`}>
                {type.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg tracking-tight mt-2 text-center">
                {type.title}
              </h3>
              <p className="text-gray-500 text-sm text-center">
                {type.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
