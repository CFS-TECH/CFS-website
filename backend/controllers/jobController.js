const JobListing = require('../models/JobListing');

// @desc    Get all active job listings
// @route   GET /api/jobs
// @access  Public
const getJobs = async (req, res) => {
  try {
    const { keyword, type } = req.query;
    let query = { isActive: true };

    if (keyword && keyword.trim() !== "" && keyword.toLowerCase() !== "all") {
      const searchRegex = new RegExp(decodeURIComponent(keyword).trim(), 'i');
      query.$or = [
        { title: { $regex: searchRegex } },
        { category: { $regex: searchRegex } },
        { company: { $regex: searchRegex } }
      ];
    }

    if (type) {
      query.type = type;
    }

    const jobs = await JobListing.find(query).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: jobs.length, data: jobs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create new job listing
// @route   POST /api/jobs
// @access  Private/Admin
const createJob = async (req, res) => {
  try {
    const job = await JobListing.create(req.body);
    res.status(201).json({ success: true, data: job });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Update a job listing
// @route   PUT /api/jobs/:id
// @access  Private/Admin
const updateJob = async (req, res) => {
  try {
    const job = await JobListing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc    Delete a job listing
// @route   DELETE /api/jobs/:id
// @access  Private/Admin
const deleteJob = async (req, res) => {
  try {
    const job = await JobListing.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single job by slug (title)
// @route   GET /api/jobs/slug/:slug
// @access  Public
const getJobBySlug = async (req, res) => {
  try {
    const { slug: rawSlug } = req.params;
    
    // Normalize incoming slug (remove all non-alphanumeric)
    const normalize = (s) => (s || "").toString().toLowerCase().replace(/[^a-z0-9]/g, "");
    const normalizedSlug = normalize(decodeURIComponent(rawSlug));
    
    // Fetch all active jobs
    const jobs = await JobListing.find({ isActive: true });
    
    // Find the job where normalized titles match
    const job = jobs.find(j => normalize(j.title) === normalizedSlug);

    if (!job) {
      console.log(`[DEBUG] No job found for normalized slug: "${normalizedSlug}" (Original: ${rawSlug})`);
      // Also try fallback to original literal title search if fuzzy fails
      const fallbackJob = await JobListing.findOne({ title: { $regex: new RegExp(`^${decodeURIComponent(rawSlug).replace(/-/g, " ")}$`, 'i') } });
      if (fallbackJob) return res.status(200).json({ success: true, data: fallbackJob });

      return res.status(404).json({ 
        success: false, 
        message: `Job not found. We checked ${jobs.length} active jobs.`,
        slug: rawSlug
      });
    }

    res.status(200).json({ success: true, data: job });
  } catch (error) {
    console.error('Error in getJobBySlug:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const seedJobs = async (req, res) => {
  try {
    const jobsData = [
      {
        title: "Senior Full Stack Developer",
        category: "Software Development",
        company: "Crossover Fintech Support",
        location: "Noida, India (Hybrid)",
        compensation: "₹8,00,000 - ₹15,00,000 /year",
        duration: "Depends on employee performance",
        type: "job",
        description: "We are looking for a Senior Full Stack Developer to lead our core banking platform development. You will be responsible for building scalable services and mentoring junior developers.",
        responsibilities: [
          "Architect and develop robust microservices using Node.js and MongoDB",
          "Lead the frontend team to implement high-performance React components",
          "Collaborate with the security team to ensure data protection for financial transactions",
          "Participate in code reviews and maintain high code quality standards"
        ],
        requirements: [
          "5+ years of experience in MERN stack development",
          "Strong understanding of AWS and Cloud infrastructure",
          "Experience with financial software or payment gateways is a plus",
          "Excellent leadership and communication skills"
        ],
        skills: ["Node.js", "React.js", "MongoDB", "Express.js", "AWS", "Docker"],
        benefits: ["Remote-first culture", "Health insurance", "Annual wellness stipend", "Generous equity package"]
      },
      {
        title: "Customer Success Manager",
        category: "Support",
        company: "Crossover Fintech Support",
        location: "Mumbai, India",
        compensation: "₹5,00,000 - ₹9,00,000 /year",
        duration: "Depends on employee performance",
        type: "job",
        description: "Join our support team to ensure our clients get the most out of our fintech solutions. You will be the primary point of contact for priority partners.",
        responsibilities: [
          "Onboard new enterprise clients onto our digital platform",
          "Resolve complex technical and financial queries within agreed SLAs",
          "Gather client feedback to drive product improvements",
          "Manage a team of support specialists"
        ],
        requirements: [
          "3+ years in customer success or account management",
          "Deep understanding of fintech or banking operations",
          "Proficient in CRM tools like Salesforce or HubSpot",
          "Strong problem-solving mindset"
        ],
        skills: ["Customer Relationship Management (CRM)", "Conflict Resolution", "Strategic Account Planning", "Data Analysis"],
        benefits: ["Monthly performance bonuses", "Travel allowance", "Continuous professional development sessions"]
      },
      {
        title: "Frontend Development Intern",
        category: "Software Development",
        company: "Crossover Fintech Support",
        location: "Remote",
        compensation: "₹15,000 /month",
        duration: "3 Months",
        type: "internship",
        description: "Kickstart your career by building modern web applications with React. You'll assist in creating dashboards for our financial products.",
        responsibilities: [
          "Develop UI components using React and Tailwind CSS",
          "Integrate REST APIs with the frontend",
          "Fix bugs and improve application performance",
          "Learn and apply best practices in frontend development"
        ],
        requirements: [
          "Basic knowledge of React and JavaScript (ES6+)",
          "Familiarity with CSS frameworks and responsive design",
          "Strong urge to learn and grow in a fast-paced environment",
          "Good team player with communication skills"
        ],
        skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js Basics", "Tailwind CSS"],
        benefits: ["Certification of Internship", "Full-time job opportunity", "Mentorship from senior developers"]
      },
      {
        title: "HR Operations Intern",
        category: "Human Resources",
        company: "Crossover Fintech Support",
        location: "Mumbai, India",
        compensation: "₹12,00,000 /year",
        duration: "3 Months",
        type: "internship",
        description: "Help us find and onboard the best talent. You'll get hands-on experience in the full recruitment lifecycle.",
        responsibilities: [
          "Source candidates from LinkedIn and Job portals",
          "Schedule interviews and coordinate with hiring managers",
          "Assist in employee onboarding and documentation",
          "Maintain HR records and internal databases"
        ],
        requirements: [
          "Strong interpersonal and organizational skills",
          "Pursuing or completed a degree in HR or Management",
          "Proficient in Microsoft Office (Excel, Word)",
          "Ability to handle confidential information"
        ],
        skills: ["Interviewing", "Sourcing", "Applicant Tracking Systems", "Documentation"],
        benefits: ["Hands-on industry experience", "Flexible work hours", "Professional networking opportunities"]
      },
      {
        title: "Web Developer Intern (Fresher)",
        category: "Software Development",
        company: "Crossover Fintech Support",
        location: "Remote",
        compensation: "Unpaid / Certification",
        duration: "2 Months",
        type: "internship",
        description: "A special internship for freshers who want to gain their first industry experience. Focus on HTML/CSS polishing and component styling.",
        responsibilities: [
          "Assist in styling landing pages with CSS and Tailwind",
          "Convert Figma designs into basic HTML/React components",
          "Update internal documentation and styling guides",
          "Participate in weekly design reviews"
        ],
        requirements: [
          "Freshers from any technical background",
          "Zero prior experience required, but basic HTML/CSS knowledge is a must",
          "Passionate about web technologies",
          "Willingness to learn in a structured environment"
        ],
        skills: ["HTML5", "CSS3", "Git & GitHub Basics", "Responsive Design Tools"],
        benefits: ["Internship Certificate", "Letter of Recommendation", "Industry exposure"]
      },
      {
        title: "Technical Content Intern (Fresher)",
        category: "Content",
        company: "Crossover Fintech Support",
        location: "Remote",
        compensation: "Unpaid / Certification",
        duration: "2 Months",
        type: "internship",
        description: "Gain exposure to the operational side of a fintech company documentation. Ideal for freshers looking to build their professional resume.",
        responsibilities: [
          "Help clean and verify technical documentation",
          "Assist in writing blog posts about fintech trends",
          "Researching market updates for various industries",
          "Support the engineering team in daily reporting"
        ],
        requirements: [
          "Freshers looking for corporate exposure",
          "Attention to detail and accuracy",
          "Basic knowledge of Google Docs or Microsoft Word",
          "Ability to meet deadlines"
        ],
        skills: ["Technical Writing", "Market Research", "Content Strategy", "SEO Basics"],
        benefits: ["Flexible workload", "Expert guidance", "Career counseling session"]
      },
      {
        title: "Lead Data Scientist",
        category: "Data Science",
        company: "Crossover Fintech Support",
        location: "Bangalore, India",
        compensation: "₹15,00,000 - ₹25,00,000 /year",
        duration: "Depends on employee performance",
        type: "job",
        description: "We are looking for a Lead Data Scientist to build our next-generation credit scoring and fraud detection models.",
        responsibilities: [
          "Develop and deploy machine learning models for risk assessment",
          "Analyze large-scale financial datasets to extract actionable insights",
          "Mentor junior data scientists and engineers",
          "Collaborate with the product team to define data-driven features"
        ],
        requirements: [
          "5+ years of experience in Data Science/Machine Learning",
          "Proficient in Python, R, and SQL",
          "Strong understanding of deep learning frameworks like TensorFlow or PyTorch",
          "Experience in the FinTech or Banking sector is a must"
        ],
        skills: ["Python (Pandas, Scikit-learn)", "Machine Learning models", "Deep Learning", "SQL", "Big Data processing"],
        benefits: ["Leading edge tech stack", "Competitive salary", "Remote work options", "Relocation assistance"]
      },
      {
        title: "Graphic Design Intern",
        category: "Design",
        company: "Crossover Fintech Support",
        location: "Remote",
        compensation: "₹12,000 /month",
        duration: "3 Months",
        type: "internship",
        description: "Join our creative team to assist in building visual assets for our marketing campaigns and social media handles.",
        responsibilities: [
          "Design social media graphics (LinkedIn, Instagram)",
          "Assist in creating icons and illustrations for the app",
          "Work on presentation decks and marketing collateral",
          "Ensure brand consistency across all visual outputs"
        ],
        requirements: [
          "Proficiency in Adobe Photoshop, Illustrator, or Canva",
          "A creative eye for typography and layout",
          "A strong portfolio of recent design work",
          "Good communication and teamwork skills"
        ],
        skills: ["Adobe Creative Suite", "Visual Design", "Typography", "Branding Concepts"],
        benefits: ["Creative freedom", "Professional portfolio building", "Performance-based incentives"]
      },
      {
        title: "Product Marketing Manager",
        category: "Marketing",
        company: "Crossover Fintech Support",
        location: "Remote",
        compensation: "₹10,00,000 - ₹18,00,000 /year",
        duration: "Depends on employee performance",
        type: "job",
        description: "Take charge of our product positioning and go-to-market strategies. You will be the bridge between our engineering and sales teams.",
        responsibilities: [
          "Define product positioning and messaging",
          "Launch new features and coordinate GTM campaigns",
          "Conduct market research and competitor analysis",
          "Develop sales enablement materials and product demos"
        ],
        requirements: [
          "4+ years in product marketing or brand management",
          "Experience in B2B SaaS or FinTech is a plus",
          "Exceptional storytelling and copywriting skills",
          "Analytical mindset with data-driven decision making"
        ],
        skills: ["Market Positioning", "Go-To-Market (GTM) Strategy", "Public Relations (PR)", "Competitive Analysis"],
        benefits: ["Flexible performance-linked incentives", "Premium health insurance", "Equity opportunities"]
      },
      {
        title: "Quality Assurance (QA) Analyst",
        category: "Software Development",
        company: "Crossover Fintech Support",
        location: "Noida, India",
        compensation: "₹6,00,000 - ₹10,00,000 /year",
        duration: "Depends on employee performance",
        type: "job",
        description: "Ensure our financial applications are bug-free and deliver a seamless experience to our users. You'll lead our testing activities.",
        responsibilities: [
          "Create and execute manual and automated test plans",
          "Track and report bugs throughout the development cycle",
          "Perform regression, integration, and security testing",
          "Collaborate with developers to resolve high-priority issues"
        ],
        requirements: [
          "3+ years in software quality assurance",
          "Experience with automated testing tools like Selenium or Cypress",
          "Solid understanding of the SDLC and Agile methodologies",
          "Detailed-oriented with strong analytical skills"
        ],
        skills: ["Automation Testing", "REST API Testing", "Bug Tracking Tools", "Performance Testing"],
        benefits: ["Stability and growth", "Technical skill enhancement credits", "Comprehensive family coverage"]
      }
    ];

    await JobListing.deleteMany({});
    await JobListing.insertMany(jobsData);
    
    res.status(200).json({ success: true, message: `Successfully seeded ${jobsData.length} dynamic jobs!` });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getJobs,
  createJob,
  updateJob,
  deleteJob,
  getJobBySlug,
  seedJobs
};
