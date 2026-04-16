"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Apple,
  Layers,
  Server,
  Cpu,
  RefreshCw,
  CheckCircle2,
  Star,
} from "lucide-react";

const DesktopAppDevelopment = () => {
  // Highly Enriched Data for Desktop Apps
  const desktopData = [
    {
      title: "Native Windows Apps",
      desc: "High-performance applications built specifically for the Windows ecosystem with deep hardware integration.",
      bestFor: "Enterprise software & heavy computation",
      icon: <Monitor size={28} />,
      isPopular: true,
      features: [
        "Deep OS & Hardware Level Integration",
        "High-performance WPF & UWP Interfaces",
        "Active Directory & Windows Auth Sync",
        "Offline-first & Local Storage Support",
      ],
      tags: ["C#", ".NET Core", "C++", "WPF", "WinUI"],
      color: "from-blue-500/10 to-transparent",
      bgBadge: "bg-[#102a42] text-blue-300 border-blue-800/50",
    },
    {
      title: "Native macOS Apps",
      desc: "Fluid, secure, and intuitive applications optimized for Apple Silicon and the macOS environment.",
      bestFor: "Creative tools & productivity",
      icon: <Apple size={28} />,
      isPopular: false,
      features: [
        "Apple Silicon (M1/M2/M3) Optimization",
        "Sandboxed Security & App Store Launch",
        "iCloud Sync & Native Mac Features",
        "Metal Graphics API Integration",
      ],
      tags: ["Swift", "Objective-C", "Cocoa", "Xcode", "Metal"],
      color: "from-gray-500/10 to-transparent",
      bgBadge: "bg-[#102a42] text-gray-300 border-gray-700/50",
    },
    {
      title: "Cross-Platform Desktop",
      desc: "Single codebase solutions that run flawlessly on Windows, macOS, and Linux.",
      bestFor: "SaaS wrappers & fast market entry",
      icon: <Layers size={28} />,
      isPopular: true,
      features: [
        "Write Once, Deploy on Win/Mac/Linux",
        "Web-technology Powered (HTML/CSS/JS)",
        "Seamless Auto-Updater Integration",
        "Cost-effective & Faster Development",
      ],
      tags: ["Electron", "Tauri", "React", "Node.js", "Rust"],
      color: "from-purple-500/10 to-transparent",
      bgBadge: "bg-[#102a42] text-purple-300 border-purple-800/50",
    },
    {
      title: "Enterprise ERP / CRM",
      desc: "Large-scale, customized desktop software designed to manage complex business operations and data.",
      bestFor: "Large scale businesses & internal teams",
      icon: <Server size={28} />,
      isPopular: false,
      features: [
        "Custom ERP/CRM System Architecture",
        "Legacy System & API Integration",
        "Role-based Access & Activity Logging",
        "Heavy Database Management",
      ],
      tags: ["Java", "Spring Boot", "SQL", "Python", "Docker"],
      color: "from-red-500/10 to-transparent",
      bgBadge: "bg-[#102a42] text-red-300 border-red-800/50",
    },
    {
      title: "System Utilities & Drivers",
      desc: "Low-level system applications, background services, and custom hardware drivers.",
      bestFor: "Hardware control & background tasks",
      icon: <Cpu size={28} />,
      isPopular: false,
      features: [
        "Low-level Memory Safe Operations",
        "Custom Device Driver Development",
        "Background Task Processing",
        "High-speed & Zero-latency Execution",
      ],
      tags: ["Rust", "C", "C++", "Assembly", "System API"],
      color: "from-green-500/10 to-transparent",
      bgBadge: "bg-[#102a42] text-green-300 border-green-800/50",
    },
    {
      title: "Legacy Modernization",
      desc: "Revamping outdated desktop software with modern UI/UX, cloud connectivity, and optimized codebases.",
      bestFor: "Outdated software requiring upgrades",
      icon: <RefreshCw size={28} />,
      isPopular: true,
      features: [
        "Complete UI/UX Interface Overhaul",
        "Codebase Migration to Modern Tech",
        "Cloud Database & API Connectivity",
        "Performance & Security Benchmarking",
      ],
      tags: ["Refactoring", "UI/UX", "Cloud Sync", "Migration"],
      color: "from-[#fd741e]/10 to-transparent",
      bgBadge: "bg-[#102a42] text-[#fd741e] border-[#fd741e]/30",
    },
  ];

  // Animation Variants
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
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="py-24 relative bg-[#102a42] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-20 text-center"
        >
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Desktop Application{" "}
            <span className="text-[#fd741e]">Development</span>
          </h3>
          <p className="text-blue-100/80 max-w-3xl mx-auto text-lg leading-relaxed">
            For complex business operations, high-performance computing, or
            offline capabilities, we build powerful applications installed
            directly onto computer hardware.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
        >
          {desktopData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className={`relative overflow-hidden group bg-[#1a3e5e]/40 backdrop-blur-md border border-[#1a3e5e] p-8 rounded-[2.5rem] shadow-2xl hover:border-[#fd741e]/50 hover:bg-[#1a3e5e]/60 transition-all duration-500 flex flex-col h-full`}
            >
              {/* Decorative Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Popular Badge */}
              {item.isPopular && (
                <div className="absolute top-6 right-6 flex items-center gap-1 bg-[#fd741e]/10 text-[#fd741e] border border-[#fd741e]/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider z-20">
                  <Star size={12} fill="currentColor" /> Popular
                </div>
              )}

              <div className="relative z-10 flex flex-col flex-grow">
                {/* Icon & Title Row */}
                <div className="flex flex-col gap-4 mb-5">
                  <div className="w-16 h-16 shrink-0 rounded-[1.25rem] bg-[#102a42] shadow-inner border border-[#1a3e5e] flex items-center justify-center text-[#fd741e] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white leading-tight group-hover:text-[#fd741e] transition-colors mb-2">
                      {item.title}
                    </h4>
                    <span
                      className={`inline-block px-3 py-1.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${item.bgBadge}`}
                    >
                      Best for: {item.bestFor}
                    </span>
                  </div>
                </div>

                {/* Main Description */}
                <p className="text-blue-100/80 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>

                {/* Key Features List */}
                <div className="mb-8 space-y-3 flex-grow">
                  <h5 className="text-[11px] uppercase font-bold tracking-widest text-blue-300/50 mb-3">
                    What's Included
                  </h5>
                  {item.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-blue-50 font-medium"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-[#fd741e] shrink-0 mt-0.5 opacity-90"
                      />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tags Section */}
                <div className="pt-6 border-t border-[#1a3e5e]/60 mt-auto">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-blue-300/50 mb-3">
                    Core Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#102a42] group-hover:bg-[#1a3e5e] border border-[#1a3e5e] text-blue-200 text-[11px] font-bold rounded-lg transition-colors shadow-sm"
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

export default DesktopAppDevelopment;
