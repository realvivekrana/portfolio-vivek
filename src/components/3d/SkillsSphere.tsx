import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// ══════════════════════════════════════════════════════════════
// SKILL DATA - Technologies to orbit
// ══════════════════════════════════════════════════════════════
const SKILLS = [
  { name: 'React', color: '#61DAFB', ring: 0 },
  { name: 'JavaScript', color: '#F7DF1E', ring: 0 },
  { name: 'TypeScript', color: '#3178C6', ring: 0 },
  { name: 'Node.js', color: '#339933', ring: 1 },
  { name: 'Express.js', color: '#000000', ring: 1 },
  { name: 'MongoDB', color: '#47A248', ring: 1 },
  { name: 'HTML5', color: '#E34F26', ring: 2 },
  { name: 'CSS3', color: '#1572B6', ring: 2 },
  { name: 'Tailwind', color: '#06B6D4', ring: 2 },
  { name: 'Git', color: '#F05032', ring: 3 },
  { name: 'REST APIs', color: '#4F8EF7', ring: 3 },
  { name: 'Redux', color: '#764ABC', ring: 3 },
  { name: 'Next.js', color: '#000000', ring: 4 },
  { name: 'Figma', color: '#F24E1E', ring: 4 },
  { name: 'VS Code', color: '#007ACC', ring: 4 },
];

// ══════════════════════════════════════════════════════════════
// SKILL PILL COMPONENT - HTML label positioned in 3D space
// ══════════════════════════════════════════════════════════════
interface SkillPillProps {
  name: string;
  color: string;
  position: [number, number, number];
  distance: number;
}

function SkillPill({ name, color, position, distance }: SkillPillProps) {
  const [hovered, setHovered] = useState(false);
  
  // Calculate opacity based on z-position (depth)
  const opacity = useMemo(() => {
    const normalizedZ = (position[2] + 3) / 6; // Normalize z from -3 to 3 → 0 to 1
    return Math.max(0.3, Math.min(1, normalizedZ));
  }, [position]);

  return (
    <Html
      position={position}
      center
      distanceFactor={distance}
      style={{
        transition: 'all 0.3s ease',
        pointerEvents: 'auto',
      }}
    >
      <motion.div
        className="skill-pill"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          scale: hovered ? 1.3 : 1,
          z: hovered ? 50 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{
          padding: '8px 16px',
          borderRadius: '20px',
          background: hovered 
            ? `linear-gradient(135deg, ${color}22, ${color}44)` 
            : 'rgba(13, 13, 20, 0.8)',
          border: `2px solid ${hovered ? color : 'rgba(79, 142, 247, 0.3)'}`,
          color: hovered ? color : '#F0F0FF',
          fontSize: '14px',
          fontWeight: '600',
          whiteSpace: 'nowrap',
          backdropFilter: 'blur(10px)',
          boxShadow: hovered 
            ? `0 0 20px ${color}66, 0 0 40px ${color}33` 
            : '0 4px 12px rgba(0,0,0,0.3)',
          opacity: hovered ? 1 : opacity,
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        {name}
      </motion.div>
    </Html>
  );
}

// ══════════════════════════════════════════════════════════════
// CENTER GLOWING SPHERE - Pulsing core
// ══════════════════════════════════════════════════════════════
function CenterSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.set(pulse, pulse, pulse);
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshBasicMaterial
        color="#4F8EF7"
        transparent
        opacity={0.6}
        wireframe={false}
      />
      {/* Outer glow sphere */}
      <mesh scale={1.5}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial
          color="#4F8EF7"
          transparent
          opacity={0.1}
          wireframe={false}
        />
      </mesh>
    </mesh>
  );
}

// ══════════════════════════════════════════════════════════════
// ORBIT RINGS - Visual orbit paths
// ══════════════════════════════════════════════════════════════
function OrbitRings() {
  const rings = [1.5, 2, 2.5, 3, 3.5];

  return (
    <>
      {rings.map((radius, i) => {
        const points = [];
        for (let j = 0; j <= 64; j++) {
          const angle = (j / 64) * Math.PI * 2;
          points.push(
            new THREE.Vector3(
              Math.cos(angle) * radius,
              0,
              Math.sin(angle) * radius
            )
          );
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);

        return (
          <line key={i} geometry={geometry}>
            <lineBasicMaterial
              color="#4F8EF7"
              transparent
              opacity={0.1}
            />
          </line>
        );
      })}
    </>
  );
}

// ══════════════════════════════════════════════════════════════
// ORBITING SKILLS - Skills rotating around center
// ══════════════════════════════════════════════════════════════
function OrbitingSkills() {
  const groupRef = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(0);
  const previousMouseX = useRef(0);

  // Auto-rotation when not dragging
  useFrame((state) => {
    if (groupRef.current && !isDragging) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  // Mouse drag rotation
  const handlePointerDown = (e: any) => {
    setIsDragging(true);
    previousMouseX.current = e.clientX;
  };

  const handlePointerMove = (e: any) => {
    if (isDragging && groupRef.current) {
      const deltaX = e.clientX - previousMouseX.current;
      groupRef.current.rotation.y += deltaX * 0.01;
      previousMouseX.current = e.clientX;
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Calculate positions for skills on different orbit rings
  const skillPositions = useMemo(() => {
    return SKILLS.map((skill, index) => {
      const ringRadius = 1.5 + skill.ring * 0.5; // Ring 0 = 1.5, Ring 1 = 2.0, etc.
      const skillsInRing = SKILLS.filter(s => s.ring === skill.ring).length;
      const indexInRing = SKILLS.filter((s, i) => s.ring === skill.ring && i <= index).length - 1;
      
      const angle = (indexInRing / skillsInRing) * Math.PI * 2 + (skill.ring * 0.5);
      const x = Math.cos(angle) * ringRadius;
      const z = Math.sin(angle) * ringRadius;
      const y = (Math.random() - 0.5) * 0.5; // Slight vertical variation

      return {
        ...skill,
        position: [x, y, z] as [number, number, number],
      };
    });
  }, []);

  return (
    <group
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <OrbitRings />
      <CenterSphere />
      {skillPositions.map((skill, i) => (
        <SkillPill
          key={i}
          name={skill.name}
          color={skill.color}
          position={skill.position}
          distance={8}
        />
      ))}
    </group>
  );
}

// ══════════════════════════════════════════════════════════════
// MAIN SKILLS SPHERE COMPONENT
// ══════════════════════════════════════════════════════════════
export default function SkillsSphere() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // On mobile, return a simple grid instead of 3D sphere
  if (isMobile) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
        {SKILLS.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="px-4 py-2 rounded-full text-center text-sm font-semibold"
            style={{
              background: 'rgba(13, 13, 20, 0.8)',
              border: `2px solid ${skill.color}44`,
              color: skill.color,
              backdropFilter: 'blur(10px)',
            }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full h-[600px] relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)}
        gl={{ 
          antialias: true, 
          alpha: true,
        }}
        style={{ 
          background: 'transparent',
          cursor: 'grab',
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <OrbitingSkills />
      </Canvas>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
        <p className="text-sm text-muted-foreground">
          🖱️ Drag to rotate • Hover to highlight
        </p>
      </div>
    </div>
  );
}
