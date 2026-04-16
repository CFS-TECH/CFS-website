"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Link,
  Settings,
  MapPin,
  ShoppingCart,
  BarChart,
} from "lucide-react";

const CoreSEOServices = () => {
  const seoData = [
    {
      title: "On-Page SEO",
      desc: "Optimizing your website's content, meta tags, headers, and internal linking structure to rank higher for targeted keywords.",
      icon: <FileText size={28} />,
      tags: ["Keyword Research", "Content Optimization", "Meta Tags"],
      color: "from-orange-500/10 to-orange-600/5",
    },
    {
      title: "Off-Page SEO & Link Building",
      desc: "Building your domain authority through high-quality, authoritative backlinks and strategic outreach campaigns.",
      icon: <Link size={28} />,
      tags: ["Guest Posting", "PR Outreach", "Competitor Backlinks"],
      color: "from-orange-500/10 to-orange-600/5",
    },
    {
      title: "Technical SEO",
      desc: "Ensuring search engines can easily crawl and index your site by fixing site speed, mobile-friendliness, and architecture issues.",
      icon: <Settings size={28} />,
      tags: ["Core Web Vitals", "XML Sitemaps", "Schema Markup"],
      color: "from-orange-500/10 to-orange-600/5",
    },
    {
      title: "Local SEO",
      desc: "Dominating local search results to attract nearby customers using Google Business Profile optimization and local citations.",
      icon: <MapPin size={28} />,
      tags: ["Google My Business", "Local Citations", "Review Management"],
      color: "from-orange-500/10 to-orange-600/5",
    },
    {
      title: "E-commerce SEO",
      desc: "Scaling your online store's revenue by optimizing product pages, categories, and site architecture for high commercial intent keywords.",
      icon: <ShoppingCart size={28} />,
      tags: ["Product Optimization", "Category SEO", "Conversion Tracking"],
      color: "from-orange-500/10 to-orange-600/5",
    },
    {
      title: "Analytics & Reporting",
      desc: "Transparent tracking of your SEO performance, keyword rankings, and organic traffic growth with detailed monthly reports.",
      icon: <BarChart size={28} />,
      tags: ["Google Analytics", "Search Console", "Custom Dashboards"],
      color: "from-orange-500/10 to-orange-600/5",
    },
  ];

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
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-[#fd741e] font-bold text-xs uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#fd741e] animate-pulse"></span>
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#102a42] mb-4">
            Core <span className="text-[#fd741e]">SEO</span> Services
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            We provide a 360-degree SEO approach to ensure your website
            dominates every aspect of search engine algorithms.
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
          {seoData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="relative overflow-hidden group bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-orange-100 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Decorative Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col flex-grow">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#fd741e] group-hover:bg-[#fd741e] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-[#102a42] leading-tight group-hover:text-[#fd741e] transition-colors">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>

                {/* Tags Section */}
                <div className="pt-5 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-50 group-hover:bg-white border border-gray-100 text-gray-500 text-[11px] font-semibold rounded-lg transition-colors"
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

export default CoreSEOServices;
