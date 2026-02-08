
import { Code, Coffee, Users, Award } from 'lucide-react';
import aboutImg from '../assets/aboutstanding.png';

const About = () => {
    const stats = [
        { icon: Code, label: 'Projects Completed', value: '10+' },
        { icon: Coffee, label: 'Cups of Coffee', value: '500+' },
        { icon: Users, label: 'Happy Clients', value: '5+' },
        { icon: Award, label: 'Years Experience', value: '1.6+' }
    ];

    return (
        <section id="about" className="py-0 bg-black/50">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:grid lg:grid-cols-12 items-center gap-10">
                    {/* Standing Image */}
                    <div className="hidden lg:block lg:col-span-4 w-full relative h-[700px] flex items-end">
                        <img
                            src={aboutImg}
                            alt="Standing Portrait"
                            className="w-full h-full object-contain object-bottom drop-shadow-2xl z-10"
                        />
                    </div>
                    {/* Content Box */}
                    <div className="w-full lg:col-span-8 relative bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-6 lg:p-10 shadow-2xl shadow-purple-900/10 -ml-0 lg:-ml-12 z-0">
                        <div className="space-y-4 text-center lg:text-left">
                            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                                About <span className="text-purple-500">Me</span>
                            </h2>

                            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
                                <p>
                                    I'm a <span className="text-white font-medium">Flutter Developer</span> with <span className="text-purple-400 font-semibold">1.6+ years</span> of experience building high-performance mobile applications.
                                    I've worked on real-world fintech products at <span className="text-white font-medium">DSM Soft</span> and <span className="text-white font-medium">Vealthx</span>, where I handled end-to-end app development — from UI design and state management to API integration, app publishing, and subscription systems.
                                </p>

                                <p>
                                    I specialize in <span className="text-white font-medium">Flutter</span>, <span className="text-white font-medium">Dart</span>, <span className="text-white font-medium">Bloc/Cubit</span> architecture, and scalable app structures.
                                    I enjoy creating smooth user experiences, clean code, and production-ready features that solve real problems.
                                </p>

                                <p>
                                    My goal is to continuously grow as a mobile engineer and work on impactful global products — with a long-term ambition of building my career in <span className="text-purple-400 font-medium">Germany</span>.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center space-y-2 p-3 rounded-xl bg-purple-500/5 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group hover:-translate-y-1">
                                        <div className="flex justify-center">
                                            <stat.icon className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="text-xl font-bold text-white">{stat.value}</div>
                                        <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default About;
