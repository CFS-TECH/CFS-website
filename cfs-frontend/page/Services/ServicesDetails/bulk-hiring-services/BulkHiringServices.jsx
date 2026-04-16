"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Building2,
  GraduationCap,
  CalendarCheck,
  Briefcase,
  UserCheck,
} from "lucide-react";

const BulkHiringServices = () => {
  // B2B Consultancy Services Data
  const hiringData = [
    {
      title: "End-to-End Mass Recruitment",
      desc: "We manage the entire hiring lifecycle for large-scale requirements. From aggressive candidate sourcing to final onboarding, we ensure you meet your strict headcount targets on time.",
      icon: <Users size={28} />,
      tags: ["Sourcing Strategy", "Multi-level Screening", "Target-Driven"],
      color: "from-blue-500/5 to-blue-600/5",
    },
    {
      title: "Turnkey Staffing Solutions",
      desc: "Launching a new branch or starting a massive project? We provide complete turnkey recruitment solutions, building your entire departmental teams from the ground up simultaneously.",
      icon: <Building2 size={28} />,
      tags: ["Project Hiring", "Branch Expansion", "Rapid Scaling"],
      color: "from-orange-500/5 to-orange-600/5",
    },
    {
      title: "Campus & Fresher Drives",
      desc: "We partner with top-tier universities and technical institutes to organize mega campus placement drives, bringing the best and brightest emerging young talent directly to your company.",
      icon: <GraduationCap size={28} />,
      tags: ["University Tie-ups", "Aptitude Testing", "Bulk Intake"],
      color: "from-blue-500/5 to-blue-600/5",
    },
    {
      title: "Mega Walk-in Drives",
      desc: "We organize, market, and execute mega walk-in interview events. Our dedicated team handles venue logistics, crowd management, and primary filtering to give your HR team the best candidates.",
      icon: <CalendarCheck size={28} />,
      tags: ["Event Management", "Crowd Filtering", "Spot Offers"],
      color: "from-orange-500/5 to-orange-600/5",
    },
    {
      title: "Contractual & Seasonal Staffing",
      desc: "Easily scale your workforce up or down based on seasonal demands. We provide highly skilled temporary staff for short-term needs without adding long-term employee liabilities to your books.",
      icon: <Briefcase size={28} />,
      tags: ["Flexible Workforce", "Payroll Management", "Seasonal Hiring"],
      color: "from-blue-500/5 to-blue-600/5",
    },
    {
      title: "Pre-Assessed Talent Pooling",
      desc: "Need niche skills urgently? We maintain a massive, active, and pre-assessed database of ready-to-deploy candidates for high-volume roles like Customer Support, Sales, and IT Support.",
      icon: <UserCheck size={28} />,
      tags: ["BPO & Tech Support", "Sales Profiles", "Immediate Joining"],
      color: "from-orange-500/5 to-orange-600/5",
    },
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#094a84] font-bold text-xs uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#fd741e] animate-pulse"></span>
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#094a84] mb-6 tracking-tight">
            Specialized <span className="text-[#fd741e]">Bulk Hiring</span>{" "}
            Solutions
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We help enterprises, startups, and expanding businesses scale their
            workforce rapidly. Let us handle the volume while you focus on core
            business growth without compromising on talent quality.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {hiringData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="relative overflow-hidden group bg-white border border-gray-100 p-8 rounded-[2rem] shadow-[0_4px_20px_rgba(9,74,132,0.03)] hover:shadow-xl hover:border-orange-100 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              {/* Decorative Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col flex-grow">
                {/* Icon & Title Row */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#f4f7fb] border border-gray-100 flex items-center justify-center text-[#fd741e] group-hover:bg-[#fd741e] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#094a84] leading-tight group-hover:text-[#fd741e] transition-colors">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>

                {/* Tags / Key Highlights Section */}
                <div className="pt-5 border-t border-gray-100 mt-auto">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-3">
                    Key Highlights
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#fafafa] group-hover:bg-white border border-gray-100 text-gray-500 group-hover:text-[#094a84] text-[11px] font-bold rounded-lg transition-colors shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BulkHiringServices;
