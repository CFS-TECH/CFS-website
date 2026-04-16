import React from "react";
import {ServicesBanner} from "./ServicesBanner";
import ShowOurServices from "./ShowOurServices";
import CTA from "@/components/HomeSection/CTA";

const Services = () => {
  return (
    <div suppressHydrationWarning={true}>
      <ServicesBanner />
      <section className="px-[10px] md:px-[40px] mb-16" suppressHydrationWarning={true}>
        <ShowOurServices/>

      </section>
      <CTA/>
    </div>
  );
};

export default Services;
