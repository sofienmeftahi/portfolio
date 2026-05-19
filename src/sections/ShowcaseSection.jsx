import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
import ProjectModal from "../components/ProjectModal";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const projectRefs = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each project showcase
    projectRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2 * index,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
            },
          }
        );
      }
    });
  }, []);

  const handleShowProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const spotlightProjectIds = [
    "ai-insight-sofien-bank",
    "logistics-ai-copilot",
    "ryde",
  ];
  const spotlightProjects = spotlightProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter(Boolean);
  const rightSideProjects = projects.filter(
    (project) => !spotlightProjectIds.includes(project.id)
  );

  return (
    <div id="work" ref={sectionRef} className="app-showcase relative z-10">
      <div className="w-full">
        <TitleHeader
          title="Featured Projects"
          sub="Data & AI Solutions"
        />
        <div className="showcaselayout">
          {/* Spotlight Projects */}
          <div className="first-project-wrapper">
            {spotlightProjects.map((project, index) => (
              <div
                key={project.id}
                ref={el => projectRefs.current[index] = el}
                className={index === 0 ? "" : "mt-10"}
              >
                <div className="image-wrapper rounded-2xl border-2 border-cyan-500/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                  <img src={project.imgPath} alt={project.alt} />
                </div>
                <div className="text-content">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">{project.title}</h2>
                  <p className="text-white-50 md:text-xl text-lg">
                    {project.description}
                  </p>
                  <button
                    onClick={() => handleShowProject(project)}
                    className="mt-6 px-8 py-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 text-white rounded-xl transition-all duration-300 font-bold text-lg shadow-[0_0_30px_rgba(34,211,238,0.3)]"
                  >
                    See Full Project
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="project-list-wrapper overflow-hidden">
            {rightSideProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project" 
                ref={el => projectRefs.current[index + spotlightProjects.length] = el}
              >
                <div className="image-wrapper bg-[#FFEFDB] rounded-xl border-2 border-cyan-500/20">
                  <img src={project.imgPath} alt={project.alt} />
                </div>
                <h2 className="text-xl md:text-2xl font-semibold">{project.title}</h2>
                <button
                  onClick={() => handleShowProject(project)}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl transition-all duration-300 font-semibold text-base"
                >
                  See Full Project
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default AppShowcase;
