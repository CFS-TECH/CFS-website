"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Icons ke liye humne lucide-react ka use kiya hai
import { Search, ArrowRight, TrendingUp } from 'lucide-react';

const BlogBanner = ({ activeCategory, setActiveCategory }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (tag) => {
    setActiveCategory(prev => prev === tag ? "All Categories" : tag);
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <section className="relative w-full min-h-[300px] flex items-center justify-center overflow-hidden  bg-black">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1771850656/gradient-dark-blue-futuristic-digital-grid-background_i7qqbh.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to from-zinc-950 via-transparent to-zinc-950/50" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-5xl px-4 text-center text-white"
      >
        {/* Title */}
        <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
          Expert Blogs & <span className="text-orange-500">Thought Leadership</span>
        </motion.h1>

        {/* Animated Search Bar */}
        <motion.div variants={fadeInUp} className="relative max-w-2xl mx-auto my-6 group ">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Search className="text-zinc-200 group-focus-within:text-orange-500 transition-colors" size={18} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for topics..."
            className="w-full bg-white/5 backdrop-blur-xl border border-white/5 py-2 pl-12 pr-20 rounded-full text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-orange-500/80 transition-all text-lg shadow-2xl"
          />
          <motion.button
            whileHover={{ scale: 1.0 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-3 top-2.5 bottom-2.5 bg-[#fd741e] hover:bg-orange-600 text-white px-5 rounded-full transition-colors flex items-center justify-center shadow-lg"
          >
            <ArrowRight size={15} />
          </motion.button>
        </motion.div>

        {/* Trending Tags Section */}
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-orange-500 font-semibold mr-2 uppercase tracking-widest text-xs md:text-sm">
            <TrendingUp size={18} />
            <span>Trending Now:</span>
          </div>

          {["Support Service", "Technology Service", "Finance Solution"].map((tag, index) => (
            <motion.button
              key={index}
              onClick={() => handleCategoryClick(tag)}
              whileHover={{
                scale: 1.05,
              }}
              className={`backdrop-blur-sm border px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === tag 
                  ? "bg-orange-500 border-orange-500 text-white shadow-[0_0_15px_rgba(253,116,30,0.4)]" 
                  : "bg-white/5 border-white/10 text-zinc-200 hover:bg-white/10"
              }`}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
};

export default BlogBanner;
