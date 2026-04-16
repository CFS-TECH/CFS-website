"use client"
import { Plus, Edit2, Trash2, Image as ImageIcon, Search, ExternalLink, Loader2, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import api from "@/utils/api";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
import "react-quill-new/dist/quill.snow.css";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const [formData, setFormData] = useState({ 
    title: "", 
    description: "", 
    image: "", 
    category: "Support Service",
    section: "none",
    readTime: "5 min",
    author: "Crossover Admin",
    authorImg: ""
  });
  
  const fileInputRef = useRef(null);

  const categories = ["Support Service", "Technology Service", "Finance Solution", "Other"];
  const sections = [
    { id: "none", label: "None" },
    { id: "featured", label: "Featured Blog" },
    { id: "latest", label: "Latest Update" },
    { id: "learning-hub", label: "Learning Hub" },
    { id: "all", label: "All Blogs" }
  ];

  const fetchBlogs = async () => {
    try {
      const { data } = await api.get('/blogs');
      if (data.success) {
        setBlogs(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleImageUpload = async (e, field = 'image') => {
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
        setFormData(prev => ({ ...prev, [field]: data.url }));
        setSuccess(`${field === 'image' ? 'Blog' : 'Author'} image uploaded successfully!`);
      }
    } catch (err) {
      setError("Failed to upload image. Check Cloudinary settings.");
    } finally {
      setUploading(false);
    }
  };

  const handleCreateOrUpdateBlog = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");

    if (!formData.title || !formData.description) {
       setError("Both title and description are required.");
       setSubmitting(false);
       return;
    }

    try {
      const slug = formData.title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove all non-word chars (except spaces and dashes)
        .replace(/[\s_]+/g, '-')  // Replace spaces and underscores with a single dash
        .replace(/-+/g, '-')      // Replace multiple dashes with a single dash
        .replace(/^-+|-+$/g, ''); // Trim dashes from start and end

      const payload = {
         ...formData,
         content: formData.description,
         slug: slug,
         status: 'published'
      };
      
      let response;
      if (editingId) {
        response = await api.put(`/blogs/${editingId}`, payload);
      } else {
        response = await api.post('/blogs', payload);
      }

      if (response.data.success) {
         setSuccess(editingId ? "Blog updated successfully!" : "Blog published successfully!");
         setFormData({ 
           title: "", 
           description: "", 
           image: "", 
           category: "Support Service",
           section: "none",
           readTime: "5 min",
           author: "Crossover Admin",
           authorImg: ""
         });
         setEditingId(null);
         fetchBlogs();
         if (fileInputRef.current) fileInputRef.current.value = "";
      }
    } catch (err) {
      setError(err.response?.data?.message || "Failed to save blog");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (blog) => {
    setEditingId(blog._id);
    setFormData({
      title: blog.title || "",
      description: blog.content || "",
      image: blog.image || "",
      category: blog.category || "Support Service",
      section: blog.section || "none",
      readTime: blog.readTime || "5 min",
      author: blog.author || "Crossover Admin",
      authorImg: blog.authorImg || ""
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ 
      title: "", 
      description: "", 
      image: "", 
      category: "Support Service",
      section: "none",
      readTime: "5 min",
      author: "Crossover Admin",
      authorImg: ""
    });
  };

   const handleDelete = async (id) => {
     if (!window.confirm("Are you sure you want to delete this blog?")) return;
     try {
       await api.delete(`/blogs/${id}`);
       fetchBlogs();
       setSuccess("Blog deleted successfully!");
     } catch (err) {
       console.error("Failed to delete", err);
       const errorMessage = err.response?.data?.message || err.message || "Unknown error occurred";
       alert(`Error deleting blog: ${errorMessage}`);
       setError(`Delete failed: ${errorMessage}`);
     }
   };

  return (
    <div className="pb-10 flex flex-col w-full text-gray-200">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 bg-gradient-to-r from-[#0B1221] to-[#131E32] p-8 rounded-3xl border border-[#1F2937] shadow-2xl">
         <div className="space-y-2">
           <h1 className="text-4xl font-black text-white tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">
             Manage <span className="text-blue-500">Blogs</span>
           </h1>
           <p className="text-gray-400 font-semibold text-sm flex items-center gap-2">
             <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
             Craft. Edit. Publish. Control your blog ecosystem.
           </p>
         </div>
         <div className="flex items-center gap-3">
            <div className="px-5 py-2.5 bg-blue-500/10 rounded-2xl border border-blue-500/20 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-black text-blue-400 uppercase tracking-widest">{blogs.length} Total Posts</span>
            </div>
         </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Add/Edit Blog Form */}
        <div className="xl:col-span-1 bg-[#0B1221] rounded-2xl border border-[#1F2937] shadow-lg sticky top-28 h-fit max-h-[85vh] overflow-y-auto custom-scrollbar">
          <div className="p-6 border-b border-[#1F2937] flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className={`p-2 ${editingId ? 'bg-amber-500/10 border-amber-500/20' : 'bg-blue-500/10 border-blue-500/20'} rounded-lg border`}>
                 {editingId ? <Edit2 size={18} className="text-amber-400" /> : <Plus size={18} className="text-blue-400" />}
               </div>
               <h2 className="text-xl font-black text-white tracking-tight">{editingId ? "Refine Blog" : "Draft New Blog"}</h2>
             </div>
             {editingId && (
               <button onClick={cancelEdit} className="text-xs text-gray-400 hover:text-white transition-colors">Cancel</button>
             )}
          </div>
          
          <form onSubmit={handleCreateOrUpdateBlog} className="p-6 space-y-5">
            {error && <div className="text-xs text-red-400 bg-red-500/10 p-2 rounded">{error}</div>}
            {success && <div className="text-xs text-emerald-400 bg-emerald-500/10 p-2 rounded">{success}</div>}

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Blog Title</label>
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter title" 
                className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors text-white placeholder:text-gray-600" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Category</label>
                <select 
                  value={formData.category}
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                  className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors text-white"
                >
                  {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Target Section</label>
                <select 
                  value={formData.section}
                  onChange={(e) => setFormData({...formData, section: e.target.value})}
                  className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors text-white"
                >
                  {sections.map(sec => <option key={sec.id} value={sec.id}>{sec.label}</option>)}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Read Time</label>
                <input 
                  type="text" 
                  value={formData.readTime}
                  onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                  placeholder="e.g. 5 min" 
                  className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors text-white placeholder:text-gray-600" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-300">Author Name</label>
                <input 
                  type="text" 
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  placeholder="Author name" 
                  className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-colors text-white placeholder:text-gray-600" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Blog Content</label>
              <div className="w-full bg-[#131E32] border border-[#1F2937] rounded-xl overflow-hidden [&_.ql-toolbar]:bg-[#1F2937] [&_.ql-toolbar]:border-none [&_.ql-toolbar_button]:text-gray-300 [&_.ql-stroke]:stroke-gray-300 [&_.ql-fill]:fill-gray-300 [&_.ql-picker]:text-gray-300 [&_.ql-container]:border-none [&_.ql-editor]:min-h-[300px] [&_.ql-editor]:text-white">
                <ReactQuill 
                  theme="snow" 
                  value={formData.description} 
                  onChange={(val) => setFormData({...formData, description: val})} 
                  placeholder="Draft your rich-text blog post here..."
                  modules={{
                    toolbar: [
                      [{ 'header': [1, 2, 3, false] }],
                      ['bold', 'italic', 'underline', 'strike'],
                      [{'list': 'ordered'}, {'list': 'bullet'}],
                      [{ 'color': [] }, { 'background': [] }],
                      ['image', 'link'],
                      ['clean']
                    ],
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Blog Image</label>
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => handleImageUpload(e, 'image')}
                className="hidden"
                id="blog-image-upload"
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
                <label 
                   htmlFor="blog-image-upload"
                   className="w-full border-2 border-dashed border-[#1F2937] rounded-xl bg-[#131E32]/50 hover:bg-[#131E32] hover:border-blue-500/50 transition-colors flex flex-col items-center justify-center py-6 cursor-pointer group"
                >
                   {uploading ? (
                      <div className="flex flex-col items-center gap-2">
                         <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                         <p className="text-xs font-semibold text-blue-400">Uploading...</p>
                      </div>
                   ) : (
                      <>
                        <ImageIcon size={32} className="text-gray-500 mb-2 group-hover:text-blue-500 transition-colors" />
                        <p className="text-xs font-semibold text-gray-400 group-hover:text-gray-200">Click to upload blog image</p>
                      </>
                   )}
                </label>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Author Image (Optional)</label>
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => handleImageUpload(e, 'authorImg')}
                className="hidden"
                id="author-image-upload"
              />
              
              {formData.authorImg ? (
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#1F2937] group">
                   <img src={formData.authorImg} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button 
                        type="button" 
                        onClick={() => setFormData({...formData, authorImg: ""})}
                        className="p-1 bg-red-500/20 text-red-500 rounded-full"
                      >
                         <X size={14} />
                      </button>
                   </div>
                </div>
              ) : (
                <label 
                   htmlFor="author-image-upload"
                   className="w-16 h-16 border-2 border-dashed border-[#1F2937] rounded-full bg-[#131E32]/50 hover:bg-[#131E32] hover:border-blue-500/50 transition-colors flex items-center justify-center cursor-pointer"
                >
                   <Plus size={20} className="text-gray-500" />
                </label>
              )}
            </div>

            <div className="pt-2">
              <button 
                type="submit" 
                disabled={submitting || uploading}
                className={`w-full ${editingId ? 'bg-amber-600 hover:bg-amber-500 border-amber-500' : 'bg-blue-600 hover:bg-blue-500 border-blue-500'} text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all border disabled:opacity-50`}
              >
                {submitting ? "Saving..." : (editingId ? "Update Blog" : "Publish Blog")}
              </button>
            </div>
          </form>
        </div>

        {/* List Table */}
        <div className="xl:col-span-2 bg-[#0B1221] rounded-2xl border border-[#1F2937] shadow-lg flex flex-col">
          <div className="p-6 border-b border-[#1F2937] flex flex-col md:flex-row md:items-center justify-between gap-4">
             <h2 className="text-lg font-bold text-white">All Blogs</h2>
             <div className="flex items-center bg-[#131E32] rounded-lg px-3 py-1.5 border border-[#1F2937] focus-within:border-blue-500">
               <Search size={16} className="text-gray-500" />
               <input type="text" placeholder="Search blogs..." className="bg-transparent border-none outline-none px-2 w-full text-sm text-gray-200" />
             </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#131E32]/50 border-b border-[#1F2937] text-gray-400 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold w-16">Image</th>
                  <th className="py-4 px-6 font-semibold">Blog info</th>
                  <th className="py-4 px-6 font-semibold">Section</th>
                  <th className="py-4 px-6 font-semibold text-center">Status</th>
                  <th className="py-4 px-6 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F2937]">
                {loading ? (
                  <tr><td colSpan="5" className="py-8 text-center text-gray-400">Loading blogs...</td></tr>
                ) : blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <tr key={blog._id} className="hover:bg-[#131E32]/30 transition-colors group">
                      <td className="py-4 px-6">
                        <div className="w-12 h-10 bg-[#1A263B] rounded-lg overflow-hidden border border-[#1F2937]">
                           <img 
                              src={blog.image || "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=100"} 
                              className="w-full h-full object-cover" 
                           />
                        </div>
                      </td>
                      <td className="py-4 px-6">
                         <p className="font-semibold text-gray-200 text-sm max-w-[200px] truncate">{blog.title}</p>
                         <p className="text-[10px] text-gray-500 uppercase font-bold">{blog.category || 'Uncategorized'}</p>
                      </td>
                      <td className="py-4 px-6">
                         <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border ${
                           blog.section === 'latest' ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' :
                           blog.section === 'knowledge-hub' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' :
                           blog.section === 'explore' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                           'bg-gray-500/10 text-gray-400 border-gray-500/20'
                         }`}>
                           {sections.find(s => s.id === blog.section)?.label || 'None'}
                         </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold bg-emerald-500/10 text-emerald-400 mb-1 border border-emerald-500/20">{blog.status}</span>
                        <p className="text-[10px] text-gray-500 block">{new Date(blog.createdAt).toLocaleDateString()}</p>
                      </td>
                      <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                         <button onClick={() => handleEdit(blog)} className="p-2 bg-[#131E32] hover:bg-amber-500/20 text-gray-400 hover:text-amber-400 rounded-lg border border-[#1F2937] transition-all">
                           <Edit2 size={16} />
                         </button>
                         <button onClick={() => handleDelete(blog._id)} className="p-2 bg-[#131E32] hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-lg border border-[#1F2937] transition-all">
                           <Trash2 size={16} />
                         </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="5" className="py-12 text-center text-gray-500">No blogs found.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
