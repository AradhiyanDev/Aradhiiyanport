

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">

            <Hero />
            <About />
            <Projects />
            <Skills />
            <Services />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
