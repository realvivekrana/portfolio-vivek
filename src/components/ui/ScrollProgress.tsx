import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// ══════════════════════════════════════════════════════════════
// 3D SCROLL PROGRESS RIBBON - Right side vertical bar
// ══════════════════════════════════════════════════════════════
interface Section {
  id: string;
  label: string;
  color: string;
}

const SECTIONS: Section[] = [
  { id: 'home', label: 'Home', color: '#4F8EF7' },
  { id: 'about', label: 'About', color: '#5B9EF7' },
  { id: 'skills', label: 'Skills', color: '#7BAEF7' },
  { id: 'projects', label: 'Projects', color: '#8BBEF7' },
  { id: 'experience', label: 'Experience', color: '#9B5DE5' },
  { id: 'education', label: 'Education', color: '#AB6DE5' },
  { id: 'certificates', label: 'Certificates', color: '#BB7DE5' },
  { id: 'contact', label: 'Contact', color: '#CB8DE5' },
];

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Intersection Observer to detect active section
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      {/* 3D Container with perspective */}
      <div 
        className="relative"
        style={{
          perspective: '1000px',
          perspectiveOrigin: 'center',
        }}
      >
        {/* Background track - 3D ribbon effect */}
        <div
          className="absolute top-0 right-0 w-1 h-full bg-muted/20 rounded-full"
          style={{
            transform: 'rotateY(20deg)',
            transformStyle: 'preserve-3d',
            boxShadow: '2px 0 10px rgba(0, 0, 0, 0.3)',
          }}
        />

        {/* Progress fill - gradient from blue to violet */}
        <motion.div
          className="absolute top-0 right-0 w-1 rounded-full origin-top"
          style={{
            scaleY,
            transform: 'rotateY(20deg)',
            transformStyle: 'preserve-3d',
            background: 'linear-gradient(180deg, #4F8EF7 0%, #9B5DE5 100%)',
            boxShadow: '0 0 20px rgba(79, 142, 247, 0.6), 2px 0 10px rgba(155, 93, 229, 0.4)',
          }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>

        {/* Section dots */}
        <div className="relative flex flex-col justify-between h-full py-4" style={{ minHeight: '400px' }}>
          {SECTIONS.map((section, index) => {
            const isActive = activeSection === section.id;
            const isHovered = hoveredSection === section.id;
            const progress = scrollYProgress.get();
            const sectionProgress = index / (SECTIONS.length - 1);
            const isPassed = progress >= sectionProgress;

            return (
              <div
                key={section.id}
                className="relative group cursor-pointer"
                onClick={() => handleSectionClick(section.id)}
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {/* Dot */}
                <motion.div
                  className="relative w-3 h-3 rounded-full transition-all duration-300"
                  animate={{
                    scale: isActive ? 1.5 : isHovered ? 1.3 : 1,
                    backgroundColor: isPassed ? section.color : '#6B6B8A',
                  }}
                  style={{
                    transform: 'rotateY(20deg)',
                    transformStyle: 'preserve-3d',
                    boxShadow: isActive || isHovered
                      ? `0 0 20px ${section.color}, 0 0 40px ${section.color}66`
                      : 'none',
                  }}
                >
                  {/* Inner glow */}
                  {(isActive || isHovered) && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ scale: 1, opacity: 0.6 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      style={{ backgroundColor: section.color }}
                    />
                  )}
                </motion.div>

                {/* Label tooltip */}
                <motion.div
                  className="absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    x: isHovered ? 0 : 10,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div
                    className="px-3 py-1.5 rounded-lg text-sm font-semibold backdrop-blur-md"
                    style={{
                      background: `linear-gradient(135deg, ${section.color}22, ${section.color}44)`,
                      border: `1px solid ${section.color}66`,
                      color: section.color,
                      boxShadow: `0 4px 12px ${section.color}33`,
                    }}
                  >
                    {section.label}
                  </div>
                  {/* Arrow */}
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0"
                    style={{
                      borderTop: '6px solid transparent',
                      borderBottom: '6px solid transparent',
                      borderLeft: `6px solid ${section.color}66`,
                    }}
                  />
                </motion.div>

                {/* Connection line to dot */}
                {isHovered && (
                  <motion.div
                    className="absolute right-3 top-1/2 h-px"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 12, opacity: 0.5 }}
                    transition={{ duration: 0.2 }}
                    style={{ backgroundColor: section.color }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Percentage indicator at bottom */}
        <motion.div
          className="absolute -bottom-8 right-0 text-xs font-mono text-muted-foreground"
          style={{
            transform: 'rotateY(20deg)',
          }}
        >
          {Math.round(scrollYProgress.get() * 100)}%
        </motion.div>
      </div>
    </div>
  );
}
