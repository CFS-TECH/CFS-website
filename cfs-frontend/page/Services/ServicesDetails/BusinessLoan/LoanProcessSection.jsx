"use client";
import React from 'react';
import { MousePointerClick, UploadCloud, CheckCircle2, HandCoins } from 'lucide-react';

const LoanProcessSection = () => {
  const steps = [
    { 
      title: "Apply Online", 
      desc: "Instantly submit your enterprise details.",
      icon: <MousePointerClick className="w-8 h-8" />
    },
    { 
      title: "Upload Documents", 
      desc: "Submit your core business financials securely.",
      icon: <UploadCloud className="w-8 h-8" />
    },
    { 
      title: "Get Approval", 
      desc: "Extremely quick and accurate loan verification.",
      icon: <CheckCircle2 className="w-8 h-8" />
    },
    { 
      title: "Receive Funds", 
      desc: "Liquid cash directly credited into your account.",
      icon: <HandCoins className="w-8 h-8" />
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A192F] to-[#0F2A44] text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-4 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-semibold tracking-wide">
          SIMPLE & FAST
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16 tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">Loan Process</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Card Container */}
              <div className="bg-[#112F4E]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-[#153B61] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-15px_rgba(249,115,22,0.3)] h-full flex flex-col items-center cursor-pointer">
                
                {/* Step Number Badge */}
                <div className="absolute -top-4 w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(249,115,22,0.5)] ring-4 ring-[#0F2A44]">
                  {index + 1}
                </div>

                {/* Icon Container */}
                <div className="w-20 h-20 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl flex items-center justify-center text-orange-400 mb-6 group-hover:scale-110 group-hover:text-orange-300 transition-transform duration-300 shadow-inner">
                  {step.icon}
                </div>

                {/* Text Content */}
                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-orange-100 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {step.desc}
                </p>

                {/* Bottom Highlight */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:w-full transition-all duration-300 rounded-b-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanProcessSection;
