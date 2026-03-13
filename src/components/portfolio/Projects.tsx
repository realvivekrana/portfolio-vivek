import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { projects, moreProjects } from "@/data/portfolio-data";

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showMore, setShowMore] = useState(false);

  // Combine all projects
  const allProjects = [...projects, ...moreProjects];
  const displayedProjects = showMore ? allProjects : projects;

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore my latest work showcasing modern web applications built with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          <AnimatePresence>
            {displayedProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ 
                  delay: i < projects.length ? 0.2 + i * 0.1 : 0,
                  duration: 0.5,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.02, y: -8 }}
                className="glass rounded-2xl overflow-hidden group hover:glow-border transition-all duration-500 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 md:h-52 bg-gradient-to-br from-primary/5 to-accent/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg hover:shadow-primary/50 transition-all"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background shadow-lg hover:shadow-foreground/50 transition-all"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {moreProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <motion.button
              onClick={() => setShowMore(!showMore)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl glass border-primary/30 text-foreground font-semibold hover:border-primary/60 transition-all duration-300 flex items-center gap-2 hover:bg-primary/5 group"
            >
              {showMore ? "Show Less Projects" : "Show More Projects"}
              <motion.div
                animate={{ rotate: showMore ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} className="group-hover:text-primary transition-colors" />
              </motion.div>
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
