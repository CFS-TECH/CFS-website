"use client";
import React, { useState, useEffect } from "react";
import { LatestBlogCard } from "../Cards/Cards";
import { Sparkles, Loader2 } from "lucide-react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import api from "@/utils/api";

const LatestPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/blogs");
        if (data.success) {
          // Take the first 4 blogs (already sorted by latest in backend)
          setBlogs(data.data.slice(0, 4));
        }
      } catch (err) {
        console.error("Error fetching latest blogs:", err);
        setError("Failed to load latest updates.");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestBlogs();
  }, []);

  return (
    <section className="px-4 md:px-10 bg-white py-12 md:py-16 max-w-[1440px] mx-auto" suppressHydrationWarning>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-100 rounded-lg">
            <Sparkles className="text-orange-500 w-6 h-6 md:w-8 md:h-8" />
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-[#102A43]">
            Latest Blog Insights
          </h2>
        </div>

        <Link
          href="/blog"
          className="w-full sm:w-fit flex items-center justify-center gap-3 bg-orange-50 rounded-full px-6 py-3 group hover:bg-orange-500 ease-in-out hover:text-white duration-500 transition-all shadow-sm hover:shadow-lg border border-orange-100"
        >
          <span className="font-bold text-sm md:text-base">View All</span>
          <GoArrowUpRight className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 duration-500 transition-all ease-in-out" />
        </Link>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-4">
          <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
          <p className="text-gray-500 font-medium italic">Fetching latest trends...</p>
        </div>
      ) : error ? (
        <div className="text-center py-20">
          <p className="text-red-500 font-medium">{error}</p>
        </div>
      ) : blogs.length > 0 ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog) => (
            <LatestBlogCard 
              key={blog._id}
              title={blog.title}
              image={blog.image}
              author={{ name: blog.author || "Admin" }}
              createAt={blog.createdAt}
              slug={blog.slug}
              category={blog.category}
            />
          ))}
        </section>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 italic">No recent blog insights found.</p>
        </div>
      )}
    </section>
  );
};

export default LatestPost;