"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  User, Briefcase, Car, Building2, Wallet, 
  CheckCircle2, ArrowRight, Zap, Target,
  FileText, ClipboardEdit, CheckSquare, BadgeCheck,
  FileCheck
} from "lucide-react";

const FinancialSolutionsClient = () => {
  const financialServices = [
    {
      title: "Personal Loan",
      icon: <User className="w-8 h-8 text-blue-500" />,
      desc: "Quick and hassle-free loans for personal needs like medical, travel, or emergencies.",
      link: "/services/personal-loan"
    },
    {
      title: "Business Loan",
      icon: <Briefcase className="w-8 h-8 text-orange-500" />,
      desc: "Funding solutions to support business growth, expansion, and operations.",
      link: "/services/business-loan"
    },
    {
      title: "Vehicle Loan",
      icon: <Car className="w-8 h-8 text-green-500" />,
      desc: "Easy financing options to help you own your dream vehicle.",
      link: "/services/vehicle-loan"
    },
    {
      title: "Property Loan",
      icon: <Building2 className="w-8 h-8 text-purple-500" />,
      desc: "Reliable financial support for property purchase or investment.",
      link: "/services/property-loan"
    }
  ];

  const applyProcess = [
    { num: "01", icon: <ClipboardEdit/>, title: "Submit Your Details", desc: "Fill in your basic information and loan requirements." },
    { num: "02", icon: <CheckSquare/>, title: "Get Eligibility Check", desc: "Our team reviews your profile and checks eligibility instantly." },
    { num: "03", icon: <FileText/>, title: "Document Verification", desc: "Submit required documents for quick and secure verification." },
    { num: "04", icon: <BadgeCheck/>, title: "Approval & Disbursal", desc: "Once approved, funds are disbursed directly to your account." }
  ];

  const documentsRequired = [
    "Identity Proof (Aadhar Card / PAN Card)",
    "Address Proof",
    "Income Proof (Salary slips / Bank statements)",
    "Business Proof (for business loans)",
    "Property Documents (for property loans, if applicable)"
  ];

  const whyChooseUs = [
    "Fast approval and quick disbursal",
    "Minimal documentation",
    "Competitive interest rates",
    "Flexible repayment options",
    "Safe and secure process"
  ];

  const benefits = [
    "Quick access to funds",
    "Hassle-free application",
    "Customized loan options",
    "Better financial planning",
    "Support for personal and business growth"
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
      
      {/* 1. HERO SECTION (Matched to 50vh theme) */}
      <div className="relative w-full h-[50vh] overflow-hidden bg-[#102A43]">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Using a general business/finance related placeholder image from existing assets */}
          <img
            src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496952/cfs_assets/services.jpg" 
            alt="Smart Financial Solutions"
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
              Financial Solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight mb-4 leading-tight">
              💼 Smart <span className="text-orange-500">Financial Solutions</span> for Every Need
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed">
              Flexible, fast, and reliable financial solutions designed to support your personal goals and business growth.
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-orange-100">
              <Wallet className="w-4 h-4" />
              <span>Transparent & Simple</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#102A43] font-bold leading-tight mb-8">
              Managing finances should be simple, transparent, and <span className="text-orange-500">stress-free.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              At Crossover Fintech Support Pvt. Ltd., we provide tailored financial solutions that help individuals and businesses access the funds they need quickly and efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. OUR FINANCIAL SERVICES GRID */}
      <section className="py-24 px-6 bg-slate-50 relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#102A43] mb-4">Our <span className="text-orange-500">Financial</span> Services</h2>
            <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {financialServices.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
              >
                <Link href={service.link || "/contact-us"} className="group bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-orange-500/10 border border-gray-100 transition-all duration-500 block relative overflow-hidden h-full cursor-pointer">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="relative z-10 text-2xl font-bold text-[#102A43] mb-4 group-hover:text-orange-600 transition-colors">
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

      {/* 4. APPLY PROCESS (Timeline) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#102A43] mb-4">How to <span className="text-orange-500">Apply</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Applying for a loan with us is simple and quick.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applyProcess.map((step, idx) => (
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

      {/* 5. DOCUMENTS & BENEFITS SECTION */}
      <section className="py-24 px-6 bg-[#102A43] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/20 skew-x-12 translate-x-1/4 -z-0"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 relative z-10">
          
          {/* Documents Required */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-extrabold mb-4 text-orange-400">Documents Required</h2>
            <p className="text-gray-300 mb-8 font-light text-sm">To ensure a smooth process, keep the following documents ready before applying.</p>
            <ul className="space-y-4">
              {documentsRequired.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <FileCheck className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-200 text-sm">{doc}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-12">
            {/* Why Choose Us */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-extrabold mb-8">Why <span className="text-orange-500">Choose Us</span></h2>
              <div className="space-y-4">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-100">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-extrabold mb-8">Platform <span className="text-sky-400">Benefits</span></h2>
              <div className="space-y-4">
                {benefits.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 flex-shrink-0">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="font-medium text-gray-100">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Your financial goals deserve the right support — <span className="text-orange-500">and we’re here to make it happen.</span>
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

export default FinancialSolutionsClient;
