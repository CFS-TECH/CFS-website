"use client";
import React, { useState } from "react";
import axios from "axios";
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
      const response = await axios.post('http://localhost:5000/api/leads', {
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

    
      <div className="text-center mb-16 relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-[#011C2B] mb-4 tracking-tight">
          Connect with <span className="text-orange-500">Us</span>
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
        Got a question or just want to connect? We’d be happy to hear from you. Fill out the form and we’ll get back to you soon.
        </p>
      </div>

      <div className="max-w-6xl w-full bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col md:flex-row relative z-10 border border-white">
         {/* --- LEFT SECTION */}
       
        <div className="md:w-5/12 bg-[#102a43] p-10 md:p-14 text-white relative flex flex-col justify-between overflow-hidden">
          
          {/* --- GRAPHIC ELEMENTS --- */}
          {/* Large Soft Orb */}
          <div className="absolute bottom-[-40px] right-[-40px] w-64 h-64 bg-orange-500 rounded-full blur-[70px] opacity-30 animate-pulse" />
          {/* Decorative Circle Outline */}
          <div className="absolute top-10 right-10 w-32 h-32 border-[20px] border-white/5 rounded-full" />
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`, backgroundSize: '24px 24px' }} />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Contact Information</h2>
            <p className="text-gray-300 mb-12 text-lg font-light leading-relaxed">
              Fill up the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <MdWifiCalling className="text-2xl" />
                </div>
                <span className="text-lg font-medium">+91 99907 82525</span>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <MdOutlineEmail className="text-2xl" />
                </div>
                <span className="text-lg font-medium">crossoverfintechsupport@gmail.com</span>
              </div>

              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <MdLocationOn className="text-2xl mt-1" />
                </div>
                <p className="text-lg leading-relaxed font-medium">
                  E-48, Sector-03, Gautambuddha Nagar, <br />
                  Noida, Uttarpradesh, 201301
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-16 relative z-10">
            {[
              { icon: <IoLogoFacebook />, href: "https://www.facebook.com/profile.php?id=61587398464233" },
              { icon: <IoLogoInstagram />, href: "https://www.instagram.com/crossoverfintech/" },
              { icon: <IoLogoTwitter />, href: "https://x.com/CFintech93318" },
              { icon: <IoLogoLinkedin />, href: "https://www.linkedin.com/in/crossover-fintech-9a15b73b6/" }
            ].map((social, i) => (
              <a key={i} href={social.href} target="_blank" className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 text-xl hover:bg-orange-500 hover:-translate-y-2 transition-all duration-300">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* --- RIGHT SECTION (White Form) --- */}
        <div className="md:w-7/12 p-8 md:p-14 bg-white">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            
            {/* Standard Inputs */}
            {[
              { label: "First Name", name: "firstName", type: "text" },
              { label: "Last Name", name: "lastName", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Phone Number", name: "phone", type: "tel" },
            ].map((field) => (
              <div key={field.name} className="relative group">
                <input
                  required
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-slate-200 py-2 focus:border-orange-500 focus:outline-none bg-transparent placeholder-transparent transition-all font-medium text-[#011C2B]"
                  placeholder={field.label}
                />
                <label className="absolute left-0 -top-4 text-slate-400 text-xs font-bold uppercase tracking-widest peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-placeholder-shown:font-medium peer-placeholder-shown:normal-case peer-focus:-top-4 peer-focus:text-orange-500 peer-focus:text-xs peer-focus:font-bold peer-focus:uppercase transition-all">
                  {field.label}
                </label>
              </div>
            ))}

            {/* Subject Selection */}
            <div className="md:col-span-2 space-y-4 pt-2">
              <p className="font-bold text-[#011C2B] uppercase text-xs tracking-widest">Select Subject?</p>
              <div className="flex flex-wrap gap-6">
                {["General Inquiry", "Support", "Feedback"].map((sub) => (
                  <label key={sub} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="subject"
                      value={sub}
                      checked={formData.subject === sub}
                      onChange={handleChange}
                      className="w-5 h-5 accent-orange-500 cursor-pointer"
                    />
                    <span className={`text-sm font-semibold transition-colors ${formData.subject === sub ? 'text-orange-500' : 'text-slate-500 group-hover:text-slate-800'}`}>
                      {sub}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Message Area */}
            <div className="md:col-span-2 relative">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="peer w-full border-b-2 border-slate-200 py-2 focus:border-orange-500 focus:outline-none bg-transparent resize-none h-28 placeholder-transparent transition-all font-medium text-[#011C2B]"
                placeholder="Write your message..."
              />
              <label className="absolute left-0 -top-4 text-slate-400 text-xs font-bold uppercase tracking-widest peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-orange-500 peer-focus:text-xs transition-all">
                Write your message...
              </label>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="group bg-[#011C2B] text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 hover:bg-orange-500 transition-all duration-300 shadow-xl shadow-blue-900/10 hover:shadow-orange-500/30"
              >
                <span>Send Message</span>
                <SendHorizontal size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs01;