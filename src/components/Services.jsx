import React from 'react';
import { Code, Smartphone, Globe, Palette, Database, Zap } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: Code,
            title: 'Web Development',
            description: 'Full-stack web development with modern frameworks and technologies. From concept to deployment, I build scalable and maintainable applications.',
            features: ['React/Next.js', 'Node.js APIs', 'Database Design', 'Performance Optimization']
        },
        {
            icon: Smartphone,
            title: 'Mobile Development',
            description: 'Cross-platform mobile applications using React Native. Creating native-like experiences for both iOS and Android platforms.',
            features: ['React Native', 'Native Modules', 'App Store Deployment', 'Push Notifications']
        },
        {
            icon: Globe,
            title: 'Single Page Applications',
            description: 'Fast, interactive SPAs with smooth user experiences. Utilizing modern state management and routing solutions.',
            features: ['React Router', 'State Management', 'Code Splitting', 'Progressive Web Apps']
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'User-centered design approach to create intuitive and visually appealing interfaces that users love to interact with.',
            features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems']
        },
        {
            icon: Database,
            title: 'Backend Development',
            description: 'Robust server-side solutions with scalable architectures. Database design, API development, and cloud integration.',
            features: ['RESTful APIs', 'GraphQL', 'Database Optimization', 'Cloud Services']
        },
        {
            icon: Zap,
            title: 'Performance Optimization',
            description: 'Improving application performance through code optimization, caching strategies, and modern development practices.',
            features: ['Code Splitting', 'Lazy Loading', 'Caching', 'Bundle Optimization']
        }
    ];

    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        My <span className="text-purple-500">Services</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        I offer a comprehensive range of services to help bring your digital ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-700 hover:border-purple-500"
                        >
                            <div className="flex items-center justify-center w-16 h-16 bg-purple-500/20 rounded-xl mb-6 group-hover:bg-purple-500/30 transition-colors duration-300">
                                <service.icon className="w-8 h-8 text-purple-400" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 leading-relaxed mb-6">
                                {service.description}
                            </p>

                            <ul className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="flex items-center text-sm text-gray-300"
                                    >
                                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 pt-6 border-t border-gray-700">
                                <button className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors duration-300">
                                    Learn More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-purple-100 mb-6 max-w-xl mx-auto">
                            Let's discuss your ideas and bring them to life with modern web technologies.
                        </p>
                        <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
