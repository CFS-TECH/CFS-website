"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Lightbulb,
  Rocket,
  Activity,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const DigitalMarketingTimeLine = () => {
  const timelineData = [
    {
      phase: "Discovery & Audit",
      title: "Understanding Your Business Ecosystem",
      desc: "We start by analyzing your current digital footprint, target audience, and competitors to identify immediate growth opportunities and fix existing bottlenecks.",
      icon: <Search size={32} strokeWidth={1.5} />,
      deliverables: [
        "Comprehensive SEO Audit",
        "Competitor Analysis",
        "Audience Persona Generation",
      ],
      color: "text-blue-600",
      bgIcon: "bg-blue-50",
    },
    {
      phase: "Strategy Development",
      title: "Crafting the Master Blueprint",
      desc: "Based on the audit, we craft a custom multi-channel marketing strategy detailing ad spend, content calendars, keyword targeting, and clear ROI expectations.",
      icon: <Lightbulb size={32} strokeWidth={1.5} />,
      deliverables: [
        "Actionable Marketing Plan",
        "Content Calendar",
        "KPI Definition",
      ],
      color: "text-yellow-600",
      bgIcon: "bg-yellow-50",
    },
    {
      phase: "Campaign Launch",
      title: "Execution & Seamless Go-Live",
      desc: "Your campaigns are officially launched across selected platforms. We ensure all tracking pixels, Google Analytics, and conversion tags are perfectly integrated.",
      icon: <Rocket size={32} strokeWidth={1.5} />,
      deliverables: [
        "Ad Campaign Setup",
        "On-page SEO Execution",
        "Social Media Rollout",
      ],
      color: "text-[#fd741e]",
      bgIcon: "bg-orange-50",
    },
    {
      phase: "Monitor & Optimize",
      title: "Data-Driven Refinement",
      desc: "We continuously monitor campaign performance, run A/B tests on ad creatives, and tweak bidding strategies to lower your customer acquisition cost (CAC).",
      icon: <Activity size={32} strokeWidth={1.5} />,
      deliverables: [
        "A/B Testing Creatives",
        "Bid Adjustments",
        "Conversion Rate Optimization",
      ],
      color: "text-purple-600",
      bgIcon: "bg-purple-50",
    },
    {
      phase: "Scaling & Growth",
      title: "Maximizing Your ROI & Expansion",
      desc: "Once we find the winning formula, we scale the budget efficiently to maximize leads, sales, and overall brand dominance in your specific industry.",
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
      deliverables: [
        "Budget Scaling",
        "Advanced Retargeting",
        "Monthly Performance Reports",
      ],
      color: "text-green-600",
      bgIcon: "bg-green-50",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-[#102a42] mb-6 tracking-tight">
            How We Drive <span className="text-[#fd741e]">Results</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            A transparent, step-by-step approach to growing your brand online.
            From initial audit to massive scaling, here is exactly how we
            deliver measurable results.
          </p>
        </div>

        {/* Timeline List (Divided in 2 Parts per Row) */}
        <div className="flex flex-col">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="group flex flex-col md:flex-row gap-8 md:gap-16 py-12 md:py-16 border-t border-gray-100 first:border-none"
            >
              {/* --- PART 1: Left Side (Phase & Icon Only) --- */}
              <div className="md:w-1/3 flex flex-col md:items-end md:text-right shrink-0 pt-2">
                <div className="flex items-center md:flex-row-reverse gap-5">
                  <div
                    className={`w-20 h-20 rounded-[1.5rem] flex items-center justify-center ${item.bgIcon} ${item.color} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm border border-white`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-[#102a42]">
                      {item.phase}
                    </h4>
                  </div>
                </div>
              </div>

              {/* --- PART 2: Right Side (Details & List) --- */}
              <div className="md:w-2/3 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#102a42] mb-4 group-hover:text-[#fd741e] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {item.desc}
                </p>

                {/* Deliverables Grid */}
                <div>
                  <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-4">
                    What you get in this phase
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.deliverables.map((del, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-sm text-[#102a42] font-semibold bg-[#fafafa] p-4 rounded-xl border border-gray-100 transition-colors group-hover:bg-white group-hover:border-gray-200 group-hover:shadow-sm"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-[#fd741e] shrink-0"
                        />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingTimeLine;
