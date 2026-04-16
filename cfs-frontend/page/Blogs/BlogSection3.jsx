"use client"
import React, { useState, useEffect } from "react";
import api from "@/utils/api";
import { Loader2 } from "lucide-react";
import Link from 'next/link';
import { stripHtml } from "@/utils/UseFuncation";

const BlogSection3 = ({ activeCategory }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("All Categories");
  const [liked, setLiked] = useState({});

  const categories = ["All Categories", "Support Service", "Technology Service", "Finance Solution"];

  useEffect(() => {
    if (activeCategory) {
      setActiveTab(activeCategory);
    }
  }, [activeCategory]);

  useEffect(() => {
    const fetchKnowledgeBlogs = async () => {
      try {
        const { data } = await api.get('/blogs?section=learning-hub');
        if (data.success) {
          setBlogs(data.data);
        }
      } catch (err) {
        console.error("Error fetching learning-hub blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchKnowledgeBlogs();
  }, []);

  const filteredBlogs = activeTab === "All Categories" 
    ? blogs 
    : blogs.filter((blog) => blog.category === activeTab);

  const handleLike = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center">
        <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
      </div>
    );
  }

  if (blogs.length === 0) return null;

  return (
    <section className="bg-[#ffffff] py-10 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto ">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-6">
          <h2 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Knowledge <span className="text-[#FF8138]">Hub</span>
          </h2>
          <p className="text-slate-700 text-lg max-w-2xl mx-auto font-medium">
            Stay ahead of the curve with our latest insights on technology, 
            finance, and digital transformation.
          </p>
        </div>

        {/* --- Filter Tabs with Bottom Line --- */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-8 border-b border-black/10 relative px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`pb-4 text-sm font-bold transition-all relative ${
                  activeTab === cat ? "text-slate-900" : "text-slate-600 hover:text-[#FF8138]"
                }`}
              >
                {cat}
                {activeTab === cat && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#FF8138] rounded-t-full transition-all duration-300" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* --- Blog Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.map((blog) => (
            <div 
              key={blog._id} 
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 group flex flex-col h-full border-t-[10px] border-[#FF8138]"
            >
              {/* Image Section */}
              <div className="relative p-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-inner bg-slate-100">
                  <img 
                    src={blog.image || 'https://via.placeholder.com/500'} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={blog.title} 
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <button className="p-2.5 bg-white/90 backdrop-blur-sm rounded-xl text-slate-900 hover:bg-[#FF8138] hover:text-white transition-all shadow-md">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                    </button>
                    <button 
                      onClick={() => handleLike(blog._id)}
                      className={`p-2.5 backdrop-blur-sm rounded-xl transition-all shadow-md ${liked[blog._id] ? "bg-[#FF8138] text-white" : "bg-white/90 text-slate-900"}`}
                    >
                      <svg className="w-5 h-5" fill={liked[blog._id] ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-8 pb-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <img src={blog.authorImg || "https://randomuser.me/api/portraits/men/32.jpg"} className="w-5 h-5 rounded-full border border-orange-200" alt="author" />
                  <span className="text-xs font-bold text-slate-500">{blog.author || 'Crossover Admin'} • {new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 leading-tight group-hover:text-[#FF8138] transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium opacity-80 line-clamp-3">
                  {stripHtml(blog.content).substring(0, 100)}...
                </p>

                {/* Footer of Card */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link href={`/blog/${blog.slug}`}>
                    <button className="text-sm font-extrabold bg-slate-900 text-white px-6 py-2.5 rounded-xl hover:bg-[#FF8138] transition-all active:scale-95 shadow-lg shadow-slate-900/10">
                      Read More
                    </button>
                  </Link>
                  
                  <div className="flex gap-4 text-[11px] font-black text-slate-400">
                    <span className="flex items-center gap-1 hover:text-[#FF8138] transition-colors">
                      ❤️ {liked[blog._id] ? (blog.likes || 0) + 1 : (blog.likes || 0)}
                    </span>
                    <span className="flex items-center gap-1 hover:text-[#FF8138] transition-colors">
                      💬 {blog.comments || 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Load More --- */}
        <div className="mt-10 text-center">
          <button className="bg-slate-900 text-white px-4 py-2 rounded-2xl font-black text-lg hover:bg-[#FF8138] transition-all hover:-translate-y-1 shadow-2xl active:scale-60">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection3;