import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects, socialLinks } from "@/data/portfolio-data";

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="group rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(79,142,247,0.1)",
        transition: "border-color 0.3s",
      }}
      onMouseEnterCapture={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.3)")}
      onMouseLeaveCapture={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.1)")}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: "clamp(160px, 25vw, 220px)" }}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(5,5,8,0.9) 0%, rgba(5,5,8,0.3) 50%, transparent 100%)",
          }}
        />

        {/* Hover action buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 flex items-center justify-center gap-3"
          style={{ background: "rgba(5,5,8,0.75)", backdropFilter: "blur(4px)" }}
        >
          {project.liveUrl && project.liveUrl !== "#" && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)" }}
              aria-label="Live Demo"
            >
              <ExternalLink size={14} />
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#F0F0FF",
              }}
              aria-label="GitHub"
            >
              <Github size={14} />
              Code
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 sm:p-5">
        <h3
          className="font-bold text-base sm:text-lg mb-2 transition-colors duration-200"
          style={{ color: hovered ? "#4F8EF7" : "#F0F0FF" }}
        >
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm leading-relaxed mb-4 flex-1" style={{ color: "#8888AA" }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(tech => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold"
              style={{
                background: "rgba(79,142,247,0.08)",
                border: "1px solid rgba(79,142,247,0.18)",
                color: "#7BAEF7",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Mobile action links */}
        <div className="flex gap-2 mt-4 sm:hidden">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white flex-1 justify-center"
              style={{ background: "rgba(79,142,247,0.15)", border: "1px solid rgba(79,142,247,0.3)" }}
            >
              <ExternalLink size={12} />
              Live
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold flex-1 justify-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#8888AA",
              }}
            >
              <Github size={12} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsNew = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(79,142,247,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase mb-3" style={{ color: "#4F8EF7" }}>
            🚀 Featured Work
          </p>
          <h2
            className="font-black tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", color: "#F0F0FF" }}
          >
            Selected{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, #4F8EF7, #9B5DE5)", transformOrigin: "center" }}
          />
          <p className="mt-4 text-sm sm:text-base max-w-xl mx-auto" style={{ color: "#6B6B8A" }}>
            Showcasing my latest work in web development and design
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10 sm:mt-12"
        >
          <motion.a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold"
            style={{
              background: "rgba(79,142,247,0.08)",
              border: "1px solid rgba(79,142,247,0.25)",
              color: "#7BAEF7",
            }}
          >
            <Github size={18} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsNew;
