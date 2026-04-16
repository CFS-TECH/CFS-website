"use client";
import React from "react";
import { Timer, BadgePercent, ThumbsUp, ShieldCheck, Headset } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const points = [
    {
      title: "Fast Processing",
      desc: "No long waiting periods. We process your loan rapidly.",
      icon: <Timer className="w-8 h-8" />,
    },
    {
      title: "Best Interest Rates",
      desc: "Stay ahead with highly competitive industry pricing.",
      icon: <BadgePercent className="w-8 h-8" />,
    },
    {
      title: "Easy Approval",
      desc: "Optimized criteria for higher chances of loan approval.",
      icon: <ThumbsUp className="w-8 h-8" />,
    },
    {
      title: "Trusted Service",
      desc: "Countless thousands of happy customers rely on us.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Expert Assistance",
      desc: "Unmatched professional support at every single step.",
      icon: <Headset className="w-8 h-8" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
  };

  return (
    <section className="py-24 bg-[#0A192F] relative overflow-hidden">
      {/* Dark Premium Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-blue-400 text-sm font-bold tracking-wide backdrop-blur-sm">
            CORE ADVANTAGES
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 tracking-tight">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Choose Us</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {points.map((item, index) => (
            <motion.div
              variants={itemVariants}
              key={index}
              className="bg-[#112F4E]/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-[#153B61] transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.4)] relative cursor-pointer overflow-hidden"
            >
              {/* Shine Effect */}
              <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-700 ease-out"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-br from-white/5 to-white/10 rounded-full flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:text-white group-hover:bg-blue-500 transition-all duration-300 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
