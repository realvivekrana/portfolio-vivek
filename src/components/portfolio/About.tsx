import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing maintainable, scalable code" },
  { icon: Palette, label: "UI/UX Focus", desc: "Crafting beautiful user interfaces" },
  { icon: Zap, label: "Performance", desc: "Optimized for speed and efficiency" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">Frontend Developer</span> with a
              strong passion for building interactive and responsive web applications. My journey
              into web development started with curiosity about how websites work, and it quickly
              turned into a full-time pursuit.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in <span className="text-primary">React</span>,{" "}
              <span className="text-primary">JavaScript</span>, and modern frontend tools. I love
              turning complex problems into simple, elegant solutions and am constantly learning new
              technologies to stay ahead in this ever-evolving field.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new tech, contributing to open-source,
              or expanding my knowledge through online courses and certifications.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="glass rounded-xl p-5 flex items-center gap-4 hover:glow-border transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
