"use client"
import { Plus, Edit2, Trash2, Search, MapPin, IndianRupee, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import api from "@/utils/api";

export default function AdminCareers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [editingJobId, setEditingJobId] = useState(null);

  const [formData, setFormData] = useState({ 
    title: "", 
    company: "Crossover Fintech Support",
    location: "", 
    compensation: "", 
    duration: "", 
    type: "internship",
    category: "IT Services",
    description: "",
    responsibilities: "",
    requirements: "",
    skills: "",
    benefits: ""
  });

  const fetchJobs = async () => {
    try {
      const { data } = await api.get('/jobs');
      if (data.success) {
        setJobs(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleCreateJob = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");

    if (!formData.title || !formData.location || !formData.compensation || !formData.duration) {
       setError("Please fill all required fields.");
       setSubmitting(false);
       return;
    }

    const processedData = {
      ...formData,
      responsibilities: formData.responsibilities.split('\n').filter(line => line.trim() !== ""),
      requirements: formData.requirements.split('\n').filter(line => line.trim() !== ""),
      skills: formData.skills.split('\n').filter(line => line.trim() !== ""),
      benefits: formData.benefits.split('\n').filter(line => line.trim() !== "")
    };

    try {
      if (editingJobId) {
        // Update existing job
        const { data } = await api.put(`/jobs/${editingJobId}`, processedData);
        if (data.success) {
           setSuccess("Listing updated successfully!");
           setEditingJobId(null);
           setFormData({ 
              title: "", 
              company: "TechNova", 
              location: "", 
              compensation: "", 
              duration: "", 
              type: "internship", 
              category: "IT Services",
              description: "",
              responsibilities: "",
              requirements: "",
              skills: "",
              benefits: ""
           });
           fetchJobs();
        }
      } else {
        // Create new job
        const { data } = await api.post('/jobs', processedData);
        if (data.success) {
           setSuccess("Listing created successfully!");
           setFormData({ 
              title: "", 
              company: "TechNova", 
              location: "", 
              compensation: "", 
              duration: "", 
              type: "internship", 
              category: "IT Services",
              description: "",
              responsibilities: "",
              requirements: "",
              skills: "",
              benefits: ""
           });
           fetchJobs();
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save listing");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (job) => {
    setEditingJobId(job._id);
    setFormData({
      title: job.title,
      company: job.company || "Crossover Fintech Support",
      location: job.location,
      compensation: job.compensation,
      duration: job.duration,
      type: job.type,
      category: job.category,
      description: job.description || "",
      responsibilities: Array.isArray(job.responsibilities) ? job.responsibilities.join('\n') : (job.responsibilities || ""),
      requirements: Array.isArray(job.requirements) ? job.requirements.join('\n') : (job.requirements || ""),
      skills: Array.isArray(job.skills) ? job.skills.join('\n') : (job.skills || ""),
      benefits: Array.isArray(job.benefits) ? job.benefits.join('\n') : (job.benefits || "")
    });
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingJobId(null);
    setFormData({
      title: "",
      company: "Crossover Fintech Support",
      location: "",
      compensation: "",
      duration: "",
      type: "internship",
      category: "IT Services",
      description: "",
      responsibilities: "",
      requirements: "",
      skills: "",
      benefits: ""
    });
  };

  const handleDelete = async (id) => {
     if (!window.confirm("Are you sure you want to delete this listing?")) return;
     try {
       await api.delete(`/jobs/${id}`);
       fetchJobs();
       setSuccess("Listing deleted successfully!");
     } catch (err) {
       console.error("Failed to delete", err);
       const errorMessage = err.response?.data?.message || err.message || "Unknown error occurred";
       alert(`Error deleting listing: ${errorMessage}`);
       setError(`Delete failed: ${errorMessage}`);
     }
   };

  const handleFillDemoData = async () => {
    if (!window.confirm("This will replace all existing jobs with a clean demo set. Continue?")) return;
    setLoading(true);
    try {
      const { data } = await api.get('/jobs/internal-seed');
      if (data.success) {
        setSuccess(data.message);
        fetchJobs();
      }
    } catch (err) {
      setError("Failed to seed data. Make sure backend is restarted.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-10 flex flex-col w-full text-gray-200" suppressHydrationWarning>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
         <div className="space-y-1">
           <h1 className="text-3xl font-extrabold text-white tracking-tight">Manage Careers</h1>
           <p className="text-gray-400 font-medium text-sm">Post new Jobs or Internships to your website.</p>
         </div>
         <button 
           onClick={handleFillDemoData}
           className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition-all border border-indigo-500 shadow-lg shadow-indigo-500/20 active:scale-95"
         >
           Fill Demo Data
         </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Add New Form */}
        <div className="xl:col-span-1 bg-[#0B1221] rounded-2xl border border-[#1F2937] shadow-lg sticky top-28 h-fit">
          <div className="p-6 border-b border-[#1F2937] flex items-center gap-3">
             <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20">
               {editingJobId ? <Edit2 size={18} className="text-amber-400" /> : <Plus size={18} className="text-amber-400" />}
             </div>
             <h2 className="text-lg font-bold text-white">{editingJobId ? "Edit Listing" : "Add New Listing"}</h2>
          </div>
          
          <form onSubmit={handleCreateJob} className="p-6 space-y-5 max-h-[70vh] overflow-y-auto custom-scrollbar">
            {error && <div className="text-xs text-red-400 bg-red-500/10 p-2 rounded">{error}</div>}
            {success && <div className="text-xs text-emerald-400 bg-emerald-500/10 p-2 rounded">{success}</div>}

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Listing Type</label>
              <select 
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors text-white"
              >
                 <option value="internship">Internship</option>
                 <option value="job">Full-time Job</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Job/Internship Title</label>
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="E.g. Frontend Developer" 
                className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors text-white placeholder:text-gray-600" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Location</label>
                <input 
                  type="text" 
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Remote / On-site" 
                  className="w-full px-4 py-2 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors text-white placeholder:text-gray-600" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Category</label>
                <input 
                  type="text" 
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  placeholder="IT Services" 
                  className="w-full px-4 py-2 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors text-white placeholder:text-gray-600" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Compensation (Stipend/Salary)</label>
              <input 
                type="text" 
                value={formData.compensation}
                onChange={(e) => setFormData({ ...formData, compensation: e.target.value })}
                placeholder="₹20,000 - 30,000 /month" 
                className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors text-white placeholder:text-gray-600" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Duration</label>
              <input 
                type="text" 
                value={formData.duration}
                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                placeholder="6 Months" 
                className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors text-white placeholder:text-gray-600" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">About the Role</label>
              <textarea 
                rows="3"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Briefly describe the role and impact..." 
                className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors text-white placeholder:text-gray-600 resize-none" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Key Responsibilities (One per line)</label>
              <textarea 
                rows="3"
                value={formData.responsibilities}
                onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                placeholder="Design UI...&#10;Manage state..." 
                className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors text-white placeholder:text-gray-600 resize-none" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Requirements (One per line)</label>
              <textarea 
                rows="3"
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                placeholder="React knowledge...&#10;3+ years exp..." 
                className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors text-white placeholder:text-gray-600 resize-none" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Required Skills (One per line)</label>
              <textarea 
                rows="3"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                placeholder="Node.js...&#10;AWS...&#10;TailwindCSS..." 
                className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors text-white placeholder:text-gray-600 resize-none" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Company Benefits (One per line)</label>
              <textarea 
                rows="3"
                value={formData.benefits}
                onChange={(e) => setFormData({ ...formData, benefits: e.target.value })}
                placeholder="Flexible hours...&#10;Premium health insurance...&#10;Snacks & Coffee..." 
                className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-amber-500 transition-colors text-white placeholder:text-gray-600 resize-none" 
              />
            </div>

            <div className="pt-2 flex gap-3">
              <button 
                type="submit" 
                disabled={submitting}
                className="flex-grow bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-amber-600/20 transition-all border border-amber-500 disabled:opacity-50"
              >
                {submitting ? "Saving..." : editingJobId ? "Update Listing" : "Post Listing"}
              </button>
              {editingJobId && (
                <button 
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-700"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Manage Listings Table */}
        <div className="xl:col-span-2 bg-[#0B1221] rounded-2xl border border-[#1F2937] shadow-lg flex flex-col">
          <div className="p-6 border-b border-[#1F2937] flex flex-col md:flex-row md:items-center justify-between gap-4">
             <h2 className="text-lg font-bold text-white">Active Listings</h2>
             <div className="flex items-center bg-[#131E32] rounded-lg px-3 py-1.5 border border-[#1F2937] focus-within:border-amber-500">
               <Search size={16} className="text-gray-500" />
               <input type="text" placeholder="Search title..." className="bg-transparent border-none outline-none px-2 w-full text-sm text-gray-200" />
             </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-[#131E32]/50 border-b border-[#1F2937] text-gray-400 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Job Title & Type</th>
                  <th className="py-4 px-6 font-semibold">Compensation</th>
                  <th className="py-4 px-6 font-semibold">Details</th>
                  <th className="py-4 px-6 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F2937]">
                
                {loading ? (
                  <tr>
                    <td colSpan="4" className="py-8 text-center text-gray-400">Loading listings...</td>
                  </tr>
                ) : jobs.length > 0 ? (
                  jobs.map((job) => (
                    <tr key={job._id} className="hover:bg-[#131E32]/30 transition-colors group">
                      <td className="py-4 px-6">
                         <div className="flex items-center gap-2 mb-1">
                           <span className={`inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold ${job.type === 'internship' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                             {job.type}
                           </span>
                           <span className="text-[10px] uppercase font-bold text-gray-500">
                             {job.category}
                           </span>
                         </div>
                         <p className="font-semibold text-gray-200 text-sm">{job.title}</p>
                      </td>
                      <td className="py-4 px-6">
                         <div className="flex items-center gap-1 text-gray-300 text-sm">
                           <IndianRupee size={14} className="text-emerald-500" />
                           {job.compensation}
                         </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-1 text-gray-400 text-xs mb-1">
                          <MapPin size={12} className="text-gray-500" /> {job.location}
                        </div>
                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                          <Clock size={12} className="text-gray-500" /> {job.duration}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                         <button onClick={() => handleEdit(job)} className="p-2 bg-[#131E32] hover:bg-amber-500/20 text-gray-400 hover:text-amber-400 rounded-lg border border-[#1F2937] hover:border-amber-500/50 transition-all cursor-pointer">
                           <Edit2 size={16} />
                         </button>
                         <button onClick={() => handleDelete(job._id)} className="p-2 bg-[#131E32] hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-lg border border-[#1F2937] hover:border-red-500/50 transition-all cursor-pointer">
                           <Trash2 size={16} />
                         </button>
                      </td>
                    </tr>
                  ))
                ) : (
                   <tr>
                    <td colSpan="4" className="py-12 text-center text-gray-500">
                      <p className="font-semibold">No listings found</p>
                      <p className="text-sm">Post your first internship/job to see it here.</p>
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>
          
        </div>

      </div>
    </div>
  )
}
