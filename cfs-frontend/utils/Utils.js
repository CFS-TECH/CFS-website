import {
  Code2,
  Smartphone,
  Megaphone,
  Search,
  Headset,
  CreditCard,
  Monitor,
  Gamepad2,
  Settings,
  Briefcase,
  User,
  Car,
  GraduationCap,
  Building2,
  Users,
  BarChart3,
  Wallet,
  ShieldCheck,
  Cpu,
  BrainCircuit,
} from "lucide-react";

export const ourService = [
  {
    servicesName: "Web Development",
    category: "IT Services",
    icon: <Code2 className="w-8 h-8 text-blue-500" />,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
    description:
      "High-performance, responsive websites built with React and Next.js for a seamless user experience.",
    link: "/services/web-development",
  },
  {
    servicesName: "App Development",
    category: "IT Services",
    icon: <Smartphone className="w-8 h-8 text-purple-500" />,
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop",
    description:
      "Intuitive iOS and Android apps using Flutter and Native tech to turn ideas into mobile reality.",
    link: "/services/application-development",
  },
  {
    servicesName: "Game Development",
    category: "IT Services",
    icon: <Gamepad2 className="w-8 h-8 text-red-500" />,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
    description:
      "Engaging, high-fidelity gaming experiences built with modern 3D frameworks for the next generation.",
    link: "/services/game-development",
  },
  {
    servicesName: "Digital Marketing",
    category: "Marketing",
    icon: <Megaphone className="w-8 h-8 text-orange-500" />,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    description:
      "Strategic multi-channel campaigns and data-driven PPC to scale your brand effectively.",
    link: "/services/digital-marketing",
  },
  {
    servicesName: "SEO & Content",
    category: "Marketing",
    icon: <Search className="w-8 h-8 text-green-500" />,
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=600&auto=format&fit=crop",
    description:
      "Technical SEO and high-quality content strategies to dominate search results and gain visibility.",
    link: "/services/seo",
  },
  {
    servicesName: "Business Process",
    category: "Operations",
    icon: <Headset className="w-8 h-8 text-teal-500" />,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=600&auto=format&fit=crop",
    description:
      "Scalable customer support, backend operations, and outreach solutions to optimize your enterprise workflow.",
    link: "/services/customer-support-outsourcing",
  },
];

import { FaBanSmoking, FaHireAHelper } from "react-icons/fa6";

export const WhyChooseData = [
  {
    id: 1,
    title: "Engineering Excellence",
    icon: <Cpu size={32} className="w-full h-full p-2" strokeWidth={1.5} />,
    bg: "#FE741F",
    description:
      "Delivering innovative technology solutions and high-performance software architecture designed for enterprise scale.",
  },
  {
    id: 2,
    title: "Secure & Compliant",
    icon: (
      <ShieldCheck size={32} className="w-full h-full p-2" strokeWidth={1.5} />
    ),
    bg: "#0F2B46",
    description:
      "Protecting business assets through rigorous security protocols and strict global regulatory compliance standards.",
  },
  {
    id: 3,
    title: "Operational Logistics",
    icon: (
      <BarChart3 size={32} className="w-full h-full p-2" strokeWidth={1.5} />
    ),
    bg: "#0F2B46",
    description:
      "Optimizing complex business workflows to deliver measurable results and seamless organizational efficiency.",
  },
  {
    id: 4,
    title: "Capital Support",
    icon: <Wallet size={32} className="w-full h-full p-2" strokeWidth={1.5} />,
    bg: "#0F2B46", // Navy
    description:
      "Providing strategic financial frameworks to drive sustainable growth and infrastructure development.",
  },
];

const IndustriesServeData = [
  {
    icon: <FaHireAHelper />,
    name: "Hiring & Staffing",
    description:
      "End-to-end recruitment solutions for permanent and contract roles.",
    link: "/career-page",
  },
  {
    icon: "",
    name: "Banking & Financial Services",
    description:
      "End-to-end recruitment solutions for permanent and contract roles.",
    link: "/career-page",
  },
  {
    icon: <FaHireAHelper />,
    name: "Hiring & Staffing",
    description:
      "End-to-end recruitment solutions for permanent and contract roles.",
    link: "/career-page",
  },
];

export const latestBlog = [
  {
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1000",
    author: {
      name: "by Admin",
      email: "admin@gmail.com",
    },
    title:
      "What is Blockchain Technology How to Use in Future?,What is Blockchain Technology How to Use in Future?",
    createAt: "2026-02-03T02:51:06.067+00:00",
    slug: "what-is-blockchain-technology-future-use",
    category: "Technology",
  },
  {
    image:
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000",
    author: {
      name: "by Admin",
      email: "admin@gmail.com",
    },
    title: "Top 10 Cryptocurrency Trends to Watch in 2026",
    createAt: "2026-02-10T10:15:00.000+00:00",
    slug: "crypto-trends-2026",
    category: "Finance",
  },
  {
    image:
      "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&q=80&w=1000",
    author: {
      name: "by Admin",
      email: "admin@gmail.com",
    },
    title: "Understanding Smart Contracts: A Complete Guide",
    createAt: "2026-02-14T14:20:30.000+00:00",
    slug: "understanding-smart-contracts-guide",
    category: "Development",
  },
  {
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=1000",
    author: {
      name: "by Admin",
      email: "admin@gmail.com",
    },
    title: "The Impact of Web 3.0 on Digital Marketing",
    createAt: "2026-02-17T09:45:12.000+00:00",
    slug: "web-3-impact-digital-marketing",
    category: "Marketing",
  },
];

export const servicesData = [
  {
    mainServiceName: "IT Services",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
    title: "Crossover Fintech Support: Architecting Digital Ecosystems",
    description:
      "As a growth-oriented digital partner, we operate as a Website Development Company and Custom Software Development Company, delivering scalable and modern technology solutions.",
    ServicesName: [
      {
        name: "Web Development",
        link: "/services/web-development",
        icon: <Monitor size={20} />,
        description:
          "Secure, scalable MERN stack platforms tailored for financial services.",
      },
      {
        name: "Software Development",
        link: "/services/application-development",
        icon: <Smartphone size={20} />,
        description:
          "Custom mobile and web apps with robust API integrations and AI capabilities.",
      },
      {
        name: "Game Development",
        link: "/services/game-development",
        icon: <Gamepad2 size={20} />,
        description:
          "Engaging, high-fidelity gaming experiences built with modern web engines.",
      },
      {
        name: "Digital Marketing",
        link: "/services/digital-marketing",
        icon: <Megaphone size={20} />,
        description:
          "Data-driven growth campaigns to dominate your market niche.",
      },
      {
        name: "SEO Optimization",
        link: "/services/seo",
        icon: <Search size={20} />,
        description:
          "Technical search engine optimization to ensure high-visibility and authority.",
      },
    ],
  },
  {
    mainServiceName: "Financial Solution",
    image:
      "https://www.monaco.edu/wp-content/uploads/sites/4/2023/09/bannerfinanceexecutiveprograms.jpg",
    title: "Financial Solutions",
    description:
      "We provide professional financial coordination services with a focus on structured funding assistance",
    ServicesName: [
      {
        name: "Business Loan",
        link: "/services/business-loan",
        icon: <Briefcase size={20} />,
        description:
          "Strategic capital support to scale your business operations and infrastructure.",
      },
      {
        name: "Personal Loan",
        link: "/services/personal-loan",
        icon: <User size={20} />,
        description:
          "Quick and hassle-free financial assistance for your personal milestones.",
      },
      {
        name: "Vehicle Loan",
        link: "/services/vehicle-loan",
        icon: <Car size={20} />,
        description:
          "Tailored EMI options to help you drive home your dream vehicle with ease.",
      },

      {
        name: "Property Loan",
        link: "/services/property-loan",
        icon: <Building2 size={20} />,
        description:
          "Unlock the value of your assets with secure loans against property.",
      },
    ],
  },
  {
    mainServiceName: "Business Support Services",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    title: "Business Support Services",
    description:
      "As a professional BPO Service Provider, we deliver structured Business Support Services designed to enhance workforce management and customer operations.",
    ServicesName: [
      {
        name: "Bulk Hiring Services",
        link: "/services/bulk-hiring-services",
        icon: <Settings size={20} />,
        description:
          "Large-scale recruitment, screening, onboarding, and structured workforce deployment to meet organizational expansion needs.",
      },
      {
        name: "Customer Support Outsourcing",
        link: "/services/customer-support-outsourcing",
        icon: <BrainCircuit size={20} />,
        description:
          "Complete management of inbound and outbound customer communication processes, ensuring consistent service quality and operational efficiency.",
      },
      {
        name: "Telecalling & Outreach Support",
        link: "/services/Telecalling-and-Outreach-Support",
        icon: <BarChart3 size={20} />,
        description:
          "Dedicated telecalling teams for structured customer interaction, follow-ups, and engagement campaigns.",
      },
      {
        name: "Backend & Administrative Support",
        link: "/services/Backend-and-Administrative-Support",
        icon: <BarChart3 size={20} />,
        description:
          "Documentation handling, CRM updates, process coordination, and operational data management.",
      },
      {
        name: "CRM Management & Reporting",
        link: "/services/CRM-Management-and-Reporting",
        icon: <BarChart3 size={20} />,
        description:
          "Customer data tracking, structured reporting systems, and performance monitoring for improved decision-making.",
      },
    ],
  },
];

export const internships = [
  {
    id: 1,
    hiringStatus: "Actively hiring",
    title: "Subject Matter Expert (SME)",
    company: "Scaler",
    location: "Work From Home",
    stipend: "₹ 24,000 - 35,000 /month",
    duration: "6 Months",
    type: "Internship",
    mode: "Full-Time",
    workType: "Remote",
    level: "Fresher",
    sector: "Education", // Maps to Education Loan / Business Support
  },
  {
    id: 2,
    hiringStatus: "Actively hiring",
    title: "Frontend Developer Intern",
    company: "Crossover Fintech Support",
    location: "Bangalore",
    stipend: "₹ 20,000 - 30,000 /month",
    duration: "6 Months",
    type: "Internship",
    mode: "Full-Time",
    workType: "On-Site",
    level: "Fresher",
    sector: "IT Services", // Maps to Web Development
  },
  {
    id: 3,
    hiringStatus: "Actively hiring",
    title: "Backend Developer Intern",
    company: "CodeSphere",
    location: "Work From Home",
    stipend: "₹ 25,000 - 40,000 /month",
    duration: "6 Months",
    type: "Internship",
    mode: "Part-Time",
    workType: "Remote",
    level: "Mid-Level",
    sector: "IT Services", // Maps to Application Development
  },
  {
    id: 4,
    hiringStatus: "Actively hiring",
    title: "UI/UX Design Intern",
    company: "PixelCraft",
    location: "Delhi",
    stipend: "₹ 18,000 - 28,000 /month",
    duration: "6 Months",
    type: "Internship",
    mode: "Part-Time",
    workType: "On-Site",
    level: "Fresher",
    sector: "IT Services", // Maps to Web Design/Development
  },
  {
    id: 5,
    hiringStatus: "Actively hiring",
    title: "MERN Stack Developer Intern",
    company: "WebGenix",
    location: "Work From Home",
    stipend: "₹ 30,000 - 45,000 /month",
    duration: "6 Months",
    type: "Internship",
    mode: "Full-Time",
    workType: "Remote",
    level: "Mid-Level",
    sector: "IT Services", // Maps to MERN Stack Solutions
  },
  {
    id: 6,
    hiringStatus: "Actively hiring",
    title: "Market Research Intern",
    company: "DataCraft Labs",
    location: "Hyderabad",
    stipend: "₹ 22,000 - 32,000 /month",
    duration: "4 Months",
    type: "Internship",
    mode: "Full-Time",
    workType: "On-Site",
    level: "Fresher",
    sector: "Business", // Maps to Market Analysis
  },
  {
    id: 7,
    hiringStatus: "Actively hiring",
    title: "React Developer Intern",
    company: "AppVerse",
    location: "Work From Home",
    stipend: "₹ 26,000 - 38,000 /month",
    duration: "5 Months",
    type: "Internship",
    mode: "Part-Time",
    workType: "Remote",
    level: "Fresher",
    sector: "IT Services",
  },
  {
    id: 8,
    hiringStatus: "Actively hiring",
    title: "Digital Marketing Intern",
    company: "BrandBoost",
    location: "Mumbai",
    stipend: "₹ 15,000 - 25,000 /month",
    duration: "3 Months",
    type: "Internship",
    mode: "Part-Time",
    workType: "On-Site",
    level: "Fresher",
    sector: "IT Services", // Maps to Digital Marketing
  },
  {
    id: 9,
    hiringStatus: "Actively hiring",
    title: "Operations Intern",
    company: "CloudNest",
    location: "Work From Home",
    stipend: "₹ 28,000 - 42,000 /month",
    duration: "6 Months",
    type: "Internship",
    mode: "Full-Time",
    workType: "Remote",
    level: "Mid-Level",
    sector: "Business Support", // Maps to Backend Support
  },
  {
    id: 10,
    hiringStatus: "Actively hiring",
    title: "Finance & Accounts Intern",
    company: "CreativeHive",
    location: "Pune",
    stipend: "₹ 17,000 - 26,000 /month",
    duration: "4 Months",
    type: "Internship",
    mode: "Part-Time",
    workType: "On-Site",
    level: "Fresher",
    sector: "Financial Solution", // Maps to Financial Solutions
  },
];
export const jobPostData = [
  {
    id: 1,
    hiringStatus: "Actively hiring",
    title: "Senior Backend Developer",
    company: "Scaler",
    location: "Bangalore",
    salary: "₹ 12,00,000 - 18,00,000 /year",
    experience: "3-5 Years",
    type: "Job",
    mode: "Contract",
    workType: "On-Site",
    level: "Experienced",
    sector: "IT Services", // Linked to IT Services
  },
  {
    id: 2,
    hiringStatus: "Actively hiring",
    title: "Frontend React Developer",
    company: "Crossover Fintech Support",
    location: "Work From Home",
    salary: "₹ 8,00,000 - 12,00,000 /year",
    experience: "2-4 Years",
    type: "Job",
    mode: "Full-Time",
    workType: "Remote",
    level: "Experienced",
    sector: "IT Services", // Linked to Web Development
  },
  {
    id: 3,
    hiringStatus: "Actively hiring",
    title: "Full Stack Developer (MERN)",
    company: "CodeSphere",
    location: "Hyderabad",
    salary: "₹ 10,00,000 - 16,00,000 /year",
    experience: "2-5 Years",
    type: "Job",
    mode: "Full-Time",
    workType: "Hybrid",
    level: "Experienced",
    sector: "IT Services", // Linked to Architecting Digital Ecosystems
  },
  {
    id: 4,
    hiringStatus: "Actively hiring",
    title: "Loan Processing Officer",
    company: "FinanceFlow",
    location: "Delhi",
    salary: "₹ 6,00,000 - 9,00,000 /year",
    experience: "1-3 Years",
    type: "Job",
    mode: "Full-Time",
    workType: "On-Site",
    level: "Mid-Level",
    sector: "Financial Solution", // Linked to Loans (Business/Personal)
  },
  {
    id: 5,
    hiringStatus: "Actively hiring",
    title: "DevOps Engineer",
    company: "WebGenix",
    location: "Work From Home",
    salary: "₹ 14,00,000 - 20,00,000 /year",
    experience: "3-6 Years",
    type: "Job",
    mode: "Full-Time",
    workType: "Remote",
    level: "Experienced",
    sector: "IT Services", // Linked to Application Development
  },
  {
    id: 6,
    hiringStatus: "Actively hiring",
    title: "AI Strategy Consultant",
    company: "DataCraft Labs",
    location: "Mumbai",
    salary: "₹ 15,00,000 - 22,00,000 /year",
    experience: "2-5 Years",
    type: "Job",
    mode: "Full-Time",
    workType: "Hybrid",
    level: "Experienced",
    sector: "Business", // Linked to AI Strategy & Innovation
  },
  {
    id: 7,
    hiringStatus: "Closed hiring",
    title: "Customer Support Executive",
    company: "AppVerse",
    location: "Pune",
    salary: "₹ 4,00,000 - 6,00,000 /year",
    experience: "0-2 Years",
    type: "Job",
    mode: "Full-Time",
    workType: "On-Site",
    level: "Fresher",
    sector: "Business Support", // Linked to Customer Support
  },
  {
    id: 8,
    hiringStatus: "Actively hiring",
    title: "Digital Marketing Specialist",
    company: "BrandBoost",
    location: "Work From Home",
    salary: "₹ 7,00,000 - 11,00,000 /year",
    experience: "2-5 Years",
    type: "Job",
    mode: "Part Time",
    workType: "Remote",
    level: "Experienced",
    sector: "IT Services", // Linked to Digital Marketing service
  },
  {
    id: 9,
    hiringStatus: "Actively hiring",
    title: "Financial Analyst",
    company: "CloudNest",
    location: "Bangalore",
    salary: "₹ 13,00,000 - 19,00,000 /year",
    experience: "3-6 Years",
    type: "Job",
    mode: "Full-Time",
    workType: "Hybrid",
    level: "Experienced",
    sector: "Financial Solution", // Linked to Capital Solutions
  },
  {
    id: 10,
    hiringStatus: "Actively hiring",
    title: "Talent Acquisition Specialist",
    company: "CreativeHive",
    location: "Chennai",
    salary: "₹ 5,00,000 - 8,00,000 /year",
    experience: "1-3 Years",
    type: "Job",
    mode: "Full-Time",
    workType: "On-Site",
    level: "Mid-Level",
    sector: "Business Support", // Linked to Bulk Hiring
  },
];
