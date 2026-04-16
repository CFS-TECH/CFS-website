import CTA from "@/components/HomeSection/CTA";
import React from "react";
import SEOBanner from "./SEOBanner";
import CoreSEOServices from "./CoreSEOServices";
import SEOProcess from "./SEOProcess";

const SEOPage = () => {
  return (
    <div>
        {/* =========== Banner Section ========== */}
        <SEOBanner/>

        {/* ======== Core SEO Services =========== */}
        <CoreSEOServices/>

        {/* ================ SEOProcess ============== */}
        <SEOProcess/>
      {/* Dynamic CTA for SEO Services */}
      <CTA
        backgroundImage="/seo-cta-bg.jpg" // Yahan Google search analytics, ranking ya keyboard ki background image use karein
        titlePart1="Dominate Search Results &"
        highlightedText="Drive Organic Traffic"
        titlePart2="To Your Website"
        subtitle="Climb to the top of Google rankings with our proven, white-hat SEO strategies. Increase visibility, generate high-quality leads, and outrank your competitors."
        primaryBtnText="Get Your  SEO Audit"
        secondaryBtnText="See Our Results"
        onPrimaryClick={"/contact-us"}
        onSecondaryClick={"/about-us"}
      />
    </div>
  );
};

export default SEOPage;
