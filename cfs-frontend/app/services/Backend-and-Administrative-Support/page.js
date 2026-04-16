import CTA from '@/components/HomeSection/CTA'
import BackendOnboarding from '@/page/Services/ServicesDetails/BackendSupport/BackendOnboarding'
import BackendQASection from '@/page/Services/ServicesDetails/BackendSupport/BackendQASection'
import BackendSecuritySection from '@/page/Services/ServicesDetails/BackendSupport/BackendSecuritySection'
import BackendServicesSection from '@/page/Services/ServicesDetails/BackendSupport/BackendServicesSection'
import BackendSupportBanner from '@/page/Services/ServicesDetails/BackendSupport/BackendSupportBanner'
import React from 'react'

export const metadata = {
  title: "Backend & Admin Support | Streamline Your Operations",
  description: "Outsource your routine administrative tasks and data management to experts. Our secure, high-speed processing team helps you reduce overhead costs by up to 60%.",
  keywords: ["Backend Support", "Administrative Outsourcing", "Data Management", "Operations Streamlining", "Crossover Fintech Support"],
};

const page = () => {
  return (
    <div>
        <BackendSupportBanner/>
        <BackendServicesSection/>
        <BackendSecuritySection/>
        <BackendQASection/>
        <BackendOnboarding/>
        <CTA
  backgroundImage="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496505/cfs_assets/bulk-hiring-cta.jpg" 
  titlePart1="Focus on Strategy,"
  highlightedText="Outsource the Routine"
  titlePart2="to the Experts"
  subtitle="Administrative tasks aur data management aapke growth ko slow kar sakte hain. Crossover Fintech Support ke secure aur high-speed processing team ke saath apne operations ko streamline karein aur overhead costs ko 60% tak kam karein."
  primaryBtnText="Outsource Your Backend Now"
  secondaryBtnText="View Our SLAs"
  onPrimaryClick="/contact-us" 
  onSecondaryClick="/services" 
/>
    </div>
  )
}

export default page