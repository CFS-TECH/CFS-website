
"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { BannerCustomer, BannerFinTech, BannerITservices } from './Banner';

import useMounted from '@/hooks/useMounted';

export default function SwiperBanner() {
  const mounted = useMounted();

  if (!mounted) return <div className="min-h-[500px] bg-slate-900 animate-pulse" />; // Placeholder while loading

  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
            <BannerFinTech/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
