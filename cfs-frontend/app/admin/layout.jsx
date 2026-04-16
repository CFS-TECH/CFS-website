"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  FileText, 
  Briefcase, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  Bell, 
  Search,
  ChevronDown,
  TrendingUp
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    const isPublicAdminRoute = 
      pathname === '/admin/login' || 
      pathname.startsWith('/admin/forgot-password') || 
      pathname.startsWith('/admin/reset-password');
    
    // Auth Protection Check
    if (!isPublicAdminRoute) {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        router.push('/admin/login');
      } else {
        setCheckingAuth(false);
      }
    } else {
      setCheckingAuth(false);
    }
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminProfile');
    
    // Clear cookie for middleware protection
    document.cookie = "adminToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    
    router.push('/admin/login');
  };

  // If we are on a public admin page (login, forgot pass, etc.), don't show the sidebar and topbar
  const isPublicAdminRoute = 
    pathname === '/admin/login' || 
    pathname.startsWith('/admin/forgot-password') || 
    pathname.startsWith('/admin/reset-password');

  if (isPublicAdminRoute) {
    return <div className="dark bg-[#08121f] text-gray-100 min-h-screen" suppressHydrationWarning={true}>{children}</div>;
  }

  const navLinks = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Blogs', href: '/admin/blogs', icon: FileText },
    { name: 'Services', href: '/admin/services', icon: Briefcase },
    { name: 'Insights', href: '/admin/insights', icon: TrendingUp },
    { name: 'Careers', href: '/admin/careers', icon: Briefcase },
    { name: 'Applications', href: '/admin/applications', icon: Users },
    { name: 'Leads', href: '/admin/leads', icon: Users },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  if (!mounted || checkingAuth) {
    return (
      <div className="min-h-screen bg-[#102A43] flex items-center justify-center" suppressHydrationWarning={true}>
        <div className="w-12 h-12 border-4 border-[#FD741E]/20 border-t-[#FD741E] rounded-full animate-spin" suppressHydrationWarning={true}></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080F1A] flex text-gray-200 font-sans selection:bg-[#FD741E]/30 selection:text-white" suppressHydrationWarning={true}>
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#FD741E]/5 blur-[120px]"></div>
        <div className="absolute bottom-[0%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#102A43]/20 blur-[120px]"></div>
      </div>

      {/* Sidebar - Premium Glass Theme */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 280 : 88 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="bg-[#0B1221]/80 backdrop-blur-2xl border-r border-white/5 shadow-2xl flex flex-col h-screen overflow-hidden sticky top-0 left-0 z-30"
      >
        <div className="p-6 flex items-center justify-between border-b border-white/5 h-[80px]">
          <AnimatePresence mode="wait">
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex items-center gap-3"
              >
                <div className="bg-white px-3 py-2 rounded-xl shadow-lg border border-white/5 group-hover:shadow-[#FD741E]/10 transition-all duration-500">
                  <Image
                    src="https://res.cloudinary.com/dcgxjwv68/image/upload/v1775496900/cfs_assets/logo.png"
                    alt="CFS Logo"
                    width={100}
                    height={35}
                    className="w-20 h-auto object-contain"
                    unoptimized={true}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-xl hover:bg-white/5 transition-all text-gray-400 hover:text-[#FD741E]"
          >
            <Menu size={20} />
          </button>
        </div>

        <nav className="flex-1 py-8 px-4 flex flex-col gap-1.5 custom-scrollbar overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link 
                href={link.href} 
                key={link.name}
                title={!sidebarOpen ? link.name : undefined}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group relative ${
                  isActive 
                    ? "text-[#FD741E] bg-white/5 shadow-inner" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="active-indicator"
                    className="absolute left-0 w-1.5 h-6 bg-[#FD741E] rounded-r-full shadow-[0_0_15px_rgba(253,116,30,0.5)]"
                  />
                )}
                <Icon size={20} className={`flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-[#FD741E]" : "text-gray-500 group-hover:text-gray-300"}`} />
                <AnimatePresence>
                  {sidebarOpen && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="truncate font-semibold text-[15px]"
                    >
                      {link.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
           <button 
             onClick={handleLogout}
             className="flex items-center gap-4 px-4 py-4 rounded-2xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 w-full group overflow-hidden"
           >
             <LogOut size={20} className="text-gray-500 flex-shrink-0 group-hover:text-red-400 group-hover:-translate-x-1" />
             <AnimatePresence>
               {sidebarOpen && (
                 <motion.span 
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -10 }}
                   className="truncate font-bold text-[15px]"
                 >
                   Logout
                 </motion.span>
               )}
             </AnimatePresence>
           </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative z-10 w-full" suppressHydrationWarning={true}>
        {/* Top Header - Ultra Modern Glass */}
        <header className="h-[80px] bg-[#080F1A]/40 backdrop-blur-xl border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-20 flex-shrink-0">
           
           <div className="flex items-center gap-4 flex-1">
             <div className="hidden lg:flex flex-1 max-w-md items-center bg-white/5 rounded-2xl px-5 py-3 border border-white/5 focus-within:border-[#FD741E]/50 focus-within:ring-4 focus-within:ring-[#FD741E]/10 transition-all duration-300 group">
                <Search size={18} className="text-gray-500 group-focus-within:text-[#FD741E] transition-colors" />
                <input 
                  type="text" 
                  placeholder="Universal search..." 
                  className="bg-transparent border-none outline-none px-4 w-full text-[14px] text-gray-200 font-medium placeholder:text-gray-600 focus:placeholder:text-gray-500" 
                />
             </div>
           </div>

           <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <button className="relative p-3 text-gray-400 hover:bg-white/5 rounded-2xl transition-all hover:text-white border border-transparent hover:border-white/5">
                  <Bell size={20} />
                  <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-[#FD741E] rounded-full border-2 border-[#0B1221] shadow-[0_0_10px_rgba(253,116,30,0.4)]"></span>
                </button>
                <button className="relative p-3 text-gray-400 hover:bg-white/5 rounded-2xl transition-all hover:text-white border border-transparent hover:border-white/5 lg:hidden">
                  <Menu size={20} />
                </button>
              </div>

              <div className="h-8 w-[1px] bg-white/10 mx-1"></div>

              <Link href="/admin/settings" className="flex items-center gap-4 hover:bg-white/5 rounded-2xl p-1.5 pr-4 transition-all border border-transparent hover:border-white/5 group">
                 <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#FD741E] to-[#ff8c3a] flex items-center justify-center font-black text-sm shadow-lg shadow-[#FD741E]/20 text-white transform group-hover:rotate-6 transition-transform">
                   AD
                 </div>
                 <div className="hidden sm:block text-left">
                   <p className="text-sm font-bold text-white leading-tight group-hover:text-[#FD741E] transition-colors">Admin Profile</p>
                   <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mt-0.5">Administrator</p>
                 </div>
                 <ChevronDown size={16} className="text-gray-600 ml-1 group-hover:text-gray-400 transition-colors" />
              </Link>
           </div>
        </header>

        {/* Dynamic Page Content with Smooth Scrolling */}
        <div className="flex-1 overflow-y-auto w-full custom-scrollbar">
          <div className="px-8 py-10 md:px-12 max-w-[1600px] mx-auto min-h-full">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               suppressHydrationWarning={true}
             >
               {children}
             </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
