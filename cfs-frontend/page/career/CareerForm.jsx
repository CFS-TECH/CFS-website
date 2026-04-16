"use client";
import React, { useEffect, useState } from "react";
import api from "@/utils/api";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiUploadCloud,
  FiSend,
} from "react-icons/fi";
import { internships, jobPostData } from "@/utils/Utils";

const CareerForm = ({ initialType = "", initialProfile = "" }) => {
  const [file, setFile] = useState(null);
  const [chooseData, setChooseData] = useState(initialType); // This tracks 'job' or 'internship'
  const [finalData, setFinalData] = useState([]); // This stores the list of titles
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState(initialProfile);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Sync with props if they change
    if (initialType) setChooseData(initialType);
    if (initialProfile) setProfile(initialProfile);
  }, [initialType, initialProfile]);

  useEffect(() => {
    if (!chooseData) {
      setFinalData([]);
      return;
    }
    
    if (chooseData.toLowerCase() === "job") {
      const uniqueProfile = [...new Set(jobPostData.map((item) => item.title))];
      setFinalData(uniqueProfile);
    } else if (chooseData.toLowerCase() === "internship") {
      const uniqueProfile = [...new Set(internships.map((item) => item.title))];
      setFinalData(uniqueProfile);
    }
  }, [chooseData]);

  const handleFileChange = (e) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!profile) return alert("Please select a profile");
    
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('applyingFor', chooseData);
    formData.append('category', profile);
    if (file) formData.append('resume', file);
    formData.append('message', message);

    try {
      const response = await api.post('/careers', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      if (response.data.success) {
        alert("Application submitted successfully!");
        setFullName(""); setEmail(""); setPhone(""); setChooseData(""); setProfile(""); setMessage(""); setFile(null);
      }
    } catch (error) {
      alert("Failed to submit application.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#102a43] flex items-center justify-center p-6 lg:p-16" suppressHydrationWarning>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white space-y-6"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Ready to <span className="text-orange-500">Accelerate</span> Your
            Career?
          </h2>
          <p className="text-gray-400 text-lg">
            Join a team of innovators and creators. Whether you're a seasoned
            pro or a fresh graduate, we provide the environment for you to
            thrive.
          </p>

          <div className="space-y-4 pt-4">
            {[
              "Innovative Work Environment",
              "Competitive Growth",
              "Flexible Culture",
              "Expert Mentorship",
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                </div>
                <span className="text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: The Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl"
        >
          <form className="space-y-5" onSubmit={handleSubmit} suppressHydrationWarning>
            <h3 className="text-2xl font-bold text-[#102a43] mb-6">
              Apply Now
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="form-input-style"
                />
              </div>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="form-input-style"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="form-input-style"
                />
              </div>

              {/* FIX 3: Use onChange on the SELECT, not onClick on the OPTION */}
              <div className="relative">
                <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <select
                  value={chooseData}
                  onChange={(e) => setChooseData(e.target.value)}
                  className="form-input-style appearance-none text-gray-500"
                >
                  <option value="">Applying For...</option>
                  <option value="job">Job Opening</option>
                  <option value="internship">Internship</option>
                </select>
              </div>
            </div>

            {/* Sub-Position Selection (Visible only when type is selected) */}
            <div className="relative">
              <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                disabled={!chooseData}
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
                required
                className="form-input-style appearance-none text-gray-500 disabled:opacity-50"
              >
                <option value="">
                  {chooseData
                    ? `Select ${chooseData} Profile`
                    : "Choose category first"}
                </option>
                {finalData.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="relative">
              <label
                htmlFor="resume-upload"
                className="w-full border-2 border-dashed border-gray-200 hover:border-orange-400 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-colors bg-gray-50/50"
              >
                <FiUploadCloud className="text-4xl text-orange-500 mb-2" />
                <p className="text-sm font-bold text-[#102a43]">
                  {file ? file.name : "Upload Resume / CV"}
                </p>
                <input
                  id="resume-upload"
                  type="file"
                  hidden
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
              </label>
            </div>

            <textarea
              rows={4}
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-input-style w-full"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#fd741e] hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              Submit Application <FiSend />
            </button>
          </form>
        </motion.div>
      </div>

      {/* Internal CSS for cleaner code */}
      <style jsx>{`
        .form-input-style {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 3rem;
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          outline: none;
          transition: all 0.2s;
        }
        .form-input-style:focus {
          ring: 2px;
          ring-color: #fd741e;
          border-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default CareerForm;
