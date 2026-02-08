import React, { useState, useEffect } from 'react';
import { Menu, X, Share2, Globe } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', hasChevron: true },
        { name: 'About', hasChevron: true },
        { name: 'Service', hasChevron: true },
        { name: 'Portfolio', hasChevron: true }
    ];

    const scrollToSection = (item) => {
        const element = document.getElementById(item.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0f1115]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
            }`}>
            <nav className="container mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-white flex items-center">
                        Arunkumar<span className="text-purple-500 ml-1">Aaradhiyan</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.name)}
                                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-[15px] flex items-center gap-1 group"
                            >
                                {item.name}
                                {item.hasChevron && (
                                    <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Right Icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                            <Share2 size={20} />
                        </button>
                        <div className="bg-purple-600/30 p-2 rounded-lg text-purple-400 border border-purple-500/20">
                            <Globe size={20} />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-gray-800">
                        <div className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.name)}
                                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium text-left"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
