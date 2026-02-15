import React from 'react';
import { X, ExternalLink, Github, Smartphone } from 'lucide-react';

const ProjectDetail = ({ project, onClose }) => {
    if (!project) return null;

    // Handle ESC key to close modal
    React.useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Prevent body scroll when modal is open
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
            onClick={onClose}
        >
            <div
                className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-800 animate-slideUp"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 p-6 flex justify-between items-start z-10">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                        <p className="text-purple-400 font-medium">{project.professionalTitle}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="ml-4 p-2 hover:bg-gray-800 rounded-lg transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="text-gray-400 hover:text-white" size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-8">
                    {/* Tech Stack */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <span className="w-1 h-6 bg-purple-500 mr-3 rounded"></span>
                            Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg font-medium border border-purple-500/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Short Summary */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <span className="w-1 h-6 bg-purple-500 mr-3 rounded"></span>
                            Overview
                        </h3>
                        <p className="text-gray-300 leading-relaxed">{project.shortSummary}</p>
                    </div>

                    {/* Detailed Description */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <span className="w-1 h-6 bg-purple-500 mr-3 rounded"></span>
                            About the Project
                        </h3>
                        <div className="text-gray-300 leading-relaxed space-y-3">
                            {project.detailedDescription.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {/* Key Contributions */}
                    {project.keyContributions && project.keyContributions.length > 0 && (
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <span className="w-1 h-6 bg-purple-500 mr-3 rounded"></span>
                                Key Contributions
                            </h3>
                            <ul className="space-y-2">
                                {project.keyContributions.map((contribution, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-purple-400 mr-3 mt-1">▹</span>
                                        <span className="text-gray-300">{contribution}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Impact */}
                    {project.impact && project.impact.length > 0 && (
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <span className="w-1 h-6 bg-purple-500 mr-3 rounded"></span>
                                Impact & Achievements
                            </h3>
                            <ul className="space-y-2">
                                {project.impact.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-purple-400 mr-3 mt-1">▹</span>
                                        <span className="text-gray-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Screenshots */}
                    {project.screenshots && project.screenshots.length > 0 && (
                        <div>
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <span className="w-1 h-6 bg-purple-500 mr-3 rounded"></span>
                                Screenshots
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.screenshots.map((screenshot, index) => (
                                    <div key={index} className="rounded-lg overflow-hidden border border-gray-800">
                                        <img
                                            src={screenshot}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                            <span className="w-1 h-6 bg-purple-500 mr-3 rounded"></span>
                            Links
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {project.playStoreUrl && (
                                <a
                                    href={project.playStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium"
                                >
                                    <Smartphone size={20} />
                                    <span>Play Store</span>
                                    <ExternalLink size={16} />
                                </a>
                            )}
                            {project.appStoreUrl && (
                                <a
                                    href={project.appStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
                                >
                                    <Smartphone size={20} />
                                    <span>App Store</span>
                                    <ExternalLink size={16} />
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors font-medium border border-gray-700"
                                >
                                    <Github size={20} />
                                    <span>Source Code</span>
                                    <ExternalLink size={16} />
                                </a>
                            )}
                            {!project.playStoreUrl && !project.appStoreUrl && !project.githubUrl && (
                                <p className="text-gray-400 italic">Links not publicly available</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
