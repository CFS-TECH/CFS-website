import WebsiteDevelopment from '@/page/Services/ServicesDetails/web-development/WebsiteDevelopment'
import React from 'react'

export const metadata = {
  title: "Web Development Services | Custom & Responsive Websites",
  description: "Transform your online presence with professional web development services. We build high-performance, responsive, and SEO-friendly websites using modern technologies.",
  keywords: ["Web Development", "Responsive Web Design", "Next.js Development", "Full Stack Development", "E-commerce Solutions"],
};

const page = () => {
  return (
    <div>
        <WebsiteDevelopment/>
    </div>
  )
}

export default page