import Navbar from "./components/common/Navbar";
import ParticleBackground from "./components/common/ParticleBackground";
import Hero from "./components/home/Hero";
import About from "./components/pages/About";
import Project from "./components/pages/Project";
import Contact from "./components/pages/Contact";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Ambient background particles */}
      <ParticleBackground />

      {/* Floating Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Project />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
