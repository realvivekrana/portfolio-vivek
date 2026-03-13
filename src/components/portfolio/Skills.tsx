import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Skill = {
  name: string;
  level: number;
  icon?: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

// SKILLS CONFIGURATION - Update your skills here
const allSkills = [
  { name: "HTML", level: 90, icon: "🌐" },
  { name: "CSS", level: 85, icon: "🎨" },
  { name: "JavaScript", level: 85, icon: "⚡" },
  { name: "React", level: 80, icon: "⚛️" },
  { name: "Vite", level: 80, icon: "⚡" },
  { name: "Bootstrap", level: 80, icon: "🅱️" },
  { name: "Tailwind CSS", level: 85, icon: "💨" },
  { name: "Node.js", level: 80, icon: "🟢" },
  { name: "Express.js", level: 80, icon: "🚂" },
  { name: "MongoDB", level: 75, icon: "🍃" },
  { name: "SQL", level: 70, icon: "🗄️" },
  { name: "Git", level: 75, icon: "📦" },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Technologies and tools I work with to build amazing web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {allSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: 0.1 + i * 0.05,
                duration: 0.4,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass rounded-xl p-4 md:p-6 hover:glow-border transition-all duration-300 group text-center"
            >
              <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>
              <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
