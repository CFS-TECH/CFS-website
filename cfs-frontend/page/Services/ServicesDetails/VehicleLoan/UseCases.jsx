"use client";
import React from "react";
import { Car, ChevronsUp, Briefcase, Truck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const UseCases = () => {
  const cases = [
    { title: "Buy Your Dream Car", icon: <Car className="w-6 h-6" />, color: "from-blue-400 to-blue-600" },
    { title: "Upgrade to Better Vehicle", icon: <ChevronsUp className="w-6 h-6" />, color: "from-indigo-400 to-indigo-600" },
    { title: "Start Transport Business", icon: <Briefcase className="w-6 h-6" />, color: "from-cyan-400 to-cyan-600" },
    { title: "Purchase Commercial Vehicle", icon: <Truck className="w-6 h-6" />, color: "from-orange-400 to-orange-600" },
    { title: "Switch to Electric Vehicle", icon: <Zap className="w-6 h-6" />, color: "from-green-400 to-green-600" },
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
          <div className="inline-block mb-3 px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-sm font-bold tracking-wide shadow-sm">
            ENDLESS POSSIBILITIES
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Finance Your <span className="text-blue-600">Ambitions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
            From your dream personal car to expanding a whole commercial transport fleet, we back your goals.
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
              <h3 className="font-semibold text-gray-800 text-sm md:text-base leading-tight text-center">
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
