import React from "react";
import {
  FaLightbulb,
  FaGaugeHigh,
  FaLayerGroup,
  FaShieldHalved,
  FaArrowsRotate,
} from "react-icons/fa6";

const WhyChooseOurGameDevelopment = () => {
  const data = [
    {
      title: "Creative & Innovative Approach",
      icon: <FaLightbulb size={28} />,
      description:
        "We blend artistic creativity with deep technical expertise to build unique, engaging games that stand out in a crowded market.",
    },
    {
      title: "High Performance & Optimization",
      icon: <FaGaugeHigh size={28} />,
      description:
        "Engineered for smooth gameplay with minimal loading times and stable frame rates, ensuring a seamless player experience.",
    },
    {
      title: "Cross-Platform Compatibility",
      icon: <FaLayerGroup size={28} />,
      description:
        "Our games are optimized to perform efficiently across multiple devices, including mobile, PC, and consoles.",
    },
    {
      title: "Secure & Scalable Architecture",
      icon: <FaShieldHalved size={28} />,
      description:
        "Built with a robust backend to handle rapid user growth, multiplayer connectivity, and future platform expansions.",
    },
    {
      title: "Ongoing Support & Updates",
      icon: <FaArrowsRotate size={28} />,
      description:
        "We provide comprehensive post-launch maintenance, bug fixes, and feature updates to keep your game community thriving.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#fd741e] uppercase mb-3">
            Why Choose Crossover Fintech
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#094a84] mb-4">
            Built for Immersion & Performance
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We don't just develop games; we create immersive digital worlds 
            engineered to engage players and drive long-term success.
          </p>
        </div>

        {/* Modern Grid Layout */}
        <div className="flex flex-wrap justify-center gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-xl bg-orange-50 flex items-center justify-center text-[#fd741e] mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-bold text-[#094a84] mb-3 group-hover:text-[#fd741e] transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseOurGameDevelopment;