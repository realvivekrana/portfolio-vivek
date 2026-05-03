import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, GraduationCap, Briefcase } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Maintainable, scalable solutions" },
  { icon: Palette, label: "UI/UX Focus", desc: "Beautiful user interfaces" },
  { icon: Zap, label: "Performance", desc: "Optimized for speed" },
];

const stats = [
  { value: "2+", label: "Years Learning" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Certificates" },
  { value: "3", label: "Internships" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(155,93,229,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase mb-3" style={{ color: "#4F8EF7" }}>
            Get to Know Me
          </p>
          <h2
            className="font-black tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", color: "#F0F0FF" }}
          >
            About{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Me
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

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="rounded-2xl p-4 sm:p-5 text-center"
              style={{
                background: "rgba(79,142,247,0.05)",
                border: "1px solid rgba(79,142,247,0.12)",
              }}
            >
              <div
                className="text-2xl sm:text-3xl font-black mb-1"
                style={{
                  background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-medium" style={{ color: "#6B6B8A" }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main content: text + highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#8888AA" }}>
              I'm a{" "}
              <span className="font-bold" style={{ color: "#4F8EF7" }}>
                MERN Full Stack Developer
              </span>{" "}
              passionate about building scalable, responsive web applications. Currently pursuing my{" "}
              <span className="font-semibold" style={{ color: "#9B5DE5" }}>
                MCA with AI & ML specialization
              </span>{" "}
              from Amity University Online.
            </p>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#8888AA" }}>
              I specialize in{" "}
              <span className="font-semibold" style={{ color: "#4F8EF7" }}>React</span>,{" "}
              <span className="font-semibold" style={{ color: "#4F8EF7" }}>Node.js</span>,{" "}
              <span className="font-semibold" style={{ color: "#4F8EF7" }}>Express.js</span>, and{" "}
              <span className="font-semibold" style={{ color: "#4F8EF7" }}>MongoDB</span>. I love
              turning complex problems into elegant solutions.
            </p>
            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#8888AA" }}>
              Currently working as a{" "}
              <span className="font-semibold" style={{ color: "#9B5DE5" }}>
                Frontend Developer Intern at Athenura
              </span>
              , I've completed comprehensive MERN stack training and built multiple full-stack projects.
            </p>

            {/* Timeline mini */}
            <div className="pt-4 space-y-3">
              {[
                { icon: GraduationCap, text: "BCA — Vinoba Bhave University (2021–2024)" },
                { icon: Briefcase, text: "MERN Trainee — CETPA Infotech (2025)" },
                { icon: Briefcase, text: "Frontend Intern — Athenura (2026–Present)" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(79,142,247,0.1)" }}
                  >
                    <item.icon size={15} style={{ color: "#4F8EF7" }} />
                  </div>
                  <span className="text-xs sm:text-sm" style={{ color: "#8888AA" }}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.12 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl transition-all duration-300"
                style={{
                  background: "rgba(79,142,247,0.04)",
                  border: "1px solid rgba(79,142,247,0.1)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(79,142,247,0.1)" }}
                >
                  <item.icon size={22} style={{ color: "#4F8EF7" }} />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base mb-0.5" style={{ color: "#F0F0FF" }}>
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-sm" style={{ color: "#6B6B8A" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Tech stack pills */}
            <div className="pt-2">
              <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "#4B4B6A" }}>
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind", "Git", "REST API"].map(
                  (tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + i * 0.05 }}
                      className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold"
                      style={{
                        background: "rgba(79,142,247,0.08)",
                        border: "1px solid rgba(79,142,247,0.2)",
                        color: "#4F8EF7",
                      }}
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
