"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Target, Eye, ShieldCheck, Lightbulb, Star, TrendingUp, Users, Wallet, Monitor, Megaphone, CheckCircle2, ChevronRight, Activity, Zap
} from 'lucide-react';
import AboutUsBanner from './AboutUsBanner';

const AboutUsPage = () => {

  const whatWeDeliver = [
    { title: "Financial Solutions", href: "/financial-solutions", icon: <Wallet className="w-10 h-10 text-blue-500" />, desc: "Personal, Business, Vehicle & Property Loans.", bg: "from-blue-500/10 to-blue-500/5", border: "border-blue-500/20" },
    { title: "Technical Services", href: "/technical-services", icon: <Monitor className="w-10 h-10 text-orange-500" />, desc: "Software, Application, and Web Development.", bg: "from-orange-500/10 to-orange-500/5", border: "border-orange-500/20" },
    { title: "Digital Marketing", href: "/services/digital-marketing", icon: <Megaphone className="w-10 h-10 text-purple-500" />, desc: "SEO, PPC, Social Media, Content Writing.", bg: "from-purple-500/10 to-purple-500/5", border: "border-purple-500/20" },
    { title: "Business Support", href: "/business-support", icon: <Users className="w-10 h-10 text-green-500" />, desc: "Hiring, CRM, Customer Support, Operations.", bg: "from-green-500/10 to-green-500/5", border: "border-green-500/20" }
  ];

  const whatDrivesUs = [
    { title: "Integrity", icon: <ShieldCheck className="w-8 h-8 text-white" />, desc: "Transparent and honest in every interaction.", color: "bg-orange-500" },
    { title: "Innovation", icon: <Lightbulb className="w-8 h-8 text-white" />, desc: "Focused on modern and scalable solutions.", color: "bg-sky-500" },
    { title: "Excellence", icon: <Star className="w-8 h-8 text-white" />, desc: "Committed to high-quality delivery.", color: "bg-[#102A43]" },
    { title: "Growth", icon: <TrendingUp className="w-8 h-8 text-white" />, desc: "Driven by results and continuous improvement.", color: "bg-green-500" }
  ];

  const whyTrustUs = [
    "End-to-end solutions under one roof",
    "Modern, scalable, and efficient systems",
    "Client-focused and result-driven approach",
    "Experienced and dedicated team",
    "Reliable support and long-term partnership"
  ];

  // Animation Variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <main className="w-full bg-[#f8fafc] overflow-x-hidden font-sans">
      
      {/* 1. RETAINED HERO BANNER */}
      <AboutUsBanner />

      {/* 2. INTRODUCTION & WHO WE ARE (Highly Styled Split) */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-white">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f1f5f9_1px,transparent_1px)] [background-size:24px_24px] opacity-60"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px]"></div>

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative">
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#102A43] text-orange-400 rounded-full text-xs font-black tracking-[0.15em] uppercase shadow-xl shadow-blue-900/10 border border-[#102A43]/10">
                <Activity className="w-4 h-4" />
                <span>Who We Are</span>
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-orange-100 text-orange-600 rounded-full text-xs font-black tracking-[0.15em] uppercase border border-orange-200">
                <Star className="w-4 h-4" />
                <span>Established 08/08/2023</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#102A43] font-black leading-[1.1] mb-8 tracking-tight">
              Driving Innovation Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">Intelligent Solutions</span>
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
              Empowering businesses with smart technology, financial expertise, and scalable solutions.
            </p>
            
            <div className="w-16 h-1 bg-orange-500 rounded-full mb-6"></div>
            
            <p className="text-lg text-gray-500 leading-relaxed font-light mb-8 border-l-4 border-slate-200 pl-6">
              <strong className="text-[#102A43] font-bold">Crossover Fintech Support Pvt. Ltd.</strong> is a forward-thinking company officially established on <strong className="text-orange-500">August 8th, 2023</strong>. We are focused on delivering smart, scalable, and result-driven solutions across financial services, technology, and business operations. We help startups, growing businesses, and enterprises simplify complex challenges by transforming them into efficient, digital-first systems that drive long-term growth.
            </p>
          </motion.div>

          {/* Right Floating Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Dark Premium Card */}
            <div className="bg-gradient-to-br from-[#102A43] to-[#0a1a2a] p-10 md:p-14 rounded-[40px] shadow-2xl relative z-10 overflow-hidden border border-slate-800">
              {/* Glassmorphism Glowing Orbs inside card */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sky-500/20 rounded-full blur-[80px]"></div>
              
              <div className="relative z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  <Target className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-6">
                  A Team Built <span className="text-orange-400">for Growth</span>
                </h3>
                <p className="text-gray-300 leading-relaxed font-light mb-8 text-lg">
                  We are a team of professionals with expertise in fintech, software development, digital marketing, and business support services. Our strength lies in understanding business needs and delivering customized solutions that create real impact.
                </p>
                <div className="p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
                  <p className="text-orange-300 font-medium text-lg leading-snug flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    We don’t just provide services — we build systems that grow, adapt, and evolve with your business.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Offset Decorative Dots */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[radial-gradient(#F97316_3px,transparent_3px)] [background-size:16px_16px] z-0 opacity-30"></div>
          </motion.div>

        </div>
      </section>

      {/* 3. WHAT WE DELIVER (Hyper-Modern Deep Blue Grid) */}
      <section className="py-28 px-6 md:px-12 bg-[#102A43] relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-orange-500/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm text-sky-300 rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-white/10">
              <Eye className="w-4 h-4" />
              <span>Integrated Domains</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              What We <span className="text-orange-500">Deliver</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              We offer integrated solutions across multiple domains, architecting the digital and financial future of your enterprise.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whatWeDeliver.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp} 
              >
                <Link 
                  href={item.href} 
                  className={`block h-full bg-gradient-to-br ${item.bg} border ${item.border} rounded-[30px] p-8 backdrop-blur-md hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 group relative overflow-hidden cursor-pointer`}
                >
                  {/* Floating Huge Icon Background */}
                  <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.06] group-hover:scale-125 transition-all duration-700 pointer-events-none">
                    {React.cloneElement(item.icon, { className: "w-48 h-48" })}
                  </div>

                  <div className="w-20 h-20 rounded-2xl bg-[#102A43] border border-white/10 flex items-center justify-center mb-8 group-hover:bg-white transition-colors duration-500 shadow-xl relative z-10">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 relative z-10 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-light relative z-10">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. DRIVING VALUES & VISION (Interlocking Blocks) */}
      <section className="py-28 px-6 md:px-12 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Purpose and Vision */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 space-y-10">
              <div>
                <h2 className="text-sm font-black text-orange-500 tracking-[0.2em] uppercase mb-4">Our Purpose</h2>
                <h3 className="text-3xl md:text-4xl text-[#102A43] font-bold leading-tight mb-4">
                  Simplify business growth.
                </h3>
                <p className="text-lg text-gray-500 font-light leading-relaxed">
                  By providing reliable, efficient, and innovative solutions that deliver directly measurable operational results.
                </p>
              </div>
              <div className="w-full h-[1px] bg-gradient-to-r from-gray-200 to-transparent"></div>
              <div>
                <h2 className="text-sm font-black text-sky-500 tracking-[0.2em] uppercase mb-4">Our Vision</h2>
                <h3 className="text-3xl md:text-4xl text-[#102A43] font-bold leading-tight mb-4">
                  Intelligent Ecosystems.
                </h3>
                <p className="text-lg text-gray-500 font-light leading-relaxed">
                  To become a trusted partner for businesses by building systems powered entirely by technology, finance, and strategy.
                </p>
              </div>
            </motion.div>

            {/* Right: What Drives Us (2x2 Flex Grid) */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-7">
              <div className="bg-white p-10 md:p-12 rounded-[40px] shadow-2xl border border-gray-100">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-black text-[#102A43]">What <span className="text-orange-500">Drives</span> Us</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  {whatDrivesUs.map((value, idx) => (
                    <motion.div key={idx} whileHover={{ y: -5 }} className="flex gap-5 group">
                      <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#102A43] mb-2">{value.title}</h4>
                        <p className="text-gray-500 text-sm font-light leading-relaxed">{value.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. LEADERSHIP PROFILE (Clean Premium Dark Block) */}
      <section className="py-24 px-6 md:px-12 bg-[#102A43] relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 relative z-10 items-center">
          
          {/* Left Text content */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
            <h2 className="text-sm font-black text-orange-500 tracking-[0.2em] uppercase mb-4">Leadership & Vision</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold mb-8 leading-tight">
              Guided by Vision,<br />
              <span className="text-orange-500">Driven by Results.</span>
            </h3>
            <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
              <p>
                <strong className="text-white font-bold text-xl">Ajaz Ahmad</strong> leads Crossover Fintech Support Pvt. Ltd. with a clear vision to build intelligent, scalable, and high-impact solutions for modern businesses.
              </p>
              <p>
                His leadership focuses on innovation, efficiency, and long-term value creation. By combining financial expertise with technology and operational excellence, he drives the company toward delivering solutions that help clients grow faster and operate smarter.
              </p>
              <p className="border-l-4 border-orange-500 pl-4 py-3 italic text-gray-400 bg-white/5 rounded-r-xl">
                "Under his direction, the company continues to evolve as a reliable partner for businesses in a digital-first world."
              </p>
            </div>
          </motion.div>

          {/* Right Image Placeholder */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-5 relative">
            <div className="aspect-[3/4] max-h-[550px] w-full bg-slate-800 rounded-[30px] shadow-2xl border border-white/10 relative z-10 overflow-hidden group">
              {/* Background Placeholder Layer (Z-0) */}
              <div className="absolute inset-0 flex items-center justify-center z-0 text-slate-600 bg-slate-800">
                <Users className="w-24 h-24 opacity-50"/>
              </div>

              {/* Actual Profile Image (Z-10) */}
              <img 
                src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496510/cfs_assets/ceo-photo.png" 
                alt="Ajaz Ahmad - CEO" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 object-top relative z-10" 
              />

              {/* Gradient Darkness Overlay (Z-20) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a2a] via-transparent to-transparent opacity-90 z-20 pointer-events-none"></div>

              {/* Tag Overlay */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <h4 className="text-3xl font-black text-white mb-2">Ajaz Ahmad</h4>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500 text-white rounded-full text-sm font-bold shadow-lg">
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>
            {/* Decorative block behind image */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-orange-500/20 rounded-[30px] -z-10 blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[radial-gradient(#F97316_3px,transparent_3px)] [background-size:16px_16px] z-20 opacity-40"></div>
          </motion.div>

        </div>
      </section>

      {/* 6. TRUST & HEAVY CTA SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#102A43] rounded-[50px] overflow-hidden shadow-2xl relative">
            
            {/* Visual Background geometry */}
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496514/cfs_assets/contact1.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-500/30 to-transparent skew-x-12 translate-x-32"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 p-12 md:p-20 gap-16 items-center">
              
              {/* Why Trust Us List */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">
                  Why Businesses <span className="text-orange-400">Trust Us</span>
                </h2>
                <div className="space-y-6">
                  {whyTrustUs.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-5">
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 border border-white/20">
                        <CheckCircle2 className="w-5 h-5 text-orange-400" />
                      </div>
                      <span className="text-xl text-gray-200 font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Call to Action Box */}
              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-10 rounded-[30px] text-center shadow-2xl">
                  <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto flex items-center justify-center mb-6 shadow-xl shadow-orange-500/30">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-white mb-4">Built to Support Your Growth</h3>
                  <p className="text-gray-300 font-light text-lg mb-10 leading-relaxed">
                    We don’t just support businesses — we build systems that power efficiency, scalability, and long-term success. Let’s build something smarter together.
                  </p>
                  
                  <div className="flex flex-col gap-4 w-full">
                    <Link href="/contact-us" className="group flex items-center justify-center gap-3 bg-orange-500 text-white font-bold text-lg px-8 py-5 rounded-2xl hover:bg-orange-400 transition-all shadow-xl shadow-orange-500/20 active:scale-95">
                      Get Started Now <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/contact-us" className="flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-white hover:text-[#102A43] transition-all active:scale-95">
                      Talk to an Expert
                    </Link>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutUsPage;