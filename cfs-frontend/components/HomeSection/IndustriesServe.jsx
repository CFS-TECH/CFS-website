"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Landmark, Building, ShoppingBag, Rocket, 
  ArrowRight, Globe, Cpu 
} from 'lucide-react';

const industryList = [
  {
    title: "Technology & IT",
    icon: <Cpu className="w-10 h-10 text-blue-400 group-hover:text-white transition-colors duration-500" />,
    desc: "Architecting high-performance digital systems, cloud infrastructure, and enterprise software solutions.",
    href: "/industries",
    glow: "bg-blue-500/20",
    border: "group-hover:border-blue-500/50"
  },
  {
    title: "E-Commerce",
    icon: <ShoppingBag className="w-10 h-10 text-purple-400 group-hover:text-white transition-colors duration-500" />,
    desc: "Optimizing retail operations and customer engagement through precision digital strategies.",
    href: "/industries",
    glow: "bg-purple-500/20",
    border: "group-hover:border-purple-500/50"
  },
  {
    title: "Banking & Finance",
    icon: <Landmark className="w-10 h-10 text-orange-400 group-hover:text-white transition-colors duration-500" />,
    desc: "Empowering financial institutions with secure, scalable, and efficient operational support.",
    href: "/industries",
    glow: "bg-orange-500/20",
    border: "group-hover:border-orange-500/50"
  },
  {
    title: "Real Estate",
    icon: <Building className="w-10 h-10 text-emerald-400 group-hover:text-white transition-colors duration-500" />,
    desc: "Simplifying property management and financial tracking with smart business solutions.",
    href: "/industries",
    glow: "bg-emerald-500/20",
    border: "group-hover:border-emerald-500/50"
  }
];

import useMounted from '@/hooks/useMounted';

const IndustriesServe = () => {
  const mounted = useMounted();

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: "easeOut" } 
    }
  };

  if (!mounted) return <div className="py-24 bg-[#060D18] min-h-[600px]" />;

  return (
    <section className="py-24 px-6 bg-[#060D18] relative overflow-hidden" suppressHydrationWarning>
      {/* Dynamic Background Accents */}
      <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-16 md:mb-20 gap-8">
          <div className="w-full lg:max-w-3xl text-center lg:text-start flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-6"
            >
              <Globe className="w-3.5 h-3.5" />
              Cross-Sector Expertise
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.2] lg:leading-[1.1] mb-6"
            >
              Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Empower</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-sm md:text-lg text-gray-400 font-medium leading-relaxed max-w-2xl border-none lg:border-l lg:border-orange-500/30 lg:pl-8 px-4 lg:px-0"
            >
              We provide specialized domain knowledge and technical excellence to every sector we touch, solving unique business challenges with precision-engineered results.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-auto"
          >
            <Link 
              href="/industries" 
              className="group flex items-center justify-center gap-3 bg-[#131E32] border border-[#1F2937] text-white font-bold px-8 py-4 rounded-2xl hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 active:scale-95"
            >
              View All Industries
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Industry Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {industryList.map((ind, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
            >
              <Link href={ind.href} className={`group block h-full bg-[#0B1221]/40 backdrop-blur-xl p-10 rounded-[40px] border border-[#1F2937] hover:bg-[#0B1221]/70 hover:shadow-3xl hover:shadow-orange-500/5 transition-all duration-500 relative overflow-hidden ${ind.border}`}>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 -translate-y-16 translate-x-16 rounded-full group-hover:translate-y-[-10%] group-hover:translate-x-[10%] transition-transform duration-700 ease-out"></div>
                
                <div className={`w-20 h-20 rounded-3xl ${ind.glow} flex items-center justify-center mb-10 group-hover:bg-orange-500 transition-all duration-500 relative z-10 shadow-inner overflow-hidden`}>
                   {/* Icon Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  {ind.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors relative z-10">
                  {ind.title}
                </h3>
                
                <p className="text-[16px] text-gray-400 font-medium leading-relaxed mb-10 group-hover:text-gray-300 transition-colors relative z-10">
                  {ind.desc}
                </p>
                
                <div className="mt-auto flex items-center gap-3 text-orange-500 font-bold text-xs uppercase tracking-[0.15em] relative z-10 group/btn">
                  Explore Hub
                  <span className="w-8 h-[1px] bg-orange-500 scale-x-50 group-hover/btn:scale-x-100 origin-left transition-transform duration-300"></span>
                  <ArrowRight size={14} className="opacity-0 group-hover/btn:opacity-100 -translate-x-4 group-hover/btn:translate-x-0 transition-all" />
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default IndustriesServe;