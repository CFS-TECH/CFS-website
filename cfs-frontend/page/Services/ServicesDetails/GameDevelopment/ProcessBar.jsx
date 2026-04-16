import React from "react";
import {
  FaLightbulb,
  FaGamepad,
  FaVial,
  FaCloudUploadAlt,
} from "react-icons/fa";

const ProcessBar = () => {
  const gameDevelopmentProcessData = [
    {
      title: "Concept & Planning",
      icons: <FaLightbulb size={24} />,
      description:
        "We begin by diving deep into your game idea. Our team analyzes your target audience, core mechanics, and monetization goals to create a comprehensive roadmap for success.",
    },
    {
      title: "Design & Development",
      icons: <FaGamepad size={24} />,
      description:
        "Our developers and artists bring your world to life. We build engaging gameplay mechanics, high-quality graphics, and robust technical frameworks using industry-leading engines.",
    },
    {
      title: "Testing & Optimization",
      icons: <FaVial size={24} />,
      description:
        "Quality is paramount. We rigorously test for bugs, performance bottlenecks, and device compatibility to ensure a smooth, lag-free experience for every player.",
    },
    {
      title: "Launch & Support",
      icons: <FaCloudUploadAlt size={24} />,
      description:
        "We handle the heavy lifting of deployment and provide continuous post-launch support, updates, and improvements to keep your community engaged and growing.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-6 lg:px-8 py-24 gap-12 lg:gap-20 ">
      
      {/* Left Sticky Content */}
      <div className="w-full md:w-5/12 md:sticky md:top-32 h-fit">
        <h2 className="text-[#fd741e] font-bold tracking-widest uppercase text-sm mb-4">
          How We Work
        </h2>
        <h3 className="flex flex-col font-black leading-tight text-[#094a84]">
          <span className="text-4xl md:text-5xl">Our Game</span>
          <span className="text-5xl md:text-6xl text-[#fd741e] my-1">Development</span>
          <span className="text-6xl md:text-7xl">Process</span>
        </h3>
        <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-sm">
          From initial concept to final deployment, we follow a streamlined, transparent process to deliver exceptional gaming experiences tailored to your vision.
        </p>
      </div>

      {/* Right Scrollable Timeline Cards */}
      <div className="w-full md:w-7/12 relative">
        {/* Continuous Vertical Connecting Line (Desktop) */}
        <div className="hidden md:block absolute left-[31px] top-10 bottom-10 w-1 bg-gradient-to-b from-[#fd741e] via-orange-200 to-transparent opacity-30"></div>

        <div className="flex flex-col space-y-8 md:space-y-12">
          {gameDevelopmentProcessData.map((item, idx) => {
            return (
              <div key={idx} className="relative md:pl-24 group">
                
                {/* Timeline Icon Node (Desktop) */}
                <div className="hidden md:flex absolute left-0 top-6 w-16 h-16 rounded-full bg-white border-[4px] border-orange-50 shadow-md items-center justify-center text-[#fd741e] group-hover:bg-[#fd741e] group-hover:text-white group-hover:border-white transition-all duration-500 z-10">
                  <div className="group-hover:animate-pulse">
                    {item.icons}
                  </div>
                </div>

                {/* Main Card */}
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 group-hover:border-[#fd741e]/30 group-hover:-translate-y-1 transition-all duration-300 overflow-hidden relative">
                  
                  {/* Background Watermark Number */}
                  <span className="absolute -right-4 -bottom-6 text-[120px] font-black text-gray-50 opacity-60 group-hover:text-orange-50/50 transition-colors duration-500 pointer-events-none select-none">
                    0{idx + 1}
                  </span>

                  {/* Mobile Icon (Visible only on small screens) */}
                  <div className="md:hidden w-14 h-14 rounded-2xl bg-orange-50 text-[#fd741e] flex items-center justify-center mb-6">
                    {item.icons}
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10">
                    <h4 className="text-2xl font-bold text-[#094a84] mb-4 flex items-center gap-3">
                      <span className="md:hidden text-[#fd741e]">0{idx + 1}.</span>
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-[15px] md:text-base">
                      {item.description}
                    </p>
                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProcessBar;