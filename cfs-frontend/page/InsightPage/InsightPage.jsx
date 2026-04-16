"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, TrendingUp, Users, Database, PieChart, Globe, Loader2 } from 'lucide-react';
import CTA from '@/components/HomeSection/CTA';
import api from '@/utils/api';

const InsightPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data } = await api.get('/blogs?limit=4');
        if (data.success) {
          // Limit to 4 for the Insight page grid
          setBlogs(data.data.slice(0, 4));
        }
      } catch (err) {
        console.error("Error fetching blogs for insight page:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const portalData = [
    {
      title: "Our Blog",
      desc: "Deep dives into IT infrastructure, Fintech architecture, and digital growth strategies.",
      icon: <BookOpen className="w-12 h-12 text-orange-500" />,
      href: "/blog",
      bg: "bg-[#102a43]",
    },
    {
      title: "Industry Updates",
      desc: "Real-time alerts on market compliance, technological shifts, and sector transformations.",
      icon: <TrendingUp className="w-12 h-12 text-blue-500" />,
      href: "/industry-update",
      bg: "bg-[#0a1a2a]",
    },
    {
      title: "Hiring Trends",
      desc: "Exclusive data on talent acquisition metrics, workforce shifts, and hiring operations.",
      icon: <Users className="w-12 h-12 text-green-500" />,
      href: "/careers",
      bg: "bg-[#0d2238]",
    }
  ];

  return (
    <main className="w-full min-h-screen bg-slate-50 font-sans tracking-wide">
      
      {/* 1. HIGH-TECH ANIMATED HERO BANNER */}
      <section className="relative w-full min-h-[300px] md:h-[40vh] flex items-center justify-center overflow-hidden bg-[#0A1A2A]">
        
        {/* Deep Abstract Core Gradient */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#102A43] via-[#0A1A2A] to-[#0A1A2A]"></div>
        
        {/* Animated Background Ambience (Drifting Glows) */}
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, 90, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[5%] w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"
        />
        <motion.div 
          animate={{ x: [-50, 50, -50], y: [-20, 20, -20] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[10%] left-[0%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"
        />

        {/* Tech Matrix Dotted Grid Overlay */}
        <div 
          className="absolute inset-0 w-full h-full opacity-10" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '50px 50px' }}
        ></div>

        {/* Endless Floating Data/Analytics Icons (3D Depth Effect) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 hidden md:block">
            {/* Top Left Floating PieChart */}
            <motion.div 
              animate={{ y: [0, -20, 0], rotate: [0, 15, 0], scale: [1, 1.05, 1] }} 
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute top-[15%] left-[5%] text-orange-500/20 drop-shadow-lg"
            >
              <PieChart size={100} strokeWidth={0.5} />
            </motion.div>
            
            {/* Right Center Floating Database Server */}
            <motion.div 
              animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} 
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
              className="absolute top-[20%] right-[5%] text-blue-500/10 mix-blend-screen"
            >
              <Database size={120} strokeWidth={0.5} />
            </motion.div>
        </div>

        {/* Hero Content Block */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-8 pb-8">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs md:text-sm font-black tracking-[0.2em] uppercase mb-10 shadow-[0_0_30px_rgba(253,116,30,0.2)] ring-1 ring-orange-500/30 backdrop-blur-md"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500 shadow-[0_0_10px_#ff6b00]"></span>
            </span>
            Analytics & Knowledge Hub
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
            className="text-white text-4xl sm:text-5xl md:text-[50px] lg:text-[60px] font-black mb-4 leading-[1.05] tracking-tight drop-shadow-xl"
          >
            Gain Deep <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-400 via-orange-500 to-orange-700 drop-shadow-[0_0_20px_rgba(253,116,30,0.5)]">Insights.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="text-slate-300 text-sm md:text-md font-light max-w-2xl mx-auto leading-relaxed"
          >
            Stay lightyears ahead. Dive into leading research, market compliance news, and operational trends rigorously drafted by our global intelligence team.
          </motion.p>
        </div>
      </section>

      {/* 2. THREE-PILLAR PORTAL GRID (Overlaps the Hero slightly to blend the two elements) */}
      <section className="relative w-full pb-20 px-6 lg:px-24 -mt-16 z-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {portalData.map((item, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`rounded-[30px] ${item.bg} p-10 border-t border-l border-white/10 shadow-2xl shadow-[#102A43]/20 hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden flex flex-col`}
            >
              {/* Abstract Light Flare inside card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-all duration-700"></div>
              
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 group-hover:bg-orange-500/10 group-hover:border-orange-500/20 transition-all duration-500 shadow-xl">
                {item.icon}
              </div>
              <h2 className="text-3xl font-black text-white mb-4 relative z-10">{item.title}</h2>
              <p className="text-slate-400 font-light leading-relaxed mb-10 relative z-10 group-hover:text-slate-300 transition-colors flex-grow">
                {item.desc}
              </p>
              
              <Link href={item.href} className="inline-flex w-max items-center text-orange-500 font-black hover:text-orange-400 relative z-10 group/btn bg-orange-500/10 px-6 py-3 rounded-full hover:bg-orange-500/20 transition-colors">
                Browse Content 
                <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. LATEST HIGHLIGHTS (Pulls dynamic data from Utils) */}
      <section className="w-full py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-24">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b-2 border-slate-100 pb-6">
            <div className="w-full md:w-auto text-left mb-6 md:mb-0">
               <h2 className="text-4xl md:text-5xl font-black text-[#102A43] drop-shadow-sm mb-4">Latest <span className="text-orange-500">Releases</span></h2>
               <div className="w-24 h-1.5 bg-orange-500 rounded-full"></div>
            </div>
            {/* Desktop link to articles */}
             <Link href="/blog" className="hidden md:flex items-center text-slate-500 font-bold hover:text-[#102A43] transition-colors group">
              View Publication Index <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[300px]">
            {loading ? (
              <div className="col-span-full flex flex-col items-center justify-center py-20">
                <Loader2 className="w-10 h-10 text-orange-500 animate-spin mb-4" />
                <p className="text-slate-500 font-medium animate-pulse uppercase tracking-widest text-xs">Fetching Latest Intel...</p>
              </div>
            ) : blogs.length > 0 ? (
              blogs.map((blog, idx) => (
                <motion.div 
                  key={blog._id || idx}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  className="bg-white rounded-[24px] border border-slate-200 shadow-lg overflow-hidden flex flex-col group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Image Cover */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-[#102A43]/90 backdrop-blur-md text-white border border-white/20 text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full shadow-md uppercase">
                      {blog.category}
                    </div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-7 flex flex-col flex-grow">
                    <h3 className="text-[19px] font-black text-[#102A43] leading-[1.3] mb-4 line-clamp-3 group-hover:text-orange-500 transition-colors">
                      {blog.title.split(',')[0]}
                    </h3>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 text-[13px] text-slate-500 font-bold tracking-wide">
                      <span>
                        {blog.createdAt 
                          ? new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase()
                          : "RECENT"}
                      </span>
                      <Link href={`/blog/${blog.slug}`} className="text-orange-500 hover:text-[#102A43] flex items-center group/link">
                        READ <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                <p className="text-slate-400 font-bold uppercase tracking-tighter">No Recent Publications Found</p>
              </div>
            )}
          </div>

          <div className="mt-16 text-center md:hidden">
            <Link href="/blog" className="inline-block bg-[#102A43] text-white font-bold py-4 px-10 rounded-full hover:bg-orange-500 transition-colors shadow-lg active:scale-95">
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FOOTER CTA */}
      <CTA />

    </main>
  );
};

export default InsightPage;
