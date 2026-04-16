"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, BarChart3, Presentation } from "lucide-react";

const CRMReportingFlow = () => {
  const steps = [
    {
      icon: <Search className="text-white" />,
      title: "Data Audit",
      desc: "Hum aapke existing CRM data ki quality aur gaps ko identify karte hain.",
      color: "bg-[#094a84]",
    },
    {
      icon: <PenTool className="text-white" />,
      title: "Cleansing",
      desc: "Duplicate records aur galat entries ko filter karke data clean karte hain.",
      color: "bg-[#fd741e]",
    },
    {
      icon: <BarChart3 className="text-white" />,
      title: "Analytics",
      desc: "Clean data par deep analysis karke trends aur KPIs nikalte hain.",
      color: "bg-[#094a84]",
    },
    {
      icon: <Presentation className="text-white" />,
      title: "Visual Reporting",
      desc: "Aapko insightful weekly/monthly dashboards provide karte hain.",
      color: "bg-[#fd741e]",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap justify-center gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex-1 min-w-[250px] text-center"
            >
              <div
                className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#094a84] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.desc}
              </p>
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute right-[-20px] top-[40%] text-gray-200">
                  {/* Optional: Add Arrow SVG here */}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMReportingFlow;
