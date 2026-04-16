import CTA from "@/components/HomeSection/CTA";
import CRMBanner from "@/page/Services/ServicesDetails/CRM/CRMBanner";
import CRMIntegrations from "@/page/Services/ServicesDetails/CRM/CRMIntegrations";
import CRMReportingFlow from "@/page/Services/ServicesDetails/CRM/CRMReportingFlow";
import CRMServicesSection from "@/page/Services/ServicesDetails/CRM/CRMServicesSection";
import React from "react";

export const metadata = {
  title: "CRM Management & Reporting | Optimize Your Sales Pipeline",
  description: "Maximize your ROI with expert CRM management. We clean, automate, and optimize platforms like HubSpot, Salesforce, and Zoho for better sales efficiency.",
  keywords: ["CRM Management", "Salesforce Optimization", "HubSpot Support", "Sales Reporting", "CRM Automation"],
};

const page = () => {
  return (
    <div>
      <CRMBanner />
      <CRMServicesSection />
      <CRMIntegrations />
      <CRMReportingFlow />
      <CTA
        backgroundImage="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496522/cfs_assets/crm-cta.jpg"
        titlePart1="Stop Fighting Your"
        highlightedText="CRM Data"
        titlePart2="Start Closing More Deals"
        subtitle="Ganda aur bikhra hua CRM data aapki sales team ki speed slow kar deta hai. Humaari expert team aapke HubSpot, Salesforce ya Zoho ko clean, automate aur optimize karti hai taki aap har lead ka max ROI nikal sakein."
        primaryBtnText="Get a Free CRM Audit"
        secondaryBtnText="Sample Reports"
        onPrimaryClick="/contact"
        onSecondaryClick="/portfolio"
      />
    </div>
  );
};

export default page;
