"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  IndianRupee, 
  Calendar, 
  ChevronLeft, 
  CheckCircle2, 
  Share2,
  Loader2
} from "lucide-react";
import api from "@/utils/api";
import CareerForm from "@/page/career/CareerForm";

const CareerDetails = ({ slug }) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const formRef = React.useRef(null);

  useEffect(() => {
    const fetchJob = async () => {
      if (!slug) return;
      console.log("[DEBUG] Fetching job for slug:", slug);
      try {
        const endpoint = `jobs/slug/${slug}`;
        console.log("[DEBUG] Calling Endpoint:", endpoint);
        const { data } = await api.get(endpoint);
        if (data.success) {
          setJob(data.data);
        }
      } catch (err) {
        console.error("Error fetching job details:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [slug]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <Loader2 className="w-12 h-12 text-orange-500 animate-spin" />
        <p className="text-gray-500 font-medium animate-pulse">Loading job details...</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Job Not Found</h2>
        <p className="text-gray-500 mb-6">The job you are looking for might have been closed or removed.</p>
        <Link href="/careers" className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold">
          Back to Listings
        </Link>
      </div>
    );
  }

  const { title, company, location, compensation, duration, type, category, createdAt, description, responsibilities, requirements, skills, benefits } = job;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Back Navigation */}
        <Link 
          href="/careers" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-orange-500 transition-colors"
          suppressHydrationWarning
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to all jobs
        </Link>

        <div className="lg:grid lg:grid-cols-3 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Main Job Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Header Card */}
            <article className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100" suppressHydrationWarning>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                  NEW
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                  {category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                {title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                  <Briefcase className="w-4 h-4 text-orange-500" />
                  {company || 'Crossover Fintech Support'}
                </span>
                <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  {location}
                </span>
                <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100 capitalize">
                  <Clock className="w-4 h-4 text-orange-500" />
                  {type}
                </span>
                <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                  <IndianRupee className="w-4 h-4 text-orange-500" />
                  {compensation}
                </span>
              </div>
            </article>

            {/* Description Details Card */}
            <article className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-8" suppressHydrationWarning>
              
              {/* About Role */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">About the Role</h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {description ? description : (
                    <>
                      We are looking for a dedicated {title} to join our core team at {company || 'Crossover Fintech Support'}. 
                      In this role, you will be based in {location} and contribute to our fast-growing fintech ecosystem.
                      This is a {type} position with a {duration} duration, offering {compensation}.
                    </>
                  )}
                </div>
              </section>

              {/* Responsibilities */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {responsibilities && responsibilities.length > 0 ? (
                    responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))
                  ) : (
                    [
                      `Design and implement solutions related to ${category}.`,
                      "Work closely with multi-functional teams to deliver high-quality results.",
                      "Optimize existing workflows and implement best practices.",
                      "Ensure the reliability and scalability of our fintech services.",
                      "Participate in regular team meetings and technical discussions."
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))
                  )}
                </ul>
              </section>

              {/* Requirements */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">What We Are Looking For</h2>
                <ul className="space-y-3">
                  {requirements && requirements.length > 0 ? (
                    requirements.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600 px-4 py-2 bg-gray-50 rounded-xl border border-gray-100/50">
                        <div className="w-2 h-2 rounded-full bg-orange-400 shrink-0 mt-2"></div>
                        <span className="leading-relaxed text-sm font-medium">{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400 italic text-sm">No specific requirements listed for this role.</li>
                  )}
                </ul>
              </section>

              {/* Required Skills */}
              {(skills && skills.length > 0) && (
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Required Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-orange-50 text-orange-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-orange-100 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              {/* Company Benefits */}
              {(benefits && benefits.length > 0) && (
                <section className="bg-orange-50/50 rounded-2xl p-6 border border-orange-100/50">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Company Benefits</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3 text-gray-700 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></div>
                        <span className="font-medium underline decoration-orange-200 underline-offset-4 decoration-2">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

            </article>
          </div>

          {/* RIGHT COLUMN: Sticky Sidebar */}
          <aside className="lg:col-span-1 lg:sticky lg:top-8 space-y-6 mt-8 lg:mt-0">
            
            {/* Apply Action Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <button 
                onClick={scrollToForm}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-orange-500/20 mb-4"
              >
                Apply for this Position
              </button>
              
              <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                <span className="flex items-center gap-1.5 capitalize" suppressHydrationWarning>
                  <Calendar className="w-4 h-4" />
                  Posted {new Date(createdAt).toLocaleDateString()}
                </span>
                <button className="flex items-center gap-1.5 hover:text-orange-500 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>

            {/* Company Info Card */}
            <div className="bg-orange-50 rounded-3xl p-6 border border-orange-100">
              <h3 className="font-bold text-gray-900 mb-2">About {company || 'Crossover Fintech Support'}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                We are on a mission to revolutionize digital payments and AI-driven banking solutions for the next generation of businesses.
              </p>
              <Link href="/about-us" className="text-sm font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2">
                Learn more about us
              </Link>
            </div>

          </aside>

        </div>
        
        {/* Application Form Section */}
        <div ref={formRef} className="pt-12 scroll-mt-8">
            <CareerForm 
              initialType={type?.toLowerCase().includes('intern') ? 'internship' : 'job'} 
              initialProfile={title} 
            />
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;