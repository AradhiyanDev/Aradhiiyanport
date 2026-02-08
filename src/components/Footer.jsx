import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 pt-12 pb-6">
            <div className="container mx-auto px-6">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold text-purple-500 mb-4">
                            Joshua Irvin
                        </div>
                        <p className="text-gray-400 leading-relaxed max-w-md">
                            Passionate React Developer creating exceptional digital experiences
                            with modern web technologies. Let's build something amazing together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-2">
                            {['About', 'Projects', 'Skills', 'Services', 'Contact'].map((link) => (
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

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-gray-400">
                            <p>joshua.irvin@example.com</p>
                            <p>+1 (555) 123-4567</p>
                            <p>San Francisco, CA</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-red-500 mx-2" />
                            <span>by Joshua Irvin © 2024</span>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="flex space-x-4">
                                {['Privacy', 'Terms', 'Cookies'].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>

                            <button
                                onClick={scrollToTop}
                                className="w-10 h-10 bg-gray-800 hover:bg-purple-500 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-105"
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
