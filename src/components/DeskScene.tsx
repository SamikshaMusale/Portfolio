import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

const DeskModel = () => {
  return (
    <group>
      {/* Desk Surface */}
      <mesh position={[0, -1, 0]} receiveShadow castShadow>
        <boxGeometry args={[4, 0.15, 2.5]} />
        <meshStandardMaterial 
          color="#1a1520" 
          metalness={0.3} 
          roughness={0.7}
        />
      </mesh>

      {/* Desk Legs */}
      <mesh position={[-1.7, -1.5, -1]} castShadow>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[1.7, -1.5, -1]} castShadow>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[-1.7, -1.5, 1]} castShadow>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[1.7, -1.5, 1]} castShadow>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Mouse Pad with RGB glow */}
      <mesh position={[0.3, -0.92, 0.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.2, 0.8]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          emissive="#a855f7" 
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.4}
        />
      </mesh>
      {/* RGB edge glow */}
      <pointLight position={[0.3, -0.8, 0.3]} color="#a855f7" intensity={0.5} distance={1} />

      {/* Laptop Base */}
      <mesh position={[0, -0.85, -0.2]} castShadow>
        <boxGeometry args={[1.3, 0.05, 0.9]} />
        <meshStandardMaterial color="#15151a" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Laptop Keyboard */}
      <mesh position={[0, -0.82, -0.1]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.01, 0.7]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Laptop Screen */}
      <mesh position={[0, -0.1, -0.65]} rotation={[-0.2, 0, 0]} castShadow>
        <boxGeometry args={[1.3, 0.85, 0.05]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Laptop Screen Display */}
      <mesh position={[0, -0.1, -0.62]} rotation={[-0.2, 0, 0]}>
        <planeGeometry args={[1.2, 0.75]} />
        <meshStandardMaterial 
          color="#1a4d5c" 
          emissive="#00d9ff" 
          emissiveIntensity={0.8}
        />
      </mesh>
      <pointLight position={[0, -0.1, -0.5]} color="#00d9ff" intensity={1} distance={2} />

      {/* Left Speaker */}
      <mesh position={[-1.3, -0.5, -0.5]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.6]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Speaker RGB Ring */}
      <mesh position={[-1.3, -0.3, -0.5]}>
        <torusGeometry args={[0.12, 0.02, 16, 32]} />
        <meshStandardMaterial 
          color="#ff006e" 
          emissive="#ff006e" 
          emissiveIntensity={2}
        />
      </mesh>
      <pointLight position={[-1.3, -0.3, -0.5]} color="#ff006e" intensity={1.5} distance={1.5} />

      {/* Right Speaker */}
      <mesh position={[1.3, -0.5, -0.5]} castShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.6]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Speaker RGB Ring */}
      <mesh position={[1.3, -0.3, -0.5]}>
        <torusGeometry args={[0.12, 0.02, 16, 32]} />
        <meshStandardMaterial 
          color="#a855f7" 
          emissive="#a855f7" 
          emissiveIntensity={2}
        />
      </mesh>
      <pointLight position={[1.3, -0.3, -0.5]} color="#a855f7" intensity={1.5} distance={1.5} />

      {/* Headphones Stand */}
      <mesh position={[-1.2, -0.6, 0.4]} castShadow>
        <cylinderGeometry args={[0.03, 0.08, 0.8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
      </mesh>
      
      {/* Headphones Headband */}
      <mesh position={[-1.2, -0.1, 0.4]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <torusGeometry args={[0.15, 0.02, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#2a2a3a" metalness={0.8} roughness={0.3} />
      </mesh>
      
      {/* Left Ear Cup */}
      <mesh position={[-1.35, -0.1, 0.4]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.04]} />
        <meshStandardMaterial color="#2a2a3a" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[-1.35, -0.1, 0.4]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.02]} />
        <meshStandardMaterial 
          color="#a855f7" 
          emissive="#a855f7" 
          emissiveIntensity={1.5}
        />
      </mesh>
      
      {/* Right Ear Cup */}
      <mesh position={[-1.05, -0.1, 0.4]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.04]} />
        <meshStandardMaterial color="#2a2a3a" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[-1.05, -0.1, 0.4]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.02]} />
        <meshStandardMaterial 
          color="#a855f7" 
          emissive="#a855f7" 
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Coffee Cup */}
      <mesh position={[1.2, -0.75, 0.5]} castShadow>
        <cylinderGeometry args={[0.08, 0.06, 0.15]} />
        <meshStandardMaterial 
          color="#ffcc00" 
          metalness={0.3} 
          roughness={0.6}
        />
      </mesh>
      {/* Coffee inside */}
      <mesh position={[1.2, -0.68, 0.5]}>
        <cylinderGeometry args={[0.075, 0.075, 0.02]} />
        <meshStandardMaterial 
          color="#4a2c1a" 
          metalness={0.1} 
          roughness={0.9}
        />
      </mesh>
      {/* Cup Handle */}
      <mesh position={[1.28, -0.75, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.04, 0.01, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#ffcc00" metalness={0.3} roughness={0.6} />
      </mesh>

      {/* Mouse */}
      <mesh position={[0.7, -0.88, 0.5]} rotation={[-0.1, -0.2, 0]} castShadow>
        <boxGeometry args={[0.12, 0.06, 0.18]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          metalness={0.9} 
          roughness={0.2}
          emissive="#ff006e"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Smart Speaker/Device */}
      <mesh position={[1.4, -0.85, -0.3]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.12]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[1.4, -0.78, -0.3]}>
        <cylinderGeometry args={[0.03, 0.03, 0.01]} />
        <meshStandardMaterial 
          color="#00d9ff" 
          emissive="#00d9ff" 
          emissiveIntensity={2}
        />
      </mesh>
      <pointLight position={[1.4, -0.75, -0.3]} color="#00d9ff" intensity={0.8} distance={0.5} />

      {/* Ambient RGB Light Strip under desk */}
      <mesh position={[0, -1.05, -1.2]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.8, 0.05]} />
        <meshStandardMaterial 
          color="#a855f7" 
          emissive="#a855f7" 
          emissiveIntensity={1.5}
          transparent
          opacity={0.8}
        />
      </mesh>
      <pointLight position={[0, -1, -1.2]} color="#a855f7" intensity={2} distance={2} />
      <pointLight position={[-1.5, -1, -1.2]} color="#00d9ff" intensity={1.5} distance={2} />
      <pointLight position={[1.5, -1, -1.2]} color="#ff006e" intensity={1.5} distance={2} />
    </group>
  );
};

const DeskScene = () => {
  return (
    <div className="w-full h-full -mt-24 lg:ml-4">
      <Canvas shadows gl={{ alpha: true, antialias: true }}>
        <PerspectiveCamera makeDefault position={[3, 1.8, 3]} fov={40} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 8, 5]} intensity={0.5} castShadow />
          <pointLight position={[0, 2, 0]} color="#00d9ff" intensity={0.3} />
          <pointLight position={[-2, 1, -1]} color="#a855f7" intensity={0.4} />
          <pointLight position={[2, 1, -1]} color="#ff006e" intensity={0.4} />
          <DeskModel />
          <Environment preset="night" />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default DeskScene;
