import About from './_components/About';
import Contact from './_components/Contact';
import Hero from './_components/Hero';
import Navbar from './_components/Navbar';
import Projects from './_components/Projects';
import Skills from './_components/Skills';

const Home = () => {
  return (
    <div className="min-h-screen selection:bg-[#7CFFB2] selection:text-black">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 lg:px-12">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-12 border-t border-[#1C1F2A] mt-24 text-center text-sm text-[#9CA3AF]">
        <p>© {new Date().getFullYear()} — Built with precision & craft.</p>
      </footer>
    </div>
  );
}

export default Home;