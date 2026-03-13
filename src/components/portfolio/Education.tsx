import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, MapPin, Trophy } from "lucide-react";

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
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: GraduationCap,
    year: "2019-2021",
    title: "Higher Secondary Certificate (12th - Science PCM)",
    institution: "Inter Science College",
    location: "Hazaribagh",
    grade: "65%",
    description: "Focused on Physics, Chemistry, and Mathematics stream.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Award,
    year: "2021-2024",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Vinoba Bhave University (VBU)",
    location: "Hazaribagh",
    grade: "CGPA: 6.86",
    description: "Studied programming, data structures, DBMS, operating systems, and web development.",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Trophy,
    year: "Jul 2024 - Aug 2026",
    title: "Master of Computer Applications (MCA)",
    institution: "Amity University Online",
    location: "Online",
    grade: "Currently Pursuing",
    description: "Specialization in Artificial Intelligence and Machine Learning. Focus on AI, ML, DSA, DBMS, Python Programming, and Software Engineering.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16 rounded-full" />
        </motion.div>

        {/* Modern Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {education.map((item, i) => (
            <motion.div
              key={item.title + item.institution}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                delay: 0.1 + i * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <motion.div 
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative glass rounded-2xl p-6 md:p-8 h-full hover:glow-border transition-all duration-300 group overflow-hidden`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Year */}
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300"
                    >
                      <item.icon className="text-primary" size={28} />
                    </motion.div>
                    
                    <div className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold">
                      {item.year}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  {/* Institution */}
                  <p className="text-sm md:text-base text-primary/90 font-semibold mb-3">
                    {item.institution}
                  </p>

                  {/* Location & Grade */}
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-xs md:text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-primary/70" />
                      <span>{item.location}</span>
                    </div>
                    <span className="text-primary/50">•</span>
                    <div className="flex items-center gap-1.5">
                      <Trophy size={14} className="text-primary/70" />
                      <span className="text-primary/90 font-semibold">{item.grade}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
