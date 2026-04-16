"use client";
import { JobCard, } from "@/components/Cards/Cards";
import { Briefcase, Clock, Laptop, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  IoMdArrowDropright,
  IoMdArrowForward,
  IoMdSearch,
} from "react-icons/io";

import api from "@/utils/api";
import { Loader2 } from "lucide-react";

const CareerSearchPage = ({ slug }) => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async (keyword) => {
    setLoading(true);
    try {
      // Decode the keyword just in case it's double encoded
      const cleanKeyword = decodeURIComponent(keyword || "");
      const { data } = await api.get(`/jobs`, {
        params: { keyword: cleanKeyword }
      });
      if (data.success) {
        setJobs(data.data);
      }
    } catch (err) {
      console.error("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (slug) {
      const decodedSlug = decodeURIComponent(slug);
      setSearchTerm(decodedSlug);
      fetchJobs(decodedSlug);
    }
  }, [slug]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/career-search/${searchTerm.trim()}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-full pt-8 min-h-[60vh]">
      <section className="flex items-start flex-col space-y-5 max-w-3xl mx-auto px-4">
        {/* Search Section  */}
        <section className="w-full">
          <section className="flex h-12 w-full max-w-full items-center overflow-hidden rounded-lg border border-gray-300 bg-white px-4 shadow-sm transition-all focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
            <section className="flex items-center">
              <IoMdSearch className="text-gray-400" />
            </section>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              type="text"
              className=" h-full w-full bg-transparent px-3 text-gray-700 outline-none placeholder:text-gray-400"
              placeholder="Search for roles, skills, or categories..."
            />
            <section 
              onClick={handleSearch}
              className="w-16 flex rounded-full p-1 group items-center justify-center h-8 bg-orange-500 duration-300 transition-all ease-in-out cursor-pointer hover:scale-105 shadow text-white"
            >
              <IoMdArrowForward className="w-full h-full group-hover:scale-150 duration-300 transition-all ease-in-out  " />
            </section>
          </section>
        </section>

        {/* Results Section */}
        <section className="w-full pt-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-800">
              {loading ? "Searching..." : `Showing ${jobs.length} results for "${slug}"`}
            </h1>
          </div>

          <section className="flex items-start flex-col space-y-4 w-full">
            {loading ? (
              <div className="w-full py-20 flex flex-col items-center justify-center space-y-4">
                <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
                <p className="text-gray-500 animate-pulse">Finding the best opportunities for you...</p>
              </div>
            ) : jobs.length > 0 ? (
              jobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))
            ) : (
              <div className="w-full py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300 flex flex-col items-center justify-center text-center px-6">
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                  <IoMdSearch className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">No matching jobs found</h3>
                <p className="text-gray-500 max-w-md">
                  We couldn't find any results for "{slug}". Try searching with different keywords like "developer", "support", or "internship".
                </p>
                <button 
                  onClick={() => {setSearchTerm(""); router.push('/career-search/all')}}
                  className="mt-6 text-orange-500 font-bold hover:underline"
                >
                  View all available positions
                </button>
              </div>
            )}
          </section>
        </section>
      </section>
    </div>
  );
};

export default CareerSearchPage;




