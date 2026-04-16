"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileSearch, Users, Cable, Rocket } from "lucide-react";

const TelecallingProcessSection = () => {
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
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const steps = [
    {
      num: "01",
      icon: <FileSearch size={28} className="text-[#fd741e]" />,
      title: "Discovery & Scripting",
      description:
        "We analyze your product, identify your ideal customer profile (ICP), and craft high-converting scripts and objection-handling guides.",
    },
    {
      num: "02",
      icon: <Users size={28} className="text-[#094a84]" />,
      title: "Agent Allocation & Training",
      description:
        "We handpick agents with relevant industry experience and train them extensively on your brand voice and value proposition.",
    },
    {
      num: "03",
      icon: <Cable size={28} className="text-[#fd741e]" />,
      title: "Tech & CRM Integration",
      description:
        "We set up our predictive dialers and seamlessly integrate them with your CRM (Salesforce, HubSpot, etc.) for real-time lead syncing.",
    },
    {
      num: "04",
      icon: <Rocket size={28} className="text-[#094a84]" />,
      title: "Go-Live & Optimization",
      description:
        "Campaign goes live! We monitor early calls, gather market feedback, and continuously A/B test the script to maximize conversion rates.",
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
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#fd741e]"></span>
            <span className="text-[#094a84] font-bold text-xs uppercase tracking-widest">
              Seamless Onboarding
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#094a84] mb-6 leading-tight">
            From Setup To First Call In <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#094a84] to-[#fd741e]">
              Record Time.
            </span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            We've perfected our launch timeline so you can start seeing
            qualified leads and booked meetings without any operational
            headaches.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="relative group flex flex-col items-center text-center"
            >
              {/* Giant Background Number */}
              <div className="absolute -top-10 lg:-top-14 text-[80px] font-black text-gray-50 select-none -z-10 transition-colors duration-500 group-hover:text-blue-50/50">
                {step.num}
              </div>

              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-[0_10px_30px_rgba(9,74,132,0.1)] flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                <div
                  className={`w-16 h-16 rounded-full ${index % 2 === 0 ? "bg-orange-50" : "bg-blue-50"} flex items-center justify-center`}
                >
                  {step.icon}
                </div>
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-bold text-[#094a84] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[280px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TelecallingProcessSection;
