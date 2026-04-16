"use client";
import { servicesData } from "@/utils/Utils";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdCheckbox,
} from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const ContactPopup = () => {
  const [chooseService, setChooseServices] = useState("");
  const [openService, setOpenServices] = useState(false);
  const [popContact, setPopContact] = useState(false);
  const pathname = usePathname();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds on homepage and services page
    if (pathname === "/" || pathname === "/services") {
      const timer = setTimeout(() => {
        setPopContact(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:5000/api/leads', {
        type: 'popup',
        companyName: name,
        email,
        phone,
        service: chooseService,
        message
      });
      
      if (response.data.success) {
        alert("Request submitted successfully!");
        setPopContact(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setChooseServices("");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {popContact && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto bg-[#102a42]/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPopContact(false)}
            className="fixed inset-0 cursor-pointer"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-3xl w-full max-w-[480px] relative shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] my-auto overflow-hidden z-10"
          >
            {/* Header / Banner Gradient */}
            <div className="h-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600" />

            <button
              onClick={() => setPopContact(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded-full transition-all duration-300 z-50 group"
              aria-label="Close"
            >
              <RxCross2 className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight">
                  Get Expert Guidance
                </h2>
                <p className="text-gray-500 text-sm md:text-base font-medium">
                  Fill out the form below and our consultants will reach out to you within 24 hours.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  {/* Name */}
                  <div className="group">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Your Full Name"
                      required
                      className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-gray-800 placeholder:text-gray-400 font-medium"
                    />
                  </div>

                  {/* Email */}
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-gray-800 placeholder:text-gray-400 font-medium"
                  />

                  {/* Phone Number */}
                  <div className="flex gap-3">
                    <div className="w-20 bg-gray-100 border border-gray-200 p-3.5 rounded-xl text-center text-gray-500 font-bold">
                      +91
                    </div>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="flex-1 bg-gray-50 border border-gray-200 p-3.5 rounded-xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-gray-800 placeholder:text-gray-400 font-medium"
                    />
                  </div>

                  {/* Services Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setOpenServices(!openService)}
                      className="w-full flex items-center justify-between bg-gray-50 p-3.5 rounded-xl border border-gray-200 text-left outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all group"
                    >
                      <span className={`font-medium ${chooseService ? "text-gray-800" : "text-gray-400"}`}>
                        {chooseService || "Select Service Channel"}
                      </span>
                      {openService ? (
                        <IoMdArrowDropup className="text-orange-500 text-xl" />
                      ) : (
                        <IoMdArrowDropdown className="text-gray-400 group-hover:text-orange-500 transition-colors text-xl" />
                      )}
                    </button>

                    <AnimatePresence>
                      {openService && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full mt-2 w-full max-h-52 bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-y-auto z-[60] py-2 custom-scrollbar"
                        >
                          {servicesData.map((category, idx) => (
                            <div key={idx}>
                              <div className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50/50">
                                {category.name || "Services"}
                              </div>
                              {category.ServicesName.map((service, sIdx) => (
                                <div
                                  key={`${idx}-${sIdx}`}
                                  onClick={() => {
                                    setChooseServices(service.name);
                                    setOpenServices(false);
                                  }}
                                  className="px-4 py-3 text-sm font-semibold hover:bg-orange-50 hover:text-orange-600 cursor-pointer transition-colors border-b border-gray-50 last:border-0"
                                >
                                  {service.name}
                                </div>
                              ))}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Message */}
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    rows={3}
                    className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl outline-none focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all text-gray-800 placeholder:text-gray-400 font-medium resize-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white font-black py-4 rounded-xl transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)] hover:shadow-[0_15px_25px_-5px_rgba(249,115,22,0.5)] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? "Processing..." : "Submit Inquiry"}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-wider pt-2">
                    <IoMdCheckbox className="text-green-500 w-4 h-4" /> 
                    <span>100% Secure & Confidential</span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;