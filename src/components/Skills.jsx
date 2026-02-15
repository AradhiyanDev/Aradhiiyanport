import React from 'react';
import { Code2, Smartphone, Database, Server, GitBranch, Wrench } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Mobile Development',
            icon: Smartphone,
            color: 'purple',
            skills: ['Flutter', 'React Native', 'BLoC Architecture', 'Deep Linking']
        },
        {
            title: 'Frontend Development',
            icon: Code2,
            color: 'blue',
            skills: ['React.js', 'JavaScript','HTML/CSS', 'Tailwind CSS']
        },
        {
            title: 'Backend Development',
            icon: Server,
            color: 'green',
            skills: ['Node.js', 'Express.js', 'REST APIs', 'Python', 'API Integration']
        },
        {
            title: 'Database',
            icon: Database,
            color: 'orange',
            skills: ['PostgreSQL', 'Firebase']
        },
        {
            title: 'Tools & DevOps',
            icon: Wrench,
            color: 'pink',
            skills: ['Android Studio', 'Xcode', 'CI/CD']
        },
        {
            title: 'Version Control',
            icon: GitBranch,
            color: 'indigo',
            skills: ['Git', 'GitHub','Play Store', 'App Store']
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/30 group-hover:border-purple-500',
            blue: 'from-blue-500/20 to-blue-600/20 border-blue-500/30 group-hover:border-blue-500',
            green: 'from-green-500/20 to-green-600/20 border-green-500/30 group-hover:border-green-500',
            orange: 'from-orange-500/20 to-orange-600/20 border-orange-500/30 group-hover:border-orange-500',
            pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/30 group-hover:border-pink-500',
            indigo: 'from-indigo-500/20 to-indigo-600/20 border-indigo-500/30 group-hover:border-indigo-500'
        };
        return colors[color] || colors.purple;
    };

    const getIconColorClass = (color) => {
        const colors = {
            purple: 'text-purple-400',
            blue: 'text-blue-400',
            green: 'text-green-400',
            orange: 'text-orange-400',
            pink: 'text-pink-400',
            indigo: 'text-indigo-400'
        };
        return colors[color] || colors.purple;
    };

    return (
        <section id="skills" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        My <span className="text-purple-500">Skills</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Technologies and tools I use to build production-ready applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <div
                                key={index}
                                className={`group bg-gradient-to-br ${getColorClasses(category.color)} border rounded-xl p-6 transition-all duration-300 hover:shadow-xl`}
                                style={{ transform: 'translateZ(0)' }}
                            >
                                <div className="flex items-center gap-3 mb-5">
                                    <div className={`${getIconColorClass(category.color)}`}>
                                        <Icon size={28} strokeWidth={2} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-4 py-2 bg-gray-800/80 text-gray-200 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors duration-200 border border-gray-700"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;

