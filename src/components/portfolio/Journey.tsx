import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Code2, Rocket } from "lucide-react";

const milestones = [
  {
    icon: BookOpen,
    year: "2023",
    title: "Started Learning Web Development",
    description: "Began with HTML, CSS, and JavaScript fundamentals through self-study and online courses.",
  },
  {
    icon: Code2,
    year: "2024",
    title: "Mastered React & Modern Tools",
    description: "Deep-dived into React, Tailwind CSS, and modern frontend tooling. Built multiple projects.",
  },
  {
    icon: GraduationCap,
    year: "2024",
    title: "Earned Certifications",
    description: "Completed professional certifications in web development and frontend technologies.",
  },
  {
    icon: Rocket,
    year: "2025",
    title: "Building Full-Stack Applications",
    description: "Expanding into full-stack development, building production-ready applications.",
  },
];

const Journey = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="section-padding relative">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {milestones.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.2 }}
              className={`relative flex items-start gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1.5 mt-5 z-10 animate-pulse-glow" />

              {/* Spacer for desktop */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="ml-14 md:ml-0 md:w-1/2">
                <div className="glass rounded-xl p-5 hover:glow-border transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <span className="text-sm text-primary font-mono font-bold">{item.year}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
