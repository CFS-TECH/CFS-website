"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  CalendarCheck,
  BadgeDollarSign,
  ClipboardList,
  CheckCircle2,
} from "lucide-react";

const TelecallingServicesSection = () => {
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
      icon: <Target size={28} className="text-[#fd741e]" />,
      title: "B2B & B2C Lead Generation",
      description:
        "We identify, engage, and qualify high-potential prospects to keep your sales pipeline full.",
      color: "bg-orange-50",
      features: [
        "Cold Calling Campaigns",
        "Lead Qualification (BANT)",
        "Database Cleansing",
        "Prospect Profiling",
      ],
    },
    {
      icon: <CalendarCheck size={28} className="text-[#094a84]" />,
      title: "Appointment Setting",
      description:
        "Our agents act as your SDRs, booking highly qualified meetings directly onto your sales team's calendar.",
      color: "bg-blue-50",
      features: [
        "Decision-Maker Outreach",
        "Calendar Management",
        "Pre-Meeting Reminders",
        "No-Show Rescheduling",
      ],
    },
    {
      icon: <BadgeDollarSign size={28} className="text-[#fd741e]" />,
      title: "Telesales & Upselling",
      description:
        "Direct-to-consumer and business sales calls designed to close deals and maximize customer lifetime value.",
      color: "bg-orange-50",
      features: [
        "Product & Service Sales",
        "Cross-selling & Upselling",
        "Subscription Renewals",
        "Abandoned Cart Recovery",
      ],
    },
    {
      icon: <ClipboardList size={28} className="text-[#094a84]" />,
      title: "Surveys & Market Research",
      description:
        "Gather critical intelligence and customer feedback to improve your products and brand positioning.",
      color: "bg-blue-50",
      features: [
        "NPS & Satisfaction Surveys",
        "Competitor Analysis Calls",
        "Event Registration Drives",
        "Customer Win-Back Calling",
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
              Outreach Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#094a84] mb-6 leading-tight">
            Targeted Campaigns That <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#094a84] to-[#fd741e]">
              Deliver Real Revenue
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Whether you need to break into new markets, set appointments for
            your closers, or conduct deep market research, our voice agents are
            trained to sound like your own internal team.
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

export default TelecallingServicesSection;
