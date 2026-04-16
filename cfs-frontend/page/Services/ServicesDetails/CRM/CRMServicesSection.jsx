"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  DatabaseZap,
  BarChartHorizontal,
  Workflow,
  FileSpreadsheet,
  CheckCircle2,
} from "lucide-react";

const CRMServicesSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const services = [
    {
      icon: <DatabaseZap size={28} className="text-[#fd741e]" />,
      title: "Data Hygiene & Migration",
      description: "Duplicate records hatana, mapping sahi karna, aur purane data ko naye CRM me safely move karna.",
      color: "bg-orange-50",
      features: ["De-duplication", "Data Enrichment", "Custom Mapping", "Secure Migration"],
    },
    {
      icon: <Workflow size={28} className="text-[#094a84]" />,
      title: "Workflow Automation",
      description: "Manual tasks ko automate karke sales cycle ko fast banana (Lead routing, Email sequences).",
      color: "bg-blue-50",
      features: ["Auto Lead Routing", "Email Automation", "Task Triggers", "Funnel Tracking"],
    },
    {
      icon: <BarChartHorizontal size={28} className="text-[#fd741e]" />,
      title: "Advanced MIS Reporting",
      description: "Complex data ko simple visual dashboards me badalna taki aap faster decisions le sakein.",
      color: "bg-orange-50",
      features: ["Daily/Weekly MIS", "ROI Dashboards", "Agent Performance", "Custom KPIs"],
    },
    {
      icon: <FileSpreadsheet size={28} className="text-[#094a84]" />,
      title: "Lead Management",
      description: "Har incoming lead ko sahi se tag karna aur monitor karna taki koi bhi lead miss na ho.",
      color: "bg-blue-50",
      features: ["Lead Scoring", "Status Tagging", "Follow-up Reminders", "Conversion Logs"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#094a84] mb-6 leading-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#094a84] to-[#fd741e]">CRM Solutions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Humaari expert team aapke CRM tools ko manage karti hai taki aapko technical jhanjhat ki chinta na karni pade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#094a84] mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed flex-grow">{service.description}</p>
              
              <div className="mt-auto pt-5 border-t border-gray-50">
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <CheckCircle2 size={16} className="text-[#fd741e]" /> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CRMServicesSection;