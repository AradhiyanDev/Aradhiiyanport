import React from 'react';
import { ArrowRight, Play, Linkedin } from 'lucide-react';
import Particles from './Particles';
import Orb from './Orb';
import RotatingText from './RotatingText';
import TextType from './TextType';
import profilePic from '../assets/profilePic.png';
const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center bg-[#000000] relative overflow-hidden lg:pt-10">
            {/* Background Shapes */}

            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Particles
                    particleColors={["#5500ffff", "#ffffffff", "#e100e8ff"]}
                    particleCount={100}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={150}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={false}
                    pixelRatio={1}
                />
            </div>
            <div className="absolute top-1/4 left-10 text-purple-600/20 rotate-12 hidden md:block">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                    <rect width="40" height="40" rx="4" />
                </svg>
            </div>
            <div className="absolute bottom-1/4 right-1/4 text-purple-600/10 -rotate-45 hidden md:block">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor">
                    <circle cx="30" cy="30" r="30" />
                </svg>
            </div>
            <div className="absolute top-1/3 right-10 text-purple-600/20 hidden md:block">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
                    <path d="M15 0L30 30H0L15 0Z" />
                </svg>
            </div>
            <div className="absolute bottom-10 left-1/4 text-purple-600/20 hidden md:block">
                <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-current rounded-full" />
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 z-10 py-10 lg:py-0">
                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-left duration-1000 text-center lg:text-left">
                        <div className="space-y-4 lg:space-y-6">
                            <p className="text-[#a5b4fc] text-base lg:text-lg font-medium tracking-wide">
                                Hi, I'm Arunkumar Aradhiyan M
                            </p>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.2] lg:leading-[1.1]">
                                I'm <span className="text-[#8b5cf6]">App</span> <span>Developer</span><br className="hidden md:block" />

                            </h1>
                            <p className="text-xl lg:text-2xl text-gray-300 font-medium">
                               2 Years Experience
                            </p>

                            <div className="pt-4 pb-2">
                                <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">Tech Stack</p>
                                <div className="flex items-center justify-center lg:justify-start gap-4">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" className="h-8 w-8 hover:scale-110 transition-transform cursor-pointer opacity-80 hover:opacity-100" title="Flutter" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" alt="Swift" className="h-8 w-8 hover:scale-110 transition-transform cursor-pointer opacity-80 hover:opacity-100" title="Swift" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-8 w-8 hover:scale-110 transition-transform cursor-pointer opacity-80 hover:opacity-100" title="Node.js" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="h-8 w-8 hover:scale-110 transition-transform cursor-pointer opacity-80 hover:opacity-100" title="React" />
                                </div>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start gap-3 mt-4">
                                <span className="text-gray-400 font-medium">Knowledge in</span>
                                <RotatingText
                                    texts={['Flutter', 'Node js', 'Swift UI', 'React js', 'Python', 'Github']}
                                    mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                                    staggerFrom={"last"}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={2000}
                                />
                            </div>

                            {/* LinkedIn Button */}
                            <div className="flex justify-center lg:justify-start pt-6">
                                <a
                                    href="https://www.linkedin.com/in/arunkumar-m008"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] hover:bg-[#006399] text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    <Linkedin size={20} />
                                    <span>Connect on LinkedIn</span>
                                </a>
                            </div>
                        </div>

                        <div className="hidden lg:flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 pt-4">
                            <TextType
                                text={[
                                    "Welcome! Thanks for visiting my portfolio — I’m Arun, a Flutter developer with hands-on production experience, confident in my skills and experienced in handling real-world production issues..",
                                ]}
                                typingSpeed={30}
                                pauseDuration={5000}
                                showCursor
                                cursorCharacter="●"

                                deletingSpeed={1}
                                variableSpeedEnabled={false}
                                variableSpeedMin={60}
                                variableSpeedMax={120}
                                cursorBlinkDuration={0.5}
                            />
                        </div>
                    </div>

                    <div className="relative animate-in fade-in slide-in-from-right duration-1000 w-full max-w-[320px] sm:max-w-[450px] lg:max-w-none mx-auto">
                        {/* Main Circle Background */}
                        <div className="relative w-full aspect-square max-w-[320px] sm:max-w-[350px] lg:max-w-[560px] mx-auto lg:ml-auto lg:mr-0 flex items-center justify-center">
                            {/* Orb Background */}
                            <div className="absolute z-10 inset-0 rounded-full overflow-hidden scale-125">
                                <Orb
                                    hoverIntensity={0.8}
                                    rotateOnHover
                                    hue={0}
                                    forceHoverState={false}
                                    backgroundColor="transparent"
                                />
                            </div>

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-full overflow-hidden flex items-end justify-center pointer-events-none">
                                <img
                                    src={profilePic}
                                    alt="James Ryen"
                                    className="w-[115%] h-auto object-cover translate-y-4 transform shadow-2xl"
                                />
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
