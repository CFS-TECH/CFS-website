"use client"
import { Plus, Edit2, Trash2, Search } from "lucide-react";

export default function AdminServices() {
  return (
    <div className="pb-10 flex flex-col w-full text-gray-200">
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
         <div className="space-y-1">
           <h1 className="text-3xl font-extrabold text-white tracking-tight">Manage Services</h1>
           <p className="text-gray-400 font-medium text-sm">Create, edit, and manage platform services.</p>
         </div>
      </div>

      {/* Grid Layout: Left side Form, Right side Table */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Add New Service Form */}
        <div className="xl:col-span-1 bg-[#0B1221] rounded-2xl border border-[#1F2937] shadow-lg sticky top-28 h-fit">
          <div className="p-6 border-b border-[#1F2937] flex items-center gap-3">
             <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
               <Plus size={18} className="text-emerald-400" />
             </div>
             <h2 className="text-lg font-bold text-white">Add New Service</h2>
          </div>
          
          <div className="p-6 space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Service Name</label>
              <input type="text" placeholder="E.g., BPO Support" className="w-full px-4 py-2.5 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors text-white placeholder:text-gray-600" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-300">Description</label>
              <textarea rows="4" placeholder="Detail the service..." className="w-full px-4 py-3 bg-[#131E32] border border-[#1F2937] rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors text-white placeholder:text-gray-600 resize-none"></textarea>
            </div>

            <div className="pt-2 flex gap-3">
              <button className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all border border-emerald-500">
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Manage Services Table */}
        <div className="xl:col-span-2 bg-[#0B1221] rounded-2xl border border-[#1F2937] shadow-lg flex flex-col">
          <div className="p-6 border-b border-[#1F2937] flex flex-col md:flex-row md:items-center justify-between gap-4">
             <h2 className="text-lg font-bold text-white">All Services</h2>
             
             <div className="flex items-center bg-[#131E32] rounded-lg px-3 py-1.5 border border-[#1F2937] focus-within:border-emerald-500">
               <Search size={16} className="text-gray-500" />
               <input type="text" placeholder="Search services..." className="bg-transparent border-none outline-none px-2 w-full text-sm text-gray-200" />
             </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#131E32]/50 border-b border-[#1F2937] text-gray-400 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-semibold">Service Name</th>
                  <th className="py-4 px-6 font-semibold">Description</th>
                  <th className="py-4 px-6 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F2937]">
                
                <tr className="hover:bg-[#131E32]/30 transition-colors group">
                  <td className="py-4 px-6 font-semibold text-gray-200 text-sm whitespace-nowrap">Corporate Travel Support</td>
                  <td className="py-4 px-6 text-sm text-gray-400 min-w-[250px]">Professional handling of all corporate travel needs.</td>
                  <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                     <button className="px-3 py-1.5 bg-[#131E32] hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 rounded-lg border border-[#1F2937] hover:border-blue-500/50 transition-all text-xs font-bold uppercase cursor-pointer">
                       Edit
                     </button>
                     <button className="px-3 py-1.5 bg-[#131E32] hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-lg border border-[#1F2937] hover:border-red-500/50 transition-all text-xs font-bold uppercase cursor-pointer">
                       Delete
                     </button>
                  </td>
                </tr>

                 <tr className="hover:bg-[#131E32]/30 transition-colors group">
                  <td className="py-4 px-6 font-semibold text-gray-200 text-sm whitespace-nowrap">IT-Enabled Services</td>
                  <td className="py-4 px-6 text-sm text-gray-400 min-w-[250px]">Robust technology infrastructure management.</td>
                  <td className="py-4 px-6 text-right space-x-2 whitespace-nowrap">
                     <button className="px-3 py-1.5 bg-[#131E32] hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 rounded-lg border border-[#1F2937] hover:border-blue-500/50 transition-all text-xs font-bold uppercase">
                       Edit
                     </button>
                     <button className="px-3 py-1.5 bg-[#131E32] hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-lg border border-[#1F2937] hover:border-red-500/50 transition-all text-xs font-bold uppercase">
                       Delete
                     </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          
        </div>

      </div>
    </div>
  )
}
