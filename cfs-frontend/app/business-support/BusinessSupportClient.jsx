"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Users, Headset, PhoneCall, FileText, Database,
  CheckCircle2, Zap, Cog, Activity, ClipboardCheck,
  ClipboardEdit, ArrowRight, BarChart
} from "lucide-react";

const BusinessSupportClient = () => {
  const businessServices = [
    {
      title: "Bulk Hiring Services",
      icon: <Users className="w-8 h-8 text-blue-500" />,
      desc: "Hire the right talent quickly with our efficient bulk recruitment solutions tailored to your business needs.",
      link: "/services/bulk-hiring-services"
    },
    {
      title: "Customer Support Outsourcing",
      icon: <Headset className="w-8 h-8 text-orange-500" />,
      desc: "Deliver exceptional customer experiences with professional support services that ensure satisfaction and retention.",
      link: "/services/customer-support-outsourcing"
    },
    {
      title: "Telecalling & Outreach Support",
      icon: <PhoneCall className="w-8 h-8 text-green-500" />,
      desc: "Boost your sales and engagement with dedicated telecalling and outreach services.",
      link: "/services/Telecalling-and-Outreach-Support"
    },
    {
      title: "Backend & Administrative Support",
      icon: <FileText className="w-8 h-8 text-purple-500" />,
      desc: "Streamline your daily operations with reliable backend and administrative assistance.",
      link: "/services/Backend-and-Administrative-Support"
    },
    {
      title: "CRM Management & Reporting",
      icon: <Database className="w-8 h-8 text-sky-500" />,
      desc: "Manage customer data effectively and gain insights with advanced CRM solutions and detailed reporting.",
      link: "/services/CRM-Management-and-Reporting"
    }
  ];

  const workflowSteps = [
    { num: "01", icon: <ClipboardCheck/>, title: "Understand Your Requirements", desc: "We analyze your business needs and identify key areas for improvement." },
    { num: "02", icon: <Cog/>, title: "Plan & Strategize", desc: "We create customized solutions tailored to your operations." },
    { num: "03", icon: <Zap/>, title: "Execute Efficiently", desc: "Our team implements solutions with precision and professionalism." },
    { num: "04", icon: <Activity/>, title: "Support & Optimize", desc: "We provide continuous support to ensure long-term success." }
  ];

  const whyChooseUs = [
    "Customized solutions for every business",
    "Skilled and experienced professionals",
    "Scalable and flexible services",
    "Focus on efficiency and productivity",
    "Reliable and timely execution"
  ];

  const benefits = [
    "Reduced operational workload",
    "Improved customer satisfaction",
    "Better process management",
    "Increased productivity",
    "Faster business growth"
  ];

  // Animation Variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <main className="w-full bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION (Matched to standard 50vh theme) */}
      <div className="relative w-full h-[50vh] overflow-hidden bg-[#102A43]">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Using a general business-support related placeholder image from existing assets */}
          <img
            src="/AboutUs.jpg" 
            alt="Smart Business Support"
            className="w-full h-full object-cover object-[center_30%]"
            onError={(e) => e.target.src = 'https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496514/cfs_assets/contact1.jpg'}
          />
          {/* Gradient Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#102A43]/90 via-[#102A43]/70 to-transparent backdrop-blur-[2px]" />
        </motion.div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto h-full px-6 flex flex-col justify-center items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 max-w-4xl"
          >
            <p className="text-gray-300 text-lg flex items-center gap-2 mb-4 font-medium">
              <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
              <span className="text-orange-500 font-bold">/</span> 
              Business Support
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight mb-4 leading-tight">
              💼 Smart <span className="text-orange-500">Business Support</span> for Growing Enterprises
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed">
              Streamline operations, enhance customer experience, and scale your business with reliable and efficient support services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-20 px-6 bg-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 text-sky-600 rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-sky-100">
              <BarChart className="w-4 h-4" />
              <span>Optimizing Operations</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#102A43] font-bold leading-tight mb-8">
              Managing business operations efficiently is key to <span className="text-orange-500">long-term success.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              At Crossover Fintech Support Pvt. Ltd., we provide comprehensive business support services that help organizations reduce workload, improve productivity, and focus on core growth areas. Our solutions are designed to simplify processes, optimize performance, and deliver measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. OUR BUSINESS SUPPORT SERVICES GRID */}
      <section className="py-24 px-6 bg-slate-50 relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#102A43] mb-4">Our Business <span className="text-sky-500">Support</span> Services</h2>
            <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {businessServices.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
              >
                <Link href={service.link || "/contact-us"} className="group bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-sky-500/10 border border-gray-100 transition-all duration-500 block relative overflow-hidden h-full cursor-pointer">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-50 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="relative z-10 text-2xl font-bold text-[#102A43] mb-4 group-hover:text-sky-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="relative z-10 text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. HOW WE WORK (Timeline) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#102A43] mb-4">How We <span className="text-orange-500">Work</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A systematic approach to ensuring operational excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative text-center group"
              >
                {/* Connecting Line (hidden on mobile, visible on lg) */}
                {idx < 3 && <div className="hidden lg:block absolute top-[40px] left-[50%] w-full h-[2px] bg-gradient-to-r from-orange-500/50 to-transparent z-0"></div>}
                
                <div className="w-20 h-20 mx-auto bg-slate-50 border-2 border-orange-500 rounded-full flex items-center justify-center text-2xl font-black text-orange-500 mb-6 relative z-10 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-xl shadow-orange-500/20">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#102A43] mb-3">{step.num}. {step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US & BENEFITS SECTION */}
      <section className="py-24 px-6 bg-[#102A43] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-slate-800/30 skew-x-12 -translate-x-1/4 -z-0"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
          
          {/* Why Choose Our Business Support */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold mb-8">Why Choose <span className="text-orange-500">Our Support</span></h2>
            <div className="space-y-4">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-100 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-extrabold mb-8">Platform <span className="text-sky-400">Benefits</span></h2>
            <div className="space-y-4">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-100 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="py-24 px-6 bg-slate-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[40px] shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496514/cfs_assets/contact1.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-[#102a43]/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-[#102A43] via-[#102A43]/80 to-transparent"></div>
          
          <div className="relative z-10 px-8 py-16 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Focus on growing your business while we handle <span className="text-orange-500">the operations efficiently.</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0 w-full md:w-auto">
              <Link 
                href="/contact-us"
                className="inline-flex items-center justify-center bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-orange-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 active:scale-95"
              >
                Get Started
              </Link>
              <Link 
                href="/contact-us"
                className="inline-flex items-center justify-center bg-transparent border-2 border-white/30 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white hover:text-[#102A43] hover:-translate-y-1 transition-all duration-300 active:scale-95 backdrop-blur-sm"
              >
                Talk to Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default BusinessSupportClient;
