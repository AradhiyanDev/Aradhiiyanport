import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: [
                { name: 'React', level: 95 },
                { name: 'TypeScript', level: 90 },
                { name: 'Next.js', level: 85 },
                { name: 'Tailwind CSS', level: 92 },
                { name: 'JavaScript', level: 95 },
                { name: 'HTML/CSS', level: 98 }
            ]
        },
        {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 88 },
                { name: 'Express.js', level: 85 },
                { name: 'PostgreSQL', level: 80 },
                { name: 'MongoDB', level: 78 },
                { name: 'REST APIs', level: 90 },
                { name: 'GraphQL', level: 75 }
            ]
        },
        {
            title: 'Tools & Others',
            skills: [
                { name: 'Git', level: 95 },
                { name: 'Docker', level: 70 },
                { name: 'AWS', level: 75 },
                { name: 'Figma', level: 85 },
                { name: 'Jest', level: 80 },
                { name: 'Webpack', level: 78 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        My <span className="text-purple-500">Skills</span>
                    </h2>
                    <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                        Here are the technologies and tools I work with to bring ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 text-center">
                                {category.title}
                            </h3>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-purple-400 text-sm">{skill.level}%</span>
                                        </div>

                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Technologies */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold text-white mb-8">Other Technologies</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            'Redux', 'Zustand', 'Framer Motion', 'Three.js', 'D3.js',
                            'Socket.io', 'Prisma', 'Supabase', 'Firebase', 'Vercel',
                            'Netlify', 'Stripe', 'Auth0', 'Cypress', 'Storybook'
                        ].map((tech, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
