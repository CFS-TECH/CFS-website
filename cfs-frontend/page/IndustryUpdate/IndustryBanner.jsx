import React from "react";

const IndustryBanner = () => {
  return (
    <div>
      {/* --- HERO BANNER SECTION --- */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-[#102a43]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Business Center"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
         
          <h1 className="text-5xl md:text-5xl font-black text-white tracking-tight">
          Empowering Businesses with <br /> <span className="text-[#ff6b00]">Next-Generation</span> 
          <br />IT Services, Business Support, <br /> and Financial Solutions.
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            We don't use bots. Our team of experts is here to help you scale
            your business through custom tech solutions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IndustryBanner;
