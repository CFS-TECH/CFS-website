import React from "react";
import BulkHiringBanner from "./BulkHiringBanner";
import BulkHiringServices from "./BulkHiringServices";
import WhyChooseBulkHiring from "./WhyChooseBulkHiring";
import CTA from "@/components/HomeSection/CTA";

const BulkHiringServicesPage = () => {
  return (
    <div>
      <BulkHiringBanner />
      <BulkHiringServices />
      <WhyChooseBulkHiring />

      {/* Dynamic CTA for B2B Bulk Hiring */}
      <CTA
        backgroundImage="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496505/cfs_assets/bulk-hiring-cta.jpg" // Yahan corporate office, team meeting ya handshake ki premium image use karein
        titlePart1="Scale Your Workforce"
        highlightedText="Without Compromising"
        titlePart2="On Talent Quality"
        subtitle="Whether you need to hire 50 or 500 professionals, our dedicated recruitment team is ready to deliver pre-assessed, high-quality candidates in record time."
        primaryBtnText="Share Your Hiring Needs"
        secondaryBtnText="Schedule a Strategy Call"
        onPrimaryClick={"/contact-us"}
        onSecondaryClick={"/about-us"}
      />
    </div>
  );
};

export default BulkHiringServicesPage;
