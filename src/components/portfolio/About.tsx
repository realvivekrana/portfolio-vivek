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
    <section id="about" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="w-full px-5 sm:px-6 md:px-10 lg:px-16 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto" ref={ref}>
        {/* Section heading with typography system */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-12 md:mb-16 relative"
        >
          {/* Small mono label */}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block font-mono text-label text-[#4F8EF7] tracking-[0.2em] uppercase mb-4"
          >
            Get to Know Me
          </motion.span>
          
          {/* Main heading - Syne Display */}
          <h2 className="font-display text-display-lg font-bold text-white tracking-[-0.02em] mb-4">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Me</span>
          </h2>
          
          {/* Animated underline */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
            style={{ transformOrigin: 'center' }}
          />
        </motion.div>

        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:grid lg:grid-cols-3">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full"
          >
            <div className="relative rounded-2xl overflow-hidden glass p-3 sm:p-4 max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Developer workspace"
                className="w-full h-auto rounded-xl object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text - Inter body font */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="space-y-4 sm:space-y-5 w-full"
          >
            <p className="font-body text-body-lg font-normal text-muted-foreground leading-[1.85]">
              I'm a <span className="font-heading font-bold text-primary">MERN Full Stack Developer</span> with a
              strong passion for building scalable and responsive web applications. Currently pursuing my 
              Master of Computer Applications (MCA) with specialization in Artificial Intelligence and Machine Learning 
              from Amity University Online.
            </p>
            <p className="font-body text-body-lg font-normal text-muted-foreground leading-[1.85]">
              I specialize in <span className="font-heading font-semibold text-primary">React</span>,{" "}
              <span className="font-heading font-semibold text-primary">Node.js</span>,{" "}
              <span className="font-heading font-semibold text-primary">Express.js</span>, and{" "}
              <span className="font-heading font-semibold text-primary">MongoDB</span>. I love
              turning complex problems into simple, elegant solutions and am constantly learning new
              technologies to stay ahead in this ever-evolving field.
            </p>
            <p className="font-body text-body-lg font-normal text-muted-foreground leading-[1.85]">
              Currently working as a Frontend Developer Intern at Athenura, I've completed comprehensive 
              training in MERN stack development and built multiple full-stack projects. When I'm not coding, 
              you can find me exploring new technologies and contributing to open-source projects.
            </p>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-3 sm:gap-4 w-full"
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
                className="glass rounded-xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 hover:glow-border transition-all duration-300 group"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-base sm:text-lg tracking-tight">{item.label}</h3>
                  <p className="font-body text-body-sm text-muted-foreground">{item.desc}</p>
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
