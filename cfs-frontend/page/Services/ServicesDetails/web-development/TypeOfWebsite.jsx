import React from "react";
import {
  FaBuilding,
  FaIdCardClip,
  FaBullseye,
  FaBriefcase,
  FaBookOpen,
  FaBlog,
  FaCircleCheck,
} from "react-icons/fa6";

const TypeOfWebsite = () => {
  const websiteTypes = [
    { title: "Corporate & Business Websites", icon: <FaBuilding size={20} /> },
    { title: "Portfolio & Branding Sites", icon: <FaIdCardClip size={20} /> },
    { title: "Landing Pages for Products or Services", icon: <FaBullseye size={20} /> },
    { title: "Service Showcase Websites", icon: <FaBriefcase size={20} /> },
    { title: "Brochure & Informational Sites", icon: <FaBookOpen size={20} /> },
    { title: "Blog / Content-Driven Websites", icon: <FaBlog size={20} /> },
  ];

  const businessValues = [
    "Increases credibility",
    "Builds trust with clients",
    "Improves online visibility",
    "Converts visitors into leads",
    "Supports long-term growth",
  ];

  return (
    <section className="py-24 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: What We Build */}
          <div>
            <h2 className="text-[#fd741e] font-bold tracking-widest uppercase text-sm mb-3">
              Our Expertise
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-[#094a84] mb-6 leading-tight">
              What Types of Websites We Build
            </h3>
            <p className="text-gray-600 mb-10 text-lg">
              Our services cover a wide range of industry needs. Whether you are a startup or an established enterprise, we build platforms tailored to your goals:
            </p>

            <div className="space-y-4">
              {websiteTypes.map((type, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-100 hover:translate-x-2 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-[#fd741e] group-hover:bg-[#fd741e] group-hover:text-white transition-colors duration-300">
                    {type.icon}
                  </div>
                  <span className="font-bold text-gray-800 group-hover:text-[#094a84] transition-colors">
                    {type.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Why It Matters (Dark Premium Card) */}
          <div className="relative">
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#fd741e] to-orange-400 rounded-[2.5rem] blur-lg opacity-20"></div>
            
            <div className="relative bg-[#094a84] rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden">
              {/* Abstract corner shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-bl-full"></div>
              
              <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                Why This Matters for Your Business
              </h3>
              <div className="w-16 h-1 bg-[#fd741e] rounded-full mb-8"></div>
              
              <p className="text-blue-100 mb-10 text-lg leading-relaxed">
                A professional website is more than just a digital footprint; it is your most powerful marketing asset.
              </p>

              <ul className="space-y-6">
                {businessValues.map((value, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <FaCircleCheck 
                      className="text-[#fd741e] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" 
                      size={24} 
                    />
                    <span className="text-xl font-medium text-white tracking-wide">
                      {value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TypeOfWebsite;