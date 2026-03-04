import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Text, Float, Sphere, Line } from "@react-three/drei";

const SkillHelix = ({ skills }) => {
  const groupRef = useRef();

  // 1. Calculate the DNA structure
  const { points, bonds } = useMemo(() => {
    const pts = [];
    const bnds = [];

    for (let i = 0; i < 50; i++) {
      const y = (i - 25) * 0.3;
      const angle = i * 0.5;

      // DNA radius is 3
      const p1 = new THREE.Vector3(Math.cos(angle) * 3, y, Math.sin(angle) * 3);
      const p2 = new THREE.Vector3(
        Math.cos(angle + Math.PI) * 3,
        y,
        Math.sin(angle + Math.PI) * 3,
      );

      pts.push(p1, p2);
      bnds.push([p1, p2]);
    }
    return { points: pts, bonds: bnds };
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* DNA Rungs */}
      {bonds.map((pointsArray, i) => (
        <Line
          key={`bond-${i}`}
          points={pointsArray}
          color={i % 2 === 0 ? "#00f7ff" : "#915eff"}
          lineWidth={1.5}
          transparent
          opacity={0.4}
          toneMapped={false}
        />
      ))}

      {/* DNA Backbone */}
      {points.map((pos, i) => (
        <Sphere key={`sphere-${i}`} args={[0.08, 16, 16]} position={pos}>
          <meshStandardMaterial
            emissive={i % 2 === 0 ? "#00f7ff" : "#915eff"}
            emissiveIntensity={2}
            color="white"
            toneMapped={false}
          />
        </Sphere>
      ))}

      {/* Floating Skills - NOW MUCH CLOSER */}
      {skills.map((skill, idx) => (
        <Float
          key={`skill-${idx}`}
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={1.5}
        >
          <Text
            // THE FIX: Tighter vertical spacing and adjusted spiral angle
            position={[
              Math.cos(idx * 1.2) * 3.8, // X: Changed from * 2 to * 1.2 for a smoother spiral
              (idx - skills.length / 2) * 1.1 + 0.5, // Y: Shrunk the gap from 2.5 to 1.1 so they pack tightly
              Math.sin(idx * 1.2) * 3.8, // Z: Matches X spiral
            ]}
            fontSize={0.65}
            color={idx % 2 === 0 ? "#00f7ff" : "#ffffff"}
            anchorX="center"
            anchorY="middle"
            toneMapped={false}
          >
            {skill.name}
          </Text>
        </Float>
      ))}
    </group>
  );
};

export default SkillHelix;
