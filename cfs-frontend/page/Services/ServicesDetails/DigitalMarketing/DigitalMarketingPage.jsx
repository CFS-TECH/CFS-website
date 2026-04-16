import React from "react";
import DigitalMarketingBanner from "./DigitalMarketingBanner";
import DigitalMarketingTimeLine from "./DigitalMarketingTimeLine";
import { Divider } from "@mui/material";
import DigitalMarketingDetails from "./DigitalMarketingDetails";
import CTA from "@/components/HomeSection/CTA";

const DigitalMarketingPage = () => {
  return (
    <div className="">
      <DigitalMarketingBanner />
      <Divider />
      {/* <DigitalMarketingTimeLine /> */}
      <DigitalMarketingDetails />

      {/* Dynamic CTA for Digital Marketing */}
      <CTA
        backgroundImage="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496733/cfs_assets/digital-marketing-cta.jpg" // Yahan analytics, growth ya marketing team ki background image use karein
        titlePart1="Data-Driven"
        highlightedText="Marketing Strategies"
        titlePart2="That Scale Your Brand"
        subtitle="Maximize your online visibility, generate high-quality leads, and skyrocket your ROI with our targeted SEO, PPC, and social media campaigns."
        primaryBtnText="Get a Free Marketing Audit"
        secondaryBtnText="View Case Studies"
        onPrimaryClick={"/contact-us"}
        onSecondaryClick={"/about-us"}
      />
    </div>
  );
};

export default DigitalMarketingPage;
