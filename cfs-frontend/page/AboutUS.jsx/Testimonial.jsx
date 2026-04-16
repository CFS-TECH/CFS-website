"use client";
import React, { useEffect, useState, useRef } from "react";
import { FaQuoteRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "A truly digital-first consulting partner delivering smart strategies and data-driven solutions that helped us achieve outstanding business growth.",
    name: "Alex Thompson",
    role: "CTO, FutureCorp Systems",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?&auto=format&fit=crop&q=80&w=300", 
  },
  {
    id: 2,
    text: "Their advanced analytics and innovative approach improved our operations and exceeded our expectations with measurable results.",
    name: "Devil",
    role: "Chief Digital Officer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?&auto=format&fit=crop&q=80&w=300",
    highlight: true,
  },
  {
    id: 3,
    text: "Scalable technology and expert guidance helped us streamline processes, enhance performance, and successfully reach our business goals.",
    name: "Devil",
    role: "VP Engineering",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?&auto=format&fit=crop&q=80&w=300",
  },
];

const Testimonial = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#0f2b46] py-6 text-center relative overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-76 h-76 bg-orange-500/10 rounded-full  z-0 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-76 h-76 bg-blue-400/10 rounded-full  z-0 animate-pulse animation-delay-2000"></div>

      <div className={`max-w-4xl mx-auto mb-16 px-6 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
          What <span className="text-orange-500 relative inline-block">Our Clients Say <span className="absolute bottom-2 left-0 w-full h-1.5 bg-orange-500/30 rounded-full"></span></span>
        </h2>
        <p className="text-blue-100/80 text-lg">Our clients share real experiences of how our trusted IT services and financial solutions help businesses improve performance, achieve growth, and ensure long-term success.

        </p>   

      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-8 relative z-10">
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            style={{ transitionDelay: `${index * 150}ms` }}
            className={`group p-8 md:p-10 rounded-[2.5rem] shadow-2xl text-left relative transition-all duration-700 hover:-translate-y-3 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            } ${
              item.highlight
                ? "bg-white ring-4 ring-orange-500/20 scale-105 z-20"
                : "bg-[#F9F0EB] border border-white/20 z-10"
            }`}
          >
            {/* Quote Icon */}
            <div className="flex justify-between items-start mb-4">
                <div className={`${item.highlight ? 'bg-orange-500' : 'bg-[#0f2b46]'} p-3 rounded-2xl rotate-3 shadow-lg group-hover:rotate-0 transition-transform`}>
                    <FaQuoteRight className="text-xl text-white" />
                </div>
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-orange-500 text-sm">★</span>
                    ))}
                </div>
            </div>

            {/* Testimonial Text */}
            <p className={`text-lg leading-relaxed font-semibold  ${item.highlight ? 'text-slate-900' : 'text-slate-800'}`}>
              "{item.text}"
            </p>

            {/* User Section */}
            <div className={`flex items-center gap-4 pt-4 border-t ${item.highlight ? 'border-slate-100' : 'border-slate-200'}`}>
              <div className="relative">
                 <img
                    src={item.img}
                    alt={item.name}
                    className={`w-14 h-14 rounded-full object-cover shadow-inner transition-all duration-500 ${item.highlight ? 'ring-2 ring-orange-500' : 'grayscale group-hover:grayscale-0'}`}
                  />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 leading-none">{item.name}</h4>
                <p className="text-sm font-bold text-orange-600 mt-1 uppercase tracking-tighter">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};
export default Testimonial;