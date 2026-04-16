"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { RiWhatsappFill } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";

import HydrationGuard from "@/components/Common/HydrationGuard";

const FloatingContact = ({ phoneNumber = "+919990782525" }) => {
  // Clean the phone number for URLs
  const formattedPhoneNumber = phoneNumber.replace(/[+\-()\s]/g, "");

  const encodedMessage = encodeURIComponent(
    "Hi, I'd like to know more about your services!",
  );
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;
  const callUrl = `tel:${phoneNumber}`;

  // Animation variants
  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <HydrationGuard>
      <div className="fixed flex flex-col gap-2 md:gap-4 md:bottom-10 md:right-10 bottom-4 right-4 z-[100]" suppressHydrationWarning={true}>
      {/* --- SUPPORT / CALL BUTTON --- */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="relative group"
      >
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#102a42] text-white text-sm font-medium rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-lg">
          Call Support
          {/* Tooltip Arrow */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[-4px] w-2 h-2 bg-[#102a42] rotate-45"></div>
        </div>

        <Link
          href={callUrl}
          aria-label="Call Support"
          className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-[#fd741e] shadow-lg rounded-full z-10"
        >
          <BiSupport className="text-2xl md:text-3xl text-[#fd741e]" />
        </Link>
      </motion.div>

      {/* --- WHATSAPP BUTTON --- */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="relative group"
        transition={{ delay: 0.1 }} // Slightly delays this button so they pop up one after the other
      >
        {/* Notification Ping Animation */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full animate-ping z-0"></div>
        <div className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full z-20"></div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#102a42] text-white text-sm font-medium rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-lg">
          Chat on WhatsApp
          {/* Tooltip Arrow */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[-4px] w-2 h-2 bg-[#102a42] rotate-45"></div>
        </div>

        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.4)] rounded-full z-10"
        >
          <RiWhatsappFill className="text-3xl md:text-4xl text-white" />
        </Link>
      </motion.div>
    </div>
    </HydrationGuard>
  );
};

export default FloatingContact;
