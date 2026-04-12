import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Briefcase } from "lucide-react";
import profileImg from "@/assets/vivek-profile.jpg";
import { personalInfo, roles } from "@/data/portfolio-data";

const HeroPremium = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
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
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const resumeUrl = `${import.meta.env.BASE_URL}${personalInfo.resumePath}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#050508' }}
    >
      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(13, 13, 20, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: '#10B981' }}
            />
            <span style={{ color: '#10B981', fontSize: '14px', fontWeight: 500 }}>
              Currently Available for Freelance
            </span>
          </motion.div>

          {/* Profile photo with rotating ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative inline-block mb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Pulsing glow background */}
            <div
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                background: 'radial-gradient(circle, rgba(79, 142, 247, 0.3) 0%, transparent 70%)',
                filter: 'blur(40px)',
                transform: 'scale(1.5)',
              }}
            />

            {/* Rotating gradient ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                padding: '4px',
                background: 'linear-gradient(45deg, #4F8EF7, #9B5DE5, #4F8EF7)',
                backgroundSize: '200% 200%',
                animation: isHovered ? 'gradient-rotate 2s linear infinite' : 'gradient-rotate 4s linear infinite',
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{ background: '#050508' }}
              />
            </div>

            {/* Profile image */}
            <motion.div
              className="relative w-48 h-48 rounded-full overflow-hidden"
              style={{
                border: '4px solid #050508',
                boxShadow: '0 0 40px rgba(79, 142, 247, 0.3)',
              }}
              animate={{ scale: isHovered ? 1.04 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={profileImg}
                alt="Vivek Rana"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center top' }}
              />
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: '64px',
              fontWeight: 700,
              color: '#F0F0FF',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              lineHeight: 1.1,
            }}
          >
            Vivek Rana
          </motion.h1>

          {/* Animated typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-8 h-12 flex items-center justify-center"
          >
            <span
              style={{
                fontSize: '28px',
                fontWeight: 600,
                color: '#4F8EF7',
                fontFamily: 'monospace',
              }}
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{
              fontSize: '18px',
              color: '#6B6B8A',
              maxWidth: '600px',
              margin: '0 auto 40px',
              lineHeight: 1.6,
            }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            {/* View My Work button */}
            <motion.button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden"
              style={{
                border: '2px solid #4F8EF7',
                color: '#F0F0FF',
                background: 'transparent',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4F8EF7';
                e.currentTarget.style.boxShadow = '0 0 40px rgba(79, 142, 247, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Briefcase className="inline-block w-5 h-5 mr-2" />
              View My Work
            </motion.button>

            {/* Download CV button with shimmer */}
            <motion.a
              href={resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-full font-semibold text-lg overflow-hidden"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#F0F0FF',
                background: 'rgba(13, 13, 20, 0.6)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="relative z-10 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </span>
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center gap-2"
          style={{ color: '#6B6B8A' }}
        >
          <span style={{ fontSize: '14px', fontWeight: 500 }}>Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>

      <style>{`
        @keyframes gradient-rotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default HeroPremium;
