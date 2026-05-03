import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Briefcase, Github, Linkedin, Twitter } from "lucide-react";
import profileImg from "@/assets/vivek-profile.jpg";
import { personalInfo } from "@/data/portfolio-data";

const roles = ["React Developer", "MERN Stack Dev", "Frontend Engineer", "UI Craftsman"];

const HeroPremium = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!isDeleting && displayText.length < current.length) {
        setDisplayText(current.slice(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(current.slice(0, displayText.length - 1));
      } else {
        setIsDeleting(false);
        setRoleIndex(p => (p + 1) % roles.length);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [displayText, isDeleting, roleIndex]);

  const resumeUrl = `${import.meta.env.BASE_URL}${personalInfo.resumePath}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#050508" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(79,142,247,0.12) 0%, transparent 60%)",
        }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,142,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20">
        {/* Mobile: stack, Desktop: side by side */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* ── PHOTO (mobile: top-center, desktop: right) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2 flex-shrink-0 flex flex-col items-center gap-4"
          >
            {/* Photo ring */}
            <div className="relative">
              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #4F8EF7, #9B5DE5, #4F8EF7)",
                  padding: "2px",
                  borderRadius: "50%",
                }}
              />
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: "clamp(120px, 28vw, 200px)",
                  height: "clamp(120px, 28vw, 200px)",
                  border: "4px solid #050508",
                  boxShadow: "0 0 60px rgba(79,142,247,0.25)",
                }}
              >
                <img
                  src={profileImg}
                  alt="Vivek Rana"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>

            {/* Available badge */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(0,255,100,0.07)",
                border: "1px solid rgba(0,255,100,0.3)",
                color: "#00FF64",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#00FF64] animate-pulse" />
              Available
            </motion.div>
          </motion.div>

          {/* ── TEXT CONTENT ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-2 lg:order-1 flex-1 text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base font-mono tracking-[0.2em] uppercase mb-3"
              style={{ color: "#4F8EF7" }}
            >
              👋 Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-black uppercase leading-none tracking-tight mb-4"
              style={{
                fontSize: "clamp(2.8rem, 10vw, 6rem)",
                background: "linear-gradient(135deg, #ffffff 0%, #c8d8ff 50%, #9B5DE5 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "none",
              }}
            >
              Vivek Rana
            </motion.h1>

            {/* Typewriter role */}
            <div className="h-8 sm:h-10 flex items-center justify-center lg:justify-start mb-5">
              <span
                className="text-base sm:text-xl font-mono font-bold tracking-wider uppercase"
                style={{ color: "#4F8EF7" }}
              >
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            {/* Bio */}
            <p
              className="text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
              style={{ color: "#8888AA" }}
            >
              {personalInfo.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
              <motion.button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-white w-full sm:w-auto"
                style={{
                  background: "linear-gradient(135deg, #4F8EF7, #9B5DE5)",
                  boxShadow: "0 4px 20px rgba(79,142,247,0.35)",
                  minHeight: "48px",
                }}
              >
                <Briefcase size={18} />
                View My Work
              </motion.button>

              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold w-full sm:w-auto"
                style={{
                  background: "transparent",
                  border: "1.5px solid rgba(79,142,247,0.4)",
                  color: "#F0F0FF",
                  minHeight: "48px",
                }}
              >
                <Download size={18} />
                Download CV
              </motion.a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 justify-center lg:justify-start">
              {[
                { icon: Github, href: "https://github.com/realvivekrana", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/mrvivekrana/", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/mrvivaanrana", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
                  style={{
                    background: "rgba(79,142,247,0.08)",
                    border: "1px solid rgba(79,142,247,0.2)",
                    color: "#8888AA",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#4F8EF7")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#8888AA")}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: "#4B4B6A" }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ color: "#4B4B6A" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroPremium;
