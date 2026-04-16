import React from 'react';
import { ShieldCheck, UserCheck, Lock, Share2, Cookie, Scale, RefreshCcw, Mail } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Crossover Fintech Support',
  description: 'Privacy Policy for Crossover Fintech Support describing how we collect, use, and safeguard your data.',
};

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 1,
      icon: <UserCheck className="w-6 h-6 text-orange-500" />,
      title: "1. Information We Collect",
      content: "We may collect personal information such as your name, phone number, email address, financial details, and other information required to process your loan application."
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-6 h-6 text-orange-500" />,
      title: "2. How We Use Your Information",
      content: "We use your information to:",
      list: [
        "Process and evaluate loan applications",
        "Provide customer support",
        "Improve our services",
        "Send updates, offers, or important notifications"
      ]
    },
    {
      id: 3,
      icon: <Lock className="w-6 h-6 text-orange-500" />,
      title: "3. Data Protection",
      content: "We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, misuse, or disclosure."
    },
    {
      id: 4,
      icon: <Share2 className="w-6 h-6 text-orange-500" />,
      title: "4. Sharing of Information",
      content: "We do not sell your personal data. However, we may share your information with:",
      list: [
        "Financial institutions and lending partners",
        "Service providers for operational support",
        "Legal authorities if required by law"
      ]
    },
    {
      id: 5,
      icon: <Cookie className="w-6 h-6 text-orange-500" />,
      title: "5. Cookies",
      content: "We use cookies to enhance user experience and analyze website traffic."
    },
    {
      id: 6,
      icon: <Scale className="w-6 h-6 text-orange-500" />,
      title: "6. Your Rights",
      content: "You have the right to access, update, or request deletion of your personal data."
    },
    {
      id: 7,
      icon: <RefreshCcw className="w-6 h-6 text-orange-500" />,
      title: "7. Changes to Policy",
      content: "We may update this Privacy Policy from time to time. Updates will be posted on this page."
    }
  ];

  return (
    <main className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Hero Header Section */}
      <section className="relative w-full h-[350px] bg-[#102A43] flex items-center justify-center overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500 rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-sky-500 rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4 text-orange-400" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light">
            How we protect your data at Crossover Fintech Support
          </p>
        </div>
      </section>

      {/* Main Content Box */}
      <section className="max-w-4xl mx-auto -mt-16 relative z-20 px-4 md:px-0">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-gray-200 mb-8 gap-4">
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Last Updated</p>
              <p className="text-[#102A43] font-semibold mt-1">March 28, 2026</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Company</p>
              <p className="text-[#102A43] font-semibold mt-1">Crossover Fintech Support Pvt. Ltd.</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Crossover Fintech Support Pvt. Ltd. is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
          </p>

          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.id} className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-orange-50 group-hover:bg-orange-100 transition-colors">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-[#102A43]">{section.title}</h2>
                </div>
                <div className="pl-[72px]">
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="space-y-3">
                      {section.list.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="min-w-[6px] h-[6px] rounded-full bg-orange-500 mt-2.5"></span>
                          <span className="text-gray-600 text-lg leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}

            {/* Contact Information */}
            <div className="group pt-8 border-t border-gray-200 mt-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[#102A43]/5 group-hover:bg-[#102A43]/10 transition-colors">
                  <Mail className="w-6 h-6 text-[#102A43]" />
                </div>
                <h2 className="text-2xl font-bold text-[#102A43]">8. Contact Information</h2>
              </div>
              <div className="pl-[72px]">
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100 shadow-sm text-gray-600 text-lg">
                  <p className="font-semibold text-[#102A43] mb-3">Crossover Fintech Support Pvt. Ltd.</p>
                  <div className="space-y-2">
                    <p><strong className="text-gray-800">GST No:</strong> 09AALCC2007R1Z9</p>
                    <p><strong className="text-gray-800">Office Address:</strong> D-60, Sector-2, Noida, Uttar Pradesh, India</p>
                    <p><strong className="text-gray-800">Email:</strong> <a href="mailto:support@crossoverfintech.com" className="text-orange-600 hover:text-orange-500 underline underline-offset-4 decoration-orange-200">support@crossoverfintech.com</a></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
