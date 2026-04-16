"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Link2, ShieldCheck } from "lucide-react";

const CRMIntegrations = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const platforms = [
    { name: "Salesforce", category: "Enterprise CRM" },
    { name: "HubSpot", category: "Marketing & Sales" },
    { name: "Zoho CRM", category: "Business Suite" },
    { name: "Pipedrive", category: "Sales Pipeline" },
    { name: "Microsoft Dynamics", category: "ERP & CRM" },
    { name: "Freshsales", category: "Engagement CRM" },
  ];

  return (
    <section className="py-20 bg-[#fafafa] relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="pattern-hex"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M25 0 L50 15 L50 35 L25 50 L0 35 L0 15 Z"
              fill="none"
              stroke="#094a84"
              strokeWidth="1"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-hex)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <Link2 size={16} className="text-[#094a84]" />
              <span className="text-[#094a84] font-bold text-xs uppercase tracking-widest">
                Seamless Sync
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#094a84] mb-6 leading-tight">
              One Team. <br />
              <span className="text-[#fd741e]">Every Major Platform.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Humaari team ko naye tools seekhne ki zarurat nahi hai. Hum pehle
              se hi world-class CRM systems me certified hain. Aap jo bhi tool
              use karte ho, hum wahi se start karenge.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-100 p-1 rounded-full">
                  <ShieldCheck size={16} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-[#094a84]">API Ready</h4>
                  <p className="text-xs text-gray-500">
                    Secure data bridge between systems.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-blue-100 p-1 rounded-full">
                  <Cpu size={16} className="text-[#094a84]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#094a84]">Automation</h4>
                  <p className="text-xs text-gray-500">
                    Custom workflow triggers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Platform Cards Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {platforms.map((platform, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#fd741e]/30 transition-all text-center group"
              >
                <div className="w-12 h-12 bg-[#fafafa] rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                  <Globe
                    size={24}
                    className="text-gray-400 group-hover:text-[#fd741e]"
                  />
                </div>
                <h4 className="font-bold text-[#094a84] text-sm mb-1">
                  {platform.name}
                </h4>
                <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">
                  {platform.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMIntegrations;
