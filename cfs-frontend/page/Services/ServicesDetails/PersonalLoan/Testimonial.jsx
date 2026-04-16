"use client";
import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonial = () => {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-10 md:p-14 lg:p-16 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14 relative"
        >
          {/* Quote Section (Left) */}
          <div className="flex-1 text-center md:text-left">
            <Quote className="w-10 h-10 text-orange-400 mb-4 mx-auto md:mx-0 opacity-50" />
            <h2 className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed italic">
              "I got my personal loan approved within 24 hours. The process was super smooth and completely hassle-free! Highly recommended."
            </h2>
          </div>

          {/* User Profile Section (Right) */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-gray-100 md:pl-10 shrink-0">
            <div className="w-14 h-14 bg-gray-200 rounded-full border-2 border-orange-500 overflow-hidden shadow-sm shrink-0">
              <img src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496954/cfs_assets/sharita-sharma.jpg" alt="Sharita Sharma" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900 text-lg leading-tight">Sharita Sharma</p>
              <p className="text-xs text-gray-500 font-medium tracking-wide uppercase mt-0.5 mb-1.5">Verified Customer</p>
              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
