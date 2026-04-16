"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaAndroid,
  FaApple,
  FaArrowRight,
  FaCloud,
  FaCode,
  FaDesktop,
  FaGlobe,
  FaMobileScreen,
  FaRocket,
  FaServer,
  FaUsers,
  FaWindows,
} from "react-icons/fa6";
import { FaCogs, FaShieldAlt } from "react-icons/fa";
import AppBanner from "./AppBanner";
import MobileAppDevelopment from "./MobileAppDevelopment";
import DesktopAppDevelopment from "./DesktopAppDevelopment";
import SoftwareCTA from "./SoftwareCTA";

const SoftwareServices = () => {
  
  return (
    <div className="font-sans bg-[#f8fafc] overflow-hidden">
      {/* ================= 1. HERO BANNER ================= */}
      <AppBanner />

      {/* ================= 2. MOBILE APP DEVELOPMENT ================= */}
      <MobileAppDevelopment />

      {/* ================= 3. DESKTOP APP DEVELOPMENT (Dark Premium Mode) ================= */}
      <DesktopAppDevelopment />

      {/* ================= 6. WHY CHOOSE US ================= */}
      <SoftwareCTA />
    </div>
  );
};

export default SoftwareServices;
