"use client";
import React from 'react';
import { Sparkles, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const FinalCTA = () => {
  return (
    <section className="relative py-24 bg-[#0F2A44] overflow-hidden">
      {/* Glowing Backdrop */}
      <div className="absolute inset-0 bg-[url('/texture-pattern.png')] opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-orange-500/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-8 backdrop-blur-md border border-white/20">
            <Sparkles className="w-8 h-8 text-orange-400 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Take your business <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">to the next level</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Apply today and get the funding you need with a fast and flawlessly hassle-free process.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/contact-us" className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-500 text-white px-10 py-4 text-lg rounded-full font-bold shadow-[0_10px_30px_-10px_rgba(249,115,22,0.8)] hover:shadow-[0_15px_40px_-10px_rgba(249,115,22,1)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              Apply Now
            </Link>
            <a href="tel:+919990782525" className="w-full sm:w-auto bg-transparent border-2 border-white/20 text-white hover:bg-white/10 px-10 py-4 text-lg rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm">
              <PhoneCall className="w-5 h-5" />
              Talk to Expert
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
