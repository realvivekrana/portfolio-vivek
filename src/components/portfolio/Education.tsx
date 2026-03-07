import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

// EDUCATION CONFIGURATION - Update your education here
const education = [
  {
    icon: GraduationCap,
    year: "2018-2019",
    title: "Secondary School Certificate (10th)",
    institution: "Government Higher Secondary School",
    location: "Jharkhand",
    grade: "81.20%",
    description: "Completed secondary education with strong academic performance.",
  },
  {
    icon: GraduationCap,
    year: "2019-2021",
    title: "Higher Secondary Certificate (12th - Science PCM)",
    institution: "Inter Science College",
    location: "Hazaribagh",
    grade: "65%",
    description: "Focused on Physics, Chemistry, and Mathematics stream.",
  },
  {
    icon: Award,
    year: "2021-2024",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Vinoba Bhave University (VBU)",
    location: "Hazaribagh",
    grade: "CGPA: 6.86",
    description: "Studied programming, data structures, DBMS, operating systems, and web development.",
  },
  {
    icon: GraduationCap,
    year: "Jul 2024 - Aug 2026",
    title: "Master of Computer Applications (MCA)",
    institution: "Amity University Online",
    location: "Online",
    grade: "Currently Pursuing",
    description: "Specialization in Artificial Intelligence and Machine Learning. Focus on AI, ML, DSA, DBMS, Python Programming, and Software Engineering.",
  },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {education.map((item, i) => (
            <motion.div
              key={item.title + item.institution}
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
                  <p className="text-sm text-primary/80 font-medium mb-1">{item.institution}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                    <span>{item.location}</span>
                    <span>•</span>
                    <span className="text-primary/70 font-semibold">{item.grade}</span>
                  </div>
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

export default Education;
