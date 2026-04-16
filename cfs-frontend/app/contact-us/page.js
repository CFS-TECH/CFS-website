import ContactBanner from '@/components/ContactUs/ContactUsBanner'
import ContactUs01 from '@/page/ContactUs/ContactUS'
import React from 'react'

export const metadata = {
  title: "Contact Us | Expert Consultancy & Business Support",
  description: "Get in touch with our experts for specialized consultancy in BPO, technical services, and financial solutions.",
  keywords: ["Contact BPO", "Consultancy Services", "Business Support", "Crossover Fintech Support"],
};

const page = () => {
  return (
    <div>
        <ContactBanner/>
        <ContactUs01/>
      
    </div>
  )
}

export default page