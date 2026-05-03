import { motion } from "framer-motion";
import { ArrowUp, Mail, Phone, MapPin, Code2, ExternalLink } from "lucide-react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "#home" },
  { label: "About",    href: "#about" },
  { label: "Skills",   href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact" },
];

const socials = [
  {
    icon: Github,
    href: "https://github.com/realvivekrana",
    label: "GitHub",
    color: "#F0F0FF",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mrvivekrana/",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: Twitter,
    href: "https://x.com/mrvivaanrana",
    label: "Twitter / X",
    color: "#1DA1F2",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/mrvivaanrana/",
    label: "Instagram",
    color: "#E1306C",
  },
];

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "vivekranaworks@gmail.com",
    href: "mailto:vivekranaworks@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9304718075",
    href: "tel:+919304718075",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Noida, Uttar Pradesh, India",
    href: null,
  },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollTo    = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#050508" }}
    >
      {/* ── Top gradient border ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(79,142,247,0.5) 50%, transparent 100%)",
        }}
      />

      {/* ════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════ */}
      <div className="relative px-4 sm:px-6 lg:px-8 pt-14 pb-10 sm:pt-16 sm:pb-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden text-center px-6 py-10 sm:py-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(79,142,247,0.08) 0%, rgba(155,93,229,0.08) 100%)",
            border: "1px solid rgba(79,142,247,0.15)",
          }}
        >
          {/* Decorative blobs */}
          <div
            className="absolute -top-12 -left-12 w-40 h-40 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(79,142,247,0.15) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(155,93,229,0.15) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            {/* Label */}
            <span
              className="inline-block text-xs font-mono tracking-[0.2em] uppercase mb-4 px-3 py-1.5 rounded-full"
              style={{
                color: "#4F8EF7",
                background: "rgba(79,142,247,0.1)",
                border: "1px solid rgba(79,142,247,0.2)",
                fontFamily: "JetBrains Mono, monospace",
              }}
            >
              Open to Work
            </span>

            <h2
              className="font-black tracking-tight mb-3 leading-tight"
              style={{ fontSize: "clamp(1.6rem, 6vw, 3rem)", color: "#F0F0FF" }}
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

            <p
              className="text-sm sm:text-base mb-7 max-w-sm mx-auto leading-relaxed"
              style={{ color: "#8888AA" }}
            >
              Have a project in mind? Let's collaborate and create something extraordinary.
            </p>

            {/* CTA buttons — stack on mobile, row on sm+ */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <motion.button
                onClick={() => scrollTo("#contact")}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold text-white"
                style={{
                  background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                  boxShadow: "0 4px 20px rgba(79,142,247,0.35)",
                  minHeight: "48px",
                }}
              >
                <Mail size={17} />
                Get In Touch
              </motion.button>

              <motion.a
                href="/Vivek-Kumar-Rana-Resume.pdf"
                download="Vivek-Kumar-Rana-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold"
                style={{
                  background: "transparent",
                  border: "1.5px solid rgba(79,142,247,0.35)",
                  color: "#C8C8E8",
                  minHeight: "48px",
                }}
              >
                <ExternalLink size={17} />
                View Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ════════════════════════════════════════
          MAIN FOOTER BODY
      ════════════════════════════════════════ */}
      <div className="px-4 sm:px-6 lg:px-8 pb-6 max-w-6xl mx-auto">

        {/* Divider */}
        <div
          className="h-px mb-10"
          style={{ background: "rgba(255,255,255,0.05)" }}
        />

        {/* Grid: 1 col mobile → 2 col sm → 4 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">

          {/* ── Brand column ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="sm:col-span-2 lg:col-span-1"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.2)" }}
              >
                <Code2 size={20} style={{ color: "#4F8EF7" }} />
              </div>
              <div>
                <p
                  className="text-base font-black leading-none"
                  style={{
                    background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Vivek Rana
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#4B4B6A" }}>
                  MERN Stack Developer
                </p>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "#6B6B8A" }}
            >
              Building scalable web apps with React, Node.js, Express &amp; MongoDB.
            </p>

            {/* Social icons — larger on mobile for easy tapping */}
            <div className="flex flex-wrap gap-2.5">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.93 }}
                  title={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#6B6B8A",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = color;
                    (e.currentTarget as HTMLElement).style.borderColor = `${color}44`;
                    (e.currentTarget as HTMLElement).style.background = `${color}12`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = "#6B6B8A";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Quick Links ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4
              className="text-xs font-mono font-bold tracking-[0.15em] uppercase mb-5"
              style={{ color: "#4F8EF7", fontFamily: "JetBrains Mono, monospace" }}
            >
              Navigation
            </h4>
            <ul className="space-y-1">
              {navLinks.map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="group flex items-center gap-2 w-full py-1.5 text-sm text-left transition-colors duration-200"
                    style={{ color: "#6B6B8A" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#F0F0FF")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "#6B6B8A")}
                  >
                    <span
                      className="w-0 h-px transition-all duration-300 group-hover:w-4 rounded-full"
                      style={{ background: "#4F8EF7" }}
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Contact Info ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <h4
              className="text-xs font-mono font-bold tracking-[0.15em] uppercase mb-5"
              style={{ color: "#4F8EF7", fontFamily: "JetBrains Mono, monospace" }}
            >
              Contact
            </h4>

            {/* Contact cards — horizontal on mobile */}
            <div className="flex flex-col gap-3">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group"
                      style={{
                        background: "rgba(79,142,247,0.04)",
                        border: "1px solid rgba(79,142,247,0.08)",
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.25)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(79,142,247,0.07)";
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,0.08)";
                        (e.currentTarget as HTMLElement).style.background = "rgba(79,142,247,0.04)";
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(79,142,247,0.12)" }}
                      >
                        <item.icon size={15} style={{ color: "#4F8EF7" }} />
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-[10px] font-mono tracking-widest uppercase mb-0.5"
                          style={{ color: "#4B4B6A", fontFamily: "JetBrains Mono, monospace" }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="text-xs sm:text-sm font-medium truncate transition-colors group-hover:text-[#4F8EF7]"
                          style={{ color: "#C8C8E8" }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="flex items-center gap-3 p-3 rounded-xl"
                      style={{
                        background: "rgba(79,142,247,0.04)",
                        border: "1px solid rgba(79,142,247,0.08)",
                      }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(79,142,247,0.12)" }}
                      >
                        <item.icon size={15} style={{ color: "#4F8EF7" }} />
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-[10px] font-mono tracking-widest uppercase mb-0.5"
                          style={{ color: "#4B4B6A", fontFamily: "JetBrains Mono, monospace" }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="text-xs sm:text-sm font-medium"
                          style={{ color: "#C8C8E8" }}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          {/* Mobile: stacked center | Desktop: space-between */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">

            {/* Copyright */}
            <p className="text-xs text-center sm:text-left order-2 sm:order-1" style={{ color: "#4B4B6A" }}>
              © {new Date().getFullYear()}{" "}
              <span style={{ color: "#6B6B8A" }}>Vivek Kumar Rana</span>
              {" "}· All rights reserved.
            </p>

            {/* Tech stack + back-to-top */}
            <div className="flex items-center gap-3 order-1 sm:order-2">
              <div className="flex items-center gap-1.5">
                {["React", "TypeScript", "Tailwind"].map((t, i) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full"
                    style={{
                      color: "#4B4B6A",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                style={{
                  background: "rgba(79,142,247,0.08)",
                  border: "1px solid rgba(79,142,247,0.2)",
                  color: "#6B6B8A",
                }}
                aria-label="Back to top"
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = "#4F8EF7";
                  (e.currentTarget as HTMLElement).style.background = "rgba(79,142,247,0.15)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = "#6B6B8A";
                  (e.currentTarget as HTMLElement).style.background = "rgba(79,142,247,0.08)";
                }}
              >
                <ArrowUp size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating back-to-top (mobile only, appears after scroll) ── */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-5 w-12 h-12 rounded-full flex items-center justify-center sm:hidden z-50 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
          boxShadow: "0 4px 20px rgba(79,142,247,0.4)",
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} color="#fff" />
      </motion.button>
    </footer>
  );
};

export default Footer;
