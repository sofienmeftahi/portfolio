// في ملف src/constants/index.js (أو ملف البيانات المشابه)
import { correctPath } from "../utils/pathUtils";
const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Certifications",
    link: "#certifications",
  },
];

const words = [
  { text: "Ideas", imgPath: correctPath("/images/ideas.svg") },
  { text: "Concepts", imgPath: correctPath("/images/concepts.svg") },
  { text: "Designs", imgPath: correctPath("/images/designs.svg") },
  { text: "Code", imgPath: correctPath("/images/code.svg") },
  { text: "Ideas", imgPath: correctPath("/images/ideas.svg") },
  { text: "Concepts", imgPath: correctPath("/images/concepts.svg") },
  { text: "Designs", imgPath: correctPath("/images/designs.svg") },
  { text: "Code", imgPath: correctPath("/images/code.svg") },
];

const counterItems = [
  { value: 4, suffix: "+", label: "Years of Experience" },

  { value: 10, suffix: "+", label: " Projects" },

];

const logoIconsList = [
  

];

const abilities = [
  {
    imgPath: correctPath("/images/seo.png"),
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: correctPath("/images/chat.png"),
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: correctPath("/images/time.png"),
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Microsoft Fabric",
    imgPath: correctPath("/images/logos/data.webp"),
  },
  {
    name: "Power BI",
    imgPath: correctPath("/images/logos/Power_BI.webp"),
  },
  {
    name: "Python",
    imgPath: correctPath("/images/logos/python.svg"),
  },
  {
    name: "SQL",
    imgPath: correctPath("/images/logos/Sql.png"),
  },
  {
    name: "AI & Machine Learning",
    imgPath: correctPath("/images/logos/ML.jpg"),
  },
];
const techStackIcons = [
  {
    name: "Microsoft Fabric — Analytics, Data Engineering, AI",
    icon: correctPath("/images/logos/data.webp"),
  },
  {
    name: "Power BI — Dashboards, DAX, Data Visualization",
    icon: correctPath("/images/logos/Power_BI.webp"),
  },
  {
    name: "Python — Pandas, NumPy, Streamlit, Scikit-Learn",
    icon: correctPath("/images/logos/python.svg"),
  },
  {
    name: "SQL — Query Optimization, Data Extraction",
    icon: correctPath("/images/logos/Sql.png"),
  },
  {
    name: "LLM & AI — Natural Language Querying, Integration",
    icon: correctPath("/images/logos/ML.jpg"),
  },
];


const expCards = [
  {
    review: "As an independent Freelance Microsoft Fabric Consultant, Sofien delivers enterprise-grade AI-powered analytics solutions. He specializes in LLM integration for natural language data querying, building intelligent dashboards, and helping clients leverage Microsoft Fabric for data-driven decision making.",
    imgPath: correctPath("/images/exp3.png"),
    logoPath: correctPath("/images/logo3.png"),
    title: "Freelance Microsoft Fabric & AI Consultant",
    date: "Jan 2026 – Present",
    responsibilities: [
      "Implement LLM integration for natural language data querying and AI-powered analytics.",
      "Build enterprise-grade BI solutions using Microsoft Fabric and Power BI.",
      "Deliver end-to-end data projects from ETL pipelines to interactive dashboards.",
      "Help clients transform raw data into actionable business insights."
    ],
  },
  {
    review: "Sofien Meftahi’s contributions to the MajestEYE project were exceptional. From Final Year Project to Data Analyst Intern, he delivered outstanding work including economic/agricultural data analysis, ETL pipelines, geospatial dashboards, and predictive modeling.",
    imgPath: correctPath("/images/exp2.png"),
    logoPath: correctPath("/images/logo2.png"),
    title: "MajestEYE – Final Year Project & Data Analyst Intern",
    date: "Jan 2024 – Jan 2026",
    responsibilities: [
      "Final Year Project & Internship (Jan 2024 – May 2024): Gathered economic and agricultural datasets, built ETL pipelines, developed Power BI geospatial dashboards, and created population trend predictive models.",
      "Continued Collaboration (Jui 2025 – Jan 2026): Extended project scope with advanced analytics."

    ],
    certificates: [
      { label: "Internship Certificate", url: correctPath("") },
      
    ]
  },
  {
    review: "Sofien Meftahi contributed to CNI as a Data Analyst Intern by collecting and cleaning administrative and system data to support national IT infrastructure. He automated data extraction and reporting processes using Python and SQL, and designed Power BI dashboards to visualize system performance and user activity, showcasing strong analytical and technical skills.",
    imgPath: correctPath("/images/exp1.png"),
    logoPath: correctPath("/images/logo1.png"),
    title: "CNI – Data Analyst Intern",
    date: "Jul 2023 – Nov 2023",
    responsibilities: [
      "Collected and cleaned administrative and system data to support national IT infrastructure.",
      "Automated data extraction and reporting using Python and SQL.",
      "Designed Power BI dashboards to visualize system performance and user activity."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: correctPath("/images/logo1.png"),
  },
  {
    name: "logo2",
    imgPath: correctPath("/images/logo2.png"),
  },
  {
    name: "logo3",
    imgPath: correctPath("/images/logo3.png"),
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Sofien Meftahi. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: correctPath("/images/client1.png"),
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Sofien Meftahi was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: correctPath("/images/client3.png"),
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Sofien Meftahi was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sofien Meftahi's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Sofien Meftahi is the ideal partner.",
    imgPath: correctPath("/images/client2.png"),
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Sofien Meftahi was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: correctPath("/images/client5.png"),
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Sofien Meftahi’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: correctPath("/images/client4.png"),
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Sofien Meftahi was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: correctPath("/images/client6.png"),
  },
];

const certifications = [
  {
    title: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
    shortTitle: "DP-600 • Microsoft Fabric",
    issuer: "Microsoft",
    description:
      "Premium certification validating expertise in designing, building, and scaling enterprise-grade analytics solutions using Microsoft Fabric. Skilled in data engineering, data science, real-time analytics, and Power BI integration.",
    imgPath: correctPath("/images/Dp600Certif.png"),
    verifyUrl:
      "https://learn.microsoft.com/en-us/users/sofienmeftahi-3482/credentials/c25aed162a575647",
    credentialId: "C25AED162A575647",
    accent: "from-cyan-400/30 via-blue-500/20 to-indigo-600/10",
    featured: true,
  },
  {
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    shortTitle: "OCI AI Foundations",
    issuer: "Oracle",
    description:
      "Foundational certification covering core AI concepts and Oracle Cloud Infrastructure AI services.",
    imgPath: correctPath("/images/oracle_certif.png"),
    verifyUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=18279B43F22977C628A1799604C9981B39ED2E5AE455AF621D21E3E4BFC77CCD",
    accent: "from-orange-500/20 via-amber-500/10 to-transparent",
  },
  {
    title: "Alteryx Designer Core Certification",
    shortTitle: "Designer Core",
    issuer: "Alteryx",
    description:
      "Core certification validating hands-on workflow building, data preparation, blending, and analytics skills in Alteryx Designer.",
    verifyUrl:
      "https://www.credly.com/badges/57ddf09b-f1b1-413d-b824-fec139b146c2/linked_in_profile",
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    title: "GitHub Foundations",
    shortTitle: "Foundations",
    issuer: "GitHub",
    description:
      "Foundational certification covering repositories, commits, branching, Markdown, collaboration, and project management on GitHub.",
    imgPath: correctPath("/images/gitcert.png"),
    verifyUrl:
      "https://www.credly.com/badges/55efc350-edc3-4b0e-930c-2f9e9fe60d4b/linked_in_profile",
    accent: "from-slate-400/20 via-zinc-400/10 to-transparent",
  },
  {
    title: "Google Business Intelligence",
    shortTitle: "Business Intelligence",
    issuer: "Google",
    description:
      "Coursera specialization covering BI fundamentals, data modeling, ETL workflows, dashboards, and stakeholder-focused reporting.",
    imgPath: correctPath("/images/bi.png"),
    verifyUrl:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/W39BD285CJZN",
    accent: "from-yellow-500/20 via-blue-500/10 to-transparent",
  },
];

const projects = [
  {
    id: "ai-insight-sofien-bank",
    title: "AI-Insight Sofien Bank – AI-Powered Banking Analytics",
    description: "Complete AI-powered banking analytics platform with Microsoft Fabric backend. Features include voice-enabled natural language querying, AI credit decision engine, real-time dashboards, transaction trend analysis, customer segmentation, and comprehensive credit risk assessment.",
    imgPath:  correctPath("/images/pie chart.png"),
    alt: "AI-Insight Sofien Bank",
    featured: true,
    images: [
      correctPath("/images/a1.png"),
      correctPath("/images/sign_in.png"),
      correctPath("/images/chart1_top10.png"),
      correctPath("/images/pie chart.png"),
      correctPath("/images/credit_approve.png")
    ],
    technologies: ["Microsoft Fabric", "LLM", "Python", "SQL", "React", "AI Credit Scoring", "Voice Recognition", "Real-time Analytics"],
    links: [
      { label: "GitHub", url: "https://github.com/sofienmeftahi/AI-Insight-Sofien-Bank" },
      { label: "Drive vedio", url: "https://drive.google.com/file/d/1hPetmbqLwuwW59vVOFQiuUlILPyRWr1M/view?usp=sharing" }
    ]
  },
  {
    id: "ryde",
    title: "Socioeconomic Population Analysis & Interactive Dashboard",
    description: "Conducted an in-depth analysis of socioeconomic population data to identify key trends and patterns. Designed and implemented an interactive dashboard that visualizes demographics, income levels, and social indicators, enabling data-driven insights for decision-making.",
    imgPath: correctPath("/images/project1.png"),
    alt: "Ryde App Interface",
    featured: false,
    images: [
      correctPath("/images/X1.png"),
      correctPath("/images/X2.png"),    
      correctPath("/images/X3.png")
    ],
    technologies: ["Power BI", "Python", "ETL", "Excel", "Google Maps API"],
    links: [
      { label: "Live Demo", url: "https://app.powerbi.com/reportEmbed?reportId=34eee380-09c1-4a80-822c-97edc8dd1588&autoAuth=true&ctid=dbd6664d-4eb9-46eb-99d8-5c43ba153c61&actionBarEnabled=true&reportCopilotInEmbed=true" },
      { label: "GitHub", url: "#" }
    ]
  },
  {
    id: "logistics-ai-copilot",
    title: "AI-Powered Logistics Analytics Platform",
    description: "End-to-end analytics workspace for logistics and operations: natural-language questions are interpreted by an AI layer, translated into read-only SQL, executed against Microsoft Fabric as the system of record, and returned with business-facing commentary, confidence signals, and fit-for-purpose charts. The same foundation supports a visual analytics builder (dimensions, measures, aggregations, generated SQL) for users who prefer structured exploration without prompts. Includes secure authentication, a modern web UI, and API orchestration across multiple LLM providers with emphasis on governance, SQL safety, and traceability.",
    imgPath: correctPath("/images/b4.jpg"),
    alt: "AI-Powered Logistics Analytics Platform",
    featured: true,
    images: [
      correctPath("/images/b2.jpg"),
      correctPath("/images/b3.jpg"),
      correctPath("/images/b4.jpg"),
      correctPath("/images/b5.png"),
      correctPath("/images/b6.png")
    ],
    technologies: ["Microsoft Fabric", "LLM", "Python", "SQL", "React", "AI Analytics", "API Orchestration", "SQL Safety", "Governance"],
    links: [
      { label: "GitHub", url: "#" }
    ]
  },

{
    id: "socio-subproject",
    title: "Tunisia Dams Live Monitoring Dashboard",
    description: "A real-time Power BI dashboard visualizing water levels and capacities across Tunisia’s major dams. The dashboard provides live updates, interactive visuals, and key insights into national water resources to support environmental analysis and decision-making.",
    imgPath: correctPath("/images/dams1.png"),
    alt: "Tunisia Dams Live Monitoring Dashboard",
    featured: false,
    images: [
      correctPath("/images/dams1.png"),
      correctPath("/images/dams2.png")
    ],
    technologies: ["Power BI", "Python", "Pandas"],
    links: [
      { label: "Live Demo", url: "https://app.powerbi.com/reportEmbed?reportId=34eee380-09c1-4a80-822c-97edc8dd1588&autoAuth=true&ctid=dbd6664d-4eb9-46eb-99d8-5c43ba153c61&actionBarEnabled=true&reportCopilotInEmbed=true" },
      { label: "GitHub", url: "#" }
    ]
  },


{
    id: "project4",
    title: "Manufacturing Machine Performance & Waste Analysis",
    description: "Developed a data analysis project to monitor machine performance in a manufacturing plant. The system tracks breakdowns, calculates waste vs. valid output, and provides insights into efficiency and productivity through interactive dashboards.",
    imgPath: correctPath("/images/project5of.png"),
    alt: "Manufacturing Machine Performance & Waste Analysis",
    featured: false,
    images: [
      correctPath("/images/y1.png"),
      correctPath("/images/y2.png"),
      correctPath("/images/y3.png")
    ],
    technologies: ["PowerBI", "SQL", "Python","Excel"],
    links: [
      { label: "Live Demo", url: "https://app.powerbi.com/reportEmbed?reportId=2b66f27d-6e29-46e8-8e88-88e02e99e5bc&autoAuth=true&ctid=dbd6664d-4eb9-46e8-8e88-88e02e99e5bc" },
      { label: "GitHub", url: "#" }
    ]
  },
  {
    id: "project5",
    title: "Human Resources Data Analysis for Corporate Insights",
    description: "An advanced social media analytics platform that provides insights into engagement, reach, and performance metrics across multiple platforms.",
    imgPath: correctPath("/images/project6of.png"),
    alt: "Social Media Analytics Tool",
    featured: false,
    images: [
      correctPath("/images/z1.png"),
      correctPath("/images/z2.png"),
      correctPath("/images/z3.png")
    ],
    technologies: ["Power Bi ", "Python"],
    links: [
      { label: "Live Demo", url: "https://app.powerbi.com/reportEmbed?reportId=06c47dd0-c4f9-4a84-b33b-1b4be533a42b&autoAuth=true&ctid=dbd6664d-4eb9-46eb-99d8-5c43ba153c61" },
      { label: "GitHub", url: "#" }
    ]
  },

{
    id: "project6",
    title: "Used Car Sales Performance Dashboard",
    description: "An interactive Power BI dashboard designed to analyze used car sales data. It provides insights into key metrics such as total revenue, average selling price, top-performing car models, and regional sales trends. The dashboard helps identify market patterns and supports data-driven decisions for inventory and pricing strategies.",
    imgPath: correctPath("/images/car11.png"),
    alt: "Used Car Sales Performance Dashboard",
    featured: false,
    images: [
      correctPath("/images/car11.png"),
      correctPath("/images/car22.png")
    ],
    technologies: ["Power BI", "Python", "SQL"],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "GitHub", url: "#" }
    ]
  },
  
  
  {
    id: "library",
    title: "Resume Inspector – Smart CV Screening Tool",
    description: "A modern, intelligent CV analysis web application that provides comprehensive feedback on resumes using AI-powered analysis, skill matching, and professional recommendations.",
    imgPath: correctPath("/images/project2.png"),
    alt: "Resume Inspector",
    featured: false,
    images: [
      correctPath("/images/project2.png"),
      correctPath("/images/R1.png"),
      correctPath("/images/R2.png")
    ],
    technologies: ["React", "Flask", "Spacy", "TailwindCSS "],
    links: [
      { label: "Live Demo", url:"" },
      { label: "GitHub", url: "https://github.com/sofienmeftahi/resume-inspector" }
    ]
  },
  {
    id: "yc-directory",
    title: "BMW Car sales Interactive Dashboard",
    description: "This interactive dashboard allows you to explore and visualize BMW car sales data across different years, regions, models, and more. Built with Streamlit and Plotly, it provides dynamic filtering, insightful charts, and downloadable data for your own analysis",
    imgPath: correctPath("/images/project3.png"),
    alt: "YC Directory App",
    featured: false,
    images: [
      correctPath("/images/project3.png"),
      correctPath("/images/car1.png"),
      correctPath("/images/car2.png")
    ],
    technologies: ["Python", "pandas", "matplotlib", "xgboost", "streamlit"],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "GitHub", url: "https://github.com/sofienmeftahi/BMW-Car-Sales-Dashboard" }
    ]
  },
  

  




  {
    id: "project7",
    title: "TCF Quiz — Test de Connaissance du Français",
    description: "Interactive quiz application to test knowledge of the French language, featuring various question types and real-time feedback.",
    imgPath: correctPath("/images/tcf2.png"),
    alt: "TCF Quiz",
    featured: false,
    images: [
      correctPath("/images/tcf1.png"),
      correctPath("/images/tcf2.png"),
      correctPath("/images/tcf3.png")
    ],
    technologies: ["React", "js"],
    links: [
      { label: "Live Demo", url: "#" },
      { label: "GitHub", url: "https://github.com/sofienmeftahi/Tcf-Francais" }
    ]
  }
];

const socialImgs = [
  {
    name: "github",
    imgPath: correctPath("/images/github.png"),
    url: "https://github.com/sofienmeftahi"
  },
  {
    name: "linkedin",
    imgPath: correctPath("/images/linkedin.png"),
    url: "https://www.linkedin.com/in/sofien-meftahi/"
  },
  {
    name: "fb",
    imgPath: correctPath("/images/fb.png"),
    url: "#"
  },
  {
    name: "x",
    imgPath: correctPath("/images/x.png"),
    url: "#"
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  certifications,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects,
};
