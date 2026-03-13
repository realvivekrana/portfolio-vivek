import { ArrowUp, Github, Linkedin, Twitter, Heart, Code2, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/realvivekrana", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mrvivekrana/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/mrvivaanrana", label: "Twitter" },
    { icon: Mail, href: "mailto:vivekranaworks@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative mt-20 md:mt-32 overflow-hidden">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Glass Background */}
      <div className="glass-strong backdrop-blur-xl">
        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            
            {/* Left Section - Name & Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center sm:text-left"
            >
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
                <Code2 className="text-primary" size={24} />
                <h3 className="text-xl font-bold gradient-text">Vivek Rana</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                MERN Stack Developer
              </p>
              <p className="text-xs text-muted-foreground/70 leading-relaxed max-w-xs mx-auto sm:mx-0">
                Building modern web applications with passion and precision. Turning ideas into production-ready solutions.
              </p>
            </motion.div>

            {/* Center Section - Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center sm:text-left"
            >
              <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Section - Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center sm:text-left sm:col-span-2 lg:col-span-1"
            >
              <h4 className="text-sm font-semibold text-foreground mb-4">Connect With Me</h4>
              <div className="flex items-center justify-center sm:justify-start gap-3 flex-wrap">
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
                      delay: 0.3 + i * 0.08,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -3,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="relative w-11 h-11 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-border hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <social.icon size={18} />
                    {/* Tooltip */}
                    <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-primary text-primary-foreground text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Animated Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
            className="w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-6 md:mb-8"
          />

          {/* Bottom Section - Copyright & Back to Top */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xs md:text-sm text-muted-foreground flex items-center gap-2 text-center"
            >
              © {new Date().getFullYear()} Vivek Kumar Rana. Made with{" "}
              <Heart size={14} className="text-primary animate-pulse" fill="currentColor" /> 
              and dedication
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm text-muted-foreground hover:text-primary hover:glow-border hover:bg-primary/10 transition-all duration-300 group"
              aria-label="Back to top"
            >
              <span className="text-xs">Back to Top</span>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp size={16} />
              </motion.div>
            </motion.button>
          </div>

          {/* Tech Stack - Mobile Friendly */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xs text-muted-foreground/70 text-center mt-6 md:mt-4"
          >
            Built with React • TypeScript • Tailwind CSS • Framer Motion
          </motion.p>
        </div>
      </div>

      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none -z-10" />
    </footer>
  );
};

export default Footer;
