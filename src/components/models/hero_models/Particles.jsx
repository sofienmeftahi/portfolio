import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 800 }) => {
  const mesh = useRef();
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 15 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      temp.push({
        position: [
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.sin(theta),
        ],
        speed: 0.002 + Math.random() * 0.003,
        rotationSpeed: (Math.random() - 0.5) * 0.001,
        size: 0.03 + Math.random() * 0.07,
        color: new THREE.Color().setHSL(0.55 + Math.random() * 0.2, 0.7, 0.6),
      });
    }
    return temp;
  }, [count]);

  const colors = useMemo(() => {
    const c = new Float32Array(count * 3);
    particles.forEach((p, i) => {
      c[i * 3] = p.color.r;
      c[i * 3 + 1] = p.color.g;
      c[i * 3 + 2] = p.color.b;
    });
    return c;
  }, [count, particles]);

  const sizes = useMemo(() => {
    const s = new Float32Array(count);
    particles.forEach((p, i) => {
      s[i] = p.size;
    });
    return s;
  }, [count, particles]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const positions = mesh.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      const particle = particles[i];
      let x = positions[i * 3];
      let y = positions[i * 3 + 1];
      let z = positions[i * 3 + 2];
      
      const angle = time * particle.rotationSpeed;
      const radius = Math.sqrt(x * x + z * z);
      const currentAngle = Math.atan2(z, x);
      
      x = radius * Math.cos(currentAngle + particle.rotationSpeed);
      z = radius * Math.sin(currentAngle + particle.rotationSpeed);
      
      y += Math.sin(time * 0.5 + i) * 0.001;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  const positions = new Float32Array(count * 3);
  particles.forEach((p, i) => {
    positions[i * 3] = p.position[0];
    positions[i * 3 + 1] = p.position[1];
    positions[i * 3 + 2] = p.position[2];
  });

  return (
    <group>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={count}
            array={sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          vertexColors
          size={0.1}
          sizeAttenuation={true}
          transparent
          opacity={0.8}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      <points position={[0, 0, -5]}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count / 2}
            array={positions.slice(0, (count / 2) * 3)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#3b82f6"
          size={0.05}
          sizeAttenuation={true}
          transparent
          opacity={0.4}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
};

export default Particles;
