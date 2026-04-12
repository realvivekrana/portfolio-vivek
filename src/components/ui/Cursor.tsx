import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// ══════════════════════════════════════════════════════════════
// CUSTOM 3D CURSOR - Outer ring + inner dot with morphing
// ══════════════════════════════════════════════════════════════
export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorSize, setCursorSize] = useState({ width: 40, height: 40 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Mouse position with spring animation
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Outer ring with lag
  const outerX = useMotionValue(-100);
  const outerY = useMotionValue(-100);
  
  const outerSpringConfig = { damping: 20, stiffness: 200 };
  const outerXSpring = useSpring(outerX, outerSpringConfig);
  const outerYSpring = useSpring(outerY, outerSpringConfig);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      outerX.set(e.clientX);
      outerY.set(e.clientY);
    };

    // Mouse down handler
    const handleMouseDown = () => {
      setIsClicking(true);
    };

    // Mouse up handler
    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Detect hoverable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.style.cursor === 'pointer';

      if (isInteractive) {
        setIsHovering(true);
        
        // Get element dimensions for morphing
        const rect = (target.closest('a') || target.closest('button') || target).getBoundingClientRect();
        setCursorSize({
          width: rect.width + 20,
          height: rect.height + 20,
        });
      } else {
        setIsHovering(false);
        setCursorSize({ width: 40, height: 40 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, outerX, outerY]);

  // Hide on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Outer ring - follows with lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: outerXSpring,
          y: outerYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="border-2 rounded-full"
          animate={{
            width: isHovering ? cursorSize.width : 40,
            height: isHovering ? cursorSize.height : 40,
            borderColor: isHovering ? '#4F8EF7' : '#F0F0FF',
            borderRadius: isHovering ? '12px' : '50%',
            scale: isClicking ? 0.8 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
          }}
          style={{
            boxShadow: isHovering 
              ? '0 0 20px rgba(79, 142, 247, 0.6), inset 0 0 20px rgba(79, 142, 247, 0.2)' 
              : 'none',
          }}
        />
      </motion.div>

      {/* Inner dot - follows immediately */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: isClicking ? 4 : 8,
            height: isClicking ? 4 : 8,
            backgroundColor: isHovering ? '#4F8EF7' : '#F0F0FF',
            scale: isClicking ? 0.5 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 28,
          }}
          style={{
            boxShadow: isHovering 
              ? '0 0 10px rgba(79, 142, 247, 0.8)' 
              : '0 0 5px rgba(240, 240, 255, 0.5)',
          }}
        />
      </motion.div>

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997] rounded-full border-2 border-primary"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ width: 20, height: 20, opacity: 1 }}
          animate={{ 
            width: 80, 
            height: 80, 
            opacity: 0,
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      )}
    </>
  );
}
