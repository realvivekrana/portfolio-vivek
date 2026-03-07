import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Award, Code2 } from "lucide-react";

// EXPERIENCE & EDUCATION CONFIGURATION - Update your journey here
const milestones = [
  {
    icon: GraduationCap,
    year: "2018-2019",
    title: "Secondary School Certificate (10th)",
    description: "Government Higher Secondary School, Jharkhand - Grade: 81.20%",
  },
  {
    icon: GraduationCap,
    year: "2019-2021",
    title: "Higher Secondary Certificate (12th - Science PCM)",
    description: "Inter Science College, Hazaribagh - Grade: 65%",
  },
  {
    icon: GraduationCap,
    year: "2021-2024",
    title: "Bachelor of Computer Applications (BCA)",
    description: "Vinoba Bhave University (VBU), Hazaribagh - CGPA: 6.86. Studied programming, data structures, DBMS, and web development.",
  },
  {
    icon: Code2,
    year: "Sep 2023 - May 2024",
    title: "MERN Stack Developer Trainee - Skill Academy",
    description: "Mumbai, Maharashtra (Remote). Learned full-stack development including HTML, CSS, JavaScript, React, and backend technologies.",
  },
  {
    icon: GraduationCap,
    year: "Jul 2024 - Aug 2026",
    title: "Master of Computer Applications (MCA)",
    description: "Amity University Online - Specialization in AI & ML. Currently pursuing with focus on AI, ML, DSA, DBMS, Python, and Software Engineering.",
  },
  {
    icon: Briefcase,
    year: "Apr 2025 - Sep 2025",
    title: "MERN Stack Developer Trainee - CETPA Infotech",
    description: "Noida, Uttar Pradesh (On-site). Completed training in MERN stack including React, Node.js, Express.js, and MongoDB. Built multiple full-stack projects.",
  },
  {
    icon: Briefcase,
    year: "Feb 2026 - Present",
    title: "Frontend Developer Intern - Athenura",
    description: "Noida, Uttar Pradesh (Remote). Working on frontend development using HTML, Tailwind CSS, and modern UI practices.",
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
