"use client";
import { CheckCircle } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const EligibilitySection = () => {
  const points = [
    "Age: 21–60 years",
    "Salaried or self-employed",
    "Minimum monthly income required",
    "Good credit score preferred",
    "Indian citizen",
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-1/3 h-[400px] bg-orange-50 rounded-r-full blur-3xl -translate-y-1/2 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-orange-50 border border-orange-100 rounded-full text-orange-600 text-sm font-bold tracking-wide shadow-sm">
            ELIGIBILITY CRITERIA
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
            Check Your <br />
            <span className="text-orange-500">Eligibility</span>
          </h2>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
            We've ensured our criteria is flexible so you get exactly what you need with minimal restrictions.
          </p>

          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {points.map((item, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all duration-300 w-full max-w-md group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <span className="text-gray-700 font-medium text-lg">{item}</span>
              </motion.div>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative Outline */}
          <div className="absolute -inset-4 border-2 border-dashed border-orange-200 rounded-3xl -z-10 bg-orange-50/30"></div>
          
          <img
            src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496506/cfs_assets/Business-Loan-1.jpg"
            alt="Personal Loan Customer"
            className="w-full h-auto object-cover rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.2)]"
          />
          
          {/* Floating Image Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-12 w-[80%] max-w-[280px] md:max-w-[400px] aspect-[4/3] rounded-2xl shadow-2xl border-[8px] border-white overflow-hidden bg-white z-20"
          >
            <img src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496901/cfs_assets/personal-loan1.jpg" alt="Personal Loan Profile" className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default EligibilitySection;
