"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Divider } from "@mui/material";

import { dateFormate } from "@/utils/UseFuncation";
import { HiOutlineBadgeCheck } from "react-icons/hi";

import {
  FaArrowRight,
  FaArrowRightLong,
  FaArrowTrendUp,
  FaBriefcase,
  FaCalendar,
  FaUber,
  FaUser,
} from "react-icons/fa6";

import { IoMdArrowDropright, IoMdCalendar } from "react-icons/io";
import {
  MdLocationOn,
  MdMoney,
  MdOutlinePayments,
  MdWorkOutline,
} from "react-icons/md";
import { Briefcase, Clock, Laptop, TrendingUp, MapPin, Calendar } from "lucide-react";
export const ServiceCard = ({
  servicesName,
  category,
  image,
  description,
  link,
  icon,
}) => {
  return (
    <div className="group bg-white shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden relative flex flex-col h-full rounded-2xl border border-gray-100/50">
      <Link href={link} className="flex flex-col h-full">
        {/* Image Section */}
        <div className="relative h-[240px] overflow-hidden">
          <img
            src={image}
            alt={servicesName}
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
          />
          {/* Overlay logic for smoother look */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>

        {/* Floating Icon Container - Adjusted for [240px] image height */}
        <div className="absolute top-[210px] right-6 bg-white p-3 rounded-lg shadow-xl border border-gray-50 group-hover:-translate-y-3 transition-transform duration-500 z-10">
          <div className="w-10 h-10 flex items-center justify-center">{icon}</div>
        </div>

        {/* Content Section */}
        <div className="p-5 sm:p-6 pt-10 flex flex-col flex-grow text-center md:text-left">
          <h3 className="text-lg sm:text-xl font-bold text-[#102a43] mb-3 group-hover:text-orange-500 transition-colors duration-300 uppercase tracking-tight leading-tight">
            {servicesName}
          </h3>

          <p className="text-gray-500 text-[13px] sm:text-sm leading-relaxed mb-6 line-clamp-3 font-light">
            {description}
          </p>

          <div className="mt-auto pt-4 border-t border-gray-50 flex justify-center md:justify-start">
            <div
              className="inline-flex items-center text-[#102a43] group-hover:text-orange-500 font-bold text-[13px] sm:text-sm transition-colors group/btn"
            >
              EXPLORE MORE
              <span className="ml-2 transform group-hover/btn:translate-x-2 transition-transform duration-300 text-orange-500">
                →
              </span>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Bar */}
        <div className="h-1.5 w-0 group-hover:w-full bg-orange-500 transition-all duration-500"></div>
      </Link>
    </div>
  );
};

export const LatestBlogCard = ({
  title = "Untitled",
  image = "https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496973/cfs_assets/Team.jpg",
  author = "by admin",
  createAt = "2026-02-23T02:24:47.467+00:00",
  slug = "/",
  category = "Web",
}) => {
  // image:
  //     "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
  //   author: {
  //     name: "by Admin",
  //     email: "admin@gmail.com",
  //   },
  //   title: "What is Blockchain Technology How to Use in Future?",
  //   createAt: "2026-02-03T02:51:06.067+00:00",
  //   slug: "what-is-blockchain-technology-future-use",
  //   category: "Technology",
  return (
    <section
      style={{
        boxShadow: "0 0 20px 1px #a9a9a9",
      }}
      className=" h-[400px] group   cursor-pointer bg-white  rounded-lg "
    >
      <div className="w-full h-1/2 overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover overflow-hidden transition-all  ease-in-out duration-500 group-hover:scale-125 rounded-t-lg"
        />
      </div>

      {/* detail */}
      <section className="p-3">
        <section className="flex items-center justify-between w-full pt-3 pb-2">
          <h3 className="text-md font-medium capitalize text-[#102a43e2] flex items-center gap-2">
            <FaUser className="w-5 h-5 p-0.5 border rounded-full" />{" "}
            {author?.name || "By Admin"}
          </h3>
          <p className="text-md font-medium capitalize text-[#102a43e2] flex items-center gap-2">
            <FaCalendar /> {dateFormate(createAt)}
          </p>
        </section>
        <Divider />
        <section className="py-3 flex items-start justify-between w-full h-full flex-col">
          <h2 className="text-xl font-semibold line-clamp-2">{title}</h2>
          <Link
            href={`/blog/${slug}`}
            className="flex items-center gap-2 mt-6 text-[#fc731e]   group-hover:text-blue-600 transition-all ease-in-out duration-500 hover:scale-105 "
          >
            View More{" "}
            <span>
              {" "}
              <FaArrowRight className="group-hover:scale-150 transition-all ease-in-out duration-500 group-hover:ml-3" />{" "}
            </span>
          </Link>
        </section>
      </section>
    </section>
  );
};

export const CareerCard = ({
  title,
  company,
  location,
  stipend,
  duration,
  sector,
  workType,
  level,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="w-full p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
    >
      {/* 1. Header: Badges & Title */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider border border-green-100">
            <FaArrowTrendUp className="animate-pulse" /> Actively Hiring
          </div>
          <div className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider border border-orange-100">
            {sector}
          </div>
        </div>

        <div className="pt-2">
          <h3 className="text-xl font-bold text-[#102a42] group-hover:text-orange-600 transition-colors line-clamp-1">
            {title}
          </h3>
          <p className="text-sm text-gray-500 font-medium">{company}</p>
        </div>
      </div>

      {/* 2. Middle Content: Detailed Info */}
      <div className="flex-grow py-6 space-y-4">
        {/* Location & Work Type */}
        <div className="flex items-center gap-3 text-gray-600">
          <div className="p-2 bg-gray-50 rounded-xl group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
            <MdLocationOn className="text-xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{location}</span>
            <span className="text-[11px] text-gray-400">{workType}</span>
          </div>
        </div>

        {/* Stipend */}
        <div className="flex items-center gap-3 text-gray-600">
          <div className="p-2 bg-gray-50 rounded-xl group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
            <MdOutlinePayments className="text-xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{stipend}</span>
            <span className="text-[11px] text-gray-400">Monthly Stipend</span>
          </div>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-3 text-gray-600">
          <div className="p-2 bg-gray-50 rounded-xl group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
            <IoMdCalendar className="text-xl" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">{duration}</span>
            <span className="text-[11px] text-gray-400">Internship Period</span>
          </div>
        </div>
      </div>

      {/* 3. Footer: Meta & Link */}
      <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-400">
          <MdWorkOutline />
          <span className="text-xs font-bold uppercase">Internship</span>
        </div>

        <Link
          href={`/careers/${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-[#fd741e] transition-all duration-300"
        >
          View Details
          <FaArrowRightLong className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export const JobsCard = ({
  title,
  company,
  location,
  salary,
  experience,
  mode,
  workType,
  level,
  hiringStatus,
  sector,
  index = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
      }}
      whileHover={{ y: -8 }}
      className="w-full p-6 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl border border-gray-100 transition-all duration-300 group flex flex-col justify-between h-full"
    >
      <div>
        {/* TOP: Status, Sector & Work Type */}
        <div className="flex justify-between items-start mb-4 gap-2">
          <div className="flex flex-col gap-2">
            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                hiringStatus === "Actively hiring"
                  ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                  : "bg-gray-50 text-gray-500 border-gray-100"
              }`}
            >
              <FaArrowTrendUp
                className={
                  hiringStatus === "Actively hiring" ? "animate-pulse" : ""
                }
              />
              {hiringStatus}
            </div>
            {/* Sector Badge */}
            <div className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider border border-orange-100 w-fit">
              {sector}
            </div>
          </div>
          <span className="text-gray-400 text-[11px] font-bold uppercase tracking-tighter">
            {workType}
          </span>
        </div>

        {/* TITLE & COMPANY */}
        <div className="mb-5">
          <h2 className="text-xl font-bold text-[#102a42] group-hover:text-[#fd741e] transition-colors line-clamp-1">
            {title}
          </h2>
          <p className="text-sm font-medium text-gray-500">{company}</p>
        </div>

        {/* MIDDLE: Bento Chips */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          <div className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-xl border border-gray-100 group-hover:bg-white group-hover:border-orange-100 transition-all">
            <MdWorkOutline className="text-orange-500 text-lg" />
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-bold uppercase">
                Experience
              </span>
              <span className="text-xs font-bold text-gray-700">
                {experience}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2.5 bg-gray-50 rounded-xl border border-gray-100 group-hover:bg-white group-hover:border-orange-100 transition-all">
            <HiOutlineBadgeCheck className="text-orange-500 text-lg" />
            <div className="flex flex-col">
              <span className="text-[10px] text-gray-400 font-bold uppercase">
                Level
              </span>
              <span className="text-xs font-bold text-gray-700">{level}</span>
            </div>
          </div>
        </div>

        {/* DETAILS LIST */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3 text-gray-600 group-hover:translate-x-1 transition-transform">
            <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-orange-100 group-hover:text-orange-600">
              <MdLocationOn className="text-lg" />
            </div>
            <span className="text-sm font-medium">{location}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-600 group-hover:translate-x-1 transition-transform">
            <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-orange-100 group-hover:text-orange-600">
              <MdOutlinePayments className="text-lg" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#102a42]">{salary}</span>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM: Action Area */}
      <div className="pt-5 border-t border-dashed border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_#fd741e]" />
          <span className="text-[11px] font-extrabold text-[#102a42] uppercase tracking-widest">
            {mode}
          </span>
        </div>

        <Link
          href={`/careers/${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="flex items-center gap-2 text-sm font-bold text-[#102a42] hover:text-[#fd741e] transition-all group/link"
        >
          View Details
          <FaArrowRightLong className="group-hover/link:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

export const JobCard = ({
  job
}) => {
  if (!job) return null;
  const { title, location, type, compensation, duration, category } = job;
  const jobLink = `/careers/${title?.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <article className="group flex w-full flex-col items-start space-y-3 rounded-2xl bg-white p-5 shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md hover:border-orange-200">
      {/* Header / Title */}
      <header className="flex flex-col w-full">
        <Link
          href={jobLink}
          className="w-fit"
        >
          <h2 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-orange-500">
            {title}
          </h2>
        </Link>
        <span className="text-xs text-gray-400 mt-0.5 truncate uppercase">
          {category}
        </span>
      </header>

      {/* Description placeholder since we don't have descriptions in DB yet */}
      <p className="text-sm text-gray-600 line-clamp-2">
        Join our team as a {title} in {location}. We are looking for talented individuals to help us build the future of fintech.
      </p>

      {/* Badges / Tags */}
      <div className="w-full flex flex-wrap items-center gap-3 pt-2">
        <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md text-[13px] text-slate-600 capitalize">
          <Clock size={14} className="text-gray-400" />
          {type}
        </span>
        <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md text-[13px] text-slate-600">
          <MdOutlinePayments size={14} className="text-gray-400" />
          {compensation}
        </span>
        <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md text-[13px] text-slate-600">
          <MapPin size={14} className="text-gray-400" />
          {location}
        </span>
        <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-md text-[13px] text-slate-600">
          <Calendar size={14} className="text-gray-400" />
          {duration}
        </span>
      </div>
    </article>
  );
};
