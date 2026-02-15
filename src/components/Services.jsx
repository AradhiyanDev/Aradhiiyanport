import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: 'Software Engineer – Mobile Applications',
            company: 'Vealthx',
            location: 'Bengalaru,Karnataka',
            period: 'August 2025 – Present',
            type: 'Full-time',
            current: true,
            responsibilities: [
                'Leading mobile application development using Flutter and BLoC architecture',
                'Architecting scalable fintech solutions with secure data management',
                'Implementing subscription systems and DigiLocker integration',
                'Managing end-to-end app store deployment and lifecycle',
                'Optimizing application performance and navigation flows'
            ],
            technologies: ['Flutter', 'BLoC', 'Node.js', 'PostgreSQL', 'DigiLocker API']
        },
        {
            id: 2,
            title: 'Mobile App Developer',
            company: 'DSM Soft Pvt Ltd',
            location: 'Tiruchirappalli,Tamil Nadu',
            period: 'August 2024 – August 2025',
            type: 'Full-time',
            current: false,
            responsibilities: [
                'Developed and maintained Flutter and React Native applications',
                'Built SR Portal field service management app from scratch',
                'Enhanced FMS Lite fleet monitoring system with UI redesign',
                'Integrated Node.js backend APIs and real-time features',
                'Managed Play Store and App Store deployments'
            ],
            technologies: ['Flutter', 'React Native', 'Node.js', 'Firebase', 'REST APIs']
        },
        {
            id: 3,
            title: 'App Developer Intern',
            company: 'Zop Technologies',
            location: 'Tiruvannamalai ,Tamil Nadu',
            period: 'January 2024 – July 2024',
            type: 'Internship',
            current: false,
            responsibilities: [
                'Assisted in mobile application development projects',
                'Learned Flutter and React Native frameworks',
                'Contributed to UI/UX implementation and bug fixes',
                'Collaborated with senior developers on feature development',
                'Gained hands-on experience with version control and deployment'
            ],
            technologies: ['Flutter', 'React Native', 'Git', 'Firebase']
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        Work <span className="text-purple-500">Experience</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        My professional journey in mobile application development.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-600 to-transparent hidden md:block"></div>

                        {experiences.map((exp, index) => (
                            <div key={exp.id} className="relative mb-12 last:mb-0">
                                {/* Timeline dot */}
                                <div className="absolute left-8 top-8 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 hidden md:block transform -translate-x-1.5">
                                    {exp.current && (
                                        <span className="absolute inset-0 rounded-full bg-purple-500 animate-ping"></span>
                                    )}
                                </div>

                                {/* Content card */}
                                <div className="md:ml-20 bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-purple-500">
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <h3 className="text-xl font-bold text-white">
                                                    {exp.title}
                                                </h3>
                                                {exp.current && (
                                                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium border border-green-500/30">
                                                        Current
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex items-center gap-2 text-purple-400 font-medium mb-2">
                                                <Briefcase size={16} />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Meta info */}
                                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin size={14} />
                                            <span>{exp.location}</span>
                                        </div>
                                        <div className="px-2 py-0.5 bg-gray-700 rounded text-xs">
                                            {exp.type}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-white mb-2">2+</div>
                        <div className="text-gray-400 text-sm">Years of Experience</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-white mb-2">3+</div>
                        <div className="text-gray-400 text-sm">Projects Delivered</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6 text-center">
                        <div className="text-3xl font-bold text-white mb-2">3</div>
                        <div className="text-gray-400 text-sm">Companies Worked</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

