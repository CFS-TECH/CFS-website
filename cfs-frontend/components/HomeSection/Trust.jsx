import React from "react";
import { FaChalkboardUser } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { RiCustomerServiceFill } from "react-icons/ri";
import { SiGoogledocs } from "react-icons/si";

const Trust = () => {
  const TrustDataList = [
    {
      title: "Secure Operations",
      icon: <GrSecure />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Trained Professionals",
      icon: <FaChalkboardUser />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "24/7 Customer Support",
      icon: <RiCustomerServiceFill />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Compliance Ready",
      icon: <SiGoogledocs />,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="w-full py-8 md:py-16 bg-gray-50/30" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6">
          {TrustDataList.map((item, idx) => (
            <div
              key={idx}
              className="group bg-slate-50/80 border border-slate-100 rounded-2xl p-3 md:p-6 flex flex-col items-center text-center justify-center min-h-[130px] md:min-h-[190px] shadow-sm hover:shadow-md hover:bg-white hover:border-orange-500/20 transition-all duration-300"
            >
              {/* Number Label */}
              <span className={`text-xl md:text-3xl font-extrabold opacity-25 ${item.color} mb-1 md:mb-2 select-none`}>
                {`0${idx + 1}`}
              </span>

              {/* Circular Icon Container */}
              <div
                className={`w-9 h-9 md:w-12 md:h-12 shrink-0 flex items-center justify-center rounded-full text-base md:text-2xl ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform mb-2 md:mb-3`}
              >
                {item.icon}
              </div>

              {/* Title Text */}
              <p className="text-[10px] md:text-sm font-bold text-[#102a43] leading-tight max-w-full">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
