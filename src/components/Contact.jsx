import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gray-800/50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
                        Get In <span className="text-purple-500">Touch</span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4">
                        Feel free to reach out for collaborations, opportunities, or just to say hello!
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-center hover:shadow-2xl transition-all duration-300">
                        <div className="flex justify-center mb-4 md:mb-6">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/30 rounded-full flex items-center justify-center">
                                <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
                            </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">Email Me</h3>

                        <a
                            href="mailto:arunkumarpython40@gmail.com"
                            className="inline-block text-lg sm:text-xl md:text-2xl font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300 mb-4 md:mb-6 break-all px-2"
                        >
                            arunkumarpython40@gmail.com
                        </a>

                        <p className="text-gray-400 text-sm sm:text-base mt-4 md:mt-6">
                            I'll get back to you as soon as possible!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
