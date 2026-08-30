import { motion } from "framer-motion";
import { Github, ExternalLink, Code2, Database, Terminal, Cpu } from "lucide-react";
import { projects, skills } from "../data/Data";
import ThreeDCard from "../common/ThreeDCard";
import SkillsSphere from "../common/SkillsSphere";

const Project = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  // Map icons to categories
  const getCategoryIcon = (category) => {
    switch (category) {
      case "languages":
        return <Code2 className="w-5 h-5 text-orange-400" />;
      case "frameworks":
        return <Cpu className="w-5 h-5 text-violet-400" />;
      case "databases":
        return <Database className="w-5 h-5 text-sky-400" />;
      default:
        return <Terminal className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-glow-orange/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-[450px] h-[450px] bg-glow-purple/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        {/* Section Heading: Projects */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3 font-heading">
            My Portfolio
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Featured Projects
          </h3>
          <div className="w-16 h-1.5 bg-gradient-to-r from-orange-500 to-violet-600 rounded-full mt-4" />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants} className="perspective-1000 h-full">
              <ThreeDCard className="h-full flex flex-col justify-between" maxTilt={12}>
                <div className="p-8 flex flex-col h-full justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-2xl text-orange-400">
                        <Terminal className="w-6 h-6" />
                      </div>
                      <div className="flex items-center space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-slate-950/80 border border-slate-850 hover:border-slate-600 rounded-xl text-slate-400 hover:text-white transition-all"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.github} // Fallback demo
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 bg-slate-950/80 border border-slate-850 hover:border-slate-600 rounded-xl text-slate-400 hover:text-white transition-all"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-extrabold text-white mb-3 font-heading tracking-wide">
                      {project.title}
                    </h4>

                    {/* Description bullet points */}
                    <ul className="space-y-2 mb-6">
                      {project.bullets.map((bullet, bidx) => (
                        <li key={bidx} className="text-xs sm:text-sm text-slate-400 font-light flex items-start space-x-2">
                          <span className="text-orange-500 mt-1.5 shrink-0 select-none">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-850">
                    {project.tech.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="text-[10px] md:text-xs font-semibold px-3 py-1 bg-slate-950/60 border border-slate-850/80 rounded-full text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ThreeDCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Heading: Skills */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3 font-heading">
            Competencies
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Technical Skills
          </h3>
          <div className="w-16 h-1.5 bg-gradient-to-r from-violet-500 to-orange-500 rounded-full mt-4" />
        </div>

        {/* Skills Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Category Skills Bars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8"
          >
            {Object.keys(skills)
              .slice(0, 3) // Focus on core 3 categories: languages, frameworks, databases
              .map((category) => (
                <div key={category} className="glass-panel p-6 rounded-2xl border border-slate-800/80">
                  <div className="flex items-center space-x-2.5 mb-6 pb-3 border-b border-slate-850">
                    {getCategoryIcon(category)}
                    <h4 className="text-md font-bold text-white font-heading capitalize">
                      {category}
                    </h4>
                  </div>

                  <div className="space-y-4">
                    {skills[category].map((skill, sidx) => (
                      <div key={sidx} className="space-y-1">
                        <div className="flex justify-between text-xs font-bold">
                          <span className="text-slate-300">{skill.name}</span>
                          <span className="text-slate-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-950 border border-slate-900 rounded-full overflow-hidden p-0.5">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`h-full rounded-full ${
                              category === "languages"
                                ? "bg-orange-500"
                                : category === "frameworks"
                                ? "bg-violet-500"
                                : "bg-sky-500"
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </motion.div>

          {/* Right Side: Interactive 3D Tags Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="lg:col-span-6 flex justify-center w-full"
          >
            <div className="text-center space-y-4">
              <SkillsSphere />
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                Hover / Move cursor to rotate orbit
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
