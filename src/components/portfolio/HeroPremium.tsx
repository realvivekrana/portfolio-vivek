import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowDown, Download, Briefcase } from "lucide-react";
import profileImg from "@/assets/vivek-profile.jpg";
import { personalInfo } from "@/data/portfolio-data";

const premiumRoles = [
  "React Developer",
  "MERN Stack Developer", 
  "Frontend Engineer",
  "UI Craftsman"
];

const HeroPremium = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0.5, y: 0.5 });
  
  // Mouse position for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Transform mouse position to rotation
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  // Typewriter effect
  useEffect(() => {
    const currentRole = premiumRoles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText.length < currentRole.length) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else if (!isDeleting && displayText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % premiumRoles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Mouse move handler for cursor glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setCursorPosition({ x, y });
      
      // Update mouse position for 3D tilt
      const rect = document.getElementById('home')?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const resumeUrl = `${import.meta.env.BASE_URL}${personalInfo.resumePath}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12"
      style={{ background: '#050508' }}
    >
      {/* Radial spotlight from top-center + cursor-following glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at ${cursorPosition.x * 100}% ${cursorPosition.y * 100}%, rgba(79, 142, 247, 0.15) 0%, transparent 30%),
            radial-gradient(circle at 50% 0%, rgba(79, 142, 247, 0.07) 0%, transparent 50%)
          `,
        }}
      />

      {/* Responsive layout container */}
      <div className="w-full max-w-7xl mx-auto relative z-10 py-20 sm:py-24 md:py-28 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* LEFT COLUMN - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left w-full"
          >
            {/* Name with responsive sizing + 3D letter animation */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-extrabold mb-4 sm:mb-5 md:mb-6 leading-tight"
              style={{
                fontSize: 'clamp(32px, 6vw, 72px)',
                color: '#F0F0FF',
                letterSpacing: '-2px',
              }}
            >
              {['V', 'i', 'v', 'e', 'k', ' ', 'R', 'a', 'n', 'a'].map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: -100, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    delay: 0.2 + i * 0.05,
                    duration: 0.8,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.2,
                    color: '#4F8EF7',
                    textShadow: '0 0 20px rgba(79, 142, 247, 0.8)',
                  }}
                  style={{
                    display: 'inline-block',
                    textShadow: '0 0 60px rgba(79, 142, 247, 0.3)',
                    cursor: 'default',
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.h1>

            {/* Typewriter with responsive sizing + 3D character flip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6 sm:mb-7 md:mb-8 h-10 sm:h-11 md:h-12 flex items-center justify-center lg:justify-start"
            >
              <span
                className="font-semibold"
                style={{
                  fontSize: 'clamp(16px, 3vw, 32px)',
                  color: '#4F8EF7',
                  fontFamily: 'monospace',
                }}
              >
                {displayText.split('').map((char, i) => (
                  <motion.span
                    key={`${char}-${i}`}
                    initial={{ opacity: 0, rotateX: 90 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'inline-block' }}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Bio with responsive sizing */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8 sm:mb-9 md:mb-10 mx-auto lg:mx-0 leading-relaxed"
              style={{
                fontSize: 'clamp(13px, 1.5vw, 18px)',
                color: '#6B6B8A',
                maxWidth: '560px',
                lineHeight: 1.7,
              }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons - Stack on mobile, side by side on tablet+ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0"
            >
              {/* View My Work - Solid Blue with 3D press */}
              <motion.button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.04, rotateX: -5, rotateY: 5 }}
                whileTap={{ scale: 0.96, translateZ: -10 }}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg w-full sm:w-auto"
                style={{
                  background: '#4F8EF7',
                  color: '#FFFFFF',
                  borderRadius: '50px',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  minHeight: '48px',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(79, 142, 247, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Briefcase className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View My Work
              </motion.button>

              {/* Download CV - Ghost with 3D shine sweep */}
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, rotateX: -5, rotateY: -5 }}
                whileTap={{ scale: 0.96 }}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg overflow-hidden w-full sm:w-auto"
                style={{
                  background: 'transparent',
                  color: '#F0F0FF',
                  borderRadius: '50px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  minHeight: '48px',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#4F8EF7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Download CV
                </span>
                {/* 3D Shine sweep */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
                    transform: 'translateZ(1px)',
                  }}
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - 3D Flip Card Photo + Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 flex flex-col items-center w-full lg:w-auto"
            style={{ perspective: '1000px' }}
          >
            {/* 3D Flip Card Container */}
            <motion.div
              className="relative mb-6 cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                width: 'clamp(110px, 25vw, 180px)',
                height: 'clamp(110px, 25vw, 180px)',
              }}
              animate={{
                rotateY: isFlipped ? 180 : 0,
              }}
              transition={{ duration: 0.6, type: 'spring' }}
              onClick={() => setIsFlipped(!isFlipped)}
              onMouseEnter={() => setIsPhotoHovered(true)}
              onMouseLeave={() => setIsPhotoHovered(false)}
            >
              {/* Radial glow aura */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(79, 142, 247, 0.2) 0%, transparent 70%)',
                  filter: 'blur(80px)',
                  transform: 'scale(1.8)',
                  pointerEvents: 'none',
                }}
              />

              {/* FRONT SIDE - Profile Photo */}
              <motion.div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                }}
              >
                {/* Outer ring - pulsing opacity */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    padding: '8px',
                    background: 'linear-gradient(135deg, #4F8EF7, #9B5DE5, #4F8EF7)',
                    backgroundSize: '200% 200%',
                    animation: 'pulse-ring 3s ease-in-out infinite',
                  }}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{ background: '#050508' }}
                  />
                </div>

                {/* Inner ring - rotating gradient */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    padding: '4px',
                    background: 'linear-gradient(45deg, #4F8EF7, #9B5DE5, #4F8EF7)',
                    backgroundSize: '200% 200%',
                    animation: isPhotoHovered 
                      ? 'gradient-spin 2s linear infinite' 
                      : 'gradient-spin 4s linear infinite',
                  }}
                >
                  <div
                    className="w-full h-full rounded-full"
                    style={{ background: '#050508' }}
                  />
                </div>

                {/* Profile image */}
                <motion.div
                  className="relative rounded-full overflow-hidden"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: '4px solid #050508',
                    boxShadow: '0 0 40px rgba(79, 142, 247, 0.3)',
                  }}
                  animate={{ scale: isPhotoHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={profileImg}
                    alt="Vivek Rana"
                    className="w-full h-full"
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center top',
                    }}
                    loading="eager"
                  />
                </motion.div>
              </motion.div>

              {/* BACK SIDE - Skills Summary */}
              <motion.div
                className="absolute inset-0 rounded-full flex items-center justify-center p-6"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  background: 'linear-gradient(135deg, rgba(79, 142, 247, 0.2), rgba(155, 93, 229, 0.2))',
                  border: '2px solid rgba(79, 142, 247, 0.5)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="text-center">
                  <p className="text-xs font-bold text-primary mb-2">Quick Skills</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {['React', 'Node.js', 'MongoDB', 'TypeScript'].map((skill, i) => (
                      <span
                        key={i}
                        className="text-[8px] px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-[8px] text-muted-foreground mt-2">Click to flip back</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Available badge - below photo */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full"
              style={{
                background: 'rgba(0, 255, 100, 0.08)',
                border: '1px solid rgba(0, 255, 100, 0.3)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
                style={{ background: '#00FF64' }}
              />
              <span 
                className="text-xs sm:text-sm font-medium whitespace-nowrap"
                style={{ color: '#00FF64' }}
              >
                Currently Available for Freelance
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - styled properly */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-2 group"
          style={{ color: '#6B6B8A' }}
        >
          <span 
            style={{ 
              fontSize: '12px', 
              fontWeight: 500,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
            className="group-hover:text-[#4F8EF7] transition-colors"
          >
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="group-hover:text-[#4F8EF7] transition-colors"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.button>
      </motion.div>

      <style>{`
        @keyframes gradient-spin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse-ring {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroPremium;
