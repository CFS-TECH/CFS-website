"use client";
import React from "react";
import { TrendingUp, HandCoins, Package, Key, Users, Activity } from "lucide-react";
import { motion } from "framer-motion";

const UseCases = () => {
  const cases = [
    { title: "Expand Your Business", icon: <TrendingUp className="w-6 h-6" />, color: "from-blue-500 to-blue-700" },
    { title: "Manage Working Capital", icon: <HandCoins className="w-6 h-6" />, color: "from-green-500 to-green-700" },
    { title: "Purchase Inventory", icon: <Package className="w-6 h-6" />, color: "from-amber-400 to-amber-600" },
    { title: "Upgrade Machinery", icon: <Key className="w-6 h-6" />, color: "from-purple-500 to-purple-700" },
    { title: "Hire Employees", icon: <Users className="w-6 h-6" />, color: "from-cyan-500 to-cyan-700" },
    { title: "Improve Cash Flow", icon: <Activity className="w-6 h-6" />, color: "from-orange-400 to-orange-600" },
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
          <div className="inline-block mb-3 px-4 py-1.5 bg-orange-50 border border-orange-100 rounded-full text-orange-600 text-sm font-bold tracking-wide shadow-sm">
            ENDLESS POSSIBILITIES
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] mb-6">
            Finance Your <span className="text-orange-600">Ambitions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
            From fueling explosive operational expansions to systematically managing your cash flow cycles, we uniquely back your goals.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {cases.map((useCase, index) => (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              key={index}
              className="bg-gray-50 rounded-2xl p-6 w-[160px] md:w-[200px] flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${useCase.color} text-white flex items-center justify-center shadow-md`}>
                {useCase.icon}
              </div>
              <h3 className="font-semibold text-[#0A192F] text-sm md:text-base leading-tight text-center">
                {useCase.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
