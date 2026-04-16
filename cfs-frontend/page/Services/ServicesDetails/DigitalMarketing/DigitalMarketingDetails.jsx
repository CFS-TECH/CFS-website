"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  Share2,
  PenTool,
  Mail,
  LineChart,
  CheckCircle2,
  Star,
} from "lucide-react";

// details
const digitalMarketingData = [
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Data-driven SEO strategies to improve organic rankings, drive targeted traffic, and increase overall domain authority.",
    bestFor: "Long-term organic growth",
    icon: <TrendingUp size={28} />,
    isPopular: true,
    features: [
      "Comprehensive Technical SEO Audit",
      "On-Page & Off-Page Optimization",
      "High-Quality Backlink Building",
      "Local SEO & Google Business Profile",
    ],
    tags: ["Ahrefs", "SEMrush", "GSC", "Screaming Frog", "Yoast"],
    color: "from-blue-500/10 to-blue-600/5",
    bgBadge: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    desc: "High-converting ad campaigns across search engines and partner networks to deliver immediate, measurable ROI.",
    bestFor: "Immediate leads & sales",
    icon: <Target size={28} />,
    isPopular: true,
    features: [
      "Google Ads & Bing Ads Management",
      "Strategic Keyword Bidding & Targeting",
      "A/B Testing for Ad Creatives",
      "Landing Page Conversion Optimization",
    ],
    tags: ["Google Ads", "Tag Manager", "Looker Studio", "Unbounce"],
    color: "from-green-500/10 to-green-600/5",
    bgBadge: "bg-green-50 text-green-600 border-green-100",
  },
  {
    title: "Social Media Marketing (SMM)",
    desc: "Engaging social media strategies that build brand awareness, foster community, and drive viral user engagement.",
    bestFor: "Brand awareness & community",
    icon: <Share2 size={28} />,
    isPopular: false,
    features: [
      "Custom Content Creation & Curation",
      "Community Management & Engagement",
      "Influencer Outreach & Partnerships",
      "Paid Social Campaigns (Meta, LinkedIn)",
    ],
    tags: ["Meta Ads", "Hootsuite", "Canva", "LinkedIn Ads", "TikTok Ads"],
    color: "from-purple-500/10 to-purple-600/5",
    bgBadge: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    title: "Content Marketing & Strategy",
    desc: "Compelling storytelling and high-value content that establishes your brand as an industry authority and nurtures leads.",
    bestFor: "Authority building & inbound",
    icon: <PenTool size={28} />,
    isPopular: false,
    features: [
      "In-depth Content Audits & Strategy",
      "Blog Posts, Whitepapers & E-Books",
      "Video Scripting & Production Support",
      "SEO-optimized Copywriting",
    ],
    tags: ["WordPress", "Grammarly", "HubSpot", "SurferSEO"],
    color: "from-[#fd741e]/10 to-[#fd741e]/5",
    bgBadge: "bg-orange-50 text-[#fd741e] border-orange-100",
  },
  {
    title: "Email & SMS Marketing",
    desc: "Personalized, automated communication flows designed to retain customers, recover abandoned carts, and boost LTV.",
    bestFor: "Customer retention & upselling",
    icon: <Mail size={28} />,
    isPopular: false,
    features: [
      "Automated Drip Campaigns & Flows",
      "List Segmentation & Personalization",
      "A/B Subject Line & Content Testing",
      "Abandoned Cart & Win-back Sequences",
    ],
    tags: ["Klaviyo", "ActiveCampaign", "Mailchimp", "Twilio", "Omnisend"],
    color: "from-red-500/10 to-red-600/5",
    bgBadge: "bg-red-50 text-red-600 border-red-100",
  },
  {
    title: "Conversion Rate Optimization",
    desc: "Data-backed website optimizations that turn your existing traffic into paying customers and highly qualified leads.",
    bestFor: "Maximizing existing web traffic",
    icon: <LineChart size={28} />,
    isPopular: true,
    features: [
      "Heatmap & User Behavior Analysis",
      "Multivariate & A/B Page Testing",
      "Frictionless Checkout Optimization",
      "Form & CTA Placement Strategy",
    ],
    tags: ["Hotjar", "Google Optimize", "Crazy Egg", "Optimizely", "VWO"],
    color: "from-gray-500/10 to-gray-600/5",
    bgBadge: "bg-gray-100 text-gray-700 border-gray-200",
  },
];
const DigitalMarketingDetails = () => {
  return (
    <div className="md:p-16 sm:p-8 p-2">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-[#102a42] mb-4">
          Our <span className="text-[#fd741e]">Digital Marketing</span>{" "}
          Expertise
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Data-driven marketing strategies designed to elevate your brand, drive
          targeted traffic, and maximize your ROI across all digital channels.
        </p>
      </div>

      <section className="grid lg:grid-cols-3 md:grid-rows-2 grid-cols-1 gap-8">
        {digitalMarketingData.map((item, idx) => {
          return <DigitalMarketingDetailsCard item={item} key={idx} />;
        })}
      </section>
    </div>
  );
};

export default DigitalMarketingDetails;

const DigitalMarketingDetailsCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.5 }}
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
  );
};
