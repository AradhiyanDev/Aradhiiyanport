import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
            image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Weather Dashboard',
            description: 'A beautiful weather dashboard that displays current weather conditions, forecasts, and interactive maps with location-based services.',
            image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Social Media Dashboard',
            description: 'An analytics dashboard for social media management with data visualization, scheduling features, and performance tracking.',
            image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React', 'D3.js', 'Express', 'MongoDB'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Portfolio Website',
            description: 'A responsive portfolio website showcasing projects and skills with smooth animations and modern design principles.',
            image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
            github: '#',
            demo: '#'
        },
        {
            title: 'Learning Management System',
            description: 'A comprehensive LMS with course management, progress tracking, and interactive learning modules for educational institutions.',
            image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
            tags: ['React', 'Next.js', 'Supabase', 'Tailwind'],
            github: '#',
            demo: '#'
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        My <span className="text-purple-500">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience in web development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-4 pt-4">
                                    <a
                                        href={project.github}
                                        className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                                    >
                                        <Github size={18} />
                                        <span className="text-sm">Code</span>
                                    </a>
                                    <a
                                        href={project.demo}
                                        className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
                                    >
                                        <ExternalLink size={18} />
                                        <span className="text-sm">Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
