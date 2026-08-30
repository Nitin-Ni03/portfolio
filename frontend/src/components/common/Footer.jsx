import { ArrowUp, Mail } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { personalInfo } from "../data/Data";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 py-12 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-glow-purple/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center space-x-0.5 cursor-pointer select-none" onClick={handleScrollToTop}>
          <span className="text-xl font-bold tracking-tight text-white font-heading">Nitin</span>
          <span className="text-xl font-black text-orange-500 text-glow-orange font-heading">.</span>
        </div>

        {/* copyright */}
        <p className="text-sm text-slate-500 text-center font-light">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.
        </p>

        {/* Right Socials & Back to Top */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-500 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-300 shadow-md active:scale-95 cursor-pointer group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
