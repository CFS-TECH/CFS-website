"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  User,
  Mail,
  AtSign,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Lock,
} from "lucide-react";
import Image from "next/image";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState(1); // 1: Details, 2: OTP
  const [loading, setLoading] = useState(false);

  const handleSendOTP = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API Call
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  return (
    <section className="fixed top-0 right-0 w-full h-screen z-[100] bg-[#fafafa]">
      <section className="min-h-full flex items-center justify-center p-4 relative overflow-hidden">
        
        {/* Animated Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md relative z-10"
        >
          {/* Logo Section */}
          <div className="flex flex-col items-center mb-8">
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 mb-4"
            >
              <img
                src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496900/cfs_assets/logo.png"
                alt="Crossover Fintech Logo"
                className="w-48 h-auto object-contain"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 px-4 py-1.5 bg-[#102a43]/5 rounded-full border border-[#102a43]/10"
            >
              <Lock size={14} className="text-[#102a43]" />
              <span className="text-[10px] font-black text-[#102a43] uppercase tracking-[0.2em]">Secure Admin Access</span>
            </motion.div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(9,74,132,0.15)] border border-gray-100 overflow-hidden">
            {/* Top Toggle Section */}
            <div className="flex p-1.5 bg-gray-50/80 m-6 rounded-2xl border border-gray-100">
              <button
                onClick={() => {
                  setIsLogin(true);
                  setStep(1);
                }}
                className={`flex-1 py-3 text-xs font-black uppercase tracking-wider rounded-xl transition-all ${isLogin ? "bg-white text-[#102a43] shadow-sm border border-gray-100" : "text-gray-400 font-bold"}`}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsLogin(false);
                  setStep(1);
                }}
                className={`flex-1 py-3 text-xs font-black uppercase tracking-wider rounded-xl transition-all ${!isLogin ? "bg-white text-[#102a43] shadow-sm border border-gray-100" : "text-gray-400 font-bold"}`}
              >
                Register
              </button>
            </div>

            <div className="px-8 pb-10">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-black text-[#102a43] mb-2 tracking-tight">
                  {step === 1
                    ? isLogin
                      ? "Welcome Back"
                      : "Partner Portal"
                    : "Security Code"}
                </h2>
                <p className="text-gray-400 text-sm font-medium">
                  {step === 1
                    ? isLogin ? "Manage your fintech ecosystem securely" : "Join the Crossover Fintech network"
                    : "Enter the code sent to your verified device"}
                </p>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.form
                    key="details"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    onSubmit={handleSendOTP}
                    className="space-y-4"
                  >
                    {!isLogin && (
                      <>
                        <div className="relative group">
                          <User
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors"
                            size={18}
                          />
                          <input
                            type="text"
                            placeholder="Organization / Full Name"
                            required
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#102a43] focus:bg-white outline-none transition-all text-sm font-semibold"
                          />
                        </div>
                        <div className="relative group">
                          <Mail
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors"
                            size={18}
                          />
                          <input
                            type="email"
                            placeholder="Official Email Address"
                            required
                            className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#102a43] focus:bg-white outline-none transition-all text-sm font-semibold"
                          />
                        </div>
                      </>
                    )}
                    <div className="relative group">
                      <Smartphone
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-orange-500 transition-colors"
                        size={18}
                      />
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        required
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:border-[#102a43] focus:bg-white outline-none transition-all text-sm font-semibold"
                      />
                    </div>

                    <button
                      disabled={loading}
                      className="w-full py-4 bg-[#102a43] text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-[#0d2236] transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center gap-2 group"
                    >
                      {loading ? "Authenticating..." : "Continue Access"}
                      {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </motion.form>
                ) : (
                  <motion.form
                    key="otp"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <div className="flex justify-between gap-2 md:gap-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <input
                          key={i}
                          type="text"
                          maxLength="1"
                          className="w-full h-14 text-center text-xl font-black bg-gray-50 border border-gray-100 rounded-xl focus:border-orange-500 focus:bg-white outline-none transition-all shadow-sm"
                        />
                      ))}
                    </div>

                    <button className="w-full py-4 bg-orange-500 text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/10 flex items-center justify-center gap-2">
                      Verify Identity
                      <ShieldCheck size={18} />
                    </button>

                    <div className="text-center">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs font-bold text-gray-400 hover:text-[#102a43] transition-colors flex items-center justify-center gap-2 mx-auto"
                      >
                        Correct your details?
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Trust Section */}
              <div className="mt-10 pt-8 border-t border-gray-50 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="flex flex-col items-center gap-1 text-[8px] font-black text-gray-400 uppercase tracking-[0.2em]">
                  <ShieldCheck size={20} className="mb-1 text-[#102a43]" /> Enterprise Grade
                </div>
                <div className="flex flex-col items-center gap-1 text-[8px] font-black text-gray-400 uppercase tracking-[0.2em]">
                  <Smartphone size={20} className="mb-1 text-[#102a43]" /> MFA Secured
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">
            Powered by Crossover Fintech Support IT Team
          </p>
        </motion.div>
      </section>
    </section>
  );
};

export default AuthPage;

