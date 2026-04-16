"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight, AlertTriangle, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
      <div className="min-h-screen bg-[#080F1A] flex items-center justify-center p-4 relative overflow-hidden text-gray-200 font-sans" suppressHydrationWarning={true}>
        
        {/* Dynamic Background Glows */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" suppressHydrationWarning={true}>
          <div className="absolute -top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#FD741E]/10 blur-[120px] animate-pulse" suppressHydrationWarning={true}></div>
          <div className="absolute bottom-[0%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#102A43]/30 blur-[120px]" suppressHydrationWarning={true}></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="w-full max-w-[460px] relative z-10"
          suppressHydrationWarning={true}
        >
          <div className="bg-[#0B1221]/40 backdrop-blur-3xl rounded-[3rem] p-10 md:p-14 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-white/5 relative overflow-hidden" suppressHydrationWarning={true}>
            
            {/* Animated Top Border Accent */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FD741E] to-transparent" suppressHydrationWarning={true}></div>

            <div className="mb-12 text-center flex flex-col items-center" suppressHydrationWarning={true}>
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="bg-white p-7 rounded-[2.5rem] shadow-[0_20px_50px_rgba(253,116,30,0.15)] mb-10 relative group"
                suppressHydrationWarning={true}
              >
                {/* Ambient Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FD741E] to-[#ffa569] rounded-[2.6rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative bg-white rounded-[2rem] p-2" suppressHydrationWarning={true}>
                  <Image
                    src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496900/cfs_assets/logo.png"
                    alt="Crossover Fintech Logo"
                    width={220}
                    height={80}
                    className="w-44 h-auto object-contain brightness-105"
                    unoptimized={true}
                  />
                </div>
              </motion.div>
              
              <h1 className="text-4xl font-black text-white tracking-tight mb-3" suppressHydrationWarning={true}>
                Admin <span className="text-[#FD741E]">Portal</span>
              </h1>
              <p className="text-gray-500 text-[12px] font-bold uppercase tracking-[0.3em]" suppressHydrationWarning={true}>Identity Verification Required</p>
            </div>

            <AnimatePresence mode="wait">
              {error && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-8 bg-red-500/10 border border-red-500/20 rounded-2xl p-4 flex items-center gap-4 overflow-hidden"
                  suppressHydrationWarning={true}
                >
                   <AlertTriangle className="text-red-500 flex-shrink-0" size={20} />
                   <p className="text-xs font-bold text-red-500">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="space-y-7" onSubmit={handleLogin} suppressHydrationWarning={true}>
              
              <div className="space-y-3" suppressHydrationWarning={true}>
                <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest ml-1">Work Email Address</label>
                <div className="relative group" suppressHydrationWarning={true}>
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none" suppressHydrationWarning={true}>
                    <Mail size={18} className="text-gray-600 group-focus-within:text-[#FD741E] transition-colors" />
                  </div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin.access@cfs.com" 
                    className="w-full pl-14 pr-7 py-5 bg-white/[0.03] border border-white/5 rounded-2xl text-[14px] focus:bg-white/[0.07] focus:outline-none focus:ring-4 focus:ring-[#FD741E]/10 focus:border-[#FD741E]/40 transition-all font-semibold text-white placeholder:text-gray-700 shadow-inner"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3" suppressHydrationWarning={true}>
                <div className="flex justify-between items-center ml-1" suppressHydrationWarning={true}>
                  <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest">Master Password</label>
                  <button 
                    type="button"
                    onClick={() => router.push('/admin/forgot-password')} 
                    className="text-[10px] font-black text-[#FD741E]/70 hover:text-[#FD741E] transition-all uppercase tracking-[0.1em] cursor-pointer hover:underline underline-offset-4 decoration-[#FD741E]/30"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative group" suppressHydrationWarning={true}>
                  <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none" suppressHydrationWarning={true}>
                    <Lock size={18} className="text-gray-600 group-focus-within:text-[#FD741E] transition-colors" />
                  </div>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••" 
                    className="w-full pl-14 pr-7 py-5 bg-white/[0.03] border border-white/5 rounded-2xl text-[14px] focus:bg-white/[0.07] focus:outline-none focus:ring-4 focus:ring-[#FD741E]/10 focus:border-[#FD741E]/40 transition-all font-semibold text-white placeholder:text-gray-700 shadow-inner"
                    required
                  />
                </div>
              </div>

              <button 
                 type="submit"
                 disabled={loading}
                 className="w-full mt-10 bg-gradient-to-r from-[#FD741E] to-[#ff8c3a] hover:shadow-[0_0_30px_rgba(253,116,30,0.3)] text-white font-black py-5 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed group"
                 suppressHydrationWarning={true}
              >
                <span className="tracking-[0.2em] uppercase text-sm">{loading ? "Authenticating..." : "Establish Connection"}</span>
                {!loading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
              </button>
              
            </form>

          </div>
          
          <div className="mt-12 flex flex-col items-center gap-3" suppressHydrationWarning={true}>
             <div className="flex items-center gap-2 opacity-40" suppressHydrationWarning={true}>
                <div className="h-[1px] w-8 bg-white/20" suppressHydrationWarning={true}></div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em]">Secure Node</p>
                <div className="h-[1px] w-8 bg-white/20" suppressHydrationWarning={true}></div>
             </div>
             
             <p className="text-center text-[10px] text-gray-700 font-bold uppercase tracking-widest" suppressHydrationWarning={true}>
               &copy; {new Date().getFullYear()} Crossover Fintech Support
             </p>
          </div>

        </motion.div>
      </div>
    </HydrationGuard>
  )
}
