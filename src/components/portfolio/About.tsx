import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, MapPin } from "lucide-react";

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
          transition={{ duration: 0.6, ease: "easeOut" }}
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
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">MERN Full Stack Developer</span> with a
              strong passion for building scalable and responsive web applications. Currently pursuing my 
              Master of Computer Applications (MCA) with specialization in Artificial Intelligence and Machine Learning 
              from Amity University Online.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I specialize in <span className="text-primary">React</span>,{" "}
              <span className="text-primary">Node.js</span>,{" "}
              <span className="text-primary">Express.js</span>, and{" "}
              <span className="text-primary">MongoDB</span>. I love
              turning complex problems into simple, elegant solutions and am constantly learning new
              technologies to stay ahead in this ever-evolving field.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently working as a Frontend Developer Intern at Athenura, I've completed comprehensive 
              training in MERN stack development and built multiple full-stack projects. When I'm not coding, 
              you can find me exploring new technologies and contributing to open-source projects.
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground mt-4">
              <MapPin size={18} className="text-primary" />
              <span className="text-sm">Noida, Uttar Pradesh, India</span>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  delay: 0.5 + i * 0.15,
                  duration: 0.4,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.03, y: -3 }}
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
