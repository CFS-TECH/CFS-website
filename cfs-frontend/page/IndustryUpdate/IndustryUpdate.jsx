"use client";
import React, { useState, useEffect } from "react";
import { ArrowUpRight, Search, BookOpen, Clock, Hash, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import api from "@/utils/api";

const IndustryUpdatesLight = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subscribing, setSubscribing] = useState(false);
  const [email, setEmail] = useState("");
  const [subMsg, setSubMsg] = useState({ type: "", text: "" });

  const categories = ["All", "Fintech", "Digital Marketing", "Tech & Software", "Business Support", "Other"];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    setSubMsg({ type: "", text: "" });
    try {
      const { data } = await api.post('/newsletter', { email });
      if (data.success) {
        setSubMsg({ type: "success", text: "Successfully joined the newsletter!" });
        setEmail("");
      }
    } catch (err) {
      setSubMsg({ type: "error", text: err.response?.data?.message || "Failed to subscribe" });
    } finally {
      setSubscribing(false);
      setTimeout(() => setSubMsg({ type: "", text: "" }), 5000);
    }
  };

  const fetchUpdates = async () => {
    try {
      const { data } = await api.get('/industry-updates');
      if (data.success) {
        setUpdates(data.data);
      }
    } catch (err) {
      console.error("Failed to fetch industry updates", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpdates();
  }, []);

  const filteredUpdates = updates.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost =
    filteredUpdates.find((item) => item.featured) || filteredUpdates[0];
  const regularPosts = filteredUpdates.filter(
    (item) => item._id !== featuredPost?._id,
  );

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900 pb-24 selection:bg-orange-200 selection:text-orange-900">
      {/* ================= LIGHT HERO TYPOGRAPHY ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 text-orange-500 font-bold tracking-wide text-sm uppercase mb-4">
            <Hash size={16} />
            <span>Knowledge Base</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-6 text-slate-900">
            Insights that drive <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
              business growth.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed">
            Discover the latest trends in development, marketing, and finance.
            Curated updates for modern digital agencies.
          </p>
        </motion.div>
      </div>

      {/* ================= FLOATING CONTROL BAR ================= */}
      <div className="sticky  z-0 max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 p-2 bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl md:rounded-full shadow-lg shadow-slate-200/40"
        >
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1 w-full md:w-auto p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-slate-900"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="light-active-pill"
                    className="absolute inset-0 bg-orange-100 rounded-full"
                    transition={{ type: "spring", stiffness: 400, stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80 flex-shrink-0">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="text-slate-400" size={18} />
            </div>
            <input
              type="text"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 rounded-full py-2.5 pl-11 pr-4 outline-none focus:bg-white focus:border-orange-400 focus:ring-4 focus:ring-orange-500/10 transition-all text-sm font-medium"
            />
          </div>
        </motion.div>
      </div>

      {/* ================= BENTO GRID LAYOUT ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <AnimatePresence mode="wait">
          {loading ? (
             <p className="text-gray-500 font-medium">Loading live insights...</p>
          ) : filteredUpdates.length > 0 ? (
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* LARGE FEATURED CARD (Spans 8 columns on Desktop) */}
              {featuredPost && (
                <Link href={`/industry-update/${featuredPost._id}`} className="lg:col-span-8 group relative bg-white rounded-[2rem] p-4 md:p-6 border border-slate-200 hover:border-orange-200 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500 flex flex-col cursor-pointer overflow-hidden block">
                  <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative mb-6">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                      {featuredPost.category}
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow px-2">
                    <div className="flex items-center gap-4 text-sm text-slate-500 font-semibold mb-3">
                      <span>{new Date(featuredPost.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                      <span className="flex items-center gap-1.5 text-orange-500">
                        <Clock size={16} /> {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight group-hover:text-orange-600 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6 line-clamp-3">
                      {featuredPost.description
                        .replace(/<[^>]+>/g, ' ')
                        .replace(/&nbsp;/g, ' ')
                        .replace(/&[^;]+;/g, ' ')
                        .substring(0, 200)}...
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-slate-900 font-bold group-hover:text-orange-600 transition-colors">
                      Read Full Article
                      <ArrowUpRight
                        size={20}
                        className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              )}

              {/* SIDEBAR CARDS (Spans 4 columns on Desktop) */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                {regularPosts.slice(0, 2).map((post) => (
                  <Link
                    href={`/industry-update/${post._id}`}
                    key={post._id}
                    className="group bg-white rounded-[2rem] p-5 border border-slate-200 hover:border-orange-200 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500 flex flex-col h-full cursor-pointer block"
                  >
                    <div className="w-full h-48 rounded-xl overflow-hidden relative mb-5">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                    <div className="flex flex-col flex-grow">
                      <span className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-2">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-orange-600 transition-colors">
                        {post.title}
                      </h3>
                      <div className="mt-auto flex items-center justify-between text-sm text-slate-500 font-medium pt-4 border-t border-slate-100">
                        <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
                          <ArrowUpRight
                            size={16}
                            className="text-slate-400 group-hover:text-orange-600"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* LIST VIEW FOR REMAINING POSTS */}
              {regularPosts.length > 2 && (
                <div className="col-span-1 lg:col-span-12 mt-8">
                  <div className="flex items-center gap-2 mb-6 px-2">
                    <BookOpen size={20} className="text-slate-400" />
                    <h3 className="text-xl font-bold text-slate-900">
                      More Updates
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {regularPosts.slice(2).map((post) => (
                      <Link
                        href={`/industry-update/${post._id}`}
                        key={post._id}
                        className="group flex items-center gap-5 p-4 bg-white rounded-2xl border border-slate-200 hover:border-orange-200 transition-colors cursor-pointer shadow-sm hover:shadow-md block"
                      >
                        <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-orange-500 text-[10px] font-bold uppercase tracking-wider mb-1">
                            {post.category}
                          </span>
                          <h4 className="text-base font-bold text-slate-900 leading-tight group-hover:text-orange-600 transition-colors line-clamp-2 mb-1">
                            {post.title}
                          </h4>
                          <span className="text-xs text-slate-500 font-medium">
                            {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} • {post.readTime}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ) : (
            /* EMPTY STATE */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full py-32 flex flex-col items-center justify-center text-center bg-white rounded-[2rem] border border-slate-200 border-dashed"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-4">
                <Search size={28} className="text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                No articles found
              </h3>
              <p className="text-slate-500 font-medium">
                Try adjusting your search or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-6 px-6 py-2 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ================= EXTRA NEWSLETTER SUBSCRIPTION SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-24">
        <div className="relative w-full rounded-[2.5rem] bg-[#102A43] overflow-hidden flex flex-col md:flex-row items-center justify-between p-10 md:p-16 shadow-2xl border border-slate-800">
          
          {/* Background Decorative Rings */}
          <div className="absolute -top-32 -right-32 w-96 h-96 border-[40px] border-white/5 rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 md:w-1/2 mb-10 md:mb-0">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-orange-400 rounded-full text-xs font-black tracking-widest uppercase mb-6 shadow-xl border border-white/10 backdrop-blur-md">
              <Send size={14} />
              <span>Stay Ahead</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tighter">
              Get the <span className="text-orange-500">Market Pulse</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-md">
              Join 10,000+ professionals. We deliver the most critical B2B software & financial trends straight to your inbox every Friday.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-5/12">
            <form onSubmit={handleSubscribe} className="bg-white/10 p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row backdrop-blur-md border border-white/20 shadow-2xl">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email..." 
                className="w-full bg-transparent text-white placeholder-slate-300 py-4 px-6 outline-none font-medium mb-2 md:mb-0"
              />
              <button 
                type="submit" 
                disabled={subscribing}
                className="bg-orange-500 text-white font-bold px-8 py-4 rounded-xl md:rounded-full hover:bg-orange-600 disabled:bg-orange-800 transition-colors shadow-lg shadow-orange-500/30 whitespace-nowrap"
              >
                {subscribing ? "Joining..." : "Join the List"}
              </button>
            </form>
            {subMsg.text && (
              <p className={`text-xs mt-3 text-center md:text-left font-bold ${subMsg.type === "success" ? "text-emerald-400" : "text-rose-400"}`}>
                {subMsg.text}
              </p>
            )}
            <p className="text-slate-500 text-xs mt-4 text-center md:text-left font-medium">
              No spam. Unsubscribe at any time. Read our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryUpdatesLight;
