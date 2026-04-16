"use client";
import React, { useState, useEffect } from "react";
import { CalendarDays, Eye, MessageSquare, ChevronRight, Share2, Loader2 } from "lucide-react";
import api from "@/utils/api";
import Link from 'next/link';

const BlogDetails = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      setLoading(true);
      try {
        const { data } = await api.get(`/blogs/${slug}`);
        if (data.success) {
          setBlog(data.data);
        } else {
          setError("Blog not found");
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError("Failed to load blog content");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  const suggestions = [
    {
      title: "IT Consultancy",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=400",
      icon: "https://cdn-icons-png.flaticon.com/512/2906/2906274.png",
      points: ["Website Development", "Web Application Development", "Custom Software Solutions", "API Development & Integration"],
      link: "/technical-services"
    },
    {
      title: "Capital Solutions",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=400",
      icon: "https://cdn-icons-png.flaticon.com/512/2454/2454282.png",
      points: ["Personal Loans", "Business Loans", "Home Loans", "Car Loans"],
      link: "/financial-solutions"
    },
    {
      title: "Customer Operations",
      image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=400",
      icon: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
      points: ["Back Office", "Customer Support", "Data Management", "Sales & Lead Operations"],
      link: "/business-support"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
        <p className="text-gray-500 font-medium animate-pulse">Loading blog insights...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{error || "Blog Not Found"}</h2>
        <p className="text-gray-500 mb-6">The insight you are looking for might have been moved or doesn't exist.</p>
        <Link href="/blog" className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all active:scale-95">
          Explore Other Blogs
        </Link>
      </div>
    );
  }

  const { title, content, image, author, authorImg, createdAt, category, readTime } = blog;

  return (
    <div className="bg-gray-50 min-h-screen pb-20 font-sans">
      
      {/* 1. MAIN BLOG SECTION */}
      <section className="max-w-4xl mx-auto py-12 px-4">
        <div className="w-full bg-white p-6 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          
          <div className="flex justify-center mb-6">
            <span className="bg-orange-100 text-orange-600 px-6 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
              {category || 'FinTech Insight'}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-6 leading-tight tracking-tight">
            {title}
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between mt-3 border-t border-b border-gray-200 py-6 mb-8 gap-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={authorImg || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"} 
                  alt={author || "Author"}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-gray-900 leading-none">{author || 'Crossover Author'}</p>
                <p className="text-sm text-gray-500 mt-1.5 italic font-medium">Expert Technical Insight</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-gray-500 text-sm font-semibold">
              <div className="flex items-center gap-1.5 hover:text-orange-600 transition-colors cursor-pointer">
                <CalendarDays size={18} className="text-orange-500" /> 
                {new Date(createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-1.5 hover:text-orange-600 transition-colors cursor-pointer">
                <Eye size={18} className="text-orange-500" /> 
                {readTime || '5 min'} read
              </div>
            </div>
          </div>

          <div className="w-full mb-10 overflow-hidden rounded-3xl group shadow-2xl border border-gray-100">
            <img
              src={image || "https://res.cloudinary.com/dsqstik0x/image/upload/v1771826557/hands-typing-laptop-with-glowing-email-icons-floating-online-messages-cascading-from-screen_1175634-7911_qx0n0m.jpg"} 
              alt={title}
              className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <div className="w-full overflow-x-auto">
            <article 
              className="prose prose-indigo max-w-none text-gray-700 text-[17px] leading-relaxed selection:bg-orange-100 font-medium ql-editor break-words overflow-hidden"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <button className="flex items-center gap-2 text-gray-500 hover:text-orange-600 font-bold transition-all hover:scale-105 transform active:scale-95 bg-gray-50 px-6 py-2.5 rounded-xl border border-gray-100">
              <Share2 size={20} className="text-orange-500" /> Share Insight
            </button>
            <div className="flex flex-wrap gap-2 justify-center">
              {[category, "FinTech", "Global Solutions"].filter(Boolean).map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-orange-600 hover:text-white transition-all cursor-pointer border border-gray-200">#{tag.replace(/\s+/g, '')}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ANIMATED SUGGESTION SECTION */}
      <section className="max-w-6xl mx-auto px-4 mt-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#1a2e44] mb-2">Our Key Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-medium">
            Empowering clients with smart and secure financial decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {suggestions.map((item, index) => (
            <div key={index} 
                 className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Floating Icon with Animation */}
                <div className="absolute -bottom-6 right-6 bg-white p-2 rounded-xl shadow-lg w-16 h-16 flex items-center justify-center border border-gray-50 transition-all duration-500 group-hover:rotate-12">
                   <img src={item.icon} alt="icon" className="w-10 h-10 object-contain" />
                </div>
              </div>

              <div className="p-8 pt-10 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors uppercase tracking-tight">{item.title}</h3>
                <ul className="space-y-3 mb-8">
                  {item.points.map((point, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300 font-medium">
                      <span className="text-orange-500 font-extrabold">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <Link href={item.link} className="flex items-center w-fit gap-1.5 text-sm font-black text-gray-900 hover:text-orange-600 transition-all group/btn uppercase tracking-tighter">
                  View Solutions 
                  <ChevronRight size={18} className="text-orange-500 transition-transform group-hover/btn:translate-x-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;