"use client";
import React from "react";
import { FileText, CreditCard, FileSpreadsheet, MapPin, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

const DocumentsRequired = () => {
  const docs = [
    { title: "Aadhaar Card", icon: <FileText className="w-6 h-6" /> },
    { title: "PAN Card", icon: <CreditCard className="w-6 h-6" /> },
    { title: "Salary Slips / Income Proof", icon: <BriefcaseBusiness className="w-6 h-6" /> },
    { title: "Bank Statements (last 3–6 months)", icon: <FileSpreadsheet className="w-6 h-6" /> },
    { title: "Address Proof", icon: <MapPin className="w-6 h-6" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#0F2A44 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block mb-3 px-4 py-1.5 bg-blue-100/50 border border-blue-200 rounded-full text-blue-700 text-sm font-bold tracking-wide shadow-sm">
            DOCUMENTATION
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F2A44] mb-4">
            Required <span className="text-orange-500">Documents</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
            A hassle-free process starts with the right documents. Keep these ready to get your loan faster.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {docs.map((doc, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="bg-white p-6 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(20%-20px)] rounded-2xl shadow-sm border border-gray-100 hover:border-orange-200 hover:shadow-[0_10px_30px_-10px_rgba(249,115,22,0.15)] transition-all duration-300 group flex flex-col items-center justify-center min-h-[160px] cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-sm">
                {doc.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-center leading-tight group-hover:text-orange-600 transition-colors">
                {doc.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentsRequired;
