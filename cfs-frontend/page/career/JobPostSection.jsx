"use client";
import { JobsCard } from "@/components/Cards/Cards";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "@/utils/api"; 

const JobPostSection = () => {
  const [jobs, setJobs] = useState([]);
  const [activeMode, setActiveMode] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await api.get('/jobs');
        if (data.success) {
           // We only want 'job' types here
           const onlyJobs = data.data.filter(job => job.type === 'job');
           setJobs(onlyJobs);
        }
      } catch (err) {
        console.error("Failed to fetch jobs", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const uniqueSector = [...new Set(jobs.map((item) => item.category))];

  const filterData = jobs.filter((item) => {
    if (activeMode === "") return true;
    return item.category === activeMode;
  });

  return (
    <div className="bg-[#fdfbfb] shadow p-8 lg:p-16 w-full mt-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <h2 className="text-3xl lg:text-4xl font-extrabold capitalize text-[#102a43]">
          Explore Jobs
        </h2>

        {/* Filter Buttons Container */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => setActiveMode("")}
            className={`px-6 py-2 cursor-pointer rounded-full font-bold transition-all duration-300 transform active:scale-95 shadow-sm ${
              activeMode === ""
                ? "bg-[#102a43] text-white"
                : "bg-white border-2 border-[#fd741e] text-[#fd741e] hover:bg-orange-50"
            }`}
          >
            Hiring Now
          </button>
          {uniqueSector.map((items, idx) => (
            <button
              key={idx}
              onClick={() => setActiveMode(items)}
              className={`px-6 py-2 cursor-pointer rounded-full font-bold transition-all duration-300 transform active:scale-95 shadow-sm ${
                activeMode === items
                  ? "bg-[#fd741e] text-white"
                  : "bg-white border-2 border-[#fd741e] text-[#fd741e] hover:bg-orange-50"
              }`}
            >
              {items}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Animated Grid Container */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {loading ? (
             <p className="text-gray-500 font-medium col-span-full">Loading live jobs...</p>
          ) : filterData.map((item, idx) => (
            <motion.div
              key={item._id || idx}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow"
            >
              {/* The Card Component mapped dynamically */}
              <div className="flex-grow">
                <JobsCard 
                  title={item.title}
                  company={item.company}
                  location={item.location}
                  salary={item.compensation}
                  experience="Open"
                  level="Entry Level"
                  mode="Full-Time"
                  workType={item.location.toLowerCase().includes('remote') ? 'Remote' : 'On-Site'}
                  hiringStatus="Actively hiring"
                  sector={item.category}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {!loading && filterData.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 text-gray-500"
        >
          No jobs found for this category currently.
        </motion.div>
      )}
    </div>
  );
};

export default JobPostSection;
