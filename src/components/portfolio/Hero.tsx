import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ExternalLink, Eye, Download, X } from "lucide-react";
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
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Correct resume path using Vite base URL
  const resumeUrl = `${import.meta.env.BASE_URL}Vivek-Kumar-Rana-Resume.pdf`;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showResumeModal) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [showResumeModal]);

  const handleViewResume = () => {
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
    setShowResumeModal(false);
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Vivek-Kumar-Rana-Resume.pdf";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowResumeModal(false);
  };

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

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Profile Photo - Visible on All Devices */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-primary/50 animate-pulse-glow">
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Hi, I'm <span className="gradient-text">Vivek Kumar Rana</span>
            </motion.h1>

            {/* Typing role with blinking cursor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6 min-h-[2rem] font-mono flex items-center justify-center lg:justify-start"
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
              className="max-w-xl mx-auto lg:mx-0 text-muted-foreground mb-10 text-base md:text-lg leading-relaxed"
            >
              Passionate MERN Full Stack Developer crafting scalable web applications 
              with React, Node.js, Express.js, and MongoDB. Turning ideas into production-ready solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start"
            >
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto min-w-[180px] px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105 active:scale-95 touch-manipulation"
                type="button"
              >
                <ExternalLink size={18} /> View Projects
              </button>
              
              {/* Resume Button - Opens Universal Modal */}
              <button
                onClick={() => setShowResumeModal(true)}
                className="w-full sm:w-auto min-w-[180px] px-8 py-3 rounded-lg glass border-primary/30 text-foreground font-semibold hover:border-primary/60 transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105 hover:bg-primary/5 active:scale-95 touch-manipulation"
                aria-label="Open resume options"
                type="button"
              >
                <Download size={18} />
                <span>Resume</span>
              </button>
            </motion.div>

        {/* Universal Resume Modal - Works on ALL devices */}
        <AnimatePresence>
          {showResumeModal && (
            <div className="fixed inset-0 z-[999] flex items-end md:items-center md:justify-center">
              {/* Dark Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setShowResumeModal(false)}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              />

              {/* Modal Content - Bottom sheet on mobile, centered on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 100, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full md:w-auto md:min-w-[400px] md:max-w-md bg-background border-t-2 md:border-2 border-primary/20 rounded-t-3xl md:rounded-2xl shadow-2xl"
              >
                {/* Handle Bar - Mobile only */}
                <div className="flex justify-center pt-4 pb-2 md:hidden">
                  <div className="w-12 h-1.5 bg-muted-foreground/40 rounded-full" />
                </div>

                {/* Content */}
                <div className="px-6 pb-8 pt-2 md:pt-6">
                  {/* Header with Close Button */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl md:text-2xl font-bold">Resume Options</h3>
                    <button
                      onClick={() => setShowResumeModal(false)}
                      className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/10 active:scale-95 transition-all touch-manipulation"
                      aria-label="Close"
                      type="button"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={handleViewResume}
                      className="w-full px-6 py-4 rounded-xl glass border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/5 active:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-3 group touch-manipulation"
                      type="button"
                    >
                      <Eye size={24} className="text-primary group-hover:scale-110 transition-transform flex-shrink-0" />
                      <span className="text-lg font-semibold">View Resume</span>
                    </button>

                    <button
                      onClick={handleDownloadResume}
                      className="w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 active:shadow-md transition-all duration-300 flex items-center justify-center gap-3 group touch-manipulation"
                      type="button"
                    >
                      <Download size={24} className="group-active:translate-y-1 transition-transform flex-shrink-0" />
                      <span className="text-lg font-semibold">Download Resume</span>
                    </button>
                  </div>

                  {/* Safe area for mobile devices */}
                  <div className="h-6 md:hidden" />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
          </div>

          {/* Right side - Developer Illustration (Hidden on Mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 hidden md:block"
          >
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden glass-strong p-4">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=600&fit=crop"
                  alt="Developer workspace"
                  className="w-full h-auto rounded-xl object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-xl" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-muted-foreground" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
