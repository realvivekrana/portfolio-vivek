import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.3, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -200, 150, 0],
          y: [0, 150, -100, 0],
          scale: [1, 1.4, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute top-1/4 -right-40 w-[700px] h-[700px] bg-accent/8 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, 120, -120, 0],
          y: [0, -80, 80, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute -bottom-40 left-1/4 w-[800px] h-[800px] bg-primary/6 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 100, -100, 0],
          scale: [1, 1.25, 1.05, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
        className="absolute top-1/2 right-1/4 w-[650px] h-[650px] bg-accent/7 rounded-full blur-3xl"
      />

      {/* Medium floating orbs */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.15, 1, 1],
          opacity: [0.3, 0.5, 0.3, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-primary/10 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 50, -70, 0],
          scale: [1, 1.2, 1, 1],
          opacity: [0.3, 0.6, 0.3, 0.3],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] bg-accent/10 rounded-full blur-2xl"
      />

      {/* Subtle grid pattern with animation */}
      <motion.div 
        animate={{
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </motion.div>

      {/* Animated particles - Enhanced */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => {
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * 100;
          const randomDelay = Math.random() * 8;
          const randomDuration = 6 + Math.random() * 8;
          const randomSize = 1 + Math.random() * 2;
          const randomYMove = -40 - Math.random() * 20;
          const randomXMove = Math.random() * 30 - 15;
          
          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
                width: `${randomSize}px`,
                height: `${randomSize}px`,
              }}
            >
              <motion.div
                animate={{
                  y: [0, randomYMove, 0],
                  x: [0, randomXMove, 0],
                  opacity: [0.1, 0.4, 0.1],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: randomDuration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: randomDelay,
                }}
                className="w-full h-full bg-primary/40 rounded-full"
              />
            </div>
          );
        })}
      </div>

      {/* Flowing gradient lines */}
      <motion.div
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />

      <motion.div
        animate={{
          x: ['100%', '-100%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
        className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
      />

      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50" />
    </div>
  );
};

export default AnimatedBackground;
