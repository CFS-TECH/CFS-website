"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

// Sub-component for FAQ items (Internal helper)
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-bold text-gray-800 hover:text-[#ff6b00] transition-colors"
      >
        <span className="text-lg">{question}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-4" : "max-h-0"}`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("🚀 Message Sent! We'll get back to you soon.");
  };

  return (
    <div className="bg-[#fafafa] min-h-screen font-sans text-gray-900">
      {/* --- HERO BANNER SECTION --- */}
      <section className="relative h-[50vh] flex items-center overflow-hidden bg-[#102a43]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="Business Center"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="inline-block bg-[#ff6b00] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            Available Worldwide
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
            Talk to a <span className="text-[#ff6b00]">human.</span>
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            We don't use bots. Our team of experts is here to help you scale
            your business through custom tech solutions.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT: GRID LAYOUT --- */}
      <div className="max-w-7xl mx-auto py-24 px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT SIDE: Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-4xl font-black mb-8">Reach Out Directly</h2>

          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 group hover:border-[#ff6b00] transition-all">
            <div className="w-12 h-12 bg-[#ff6b00]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#ff6b00] transition-colors">
              <Mail className="text-[#ff6b00] group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold">Email Us</h3>
            <p className="text-gray-500 mt-2 mb-4 text-sm">
              Our friendly team is here to help.
            </p>
            <a
              href="mailto:hello@example.com"
              className="text-[#ff6b00] font-bold flex items-center gap-2"
            >
              hello@example.com <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#102a43] p-6 rounded-[2rem] text-white shadow-lg">
              <Phone size={20} className="text-[#ff6b00] mb-4" />
              <h3 className="font-bold">Call Us</h3>
              <p className="text-gray-400 text-xs mt-1">Mon-Fri 9am-6pm</p>
              <p className="mt-3 font-bold text-sm">+91 123 456 7890</p>
            </div>
            <div className="bg-[#ff6b00] p-6 rounded-[2rem] text-white shadow-lg">
              <MapPin size={20} className="text-white mb-4" />
              <h3 className="font-bold">Office</h3>
              <p className="text-orange-100 text-xs mt-1">Visit our studio</p>
              <p className="mt-3 font-bold text-sm">New Delhi, India</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Floating Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-50">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-1.5 bg-[#ff6b00] h-8 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-800">
                Send a message
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-[#ff6b00] focus:bg-white p-4 rounded-2xl outline-none transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-50 border-2 border-transparent focus:border-[#ff6b00] focus:bg-white p-4 rounded-2xl outline-none transition-all"
                  required
                />
              </div>
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full bg-gray-50 border-2 border-transparent focus:border-[#ff6b00] focus:bg-white p-4 rounded-3xl outline-none transition-all resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#ff6b00] hover:bg-black text-white p-5 rounded-2xl font-black text-lg transition-all duration-300 flex items-center justify-center gap-3"
              >
                Shoot Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <section className="bg-white py-24 px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">
            Common Questions
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg">
            Everything you need to know about working with us.
          </p>
          <div className="bg-gray-50 p-8 rounded-[2.5rem]">
            <FAQItem
              question="How long does a project take?"
              answer="Typical web projects take 4-8 weeks from discovery to launch, depending on complexity."
            />
            <FAQItem
              question="Do you offer custom pricing?"
              answer="Yes! Every business is unique. We provide tailored quotes based on your specific goals."
            />
            <FAQItem
              question="Can you help with app maintenance?"
              answer="Absolutely. We offer ongoing support packages to keep your app running smoothly 24/7."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
