import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./robot/scene.gltf");
  
  // 1. Create a variable to store the mouse position
  // We start at x=0, y=0 (center of screen)
  const mouse = useRef({ x: 0, y: 0 });

  // 2. Add a Global Event Listener
  // This listens to the mouse on the WHOLE window, not just the canvas box
  useEffect(() => {
    const handleMouseMove = (event) => {
      // Calculate normalized coordinates (-1 to +1) based on the whole screen width
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state) => {
    
    // Smoothly rotate the robot
    computer.scene.rotation.y = THREE.MathUtils.lerp(
      computer.scene.rotation.y, 
      -0.5 + mouse.current.x * 0.5, // Look Left/Right
      0.15
    );
    
    computer.scene.rotation.x = THREE.MathUtils.lerp(
      computer.scene.rotation.x, 
      -0.01 + mouse.current.y * -0.2, // Look Up/Down
      0.15
    );
  });

  return (
    <mesh>
      <hemisphereLight intensity={1.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={6} position={[0.5, 0.5 , 2]}/>
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.5 : 2} 
        position={isMobile ? [0, -2, -0.5] : [0, -2.25, -0.5]} 
        // Rotation is handled by useFrame now
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;