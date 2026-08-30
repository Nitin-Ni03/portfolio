import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background blur opacity on scroll
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-1 cursor-pointer group select-none"
          >
            <span className="text-2xl font-bold tracking-tight text-white font-heading">
              Nitin
            </span>
            <span className="text-2xl font-black text-orange-500 text-glow-orange font-heading transition-transform duration-300 group-hover:scale-150 inline-block">
              .
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 bg-slate-900/40 p-1.5 rounded-full border border-slate-800/80">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                    activeSection === link.id
                      ? "text-white bg-gradient-to-r from-orange-500/80 to-violet-600/80 shadow-md shadow-orange-500/10"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/30"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavClick("contact")}
              className="flex items-center space-x-1 px-5 py-2.5 rounded-full text-sm font-semibold bg-white text-slate-950 hover:bg-gradient-to-r hover:from-orange-500 hover:to-violet-600 hover:text-white transition-all duration-300 shadow-lg shadow-white/5 active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none p-1.5 rounded-lg hover:bg-slate-900"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-950/95 border-b border-slate-900 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 space-y-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full py-3 text-center rounded-xl text-base font-semibold transition-all duration-200 ${
                activeSection === link.id
                  ? "text-white bg-gradient-to-r from-orange-500/20 to-violet-600/20 border border-orange-500/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="w-full py-3 mt-2 rounded-xl text-center text-base font-bold bg-white text-slate-950 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-1"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
