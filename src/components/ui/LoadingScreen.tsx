import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';

// ══════════════════════════════════════════════════════════════
// CINEMATIC LOADING SCREEN - Intro animation before portfolio
// ══════════════════════════════════════════════════════════════
interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    // Start exit animation after 2.5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      
      // GSAP curtain wipe animation
      gsap.to('.loading-screen', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1,
        ease: 'power4.inOut',
        onComplete: () => {
          onComplete();
        },
      });
    }, 2500);

    return () => {
      clearInterval(interval);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="loading-screen fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Animated background grid */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(79, 142, 247, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(79, 142, 247, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                animation: 'gridScroll 20s linear infinite',
              }}
            />
          </div>

          {/* Glowing orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* 3D "VR" Logo */}
            <motion.div
              initial={{ rotateZ: -180, scale: 0, opacity: 0 }}
              animate={{ rotateZ: 0, scale: 1, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.2 
              }}
              className="relative"
            >
              <div 
                className="text-8xl md:text-9xl font-black tracking-wider select-none"
                style={{
                  background: 'linear-gradient(135deg, #4F8EF7 0%, #9B5DE5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: `
                    1px 1px 0 #1a1a2e,
                    2px 2px 0 #1a1a2e,
                    3px 3px 0 #1a1a2e,
                    4px 4px 0 #1a1a2e,
                    5px 5px 0 #0d0d14,
                    6px 6px 0 #0d0d14,
                    7px 7px 0 #0d0d14,
                    8px 8px 0 #0d0d14,
                    0 0 40px rgba(79, 142, 247, 0.5),
                    0 0 80px rgba(155, 93, 229, 0.3)
                  `,
                  filter: 'drop-shadow(0 0 20px rgba(79, 142, 247, 0.6))',
                }}
              >
                VR
              </div>
              
              {/* Rotating ring around logo */}
              <motion.div
                className="absolute inset-0 -m-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full border-4 border-primary/30 rounded-full" />
              </motion.div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl font-semibold text-primary mb-2">
                Vivek Rana
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                Loading Portfolio Experience...
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="w-64 md:w-80"
            >
              <div className="relative h-1 bg-muted/20 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #4F8EF7 0%, #9B5DE5 100%)',
                    boxShadow: '0 0 20px rgba(79, 142, 247, 0.6)',
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              {/* Progress percentage */}
              <motion.p
                className="text-center text-xs text-muted-foreground mt-2 font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {Math.floor(Math.min(progress, 100))}%
              </motion.p>
            </motion.div>

            {/* Animated dots */}
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Bottom decorative line */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #4F8EF7 50%, transparent 100%)',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Add this to your global CSS (index.css)
const styles = `
@keyframes gridScroll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(50px);
  }
}
`;

// Export styles to be added to index.css
export const loadingScreenStyles = styles;
