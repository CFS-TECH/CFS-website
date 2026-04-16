"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { ourService } from "@/utils/Utils";
import { ServiceCard } from "../Cards/Cards";

import useMounted from "@/hooks/useMounted";

const ServicesSection = () => {
  const mounted = useMounted();

  if (!mounted) return <div className="w-full bg-[#102a43] py-20 min-h-[400px] animate-pulse" />;

  return (
    <div className="w-full bg-[#102a43] py-20 px-4 md:px-10">
      {/* Header Section */}
      <section className="flex items-center gap-y-4 flex-col text-white mb-10 md:mb-16 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-center px-4 leading-[1.2]">
          What are you here for?
        </h1>
        <div className="w-20 h-1 bg-orange-500 rounded-full"></div>{" "}
        {/* Decorative line */}
        <p className="text-sm sm:text-base md:text-lg text-[#c9c9c9] text-center max-w-2xl px-4 leading-relaxed">
          Crossover FinTech is here to help. Choose from our specialized
          services designed to scale your business.
        </p>
      </section>

      {/* Swiper Section */}
      <section className="max-w-[1400px] mx-auto">
        <Swiper
          slidesPerView={1} // Default for mobile
          spaceBetween={20} // Gap between cards
          loop={true}
          centeredSlides={false} // Normal look ke liye false rakhein
          
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Jab screen size 768px se badi ho (Tablets)
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // Jab screen size 1024px se badi ho (Desktop)
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[ Autoplay]}
          className="pb-16"
        >
          {ourService.map((item, idx) => (
            <SwiperSlide key={idx} className="h-auto flex">
              {/* {...item} automatically passes everything: icon, image, servicesName, etc. */}
              <ServiceCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Custom Styles for Pagination Dots */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #fff !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #f97316 !important; /* Orange-500 */
          opacity: 1;
          width: 25px;
          border-radius: 5px;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;
