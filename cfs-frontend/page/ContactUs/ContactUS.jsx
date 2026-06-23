"use client";
import React, { useState } from "react";
import api from "@/utils/api";
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from "react-icons/io";
import { MdWifiCalling, MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { SendHorizontal } from "lucide-react";

const ContactUs01 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/leads', {
        type: 'contact',
        ...formData
      });
      if (response.data.success) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: "",
        });
      }
    } catch (error) {
       alert("Something went wrong. Please try again.");
       console.error(error);
    }
  };

  return (
    <section className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-4 md:p-10 font-sans relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-100 rounded-full blur-[100px]" />
      </div>

    
      <div className="text-center mb-8 md:mb-16 relative z-10">
        <h1 className="text-3xl md:text-6xl font-black text-[#011C2B] mb-3 tracking-tight">
          Connect with <span className="text-orange-500">Us</span>
        </h1>
        <p className="text-slate-500 text-sm md:text-lg max-w-2xl mx-auto font-medium px-2">
          Got a question or just want to connect? We’d be happy to hear from you. Fill out the form and we’ll get back to you soon.
        </p>
      </div>

      <div className="max-w-6xl w-full bg-white rounded-3xl md:rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col md:flex-row relative z-10 border border-white">
         {/* --- LEFT SECTION */}
       
        <div className="hidden md:flex md:w-5/12 bg-[#102a43] md:p-14 text-white relative flex-col justify-between overflow-hidden">
          
          {/* --- GRAPHIC ELEMENTS --- */}
          {/* Large Soft Orb */}
          <div className="absolute bottom-[-40px] right-[-40px] w-64 h-64 bg-orange-500 rounded-full blur-[70px] opacity-30 animate-pulse" />
          {/* Decorative Circle Outline */}
          <div className="absolute top-10 right-10 w-32 h-32 border-[20px] border-white/5 rounded-full" />
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`, backgroundSize: '24px 24px' }} />

          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 tracking-tight">Contact Information</h2>
            <p className="text-gray-300 mb-6 md:mb-12 text-sm md:text-lg font-light leading-relaxed">
              Fill up the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-5 md:space-y-10">
              <div className="flex items-center gap-4 md:gap-6 group cursor-pointer">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl shrink-0 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <MdWifiCalling className="text-xl md:text-2xl" />
                </div>
                <span className="text-sm md:text-lg font-medium">+91 99907 82525</span>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group cursor-pointer">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl shrink-0 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <MdOutlineEmail className="text-xl md:text-2xl" />
                </div>
                <span className="text-sm md:text-lg font-medium break-all">crossoverfintechsupport@gmail.com</span>
              </div>

              <div className="flex items-start gap-4 md:gap-6 group cursor-pointer">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl shrink-0 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <MdLocationOn className="text-xl md:text-2xl mt-1" />
                </div>
                <p className="text-sm md:text-lg leading-relaxed font-medium">
                  E-48, Sector-03, Noida, <br />
                  Uttar Pradesh, 201301
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8 md:mt-16 relative z-10">
            {[
              { icon: <IoLogoFacebook />, href: "https://www.facebook.com/profile.php?id=61587398464233" },
              { icon: <IoLogoInstagram />, href: "https://www.instagram.com/crossoverfintech/" },
              { icon: <IoLogoTwitter />, href: "https://x.com/CFintech93318" },
              { icon: <IoLogoLinkedin />, href: "https://www.linkedin.com/in/crossover-fintech-9a15b73b6/" }
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl bg-white/10 text-lg md:text-xl hover:bg-orange-500 hover:-translate-y-2 transition-all duration-300">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* --- RIGHT SECTION (White Form) --- */}
        <div className="md:w-7/12 p-6 md:p-14 bg-white">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
            
            {/* 2x2 Grid for Fields on Desktop, Stacked on Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {[
                { label: "First Name", name: "firstName", type: "text" },
                { label: "Last Name", name: "lastName", type: "text" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone Number", name: "phone", type: "tel" },
              ].map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {field.label}
                  </label>
                  <input
                    required
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full border border-slate-200 bg-slate-50/50 rounded-xl px-4 py-3 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:outline-none transition-all font-medium text-sm text-[#011C2B]"
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                </div>
              ))}
            </div>

            {/* Subject Selection (Styled as modern chips) */}
            <div className="space-y-3 pt-1">
              <p className="font-bold text-slate-400 uppercase text-[10px] md:text-xs tracking-widest">
                Select Subject
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["General Inquiry", "Support", "Feedback"].map((sub) => (
                  <button
                    key={sub}
                    type="button"
                    onClick={() => setFormData({ ...formData, subject: sub })}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                      formData.subject === sub
                        ? "bg-orange-500 text-white border-orange-500 shadow-sm shadow-orange-500/20"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
                Write your message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-slate-200 bg-slate-50/50 rounded-xl px-4 py-3 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:outline-none transition-all font-medium text-sm text-[#011C2B] resize-none h-32"
                placeholder="How can we help you?"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="group w-full sm:w-auto bg-[#011C2B] text-white px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 hover:bg-orange-500 transition-all duration-300 shadow-lg shadow-blue-950/10 hover:shadow-orange-500/20 active:scale-95"
              >
                <span>Send Message</span>
                <SendHorizontal size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </form>
        </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs01;