import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ══════════════════════════════════════════════════════════════
// STARFIELD COMPONENT - 3000 particles slowly rotating
// ══════════════════════════════════════════════════════════════
function Starfield() {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 30 + Math.random() * 20;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.0003;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

// ══════════════════════════════════════════════════════════════
// FLOATING WIREFRAME SHAPES - Icosahedron, Octahedron, Torus
// ══════════════════════════════════════════════════════════════
interface FloatingShapeProps {
  geometry: THREE.BufferGeometry;
  position: [number, number, number];
  color: string;
  rotationSpeed: [number, number, number];
}

function FloatingShape({ geometry, position, color, rotationSpeed }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed[0];
      meshRef.current.rotation.y += rotationSpeed[1];
      meshRef.current.rotation.z += rotationSpeed[2];
      
      // Floating bob animation
      meshRef.current.position.y = initialY + Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} geometry={geometry}>
      <meshBasicMaterial color={color} wireframe transparent opacity={0.4} />
    </mesh>
  );
}

function FloatingShapes() {
  const shapes = useMemo(() => {
    const icosahedron = new THREE.IcosahedronGeometry(0.4, 0);
    const octahedron = new THREE.OctahedronGeometry(0.3, 0);
    const torus = new THREE.TorusGeometry(0.3, 0.08, 16, 32);
    const tetrahedron = new THREE.TetrahedronGeometry(0.35, 0);

    return [
      { geometry: icosahedron, position: [-3, 2, -1] as [number, number, number], color: '#4F8EF7', speed: [0.003, 0.004, 0.002] as [number, number, number] },
      { geometry: icosahedron, position: [3.5, -1.5, -2] as [number, number, number], color: '#4F8EF7', speed: [0.002, 0.005, 0.003] as [number, number, number] },
      { geometry: octahedron, position: [-2, -2, 0] as [number, number, number], color: '#9B5DE5', speed: [0.004, 0.003, 0.004] as [number, number, number] },
      { geometry: octahedron, position: [2.5, 1.5, -1.5] as [number, number, number], color: '#9B5DE5', speed: [0.003, 0.006, 0.002] as [number, number, number] },
      { geometry: torus, position: [-3.5, 0, -0.5] as [number, number, number], color: '#4F8EF7', speed: [0.005, 0.002, 0.003] as [number, number, number] },
      { geometry: torus, position: [1.5, -1, -1] as [number, number, number], color: '#6B8EF7', speed: [0.002, 0.004, 0.005] as [number, number, number] },
      { geometry: tetrahedron, position: [0, 2.5, -2] as [number, number, number], color: '#7B6EF7', speed: [0.004, 0.004, 0.003] as [number, number, number] },
      { geometry: tetrahedron, position: [-1.5, -1.5, -1.5] as [number, number, number], color: '#9B5DE5', speed: [0.003, 0.003, 0.004] as [number, number, number] },
    ];
  }, []);

  return (
    <>
      {shapes.map((shape, i) => (
        <FloatingShape
          key={i}
          geometry={shape.geometry}
          position={shape.position}
          color={shape.color}
          rotationSpeed={shape.speed}
        />
      ))}
    </>
  );
}

// ══════════════════════════════════════════════════════════════
// GLOWING GRID PLANE - Infinite scrolling grid
// ══════════════════════════════════════════════════════════════
function GlowingGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame(() => {
    if (gridRef.current) {
      gridRef.current.position.z += 0.02;
      if (gridRef.current.position.z > 10) {
        gridRef.current.position.z = 0;
      }
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[40, 40, '#4F8EF7', '#4F8EF7']}
      position={[0, -3, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

// ══════════════════════════════════════════════════════════════
// NEBULA EFFECT - Soft glowing sprites
// ══════════════════════════════════════════════════════════════
function NebulaEffect() {
  const groupRef = useRef<THREE.Group>(null);

  const nebulae = useMemo(() => {
    const items = [];
    for (let i = 0; i < 100; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20 - 5,
        ] as [number, number, number],
        scale: 1 + Math.random() * 2,
        opacity: 0.02 + Math.random() * 0.04,
        speed: 0.0001 + Math.random() * 0.0003,
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.x += Math.sin(state.clock.elapsedTime * nebulae[i].speed) * 0.01;
        child.position.y += Math.cos(state.clock.elapsedTime * nebulae[i].speed) * 0.01;
        const scale = nebulae[i].scale + Math.sin(state.clock.elapsedTime + i) * 0.2;
        child.scale.set(scale, scale, scale);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {nebulae.map((nebula, i) => (
        <mesh key={i} position={nebula.position}>
          <planeGeometry args={[2, 2]} />
          <meshBasicMaterial
            color="#4F8EF7"
            transparent
            opacity={nebula.opacity}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

// ══════════════════════════════════════════════════════════════
// GSAP SCROLL CAMERA ANIMATION - Camera moves through 3D space
// ══════════════════════════════════════════════════════════════
function ScrollCameraAnimation() {
  const { camera } = useThree();

  useEffect(() => {
    // Hero → About: camera drifts left and zooms in
    gsap.to(camera.position, {
      x: -2,
      z: 4,
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: 'top center',
        scrub: 1.5,
      },
    });

    // About → Skills: camera rotates and moves up
    gsap.to(camera.rotation, {
      y: 0.3,
      scrollTrigger: {
        trigger: '#skills',
        start: 'top bottom',
        end: 'top center',
        scrub: 1.5,
      },
    });

    gsap.to(camera.position, {
      y: 0.5,
      z: 6,
      scrollTrigger: {
        trigger: '#skills',
        start: 'top bottom',
        end: 'top center',
        scrub: 1.5,
      },
    });

    // Skills → Projects: camera pulls back for wide view
    gsap.to(camera.position, {
      x: 0,
      z: 7,
      scrollTrigger: {
        trigger: '#projects',
        start: 'top bottom',
        end: 'top center',
        scrub: 1.5,
      },
    });

    gsap.to(camera.rotation, {
      y: 0,
      scrollTrigger: {
        trigger: '#projects',
        start: 'top bottom',
        end: 'top center',
        scrub: 1.5,
      },
    });

    // Projects → Contact: camera moves right
    gsap.to(camera.position, {
      x: 1,
      z: 5,
      scrollTrigger: {
        trigger: '#contact',
        start: 'top bottom',
        end: 'top center',
        scrub: 1.5,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [camera]);

  return null;
}

// ══════════════════════════════════════════════════════════════
// MOUSE PARALLAX CAMERA - Camera follows cursor
// ══════════════════════════════════════════════════════════════
function CameraController() {
  const { camera } = useThree();
  
  useFrame(() => {
    // Smooth camera movement
    camera.lookAt(0, 0, 0);
  });

  // Mouse parallax
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      camera.position.x += (x * 0.3 - camera.position.x) * 0.03;
      camera.position.y += (-y * 0.2 - camera.position.y) * 0.03;
    });
  }

  return null;
}

// ══════════════════════════════════════════════════════════════
// MAIN BACKGROUND SCENE COMPONENT
// ══════════════════════════════════════════════════════════════
export default function BackgroundScene() {
  // Detect mobile/low-end devices
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const isLowEnd = typeof navigator !== 'undefined' && navigator.hardwareConcurrency <= 4;

  // Disable on mobile for performance
  if (isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2)}
        gl={{ 
          antialias: !isLowEnd, 
          alpha: true,
          powerPreference: 'high-performance'
        }}
        style={{ background: 'transparent' }}
      >
        <CameraController />
        <ScrollCameraAnimation />
        <Starfield />
        <FloatingShapes />
        <GlowingGrid />
        {!isLowEnd && <NebulaEffect />}
      </Canvas>
    </div>
  );
}
