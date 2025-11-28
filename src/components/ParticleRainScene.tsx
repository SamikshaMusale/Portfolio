import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

interface Particle {
  position: [number, number, number];
  speed: number;
  rotation: [number, number, number];
  rotationSpeed: [number, number, number];
  color: string;
  size: number;
}

const ParticleSystem = () => {
  const meshRef = useRef<THREE.Group>(null);

  // Generate particles with random properties
  const particles = useMemo<Particle[]>(() => {
    const colors = ["#00d9ff", "#a855f7", "#ff006e"];
    return Array.from({ length: 150 }, () => ({
      position: [
        (Math.random() - 0.5) * 12,
        Math.random() * 15 + 5,
        (Math.random() - 0.5) * 12,
      ] as [number, number, number],
      speed: Math.random() * 0.03 + 0.02,
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ] as [number, number, number],
      rotationSpeed: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
      ] as [number, number, number],
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 0.1 + 0.05,
    }));
  }, []);

  // Animation loop
  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.children.forEach((child, i) => {
      const particle = particles[i];
      
      // Move particle down
      child.position.y -= particle.speed;
      
      // Add slight drift
      child.position.x += Math.sin(Date.now() * 0.001 + i) * 0.001;
      child.position.z += Math.cos(Date.now() * 0.001 + i) * 0.001;

      // Rotate particle
      child.rotation.x += particle.rotationSpeed[0];
      child.rotation.y += particle.rotationSpeed[1];
      child.rotation.z += particle.rotationSpeed[2];

      // Reset particle to top when it falls below threshold
      if (child.position.y < -10) {
        child.position.y = 10 + Math.random() * 5;
        child.position.x = (Math.random() - 0.5) * 12;
        child.position.z = (Math.random() - 0.5) * 12;
      }
    });
  });

  return (
    <group ref={meshRef}>
      {particles.map((particle, i) => (
        <mesh
          key={i}
          position={particle.position}
          rotation={particle.rotation}
        >
          <boxGeometry args={[particle.size, particle.size, particle.size]} />
          <meshStandardMaterial
            color={particle.color}
            emissive={particle.color}
            emissiveIntensity={1.5}
            transparent
            opacity={0.8}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
};

const ParticleRainScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas gl={{ alpha: true, antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={60} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} color="#a855f7" intensity={0.5} />
          <pointLight position={[-5, 5, -5]} color="#00d9ff" intensity={0.5} />
          <ParticleSystem />
          <fog attach="fog" args={["#000000", 5, 20]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ParticleRainScene;
