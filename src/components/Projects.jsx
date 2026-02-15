import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone } from 'lucide-react';
import ProjectDetail from './ProjectDetail';
import srPortal from '../assets/srportal.png';
import fmslite from '../assets/fmslite.png'
import vealthx from '../assets/vealthx.png'
const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'VEALTHX',
            professionalTitle: 'VEALTHX – Fintech Wealth Management Application',
            company: 'Vealthx',
            appStoreUrl: 'https://apps.apple.com/in/app/vealthx/id6751635878',
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.vealthx.apps&hl=en_IN',
            shortSummary: 'Led end-to-end development of a fintech Flutter application including scalable architecture implementation using BLoC pattern, subscription system integration, DigiLocker backend integration, and full app store lifecycle management.',
            detailedDescription: `VEALTHX is a fintech mobile application designed for secure wealth management and financial services integration.

I was responsible for architecting the application from scratch using BLoC architecture, designing scalable and maintainable state management structure, developing and integrating Node.js backend subscription system, implementing DigiLocker backend integration, managing callbacks, deep links, and GoRouter navigation, and handling end-to-end Play Store and App Store registration and deployment.

The project followed a production-grade architecture with clean separation of layers and maintainable codebase practices.`,
            image: vealthx,
            techStack: ['Flutter', 'BLoC Architecture', 'Node.js', 'PostgreSQL', 'Deep Linking', 'GoRouter', 'DigiLocker API'],
            keyContributions: [
                'Designed project foundation architecture',
                'Built modular feature-based structure',
                'Implemented subscription billing system',
                'Integrated DigiLocker backend',
                'Managed store publishing and update cycles',
                'Optimized performance and navigation flows'
            ],
            impact: [
                'Delivered production-grade fintech application',
                'Implemented secure financial data management',
                'Established scalable architecture for future growth'
            ],
            screenshots: []
        },
        {
            id: 2,
            title: 'FMS Lite Traccia',
            professionalTitle: 'FMS Lite – Fleet Monitoring System Mobile Application',
            company: 'DSM Soft Pvt Ltd',
            shortSummary: 'Contributed to the enhancement, UI redesign, feature upgrades, and production maintenance of a cross-platform fleet monitoring application built using React Native.',
            detailedDescription: `FMS Lite is a fleet management mobile application designed to monitor and manage vehicle tracking operations. The app provides real-time tracking insights, alerts, and fleet performance analytics.

I worked on feature enhancements, UI/UX redesign, performance improvements, and continuous maintenance for both Android and iOS platforms. I also handled version upgrades and managed Play Store and App Store deployments.`,
            image: fmslite,
            techStack: ['React Native', 'Node.js', 'REST APIs', 'Play Store', 'App Store'],
            keyContributions: [
                'UI redesign and modern layout improvements',
                'Added new feature enhancements',
                'Maintained compatibility with latest OS versions',
                'Managed production releases and updates',
                'Resolved critical production issues'
            ],
            impact: [
                'Enhanced user experience with modern UI',
                'Improved app performance and stability',
                'Maintained cross-platform compatibility'
            ],
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.dsmsoft.FMSLitev1&hl=en_IN',
            appStoreUrl: 'https://apps.apple.com/in/app/fmslite-traccia/id6472259424',
            screenshots: []
        },

        {
            id: 3,
            title: 'SR Portal',
            professionalTitle: 'SR Portal – Field Service Management Mobile Application',
            company: 'DSM Soft Pvt Ltd',
            shortSummary: 'Developed and deployed a full-scale Flutter-based mobile application for field technicians to manage vehicle device installations, maintenance, diagnostics, and service workflows. Built end-to-end from scratch, including backend integration, Play Store deployment, and production maintenance.',
            detailedDescription: `SR Portal is a field service management mobile application built specifically for technicians handling vehicle-installed tracking and monitoring devices.

The application streamlines on-site service operations including device installation, troubleshooting, maintenance logging, and diagnostics reporting. The system integrates with a Node.js backend to provide real-time service tracking and operational updates.

I developed the application completely from scratch, handling the full lifecycle from architecture design, UI implementation, backend API integration, to Play Store production deployment and post-launch maintenance.

The app is actively used by field technicians to improve efficiency, reduce manual paperwork, and ensure accurate service reporting.`,
            image: srPortal,
            techStack: ['Flutter', 'Node.js', 'REST API', 'Firebase', 'Play Store'],
            keyContributions: [
                'Designed complete application architecture',
                'Developed scalable UI components',
                'Integrated Node.js backend APIs',
                'Implemented real-time service workflow handling',
                'Managed Play Store publishing and updates',
                'Performed production bug fixes and optimizations'
            ],
            impact: [
                'Improved technician workflow efficiency',
                'Reduced manual service reporting errors',
                'Centralized field operation management'
            ],
            playStoreUrl: 'https://play.google.com/store/apps/details?id=com.sr.srportal&hl=en_IN',
            screenshots: []
        },

        {
            id: 4,
            title: 'Business Directory App',
            professionalTitle: 'Business Directory Mobile Application – React Native + Firebase',
            company: 'Personal Project',
            shortSummary: 'Developed a full-stack business directory application with dynamic content management using Firebase backend and a custom-built admin panel.',
            detailedDescription: `A dynamic business directory application that allows users to discover local businesses with categorized listings and detailed profiles.

I independently developed the mobile application using React Native, Firebase backend (Authentication, Firestore, Hosting), custom admin panel to dynamically manage listings, real-time data updates and content control, and handled the full project lifecycle including design, development, and deployment.

Source code is available on GitHub.`,
            image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
            techStack: ['React Native', 'Firebase Auth', 'Firestore', 'Firebase Hosting', 'Admin Panel'],
            keyContributions: [
                'Designed scalable Firebase database structure',
                'Built dynamic listing management system',
                'Implemented admin content control',
                'Developed complete UI from scratch'
            ],
            impact: [
                'Created fully functional business discovery platform',
                'Enabled real-time content management',
                'Demonstrated full-stack development capabilities'
            ],
            githubUrl: 'https://github.com/AradhiyanDev/business-directoy-app.git',
            screenshots: []
        }
    ];

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <section id="projects" className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                            My <span className="text-purple-500">Projects</span>
                        </h2>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                            Professional mobile applications I've developed and deployed to production.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                onClick={() => handleProjectClick(project)}
                                className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                                        {project.company}
                                    </div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                        {project.shortSummary}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.slice(0, 4).map((tech, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 4 && (
                                            <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                                                +{project.techStack.length - 4} more
                                            </span>
                                        )}
                                    </div>

                                    <div className="pt-4 border-t border-gray-700 space-y-3">
                                        <span className="text-purple-400 text-sm font-medium block">
                                            Click to view details →
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {project.playStoreUrl && (
                                                <a
                                                    href={project.playStoreUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs rounded-lg transition-colors font-medium"
                                                >
                                                    <Smartphone size={14} />
                                                    <span>Play Store</span>
                                                </a>
                                            )}
                                            {project.appStoreUrl && (
                                                <a
                                                    href={project.appStoreUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-lg transition-colors font-medium"
                                                >
                                                    <Smartphone size={14} />
                                                    <span>App Store</span>
                                                </a>
                                            )}
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-xs rounded-lg transition-colors font-medium"
                                                >
                                                    <Github size={14} />
                                                    <span>GitHub</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedProject && (
                <ProjectDetail
                    project={selectedProject}
                    onClose={handleCloseModal}
                />
            )}
        </>
    );
};

export default Projects;
