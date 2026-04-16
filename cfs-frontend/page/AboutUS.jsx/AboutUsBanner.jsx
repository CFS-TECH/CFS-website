"use client";
import React from "react";

const AboutUsBanner = () => {
  return (
    <section className="relative w-full min-h-[70vh] md:h-[60vh] flex items-center overflow-hidden bg-black">
      
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="https://res.cloudinary.com/dsqstik0x/image/upload/v1772175612/rm314-adj-02_tl3h7i.jpg"
          alt="IT Background"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16">
        <div className="max-w-3xl flex flex-col space-y-6 items-start">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/20 border border-orange-500/50 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]"></span>
            <p className="text-orange-100 text-[10px] md:text-xs font-mono uppercase tracking-[0.2em]">
              STATUS: DIGITAL_ECOSYSTEM_ACTIVE
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none">
            Building Smart <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-orange-400 to-orange-600">
              Business Ecosystems.
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-200 text-base md:text-xl max-w-xl leading-relaxed border-l-2 border-orange-600 pl-6">
            From web development and AI strategy to financial solutions, we transform complex challenges into a seamless digital reality.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button className="px-8 py-4 bg-orange-600 text-white font-bold rounded-sm hover:bg-orange-500 transition-all shadow-lg group overflow-hidden relative">
              <span className="relative z-10 uppercase text-sm tracking-wider">Explore Services</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </button>
    
    <button className="px-8 py-4 bg-orange-600 text-white font-bold rounded-sm hover:bg-orange-500 transition-all shadow-lg group overflow-hidden relative">
              <span className="relative z-10 uppercase text-sm tracking-wider">Get Consultation</span>
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
            </button>

          </div>

        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes zoomInfinite {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        .animate-slow-zoom {
          animation: zoomInfinite 20s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
};

export default AboutUsBanner;