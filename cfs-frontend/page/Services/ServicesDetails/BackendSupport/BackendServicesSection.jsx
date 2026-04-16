"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  FolderKanban,
  ShieldCheck,
  ShoppingCart,
  CheckCircle2,
} from "lucide-react";

const BackendServicesSection = () => {
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
      icon: <Database size={28} className="text-[#fd741e]" />,
      title: "Data Entry & Processing",
      description:
        "High-volume, zero-error data digitization and extraction to keep your databases clean and up-to-date.",
      color: "bg-orange-50",
      features: [
        "Online & Offline Data Entry",
        "CRM Database Cleansing",
        "Data Formatting & Mining",
        "Invoice & Receipt Digitization",
      ],
    },
    {
      icon: <FolderKanban size={28} className="text-[#094a84]" />,
      title: "PMIS & Workflow Management",
      description:
        "End-to-end Project Management Information System (PMIS) support to keep your BPO operations tracking flawlessly.",
      color: "bg-blue-50",
      features: [
        "SLA & Performance Tracking",
        "Daily MIS Reporting",
        "Workflow Automation Support",
        "Data Routing & Escalations",
      ],
    },
    {
      icon: <ShieldCheck size={28} className="text-[#fd741e]" />,
      title: "Document Verification & KYC",
      description:
        "Fast and highly secure auditing of customer applications, documents, and compliance records.",
      color: "bg-orange-50",
      features: [
        "KYC/AML Document Checks",
        "Application Form Processing",
        "Background Verification Support",
        "Compliance Auditing",
      ],
    },
    {
      icon: <ShoppingCart size={28} className="text-[#094a84]" />,
      title: "E-commerce & Order Support",
      description:
        "Seamless backend management for retail and e-commerce platforms to ensure orders flow without friction.",
      color: "bg-blue-50",
      features: [
        "Order Fulfillment Tracking",
        "Inventory Level Updates",
        "Refund & Claims Processing",
        "Product Catalog Management",
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
            Heavy Lifting for Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#094a84] to-[#fd741e]">
              Operational Workflows
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            We act as the invisible engine running your business. From complex PMIS updates to high-speed data entry, our specialists ensure 99.9% accuracy on every task.
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
              {/* Bottom Orange Accent Line */}
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

export default BackendServicesSection;