import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SkillsSphere from "@/components/3d/SkillsSphere";
import { skills } from "@/data/portfolio-data";

const SkillsNew = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const allSkills = [
    ...skills.frontend.map(s => ({ ...s, category: "Frontend" })),
    ...skills.backend.map(s => ({ ...s, category: "Backend" })),
    ...skills.database.map(s => ({ ...s, category: "Database" })),
  ];

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Floating geometric shapes in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-lg"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 border-2 border-accent/20"
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-6"
          >
            💻 Technical Expertise
          </motion.span>
          
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            {/* 3D Text Depth Effect */}
            <span 
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              style={{
                textShadow: `
                  1px 1px 0 #1a1a2e,
                  2px 2px 0 #1a1a2e,
                  3px 3px 0 #1a1a2e,
                  4px 4px 0 #0d0d14,
                  5px 5px 0 #0d0d14,
                  6px 6px 0 #0d0d14
                `,
              }}
            >
              Skills & Technologies
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Mastering modern technologies to build exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* 3D Skills Orbit Sphere */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          <SkillsSphere />
        </motion.div>

        {/* Stats Section with 3D Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { label: "Technologies", value: allSkills.length, icon: "⚡" },
            { label: "Projects", value: "10+", icon: "🚀" },
            { label: "Experience", value: "2+ Years", icon: "💼" },
            { label: "Certifications", value: "5+", icon: "🏆" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
              animate={inView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
              transition={{ 
                delay: 1 + i * 0.1, 
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateX: -5,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(79, 142, 247, 0.3)",
              }}
              className="glass rounded-2xl p-6 text-center border border-primary/10 hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: "blur(20px)" }}
              />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-2"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  {stat.icon}
                </motion.div>
                
                {/* Value */}
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Categories Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {[
            { category: "Frontend", color: "#4F8EF7", count: skills.frontend.length },
            { category: "Backend", color: "#9B5DE5", count: skills.backend.length },
            { category: "Database", color: "#7BAEF7", count: skills.database.length },
          ].map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.3 + i * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ 
                  backgroundColor: cat.color,
                  boxShadow: `0 0 10px ${cat.color}66`,
                }}
              />
              <span className="text-sm font-medium text-foreground">
                {cat.category}
              </span>
              <span className="text-xs text-muted-foreground">
                ({cat.count})
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsNew;
