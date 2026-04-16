"use client";
import React, { useState, useEffect } from "react";
import { CalendarDays, Loader2 } from "lucide-react";
import api from "@/utils/api";
import Link from 'next/link';
import { stripHtml } from "@/utils/UseFuncation";

const BlogSection4 = ({ activeCategory, setActiveCategory }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    setVisibleCount(4);
  }, [activeCategory]);

  const categories = [
    "All Categories",
    "Support Service",
    "Technology Service",
    "Finance Solution",
  ];

  useEffect(() => {
    const fetchExploreBlogs = async () => {
      try {
        const { data } = await api.get('/blogs?section=all');
        if (data.success) {
          setBlogs(data.data);
        }
      } catch (err) {
        console.error("Error fetching all blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchExploreBlogs();
  }, []);

  const filteredBlogs =
    activeCategory === "All Categories"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  if (loading) {
    return (
      <div className="py-12 flex justify-center items-center">
        <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
      </div>
    );
  }

  if (blogs.length === 0) return null;

  return (
    <section className="bg-[#ffffff] py-12 px-6 md:px-16">
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900">
          All Blogs
        </h2>
        <p className="text-gray-700 mt-2 max-w-2xl">
          Read informative articles, trend analysis, and expert perspectives
          all in one place.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-800 hover:bg-orange-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {filteredBlogs.slice(0, visibleCount).map((blog) => (
            <div
              key={blog._id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={blog.image || "https://via.placeholder.com/800"}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center text-gray-500 text-xs gap-4">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </div>
                  <span>{blog.readTime || '5 Min'}</span>
                </div>

                <h3 className="mt-3 font-semibold text-lg text-gray-900 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {stripHtml(blog.content)}
                </p>

                <Link href={`/blog/${blog.slug}`}>
                  <button className="mt-4 bg-[#243b55] text-white px-4 py-2 rounded-md text-sm hover:bg-[#1a2a3c] transition">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredBlogs.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setVisibleCount(visibleCount + 3)}
              className="bg-[#243b55] text-white px-6 py-2 rounded-md hover:bg-[#1a2a3c] transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection4;