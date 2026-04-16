"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion"; // Added for animations
import { servicesData } from "@/utils/Utils";

const ShowOurServices = () => {
  const [isActiveServices, setIsActiveServices] = useState(
    servicesData[0]?.mainServiceName.toLowerCase(),
  );

  const activeCategory = servicesData.find(
    (category) => category.mainServiceName.toLowerCase() === isActiveServices,
  );

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 },
    },
    exit: { opacity: 0, x: 20, transition: { duration: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between mt-8 lg:mt-16 gap-6 lg:gap-10 px-4 lg:px-0">
      {/* Left Column (Content) - Keep order-2 lg:order-1 */}
      <div className="w-full lg:w-2/3 order-2 lg:order-1">
        <section className="w-full lg:w-[90%] mx-auto mt-6">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={isActiveServices} // This triggers the animation on every click
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {/* Responsive Image Container */}
                <div className="relative w-full aspect-video md:h-[300px] h-[250px] rounded-2xl overflow-hidden shadow-lg">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    src={activeCategory.image}
                    alt={activeCategory.title}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h2 className="text-2xl lg:text-4xl font-semibold mt-6 text-[#102a42]">
                  {activeCategory.title}
                </h2>

                <p className="mt-4 text-base lg:text-lg text-gray-600 leading-relaxed">
                  {activeCategory.description}
                </p>

                {/* Service Cards Grid */}
                <section className="mt-8 lg:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
                  {activeCategory?.ServicesName?.map((service, id) => (
                    <motion.div
                      key={id}
                      variants={cardVariants}
                      whileHover={{ y: -5 }}
                      className={`p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-3 group `}
                    >
                      <div
                        className={`w-fit p-3 rounded-lg transition-colors bg-orange-50 text-orange-500 group-hover:bg-orange-500 group-hover:text-white`}
                      >
                        {service.icon}
                      </div>

                      <h3 className={`font-bold text-lg lg:text-xl `}>
                        {service.name}
                      </h3>

                      <p className={`text-sm leading-relaxed `}>
                        {service.description}
                      </p>

                      <Link
                        href={service.link}
                        className={`text-sm font-semibold hover:underline mt-2 inline-flex items-center `}
                      >
                        Learn More →
                      </Link>
                    </motion.div>
                  ))}
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>

      {/* Right Column (Sidebar/Accordion) - Keep order-1 lg:order-2 */}
      <div className="w-full lg:w-1/3 lg:sticky lg:top-24 order-1 lg:order-2">
        <div className="bg-white p-4 flex flex-col gap-y-3 lg:gap-y-4 shadow-xl lg:shadow-lg rounded-2xl border border-gray-50">
          {servicesData.map((category, idx) => {
            const isOpen =
              isActiveServices === category.mainServiceName.toLowerCase();
            const hasSubServices = category?.ServicesName?.length > 0;

            return (
              <div key={idx} className="w-full">
                <button
                  onClick={() =>
                    setIsActiveServices(category.mainServiceName.toLowerCase())
                  }
                  className={`w-full cursor-pointer py-4 text-left text-lg lg:text-xl font-bold px-5 transition-all duration-300 flex items-center justify-between rounded-xl ${
                    isOpen
                      ? "bg-orange-500 text-white shadow-md scale-[1.02]"
                      : "text-[#102a42] hover:bg-orange-50 bg-gray-50"
                  }`}
                >
                  <span className="truncate">{category.mainServiceName}</span>

                  {hasSubServices && (
                    <MdOutlineKeyboardArrowDown
                      className={`text-2xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {/* Mobile Accordion Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 mt-2 flex flex-col gap-3 bg-white rounded-xl border border-gray-100 mx-1">
                        {category.ServicesName.map((service, sIdx) => (
                          <Link
                            key={sIdx}
                            href={service.link}
                            className="text-gray-600 text-sm lg:text-base font-medium hover:text-orange-600 hover:translate-x-2 transition-all"
                          >
                            • {service.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          <button className="mt-2 text-lg justify-center flex items-center gap-x-3 text-white bg-[#102a42] w-full p-4 rounded-xl transition-all hover:bg-orange-600 active:scale-95 shadow-md group">
            <FaFilePdf className="group-hover:scale-110 transition-transform" />
            Company Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowOurServices;
