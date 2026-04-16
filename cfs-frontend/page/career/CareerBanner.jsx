"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiMapPin } from "react-icons/fi";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";


const CareerBanner = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      {/* Background Image with Scale Animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg"
          alt="career"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto h-full px-6 flex flex-col justify-center items-start">
        
        {/* Breadcrumb & Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl text-white font-extrabold tracking-tight mb-3">
            Join Our <span className="text-orange-500">Team</span>
          </h2>
          <p className="text-gray-300 text-lg flex items-center gap-2">
            Home <span className="text-orange-500 font-bold">/</span> Career
          </p>
        </motion.div>

        {/* Search Box Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-xl bg-white p-2 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-2"
        >
          {/* Job Search Input */}
          <div className="relative flex-1 w-full">
            <FiSearch className="absolute left-4 top-1/2  -translate-y-1/2 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Job title, keywords..."
              className="w-full pl-12 pr-4 py-2 text-gray-700 outline-none rounded-lg focus:bg-gray-50 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>


          {/* Search Button */}
         <Link href={`/career-search/${search}`} >
          <button className="w-full cursor-pointer md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-lg transition-all transform hover:scale-[1.02] active:scale-95">
      <FaLocationArrow/>
          </button></Link>
        </motion.div>

        {/* Quick Tags */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5 }}
           className="mt-4 flex gap-3 flex-wrap"
        >
            <span className="text-gray-400 text-sm italic">Trending:</span>
            {['React Dev', 'Manager', 'UI/UX'].map((tag) => (
                <button key={tag} className="text-white/80 text-sm hover:text-orange-400 transition-colors">
                    #{tag}
                </button>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CareerBanner;