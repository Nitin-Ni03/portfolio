import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone, ArrowDown, ChevronRight } from "lucide-react";
import ThreeDCard from "../common/ThreeDCard";
import { personalInfo } from "../data/Data";

const Hero = () => {
  const [roleText, setRoleText] = useState("");
  const roles = [
    "Frontend Developer",
    "Java Developer",
    "Full Stack Enthusiast",
    "Responsive Web Designer"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const currentFullText = roles[currentRoleIndex];

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setRoleText(currentFullText.substring(0, roleText.length - 1));
        setTypingSpeed(40); // Faster delete
      }, typingSpeed);
    } else {
      // Adding characters
      timer = setTimeout(() => {
        setRoleText(currentFullText.substring(0, roleText.length + 1));
        setTypingSpeed(100); // Normal typing speed
      }, typingSpeed);
    }

    // Handle complete typing
    if (!isDeleting && roleText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // Wait before delete
    } else if (isDeleting && roleText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(150); // Delay before typing next
    }

    return () => clearTimeout(timer);
  }, [roleText, isDeleting, currentRoleIndex]);

  const handleScrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Stagger animations variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background glow filters */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-glow-purple blur-3xl pulse-glow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-glow-orange blur-3xl pulse-glow -z-10" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 backdrop-blur-sm w-fit mb-6">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">Open to Opportunities</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.1]"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-violet-600 text-glow-orange">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-300 mb-6 h-10 flex items-center"
          >
            I am a&nbsp;
            <span className="text-orange-500 border-r-2 border-orange-500 pr-1 animate-pulse">
              {roleText}
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-400 max-w-2xl mb-8 leading-relaxed font-light"
          >
            {personalInfo.summary}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={handleScrollToProjects}
              className="flex items-center space-x-2 px-7 py-3.5 rounded-full font-bold bg-gradient-to-r from-orange-500 to-violet-600 text-white hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>View Projects</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleScrollToContact}
              className="flex items-center space-x-2 px-7 py-3.5 rounded-full font-bold bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-800 hover:border-slate-700 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <span>Contact Me</span>
            </button>
          </motion.div>

          {/* Social Icons & Contact Info */}
          <motion.div variants={itemVariants} className="flex items-center space-x-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-300 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className="p-3 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all duration-300 hover:-translate-y-1"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Floating Identity Card Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.5 }}
          className="lg:col-span-5 flex justify-center perspective-1000 w-full"
        >
          <ThreeDCard className="w-full max-w-[400px] overflow-hidden" maxTilt={20}>
            {/* Developer ID Card Style */}
            <div className="relative p-8 h-[460px] flex flex-col justify-between select-none">
              {/* Decorative Tech Rings */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full border border-violet-500/10 -mr-10 -mt-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full border border-orange-500/15 -ml-20 -mb-20 pointer-events-none" />
              
              {/* Top Details */}
              <div className="relative flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-glow-orange text-orange-500 text-xs font-bold uppercase tracking-widest font-heading">
                    Developer Spec
                  </p>
                  <p className="text-[10px] text-slate-500 tracking-wider">
                    SYS.ID: NITIN-2005
                  </p>
                </div>
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-500 to-violet-600 flex items-center justify-center font-bold text-white shadow-md">
                  N
                </div>
              </div>

              {/* Center Portrait - Hologram Placeholder Visual */}
              <div className="relative flex justify-center items-center py-6">
                <div className="relative w-40 h-40 rounded-full border border-slate-700/60 p-2 flex items-center justify-center bg-slate-950/80 shadow-[inset_0_0_20px_rgba(139,92,246,0.15)] overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-600/10 to-transparent pointer-events-none" />
                  
                  {/* Glowing Hologram rings */}
                  <div className="absolute inset-2 rounded-full border border-dashed border-orange-500/20 animate-[spin_40s_linear_infinite]" />
                  <div className="absolute inset-4 rounded-full border border-dashed border-violet-500/30 animate-[spin_20s_linear_infinite_reverse]" />

                  {/* Initials Hologram */}
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-violet-500 text-glow-orange tracking-tighter select-none font-heading">
                    NS
                  </span>

                  {/* Scan Line animation */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-orange-400 opacity-60 animate-[bounce_4s_infinite]" />
                </div>
              </div>

              {/* Bottom Details */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80 relative">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide font-heading">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-orange-400 font-semibold tracking-wide">
                    {personalInfo.title}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/60 flex flex-col justify-center">
                    <span className="text-slate-500 font-semibold">LOC:</span>
                    <span className="text-slate-300 font-medium">MH, India</span>
                  </div>
                  <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800/60 flex flex-col justify-center">
                    <span className="text-slate-500 font-semibold">STATUS:</span>
                    <span className="text-emerald-400 font-bold animate-pulse">ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </ThreeDCard>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1.5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300" onClick={handleScrollToProjects}>
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-orange-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
