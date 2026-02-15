import React from 'react';
import { ArrowUp, Code } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 pt-12 pb-6">
            <div className="container mx-auto px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold text-purple-500 mb-4">
                            Arunkumar
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-md">
                            Mobile App Developer specializing in Flutter and React Native.
                            Building production-ready applications with modern technologies.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            {['About', 'Projects', 'Skills', 'Experience', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center text-gray-400 text-sm">
                            <Code className="w-4 h-4 text-purple-400 mr-2" />
                            <span>Developed by <span className="text-purple-400 font-medium">Arunkumar</span> - App Developer</span>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="text-gray-400 text-sm">© {currentYear} All rights reserved</span>

                            <button
                                onClick={scrollToTop}
                                className="w-10 h-10 bg-gray-800 hover:bg-purple-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                                aria-label="Scroll to top"
                            >
                                <ArrowUp size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

