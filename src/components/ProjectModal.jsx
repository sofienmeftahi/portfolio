import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Animate modal in
      gsap.fromTo(overlayRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3 }
      );
      
      gsap.fromTo(modalRef.current, 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
      );
    } else {
      // Restore body scroll when modal is closed
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!isOpen || !project) return null;

  console.log('ProjectModal - Project:', project);
  console.log('ProjectModal - Images:', project.images);

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
    >
      <div 
        ref={modalRef}
        className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Description */}
          <p className="text-gray-300 text-lg mb-6">{project.description}</p>

          {/* Project Images Gallery */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Project Gallery</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.images?.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-64 object-contain rounded-lg bg-gray-200 border border-gray-300"
                    onLoad={() => console.log('Image loaded successfully:', image)}
                    onError={(e) => {
                      console.log('Image failed to load:', image);
                      e.target.style.backgroundColor = '#ef4444';
                      e.target.style.border = '2px solid red';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          {project.technologies && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project Links */}
          {project.links && (
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-white mb-4">Project Links</h3>
              <div className="flex gap-4">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
