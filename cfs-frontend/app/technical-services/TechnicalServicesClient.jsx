"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Code2, Smartphone, Globe, Database, Cog, 
  Megaphone, PenTool, Star, Target, Search, Share2,
  CheckCircle2, ArrowRight, Zap, MonitorPlay
} from "lucide-react";

const TechnicalServicesClient = () => {
  const softwareServices = [
    {
      title: "Application Development",
      icon: <Smartphone className="w-8 h-8 text-blue-500" />,
      desc: "From web applications to mobile apps, we create user-friendly and high-performing applications that enhance customer experience.",
      link: "/services/application-development"
    },
    {
      title: "Website Design & Development",
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      desc: "Modern, responsive, and SEO-friendly websites designed to represent your brand and drive engagement.",
      link: "/services/web-development"
    },
    {
      title: "Backend & API Development",
      icon: <Database className="w-8 h-8 text-green-500" />,
      desc: "Robust backend systems and APIs that ensure smooth functionality, data security, and seamless integration.",
      link: "/services/web-development"
    },
    {
      title: "CRM & Business Tools Integration",
      icon: <Cog className="w-8 h-8 text-purple-500" />,
      desc: "Automate and manage your business processes with smart CRM systems and integrated tools.",
      link: "/contact-us"
    }
  ];

  const digitalMarketingServices = [
    {
      title: "Brand Awareness",
      icon: <MonitorPlay className="w-8 h-8 text-rose-500" />,
      desc: "Build a strong and recognizable brand presence across digital platforms.",
      link: "/services/digital-marketing"
    },
    {
      title: "Content Writing",
      icon: <PenTool className="w-8 h-8 text-indigo-500" />,
      desc: "Engaging and SEO-friendly content that attracts, informs, and converts your audience.",
      link: "/services/seo"
    },
    {
      title: "Online Reputation Management",
      icon: <Star className="w-8 h-8 text-amber-500" />,
      desc: "Maintain a positive brand image by managing online reviews and customer feedback.",
      link: "/services/digital-marketing"
    },
    {
      title: "PPC Advertising",
      icon: <Target className="w-8 h-8 text-red-500" />,
      desc: "Run targeted campaigns to generate instant traffic and high-quality leads.",
      link: "/services/digital-marketing"
    },
    {
      title: "SEO & SMO",
      icon: <Search className="w-8 h-8 text-sky-500" />,
      desc: "Improve your visibility on search engines and social media for long-term growth.",
      link: "/services/seo"
    },
    {
      title: "Social Media Marketing",
      icon: <Share2 className="w-8 h-8 text-pink-500" />,
      desc: "Connect with your audience and grow your brand through strategic social media campaigns.",
      link: "/services/digital-marketing"
    }
  ];

  const whyChooseUs = [
    "Customized solutions for every business",
    "Modern technologies and tools",
    "Scalable and future-ready systems",
    "Focus on performance and results",
    "Reliable support and continuous improvement"
  ];

  const benefits = [
    "Strong digital presence",
    "Increased traffic and lead generation",
    "Better customer engagement",
    "Improved operational efficiency",
    "Long-term business growth"
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
          <img
            src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775497014/cfs_assets/tech.jpg" 
            alt="Smart Technology Solutions"
            className="w-full h-full object-cover"
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
              Technical Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight mb-4 leading-tight">
              💻 Smart Technology Solutions for <span className="text-orange-500">Growing Businesses</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed">
              From development to digital marketing, we deliver end-to-end solutions to help your business scale faster and smarter.
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-blue-100">
              <Zap className="w-4 h-4" />
              <span>Drive Digital Growth</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#102A43] font-bold leading-tight mb-8">
              In today's fast-paced digital world, technology is the backbone of every <span className="text-orange-500">successful business.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              At Crossover Fintech Support Pvt. Ltd., we provide powerful and scalable technical solutions that help businesses build a strong digital presence, streamline operations, and achieve sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. SOFTWARE DEVELOPMENT SERVICES */}
      <section className="py-24 px-6 bg-slate-50 relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#102A43] mb-4">Software <span className="text-orange-500">Development</span></h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">We build customized software solutions tailored to your business needs, ensuring efficiency, scalability, and high performance.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {softwareServices.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
              >
                <Link href={service.link || "/contact-us"} className="group bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-orange-500/10 border border-gray-100 transition-all duration-500 block relative overflow-hidden h-full cursor-pointer">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="relative z-10 text-xl font-bold text-[#102A43] mb-4 group-hover:text-orange-600 transition-colors">
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

      {/* 4. DIGITAL MARKETING SERVICES */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#102A43] mb-4">Digital <span className="text-blue-500">Marketing</span> Services</h2>
            <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {digitalMarketingServices.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
              >
                <Link href={service.link || "/contact-us"} className="group bg-slate-50 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 border border-gray-100 transition-all duration-500 block relative h-full cursor-pointer">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#102A43] mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US & BENEFITS */}
      <section className="py-24 px-6 bg-[#102A43] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 skew-x-12 translate-x-1/4 -z-0"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 relative z-10">
          
          {/* Why Choose Us */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-extrabold mb-8">Why <span className="text-orange-500">Choose Us</span></h2>
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
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496733/cfs_assets/digital-marketing-cta.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-[#102a43]/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#102A43] via-[#102a43]/80 to-transparent"></div>
          
          <div className="relative z-10 px-8 py-16 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Build smarter, grow faster, and stay ahead with <span className="text-orange-500">technology that works for you.</span>
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

export default TechnicalServicesClient;
