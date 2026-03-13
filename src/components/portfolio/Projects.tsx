import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects, moreProjects } from "@/data/portfolio-data";

const Projects = () => {
  const featuredRef = useRef(null);
  const moreRef = useRef(null);
  const featuredInView = useInView(featuredRef, { once: true, margin: "-100px" });
  const moreInView = useInView(moreRef, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        {/* Featured Projects Section */}
        <div ref={featuredRef}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={featuredInView ? { opacity: 1, y: 0 } : {}}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-20">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={featuredInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  delay: 0.2 + i * 0.1,
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
          </div>
        </div>

        {/* More Projects Section */}
        <div ref={moreRef} className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={moreInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-3">
              More <span className="gradient-text">Projects</span>
            </h3>
            <div className="w-16 h-1 bg-primary/60 mx-auto mb-3 rounded-full" />
            <p className="text-center text-muted-foreground text-sm mb-10">
              Additional projects and experiments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
            {moreProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={moreInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  delay: 0.1 + i * 0.1,
                  duration: 0.4,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-xl p-5 hover:glow-border transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors flex-1">
                    {project.title}
                  </h4>
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-all ml-2"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </motion.a>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
