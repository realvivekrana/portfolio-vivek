import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const updateMousePosition = (e: MouseEvent) => {
      // Add 80ms lag for smooth trailing effect
      timeoutId = setTimeout(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }, 80);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        style={{
          position: 'fixed',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#4F8EF7',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 20px rgba(79, 142, 247, 0.6)',
        }}
      />

      {/* Cursor ring on hover */}
      <motion.div
        className="custom-cursor-ring"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1 : 0,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        style={{
          position: 'fixed',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid #4F8EF7',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />

      <style>{`
        * {
          cursor: none !important;
        }
        
        @media (max-width: 768px) {
          .custom-cursor-dot,
          .custom-cursor-ring {
            display: none;
          }
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
