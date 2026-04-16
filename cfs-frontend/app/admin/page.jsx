"use client"
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  FileText, 
  Briefcase, 
  Users, 
  ArrowDownRight, 
  Activity, 
  TrendingUp, 
  BarChart3, 
  Clock,
  ExternalLink,
  ChevronRight,
  Mail,
  Zap,
  Globe
} from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [recentData, setRecentData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsRes, recentRes] = await Promise.all([
          axios.get('http://localhost:5000/api/dashboard/stats'),
          axios.get('http://localhost:5000/api/dashboard/recent')
        ]);
        setStats(statsRes.data.data);
        setRecentData(recentRes.data.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const statCards = [
    { 
      title: "Total Leads", 
      value: stats?.totalLeads || "0", 
      icon: Users, 
      footer: `+${stats?.leadsLastMonth || 0} this month`, 
      color: "from-orange-500 to-[#FD741E]" 
    },
    { 
      title: "Active Blogs", 
      value: stats?.totalBlogs || "0", 
      icon: FileText, 
      footer: "Content management", 
      color: "from-emerald-500 to-teal-600" 
    },
    { 
      title: "Applications", 
      value: stats?.totalApplications || "0", 
      icon: Briefcase, 
      footer: "Hiring pipeline", 
      color: "from-blue-500 to-indigo-600" 
    },
    { 
      title: "Subscribers", 
      value: stats?.totalSubscribers || "0", 
      icon: Mail, 
      footer: "Newsletter reach", 
      color: "from-rose-500 to-red-600" 
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-12 h-12 border-4 border-[#FD741E]/20 border-t-[#FD741E] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-12 pb-16">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
         <div className="space-y-2">
           <h1 className="text-4xl font-black text-white tracking-tight">
             Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD741E] to-[#ffa569]">Dashboard</span>
           </h1>
           <p className="text-gray-500 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
             <Activity size={16} className="text-[#FD741E]" />
             Real-time Website Insights
           </p>
         </div>
         <div className="flex gap-3">
            <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 flex items-center gap-2">
               <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
               <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">System Live</span>
            </div>
         </div>
      </div>

      {/* Floating Icon Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 pt-6">
        {statCards.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#0B1221]/60 backdrop-blur-xl rounded-[1.5rem] p-6 shadow-2xl border border-white/5 relative group"
          >
            {/* The Floating Icon Box */}
            <div className={`absolute -top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} shadow-lg shadow-black/40 flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-300`}>
               <stat.icon className="text-white" size={28} />
            </div>

            <div className="text-right pt-2">
              <p className="text-[13px] font-black text-gray-400 uppercase tracking-widest">{stat.title}</p>
              <h3 className="text-2xl font-black text-white mt-1">{stat.value}</h3>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[11px] font-bold text-gray-500">
                <Clock size={12} />
                <span>{stat.footer}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Analytics Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Leads Breakdown Chart Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-[#0B1221]/60 backdrop-blur-xl rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group"
        >
          <div className="p-4">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[1.5rem] p-6 shadow-lg shadow-indigo-900/40 relative overflow-hidden">
               <div className="flex items-center justify-between mb-4">
                 <h4 className="text-white font-bold">Leads by Category</h4>
                 <Zap size={20} className="text-white/50" />
               </div>
               <div className="flex items-end justify-around gap-2 h-32">
                 {stats?.leadBreakdown?.map((item, i) => (
                   <div key={i} className="flex flex-col items-center gap-2 w-full">
                     <div 
                       className="bg-white/90 rounded-t-lg transition-all hover:bg-white w-full max-w-[40px]" 
                       style={{ height: `${(item.count / (stats.totalLeads || 1)) * 100}%` }}
                     ></div>
                     <span className="text-[10px] text-white/70 font-bold uppercase truncate w-full text-center">{item._id || 'other'}</span>
                   </div>
                 )) || <p className="text-white/50 text-sm italic">No data available</p>}
               </div>
            </div>
          </div>
          <div className="px-8 pb-8 pt-2">
             <h4 className="text-xl font-black text-white">Platform Performance</h4>
             <p className="text-indigo-400 text-sm font-bold flex items-center gap-1 mt-1">
               <TrendingUp size={16} /> Distribution <span className="text-gray-500 font-medium ml-1">of lead sources</span>
             </p>
          </div>
        </motion.div>

        {/* Website Activity Timeline */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-[#0B1221]/60 backdrop-blur-xl rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group"
        >
          <div className="p-4">
            <div className="bg-gradient-to-br from-[#FD741E] to-orange-600 rounded-[1.5rem] p-6 shadow-lg shadow-orange-900/40">
               <div className="flex items-center justify-between mb-4">
                 <h4 className="text-white font-bold">Content Growth</h4>
                 <Globe size={20} className="text-white/50" />
               </div>
               <svg className="w-full h-32" preserveAspectRatio="none" viewBox="0 0 100 40">
                 <path d="M0 35 Q 20 30, 40 32 T 70 15 T 100 5" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" />
                 {[0, 40, 70, 100].map((x, i) => (
                   <circle key={i} cx={x} cy={i === 0 ? 35 : i === 1 ? 32 : i === 2 ? 15 : 5} r="2" fill="white" />
                 ))}
               </svg>
            </div>
          </div>
          <div className="px-8 pb-8 pt-2">
             <h4 className="text-xl font-black text-white">Organic Reach</h4>
             <p className="text-orange-400 text-sm font-bold flex items-center gap-1 mt-1">
               <ArrowUpRight size={16} /> Upward trend <span className="text-gray-500 font-medium ml-1">in content indexing</span>
             </p>
          </div>
        </motion.div>

      </div>

      {/* Bottom Stats & Data Row */}
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-8">
        
        {/* Recent Leads Table */}
        <div className="bg-[#0B1221]/60 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/5 shadow-2xl">
           <div className="bg-gradient-to-br from-[#FD741E] to-orange-600 rounded-[1.5rem] px-8 py-6 -mt-16 mb-8 shadow-xl shadow-[#FD741E]/10 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">Recent Inquiries</h3>
                <p className="text-white/70 text-sm font-bold mt-1">Latest customer leads from website forms</p>
              </div>
              <Activity className="text-white/30" size={32} />
           </div>
           
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead className="border-b border-white/5">
                 <tr className="text-xs font-black text-[#FD741E] uppercase tracking-[0.2em]">
                   <th className="pb-4">Name</th>
                   <th className="pb-4">Type</th>
                   <th className="pb-4">Contact</th>
                   <th className="pb-4">Service</th>
                   <th className="pb-4 text-right">Date</th>
                 </tr>
               </thead>
               <tbody className="text-sm font-semibold text-gray-300">
                 {recentData?.recentLeads?.length > 0 ? (
                   recentData.recentLeads.map(lead => (
                     <tr key={lead._id} className="border-b border-white/5 group hover:bg-white/[0.02] transition-colors">
                       <td className="py-5">
                         <div className="font-bold text-white">{lead.firstName} {lead.lastName}</div>
                         <div className="text-[10px] text-gray-500 uppercase tracking-widest">{lead.companyName || 'Individual'}</div>
                       </td>
                       <td className="py-5">
                         <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                           lead.type === 'quote' ? 'bg-orange-500/10 text-orange-500' :
                           lead.type === 'popup' ? 'bg-blue-500/10 text-blue-500' :
                           'bg-emerald-500/10 text-emerald-500'
                         }`}>
                           {lead.type}
                         </span>
                       </td>
                       <td className="py-5">
                         <div className="text-xs">{lead.email}</div>
                         <div className="text-[11px] text-gray-500">{lead.phone}</div>
                       </td>
                       <td className="py-5 text-gray-400 font-medium italic">{lead.service || lead.subject || 'N/A'}</td>
                       <td className="py-5 text-right text-xs text-gray-500 font-mono">
                         {new Date(lead.createdAt).toLocaleDateString()}
                       </td>
                     </tr>
                   ))
                 ) : (
                   <tr>
                     <td colSpan="5" className="py-10 text-center text-gray-500 italic font-bold">No recent inquiries found</td>
                   </tr>
                 )}
               </tbody>
             </table>
           </div>
        </div>

      </div>

      {/* Global Stats or Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0B1221]/60 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/5 shadow-2xl flex items-center justify-between group cursor-pointer hover:border-[#FD741E]/30 transition-all">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-[#FD741E] group-hover:bg-[#FD741E] group-hover:text-white transition-all duration-300">
                  <Briefcase size={32} />
              </div>
              <div>
                  <h4 className="text-xl font-black text-white">Job Listings</h4>
                  <p className="text-sm font-bold text-gray-500 tracking-wide mt-0.5">{stats?.totalJobs || 0} active openings</p>
              </div>
            </div>
            <button className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-white transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
          <div className="bg-[#0B1221]/60 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/5 shadow-2xl flex items-center justify-between group cursor-pointer hover:border-[#FD741E]/30 transition-all">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <BarChart3 size={32} />
              </div>
              <div>
                  <h4 className="text-xl font-black text-white">Industry Updates</h4>
                  <p className="text-sm font-bold text-gray-500 tracking-wide mt-0.5">{stats?.totalIndustryUpdates || 0} news articles</p>
              </div>
            </div>
            <button className="p-3 bg-white/5 rounded-2xl text-gray-400 hover:text-white transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
      </div>

    </div>
  )
}
