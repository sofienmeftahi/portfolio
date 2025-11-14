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
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 10, suffix: "+", label: "Satisfied Clients" },
  { value: 9, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: correctPath("/images/logos/company-logo-1.png"),
  },
  {
    imgPath: correctPath("/images/logos/company-logo-2.png"),
  },
  {
    imgPath: correctPath("/images/logos/company-logo-3.png"),
  },
  {
    imgPath: correctPath("/images/logos/company-logo-4.png"),
  },
  {
    imgPath: correctPath("/images/logos/company-logo-5.png"),
  },
  {
    imgPath: correctPath("/images/logos/company-logo-6.png"),
  },
  {
    imgPath: correctPath("/images/logos/company-logo-7.png"),
  },
  {
    imgPath: correctPath("/images/logos/company-logo-8.png"),
  },
  {
    imgPath: correctPath("/images/logos/company-logo-9.png"),
  },
  {
    imgPath: correctPath("/images/logos/company-logo-10.png"),
  },
  {
    imgPath: correctPath("/images/logos/company-logo-11.png"),
  },
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
    name: "React Developer",
    imgPath: correctPath("/images/logos/react.png"),
  },
  {
    name: "Python Developer",
    imgPath: correctPath("/images/logos/python.svg"),
  },
  {
    name: "Backend Developer",
    imgPath: correctPath("/images/logos/node.png"),
  },
  {
    name: "Interactive Developer",
    imgPath: correctPath("/images/logos/three.png"),
  },
  {
    name: "Project Manager",
    imgPath: correctPath("/images/logos/git.svg"),
  },
];
const techStackIcons = [
  {
    name: "Data Analyst — Excel, Google Sheets, Python (Pandas, NumPy), Power Query",
    icon: correctPath("/images/logos/data.webp"),
  },
  {
    name: "BI Developer ) — Power BI, Tableau, Google Data Studio, DAX",
    icon: correctPath("/images/logos/Power_BI.webp"),
  },
  {
    name: "Python Developer -streamlit,spark Pandas, NumPy, Matplotlib, Seaborn, Scikit-Learn",
    icon: correctPath("/images/logos/python.svg"),
  },
  {
    name: "Machine Learning — Scikit-Learn, TensorFlow, Keras, XGBoost, Feature Engineering",
    icon: correctPath("/images/logos/ML.jpg"),
  },
  {
    icon: correctPath("/images/logos/Sql.png"),
    name: "SQL — MySQL, PostgreSQL, SQLite, BigQuery, Query Optimization",
  },
];


const expCards = [
  {
    review: "Sofien Meftahi contributed to CNI as a Data Analyst Intern by collecting and cleaning administrative and system data to support national IT infrastructure. He automated data extraction and reporting processes using Python and SQL, and designed Power BI dashboards to visualize system performance and user activity, showcasing strong analytical and technical skills..",
    imgPath: correctPath("/images/exp1.png"),
    logoPath: correctPath("/images/logo1.png"),
    title: "CNI – Data Analyst Intern",
    date: "Jul 2024 – Aug 2024",
    responsibilities: [
      "Collected and cleaned administrative and system data to support national IT infrastructure.",
      "Automated data extraction and reporting using Python and SQL.",
      "Designed Power BI dashboards to visualize system performance and user activity."
    ],
  },
  {
    review: "Sofien Meftahi’s contributions to the MajestEYE project during his Final Year Project and Data Analyst internship were exceptional. He effectively gathered and processed economic and agricultural datasets using Python, developing robust ETL pipelines to integrate data from multiple sources. He built an interactive geospatial dashboard in Power BI, providing actionable location-based insights, and created a predictive model for population trends , demonstrating strong analytical and problem-solving skills.",
    imgPath: correctPath("/images/exp2.png"),
    logoPath: correctPath("/images/logo2.png"),
    title: "MajestEYE – Final Year Project / Data Analyst Intern",
    date: "Feb 2024 – May 2024",
    responsibilities: [
      "Gathered economic and agricultural datasets using Python.",
      "Developed ETL pipelines to integrate multi-source data.",
      "Built a geospatial dashboard in Power BI for location-based insights.",
      "Created a predictive model for population trends ."
    ],
    certificates: [
      { label: "Internship Certificate", url: correctPath("/images/gitcert.png") },
      { label: "Attestation de Stage", url: correctPath("/images/bi.png") }
    ]
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

// Certifications data: each card contains a certificate image
const certifications = [
  {
    title: "Github Foundation",
    imgPath: correctPath("/images/gitcert.png"),
  },
  {
    title: "Google Business Intelligence",
    imgPath: correctPath("/images/bi.png"),
  },
  {
    title: "Python",
    imgPath: correctPath("/images/py.png"),
  },
  {
    title: "Master 1 Completion Certificat",
    imgPath: correctPath("/images/master.jpg"),
  },
  {
    title: "French Language Test",
    imgPath: correctPath("/images/tcf.png"),
  }
];

const projects = [
  {
    id: "ryde",
    title: "Socioeconomic Population Analysis & Interactive Dashboard",
    description: "Conducted an in-depth analysis of socioeconomic population data to identify key trends and patterns. Designed and implemented an interactive dashboard that visualizes demographics, income levels, and social indicators, enabling data-driven insights for decision-making.",
    imgPath: correctPath("/images/project1.png"),
    alt: "Ryde App Interface",
    featured: true,
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
    name: "fb",
    imgPath: correctPath("/images/fb.png"),
  },
  {
    name: "x",
    imgPath: correctPath("/images/x.png"),
  },
  {
    name: "linkedin",
    imgPath: correctPath("/images/linkedin.png"),
    url: "https://www.linkedin.com/in/sofien-meftahi/"
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