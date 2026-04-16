import CTA from "@/components/HomeSection/CTA";
import TelecallingBanner from "@/page/Services/ServicesDetails/TelecallingSupport/TelecallingBanner";
import TelecallingProcessSection from "@/page/Services/ServicesDetails/TelecallingSupport/TelecallingProcessSection";
import TelecallingQASection from "@/page/Services/ServicesDetails/TelecallingSupport/TelecallingQASection";
import TelecallingServicesSection from "@/page/Services/ServicesDetails/TelecallingSupport/TelecallingServicesSection";
import React from "react";

export const metadata = {
  title: "Telecalling & Outreach Support | Boost Your Sales Pipeline",
  description: "Stop wasting time on cold calling. Our expert SDRs generate qualified leads and book appointments, allowing your sales team to focus on closing deals.",
  keywords: ["Telecalling Services", "Lead Generation", "Outreach Support", "Sales Development", "Cold Calling Outsourcing"],
};

const page = () => {
  return (
    <div>
      <TelecallingBanner />
      <TelecallingServicesSection />
      <TelecallingQASection />
      <TelecallingProcessSection />
      <CTA
        backgroundImage="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496505/cfs_assets/bulk-hiring-cta.jpg"
        titlePart1="Ready to Fill Your"
        highlightedText="Sales Pipeline?"
        titlePart2="Let's Talk."
        subtitle="Stop wasting your closers' time on cold calling. Let our expert SDRs generate qualified leads and book appointments for you."
        primaryBtnText="Get a Custom Calling Plan"
        secondaryBtnText="Know More"
        onPrimaryClick="/contact-us"
        onSecondaryClick="/about-us"
      />
    </div>
  );
};

export default page;
