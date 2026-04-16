"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FileSearch, 
  Settings2, 
  ShieldCheck, 
  Zap, 
  ArrowRight 
} from "lucide-react";

const BackendOnboarding = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const steps = [
    {
      icon: <FileSearch size={24} className="text-[#fd741e]" />,
      title: "Process Audit",
      desc: "Hum aapke current workflow aur data standards ko analyze karke ek customized SOP (Standard Operating Procedure) design karte hain.",
    },
    {
      icon: <Settings2 size={24} className="text-[#094a84]" />,
      title: "System Integration",
      desc: "Humaari team aapke CRM ya internal databases ke sath secure API connections ya portal access set-up karti hai.",
    },
    {
      icon: <ShieldCheck size={24} className="text-[#fd741e]" />,
      title: "Compliance Training",
      desc: "Agents ko aapke specific data privacy rules aur processing guidelines par intensive training di jaati hai.",
    },
    {
      icon: <Zap size={24} className="text-[#094a84]" />,
      title: "Production Go-Live",
      desc: "Kaam shuru! Daily processing reporting aur real-time accuracy tracking ke sath operation live ho jata hai.",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#094a84] mb-4">
            How We Integrate With <br />
            <span className="text-[#fd741e]">Your Operations</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Crossover Fintech Support ke sath outsourcing ekdum seamless hai. Hum 4 simple steps me aapka backend burden apne shoulders par le lete hain.
          </p>
        </motion.div>

        {/* Onboarding Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { delay: idx * 0.1 } }
              }}
              className="relative p-8 rounded-3xl bg-[#fafafa] border border-gray-100 group hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              {/* Step Number Background */}
              <span className="absolute top-4 right-6 text-5xl font-black text-gray-100 group-hover:text-orange-50 transition-colors">
                0{idx + 1}
              </span>

              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 relative z-10">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-[#094a84] mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                {step.desc}
              </p>

              {/* Connecting Arrow for Desktop */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-20 text-gray-300">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

       

      </div>
    </section>
  );
};

export default BackendOnboarding;