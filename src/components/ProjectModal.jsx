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
      className="fixed inset-0 bg-black bg-opacity-85 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={handleOverlayClick}
    >
      <div 
        ref={modalRef}
        className="bg-gray-900 rounded-t-2xl sm:rounded-xl max-w-4xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
        style={{ touchAction: 'pan-y' }}
      >
        {/* Header - Mobile optimized */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-700 sticky top-0 bg-gray-900 z-10">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex-1 pr-4">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-300 hover:text-white transition-colors duration-200 text-4xl sm:text-2xl w-12 h-12 sm:w-auto sm:h-auto flex items-center justify-center rounded-full hover:bg-gray-800 active:bg-gray-700"
            style={{ minWidth: '48px', minHeight: '48px' }}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">{project.description}</p>

          {/* Project Images Gallery */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Project Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {project.images?.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-48 sm:h-64 object-contain rounded-lg bg-gray-800 border border-gray-700"
                    style={{ touchAction: 'manipulation' }}
                    onLoad={() => console.log('Image loaded successfully:', image)}
                    onError={(e) => {
                      console.log('Image failed to load:', image);
                      e.target.style.backgroundColor = '#1f2937';
                      e.target.style.border = '2px solid #374151';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          {project.technologies && (
            <div className="mt-4 sm:mt-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Project Links */}
          {project.links && (
            <div className="mt-4 sm:mt-6">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Project Links</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg transition-all duration-200 text-center font-semibold"
                    style={{ minHeight: '48px' }}
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
