import React from "react";
import CustomerSupportBanner from "./CustomerSupportBanner";
import SupportServicesSection from "./SupportServicesSection";
import TargetIndustriesSection from "./TargetIndustriesSection";
import SecuritySection from "./SecuritySection";
import TechIntegrationsSection from "./TechIntegrationsSection";
import CTA from "@/components/HomeSection/CTA";

const CustomerSupport = () => {
  return (
    <div>
      <CustomerSupportBanner />
      <SupportServicesSection />
      <TargetIndustriesSection />
      <SecuritySection />
      <TechIntegrationsSection />
      <CTA
        backgroundImage="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496532/cfs_assets/customer-support-cta.avif" // You can change this to a picture of a friendly call center agent or keep "https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496531/cfs_assets/CTA.jpg"
        titlePart1="Scale Your"
        highlightedText="Customer Experience"
        titlePart2="Without the Overhead"
        subtitle="Empower your business with 24/7 omnichannel support, native-speaking agents, and lightning-fast response times. Let us handle the tickets while you focus on growth."
        primaryBtnText="Get a Free Custom Quote"
        secondaryBtnText="Explore Capabilities"
        onPrimaryClick="/contact" // Assuming you have a contact page
        onSecondaryClick="/services"
      />
    </div>
  );
};

export default CustomerSupport;
