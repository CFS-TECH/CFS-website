"use client";
import React from "react";
import BannerSectionWebsiteDevelopment from "./BannerSectionWebsiteDevelopment";
import ProcessBar from "./ProcessBar";
import WhyChooseOurWebsiteDevelopment from "./WhyChooseOurWebsiteDevelopment ";
import FeaturedOfWebsite from "./FeaturedOfWebsite";
import TypeOfWebsite from "./TypeOfWebsite";
import CTA from "@/components/HomeSection/CTA";
import Link from "next/link";

const WebsiteDevelopment = () => {
  return (
    <div>
      <BannerSectionWebsiteDevelopment />
      <ProcessBar />
      <WhyChooseOurWebsiteDevelopment />
      <FeaturedOfWebsite />
      <TypeOfWebsite />

      {/* Dynamic CTA for Website Development */}
      <CTA
        backgroundImage="/website-cta-bg.jpg" // Yahan apni website development wali image ka path daal dijiyega
        titlePart1="Build Fast, Secure &"
        highlightedText="Scalable Websites"
        titlePart2="That Convert"
        subtitle="From custom web applications to high-converting landing pages, our expert developers craft SEO-friendly websites tailored to elevate your brand."
        primaryBtnText="Start Your Project"
        secondaryBtnText="View Our Portfolio"
        onPrimaryClick={"/contact-us"}
        onSecondaryClick={"/about-us"}
      />
    </div>
  );
};

export default WebsiteDevelopment;
