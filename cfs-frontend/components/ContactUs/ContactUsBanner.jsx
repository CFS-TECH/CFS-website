"use client";
import React from "react";
const ContactBanner = () => {
  return (
    <section
      className="relative w-full h-[300px] p-8 flex items-center  justify-start bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496521/cfs_assets/contact5.jpg')",
      }}
    >
  

      <div className="relative items-start text-white p-8 px-4 z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-wide">
          Contact Us
        </h1>
      
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-4"></div>
        <p className="text-sm md:text-base opacity-90 font-medium italic">
          Any question or remarks? Just write us a message!
        </p>
      </div>
    </section>
  );
};

export default ContactBanner;