import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  const resumeUrl = `${import.meta.env.BASE_URL}${personalInfo.resumePath}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#050508' }}
    >
      {/* Radial spotlight from top-center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(79, 142, 247, 0.07) 0%, transparent 50%)',
        }}
      />

      {/* Two-column layout */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex items-center gap-16 max-w-7xl mx-auto">
          {/* LEFT COLUMN - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            {/* Name with glow */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '72px',
                fontWeight: 800,
                color: '#F0F0FF',
                letterSpacing: '-2px',
                marginBottom: '24px',
                lineHeight: 1.1,
                textShadow: '0 0 60px rgba(79, 142, 247, 0.3)',
              }}
            >
              Vivek Rana
            </motion.h1>

            {/* Typewriter with blinking cursor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 h-12 flex items-center"
            >
              <span
                style={{
                  fontSize: '32px',
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
              transition={{ delay: 0.6 }}
              style={{
                fontSize: '18px',
                color: '#6B6B8A',
                maxWidth: '560px',
                marginBottom: '40px',
                lineHeight: 1.7,
              }}
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              {/* View My Work - Solid Blue */}
              <motion.button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative px-8 py-4 font-semibold text-lg"
                style={{
                  background: '#4F8EF7',
                  color: '#FFFFFF',
                  borderRadius: '50px',
                  border: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(79, 142, 247, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Briefcase className="inline-block w-5 h-5 mr-2" />
                View My Work
              </motion.button>

              {/* Download CV - Ghost with shimmer */}
              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative px-8 py-4 font-semibold text-lg overflow-hidden"
                style={{
                  background: 'transparent',
                  color: '#F0F0FF',
                  borderRadius: '50px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#4F8EF7';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </span>
                {/* Shimmer sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  style={{ pointerEvents: 'none' }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Photo + Badge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 flex flex-col items-center"
            style={{ width: '400px' }}
          >
            {/* Profile photo with double rings */}
            <div
              className="relative mb-6"
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
                  width: '180px',
                  height: '180px',
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
                />
              </motion.div>
            </div>

            {/* Available badge - below photo */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: 'rgba(0, 255, 100, 0.08)',
                border: '1px solid rgba(0, 255, 100, 0.3)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#00FF64' }}
              />
              <span style={{ color: '#00FF64', fontSize: '14px', fontWeight: 500 }}>
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
