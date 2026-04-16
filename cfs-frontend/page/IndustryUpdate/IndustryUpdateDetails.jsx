"use client";
import React, { useState, useEffect } from "react";
import { ArrowLeft, Clock, Hash, CalendarDays, Share2, Loader2 } from "lucide-react";
import Link from "next/link";
import api from "@/utils/api";

const IndustryUpdateDetails = ({ id }) => {
  const [update, setUpdate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const fetchUpdate = async () => {
    try {
      // Find the specific update by fetching all and filtering, or directly if backend supports /:id GET
      const { data } = await api.get('/industry-updates');
      if (data.success) {
        const found = data.data.find(item => item._id === id);
        if (found) {
          setUpdate(found);
        } else {
          setError("Update not found");
        }
      }
    } catch (err) {
      console.error("Failed to load industry update", err);
      setError("Failed to load content.");
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: update.title,
      text: update.category + " Update",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  useEffect(() => {
    if (id) fetchUpdate();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
        <p className="text-gray-500 font-medium animate-pulse">Loading market insights...</p>
      </div>
    );
  }

  if (error || !update) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{error || "Article Not Found"}</h2>
        <p className="text-gray-500 mb-6">The update you are looking for might have been removed.</p>
        <Link href="/industry-update" className="bg-orange-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all">
          Back to Live Updates
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#fafafa] min-h-screen pb-20 font-sans">
      <section className="max-w-4xl mx-auto py-12 px-4">
        <Link href="/industry-update" className="inline-flex items-center gap-2 text-slate-500 hover:text-orange-500 font-semibold mb-8 transition-colors">
          <ArrowLeft size={18} /> Back to Hub
        </Link>

        <div className="w-full bg-white p-6 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
          
          <div className="flex justify-center mb-6">
            <span className="bg-orange-100 text-orange-600 px-6 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
              {update.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-center text-slate-900 mb-6 leading-tight tracking-tight">
            {update.title}
          </h1>

          <div className="flex items-center justify-center gap-6 text-slate-500 text-sm font-semibold border-t border-b border-gray-100 py-6 mb-10">
            <div className="flex items-center gap-1.5 hover:text-orange-600 transition-colors cursor-pointer">
              <CalendarDays size={18} className="text-orange-500" /> 
              {new Date(update.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center gap-1.5 hover:text-orange-600 transition-colors cursor-pointer">
              <Clock size={18} className="text-orange-500" /> 
              {update.readTime} read
            </div>
          </div>

          <div className="w-full mb-10 overflow-hidden rounded-3xl group shadow-2xl border border-gray-100">
            <img
              src={update.image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200"} 
              alt={update.title}
              className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>

          <article className="prose prose-lg max-w-none w-full break-words overflow-hidden text-slate-700 leading-relaxed font-medium 
            prose-h1:text-4xl prose-h1:font-black prose-h1:text-slate-900 prose-h1:mb-6
            prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-800 prose-h2:mt-10 prose-h2:mb-4
            prose-p:mb-5 prose-p:text-slate-600 prose-p:w-full prose-p:break-words
            prose-ul:list-disc prose-ul:ml-6
            prose-ol:list-decimal prose-ol:ml-6
            prose-img:rounded-3xl prose-img:max-w-full prose-img:h-auto
            prose-strong:text-slate-900 prose-strong:font-bold">
             <div className="max-w-full overflow-hidden" style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }} dangerouslySetInnerHTML={{ __html: update.description }} />
          </article>

          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
            <button 
              onClick={handleShare}
              className={`flex items-center gap-2 font-bold transition-all hover:scale-105 transform active:scale-95 px-6 py-2.5 rounded-xl border transition-colors ${copied ? "bg-emerald-50 text-emerald-600 border-emerald-100" : "text-slate-500 hover:text-orange-600 bg-slate-50 border-gray-100"}`}
            >
              <Share2 size={20} className={copied ? "text-emerald-500" : "text-orange-500"} /> 
              {copied ? "Link Copied!" : "Share Update"}
            </button>
            <div className="flex flex-wrap gap-2 justify-center">
              {[update.category, "Industry News"].map(tag => (
                <span key={tag} className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-orange-600 hover:text-white transition-all cursor-pointer border border-slate-200">#{tag.replace(/\s+/g, '')}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryUpdateDetails;
