"use client";
import React from "react";
import { Home, Map, Building2, PaintRoller } from "lucide-react";
import { motion } from "framer-motion";

const PropertyTypes = () => {
  const types = [
    { title: "Home Loan", desc: "Buy your dream house perfectly easily.", icon: <Home className="w-10 h-10" />, color: "from-orange-400 to-orange-600" },
    { title: "Plot Loan", desc: "Purchase empty land or a residential plot.", icon: <Map className="w-10 h-10" />, color: "from-amber-400 to-amber-600" },
    { title: "Loan Against Property", desc: "Get massive funds using your existing property.", icon: <Building2 className="w-10 h-10" />, color: "from-indigo-400 to-indigo-600" },
    { title: "Home Renovation", desc: "Upgrade and modernize your existing home.", icon: <PaintRoller className="w-10 h-10" />, color: "from-blue-400 to-blue-600" },
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
            TYPES OF PROPERTY LOANS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#042A2B] mb-12">
            Finance Any <span className="text-orange-600">Property Objective</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              key={index}
              className="bg-white rounded-3xl p-8 flex flex-col items-center justify-center gap-4 hover:-translate-y-3 hover:shadow-2xl border border-gray-100 transition-all duration-300 cursor-pointer shadow-md group"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${type.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {type.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-xl tracking-tight mt-2 text-center">
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

export default PropertyTypes;
