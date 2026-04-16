"use client";
import { CareerCard } from "@/components/Cards/Cards";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "@/utils/api";

const InternshipSection = () => {
  const [internships, setInternships] = useState([]);
  const [activeSector, setActiveSector] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const { data } = await api.get('/jobs');
        if (data.success) {
           // We only want 'internship' types here
           const onlyInternships = data.data.filter(job => job.type === 'internship');
           setInternships(onlyInternships);
        }
      } catch (err) {
        console.error("Failed to fetch internships", err);
      } finally {
        setLoading(false);
      }
    };
    fetchInternships();
  }, []);

  const uniqueSector = [...new Set(internships.map((item) => item.category))];

  const filterData = internships.filter((item) => {
    if (activeSector === "") return true;
    return item.category === activeSector;
  });

  return (
    <div className="p-8 lg:p-16 w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <h2 className="text-3xl lg:text-4xl font-extrabold capitalize text-[#102a43]">
          Explore Internships
        </h2>

        {/* Filter Buttons Container */}
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={() => setActiveSector("")}
            className={`px-6 py-2 cursor-pointer rounded-full font-bold transition-all duration-300 transform active:scale-95 shadow-sm ${
              activeSector === ""
                ? "bg-[#102a43] text-white"
                : "bg-white border-2 border-[#fd741e] text-[#fd741e] hover:bg-orange-50"
            }`}
          >
            All
          </button>
          {uniqueSector.map((items, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSector(items)}
              className={`px-6 py-2 cursor-pointer rounded-full font-bold transition-all duration-300 transform active:scale-95 shadow-sm ${
                activeSector === items
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
             <p className="text-gray-500 font-medium col-span-full">Loading live internships...</p>
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
                <CareerCard 
                   title={item.title}
                   company={item.company}
                   location={item.location}
                   stipend={item.compensation}
                   duration={item.duration}
                   sector={item.category}
                   workType={item.location.toLowerCase().includes('remote') ? 'Remote' : 'On-Site'}
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
          No internships found for this category currently.
        </motion.div>
      )}
    </div>
  );
};

export default InternshipSection;
