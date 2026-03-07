import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail, Download } from "lucide-react";
import profileImg from "@/assets/vivek-profile.jpg";

// Personal Information - Update roles here
const roles = [
  "MERN Full Stack Developer",
  "Frontend Developer",
  "React Developer",
  "JavaScript Developer",
  "Web Application Developer",
  "Problem Solver",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing animation effect
  useEffect(() => {
    const current = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseAfterTyping = 2000; // Pause after typing complete
    const pauseAfterDeleting = 500; // Pause after deleting complete

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing forward
          if (text.length < current.length) {
            setText(current.slice(0, text.length + 1));
          } else {
            // Finished typing, pause then start deleting
            setTimeout(() => setIsDeleting(true), pauseAfterTyping);
          }
        } else {
          // Deleting backward
          if (text.length > 0) {
            setText(current.slice(0, text.length - 1));
          } else {
            // Finished deleting, move to next role
            setIsDeleting(false);
            setTimeout(() => {
              setRoleIndex((prev) => (prev + 1) % roles.length);
            }, pauseAfterDeleting);
          }
        }
      },
      text.length === current.length && !isDeleting ? 0 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto flex flex-col items-center text-center relative z-10">
        {/* Profile Image - Adjusted for better face visibility */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8"
        >
          <div className="relative">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-primary/50 animate-pulse-glow">
              <img
                src={profileImg}
                alt="Vivek Kumar Rana - MERN Full Stack Developer"
                className="w-full h-full object-cover scale-110"
                style={{ 
                  objectPosition: 'center top',
                  objectFit: 'cover'
                }}
                loading="eager"
              />
            </div>
            <div className="absolute -inset-2 rounded-full border border-primary/20 animate-spin" style={{ animationDuration: "12s" }} />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          Hi, I'm <span className="gradient-text">Vivek Kumar Rana</span>
        </motion.h1>

        {/* Typing role with blinking cursor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground mb-6 min-h-[2rem] font-mono flex items-center justify-center"
        >
          <span className="text-primary font-semibold">{text}</span>
          <span 
            className={`ml-1 text-primary font-bold transition-opacity duration-100 ${
              showCursor ? 'opacity-100' : 'opacity-0'
            }`}
          >
            |
          </span>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="max-w-xl text-muted-foreground mb-10 text-base md:text-lg leading-relaxed"
        >
          Passionate MERN Full Stack Developer crafting scalable web applications 
          with React, Node.js, Express.js, and MongoDB. Turning ideas into production-ready solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105"
          >
            <ExternalLink size={18} /> View Projects
          </button>
          <a
            href="/Vivek-Kumar-Rana-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg glass border-primary/30 text-foreground font-semibold hover:border-primary/60 transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105 hover:bg-primary/5"
          >
            <ExternalLink size={18} /> View Resume
          </a>
          <a
            href="/Vivek-Kumar-Rana-Resume.pdf"
            download="Vivek-Kumar-Rana-Resume.pdf"
            className="px-8 py-3 rounded-lg glass border-primary/30 text-foreground font-semibold hover:border-primary/60 transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105 hover:bg-primary/5"
          >
            <Download size={18} /> Download Resume
          </a>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 rounded-lg glass border-primary/30 text-foreground font-semibold hover:border-primary/60 transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105 hover:bg-primary/5"
          >
            <Mail size={18} /> Contact Me
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 animate-bounce"
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
