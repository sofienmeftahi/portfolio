import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const AnimatedRoom = ({ isMobile }) => {
  const groupRef = useRef();
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = -Math.PI / 4 + Math.sin(time * 0.1) * 0.05;
      groupRef.current.position.y = -3.5 + Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group
      ref={groupRef}
      scale={isMobile ? 0.7 : 1}
      position={[0, -3.5, 0]}
      rotation={[0, -Math.PI / 4, 0]}
    >
      <Room />
    </group>
  );
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 50 }}>
      <color attach="background" args={["#020617"]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Enhanced lighting */}
      <ambientLight intensity={0.3} color="#1e3a5f" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={25}
        minDistance={8}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate
        autoRotateSpeed={0.5}
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={isMobile ? 400 : 800} />
        <AnimatedRoom isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
