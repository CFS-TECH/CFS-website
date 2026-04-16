"use client"
import { Plus, Edit2, Trash2, Search, Image as ImageIcon, Clock, Star, Loader2, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import api from "@/utils/api";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

export default function AdminInsights() {
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [mounted, setMounted] = useState(false);
  
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "Fintech",
    image: "",
    readTime: "5 min",
    featured: false
  });

  const fetchUpdates = async () => {
    try {
      const { data } = await api.get('/industry-updates');
      if (data.success) {
        setUpdates(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    fetchUpdates();
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
       setError("Please upload an image file.");
       return;
    }

    setUploading(true);
    setError("");
    
    const formDataUpload = new FormData();
    formDataUpload.append('image', file);

    try {
      const { data } = await api.post('/upload', formDataUpload, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      if (data.success) {
        setFormData(prev => ({ ...prev, image: data.url }));
        setSuccess("Image uploaded to Cloudinary!");
      }
    } catch (err) {
      setError("Failed to upload image. Check Cloudinary settings.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");

    if (!formData.title || !formData.description) {
      setError("Please fill all required fields.");
      setSubmitting(false);
      return;
    }

    try {
      if (editingId) {
        const { data } = await api.put(`/industry-updates/${editingId}`, formData);
        if (data.success) {
          setSuccess("Insight updated successfully!");
          handleCancelEdit();
          fetchUpdates();
        }
      } else {
        const { data } = await api.post('/industry-updates', formData);
        if (data.success) {
          setSuccess("Insight posted successfully!");
          setFormData({
            title: "",
            description: "",
            category: "Fintech",
            image: "",
            readTime: "5 min",
            featured: false
          });
          fetchUpdates();
        }
      }
    } catch (err) {
      const message = err.response?.data?.message || "Failed to save insight";
      setError(message);
      
      // If the backend says the update wasn't found, it's a "Ghost ID"
      // we need to refresh the list to clear the deleted/stale item
      if (err.response?.status === 404) {
        handleCancelEdit();
        fetchUpdates();
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setFormData({
      title: item.title,
      description: item.description,
      category: item.category,
      image: item.image,
      readTime: item.readTime,
      featured: item.featured
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({
      title: "",
      description: "",
      category: "Fintech",
      image: "",
      readTime: "5 min",
      featured: false
    });
    setError("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this insight?")) return;
    try {
      await api.delete(`/industry-updates/${id}`);
      fetchUpdates();
    } catch (err) {
      console.error("Failed to delete", err);
      alert("Error deleting insight");
    }
  };

  const toggleFeatured = async (id, currentStatus) => {
    try {
      await api.put(`/industry-updates/${id}`, { featured: !currentStatus });
      fetchUpdates();
    } catch (err) {
      console.error("Failed to update status", err);
    }
  };

  return (
    <div className="pb-10 flex flex-col w-full text-gray-200" suppressHydrationWarning>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Insights Hub</h1>
          <p className="text-gray-400 font-medium text-sm">Manage dynamic industry updates and market trends.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Add Form */}
        <div className="xl:col-span-1 bg-[#0B1221] rounded-2xl border border-[#1F2937] shadow-lg h-fit sticky top-28">
           <div className="p-6 border-b border-[#1F2937] flex items-center gap-3">
             <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
               {editingId ? <Edit2 size={18} className="text-orange-400" /> : <Plus size={18} className="text-orange-400" />}
             </div>
             <h2 className="text-lg font-bold text-white">{editingId ? "Edit Insight" : "Post New Insight"}</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {error && <div className="text-xs text-red-400 bg-red-500/10 p-2 rounded">{error}</div>}
            {success && <div className="text-xs text-emerald-400 bg-emerald-500/10 p-2 rounded">{success}</div>}

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Category</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-orange-500 transition-colors text-white"
              >
                <option value="Fintech">Fintech</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Tech & Software">Tech & Software</option>
                <option value="Business Support">Business Support</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Title</label>
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="E.g. New RBI Guidelines" 
                className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-orange-500 transition-colors text-white placeholder:text-gray-600" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Description</label>
              <div className="w-full bg-[#131E32] border border-[#1F2937] rounded-xl overflow-hidden [&_.ql-toolbar]:bg-[#1F2937] [&_.ql-toolbar]:border-none [&_.ql-toolbar_button]:text-gray-300 [&_.ql-stroke]:stroke-gray-300 [&_.ql-fill]:fill-gray-300 [&_.ql-picker]:text-gray-300 [&_.ql-container]:border-none [&_.ql-editor]:min-h-[250px] [&_.ql-editor]:text-white">
                <ReactQuill 
                  theme="snow" 
                  value={formData.description} 
                  onChange={(val) => setFormData({...formData, description: val})} 
                  placeholder="Draft your full rich-text article here..."
                  modules={{
                    toolbar: [
                      [{ 'header': [1, 2, false] }],
                      ['bold', 'italic', 'underline', 'strike'],
                      [{'list': 'ordered'}, {'list': 'bullet'}],
                      [{ 'color': [] }, { 'background': [] }],
                      ['clean']
                    ],
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Read Time</label>
                <input 
                  type="text" 
                  value={formData.readTime}
                  onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                  placeholder="5 min" 
                  className="w-full px-4 py-2 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-orange-500 transition-colors text-white" 
                />
              </div>
              <div className="flex items-center gap-2 pt-6">
                <button 
                  type="button"
                  onClick={() => setFormData({...formData, featured: !formData.featured})}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all ${formData.featured ? "bg-orange-500/20 border-orange-500 text-orange-400" : "bg-[#131E32] border-[#1F2937] text-gray-500"}`}
                >
                  <Star size={14} fill={formData.featured ? "currentColor" : "none"} />
                  <span className="text-xs font-bold uppercase">Featured</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Insight Image</label>
              <input 
                type="file" 
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
              />
              
              {formData.image ? (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#1F2937] group">
                   <img src={formData.image} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        type="button" 
                        onClick={() => setFormData({...formData, image: ""})}
                        className="p-2 bg-red-500/20 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all"
                      >
                         <X size={20} />
                      </button>
                   </div>
                </div>
              ) : (
                <div 
                   onClick={() => fileInputRef.current.click()}
                   className="w-full border-2 border-dashed border-[#1F2937] rounded-xl bg-[#131E32]/50 hover:bg-[#131E32] hover:border-orange-500/50 transition-colors flex flex-col items-center justify-center py-6 cursor-pointer group"
                >
                   {uploading ? (
                      <div className="flex flex-col items-center gap-2">
                         <Loader2 className="w-8 h-8 text-orange-400 animate-spin" />
                         <p className="text-xs font-semibold text-orange-400">Uploading to Cloudinary...</p>
                      </div>
                   ) : (
                      <>
                        <ImageIcon size={32} className="text-gray-500 mb-2 group-hover:text-orange-500 transition-colors" />
                        <p className="text-xs font-semibold text-gray-400 group-hover:text-gray-200">Click to upload image</p>
                        <p className="text-[10px] text-gray-500 mt-1">Cloudinary will store this.</p>
                      </>
                   )}
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-4">
               {editingId && (
                 <button 
                   type="button"
                   onClick={handleCancelEdit}
                   className="w-1/3 bg-[#1F2937] hover:bg-[#374151] text-white font-bold py-3 px-4 rounded-xl transition-all active:scale-95"
                 >
                   Cancel
                 </button>
               )}
               <button 
                 type="submit" 
                 disabled={submitting || uploading}
                 className={`${editingId ? 'w-2/3' : 'w-full'} bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-orange-600/20 transition-all border border-orange-500 disabled:opacity-50 active:scale-95`}
               >
                 {submitting ? (editingId ? "Updating..." : "Posting...") : (editingId ? "Update Insight" : "Post Insight")}
               </button>
            </div>
          </form>
        </div>

        {/* List */}
        <div className="xl:col-span-2 bg-[#0B1221] rounded-2xl border border-[#1F2937] shadow-lg flex flex-col">
          <div className="p-6 border-b border-[#1F2937] flex flex-col md:flex-row md:items-center justify-between gap-4">
             <div className="flex items-center gap-3">
               <h2 className="text-xl font-bold text-white">Live Updates</h2>
               <button 
                 onClick={fetchUpdates} 
                 disabled={loading}
                 className="p-1.5 text-gray-500 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all"
                 title="Force Reload from Database"
               >
                 <Loader2 size={16} className={loading ? "animate-spin" : ""} />
               </button>
             </div>
             <div className="flex items-center bg-[#131E32] rounded-lg px-3 py-1.5 border border-[#1F2937] focus-within:border-blue-500/50 transition-all w-full md:w-64">
                <Search size={16} className="text-gray-500" />
                <input type="text" placeholder="Search insights..." className="bg-transparent border-none outline-none px-2 w-full text-sm text-gray-200" />
              </div>
           </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#131E32]/50 border-b border-[#1F2937] text-gray-400 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Insight</th>
                  <th className="py-4 px-6 font-semibold">Category</th>
                  <th className="py-4 px-6 font-semibold text-center">Featured</th>
                  <th className="py-4 px-6 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F2937]">
                {loading ? (
                  <tr><td colSpan="4" className="py-12 text-center text-gray-500">Loading insights...</td></tr>
                ) : updates.length > 0 ? (
                  updates.map((item) => (
                    <tr key={item._id} className="hover:bg-[#131E32]/30 transition-colors group">
                      <td className="py-4 px-6">
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-slate-800 overflow-hidden flex-shrink-0 border border-[#1F2937]">
                               <img src={item.image || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=100"} className="w-full h-full object-cover" />
                            </div>
                            <div>
                               <p className="font-bold text-gray-100 text-sm line-clamp-1">{item.title}</p>
                               <span className="text-[10px] text-gray-500 uppercase" suppressHydrationWarning>
                                 {mounted ? new Date(item.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '...'}
                               </span>
                            </div>
                         </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1 rounded-full bg-[#131E32] border border-[#1F2937] text-[10px] font-bold text-gray-400">{item.category}</span>
                      </td>
                      <td className="py-4 px-6 text-center">
                         <button 
                           onClick={() => toggleFeatured(item._id, item.featured)}
                           className={`p-2 rounded-lg transition-all ${item.featured ? "text-orange-500 bg-orange-500/10" : "text-gray-600 hover:text-gray-400"}`}
                         >
                            <Star size={18} fill={item.featured ? "currentColor" : "none"} />
                         </button>
                      </td>
                      <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                         <button onClick={() => handleEdit(item)} className="p-2 bg-[#131E32] hover:bg-blue-500/20 text-gray-500 hover:text-blue-400 rounded-lg border border-[#1F2937] transition-all">
                           <Edit2 size={16} />
                         </button>
                         <button onClick={() => handleDelete(item._id)} className="p-2 bg-[#131E32] hover:bg-red-500/20 text-gray-500 hover:text-red-400 rounded-lg border border-[#1F2937] transition-all">
                           <Trash2 size={16} />
                         </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="4" className="py-20 text-center text-gray-500">No dynamic insights found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
