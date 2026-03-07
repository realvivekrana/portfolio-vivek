import { ArrowUp, Github, Linkedin, Twitter, Heart, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: Github, href: "https://github.com/realvivekrana", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mrvivekrana/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/mrvivaanrana", label: "Twitter" },
  ];

  return (
    <footer className="relative mt-32 overflow-hidden">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Glass Background */}
      <div className="glass-strong backdrop-blur-xl">
        <div className="container mx-auto px-4 py-16">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Left Section - Name & Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Code2 className="text-primary" size={24} />
                <h3 className="text-xl font-bold gradient-text">Vivek Kumar Rana</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                MERN Full Stack Developer
              </p>
              <p className="text-xs text-muted-foreground/70 leading-relaxed">
                Building modern web applications with passion and precision.
              </p>
            </motion.div>

            {/* Center Section - Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <h4 className="text-sm font-semibold text-foreground mb-4">Connect With Me</h4>
              <div className="flex items-center gap-4">
                {socials.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.2 + i * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="relative w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <social.icon size={20} />
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Section - Back to Top */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center md:items-end justify-center"
            >
              <motion.button
                onClick={scrollToTop}
                whileHover={{ 
                  scale: 1.1, 
                  y: -8,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
                whileTap={{ scale: 0.95 }}
                className="relative w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border hover:bg-primary/10 transition-all duration-300 group"
                aria-label="Back to top"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowUp size={20} />
                </motion.div>
                {/* Tooltip */}
                <span className="absolute -top-10 right-0 px-3 py-1 bg-primary text-primary-foreground text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  Back to Top
                </span>
              </motion.button>
              <p className="text-xs text-muted-foreground mt-4">Scroll to top</p>
            </motion.div>
          </div>

          {/* Animated Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
            className="w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-8"
          />

          {/* Bottom Section - Copyright & Tech Stack */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-muted-foreground flex items-center gap-2"
            >
              © {new Date().getFullYear()} Vivek Kumar Rana. Made with{" "}
              <Heart size={14} className="text-primary animate-pulse" fill="currentColor" /> 
              and dedication
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs text-muted-foreground/70"
            >
              Built with React • TypeScript • Tailwind CSS • Framer Motion
            </motion.p>
          </div>
        </div>
      </div>

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none -z-10" />
    </footer>
  );
};

export default Footer;
