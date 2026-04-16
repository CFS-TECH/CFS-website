"use client"
import { User, Shield, CheckCircle2 } from "lucide-react";

export default function AdminSettings() {
  return (
    <div className="pb-10 flex flex-col w-full text-gray-200 max-w-5xl mx-auto">
      
      <div className="flex flex-col mb-8 mt-2">
         <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight">Profile Settings</h1>
         <p className="text-gray-400 font-medium text-sm mt-1">Manage your administrator account credentials.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Profile Form */}
        <div className="bg-[#0B1221] rounded-2xl border border-[#1F2937] shadow-lg h-fit overflow-hidden">
          <div className="p-6 border-b border-[#1F2937] flex items-center gap-3 bg-[#131E32]/20">
             <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
               <User size={18} className="text-blue-400" />
             </div>
             <h2 className="text-lg font-bold text-white">General Information</h2>
          </div>
          
          <div className="p-6 space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Full Name</label>
              <input type="text" defaultValue="Admin User" className="w-full px-4 py-3 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Email Address</label>
              <input type="email" defaultValue="admin@crossover.com" className="w-full px-4 py-3 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-white" />
            </div>

            <div className="pt-4 flex gap-3">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-6 rounded-xl shadow-lg shadow-blue-600/20 transition-all border border-blue-500">
                Update
              </button>
              <button className="bg-transparent hover:bg-[#131E32] text-gray-400 hover:text-gray-200 font-bold py-2.5 px-6 rounded-xl transition-all border border-[#1F2937]">
                Cancel
              </button>
            </div>
            
            {/* Success Message Mockup */}
            {/* <div className="mt-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 flex items-center gap-3">
               <CheckCircle2 className="text-emerald-500" size={18} />
               <p className="text-xs font-semibold text-emerald-500">Updated successfully</p>
            </div> */}

          </div>
        </div>

        {/* Change Password */}
        <div className="bg-[#0B1221] rounded-2xl border border-[#1F2937] shadow-lg h-fit overflow-hidden">
          <div className="p-6 border-b border-[#1F2937] flex items-center gap-3 bg-[#131E32]/20">
             <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
               <Shield size={18} className="text-indigo-400" />
             </div>
             <h2 className="text-lg font-bold text-white">Security</h2>
          </div>
          
          <div className="p-6 space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Current Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-white" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">New Password</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors text-white" />
            </div>

            <div className="pt-4 flex gap-3">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 px-6 rounded-xl shadow-lg shadow-indigo-600/20 transition-all border border-indigo-500">
                Change Password
              </button>
            </div>
            
            {/* Error Message Mockup */}
            {/* <div className="mt-4 bg-red-500/10 border border-red-500/20 rounded-xl p-3 flex items-center gap-3">
               <AlertTriangle className="text-red-500" size={18} />
               <p className="text-xs font-semibold text-red-500">Something went wrong</p>
            </div> */}

          </div>
        </div>

      </div>
    </div>
  )
}
