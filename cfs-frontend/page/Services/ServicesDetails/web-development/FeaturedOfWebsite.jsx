import React from "react";
import {
  FaPaintbrush,
  FaListCheck,
  FaGaugeHigh,
  FaMobileScreenButton,
  FaMagnifyingGlassChart,
  FaEnvelopeOpenText,
  FaShareNodes,
} from "react-icons/fa6";

const FeaturedOfWebsite = () => {
  const features = [
    {
      title: "Custom Brand Design",
      description:
        "Tailored aesthetics perfectly aligned with your brand identity.",
      icon: <FaPaintbrush size={24} />,
    },
    {
      title: "Easy CMS",
      description:
        "Manage and update your content effortlessly with a user-friendly backend.",
      icon: <FaListCheck size={24} />,
    },
    {
      title: "Speed Optimization",
      description:
        "Lightning-fast page loading for better user retention and SEO.",
      icon: <FaGaugeHigh size={24} />,
    },
    {
      title: "Cross-Device Responsive",
      description: "Flawless rendering on mobiles, tablets, and desktops.",
      icon: <FaMobileScreenButton size={24} />,
    },
    {
      title: "On-Page SEO Setup",
      description:
        "Built-in search engine optimization to help you rank faster.",
      icon: <FaMagnifyingGlassChart size={24} />,
    },
    {
      title: "Lead Capture Forms",
      description:
        "Strategic contact forms designed to convert visitors into clients.",
      icon: <FaEnvelopeOpenText size={24} />,
    },
    {
      title: "Social & Analytics Integration",
      description:
        "Track your success and connect seamlessly with your social platforms.",
      icon: <FaShareNodes size={24} />,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-[#fd741e] font-bold tracking-widest uppercase text-sm mb-3">
            Core Capabilities
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-[#094a84] mb-6 leading-tight">
            Everything You Need to Succeed Online
          </h3>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#fd741e] to-orange-300 rounded-full"></div>
        </div>

        {/* Features Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start gap-6 p-6 rounded-2xl transition-all duration-300 hover:bg-orange-50/50 border border-transparent hover:border-orange-100 group ${
                index === features.length - 1 ? "md:col-span-2 md:w-1/2" : ""
              }`}
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#094a84]/5 flex items-center justify-center text-[#fd741e] group-hover:bg-[#fd741e] group-hover:text-white transition-colors duration-300 shadow-sm">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div>
                <h4 className="text-xl font-bold text-[#094a84] mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOfWebsite;
