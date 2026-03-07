import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2 } from "lucide-react";

// EXPERIENCE CONFIGURATION - Update your work experience here
const experiences = [
  {
    icon: Code2,
    year: "Sep 2023 - May 2024",
    title: "MERN Stack Developer Trainee",
    company: "Skill Academy",
    location: "Mumbai, Maharashtra (Remote)",
    description: "Learned full-stack development including HTML, CSS, JavaScript, React, and backend technologies.",
  },
  {
    icon: Briefcase,
    year: "Apr 2025 - Sep 2025",
    title: "MERN Stack Developer Trainee",
    company: "CETPA Infotech Pvt Ltd",
    location: "Noida, Uttar Pradesh (On-site)",
    description: "Completed training in MERN stack including React, Node.js, Express.js, and MongoDB. Built multiple full-stack projects.",
  },
  {
    icon: Briefcase,
    year: "Feb 2026 - Present",
    title: "Frontend Developer Intern",
    company: "Athenura",
    location: "Noida, Uttar Pradesh (Remote)",
    description: "Working on frontend development using HTML, Tailwind CSS, and modern UI practices.",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((item, i) => (
            <motion.div
              key={item.title + item.company}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: 0.2 + i * 0.15,
                duration: 0.5,
                ease: "easeOut"
              }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Animated Dot */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 200 }}
                className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-5 z-10 animate-pulse-glow" 
              />

              {/* Spacer for desktop */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="ml-14 md:ml-0 md:w-1/2">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass rounded-xl p-5 hover:glow-border transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                    >
                      <item.icon className="text-primary" size={20} />
                    </motion.div>
                    <span className="text-sm text-primary font-mono font-bold">{item.year}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-primary/80 font-medium mb-1">{item.company}</p>
                  <p className="text-xs text-muted-foreground mb-3">{item.location}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
