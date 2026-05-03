import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone, MapPin, Code2 } from "lucide-react";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const navLinks = [
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

  return (
    <footer className="relative mt-8 overflow-hidden" style={{ background: "#050508" }}>
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(79,142,247,0.3), transparent)" }}
      />

      {/* CTA Banner */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="font-black tracking-tight mb-3"
            style={{ fontSize: "clamp(1.6rem, 5vw, 3rem)", color: "#F0F0FF" }}
          >
            Let's Build Something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Amazing
            </span>
          </h2>
          <p className="text-sm sm:text-base mb-6 max-w-md mx-auto" style={{ color: "#6B6B8A" }}>
            Have a project in mind? Let's collaborate and create something extraordinary.
          </p>
          <motion.button
            onClick={() => scrollTo("#contact")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-white"
            style={{
              background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
              boxShadow: "0 4px 20px rgba(79,142,247,0.3)",
              minHeight: "48px",
            }}
          >
            <Mail size={18} />
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Divider */}
      <div
        className="mx-4 sm:mx-6 lg:mx-8 h-px"
        style={{ background: "rgba(255,255,255,0.05)" }}
      />

      {/* Main footer grid */}
      <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(79,142,247,0.1)" }}
              >
                <Code2 size={20} style={{ color: "#4F8EF7" }} />
              </div>
              <span
                className="text-xl font-black"
                style={{
                  background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Vivek Rana
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed mb-4" style={{ color: "#6B6B8A" }}>
              Frontend Developer specializing in React.js and modern web technologies.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    background: "rgba(79,142,247,0.07)",
                    border: "1px solid rgba(79,142,247,0.15)",
                    color: "#6B6B8A",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#4F8EF7")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#6B6B8A")}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-sm font-bold mb-4" style={{ color: "#F0F0FF" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-xs sm:text-sm transition-colors duration-200 hover:text-[#4F8EF7] text-left"
                    style={{ color: "#6B6B8A" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <h4 className="text-sm font-bold mb-4" style={{ color: "#F0F0FF" }}>
              Contact Info
            </h4>
            <ul className="space-y-3">
              {[
                { icon: Mail, value: "vivekranaworks@gmail.com", href: "mailto:vivekranaworks@gmail.com" },
                { icon: Phone, value: "+91 9304718075", href: "tel:+919304718075" },
                { icon: MapPin, value: "Noida, Uttar Pradesh, India", href: null },
              ].map((item, i) => (
                <li key={i}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-start gap-2.5 text-xs sm:text-sm transition-colors hover:text-[#4F8EF7]"
                      style={{ color: "#6B6B8A" }}
                    >
                      <item.icon size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#4F8EF7" }} />
                      <span className="break-all">{item.value}</span>
                    </a>
                  ) : (
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm" style={{ color: "#6B6B8A" }}>
                      <item.icon size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#4F8EF7" }} />
                      <span>{item.value}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs text-center sm:text-left" style={{ color: "#4B4B6A" }}>
            © {new Date().getFullYear()} Vivek Kumar Rana. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs" style={{ color: "#4B4B6A" }}>
              React · TypeScript · Tailwind
            </span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
              style={{
                background: "rgba(79,142,247,0.08)",
                border: "1px solid rgba(79,142,247,0.2)",
                color: "#6B6B8A",
              }}
              aria-label="Back to top"
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#4F8EF7")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#6B6B8A")}
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
