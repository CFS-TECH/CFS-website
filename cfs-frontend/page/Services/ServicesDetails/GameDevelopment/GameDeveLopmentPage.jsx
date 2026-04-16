"use client";
import React from "react";
import GameBanner from "./GameBanner";
import ProcessBar from "./ProcessBar";
import WhyChooseOurGameDevelopment from "./WhyChooseOurGameDevelopment";
import WhatWeDo from "./WhatWeDo";
import CTA from "@/components/HomeSection/CTA";

const GameDeveLopmentPage = () => {
  return (
    <div>
      <GameBanner />
      <ProcessBar />
      <WhyChooseOurGameDevelopment />
      <WhatWeDo />

      {/* Dynamic CTA for Game Development */}
      <CTA
        backgroundImage="/game-cta-bg.jpg" // Yahan kisi high-quality game environment ya character ki image use karein
        titlePart1="Build Immersive,"
        highlightedText="Next-Gen Games"
        titlePart2="That Captivate Players"
        subtitle="From breathtaking 3D environments to engaging mobile mechanics, our expert studio brings your gaming vision to life across PC, Console, and Mobile platforms."
        primaryBtnText="Discuss Your Game Idea"
        secondaryBtnText="Explore Our Titles"
        onPrimaryClick={"/contact-us"}
        onSecondaryClick={"/about-us"}
      />
    </div>
  );
};

export default GameDeveLopmentPage;
