import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useInView } from 'react-intersection-observer';
import React, { Suspense } from 'react';

import TitleHeader from "../components/TitleHeader";
const TechIconCardExperience = React.lazy(() => import('../components/models/tech_logos/TechIconCardExperience'));
import { techStackIcons } from "../constants";
import { techStackImgs } from "../constants";

const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    // This animation is triggered when the user scrolls to the #skills wrapper
    // The animation starts when the top of the wrapper is at the center of the screen
    // The animation is staggered, meaning each card will animate in sequence
    // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(
      ".tech-card",
      {
        // Initial values
        y: 50, // Move the cards down by 50px
        opacity: 0, // Set the opacity to 0
      },
      {
        // Final values
        y: 0, // Move the cards back to the top
        opacity: 1, // Set the opacity to 1
        duration: 1, // Duration of the animation
        ease: "power2.inOut", // Ease of the animation
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
          start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
        },
      }
    );
  });

  const dataSkills = [
    {
      name: "Data Analyst",
      icon: "/images/logos/python.svg",
      desc: "Turn raw data into meaningful insights using SQL, Excel, and Python."
    },
    {
      name: "Business Intelligence Developer",
      icon: "/images/logos/powerbi.png",
      desc: "Design and build interactive dashboards using Power BI and Tableau."
    },
    {
      name: "Data Cleaning & Processing",
      icon: "/images/logos/pandas.png",
      desc: "Strong experience in preprocessing large datasets (Pandas, NumPy)."
    },
    {
      name: "Machine Learning",
      icon: "/images/logos/scikit-learn.png",
      desc: "Build prediction models, clustering, and sentiment analysis using scikit-learn."
    },
    {
      name: "Data Visualization & Storytelling",
      icon: "/images/logos/tableau.png",
      desc: "Create clear and impactful reports and visuals that communicate findings effectively."
    },
  ];

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="AI & Data Skills"
          sub="Tools & Technologies"
        />
        <div className="tech-grid">
          {techStackIcons.map((techStackIcon, idx) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-xl flex flex-col items-center p-8 bg-black-100 border-2 border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:shadow-[0_0_40px_rgba(34,211,238,0.2)]"
            >
              <div className="tech-card-animated-bg bg-gradient-to-t from-cyan-500/20 to-transparent" />
              <div className="tech-card-content flex flex-col items-center">
                <div className="tech-icon-wrapper mb-4" style={{minHeight: '150px', minWidth: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <img src={techStackIcon.icon} alt={techStackIcon.name} className="w-32 h-32 object-contain" />
                </div>
                <p className="font-bold text-lg md:text-xl mb-2 text-center text-white">{techStackIcon.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
         
        </div>
      </div>
    </div>
  );
};

export default TechStack;
