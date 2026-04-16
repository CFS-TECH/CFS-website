"use client"
import { Mail, Phone, Search, Download, Users, Trash2, FileText, Briefcase, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import api from "@/utils/api";

export default function AdminApplications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchApplications = async () => {
    try {
      const { data } = await api.get('/careers');
      if (data.success) {
        setApplications(data.data);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch applications. Please ensure you are logged in.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteApplication = async (id) => {
    if (!window.confirm("Are you sure you want to delete this application?")) return;
    
    try {
      const { data } = await api.delete(`/careers/${id}`);
      if (data.success) {
        setApplications((prev) => prev.filter((app) => app._id !== id));
      }
    } catch (err) {
       alert("Failed to delete application");
       console.error(err);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const filteredApplications = applications.filter(app => 
    app.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getResumeUrl = (url) => {
    if (!url) return null;
    
    // If it's already a full web URL (like Cloudinary)
    if (url.startsWith('http')) {
      // Force download for Cloudinary URLs by adding fl_attachment transformation
      if (url.includes('cloudinary.com')) {
        return url.replace('/upload/', '/upload/fl_attachment/');
      }
      return url;
    }

    // If it's an old local path (e.g., C:\...\uploads\file.pdf)
    if (url.includes('\\uploads\\') || url.includes('/uploads/')) {
      const filename = url.split(/[\\/]/).pop();
      // Adjust this URL to match your backend's static file serving (Port 5000)
      const backendBaseUrl = api.defaults.baseURL.replace('/api', '');
      return `${backendBaseUrl}/uploads/${filename}`;
    }

    return url;
  };

  return (
    <div className="pb-10 flex flex-col w-full text-gray-200" suppressHydrationWarning>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
         <div className="space-y-1">
           <h1 className="text-3xl font-extrabold text-white tracking-tight">Job Applications</h1>
           <p className="text-gray-400 font-medium text-sm">Review candidate submissions and download their Resumes/CVs.</p>
         </div>
      </div>

      <div className="bg-[#0B1221] rounded-2xl border border-[#1F2937] shadow-lg flex flex-col w-full overflow-hidden">
         <div className="p-6 border-b border-[#1F2937] flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#131E32]/30">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
               <Users size={20} className="text-blue-500" />
               Candidates List
            </h2>
            <div className="flex items-center bg-[#131E32] rounded-xl px-4 py-2.5 border border-[#1F2937] focus-within:border-blue-500/50 w-full max-w-sm transition-all">
               <Search size={18} className="text-gray-500" />
               <input 
                 type="text" 
                 placeholder="Search by name, email or position..." 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="bg-transparent border-none outline-none px-3 w-full text-sm text-gray-200" 
               />
            </div>
         </div>

         <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-[#131E32]/50 border-b border-[#1F2937] text-gray-400 text-[11px] uppercase tracking-widest">
                  <th className="py-4 px-6 font-bold">Candidate</th>
                  <th className="py-4 px-6 font-bold">Position</th>
                  <th className="py-4 px-6 font-bold">Resumé / CV</th>
                  <th className="py-4 px-6 font-bold">Message</th>
                  <th className="py-4 px-6 font-bold whitespace-nowrap">Date</th>
                  <th className="py-4 px-6 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F2937]">
                
                {loading ? (
                  <tr>
                    <td colSpan="6" className="py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                         <div className="w-10 h-10 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
                         <p className="text-gray-400 font-medium">Loading applications...</p>
                      </div>
                    </td>
                  </tr>
                ) : error ? (
                   <tr>
                    <td colSpan="6" className="py-20 text-center">
                       <p className="text-red-400 font-medium">{error}</p>
                    </td>
                  </tr>
                ) : filteredApplications.length > 0 ? (
                  filteredApplications.map((app) => (
                    <tr key={app._id} className="hover:bg-[#131E32]/30 transition-colors group">
                      <td className="py-5 px-6">
                         <div className="flex flex-col">
                           <span className="font-bold text-gray-100 text-sm">{app.fullName}</span>
                           <span className="text-xs text-gray-500">{app.email}</span>
                           <span className="text-[10px] text-gray-600 mt-1 flex items-center gap-1">
                             <Phone size={10} /> {app.phone}
                           </span>
                         </div>
                      </td>
                      <td className="py-5 px-6">
                         <div className="flex flex-col gap-1">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase w-fit ${app.applyingFor === 'job' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                              {app.applyingFor}
                            </span>
                            <span className="text-sm font-semibold text-gray-300">{app.category}</span>
                         </div>
                      </td>
                      <td className="py-5 px-6">
                         {app.resumeUrl ? (
                           <a 
                             href={getResumeUrl(app.resumeUrl)} 
                             target="_blank" 
                             rel="noopener noreferrer"
                             download={!app.resumeUrl.startsWith('http')} 
                             className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all text-xs font-bold"
                           >
                             <FileText size={14} />
                             Download CV
                             <Download size={14} />
                           </a>
                         ) : (
                           <span className="text-xs text-gray-600 italic">No CV uploaded</span>
                         )}
                      </td>
                      <td className="py-5 px-6">
                         <p className="text-xs text-gray-400 line-clamp-2 max-w-[200px]" title={app.message}>
                           {app.message || "No message provided"}
                         </p>
                      </td>
                      <td className="py-5 px-6 text-xs text-gray-500 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-gray-600" />
                          {new Date(app.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="py-5 px-6 text-right space-x-2 whitespace-nowrap">
                         <a href={`mailto:${app.email}`} className="inline-block p-2 bg-[#131E32] text-gray-400 hover:text-blue-400 rounded-lg border border-[#1F2937] hover:border-blue-500/50 transition-all">
                           <Mail size={16} />
                         </a>
                         <button 
                           onClick={() => handleDeleteApplication(app._id)}
                           className="inline-block p-2 bg-[#131E32] text-gray-400 hover:text-red-400 rounded-lg border border-[#1F2937] hover:border-red-500/50 transition-all cursor-pointer"
                         >
                            <Trash2 size={16} />
                         </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-24 text-center">
                      <div className="flex flex-col items-center gap-4 opacity-30">
                         <Briefcase size={64} className="text-gray-500" />
                         <div className="space-y-1">
                           <p className="font-bold text-xl text-gray-300">No applications found</p>
                           <p className="text-sm text-gray-500">Wait for candidates to apply through the website.</p>
                         </div>
                      </div>
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
         </div>
      </div>
    </div>
  )
}
