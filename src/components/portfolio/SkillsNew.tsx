import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect, lazy, Suspense } from "react";
import { skills } from "@/data/portfolio-data";

// Lazy load the 3D Skills Sphere
const SkillsSphere = lazy(() => import("@/components/3d/SkillsSphere"));

const SkillsNew = () => {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [shouldLoad3D, setShouldLoad3D] = useState(false);

  const allSkills = [
    ...skills.frontend.map(s => ({ ...s, category: "Frontend" })),
    ...skills.backend.map(s => ({ ...s, category: "Backend" })),
    ...skills.database.map(s => ({ ...s, category: "Database" })),
  ];

  // Load 3D sphere only when section is near viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad3D(true);
          observer.disconnect(); // Load once, never unload
        }
      },
      { rootMargin: '300px' } // Preload 300px before visible
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
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
        {/* Header with typography system */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          {/* Small mono label */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 rounded-full glass border border-primary/20 font-mono text-label text-primary tracking-[0.2em] uppercase mb-6"
          >
            💻 Technical Expertise
          </motion.span>
          
          {/* Main heading - Syne Display with 3D depth */}
          <motion.h2 
            className="font-display text-display-lg font-bold mb-6 tracking-[-0.02em]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
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
          
          {/* Subtitle - Inter body font */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="font-body text-body-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Mastering modern technologies to build exceptional digital experiences
          </motion.p>
          
          {/* Large Bebas watermark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 0.025, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[clamp(120px,20vw,220px)] font-normal text-white/[0.03] leading-none tracking-wider pointer-events-none whitespace-nowrap"
            style={{ 
              textShadow: '0 0 40px rgba(79, 142, 247, 0.1)',
            }}
          >
            SKILLS
          </motion.div>
        </motion.div>

        {/* 3D Skills Orbit Sphere - Lazy loaded when in viewport */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          {shouldLoad3D ? (
            <Suspense fallback={
              <div style={{ 
                height: '400px', 
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#4F8EF7', 
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '14px',
                letterSpacing: '0.1em'
              }}>
                Loading 3D...
              </div>
            }>
              <SkillsSphere />
            </Suspense>
          ) : (
            <div style={{ height: '400px' }} />
          )}
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
                
                {/* Value - Plus Jakarta heading font */}
                <div className="font-heading text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                
                {/* Label - Inter body font */}
                <div className="font-body text-body-sm text-muted-foreground font-medium">
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
              <span className="font-mono text-mono-sm text-muted-foreground">
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
