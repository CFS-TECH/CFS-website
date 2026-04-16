import React from "react";
import { 
  FaMobileAlt, 
  FaGlobe, 
  FaCube, 
  FaUsers, 
  FaIntercom 
} from "react-icons/fa";

const WhatWeDo = () => {
  const services = [
    {
      title: "Mobile Game Development",
      icon: <FaMobileAlt size={30} />,
      description: "Interactive and performance-optimized games built for Android and iOS platforms, ensuring a smooth mobile experience.",
    },
    {
      title: "Web-Based Games",
      icon: <FaGlobe size={30} />,
      description: "Browser-compatible games designed for instant play, online engagement, and high accessibility across all web platforms.",
    },
    {
      title: "2D & 3D Game Design",
      icon: <FaCube size={30} />,
      description: "Visually engaging game environments featuring creative characters, high-fidelity assets, and smooth animations.",
    },
    {
      title: "Multiplayer Game Solutions",
      icon: <FaUsers size={30} />,
      description: "Real-time gaming experiences with seamless connectivity, low latency, and engaging user interaction frameworks.",
    },
    {
      title: "Game UI/UX Design",
      icon: <FaIntercom size={30} />,
      description: "Intuitive and attractive interfaces designed to simplify navigation and enhance the overall emotional connection of the player.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-[#fd741e] font-bold tracking-widest uppercase text-sm mb-4">
            What We Do
          </h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h3 className="text-4xl md:text-5xl font-black text-[#094a84] max-w-2xl leading-tight">
              Crafting Immersive <br /> 
              <span className="text-[#fd741e]">Gaming Worlds</span>
            </h3>
            <p className="text-gray-600 max-w-md text-lg leading-relaxed">
              We design and develop high-quality games that combine creativity, strategy, and advanced technology for optimized performance.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-3xl bg-orange-50/30 border border-orange-100 hover:bg-white hover:shadow-2xl hover:shadow-orange-200/50 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#fd741e] mb-6 group-hover:bg-[#fd741e] group-hover:text-white transition-all duration-500">
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold text-[#094a84] mb-4">
                {service.title}
              </h4>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
              
           
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;