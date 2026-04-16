"use client";
import React from "react";
import { Car, Bike, Truck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const VehicleTypes = () => {
  const types = [
    { title: "Car Loan", desc: "For new & used compact cars, sedans, and SUVs.", icon: <Car className="w-10 h-10" />, color: "from-blue-400 to-blue-600" },
    { title: "Two-Wheeler Loan", desc: "For premium bikes, scooters, and everyday rides.", icon: <Bike className="w-10 h-10" />, color: "from-red-400 to-red-600" },
    { title: "Commercial Vehicle Loan", desc: "For heavy trucks, tempo travelers, and delivery vans.", icon: <Truck className="w-10 h-10" />, color: "from-orange-400 to-orange-600" },
    { title: "Electric Vehicle Loan", desc: "For modern EV cars & bikes prioritizing sustainability.", icon: <Zap className="w-10 h-10" />, color: "from-green-400 to-green-600" },
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
            TYPES OF VEHICLE LOANS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] mb-12">
            Finance Any <span className="text-blue-600">Vehicle Type</span>
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
              <h3 className="font-bold text-gray-900 text-xl tracking-tight mt-2">
                {type.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {type.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleTypes;
