import { WhyChooseData } from "@/utils/Utils";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="relative w-full bg-slate-50 py-16 md:py-24 overflow-hidden selection:bg-[#FE741F] selection:text-white" suppressHydrationWarning>
      {/* ===== Background Graphics ===== */}

      {/* Top Right Orange Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#FE741F]/15 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-multiply"></div>

      {/* Bottom Left Blue Glow */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#0F2B46]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none mix-blend-multiply"></div>

      {/* Soft Radial Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(254,116,31,0.05),_transparent_50%)] pointer-events-none"></div>

      {/* ===== Main Content ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
        {/* Left side - Content & Image (Sticky) */}
        <div className="w-full lg:col-span-5 lg:sticky lg:top-32 space-y-10">
          <div className="space-y-6">
            {/* Modern Badge */}
            <div className="inline-block px-4 py-1.5 bg-[#FE741F]/10 border border-[#FE741F]/20 rounded-full">
              <span className="text-[#FE741F] font-bold text-xs uppercase tracking-widest">
                Why Choose Us
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0F2B46] tracking-tight leading-tight">
              Built for <br className="hidden sm:block md:block lg:hidden" />
              Engineered for <br className="hidden sm:block md:block lg:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-orange-500 to-orange-400 drop-shadow-sm">
                Innovation
              </span>
            </h1>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
              As a top tech company in Noida, we empower businesses with enterprise-grade 
              software engineering, next-gen digital transformation, and scalable 
              technology solutions designed to fuel high-performance growth.
            </p>
          </div>

          {/* Image Container with Hover Effect */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,43,70,0.1)] border border-white/60 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B46]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
            <img
              src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496973/cfs_assets/Team.jpg"
              alt="Crossover Team"
              className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>

        {/* Right Side - Cards (Unchanged interior, refined layout positioning) */}
        <div className="w-full lg:col-span-7 flex flex-col gap-14 lg:pt-16">
          {WhyChooseData.map((card) => (
            <div
              key={card.id}
              /* Standardized margins to align right on desktop, center on mobile */
              className="bg-[#0F2B46] hover:bg-[#FE741F] w-full max-w-[500px] min-h-[140px] md:h-[140px] shadow-2xl rounded-2xl py-6 md:py-4 px-6 relative transition-all duration-500 group mx-auto lg:ml-auto lg:mr-0"
            >
              {/* Floating Icon */}
              <div className="absolute w-16 h-16 bg-white shadow-lg rounded-full p-3 -top-8 left-6 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2">
                <span className="w-full h-full text-[#0F2B46] flex items-center justify-center text-3xl">
                  {card.icon}
                </span>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 mt-4">
                <h2 className="text-white font-bold text-xl">{card.title}</h2>
                <p className="text-white/90 text-sm font-light leading-snug line-clamp-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
