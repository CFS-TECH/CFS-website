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
    <section className="w-full py-12 bg-gray-50/50" suppressHydrationWarning>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TrustDataList.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 flex items-center gap-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-lg text-2xl ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform`}
              >
                {item.icon}
              </div>
              <p className="text-base font-bold text-[#102a43] leading-tight">
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
