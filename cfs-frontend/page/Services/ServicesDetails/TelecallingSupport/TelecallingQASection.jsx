"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mic,
  ShieldCheck,
  Activity,
  Headphones,
  CheckCircle2,
  Volume2,
} from "lucide-react";

const TelecallingQASection = () => {
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
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const qaFeatures = [
    {
      icon: <Mic size={24} className="text-[#fd741e]" />,
      title: "Rigorous Voice & Accent Training",
      description:
        "Agents undergo strict communication training to ensure clear, professional, and empathetic conversations.",
    },
    {
      icon: <Activity size={24} className="text-[#094a84]" />,
      title: "Live Monitoring & Scoring",
      description:
        "Our QA team regularly monitors, scores, and provides real-time feedback on live calls to maintain high standards.",
    },
    {
      icon: <Headphones size={24} className="text-[#fd741e]" />,
      title: "Dynamic Scripting & Objection Handling",
      description:
        "We don't just read scripts. We train agents on deep product knowledge and advanced objection handling.",
    },
    {
      icon: <ShieldCheck size={24} className="text-[#094a84]" />,
      title: "Strict Data Compliance",
      description:
        "100% adherence to DNC (Do Not Call) lists, TCPA, and GDPR regulations to protect your business legally.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#fafafa] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#fd741e]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left Column: Text & Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#094a84]"></span>
              <span className="text-[#094a84] font-bold text-xs uppercase tracking-widest">
                Quality Assurance
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-[#094a84] leading-tight mb-6"
            >
              We Protect Your Brand <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#094a84] to-[#fd741e]">
                On Every Single Call.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 text-base md:text-lg mb-10 max-w-lg"
            >
              Outbound calling isn't just about dialing numbers; it's about
              representing your company perfectly. Our multi-layered QA process
              ensures every pitch is flawless.
            </motion.p>

            {/* Features List */}
            <div className="space-y-6 w-full">
              {qaFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col sm:flex-row items-start gap-4 group text-left bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#094a84] mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Abstract QA Dashboard Visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(9,74,132,0.08)] border border-gray-100 z-10">
              {/* Header */}
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                    <Volume2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#094a84]">
                      Live Call Audit
                    </h4>
                    <p className="text-xs text-gray-400 font-medium">
                      Agent: Rahul Sharma | ID: #9942
                    </p>
                  </div>
                </div>
                <div className="bg-[#094a84] text-white px-3 py-1 rounded-full text-xs font-bold">
                  Score: 96/100
                </div>
              </div>

              {/* Fake QA Metrics */}
              <div className="space-y-5">
                {[
                  {
                    label: "Opening & Greeting",
                    score: "10/10",
                    color: "bg-green-500",
                    width: "w-[100%]",
                  },
                  {
                    label: "Script Adherence",
                    score: "9/10",
                    color: "bg-green-500",
                    width: "w-[90%]",
                  },
                  {
                    label: "Objection Handling",
                    score: "9/10",
                    color: "bg-[#094a84]",
                    width: "w-[90%]",
                  },
                  {
                    label: "Tone & Empathy",
                    score: "10/10",
                    color: "bg-[#fd741e]",
                    width: "w-[100%]",
                  },
                ].map((metric, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-gray-600">{metric.label}</span>
                      <span className="text-gray-800">{metric.score}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: metric.width.replace(/w-\[|\]/g, ""),
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.5 + i * 0.2,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        className={`h-full ${metric.color} rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlight Box */}
              <div className="mt-8 bg-orange-50 border border-orange-100 rounded-2xl p-4 flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="text-[#fd741e] shrink-0 mt-0.5"
                />
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  <span className="font-bold text-[#fd741e]">
                    Status: Passed.
                  </span>{" "}
                  Agent successfully identified the decision-maker, handled the
                  pricing objection, and booked the calendar invite.
                </p>
              </div>
            </div>

            {/* Decorative Background Blob behind the card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#094a84]/20 to-[#fd741e]/20 rounded-3xl blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TelecallingQASection;
