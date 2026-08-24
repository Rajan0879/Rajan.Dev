import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import CustomCursor from "../components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-red-500 selection:text-white relative overflow-x-hidden">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Floating Glass Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
