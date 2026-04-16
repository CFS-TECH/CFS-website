import React from 'react';
import { FileCheck, ShieldAlert, Copyright, ExternalLink, Scale, RefreshCcw, Mail, UserCog, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Terms & Conditions | Crossover Fintech Support',
  description: 'Terms and Conditions for accessing and using Crossover Fintech Support website and services.',
};

const TermsConditions = () => {
  const sections = [
    {
      id: 1,
      icon: <Briefcase className="w-6 h-6 text-orange-500" />,
      title: "1. Use of Services",
      content: "Our services are intended for individuals who are legally eligible to apply for financial products. You agree to provide accurate and complete information."
    },
    {
      id: 2,
      icon: <FileCheck className="w-6 h-6 text-orange-500" />,
      title: "2. Loan Approval",
      content: "Loan approval is subject to verification, eligibility criteria, and approval by lending partners. We do not guarantee approval for all applications."
    },
    {
      id: 3,
      icon: <UserCog className="w-6 h-6 text-orange-500" />,
      title: "3. User Responsibilities",
      content: "You are responsible for maintaining the confidentiality of your personal information and ensuring its accuracy."
    },
    {
      id: 4,
      icon: <Copyright className="w-6 h-6 text-orange-500" />,
      title: "4. Intellectual Property",
      content: "All content on this website, including text, graphics, logos, and design, is the property of Crossover Fintech Support Pvt. Ltd. and may not be used without permission."
    },
    {
      id: 5,
      icon: <ShieldAlert className="w-6 h-6 text-orange-500" />,
      title: "5. Limitation of Liability",
      content: "We are not liable for any direct or indirect damages resulting from the use of our website or services."
    },
    {
      id: 6,
      icon: <ExternalLink className="w-6 h-6 text-orange-500" />,
      title: "6. Third-Party Links",
      content: "Our website may contain links to third-party websites. We are not responsible for their content or privacy practices."
    },
    {
      id: 7,
      icon: <RefreshCcw className="w-6 h-6 text-orange-500" />,
      title: "7. Modifications",
      content: "We reserve the right to update or modify these terms at any time without prior notice."
    },
    {
      id: 8,
      icon: <Scale className="w-6 h-6 text-orange-500" />,
      title: "8. Governing Law",
      content: "These terms are governed by the laws of India."
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
            <Scale className="w-4 h-4 text-orange-400" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light">
            Guidelines and rules for using Crossover Fintech Support
          </p>
        </div>
      </section>

      {/* Main Content Box */}
      <section className="max-w-4xl mx-auto -mt-16 relative z-20 px-4 md:px-0">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-gray-200 mb-8 gap-4">
            <div>
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Last Updated</p>
              <p className="text-[#102A43] font-semibold mt-1">April 1, 2026</p>
            </div>
            <div className="text-left md:text-right">
              <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Company</p>
              <p className="text-[#102A43] font-semibold mt-1">Crossover Fintech Support Pvt. Ltd.</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            This website is operated by <strong>Crossover Fintech Support Pvt. Ltd.</strong> (GST Number: <strong>09AALCC2007R1Z9</strong>). By accessing or using our website and services, you agree to the following terms:
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
                </div>
              </div>
            ))}

            {/* Contact Information */}
            <div className="group pt-8 border-t border-gray-200 mt-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[#102A43]/5 group-hover:bg-[#102A43]/10 transition-colors">
                  <Mail className="w-6 h-6 text-[#102A43]" />
                </div>
                <h2 className="text-2xl font-bold text-[#102A43]">9. Contact Information</h2>
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

export default TermsConditions;
