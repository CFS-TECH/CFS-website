import React from 'react';
import { Info, Activity, Layers, Settings, Globe, RefreshCcw, Mail, Cookie } from 'lucide-react';

export const metadata = {
  title: 'Cookies Policy | Crossover Fintech Support',
  description: 'Cookies Policy for Crossover Fintech Support explaining how we use cookies to improve your browsing experience.',
};

const CookiesPolicy = () => {
  const sections = [
    {
      id: 1,
      icon: <Info className="w-6 h-6 text-orange-500" />,
      title: "1. What Are Cookies?",
      content: "Cookies are small text files stored on your device when you visit a website."
    },
    {
      id: 2,
      icon: <Activity className="w-6 h-6 text-orange-500" />,
      title: "2. How We Use Cookies",
      content: "We use cookies to:",
      list: [
        "Ensure proper website functionality",
        "Analyze website traffic and user behavior",
        "Improve user experience"
      ]
    },
    {
      id: 3,
      icon: <Layers className="w-6 h-6 text-orange-500" />,
      title: "3. Types of Cookies We Use",
      content: "",
      list: [
        "Essential Cookies: Necessary for website functionality",
        "Performance Cookies: Help us understand user interaction",
        "Functional Cookies: Store user preferences"
      ]
    },
    {
      id: 4,
      icon: <Settings className="w-6 h-6 text-orange-500" />,
      title: "4. Managing Cookies",
      content: "You can manage or disable cookies through your browser settings. Disabling cookies may impact website performance."
    },
    {
      id: 5,
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: "5. Third-Party Cookies",
      content: "We may use third-party services (such as analytics tools) that use cookies."
    },
    {
      id: 6,
      icon: <RefreshCcw className="w-6 h-6 text-orange-500" />,
      title: "6. Updates to Policy",
      content: "We may update this Cookies Policy periodically. Changes will be posted on this page."
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
            <Cookie className="w-4 h-4 text-orange-400" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight">
            Cookies Policy
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light">
            How we use cookies to improve your browsing experience
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
            Crossover Fintech Support Pvt. Ltd. uses cookies and similar technologies to improve your browsing experience.
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
                  {section.content && (
                    <p className="text-gray-600 leading-relaxed text-lg mb-4">
                      {section.content}
                    </p>
                  )}
                  {section.list && (
                    <ul className="space-y-3">
                      {section.list.map((item, index) => {
                        // For bolding "Essential Cookies:" etc.
                        const colonIndex = item.indexOf(':');
                        if (colonIndex > -1 && colonIndex < 30) {
                          const title = item.substring(0, colonIndex + 1);
                          const desc = item.substring(colonIndex + 1);
                          return (
                            <li key={index} className="flex items-start gap-3">
                              <span className="min-w-[6px] h-[6px] rounded-full bg-orange-500 mt-2.5"></span>
                              <span className="text-gray-600 text-lg leading-relaxed">
                                <strong className="text-[#102A43]">{title}</strong>{desc}
                              </span>
                            </li>
                          );
                        }

                        return (
                          <li key={index} className="flex items-start gap-3">
                            <span className="min-w-[6px] h-[6px] rounded-full bg-orange-500 mt-2.5"></span>
                            <span className="text-gray-600 text-lg leading-relaxed">{item}</span>
                          </li>
                        );
                      })}
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
                <h2 className="text-2xl font-bold text-[#102A43]">7. Contact Information</h2>
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

export default CookiesPolicy;
