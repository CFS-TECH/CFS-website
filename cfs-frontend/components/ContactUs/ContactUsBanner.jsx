"use client";
import React from "react";
const ContactBanner = () => {
  return (
    <section
      className="relative w-full h-[180px] md:h-[300px] p-6 md:p-8 flex items-center justify-start bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496521/cfs_assets/contact5.jpg')",
      }}
    >
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="relative items-start text-white p-4 md:p-8 z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 tracking-wide">
          Contact Us
        </h1>
      
        <div className="w-16 h-1 bg-orange-500 mb-3"></div>
        <p className="text-xs md:text-base opacity-90 font-medium italic">
          Any question or remarks? Just write us a message!
        </p>
      </div>
    </section>
  );
};

export default ContactBanner;