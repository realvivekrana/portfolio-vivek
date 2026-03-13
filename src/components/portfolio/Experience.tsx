import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2, MapPin, Calendar } from "lucide-react";

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
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16 rounded-full" />
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          <div className="space-y-8 md:space-y-12">
            {experiences.map((item, i) => (
              <motion.div
                key={item.title + item.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  delay: 0.2 + i * 0.15,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline Dot with Icon */}
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ 
                    delay: 0.3 + i * 0.15, 
                    type: "spring", 
                    stiffness: 200,
                    damping: 10
                  }}
                  className="absolute left-0 md:left-3 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/30 z-10"
                >
                  <item.icon className="text-primary-foreground" size={16} />
                </motion.div>

                {/* Experience Card */}
                <motion.div 
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="glass rounded-2xl p-6 md:p-8 hover:glow-border transition-all duration-300 group"
                >
                  {/* Date Badge */}
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.15 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-mono font-bold mb-4"
                  >
                    <Calendar size={14} />
                    {item.year}
                  </motion.div>

                  {/* Title & Company */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-primary/90 font-semibold mb-3">
                    {item.company}
                  </p>

                  {/* Location */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin size={16} className="text-primary/70" />
                    <span>{item.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute top-6 right-6 w-20 h-20 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-300" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
