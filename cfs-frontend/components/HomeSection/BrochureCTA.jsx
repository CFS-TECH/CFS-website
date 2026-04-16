"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const BrochureCTA = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#102A43] to-[#0a1a2a] rounded-[40px] p-8 md:p-16 shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                Want to see our <span className="text-orange-500">Full Capabilities?</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-8">
                Download our detailed corporate brochure to explore our end-to-end BPO, Financial, and IT solutions in depth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/brochure"
                  className="group flex items-center gap-3 bg-orange-500 text-white font-bold px-8 py-4 rounded-2xl hover:bg-orange-400 transition-all shadow-xl shadow-orange-500/20 active:scale-95"
                >
                  View Brochure <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="/assets/docs/CFS-Brochure.pdf"
                  download
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white hover:text-[#102A43] transition-all active:scale-95"
                >
                  Download PDF <FileDown className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[400px] aspect-[4/3] bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center">
                 <div className="w-24 h-24 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6">
                    <FileDown className="w-12 h-12 text-orange-500" />
                 </div>
                 <h4 className="text-white text-xl font-bold mb-2">Corporate Brochure 2026</h4>
                 <p className="text-gray-400 text-sm">Comprehensive guide to our services, mission, and client success stories.</p>
              </div>
              <div className="absolute -inset-4 bg-orange-500/5 blur-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureCTA;
