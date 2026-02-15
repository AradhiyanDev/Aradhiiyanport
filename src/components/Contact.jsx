import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Get In <span className="text-purple-500">Touch</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Feel free to reach out for collaborations, opportunities, or just to say hello!
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-2xl p-12 text-center hover:shadow-2xl transition-all duration-300">
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 bg-purple-500/30 rounded-full flex items-center justify-center">
                                <Mail className="w-10 h-10 text-purple-400" />
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">Email Me</h3>

                        <a
                            href="mailto:arunkumarpython40@gmail.com"
                            className="inline-block text-2xl font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300 mb-6"
                        >
                            arunkumarpython40@gmail.com
                        </a>

                        <p className="text-gray-400 mt-6">
                            I'll get back to you as soon as possible!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

