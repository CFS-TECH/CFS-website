"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Headset,
  MonitorCog,
  Globe2,
  Database,
  CheckCircle2,
} from "lucide-react";

const SupportServicesSection = () => {
  // Scroll Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const services = [
    {
      icon: <Headset size={28} className="text-[#fd741e]" />,
      title: "Blend Support",
      description:
        "Seamless customer service across multiple channels to ensure your customers get help wherever they are.",
      color: "bg-orange-50",
      features: [
        "Inbound & Outbound Voice",
        "Live Web Chat Support",
        "Email Ticket Management",
        "Social Media Moderation",
      ],
    },
    {
      icon: <MonitorCog size={28} className="text-[#094a84]" />,
      title: "L1/L2 Technical Helpdesk",
      description:
        "Expert troubleshooting and technical issue resolution to minimize downtime and user frustration.",
      color: "bg-blue-50",
      features: [
        "Software Troubleshooting",
        "Hardware Diagnostics",
        "IT Ticketing Management",
        "Remote Desktop Support",
      ],
    },
    {
      icon: <Database size={28} className="text-[#fd741e]" />,
      title: "Back-Office Processing",
      description:
        "Secure and efficient handling of repetitive tasks so your internal team can focus on core strategies.",
      color: "bg-orange-50",
      features: [
        "Data Entry & Validation",
        "Order Fulfillment",
        "Claims & Refund Processing",
        "CRM Database Management",
      ],
    },
    {
      icon: <Globe2 size={28} className="text-[#094a84]" />,
      title: "Multilingual Care",
      description:
        "Break language barriers with native-speaking agents supporting your rapidly growing global customer base.",
      color: "bg-blue-50",
      features: [
        "Native Speaking Agents",
        "Real-Time Chat Translation",
        "Cultural Alignment",
        "Coverage for 20+ Languages",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#094a84]"></span>
            <span className="text-[#094a84] font-bold text-xs uppercase tracking-widest">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#094a84] mb-6 leading-tight">
            End-to-End Support Solutions <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#094a84] to-[#fd741e]">
              Tailored For Your Business
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            We don't just answer tickets; we build relationships. Our
            specialized teams integrate seamlessly with your existing processes
            to deliver exceptional CX.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-[0_20px_40px_-15px_rgba(9,74,132,0.15)] transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full"
            >
              {/* Bottom Orange Accent Line that grows on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#094a84] to-[#fd741e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

              {/* Icon Container */}
              <div
                className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>

              {/* Content Header */}
              <h3 className="text-xl font-bold text-[#094a84] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Detailed Features List */}
              <div className="mt-auto border-t border-gray-50 pt-5">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="text-[#fd741e] shrink-0 mt-0.5"
                      />
                      <span className="text-sm font-medium text-gray-700 leading-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SupportServicesSection;
