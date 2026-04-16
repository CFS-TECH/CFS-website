"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  TrendingDown, 
  Headset,
  CheckCircle2
} from "lucide-react";

const WhyChooseBulkHiring = () => {
  // Value Proposition Data
  const features = [
    {
      title: "Speed to Hire (Lower TAT)",
      desc: "We significantly reduce your Turnaround Time (TAT) through automated sourcing tools and our massive existing database of active job seekers.",
      icon: <Zap size={32} strokeWidth={1.5} />,
      metric: "50% Faster",
      metricLabel: "Time-to-Fill",
    },
    {
      title: "Quality at Scale",
      desc: "Bulk hiring doesn't mean compromising on quality. Every single candidate passes through rigorous standard filtering and aptitude tests before reaching you.",
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      metric: "94%",
      metricLabel: "Retention Rate",
    },
    {
      title: "Cost Efficiency (Lower CPH)",
      desc: "Save massive internal HR costs and marketing budgets. Our turnkey solutions lower your overall Cost-Per-Hire (CPH) significantly compared to individual recruitment efforts.",
      icon: <TrendingDown size={32} strokeWidth={1.5} />,
      metric: "30% Drop",
      metricLabel: "in Hiring Costs",
    },
    {
      title: "Dedicated Account Managers",
      desc: "You get a Single Point of Contact (SPOC) who deeply understands your company culture, specific role requirements, and handles all communication seamlessly.",
      icon: <Headset size={32} strokeWidth={1.5} />,
      metric: "1-on-1",
      metricLabel: "Dedicated Support",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <section className="py-24 bg-[#094a84] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#fd741e]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Side: Sticky Intro */}
          <div className="lg:w-1/3">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="sticky top-32"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#fd741e] font-bold text-xs uppercase tracking-widest mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#fd741e] animate-pulse"></span>
                The Crossover Advantage
              </motion.div>
              
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.15] tracking-tight">
                Why Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fd741e] to-orange-300">Us?</span>
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="text-blue-100/80 text-lg leading-relaxed mb-8">
                Mass recruitment is chaotic if not managed properly. We bring structure, speed, and precision to your volume hiring needs, acting as an extension of your own HR team.
              </motion.p>

              {/* Checklist */}
              <motion.div variants={fadeInUp} className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 size={20} className="text-[#fd741e]" /> Multi-City Hiring Capabilities
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 size={20} className="text-[#fd741e]" /> Strict Compliance Management
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle2 size={20} className="text-[#fd741e]" /> Custom Assessment Tests
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Features Grid */}
          <div className="lg:w-2/3 w-full">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="bg-[#102a42]/60 backdrop-blur-md p-8 rounded-[2rem] border border-white/10 hover:border-[#fd741e]/50 hover:bg-[#102a42] transition-all duration-300 flex flex-col h-full group hover:-translate-y-1 shadow-lg"
                >
                  {/* Icon & Metric Row */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-[#094a84] border border-white/5 flex items-center justify-center text-[#fd741e] shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      {item.icon}
                    </div>
                    
                    {/* Floating Metric Highlight */}
                    <div className="text-right">
                      <h5 className="text-2xl font-black text-white group-hover:text-[#fd741e] transition-colors">
                        {item.metric}
                      </h5>
                      <p className="text-[10px] uppercase font-bold tracking-widest text-blue-300/60 mt-0.5">
                        {item.metricLabel}
                      </p>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-blue-100/70 text-sm leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseBulkHiring;