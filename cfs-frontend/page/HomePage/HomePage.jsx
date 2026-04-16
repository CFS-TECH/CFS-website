import { BannerFinTech } from '@/components/HomeSection/Banner'
import ServicesSection from '@/components/HomeSection/ServicesSection'
import SwiperBanner from '@/components/HomeSection/SwiperBanner'
import Trust from '@/components/HomeSection/Trust'
import React from 'react'
import WhyChooseUs from './WhyChooseUs'
import IndustriesServe from '@/components/HomeSection/IndustriesServe'
import LatestPost from '@/components/HomeSection/LatestPost'
import CTA from '@/components/HomeSection/CTA'

const HomePage = () => {
  return (
    <div>
      <h1 className="sr-only">Crossover Fintech Support - Leading BPO, ITES & Digital Growth Services</h1>
      <SwiperBanner />
      <Trust />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesServe />
      <LatestPost />
      <CTA />
    </div>
  )
}

export default HomePage