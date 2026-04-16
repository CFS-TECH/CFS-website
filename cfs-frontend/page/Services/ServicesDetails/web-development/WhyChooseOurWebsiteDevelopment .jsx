import React from "react";
import {
  FaMobileScreen,
  FaChartLine,
  FaBolt,
  FaCubes,
  FaUserCheck,
} from "react-icons/fa6";

const WhyChooseOurWebsiteDevelopment = () => {
  const data = [
    {
      title: "Responsive & Mobile-Friendly",
      icon: <FaMobileScreen size={28} />,
      description:
        "Flawless performance and beautiful layouts across all devices, from desktops to smartphones.",
    },
    {
      title: "SEO-Ready Structure",
      icon: <FaChartLine size={28} />,
      description:
        "Built with search engine optimization best practices to help you rank higher from day one.",
    },
    {
      title: "Secure & Fast Loading",
      icon: <FaBolt size={28} />,
      description:
        "Optimized for lightning-fast speeds and fortified with robust security protocols.",
    },
    {
      title: "Scalable Architecture",
      icon: <FaCubes size={28} />,
      description:
        "Future-proof coding that grows seamlessly alongside your business requirements.",
    },
    {
      title: "User-Focused Experience",
      icon: <FaUserCheck size={28} />,
      description:
        "Intuitive navigation and engaging interfaces designed specifically for your target audience.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#fd741e] uppercase mb-3">
            Why Choose CrossOver FinTech
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#094a84] mb-4">
            Built for Performance & Growth
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We don't just build websites; we create digital experiences
            engineered to elevate your brand and drive measurable results.
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

export default WhyChooseOurWebsiteDevelopment;
