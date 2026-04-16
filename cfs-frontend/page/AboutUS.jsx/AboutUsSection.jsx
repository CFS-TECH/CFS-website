"use client";
import React from "react";
import { User, BadgeCheck, ShieldCheck, Users, Target, Award, Smile, Zap } from "lucide-react";

const ConsultingSection = () => {
  return (
    <section className="w-full bg-[#f4e3d7] py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* ================= 1. ABOUT INTRODUCTION ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fadeInLeft">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2b46] mb-4">
              About Our Company
            </h2>
            <div className="text-gray-700 space-y-4 mb-8 leading-relaxed">
              <p>
                We deliver integrated IT services, financial solutions, and business support systems designed to help organizations operate more efficiently and achieve sustainable growth. Our solutions optimize workflows, reduce operational costs, and enhance overall business performance while supporting scalable expansion.
              </p>
              <p>
                Our approach blends innovation, strategic thinking, and industry expertise to provide practical and customized solutions tailored to each client’s needs. By understanding business objectives and challenges, we enable improved productivity, measurable results, and long-term success in an evolving digital landscape.
              </p>
            </div>
            {/* <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md transition duration-300 transform hover:scale-105 shadow-md font-semibold"> 
              Read More
            </button>*/}
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-xl border-4 border-white group">
            <img
              src="/AboutUs.jpg"
              alt="About Company"
              className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* ================= 2. BLUE FEATURE STRIP ================= */}
        <div className="relative mb- left-1/2 right-1/2 -mx-[50vw] w-screen bg-gradient-to-r from-[#17466f] to-[#0f2b46] py-10  shadow-inner">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white">
            <FeatureBox icon={<User size={30} />} title="Skilled Professionals" text="Expert team delivering quality results." />
            <FeatureBox icon={<BadgeCheck size={30} />} title="Best Price Promise" text="Premium quality services at fair pricing." />
            <FeatureBox icon={<ShieldCheck size={30} />} title="Assured Quality" text="Strict standards ensuring excellence." />
            <FeatureBox icon={<Users size={30} />} title="Trusted Services" text="Reliable solutions built on transparency." />
          </div>
        </div>

        {/* ================= 3. WHO WE ARE SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-16 mt-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2b46] mb-3 leading-tight">
              Who We Are
            </h2>
            <div className="w-30 h-1 bg-[#ff7b2e] mb-6"></div>
            <div className="text-gray-700 space-y-6 mb-8 text-sm md:text-base leading-relaxed">
              <p>
                We are a forward-thinking organization committed to delivering integrated IT services, financial solutions, and business support systems that empower businesses to grow with confidence and efficiency. Our solutions are designed to strengthen operations, improve performance, and support long-term business success.
              </p>
              <p>
                By understanding the unique challenges and objectives of each client, we develop tailored strategies that align with their goals. Our client-focused approach ensures sustainable growth, improved productivity, and measurable business outcomes in an ever-evolving market environment.
              </p>
            </div>
            {/* <button className="bg-[#ff7b2e] hover:bg-[#e66a22] text-white font-bold px-8 py-3 rounded-md transition shadow-lg">
              Read More
            </button> */}
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-tr-2xl rounded-bl-2xl shadow-2xl border-4 border-white">
              <img
                src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496493/cfs_assets/AboutUs2.jpg" 
                alt="Our Vision"
                className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* ================= 5. FINAL BENEFIT SECTION ================= */}
        <div className="grid md:grid-cols-2 mb-10 gap-16 items-center">
          <div className="relative group">
            <div className="overflow-hidden rounded-tl-[80px] rounded-br-[80px] rounded-tr-2xl rounded-bl-2xl shadow-xl border-4 border-white">
              <img
                src="/About4.jpg"
                alt="Strategy"
                className="w-full h-[50vh] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 w-48 h-35 overflow-hidden rounded-2xl border-4 border-white shadow-2xl hidden md:block group-hover:scale-110 transition-transform duration-500">
               <img src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496434/cfs_assets/About3.jpg" alt="Analysis" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#0f2b46] mb-2 leading-tight">
             Development & Innovation
            </h3>
            <div className="w-40 h-1 bg-[#ff7b2e] mb-6"></div>
            <p className="text-gray-700 mb-8 leading-relaxed">
             We leverage modern development practices and innovative technologies to help organizations build scalable and future-ready digital solutions. Our approach focuses on creating efficient systems that streamline operations, enhance productivity, and support continuous business advancement.
            </p>
            <p>We leverage modern development practices and innovative technologies to help organizations build scalable and future-ready digital solutions. Our approach focuses on creating efficient systems that streamline operations, enhance productivity, and support continuous business advancement.</p>
            {/* <button className="bg-[#ff7b2e] hover:bg-[#e66a22] text-white font-bold px-10 py-4 rounded-full transition shadow-md uppercase tracking-wider text-sm">
              Learn more about us
            </button> */}
          </div>
        </div>

      </div>
    </section>
  );
};

/* Helper Components */
const FeatureBox = ({ icon, title, text }) => (
  <div className="px-4 transition-all duration-300 hover:-translate-y-2 hover:bg-white/5 p-4 rounded-xl">
    <div className="flex justify-center mb-4 text-orange-400">
      <span className="p-3 bg-white/10 rounded-full ring-1 ring-white/20">{icon}</span>
    </div>
    <h4 className="font-semibold mb-2 text-xl">{title}</h4>
    <p className="text-sm text-gray-300">{text}</p>
  </div>
);

const StatItem = ({ icon, count, label }) => (
  <div className="flex flex-col items-center">
    <div className="mb-3 p-3 bg-white/5 rounded-lg border border-white/10">{icon}</div>
    <h3 className="text-4xl font-bold text-white mb-1">{count}</h3>
    <p className="text-gray-400 text-xs uppercase tracking-widest">{label}</p>
  </div>
);

export default ConsultingSection;