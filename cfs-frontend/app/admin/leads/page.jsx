"use client"
import { Mail, Phone, Search, Download, Users, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import api from "@/utils/api";

export default function AdminLeads() {
  const [activeTab, setActiveTab] = useState("leads"); // "leads" or "subscribers"
  const [leads, setLeads] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSubscribers = async () => {
    try {
      const { data } = await api.get('/newsletter');
      if (data.success) {
        setSubscribers(data.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchLeads = async () => {
    try {
      const { data } = await api.get('/leads');
      if (data.success) {
        setLeads(data.data);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch leads");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteLead = async (id) => {
    if (!window.confirm("Are you sure you want to delete this lead?")) return;
    
    try {
      const { data } = await api.delete(`/leads/${id}`);
      if (data.success) {
        setLeads((prevLeads) => prevLeads.filter((lead) => lead._id !== id));
      }
    } catch (err) {
       alert("Failed to delete lead");
       console.error(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (activeTab === "leads") {
      fetchLeads();
    } else {
      fetchSubscribers().finally(() => setLoading(false));
    }
  }, [activeTab]);

  return (
    <div className="pb-10 flex flex-col w-full text-gray-200">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
         <div className="space-y-1">
           <h1 className="text-3xl font-extrabold text-white tracking-tight">
             {activeTab === "leads" ? "Contact Leads" : "Newsletter Hub"}
           </h1>
           <p className="text-gray-400 font-medium text-sm">
             {activeTab === "leads" ? "Review User Enquiries and manage client contacts." : "Manage your newsletter subscribers and community updates."}
           </p>
         </div>
         <div className="flex items-center gap-2 bg-[#0B1221] p-1 rounded-xl border border-[#1F2937]">
            <button 
              onClick={() => setActiveTab("leads")}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "leads" ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20" : "text-gray-400 hover:text-white"}`}
            >
              Enquiries
            </button>
            <button 
              onClick={() => setActiveTab("subscribers")}
              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${activeTab === "subscribers" ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20" : "text-gray-400 hover:text-white"}`}
            >
              Subscribers
            </button>
         </div>
      </div>

      <div className="bg-[#0B1221] rounded-2xl border border-[#1F2937] shadow-lg flex flex-col w-full">
         <div className="p-6 border-b border-[#1F2937] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-lg font-bold text-white">{activeTab === "leads" ? "User Enquiries" : "Email Subscribers"}</h2>
            <div className="flex items-center bg-[#131E32] rounded-lg px-3 py-2 border border-[#1F2937] focus-within:border-blue-500/50 w-full max-w-sm">
               <Search size={16} className="text-gray-500" />
               <input type="text" placeholder={activeTab === "leads" ? "Search enquiries..." : "Search emails..."} className="bg-transparent border-none outline-none px-2 w-full text-sm text-gray-200" />
            </div>
         </div>

         <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[800px]">
              {activeTab === "leads" ? (
                <>
                  <thead>
                    <tr className="bg-[#131E32]/50 border-b border-[#1F2937] text-gray-400 text-xs uppercase tracking-wider">
                      <th className="py-4 px-6 font-semibold w-1/5">Name</th>
                      <th className="py-4 px-6 font-semibold w-1/5">Email</th>
                      <th className="py-4 px-6 font-semibold w-1/5">Phone</th>
                      <th className="py-4 px-6 font-semibold w-2/5">Message</th>
                      <th className="py-4 px-6 font-semibold whitespace-nowrap">Date</th>
                      <th className="py-4 px-6 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1F2937]">
                    
                    {loading ? (
                      <tr>
                        <td colSpan="6" className="py-8 text-center text-gray-400 font-medium">Loading leads...</td>
                      </tr>
                    ) : error ? (
                       <tr>
                        <td colSpan="6" className="py-8 text-center text-red-400 font-medium">{error}</td>
                      </tr>
                    ) : leads.length > 0 ? (
                      leads.map((lead) => (
                        <tr key={lead._id} className="hover:bg-[#131E32]/30 transition-colors group">
                          <td className="py-4 px-6 font-semibold text-gray-200 text-sm whitespace-nowrap">{lead.name || lead.firstName || 'User'}</td>
                          <td className="py-4 px-6 text-sm text-blue-400 whitespace-nowrap">{lead.email}</td>
                          <td className="py-4 px-6 text-sm text-gray-300 whitespace-nowrap">{lead.phone || 'N/A'}</td>
                          <td className="py-4 px-6 text-sm text-gray-400 max-w-xs truncate" title={lead.message}>
                             {lead.message || 'No message provided'}
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap">
                            {new Date(lead.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                             <a href={`mailto:${lead.email}`} title="Email Lead" className="inline-block p-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all">
                               <Mail size={16} />
                             </a>
                             {lead.phone && (
                               <a href={`tel:${lead.phone}`} title="Call Lead" className="inline-block p-2 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all">
                                 <Phone size={16} />
                               </a>
                             )}
                             <button 
                               onClick={() => handleDeleteLead(lead._id)}
                               title="Delete Lead"
                               className="inline-block p-2 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20 hover:bg-red-500 hover:text-white transition-all"
                             >
                                <Trash2 size={16} />
                             </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="py-16 text-center text-gray-500">
                          <Users size={48} className="mx-auto mb-3 opacity-20" />
                          <p className="font-semibold mb-1 text-base">No enquiries available</p>
                          <p className="text-sm">Wait for users to submit enquiries.</p>
                        </td>
                      </tr>
                    )}

                  </tbody>
                </>
              ) : (
                <>
                  <thead>
                    <tr className="bg-[#131E32]/50 border-b border-[#1F2937] text-gray-400 text-xs uppercase tracking-wider">
                      <th className="py-4 px-6 font-semibold">Subscriber Email</th>
                      <th className="py-4 px-6 font-semibold">Subscription Date</th>
                      <th className="py-4 px-6 font-semibold">Status</th>
                      <th className="py-4 px-6 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1F2937]">
                    {loading ? (
                      <tr>
                        <td colSpan="4" className="py-8 text-center text-gray-400 font-medium">Loading subscribers...</td>
                      </tr>
                    ) : subscribers.length > 0 ? (
                      subscribers.map((sub) => (
                        <tr key={sub._id} className="hover:bg-[#131E32]/30 transition-colors group">
                          <td className="py-4 px-6 text-sm text-orange-400 font-bold">{sub.email}</td>
                          <td className="py-4 px-6 text-sm text-gray-400">
                            {new Date(sub.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                          </td>
                          <td className="py-4 px-6">
                             <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase border border-emerald-500/20">Active</span>
                          </td>
                          <td className="py-4 px-6 text-right">
                             <a href={`mailto:${sub.email}`} title="Email Subscriber" className="inline-block p-2 bg-blue-500/10 text-blue-400 rounded-lg border border-blue-500/20 hover:bg-blue-500 hover:text-white transition-all mr-2">
                               <Mail size={16} />
                             </a>
                             <button 
                               onClick={async () => {
                                 if (window.confirm(`Remove ${sub.email} from newsletter?`)) {
                                   try {
                                     const { data } = await api.delete(`/newsletter/${sub._id}`);
                                     if (data.success) fetchSubscribers();
                                   } catch (err) {
                                     alert("Failed to remove subscriber");
                                   }
                                 }
                               }}
                               title="Remove Subscriber" 
                               className="inline-block p-2 bg-rose-500/10 text-rose-400 rounded-lg border border-rose-500/20 hover:bg-rose-500 hover:text-white transition-all"
                             >
                               <Trash2 size={16} />
                             </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="py-16 text-center text-gray-500">
                          <Mail size={48} className="mx-auto mb-3 opacity-20" />
                          <p className="font-semibold mb-1 text-base">No subscribers yet</p>
                          <p className="text-sm">Wait for users to join the newsletter.</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </>
              )}
            </table>
         </div>
      </div>
    </div>
  )
}
