import SoftwareServices from '@/page/Services/ServicesDetails/app-development/AppDevelopmentPage'
import AppDevelopmentPage from '@/page/Services/ServicesDetails/app-development/AppDevelopmentPage'
import React from 'react'

export const metadata = {
  title: "Application Development | Custom Software Solutions",
  description: "Innovative mobile and desktop application development. We build scalable, secure, and user-friendly software tailored to your business needs.",
  keywords: ["App Development", "Custom Software", "Mobile Apps", "Enterprise Solutions", "Crossover Fintech"],
};

const page = () => {
  return (
    <div>
      <SoftwareServices/>
    </div>
  )
}

export default page