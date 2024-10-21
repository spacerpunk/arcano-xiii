import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import About from './Components/About'
import Technologies from './Components/Technologies';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-700 antialiased
    selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>
      <div className="container mx-auto px-8"> 
        <NavBar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
