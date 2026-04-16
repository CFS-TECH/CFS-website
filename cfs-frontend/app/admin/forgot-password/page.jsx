"use client"
import Link from "next/link";
import { Mail, ArrowRight, AlertTriangle, CheckCircle2, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import api from "@/utils/api";
import HydrationGuard from "@/components/Common/HydrationGuard";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const { data } = await api.post('/auth/forgotpassword', { email });
      if (data.success) {
        setSuccess("Recovery link sent! Check your inbox.");
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Could not send recovery email');
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
              <div className="w-20 h-20 bg-gradient-to-tr from-[#FD741E]/20 to-[#ffa569]/20 rounded-[1.75rem] flex items-center justify-center border border-[#FD741E]/30 mb-8" suppressHydrationWarning={true}>
                 <Mail className="text-[#FD741E]" size={36} />
              </div>
              <h1 className="text-3xl font-black text-white tracking-tight mb-3" suppressHydrationWarning={true}>Password Recovery</h1>
              <p className="text-gray-500 text-[13px] font-bold uppercase tracking-widest px-4 leading-relaxed" suppressHydrationWarning={true}>Enter your email to receive a secure reset link</p>
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
                  <label className="text-[11px] font-black text-gray-500 uppercase tracking-widest ml-1">Admin Email</label>
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

                <button 
                   type="submit"
                   disabled={loading}
                   className="w-full mt-4 bg-gradient-to-r from-[#FD741E] to-[#ff8c3a] text-white font-black py-5 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] border border-white/10 disabled:opacity-50 group"
                   suppressHydrationWarning={true}
                >
                  <span className="tracking-[0.2em] uppercase text-sm">{loading ? "Sending..." : "Send Reset Link"}</span>
                  {!loading && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            ) : (
                <div className="pt-4" suppressHydrationWarning={true}>
                    <p className="text-center text-gray-500 text-xs font-medium mb-8">Didn't receive the email? Check your spam folder or try again.</p>
                    <button 
                        onClick={() => setSuccess("")}
                        className="w-full py-4 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors text-xs font-black uppercase tracking-widest"
                    >
                        Try Different Email
                    </button>
                </div>
            )}

            <div className="mt-10 pt-8 border-t border-white/5 flex justify-center" suppressHydrationWarning={true}>
               <Link href="/admin/login" className="flex items-center gap-2 text-[10px] font-black text-gray-500 hover:text-[#FD741E] transition-all uppercase tracking-widest group">
                  <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Login
               </Link>
            </div>

          </div>
          
          <div className="mt-12 flex flex-col items-center gap-3" suppressHydrationWarning={true}>
             <p className="text-center text-[10px] text-gray-700 font-bold uppercase tracking-widest" suppressHydrationWarning={true}>
               &copy; {new Date().getFullYear()} Crossover Fintech Support
             </p>
          </div>

        </motion.div>
      </div>
    </HydrationGuard>
  )
}
