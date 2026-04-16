"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FileDown, Download, CheckCircle2, Star, Activity, 
  ShieldCheck, Zap, ArrowRight, Briefcase, Globe, 
  Cpu, Users, BarChart, Rocket
} from 'lucide-react';

const BrochurePage = () => {

  const highlights = [
    { title: "Business Process Outsourcing", icon: <Users className="w-8 h-8 text-blue-500" />, desc: "Scalable customer support, back-office operations, and data management." },
    { title: "Finance & Accounting", icon: <BarChart className="w-8 h-8 text-green-500" />, desc: "Expert payroll processing, bank reconciliation, and GST billing support." },
    { title: "IT-Enabled Services", icon: <Cpu className="w-8 h-8 text-purple-500" />, desc: "Modern CRM management, L1/L2 technical support, and cloud solutions." },
    { title: "Web & Digital Growth", icon: <Globe className="w-8 h-8 text-orange-500" />, desc: "Premium website development, UI/UX design, and result-driven SEO." }
  ];

  const specializedSolutions = [
    { title: "Bulk Hiring Services", icon: <Rocket className="w-6 h-6 text-white" /> },
    { title: "Game Development", icon: <Zap className="w-6 h-6 text-white" /> },
    { title: "Custom Software", icon: <Cpu className="w-6 h-6 text-white" /> },
    { title: "Domestic/Intl Travel", icon: <Globe className="w-6 h-6 text-white" /> }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <main className="w-full bg-white overflow-x-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden bg-[#102A43]">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -mr-40 -mt-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] -ml-40 -mb-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md text-orange-400 rounded-full text-xs font-black tracking-widest uppercase mb-8 border border-white/20">
                <Star className="w-4 h-4 fill-orange-400" />
                <span>Download Assets</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
                Our Corporate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">Brochure 2026</span>
              </h1>
              
              <p className="text-xl text-slate-300 leading-relaxed font-light mb-10 max-w-xl">
                Explore our full spectrum of BPO, Financial, and Technical services. Download our comprehensive guide to see how we power business intelligence.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <a 
                  href="/assets/docs/CFS-Brochure.pdf" 
                  download
                  className="group flex items-center gap-3 bg-orange-500 text-white font-bold text-lg px-8 py-5 rounded-2xl hover:bg-orange-400 transition-all shadow-2xl shadow-orange-500/20 active:scale-95"
                >
                  <Download className="w-6 h-6 group-hover:bounce" />
                  Download PDF Brochure
                </a>
                <Link 
                  href="/contact-us"
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg px-8 py-5 rounded-2xl hover:bg-white hover:text-[#102A43] transition-all"
                >
                  Custom Proposal <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1 }}
              className="relative lg:block hidden"
            >
              <div className="relative z-10 p-4 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-sm">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[32px] overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center aspect-[4/5]">
                  <div className="text-center p-12">
                     <FileDown className="w-32 h-32 text-orange-500 mx-auto mb-6 opacity-50" />
                     <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Crossover Fintech Support</h3>
                     <p className="text-slate-400 text-sm uppercase tracking-widest font-black">Official Portfolio 2026</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-orange-500/20 blur-3xl -z-10 rounded-full"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CORE DOMAINS SECTION */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-orange-500 tracking-[0.3em] uppercase mb-4">What's Inside</h2>
            <h3 className="text-4xl md:text-5xl text-[#102A43] font-black tracking-tight">Key Service Verticals</h3>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className="p-8 bg-slate-50 border border-slate-100 rounded-[30px] hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-extrabold text-[#102A43] mb-4 leading-tight">{item.title}</h4>
                <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. SPECIALIZED SOLUTIONS */}
      <section className="py-24 px-6 md:px-12 bg-[#f1f5f9] relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-500/5 -skew-x-12 translate-x-20"></div>
         
         <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
               <h2 className="text-4xl font-black text-[#102A43] mb-8 leading-tight">
                  Beyond Standard Services: <br />
                  <span className="text-orange-500">Niche Expertise.</span>
               </h2>
               <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
                  Our brochure also covers specialized industries including gaming, bulk human resources, and high-end tech support. We adapt our systems to meet the unique demands of your specific sector.
               </p>
               
               <div className="grid sm:grid-cols-2 gap-4">
                  {specializedSolutions.map((sol, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-200 group hover:border-orange-500/30 transition-colors">
                       <div className="w-10 h-10 bg-[#102A43] rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                          {sol.icon}
                       </div>
                       <span className="font-bold text-[#102A43]">{sol.title}</span>
                    </div>
                  ))}
               </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              className="bg-[#102A43] p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-8">
                  <Activity className="w-20 h-20 text-white/5" />
               </div>
               <h3 className="text-3xl font-bold mb-6">Why Download?</h3>
               <ul className="space-y-6">
                  {[
                    "Detailed Service Level Agreements (SLAs)",
                    "Case Studies & Client Success Metrics",
                    "Pricing Models & Partnership Plans",
                    "Technical Stack & Security Compliance"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4">
                       <CheckCircle2 className="w-6 h-6 text-orange-400 flex-shrink-0" />
                       <span className="text-slate-300 font-light">{text}</span>
                    </li>
                  ))}
               </ul>
            </motion.div>
         </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-32 px-6 md:px-12 text-center bg-white">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
             <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <FileDown className="w-10 h-10 text-sky-600" />
             </div>
             <h2 className="text-4xl md:text-5xl font-black text-[#102A43] mb-6">Get Your Copy Today</h2>
             <p className="text-xl text-slate-500 font-light mb-12">
                Join 50+ partners who have transformed their operations with Crossover Fintech Support. Get the full brochure in one click.
             </p>
             <a 
               href="/assets/docs/CFS-Brochure.pdf" 
               download
               className="inline-flex items-center gap-4 bg-[#102A43] text-white font-black text-xl px-12 py-6 rounded-3xl hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500/30 transition-all active:scale-95 group mb-4"
             >
                Download Brochure <Download className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
             </a>
             <p className="text-sm text-slate-400 uppercase tracking-widest font-black">Size: ~1.2 MB | Format: PDF</p>
          </motion.div>
      </section>

    </main>
  );
};

export default BrochurePage;
