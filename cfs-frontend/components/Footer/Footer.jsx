"use client";
import Link from "next/link";
import React from "react";
import { FaLocationArrow, FaPhone, FaRegCopyright } from "react-icons/fa6";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io";
import { MdEmail, MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full mt-16 md:mt-24" suppressHydrationWarning={true}>
      {/* Main Footer Section */}
      <section className="relative min-h-[400px] flex flex-col justify-center bg-[#102A43]">
        {/* Background Image - Only on Desktop */}
        <img 
          src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496983/cfs_assets/team01.png" 
          alt="Team background" 
          className="absolute inset-0 w-full h-full object-cover z-0 hidden lg:block opacity-60"
        />

        {/* Global Dark Overlay */}
        <div className="absolute inset-0 w-full h-full bg-[#102a43e5] lg:bg-[#102a43d9] z-0" suppressHydrationWarning={true}></div>
        
        {/* Content Container */}
        <section className="relative z-10 w-full py-10 md:py-16 px-6">
          <div className="max-w-7xl mx-auto border-t border-white/10 pt-10 md:pt-12" suppressHydrationWarning={true}>
            
            {/* Grid Container */}
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-6 lg:gap-12 text-white">
              
              {/* Reach us section - Full width on mobile */}
              <section className="col-span-2 lg:col-span-3 flex flex-col items-start">
                <h2 className="text-xl font-bold pb-3 border-b-2 border-orange-500 w-fit mb-6">Reach Us</h2>
                <div className="flex flex-col gap-5">
                  <a href="tel:+919990782525" className="flex gap-4 items-center hover:text-orange-400 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-all">
                      <FaPhone className="w-4 h-4 text-orange-500 group-hover:text-white" />
                    </div>
                    <p className="text-sm md:text-base font-semibold">+91 99907 82525</p>
                  </a>
                  <a href="mailto:crossoverfintechsupport@gmail.com" className="flex gap-4 items-center hover:text-orange-400 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-all">
                      <MdEmail className="w-5 h-5 text-orange-500 group-hover:text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold break-all">crossoverfintechsupport@gmail.com</span>
                  </a>
                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-orange-500 transition-all shrink-0">
                      <MdLocationPin className="w-5 h-5 text-orange-500 group-hover:text-white" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold leading-relaxed pt-1">
                      E-48, Sector-03, Gautambuddha Nagar, <br className="hidden md:block"/> Noida, Uttarpradesh, 201301
                    </span>
                  </div>
                </div>
              </section>

              {/* Quick Pages - Half width on mobile */}
              <section className="col-span-1 lg:col-span-2 flex flex-col items-start mt-4 lg:mt-0">
                <h2 className="text-xl font-bold pb-3 border-b-2 border-orange-500 w-fit mb-6">Pages</h2>
                <nav className="flex flex-col gap-4 text-sm font-semibold text-gray-300">
                  <Link href="/" className="hover:text-orange-400 transition-all hover:translate-x-1">Home</Link>
                  <Link href="/services" className="hover:text-orange-400 transition-all hover:translate-x-1">Services</Link>
                  <Link href="/about-us" className="hover:text-orange-400 transition-all hover:translate-x-1">About Us</Link>
                  <Link href="/brochure" className="hover:text-orange-400 transition-all hover:translate-x-1">Brochure</Link>
                  <Link href="/contact-us" className="hover:text-orange-400 transition-all hover:translate-x-1">Contact</Link>
                </nav>
              </section>

              {/* Services - Half width on mobile */}
              <section className="col-span-1 lg:col-span-2 flex flex-col items-start mt-4 lg:mt-0">
                <h2 className="text-xl font-bold pb-3 border-b-2 border-orange-500 w-fit mb-6">Services</h2>
                <nav className="flex flex-col gap-4 text-sm font-semibold text-gray-300">
                  <Link href="/financial-solutions" className="hover:text-orange-400 transition-all hover:translate-x-1">• Financial Solution</Link>
                  <Link href="/business-support" className="hover:text-orange-400 transition-all hover:translate-x-1">• Business Support</Link>
                  <Link href="/technical-services" className="hover:text-orange-400 transition-all hover:translate-x-1">• Technical Services</Link>
                </nav>
              </section>

              {/* Legal - Half width on mobile/tablet */}
              <section className="col-span-1 lg:col-span-2 flex flex-col items-start mt-4 lg:mt-0">
                <h2 className="text-xl font-bold pb-3 border-b-2 border-orange-500 w-fit mb-6">Legal</h2>
                <div className="flex flex-col gap-4 text-sm font-semibold text-gray-300">
                  <Link href="/privacy-policy" className="hover:text-orange-400 transition-all hover:translate-x-1">Privacy Policy</Link>
                  <Link href="/terms-conditions" className="hover:text-orange-400 transition-all hover:translate-x-1">Terms & Conditions</Link>
                  <Link href="/cookies-policy" className="hover:text-orange-400 transition-all hover:translate-x-1">Cookies Policy</Link>
                </div>
              </section>

              {/* Newsletter & Socials - Full width on mobile/tablet */}
              <section className="col-span-2 sm:col-span-1 lg:col-span-3 mt-8 lg:mt-0">
                <Newsletter />
              </section>

            </div>
          </div>
        </section>
      </section>

      {/* Bottom Copyright bar */}
      <div className="py-6 w-full bg-[#fe741f] relative z-20 pb-36 md:pb-6" suppressHydrationWarning={true}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white text-[12px] sm:text-sm font-bold">
          <div className="flex items-center gap-2">
            <FaRegCopyright className="text-base"/> 
            <span suppressHydrationWarning={true}>{new Date().getFullYear()} Crossover Fintech Support.</span>
          </div>
          <p className="text-white/90">Empowering Businesses Since 2023.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import api from "@/utils/api";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter your email");
    
    setIsSubmitting(true);
    try {
      const response = await api.post('/newsletter', { email });
      if (response.data.success) {
        alert("Subscribed successfully!");
        setEmail("");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Subscription failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6" suppressHydrationWarning={true}>
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <h2 className="text-base font-black text-white mb-4 uppercase tracking-wider">Stay Informed</h2>
        <form 
          onSubmit={handleSubmit}
          className="flex w-full h-12 overflow-hidden rounded-xl bg-white/10 border border-white/20 p-1 mb-3"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent w-full px-4 outline-none text-white text-sm placeholder:text-gray-400"
            placeholder="Your email"
          />
          <button 
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-500 hover:bg-orange-600 transition-all px-4 rounded-lg text-white flex items-center justify-center disabled:opacity-50 active:scale-95"
          >
            {isSubmitting ? "..." : <FaLocationArrow/>}
          </button>
        </form>
        <p className="text-[10px] text-gray-400 font-medium">
          Get weekly updates on fintech & digital growth. No spam.
        </p>
      </div>

      <div className="flex items-center gap-4">
        {[
          { icon: <IoLogoFacebook />, href: "https://www.facebook.com/profile.php?id=61587398464233", label: "Facebook" },
          { icon: <IoLogoInstagram />, href: "https://www.instagram.com/crossoverfintech/", label: "Instagram" },
          { icon: <IoLogoTwitter />, href: "https://x.com/CFintech93318", label: "Twitter" },
          { icon: <IoLogoLinkedin />, href: "https://www.linkedin.com/in/crossover-fintech-9a15b73b6/", label: "LinkedIn" },
        ].map((social, index) => (
          <Link
            key={index}
            href={social.href}
            target="_blank"
            aria-label={`Follow on ${social.label}`}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 hover:scale-110 transition-all"
          >
            <span className="text-xl">{social.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};