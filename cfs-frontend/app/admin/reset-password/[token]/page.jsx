"use client"
import { useRouter, useParams } from "next/navigation";
import { Lock, ArrowRight, AlertTriangle, CheckCircle2, ShieldCheck, KeyRound } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import api from "@/utils/api";
import HydrationGuard from "@/components/Common/HydrationGuard";

export default function ResetPassword() {
  const router = useRouter();
  const params = useParams();
  const token = params.token;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const { data } = await api.put(`/auth/resetpassword/${token}`, { password });
      if (data.success) {
        setSuccess("Password updated successfully!");
        setTimeout(() => {
          router.push('/admin/login');
        }, 3000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Token is invalid or has expired');
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

            <div className="mb-10 text-center flex flex-col items-center" suppressHydrationWarning={true}>
              <div className="w-20 h-20 bg-gradient-to-tr from-[#FD741E] to-[#ffa569] rounded-[1.75rem] flex items-center justify-center shadow-2xl shadow-[#FD741E]/20 mb-8" suppressHydrationWarning={true}>
                 <KeyRound className="text-white" size={36} />
              </div>
              <h1 className="text-3xl font-black text-white tracking-tight mb-3" suppressHydrationWarning={true}>Secure Reset</h1>
              <p className="text-gray-500 text-[13px] font-bold uppercase tracking-widest leading-relaxed" suppressHydrationWarning={true}>Define a strong new master password</p>
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

              {success && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-8 bg-green-500/10 border border-green-500/20 rounded-2xl p-4 flex items-center gap-4 overflow-hidden"
                  suppressHydrationWarning={true}
                >
                   <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                   <p className="text-xs font-bold text-green-500">{success}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {!success ? (
              <form className="space-y-6" onSubmit={handleSubmit} suppressHydrationWarning={true}>
                
                <div className="space-y-3" suppressHydrationWarning={true}>
                  <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest ml-1">New Password</label>
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

                <div className="space-y-3" suppressHydrationWarning={true}>
                  <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest ml-1">Confirm Password</label>
                  <div className="relative group" suppressHydrationWarning={true}>
                    <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none" suppressHydrationWarning={true}>
                      <ShieldCheck size={18} className="text-gray-600 group-focus-within:text-[#FD741E] transition-colors" />
                    </div>
                    <input 
                      type="password" 
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••••••" 
                      className="w-full pl-14 pr-7 py-5 bg-white/[0.03] border border-white/5 rounded-2xl text-[14px] focus:bg-white/[0.07] focus:outline-none focus:ring-4 focus:ring-[#FD741E]/10 focus:border-[#FD741E]/40 transition-all font-semibold text-white placeholder:text-gray-700 shadow-inner"
                      required
                    />
                  </div>
                </div>

                <button 
                   type="submit"
                   disabled={loading}
                   className="w-full mt-4 bg-gradient-to-r from-[#FD741E] to-[#ff8c3a] text-white font-black py-5 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] border border-white/10 disabled:opacity-50 group"
                   suppressHydrationWarning={true}
                >
                  <span className="tracking-[0.2em] uppercase text-sm">{loading ? "Updating..." : "Establish New Password"}</span>
                  {!loading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            ) : (
                <div className="pt-4 text-center" suppressHydrationWarning={true}>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Redirecting to login portal...</p>
                    <div className="mt-6 w-full h-1 bg-white/5 rounded-full overflow-hidden" suppressHydrationWarning={true}>
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 3 }}
                            className="h-full bg-[#FD741E]"
                        />
                    </div>
                </div>
            )}

          </div>
          
          <div className="mt-12 flex flex-col items-center gap-3" suppressHydrationWarning={true}>
             <p className="text-center text-[10px] text-gray-700 font-bold uppercase tracking-widest" suppressHydrationWarning={true}>
               Verifying Node Security Protocol
             </p>
          </div>

        </motion.div>
      </div>
    </HydrationGuard>
  )
}
