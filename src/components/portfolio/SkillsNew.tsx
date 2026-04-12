import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills } from "@/data/portfolio-data";

const SkillsNew = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const allSkills = [
    ...skills.frontend.map(s => ({ ...s, category: "Frontend" })),
    ...skills.backend.map(s => ({ ...s, category: "Backend" })),
    ...skills.database.map(s => ({ ...s, category: "Database" })),
  ];

  // Orbit animation configuration
  const orbitRadius = 200;
  const centerX = 0;
  const centerY = 0;

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-6"
          >
            💻 Technical Expertise
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Mastering modern technologies to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid with 3D Hover Effect */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {allSkills.map((skill, i) => {
              const angle = (i / allSkills.length) * 2 * Math.PI;
              const delay = i * 0.05;

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ 
                    delay: delay,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 10,
                    rotateX: -10,
                    z: 50,
                  }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="relative group"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="glass rounded-2xl p-6 h-full border border-primary/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden">
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ filter: "blur(20px)" }}
                    />
                    
                    <div className="relative z-10">
                      {/* Skill name */}
                      <h3 className="text-base md:text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      
                      {/* Progress circle */}
                      <div className="relative w-16 h-16 mx-auto mb-3">
                        <svg className="w-full h-full transform -rotate-90">
                          {/* Background circle */}
                          <circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            className="text-primary/10"
                          />
                          {/* Progress circle */}
                          <motion.circle
                            cx="32"
                            cy="32"
                            r="28"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                            strokeLinecap="round"
                            className="text-primary"
                            initial={{ strokeDasharray: "0 175.93" }}
                            animate={inView ? {
                              strokeDasharray: `${(skill.level / 100) * 175.93} 175.93`
                            } : {}}
                            transition={{ delay: delay + 0.3, duration: 1, ease: "easeOut" }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">{skill.level}%</span>
                        </div>
                      </div>
                      
                      {/* Category badge */}
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {skill.category}
                      </span>
                    </div>

                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={hoveredSkill === skill.name ? { x: "100%" } : {}}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Technologies", value: allSkills.length },
            { label: "Projects", value: "10+" },
            { label: "Experience", value: "2+ Years" },
            { label: "Certifications", value: "5+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-2xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsNew;
