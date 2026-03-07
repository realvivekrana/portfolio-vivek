import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SkillCategory = {
  title: string;
  skills: { name: string; level: number }[];
};

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Vercel", level: 75 },
      { name: "Figma", level: 65 },
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "Framer Motion", level: 70 },
      { name: "Shadcn UI", level: 75 },
    ],
  },
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
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + ci * 0.15 }}
              className="glass rounded-2xl p-6 hover:glow-border transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-primary mb-6 font-mono">
                {`// ${cat.title}`}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.4 + ci * 0.15 + si * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
