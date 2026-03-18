import { ArrowUp, Code2, Mail, Phone, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Github, Linkedin, Twitter } from "lucide-react";
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
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Github, href: "https://github.com/realvivekrana", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mrvivekrana/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/mrvivaanrana", label: "Twitter" },
  ];

  const socialMedia = [
    { icon: Instagram, href: "https://www.instagram.com/mrvivaanrana/", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Facebook, href: "https://www.facebook.com/mrvivaanrana/", label: "Facebook", color: "hover:text-blue-500" },
    { icon: Twitter, href: "https://x.com/mrvivaanrana", label: "Twitter", color: "hover:text-sky-400" },
    { icon: MessageCircle, href: "https://wa.me/919304718075", label: "WhatsApp", color: "hover:text-green-500" },
  ];

  return (
    <footer className="relative mt-20 md:mt-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Top CTA Section */}
      <div className="relative">
        <div className="px-6 py-12 sm:py-16 md:py-20 max-w-sm mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              Let's Build Something{" "}
              <span className="gradient-text">Amazing Together</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
              Have a project in mind? Let's collaborate and create something extraordinary.
            </p>
            <motion.button
              onClick={() => handleNavClick("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base sm:text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Mail size={20} className="sm:w-5 sm:h-5" />
              Contact Me
            </motion.button>
          </motion.div>
        </div>

        {/* Decorative Divider */}
        <div className="px-6 max-w-sm mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        <div className="px-6 py-10 sm:py-12 md:py-16 max-w-sm mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
          {/* Footer Grid - Mobile First: Single Column */}
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 md:gap-10 mb-10 sm:mb-12">
            
            {/* About Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code2 className="text-primary" size={22} />
                </div>
                <h3 className="text-xl sm:text-lg font-bold gradient-text">Vivek Rana</h3>
              </div>
              <p className="text-base sm:text-sm text-muted-foreground leading-relaxed">
                Frontend Developer specializing in React.js and modern web technologies. 
                Passionate about creating beautiful, performant user experiences.
              </p>
              <div className="flex gap-3 pt-1">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 sm:w-10 sm:h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <social.icon size={22} className="sm:w-[18px] sm:h-[18px]" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg sm:text-base font-semibold text-foreground mb-4 sm:mb-3">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-base sm:text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 group py-1"
                    >
                      <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sm:col-span-2 md:col-span-1"
            >
              <h4 className="text-lg sm:text-base font-semibold text-foreground mb-4 sm:mb-3">Contact Info</h4>
              <ul className="space-y-3.5 sm:space-y-3">
                <li>
                  <a
                    href="mailto:vivekranaworks@gmail.com"
                    className="text-base sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-start gap-3 group py-1"
                  >
                    <Mail size={22} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform sm:w-[18px] sm:h-[18px]" />
                    <span className="break-all">vivekranaworks@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919304718075"
                    className="text-base sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-3 group py-1"
                  >
                    <Phone size={22} className="flex-shrink-0 group-hover:scale-110 transition-transform sm:w-[18px] sm:h-[18px]" />
                    <span>+91 9304718075</span>
                  </a>
                </li>
                <li className="text-base sm:text-sm text-muted-foreground flex items-start gap-3 py-1">
                  <MapPin size={22} className="mt-0.5 flex-shrink-0 text-primary sm:w-[18px] sm:h-[18px]" />
                  <span>Noida, Uttar Pradesh, India</span>
                </li>
              </ul>
            </motion.div>

            {/* Location Map Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="sm:col-span-2 md:col-span-3 lg:col-span-1"
            >
              <h4 className="text-lg sm:text-base font-semibold text-foreground mb-4 sm:mb-3">My Location</h4>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="rounded-xl overflow-hidden shadow-lg border border-border/50 mb-3"
              >
                <iframe
                  src="https://maps.google.com/maps?q=Noida%20Uttar%20Pradesh%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Location Map - Noida, Uttar Pradesh, India"
                  className="w-full h-[200px]"
                />
              </motion.div>
              <p className="text-sm sm:text-xs text-muted-foreground/80 text-center leading-relaxed">
                Available for freelance & full-time opportunities
              </p>
            </motion.div>
          </div>

          {/* Connect with me - Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 sm:mt-16"
          >
            <div className="text-center mb-6 sm:mb-8">
              <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Connect <span className="gradient-text">with me</span>
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">
                Follow me on social media for updates and insights
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl glass flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 touch-manipulation`}
                >
                  <social.icon size={28} className="sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110" />
                  
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-background/90 backdrop-blur-sm border border-border/50 rounded-lg text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent mb-6" />
            
            {/* Mobile: Stack Vertically, Desktop: Horizontal */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
              <p className="text-sm sm:text-xs text-muted-foreground">
                © {new Date().getFullYear()} Vivek Kumar Rana. All rights reserved.
              </p>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <p className="text-sm sm:text-xs text-muted-foreground/70">
                  React • TypeScript • Tailwind
                </p>
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-11 h-11 sm:w-10 sm:h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 group"
                  aria-label="Back to top"
                >
                  <ArrowUp size={20} className="sm:w-[18px] sm:h-[18px] group-hover:-translate-y-0.5 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Back to Top Button (Mobile) */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 md:hidden rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 flex items-center justify-center z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
