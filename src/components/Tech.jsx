import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import SkillHelix from "./SkillHelix";

const technologies = [
  { name: "React.js" },
  { name: "Three.js" },
  { name: "Node.js" },
  { name: "JavaScript" },
  { name: "Tailwind" },
  { name: "Java" },
  { name: "Hibernate" },
  { name: "SQL" },
  { name: "Python" },
  { name: "Linux" },
  { name: "Git" },
  { name: "Figma" },
];

const Tech = () => {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* TITLE */}
      <div className="absolute top-10 w-full z-10 pointer-events-none">
        <h2 className="text-white text-center text-5xl font-black uppercase tracking-widest opacity-80">
          Technical DNA
        </h2>
      </div>

      {/* === LEFT HUD: REAL SKILLS & ACADEMIC METRICS === */}
      <div className="hidden md:flex flex-col absolute left-8 top-1/4 z-10 pointer-events-none w-72 opacity-70">
        <div className="border-l-2 border-[#00f7ff] pl-4 mb-6">
          <p className="text-[#00f7ff] font-mono text-xs mb-1">
            ACADEMIC.STATUS
          </p>
          <div className="flex justify-between text-white text-sm font-bold">
            <span>OUSL_SE_HONOURS</span>
            <span className="text-[#00f7ff]">ACTIVE</span>
          </div>
          <div className="w-full bg-gray-800 h-1 mt-1">
            <div className="bg-[#00f7ff] w-[65%] h-full"></div>
          </div>
        </div>

        <div className="border-l-2 border-[#915eff] pl-4 mb-6">
          <p className="text-[#915eff] font-mono text-xs mb-1">FRONTEND.CORE</p>
          <div className="flex justify-between text-white text-sm font-bold">
            <span>REACT_NODE_TAILWIND</span>
            <span>OPTIMIZED</span>
          </div>
          <div className="w-full bg-gray-800 h-1 mt-1">
            <div className="bg-[#915eff] w-[90%] h-full"></div>
          </div>
        </div>

        <div className="border-l-2 border-[#00f7ff] pl-4">
          <p className="text-[#00f7ff] font-mono text-xs mb-1">BACKEND.SYS</p>
          <div className="flex justify-between text-white text-sm font-bold">
            <span>JAVA_HIBERNATE_SQL</span>
            <span>SYNCED</span>
          </div>
          <div className="w-full bg-gray-800 h-1 mt-1">
            <div className="bg-[#00f7ff] w-[85%] h-full"></div>
          </div>
        </div>
      </div>

      {/* === RIGHT HUD: LIVE PROJECT TERMINAL (WITH EASTER EGG) === */}
      {/* Added the 'group' class to the main container to detect the hover state */}
      <div className="hidden lg:block absolute right-8 top-1/4 z-10 w-[350px] bg-black/40 border border-[#00f7ff]/30 p-4 rounded-md backdrop-blur-sm shadow-[0_0_15px_rgba(0,247,255,0.1)] group transition-all duration-500 hover:border-[#915eff]/60 hover:shadow-[0_0_25px_rgba(145,94,255,0.2)]">
        {/* Terminal Header Dots */}
        <div className="flex gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>

        {/* Terminal Body */}
        <div className="font-mono text-[11px] text-gray-400 leading-relaxed cursor-default">
          <p>
            <span className="text-green-400">naveen@naveen-Inspiron-3543</span>
            :~/portfolio$ ./run_profile.sh
          </p>
          <p className="text-gray-500 mt-2">
            [SYSTEM] Verifying student ID: s22010122...
          </p>
          <p className="text-[#915eff]">
            [OK] Booting "Study Mate" Core Modules...
          </p>
          <p className="text-[#915eff]">
            [OK] Initializing Service Workers Mobile App...
          </p>

          <p className="text-[#00f7ff]">
            [OK] Broadcasting "ICT with Naveen" YT Data...
          </p>

          {/* THE EASTER EGG SECTION */}
          {/* This text is completely invisible (opacity-0) until the user hovers over the terminal box */}
          <div className="opacity-0 h-0 overflow-hidden group-hover:opacity-100 group-hover:h-auto transition-all duration-700 ease-in-out mt-2 border-t border-gray-700/50 pt-2">
            <p className="text-red-400 font-bold animate-pulse">
              [WARNING] drivers unstable... bypassing protocol.
            </p>
            <p className="text-yellow-400">
              [ROOT_ACCESS] Rerouting server ping through ...
            </p>
            <p className="text-green-400">[SUCCESS] easter eggs found.</p>
          </div>

          <p className="text-[#00f7ff] animate-pulse mt-3">
            &gt; All systems stable. Ready for input_
          </p>
        </div>
      </div>

      {/* 3D CANVAS */}
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
        <color attach="background" args={["#000000"]} />
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#00f7ff" />
          <pointLight
            position={[-10, -10, -10]}
            intensity={2}
            color="#915eff"
          />

          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          <group position={[0, -3, 0]}>
            <SkillHelix skills={technologies} />
          </group>

          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Tech;
