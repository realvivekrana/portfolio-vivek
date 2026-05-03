import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    label: "Frontend",
    color: "#4F8EF7",
    skills: [
      { name: "React", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "HTML & CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    label: "Backend",
    color: "#9B5DE5",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 78 },
    ],
  },
  {
    label: "Database & Tools",
    color: "#7BAEF7",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "SQL", level: 70 },
      { name: "Git & GitHub", level: 82 },
    ],
  },
];

const techIcons = [
  "React", "Node.js", "MongoDB", "TypeScript", "Tailwind",
  "Express", "JavaScript", "HTML5", "CSS3", "Git",
  "REST API", "Vite", "SQL", "Bootstrap", "GitHub",
];

const SkillsNew = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 50%, rgba(79,142,247,0.06) 0%, transparent 60%)",
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
            💻 Technical Expertise
          </p>
          <h2
            className="font-black tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", color: "#F0F0FF" }}
          >
            Skills &{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Technologies
            </span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "linear-gradient(90deg, #4F8EF7, #9B5DE5)", transformOrigin: "center" }}
          />
        </motion.div>

        {/* Skill bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + ci * 0.1, duration: 0.5 }}
              className="rounded-2xl p-5 sm:p-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Category label */}
              <div className="flex items-center gap-2 mb-5">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}88` }}
                />
                <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>

              {/* Skill bars */}
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs sm:text-sm font-semibold" style={{ color: "#C8C8E8" }}>
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono" style={{ color: cat.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.4 + ci * 0.1 + si * 0.06, duration: 0.8, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${cat.color}, ${cat.color}99)`,
                          boxShadow: `0 0 8px ${cat.color}66`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrolling tech pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="overflow-hidden"
        >
          <p className="text-center text-xs font-mono tracking-widest uppercase mb-5" style={{ color: "#4B4B6A" }}>
            Technologies I Work With
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {techIcons.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.04 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-mono font-semibold cursor-default"
                style={{
                  background: "rgba(79,142,247,0.07)",
                  border: "1px solid rgba(79,142,247,0.18)",
                  color: "#7BAEF7",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-12"
        >
          {[
            { icon: "⚡", value: "15+", label: "Technologies" },
            { icon: "🚀", value: "10+", label: "Projects" },
            { icon: "💼", value: "2+ Yrs", label: "Experience" },
            { icon: "🏆", value: "5+", label: "Certificates" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + i * 0.08 }}
              whileHover={{ scale: 1.04, y: -3 }}
              className="rounded-2xl p-4 sm:p-5 text-center"
              style={{
                background: "rgba(79,142,247,0.04)",
                border: "1px solid rgba(79,142,247,0.1)",
              }}
            >
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div
                className="text-xl sm:text-2xl font-black mb-0.5"
                style={{
                  background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-medium" style={{ color: "#6B6B8A" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsNew;
