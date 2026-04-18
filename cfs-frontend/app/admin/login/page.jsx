"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import api from "@/utils/api";
import HydrationGuard from "@/components/Common/HydrationGuard";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }
    
    setLoading(true);
    setError("");

    try {
      const { data } = await api.post('/auth/login', { email, password });
      
      if (data.success && data.data.token) {
         localStorage.setItem('adminToken', data.data.token);
         localStorage.setItem('adminProfile', JSON.stringify(data.data));
         
         // Set cookie for middleware protection (expires in 30 days)
         document.cookie = `adminToken=${data.data.token}; path=/; max-age=2592000; SameSite=Lax`;
         
         router.push('/admin');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials or server error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <HydrationGuard>
      <div className="min-h-screen bg-[#fcfdff] flex items-center justify-center p-4 relative overflow-hidden text-slate-800 font-sans" suppressHydrationWarning={true}>
        
        {/* Animated Background Gradients - Adding more color depth */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" suppressHydrationWarning={true}>
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-orange-100/40 blur-[120px] animate-pulse" suppressHydrationWarning={true}></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-100/40 blur-[120px]" suppressHydrationWarning={true}></div>
          <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] rounded-full bg-purple-50/50 blur-[100px]" suppressHydrationWarning={true}></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[440px] relative z-10"
          suppressHydrationWarning={true}
        >
          {/* Decorative Outer Ring */}
          <div className="absolute -inset-0.5 bg-gradient-to-tr from-orange-400/20 to-blue-400/20 rounded-[2.6rem] blur-sm" suppressHydrationWarning={true}></div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-[2.5rem] p-10 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-slate-100 relative" suppressHydrationWarning={true}>
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-orange-500 rounded-b-full"></div>

            <div className="mb-10 text-center flex flex-col items-center" suppressHydrationWarning={true}>
              <motion.div 
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-8"
                suppressHydrationWarning={true}
              >
                <Image
                  src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496900/cfs_assets/logo.png"
                  alt="Crossover Fintech Logo"
                  width={200}
                  height={70}
                  className="w-40 h-auto object-contain mix-blend-multiply"
                  unoptimized={true}
                />
              </motion.div>
              
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-2" suppressHydrationWarning={true}>
                Admin <span className="text-[#FD741E]">Portal</span>
              </h1>
              <p className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em]" suppressHydrationWarning={true}>Security Authentication Required</p>
            </div>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 bg-red-50 border border-red-100 rounded-2xl p-4 flex items-center gap-3"
                  suppressHydrationWarning={true}
                >
                   <AlertTriangle className="text-red-500 flex-shrink-0" size={18} />
                   <p className="text-xs font-semibold text-red-600">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-6" onSubmit={handleLogin} suppressHydrationWarning={true}>
              
              <div className="space-y-2" suppressHydrationWarning={true}>
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-1">Work Email</label>
                <div className="relative group" suppressHydrationWarning={true}>
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" suppressHydrationWarning={true}>
                    <Mail size={16} className="text-slate-400 group-focus-within:text-[#FD741E] transition-colors" />
                  </div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@crossover.com" 
                    className="w-full pl-12 pr-6 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl text-[14px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/5 focus:border-orange-200 transition-all font-medium text-slate-900 placeholder:text-slate-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2" suppressHydrationWarning={true}>
                <div className="flex justify-between items-center ml-1" suppressHydrationWarning={true}>
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Password</label>
                  <button 
                    type="button"
                    onClick={() => router.push('/admin/forgot-password')} 
                    className="text-[10px] font-bold text-orange-600 hover:text-orange-700 transition-colors uppercase tracking-wider"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative group" suppressHydrationWarning={true}>
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none" suppressHydrationWarning={true}>
                    <Lock size={16} className="text-slate-400 group-focus-within:text-[#FD741E] transition-colors" />
                  </div>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••" 
                    className="w-full pl-12 pr-6 py-4 bg-slate-50/50 border border-slate-100 rounded-2xl text-[14px] focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-500/5 focus:border-orange-200 transition-all font-medium text-slate-900 placeholder:text-slate-300"
                    required
                  />
                </div>
              </div>

              <button 
                 type="submit"
                 disabled={loading}
                 className="w-full mt-8 bg-gradient-to-r from-orange-500 to-[#F46400] hover:shadow-[0_15px_30px_rgba(244,100,0,0.3)] text-white font-bold py-4.5 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group h-[60px]"
                 suppressHydrationWarning={true}
              >
                <span className="text-[15px] tracking-wide">{loading ? "Verifying..." : "Access Dashboard"}</span>
                {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
              </button>
              
            </form>

            <div className="mt-10 pt-8 border-t border-slate-50 flex flex-col items-center gap-2" suppressHydrationWarning={true}>
               <p className="text-[10px] text-slate-400 font-medium uppercase tracking-[0.2em]">Protected by End-to-End Encryption</p>
               <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                 &copy; {new Date().getFullYear()} Crossover Fintech Support
               </p>
            </div>

          </div>
        </motion.div>
      </div>
    </HydrationGuard>
  )
}
