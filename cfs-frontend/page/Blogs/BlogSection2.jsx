"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import api from "@/utils/api";
import { Loader2 } from "lucide-react";
import Link from 'next/link';
import { stripHtml } from "@/utils/UseFuncation";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const BlogSection2 = ({ activeCategory }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      setLoading(true);
      try {
        // Automatically fetch top 4 newly updated/created blogs
        let url = '/blogs?limit=4';
        if (activeCategory && activeCategory !== "All Categories") {
          url += `&category=${activeCategory}`;
        }
        const { data } = await api.get(url);
        if (data.success) {
          setBlogs(data.data);
        }
      } catch (err) {
        console.error("Error fetching latest blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLatestBlogs();
  }, [activeCategory]);

  if (loading) {
     return (
       <div className="min-h-[400px] flex items-center justify-center">
         <Loader2 className="w-8 h-8 text-orange-600 animate-spin" />
       </div>
     );
  }

  // If no blogs found for this section, we could hide it or show a placeholder
  if (blogs.length === 0) return null;

  const featuredBlog = blogs[0];
  const sideBlogs = blogs.length > 1 ? blogs : blogs; // Use all if only one, swiper will handle loop

  return (
    <section 
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496495/cfs_assets/bgC.jpg')",
      }}
      className="relative flex items-center justify-center min-h-screen p-6 md:p-16 overflow-hidden"
    >
      {/* Background Decorative Glow (Adapted for light mode) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row gap-8 items-stretch">
        
        {/* LEFT SIDE: Featured Big Card */}
        {featuredBlog && (
          <Link href={`/blog/${featuredBlog.slug}`} className="w-full md:w-3/5">
            <div className="relative group overflow-hidden rounded-[2rem] shadow-lg border border-gray-200 h-[450px] md:h-[550px] cursor-pointer">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${featuredBlog.image || 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200'})` }}
              ></div>
              
              {/* IMAGE SECTION  */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent flex flex-col justify-end p-10">
                <span className="bg-orange-500 text-white text-[11px] font-bold px-4 py-1.5 rounded-full w-fit tracking-wider uppercase mb-4 shadow-md">
                  Featured Insight
                </span>
              
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] mb-4">
                  {featuredBlog.title}
                </h2>
                <p className="text-gray-200 max-w-lg text-lg leading-relaxed opacity-90 line-clamp-2">
                  {stripHtml(featuredBlog.content).substring(0, 120)}...
                </p>
              </div>
            </div>
          </Link>
        )}

        {/* RIGHT SIDE: Vertical Swiper */}
        <div className="w-full md:w-2/5 flex flex-col">
          <div className="mb-8 pl-2">
            <div className="flex items-center gap-3 mb-2">
               <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-600"></span>
              </span>
              <h3 className="text-gray-200 text-2xl font-bold tracking-tight">Latest Updates</h3>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-orange-600 to-transparent rounded-full"></div>
          </div>
          
          <div className="h-[450px]"> 
            <Swiper
              direction={"vertical"} 
              slidesPerView={Math.min(sideBlogs.length, 3)}      
              spaceBetween={16}      
              loop={sideBlogs.length > 3}            
              speed={1000}           
              autoplay={{
                delay: 3500,         
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className="h-full"
            >
              {sideBlogs.map((blog, index) => (
                <SwiperSlide key={blog._id || index} className="bg-transparent rounded-xl">
                  <Link href={`/blog/${blog.slug}`}>
                    <div className="bg-white p-4 border border-blue-700 shadow-sm flex gap-5 items-center h-full transition-all duration-300 hover:shadow-md hover:border-[#fd741e] rounded-lg  group cursor-pointer">
                      
                      <div className="overflow-hidden rounded-xl w-28 h-24 shrink-0 border border-gray-700">
                        <img
                          src={blog.image || 'https://via.placeholder.com/500'}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="flex flex-col pr-2">
                        <span className="text-[10px] font-extrabold text-orange-500 uppercase tracking-widest mb-1">
                          {blog.category}
                        </span>
                        <h4 className="text-md font-bold text-[#102a43] leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors">
                          {blog.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-3">
                          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="text-[11px] text-gray-500 font-medium">
                            {new Date(blog.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>

                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogSection2;