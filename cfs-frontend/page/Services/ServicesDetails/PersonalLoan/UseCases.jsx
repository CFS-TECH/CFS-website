"use client";
import React from "react";
import { HeartPulse, HeartHandshake, Plane, GraduationCap, Home, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const UseCases = () => {
  const cases = [
    { title: "Medical Emergency", icon: <HeartPulse className="w-6 h-6" />, color: "from-red-400 to-red-600" },
    { title: "Wedding Expenses", icon: <HeartHandshake className="w-6 h-6" />, color: "from-pink-400 to-pink-600" },
    { title: "Travel & Vacation", icon: <Plane className="w-6 h-6" />, color: "from-sky-400 to-sky-600" },
    { title: "Education Fees", icon: <GraduationCap className="w-6 h-6" />, color: "from-green-400 to-green-600" },
    { title: "Home Renovation", icon: <Home className="w-6 h-6" />, color: "from-orange-400 to-orange-600" },
    { title: "Gadget / Lifestyle", icon: <Smartphone className="w-6 h-6" />, color: "from-purple-400 to-purple-600" },
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Fund Your <span className="text-orange-500">Dreams</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
            Whether it's an emergency or a lifelong dream, we provide the financial backing you need to make it happen without delay.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {cases.map((useCase, index) => (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              key={index}
              className="bg-gray-50 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300 cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${useCase.color} text-white flex items-center justify-center shadow-md`}>
                {useCase.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-sm md:text-base leading-tight">
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
