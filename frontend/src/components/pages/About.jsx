import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { education, certifications, experience, personalInfo } from "../data/Data";
import ThreeDCard from "../common/ThreeDCard";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/10 w-96 h-96 rounded-full bg-glow-blue/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/10 w-80 h-80 rounded-full bg-glow-purple/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-3 font-heading">
            My Journey
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            About Me & Experience
          </h3>
          <div className="w-16 h-1.5 bg-gradient-to-r from-orange-500 to-violet-600 rounded-full mt-4" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Left Column: Short Intro & Timeline */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div variants={itemVariants} className="glass-panel p-8 rounded-2xl border border-slate-800/80">
              <h4 className="text-xl font-bold text-white mb-4 font-heading flex items-center space-x-2">
                <span>Who I Am</span>
              </h4>
              <p className="text-slate-400 font-light leading-relaxed mb-4">
                Hi, I'm Nitin. I specialize in backend systems using <strong className="text-orange-400 font-medium">Java, Spring Boot, and Spring Security</strong>, combined with modern, responsive frontends built on <strong className="text-violet-400 font-medium">React.js</strong>.
              </p>
              <p className="text-slate-400 font-light leading-relaxed">
                My objective is to merge core architectural integrity on the server side with immersive, responsive, and animated customer experiences on the client side. I focus on security (JWT), clean REST APIs, and writing clean, scalable code.
              </p>
            </motion.div>

            {/* Timeline */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-xl font-bold text-white mb-6 font-heading flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-orange-500" />
                <span>Experience & Education Timeline</span>
              </h4>

              <div className="relative border-l-2 border-slate-800 ml-3 pl-8 space-y-12">
                {/* Experience Item */}
                {experience.map((exp, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline Node indicator */}
                    <div className="absolute -left-[41px] top-1 bg-slate-950 border-2 border-orange-500 rounded-full h-6 w-6 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(249,115,22,0.4)]">
                      <Briefcase className="w-3 h-3 text-orange-500" />
                    </div>

                    <div className="glass-panel p-6 rounded-2xl border border-slate-800/60 hover:border-orange-500/30 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <div>
                          <h5 className="text-lg font-bold text-white font-heading">{exp.role}</h5>
                          <p className="text-sm text-orange-400 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex flex-col sm:items-end text-xs text-slate-500">
                          <span className="flex items-center gap-1 font-medium">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, bidx) => (
                          <li key={bidx} className="text-sm text-slate-400 font-light flex items-start space-x-2">
                            <span className="text-orange-500 mt-1.5 shrink-0 select-none">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}

                {/* Education Item */}
                {education.map((edu, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-[41px] top-1 bg-slate-950 border-2 border-violet-500 rounded-full h-6 w-6 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(139,92,246,0.4)]">
                      <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
                    </div>

                    <div className="glass-panel p-6 rounded-2xl border border-slate-800/60 hover:border-violet-500/30 transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h5 className="text-lg font-bold text-white font-heading">{edu.degree}</h5>
                          <p className="text-sm text-violet-400 font-medium">{edu.college}</p>
                          <p className="text-xs text-slate-400 font-medium mt-1">CGPA: {edu.cgpa}</p>
                        </div>
                        <div className="flex flex-col sm:items-end text-xs text-slate-500">
                          <span className="flex items-center gap-1 font-medium">
                            <Calendar className="w-3.5 h-3.5" />
                            {edu.duration}
                          </span>
                          <span className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Flipping Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-white mb-6 font-heading flex items-center space-x-2">
                <Award className="w-5 h-5 text-orange-500" />
                <span>Certifications</span>
              </h4>

              <div className="space-y-6">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="card-flip-container h-48 w-full cursor-pointer relative select-none">
                    <div className="card-flip-inner w-full h-full relative">
                      
                      {/* CARD FRONT */}
                      <div className="card-flip-front glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-orange-500/30 transition-all">
                        <div className="flex justify-between items-start">
                          <div className="p-3 bg-orange-500/10 rounded-xl border border-orange-500/20 text-orange-400">
                            <Award className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-semibold px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-full text-slate-400">
                            {cert.year}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <h5 className="text-base font-bold text-white font-heading tracking-wide">
                            {cert.title}
                          </h5>
                          <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                            {cert.provider}
                          </p>
                        </div>
                        <p className="text-[10px] text-slate-500 text-right uppercase tracking-widest font-semibold animate-pulse">
                          Hover to Inspect
                        </p>
                      </div>

                      {/* CARD BACK */}
                      <div className="card-flip-back bg-gradient-to-br from-slate-900 to-slate-950 p-6 rounded-2xl border border-orange-500/30 flex flex-col justify-between shadow-2xl">
                        <div className="flex items-center space-x-2 text-orange-400 pb-2 border-b border-slate-800/80">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-xs font-bold uppercase tracking-widest">Verified Credentials</span>
                        </div>
                        <p className="text-xs text-slate-300 font-light leading-relaxed my-auto">
                          {cert.details}
                        </p>
                        <div className="flex justify-between items-center text-[10px] text-slate-500">
                          <span>PROVIDER: {cert.provider.toUpperCase()}</span>
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">CERTIFIED</span>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
