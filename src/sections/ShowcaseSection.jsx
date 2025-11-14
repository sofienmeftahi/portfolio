import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../constants";
import ProjectModal from "../components/ProjectModal";

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

  const featuredProject = projects.find(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  const leftSideProjects = otherProjects.slice(0, 2);
  const rightSideProjects = otherProjects.slice(2);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Featured Project */}
          <div 
            ref={el => projectRefs.current[0] = el} 
            className="first-project-wrapper"
          >
            <div className="image-wrapper">
              <img src={featuredProject.imgPath} alt={featuredProject.alt} />
            </div>
            <div className="text-content">
              <h2>{featuredProject.title}</h2>
              <p className="text-white-50 md:text-xl">
                {featuredProject.description}
              </p>
              <button
                onClick={() => handleShowProject(featuredProject)}
                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium"
              >
                See Full Project
              </button>
            </div>

            {leftSideProjects.map((project, index) => (
              <div
                key={project.id}
                ref={el => projectRefs.current[index + 1] = el}
                className="mt-10 project"
              >
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img src={project.imgPath} alt={project.alt} />
                </div>
                <h2>{project.title}</h2>
                <button
                  onClick={() => handleShowProject(project)}
                  className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                >
                  See Full Project
                </button>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="project-list-wrapper overflow-hidden">
            {rightSideProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project" 
                ref={el => projectRefs.current[index + 1 + leftSideProjects.length] = el}
              >
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img src={project.imgPath} alt={project.alt} />
                </div>
                <h2>{project.title}</h2>
                <button
                  onClick={() => handleShowProject(project)}
                  className="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
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
