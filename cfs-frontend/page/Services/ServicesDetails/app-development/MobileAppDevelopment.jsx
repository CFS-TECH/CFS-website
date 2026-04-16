"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Apple,
  Smartphone,
  Layers,
  PenTool,
  ShieldCheck,
  Settings,
  CheckCircle2,
  Star,
} from "lucide-react";

const MobileAppDevelopment = () => {
  // Highly Enriched Data without Timeline and Pricing Model
  const mobileData = [
    {
      title: "Native iOS Development",
      desc: "High-performance, secure, and scalable applications built specifically for the Apple ecosystem.",
      bestFor: "High-end consumer apps & games",
      icon: <Apple size={28} />,
      isPopular: true,
      features: [
        "Face ID, ARKit & Apple Pay Integration",
        "App Store Optimization (ASO) & Launch",
        "Custom SwiftUI Fluid Components",
        "Strict Apple Human Interface Guidelines",
      ],
      tags: ["Swift", "Objective-C", "iOS SDK", "SwiftUI", "CoreData", "XCode"],
      color: "from-blue-500/10 to-blue-600/5",
      bgBadge: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      title: "Native Android Development",
      desc: "Robust applications engineered to run flawlessly across a vast array of devices and screen sizes.",
      bestFor: "Mass market & global audience",
      icon: <Smartphone size={28} />,
      isPopular: false,
      features: [
        "Material Design 3.0 & Custom UI/UX",
        "Google Play Services & Firebase Sync",
        "Deep Hardware-level Optimization",
        "Support for Multiple Screen Resolutions",
      ],
      tags: ["Kotlin", "Java", "Android Studio", "Jetpack Compose", "Room DB"],
      color: "from-green-500/10 to-green-600/5",
      bgBadge: "bg-green-50 text-green-600 border-green-100",
    },
    {
      title: "Cross-Platform (Hybrid)",
      desc: "Single codebase solution that delivers a native-like experience on both iOS and Android simultaneously.",
      bestFor: "Startups & quick MVP launches",
      icon: <Layers size={28} />,
      isPopular: true,
      features: [
        "Write Once, Deploy Anywhere (iOS/Android)",
        "Faster Time-to-Market & Lower Cost",
        "Native-like Performance & Animations",
        "Easy API & Third-Party Integrations",
      ],
      tags: ["React Native", "Flutter", "Node.js", "Dart", "Firebase"],
      color: "from-purple-500/10 to-purple-600/5",
      bgBadge: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      title: "UI/UX App Design",
      desc: "User-centric interface designs with smooth micro-interactions that guarantee high user retention.",
      bestFor: "App makeovers & user retention",
      icon: <PenTool size={28} />,
      isPopular: false,
      features: [
        "Interactive Clickable Figma Prototypes",
        "In-depth User Journey Mapping",
        "Accessibility Standard Compliance (WCAG)",
        "Brand Identity & Asset Generation",
      ],
      tags: ["Figma", "Prototyping", "Wireframing", "UI Design", "UX Research"],
      color: "from-[#fd741e]/10 to-[#fd741e]/5",
      bgBadge: "bg-orange-50 text-[#fd741e] border-orange-100",
    },
    {
      title: "Enterprise Mobility",
      desc: "Custom internal applications built with enterprise-grade security to streamline workforce operations.",
      bestFor: "B2B solutions & employee portals",
      icon: <ShieldCheck size={28} />,
      isPopular: false,
      features: [
        "Active Directory & SSO Authentication",
        "Offline Data Synchronization",
        "End-to-End Military Grade Encryption",
        "Integration with Legacy ERP/CRM",
      ],
      tags: ["Secure API", "Cloud Sync", "Encryption", "SSO", "MDM", "AWS"],
      color: "from-red-500/10 to-red-600/5",
      bgBadge: "bg-red-50 text-red-600 border-red-100",
    },
    {
      title: "App Maintenance & SLA",
      desc: "Continuous monitoring, bug fixing, and feature updates to ensure your mobile application never crashes.",
      bestFor: "Post-launch stability & scaling",
      icon: <Settings size={28} />,
      isPopular: true,
      features: [
        "24/7 Real-time Crash Monitoring",
        "Latest OS Version Upgrades (iOS/Android)",
        "Performance Tuning & Speed Audits",
        "Dedicated DevOps & QA Support",
      ],
      tags: [
        "Optimization",
        "QA Testing",
        "Updates",
        "Support",
        "CI/CD",
        "Sentry",
      ],
      color: "from-gray-500/10 to-gray-600/5",
      bgBadge: "bg-gray-100 text-gray-700 border-gray-200",
    },
  ];

  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#102a42] mb-4">
            Our <span className="text-[#fd741e]">Mobile</span> Expertise
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Comprehensive end-to-end mobile app development services tailored
            for your business needs.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {mobileData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden group bg-white border border-gray-100 p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full`}
            >
              {/* Decorative Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Popular Badge */}
              {item.isPopular && (
                <div className="absolute top-6 right-6 flex items-center gap-1 bg-yellow-50 text-yellow-600 border border-yellow-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider z-20">
                  <Star size={12} fill="currentColor" /> Popular
                </div>
              )}

              <div className="relative z-10 flex flex-col flex-grow">
                {/* Icon & Title Row */}
                <div className="flex flex-col gap-4 mb-5">
                  <div className="w-16 h-16 shrink-0 rounded-[1.25rem] bg-white shadow-sm border border-gray-100 flex items-center justify-center text-[#fd741e] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#102a42] leading-tight group-hover:text-[#fd741e] transition-colors mb-1">
                      {item.title}
                    </h4>
                    <span
                      className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${item.bgBadge}`}
                    >
                      Best for: {item.bestFor}
                    </span>
                  </div>
                </div>

                {/* Main Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Key Features List */}
                <div className="mb-8 space-y-3 flex-grow">
                  <h5 className="text-[11px] uppercase font-bold tracking-widest text-gray-400 mb-2">
                    What's Included
                  </h5>
                  {item.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600 font-medium"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-[#fd741e] shrink-0 mt-0.5"
                      />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tags Section */}
                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-3">
                    Core Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-gray-50 group-hover:bg-white border border-gray-100 text-gray-700 text-[11px] font-bold rounded-lg transition-colors shadow-sm"
                      >
                        {tag}
                      </span>
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

export default MobileAppDevelopment;
