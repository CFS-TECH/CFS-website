"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Landmark, ShoppingBag, Building, Car, GraduationCap, Rocket, 
  CheckCircle2, Users, CreditCard, Layers, TrendingUp,
  ChevronDown, ArrowRight, Quote, ShieldCheck, Handshake
} from "lucide-react";

const page = () => {
  const [openFaq, setOpenFaq] = useState(0);

  // Data Objects based on user content
  const industries = [
    {
      id: 1,
      title: "Banking & Financial Services",
      icon: <Landmark className="w-8 h-8 text-orange-500" />,
      desc: "We empower financial institutions with secure, efficient, and scalable solutions designed to improve operations and customer experience.",
      points: [
        "Loan processing and verification support",
        "Customer onboarding assistance",
        "Risk and compliance support"
      ]
    },
    {
      id: 2,
      title: "Startups & MSMEs",
      icon: <Rocket className="w-8 h-8 text-purple-500" />,
      desc: "We help startups and growing businesses accelerate their journey with the right mix of funding, technology, and operational support.",
      points: [
        "Business loan assistance",
        "Growth and expansion support",
        "IT and backend solutions"
      ]
    },
    {
      id: 3,
      title: "Real Estate",
      icon: <Building className="w-8 h-8 text-green-500" />,
      desc: "We simplify property-related processes by providing financial support and smart management solutions.",
      points: [
        "Home and property loan assistance",
        "Lead generation and CRM support",
        "Client management solutions"
      ]
    },
    {
      id: 4,
      title: "Automobile",
      icon: <Car className="w-8 h-8 text-red-500" />,
      desc: "We support the automobile industry with financing solutions and customer engagement services.",
      points: [
        "Vehicle loan services",
        "Dealer financing support",
        "Customer handling solutions"
      ]
    },
    {
      id: 5,
      title: "E-commerce & Retail",
      icon: <ShoppingBag className="w-8 h-8 text-blue-500" />,
      desc: "We enhance business performance with digital solutions and backend support to improve customer experience and operations.",
      points: [
        "Website and technology solutions",
        "Order and customer management",
        "Support and operations handling"
      ]
    },
    {
      id: 6,
      title: "Education & EdTech",
      icon: <GraduationCap className="w-8 h-8 text-indigo-500" />,
      desc: "We empower educational institutions and platforms with digital solutions and operational support.",
      points: [
        "Student support services",
        "Platform and backend assistance",
        "Digital growth solutions"
      ]
    }
  ];

  const impactStats = [
    { value: "10,000+", label: "Clients Served", icon: <Users /> },
    { value: "₹80Cr+", label: "Loans Processed", icon: <CreditCard /> },
    { value: "6+", label: "Industries Covered", icon: <Layers /> },
    { value: "98%", label: "Client Satisfaction", icon: <TrendingUp /> }
  ];

  const workflowSteps = [
    { num: "01", title: "Understand Your Needs", desc: "We analyze your business model, industry requirements, and challenges to create the right strategy." },
    { num: "02", title: "Design Smart Solutions", desc: "We develop customized solutions tailored to your specific goals." },
    { num: "03", title: "Execute with Precision", desc: "We implement solutions efficiently with a focus on quality and speed." },
    { num: "04", title: "Support & Scale", desc: "We provide ongoing support to help your business grow and adapt over time." }
  ];

  const faqs = [
    {
      q: "Which industries do you serve?",
      a: "We work across multiple industries including fintech, startups, real estate, automobile, retail, and education."
    },
    {
      q: "Do you provide customized solutions?",
      a: "Yes, all our services are tailored according to your business needs and industry requirements."
    },
    {
      q: "How quickly can we get started?",
      a: "We ensure a fast onboarding process so you can start benefiting from our services quickly."
    }
  ];

  // Animation configurations
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <main className="w-full bg-slate-50 min-h-screen">
      
      {/* 1. HERO SECTION (Matched to Career Page format: 50vh height, breadcrumb layout) */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        {/* Background Image with Scale Animation */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Reusing existing assets to guarantee attractive visual without broken links */}
          <img
            src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496952/cfs_assets/services.jpg" 
            alt="Industries We Empower"
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
            className="mb-6 max-w-3xl"
          >
            <p className="text-gray-300 text-lg flex items-center gap-2 mb-4 font-medium">
              <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
              <span className="text-orange-500 font-bold">/</span> 
              Industries
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold tracking-tight mb-4 leading-tight">
              🌍 Industries We <span className="text-orange-500">Empower</span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed">
              Driving innovation, growth, and efficiency across industries with smart financial, IT, and business solutions.
            </p>
          </motion.div>

        </div>
      </div>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-20 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 text-sky-600 rounded-full text-sm font-bold tracking-wide uppercase mb-6 border border-sky-100">
              <ShieldCheck className="w-4 h-4" />
              <span>Introduction</span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#102A43] font-bold leading-tight mb-8">
              Every industry has <span className="text-orange-500">unique challenges</span> — and we bring customized solutions to solve them.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              At Crossover Fintech Support Pvt. Ltd., we combine fintech expertise, technology, and business support to deliver real results across multiple industries. Our goal is to help businesses operate smarter, scale faster, and achieve long-term success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. INDUSTRIES GRID (MAIN SECTION) */}
      <section className="py-24 px-6 bg-slate-50 relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industries.map((ind) => (
              <motion.div 
                key={ind.id}
                variants={fadeUp}
              >
                <Link href="/contact-us" className="group bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:shadow-orange-500/10 border border-gray-100 transition-all duration-500 block relative overflow-hidden h-full cursor-pointer">
                  {/* Decorative hover gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      {ind.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#102A43] mb-4 group-hover:text-orange-600 transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {ind.desc}
                    </p>
                    
                    <ul className="space-y-3">
                      {ind.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-500 fill-green-50 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-gray-700">{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. WHY EXPERTISE MATTERS & OUR IMPACT */}
      <section className="py-24 px-6 bg-[#102A43] text-white relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Why Our Industry <span className="text-orange-500">Expertise Matters</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light mb-10">
              Our deep understanding of industry-specific challenges allows us to deliver solutions that are practical, scalable, and result-oriented.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Industry-focused strategies",
                "Customized business solutions",
                "Scalable & future-ready approach",
                "Reliable and secure processes"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-gray-100">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 mb-4">
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">Our Impact</h3>
              <p className="text-gray-400 mt-2">Delivering measurable results and long-term relationships.</p>
            </div>
            {impactStats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all text-center"
              >
                <div className="text-orange-500 mx-auto w-fit mb-4">{React.cloneElement(stat.icon, { className: 'w-8 h-8' })}</div>
                <p className="text-3xl lg:text-4xl font-extrabold text-white mb-2">{stat.value}</p>
                <p className="text-sm font-medium text-gray-300 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. HOW WE WORK (Timeline) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#102A43] mb-4">How We <span className="text-orange-500">Work</span></h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our approach ensures efficient execution and consistent results across all industries.</p>
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
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-[#102A43] mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIAL & FAQ SECTION */}
      <section className="py-24 px-6 bg-slate-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-extrabold text-[#102A43] mb-8">What Our <span className="text-orange-500">Clients Say</span></h2>
            <div className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 relative">
              <Quote className="absolute top-6 right-6 w-16 h-16 text-slate-100 -z-0" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-6 text-orange-500">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
                </div>
                <p className="text-2xl text-[#102A43] font-medium leading-relaxed italic mb-8">
                  "Crossover Fintech helped us streamline our operations and improve customer handling. Their team is highly professional and reliable."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600 text-xl">S</div>
                  <div>
                    <h4 className="font-bold text-[#102A43]">A satisfied client</h4>
                    <span className="text-sm text-gray-500">Verified Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-extrabold text-[#102A43] mb-8">Frequently Asked <span className="text-orange-500">Questions</span></h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`bg-white border ${openFaq === idx ? 'border-orange-500 shadow-md' : 'border-gray-200 shadow-sm'} rounded-2xl overflow-hidden transition-all duration-300`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg ${openFaq === idx ? 'text-orange-600' : 'text-[#102A43]'}`}>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-orange-500' : 'text-gray-400'}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-gray-600 leading-relaxed"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[40px] shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496514/cfs_assets/contact1.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-[#102a43]/90 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-[#102A43]/80 to-transparent"></div>
          
          <div className="relative z-10 px-6 py-20 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
              Your Industry. <span className="text-orange-500 border-b-4 border-orange-500">Our Expertise.</span> Unlimited Growth.
            </h2>
            <p className="text-xl text-gray-300 font-light mb-12 max-w-2xl">
              Partner with us to transform your business with smart solutions and reliable support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Link 
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-orange-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 active:scale-95"
              >
                Apply Now <ArrowRight className="w-5 h-5"/>
              </Link>
              <a 
                href="https://wa.me/919990782525" // Updated whatsapp link structure
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-[#20bd5a] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/20 transition-all duration-300 active:scale-95"
              >
                <Handshake className="w-5 h-5"/> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default page;
