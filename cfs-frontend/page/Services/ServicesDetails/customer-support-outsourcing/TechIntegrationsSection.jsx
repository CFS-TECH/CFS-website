"use client";
import React from "react";
import { motion } from "framer-motion";
import { Layers, Zap, Cpu, Database } from "lucide-react";

const TechIntegrationsSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const toolCategories = [
    {
      category: "Helpdesk & Ticketing",
      icon: <Layers className="text-[#fd741e]" size={20} />,
      tools: ["Zendesk", "Freshdesk", "Intercom", "Jira Service Desk", "Zoho Desk"],
    },
    {
      category: "CRM & Sales",
      icon: <Database className="text-[#094a84]" size={20} />,
      tools: ["Salesforce", "HubSpot", "Pipedrive", "Microsoft Dynamics", "ActiveCampaign"],
    },
    {
      category: "E-Commerce & Retail",
      icon: <Zap className="text-[#fd741e]" size={20} />,
      tools: ["Shopify", "WooCommerce", "Magento", "Amazon Seller Central", "BigCommerce"],
    },
    {
      category: "Communication & VoIP",
      icon: <Cpu className="text-[#094a84]" size={20} />,
      tools: ["RingCentral", "Aircall", "Slack", "Microsoft Teams", "Five9"],
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#fafafa] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#094a84]"></span>
            <span className="text-[#094a84] font-bold text-xs uppercase tracking-widest">
              Plug & Play Integrations
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#094a84] mb-6">
            We Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#094a84] to-[#fd741e]">Your Tools</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Zero learning curve. Our agents are pre-trained on the world's leading CRMs, helpdesks, and e-commerce platforms. We adapt to your tech stack from day one.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {toolCategories.map((group, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_10px_30px_-15px_rgba(9,74,132,0.08)] hover:shadow-[0_20px_40px_-15px_rgba(9,74,132,0.12)] transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-50">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${idx % 2 === 0 ? 'bg-orange-50' : 'bg-blue-50'}`}>
                  {group.icon}
                </div>
                <h3 className="font-bold text-[#094a84]">{group.category}</h3>
              </div>
              
              <ul className="space-y-3">
                {group.tools.map((tool, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600 font-medium group cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#fd741e] transition-colors duration-300"></div>
                    <span className="group-hover:text-[#094a84] transition-colors duration-300">{tool}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TechIntegrationsSection;