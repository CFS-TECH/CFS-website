import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight, Clock, Hash, Sparkles, Loader2 } from 'lucide-react'; 
import api from '@/utils/api';
import Link from 'next/link';
import { stripHtml } from '@/utils/UseFuncation';

const BlogSection1 = ({ activeCategory }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestBlog = async () => {
      setLoading(true);
      try {
        let url = '/blogs?section=featured&limit=1';
        if (activeCategory && activeCategory !== "All Categories") {
          url += `&category=${activeCategory}`;
        }
        const { data } = await api.get(url);
        if (data.success && data.data.length > 0) {
          setBlog(data.data[0]);
        } else {
          setBlog(null);
        }
      } catch (err) {
        console.error("Error fetching featured blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestBlog();
  }, [activeCategory]);

  if (loading) {
    return (
      <div className="w-full py-20 flex justify-center items-center bg-white">
        <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
      </div>
    );
  }

  if (!blog) return null;

  return (
    <section className="w-full py-8 px-4 md:px-10 flex justify-center items-center relative overflow-hidden bg-[#ffffff]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-200 rounded-full blur-[120px] opacity-40 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-[120px] opacity-40 translate-y-1/2" />

      <div className="max-w-7xl w-full relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-5 gap-5"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-orange-600 font-bold tracking-[0.2em] uppercase text-xs bg-orange-100 px-4 py-1.5 rounded-full">
              <Sparkles size={16} />
              <span>Spotlight</span>
            </div>
            <h2 className="text-3xl md:text-3xl font-black text-slate-900 leading-tight">
              Featured <span className="text-orange-500">Blogs</span>
            </h2>
            <p className="text-slate-600 text-lg  ">
            Stay updated with Crossover’s expert insights on finTech, loan solutions, digital transformation, and business growth strategies.
            </p>
          </div>

          <Link href="/blog">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#fd741e' }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-3 bg-[#102a43] text-white text-xs font-bold rounded-full shadow-lg transition-all duration-300 flex items-center gap-1 group"
            >
              Explore All News
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        {/* --- FEATURED CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row bg-white rounded-4xl border border-orange-100 overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] group"
        >
          {/* Image Section */}
          <div className="lg:w-1/2 relative h-60 md:h-90 overflow-hidden">
            <img 
              src={blog.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"} 
              alt={blog.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Tag Overlay */}
            <div className="absolute top-6 left-6 md:top-8 md:left-8">
              <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-xl">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                Trending Insight
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 pl-6 md:pl-7 md:pr-7 flex flex-col justify-center bg-white relative">
            {/* Meta Tags */}
            <div className="flex flex-wrap gap-6 md:gap-8 mb-8 text-[13px] text-slate-500 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1 text-orange-600 bg-orange-100 px-2 py-1 rounded-lg">
                <Hash size={16} /> {blog.category || 'FinTech'}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} /> {blog.readTime || '6 Min Read'}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays size={16} /> {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
             
            {/* Title */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-[#]leading-[1.15] mb-3">
              {blog.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600  text-lg leading-relaxed line-clamp-3">
              {stripHtml(blog.content).substring(0, 150)}...
            </p>

            {/* Action Button */}
            <Link href={`/blog/${blog.slug}`}>
              <motion.button
                initial="initial"
                whileHover="hover"
                className="flex items-center gap-3  pt-6 w-fit group text-left"
              >
                <span className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  Start Reading
                </span>
                <motion.div 
                  variants={{
                    initial: { x: 0, backgroundColor: "#f1f5f9", color: "#0f172a" },
                    hover: { x: 10, backgroundColor: "#f97316", color: "#ffffff" }
                  }}
                  className="w-10 h-10  rounded-full flex items-center justify-center transition-all shadow-md"
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection1;